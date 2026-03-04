Neste começo de 2026 estou no **Crescer Level 2** da CWI, na trilha de **Java com Spring Boot**. Como não posso mostrar o projeto oficial que estamos desenvolvendo no programa, resolvi criar um projeto paralelo só para treinar as ideias: uma **API de partituras**.

Além de ser um tema que eu realmente uso no dia a dia (música), esse projeto virou um laboratório bem honesto para praticar **camadas**, **DTOs**, **mappers**, **validators** e a forma como o Spring Boot organiza uma aplicação web moderna.

---

## Motivação: por que uma API de partituras?

Em vez de inventar uma ideia muito mirabolante, escolhi algo simples e útil:

- **Domínio enxuto**: uma única tabela `partitura`, com campos como título, autor, arranjador, BPM, tonalidade, avaliação e data de criação.
- **CRUD completo**: listar, detalhar, criar, atualizar e deletar partituras.
- **Foco na arquitetura**: mais importante do que a “regra de negócio” é **como** as camadas se conversam: `controller → service → validator/mapper → repository → banco`.

Essa API não é para produção, é para treinar as mesmas técnicas que estou usando no Crescer, mas num contexto que eu posso compartilhar publicamente.

---

## Visão geral das rotas

O coração da API é o `PatituraController`, anotado com `@RestController` e mapeado em `/partituras`:

- **GET `/partituras`**  
  Lista todas as partituras em uma versão resumida (`id`, título, autor, avaliação).

- **GET `/partituras/{id}`**  
  Detalha uma partitura específica, retornando todos os campos.

- **POST `/partituras`**  
  Cria uma nova partitura a partir de um JSON enviado no corpo da requisição.

- **PUT `/partituras/{id}`**  
  Atualiza uma partitura existente.

- **DELETE `/partituras/{id}`**  
  Apaga uma partitura pelo `id`.

Na prática, o controller faz bem pouco além de:

1. Receber a requisição HTTP.
2. Converter o corpo para um objeto de request (`AdicionarPartituraRequest` ou `AtualizarPartituraRequest`).
3. Jogar o trabalho “de verdade” para a camada de **service**.

---

## Começando do começo: o Controller

O `PatituraController` é a nossa **porta de entrada HTTP**. É aqui que a requisição HTTP vira chamada de método Java para o resto da aplicação.

Um recorte simplificado dele fica assim:

```java
@RestController
@RequestMapping("/partituras")
public class PatituraController {

    @GetMapping
    public List<ListarPartituraResponse> lista() {
        return listarPartituraService.listar();
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public void adicionar(@Valid @RequestBody AdicionarPartituraRequest request) {
        adcionarPartituraService.adicionar(request);
    }

    // GET /{id}, PUT /{id} e DELETE /{id} seguem a mesma ideia:
    // recebem os dados, delegam para o service e devolvem o status HTTP.
}
```

A ideia é bem direta:

- **Controller fala HTTP** (rota, verbo, status).
- **Service fala negócio** (o que acontece com a partitura).

---

## Service: onde a regra de negócio acontece

Os services ficam no pacote `service` e são anotados com `@Service`.  
Eles conectam o mundo HTTP (controller) com o mundo de persistência (repository + banco).

Aqui vale destacar um fluxo completo: a criação de uma partitura.

```java
@Service
public class AdcionarPartituraService {

    @Autowired
    private AdicionarPartituraValidator validator;

    @Autowired
    private ParituraRepository parituraRepository;

    public void adicionar(AdicionarPartituraRequest request) {
        validator.validar(request);
        Partitura partitura = AdicionarPartituraMapper.toEntity(request);
        parituraRepository.save(partitura);
    }
}
```

Em uma função só você enxerga o desenho inteiro da arquitetura:

- recebe um **request DTO**;
- passa por um **validator** para garantir as regras de negócio;
- usa um **mapper** para virar entidade JPA;
- chama o **repository** para salvar no banco.

Os outros services (`Listar`, `Detalhar`, `Atualizar`, `Deletar`) seguem a mesma filosofia:  
cada um resolve um pedaço específico do CRUD, sempre mantendo o controller fino e a lógica concentrada aqui.

---

## Validators: regras de negócio desacopladas

Os validators moram no pacote `validator` e são anotados com `@Component`.  
A ideia é tirar do service as verificações de consistência que podem ser reaproveitadas em outros lugares.

O exemplo mais legal é o de criação, que garante que não vou cadastrar duas partituras com o mesmo título e autor:

```java
@Component
public class AdicionarPartituraValidator {

    @Autowired
    private ParituraRepository parituraRepository;

    public void validar(AdicionarPartituraRequest request) {
        if (parituraRepository.existsByTitulo(request.getTitulo())
                && parituraRepository.existsByAutor(request.getAutor())) {
            throw new ResponseStatusException(
                HttpStatus.BAD_REQUEST,
                "já existe uma partitura com esse nome e esse autor"
            );
        }
    }
}
```

O de atualização segue a mesma linha, mas também se preocupa em não deixar duas partituras diferentes com a mesma combinação `titulo + autor`.

---

## DTOs, mappers e entidade: como os dados viajam

Em vez de expor a entidade JPA diretamente, a API usa:

- **Requests** (`AdicionarPartituraRequest`, `AtualizarPartituraRequest`) para representar o que chega no corpo da requisição.
- **Responses** (`ListarPartituraResponse`, `DetalharPartituraResponse`) para representar exatamente o que eu quero devolver para cada tela.
- **Mappers** para fazer a tradução entre DTO e entidade.

Os mappers são classes estáticas simples (`AdicionarPartituraMapper`, `AtualizarPartituraMapper`, `ListarPartituraMapper`, `DetalharPartituraMapper`), mas ajudam a manter a fronteira bem clara:  
se um dia eu quiser mudar o formato da resposta, não preciso tocar na entidade, só nos mappers.

No centro de tudo está a entidade `Partitura`, que é basicamente o espelho da tabela no banco:

```java
@Entity
public class Partitura {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String titulo;
    private String autor;
    private String arranjador;
    private Integer bpm;
    private Integer avaliacao;
    private LocalDate dataCriacao;

    @Enumerated(EnumType.STRING)
    private Tonalidade tonalidade;
}
```

O `ParituraRepository` estende `JpaRepository<Partitura, Long>` e ainda declara alguns métodos extras (`existsByTitulo`, `existsByAutor`, `existsByTituloAndAutorAndIdNot`) que os validators usam para tomar decisão.

No banco, o `schema.sql` reforça essas regras com `CHECK` e restrições de domínio, o que conversa direto com o `enum Tonalidade` no código.

---

## Diagrama de sequência: criando uma partitura

Para visualizar melhor como as camadas conversam, peguei o fluxo do `POST /partituras` e desenhei esse diagrama:

<figure class="text-center my-4">
    <figcaption class="mb-2 text-muted small fw-bold">
        Diagrama de sequência do fluxo POST /partituras
    </figcaption>
    <img src="2026/03/04/api-partituras-spring-crescer/assets/diagrama.png"
         alt="Diagrama de sequência da API de partituras"
         class="img-fluid rounded shadow-sm">
</figure>

Ele mostra o cliente chamando o controller, o controller delegando para o service, o service passando pelo validator e pelo mapper, e por fim o repository falando com o banco.

---

## Conectando com o que estou vendo no estágio e na faculdade

Esse projeto de partituras foi pensado com um domínio bem simples: **uma única tabela**, sem relacionamentos.  
Isso foi perfeito para treinar o básico de Spring Boot, JPA, validação e camadas sem me perder em detalhes.

Hoje, no estágio e nas aulas de modelagem de dados na faculdade, o jogo já subiu de nível:

- Estou trabalhando com **relações entre tabelas**, usando anotações como `@OneToMany`, `@ManyToOne` e `@ManyToMany`.
- Passamos a nos preocupar com **ciclos de dependência**, **carga preguiçosa (lazy)** e o impacto disso nas consultas.
- Começamos a usar melhor `@Component` e também transações para evitar salvar coisas incompletas ou inconsistentes no meio de uma operação mais complexa.

O legal é ver como tudo isso conversa diretamente com o que vejo na disciplina de **Modelagem de Dados** na faculdade:  
primeiro desenhando entidades e relacionamentos no papel (ou no diagrama), depois traduzindo isso para código com anotações JPA e, por fim, expondo tudo através de uma API REST organizada em camadas, como essa de partituras.

Esse projetinho simples acabou virando uma ponte entre **Crescer**, **faculdade** e **vida real** – e ainda por cima fala de música.

<p class="text-center my-4">
    <a href="https://github.com/rafaeldiasgarcia/partituras-api"
       target="_blank"
       class="text-muted small text-decoration-none article-github-link">
        <i class="fab fa-github me-1"></i> Ver código da API no GitHub
    </a>
</p>
