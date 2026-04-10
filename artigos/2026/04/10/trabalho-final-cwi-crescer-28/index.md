O **CWI Crescer 28** chegou ao fim com um trabalho que chamamos internamente de TCC: cada grupo recebeu um briefing de produto e teve pouco mais de duas semanas para entregar uma aplicação funcional do zero. Meu grupo — eu, Mateus, Fabrício, Júlia e João — ficou com a frente de finanças para PJ. Eu e o Mateus atuamos como QAs; os outros três como devs.

O resultado foi o **DEFI Finances**: uma POC de assistente inteligente de fluxo de caixa. Esse artigo não é sobre a aplicação em si, mas sobre o que eu realmente fiz no projeto — a estratégia de qualidade e a automação de testes.

> O código é propriedade da CWI e pertence a um cliente real. Por isso não posso disponibilizá-lo publicamente. Os trechos que aparecem aqui estão mascarados para ilustrar os padrões usados sem expor detalhes do produto.

---

## O produto em 30 segundos

O DEFI Finances resolve um problema concreto: gestores PJ não conseguem antecipar gargalos de caixa porque falta uma ferramenta que consolide dados históricos de forma inteligente. A solução entrega:

- gestão de transações com categorias e filtros;
- dashboard com saldo atual, receitas e despesas;
- calendário interativo para visualização por data;
- download de extrato em PDF;
- simulação de cenários financeiros (sandbox);
- projeções de saldo para 7, 15 e 30 dias;
- integração com o **Rocket**, a IA interna da CWI — um chatbot que lê o contexto financeiro do usuário e responde perguntas como "se eu fechar essa despesa na sexta, como fica meu saldo no final do mês?";
- auditoria completa de ações críticas;
- arquitetura Multi-Tenant: cada empresa vê apenas os próprios dados.

Stack: Angular 20 no frontend, Spring Boot no backend, Playwright + Postman para automação.

---

## Linha do tempo e Shift-Left Testing

Tivemos do dia 24 de março ao dia 10 de abril — cerca de duas semanas e meia. A primeira semana foi inteiramente de planejamento: mapeamos todas as User Stories no padrão *"Como [persona], quero [funcionalidade], para [valor de negócio]"*, escrevemos critérios de aceite em Gherkin e alinhamos os `data-testid` com os devs antes de qualquer linha de código ser escrita.

Esse é o conceito de **Shift-Left Testing**: a qualidade começa na concepção, não na entrega. Na prática, isso significou que quando o primeiro endpoint ficou pronto, o teste já existia. Não havia retrabalho de interpretação porque o critério de aceite era a fonte da verdade desde o começo.

---

## Arquitetura da automação

A suíte está organizada em três camadas, e cada camada tem responsabilidade exclusiva:

| Camada | Localização | Responsabilidade |
|---|---|---|
| Page Objects | `pages/` | Locators e ações de UI |
| Service Objects | `services/` | Chamadas de API e validações |
| Fixtures | `fixtures/` | Injeção de dependências e contexto de teste |

Há dois arquivos de fixture: um para testes de frontend (injeta os Page Objects) e outro para testes de API (injeta os Service Objects e fixtures de contexto como `contaAutenticada`).

Os projetos do Playwright separam claramente os dois mundos: `frontend` (Desktop Chrome, testes em `tests/frontend/`) e `api` (sem browser, testes em `tests/api/`).

---

## Page Objects: o construtor faz tudo

Uma regra que gostei muito de seguir: **todos os `locator` ficam no construtor**. Os métodos usam apenas `this.*`. Isso evita que seletores se espalhem pelo código e torna a leitura dos métodos limpa.

```js
export class [Módulo]Page {
  constructor(page) {
    this.page = page;

    this.[botaoNovaEntidade]  = page.getByTestId('[módulo]-btn-adicionar');
    this.[inputBusca]         = page.getByTestId('[módulo]-input-busca');
    this.[modal]              = page.getByTestId('modal-[entidade]');
    this.[formularioInput]    = page.getByTestId('formulario-input-[campo]');
    this.[formularioBtnSalvar]= page.getByTestId('formulario-btn-salvar');
  }

  async [abrirModalNovaEntidade]() {
    await this.[botaoNovaEntidade].click();
    await expect(this.[modal]).toBeVisible();
  }

  async [preencherFormulario](dados) {
    await this.[formularioInput].fill(dados.[campo]);
  }

  async [salvarFormulario]() {
    await this.[formularioBtnSalvar].click();
    await expect(this.[modal]).toBeHidden({ timeout: 30000 });
  }
}
```

Todos os seletores são `data-testid`. Isso foi alinhado com os devs desde o planejamento — cada componente crítico recebeu um atributo exclusivo. A consequência direta é que mudanças visuais (classe CSS, estrutura HTML) não quebram os testes.

---

## Service Objects: estado interno e validações acopladas

No lado de API, a mesma filosofia: o Service Object recebe `request` no construtor e mantém `this.response` e `this.responseBody` como estado interno. As validações ficam dentro da própria classe, o que faz os testes lerem quase como linguagem humana.

```js
export class [Módulo]Service {
  constructor(request) {
    this.request     = request;
    this.response     = null;
    this.responseBody = null;
  }

  async [realizarAcao](payload) {
    this.response     = await this.request.post('/[endpoint]', { data: payload });
    this.responseBody = await this.response.json().catch(() => null);
  }

  async [validarSucesso]() {
    expect(this.response.status()).toBe(201);
  }

  async [validarContratoDeResposta]() {
    expect(this.responseBody).toHaveProperty('[campo1]');
    expect(typeof this.responseBody.[campo1]).toBe('number');
    expect(this.responseBody).toHaveProperty('[campo2]');
  }

  async [validarErroConflito]() {
    expect(this.response.status()).toBe(409);
  }
}
```

O resultado é um teste que se lê de cima para baixo sem precisar abrir nenhum outro arquivo para entender o que está sendo validado:

```js
test('Realizar login com credenciais válidas', async ({ contaAutenticada, [módulo]Service }) => {
  await [módulo]Service.[realizarLogin]({ email: contaAutenticada.email, senha: contaAutenticada.senha });
  await [módulo]Service.[validarStatusLogin]();
  await [módulo]Service.[validarTokenPresente]();
  await [módulo]Service.[validarContratoDeLogin]();
  await [módulo]Service.[validarRoleDoToken]('[ROLE]');
  await [módulo]Service.[validarClaimsDeIdentificacao]();
});
```

---

## Fixtures: contexto pronto antes do teste começar

Uma das partes mais elegantes da suíte é a fixture `contaAutenticada`. Em vez de cada teste se preocupar com setup de dados, a fixture registra uma empresa nova, autentica o usuário e entrega o contexto completo já pronto:

```js
contaAutenticada: async ({ request }, use) => {
  const service = new [Modulo]Service(request);
  const conta   = [modulo]Data.[registroValido]();

  await service.[registrarEmpresaEAdministrador](conta);
  await service.[realizarLogin]({ email: conta.email, senha: conta.senha });

  await use({
    token:     service.[obterToken](),
    idEmpresa: service.[obterIdEmpresa](),
    idUsuario: service.[obterIdUsuario](),
    role:      service.[obterRole](),
    email:     conta.email,
    senha:     conta.senha,
  });
},
```

Cada teste recebe `contaAutenticada` como parâmetro e já começa com uma empresa real no banco, isolada das demais. Isso é o que garante o isolamento Multi-Tenant nos testes: cada execução opera em um tenant diferente, sem interferência.

---

## O desafio das race conditions

Um dos achados mais relevantes do ciclo veio dos testes de concorrência. O sistema permitia que duas requisições simultâneas de cadastro com o mesmo e-mail — ou o mesmo CNPJ — fossem aceitas, criando dados duplicados. Isso comprometia diretamente o isolamento Multi-Tenant.

O teste que expôs o problema usava `Promise.all` para disparar as duas requisições ao mesmo tempo:

```js
async [registrarSimultaneamente](payload1, payload2) {
  this.multiResponses = await Promise.all([
    this.request.post('/[auth]/registrar', { data: payload1 }),
    this.request.post('/[auth]/registrar', { data: payload2 })
  ]);
}

async [validarSucessoEConflitoSimultaneo]() {
  const statuses = this.multiResponses.map(res => res.status());
  expect(statuses).toContain(201);
  expect(statuses).toContain(409);
}
```

A correção veio da camada de persistência — constraints de unicidade no banco para CNPJ e e-mail — e não da aplicação. Mover a validação para o banco foi a decisão certa: garante integridade mesmo que alguma camada da aplicação seja contornada.

---

## Estratégia híbrida: nem tudo vale automatizar

Dos 175 cenários planejados, 167 foram automatizados — 95,42% de cobertura. Os 8 cenários restantes foram testados de forma manual e exploratória, e a decisão foi deliberada.

O chatbot Rocket responde de forma não-determinística: a mesma pergunta pode gerar respostas diferentes sem que nenhuma esteja errada. Automatizar isso geraria falsos negativos. Os gráficos do Angular usam bibliotecas com renderização dinâmica interna que tornaria os scripts frágeis e caros de manter num ciclo tão curto.

A lógica foi: automatize o que é estável e crítico (autenticação, transações, contratos de API, controle de acesso RBAC), teste manualmente o que é não-determinístico ou visualmente complexo.

---

## Métricas finais

| Indicador | Valor |
|---|---|
| User Stories cobertas | 14 |
| Cenários escritos | 175 |
| Cenários automatizados | 167 |
| Cobertura de automação | 95,42% |
| Bugs reportados e fechados | 11 |
| Média de cenários por US | ~13 |

<figure class="text-center my-4">
    <figcaption class="mb-2 text-muted small fw-bold">
        Suíte completa passando ao final do ciclo
    </figcaption>
    <img src="2026/04/10/trabalho-final-cwi-crescer-28/assets/testes-passando.png"
         alt="Screenshot dos testes passando no Playwright"
         class="img-fluid rounded shadow-sm">
</figure>

Os 11 bugs incluíram falhas como: validação de CNPJ ausente, acesso indevido de colaborador a endpoints administrativos, status HTTP 400 sendo retornado onde o correto era 409, e-mail não sendo tratado como case-insensitive, e a falha de concorrência descrita acima.

Todos estavam fechados ao final do ciclo.

---

## O que fica

Três meses atrás eu não sabia o que era um Page Object. Hoje consigo desenhar uma suíte do zero, discutir estratégia com devs antes do primeiro commit e encontrar bugs que a aplicação não sabia que tinha.

O Mateus foi parceiro em tudo isso — dividimos as frentes de automação, revisamos o trabalho um do outro e chegamos juntos na entrega. Esse projeto não teria a mesma qualidade sem essa parceria.

O Crescer 28 termina aqui, mas o que aprendi nessas duas semanas fica.
