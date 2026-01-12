# Primeiras Magias na Linguagem dos Dados: O curso do Téo Me Why!

Neste semestre vou começar a matéria de Design e Desenvolvimento de Banco de Dados na faculdade. Para me preparar, decidi dar uma lida no material didático principal, o livro [*Introdução a Sistemas de Bancos de Dados*](https://www.amazon.com.br/Introdu%C3%A7%C3%A3o-Sistemas-Bancos-Dados-Date/dp/8535212736) de C. J. Date, e procurei por cursos introdutórios de SQL. Mesmo já tendo feito uma introdução no CWI Crescer, queria garantir uma base sólida para as aulas. Por indicação, cheguei ao curso gratuito de SQL do Téo Calvo (Téo Me Why) no YouTube.

<div class="ratio ratio-16x9 my-5 shadow-lg rounded overflow-hidden">
    <iframe src="https://www.youtube.com/embed/videoseries?list=PLvlkVRRKOYFRo651oD0JptVqfQGDvMi3j" title="Curso SQL Téo Me Why" allowfullscreen></iframe>
</div>

O curso é muito bom. O Téo tem uma ótima didática e ensina a lógica, a modelagem e a curiosidade de explorar os dados. No curso usamos SQLite, mas na UNIFIO, até onde sei, vamos usar MySQL. Vai ser interessante ver quais serão as diferenças práticas entre os dois no dia a dia.

---

## Além dos Exemplos de Prateleira

Um grande diferencial desse curso é o uso de um banco de dados real. Em vez de tabelas genéricas de "cliente" e "produto" sem vida, trabalhamos com dados reais das lives e da comunidade do Téo, consolidados no dataset [TeoMeWhy Loyalty System](https://www.kaggle.com/datasets/teocalvo/teomewhy-loyalty-system), disponível no Kaggle. 

Ter que lidar com dados que possuem contexto e volume real ajuda muito a entender por que certas queries precisam ser feitas de determinada forma.

---

## SQL como Ferramenta de Decisão

Uma coisa que o Téo bate muito na tecla é que SQL não é sobre decorar comandos, mas sobre responder perguntas de negócio. O dataset do *Loyalty System* simula um programa de fidelidade real, com tabelas de transações, pontos e recompensas.

Em vez de apenas "aprender a sintaxe", o desafio era entender o cenário: quem são os clientes que mais ganham pontos ou quais recompensas são as mais desejadas. Essa mentalidade de usar o dado para entender um comportamento é exatamente o que um desenvolvedor backend precisa ter ao construir regras de negócio no código.

Além disso, o curso foca muito em **granularidade** — entender o que cada linha da sua tabela representa. Isso parece bobagem, mas é o que evita que você duplique dados ou gere relatórios errados no futuro.

---

## Escolha de Ferramentas: VS Code vs IntelliJ

No curso, o Téo utiliza o VS Code com a extensão de SQLite. É uma configuração leve, mas como meu habitat natural é o IntelliJ IDEA por causa do Java, decidi testar as ferramentas de banco de dados nativas da JetBrains.

O suporte a SQL no IntelliJ é excelente. Ter o console de query, a visualização das tabelas e o autocomplete no mesmo lugar onde escrevo meu código Java facilita muito o fluxo.

![Meu setup no IntelliJ usando SQLite](2026/01/12/primeiras-magias-sql/assets/image.png)
*(Legenda: Explorando as tabelas e rodando queries diretamente no IntelliJ IDEA)*

---

## Aprendizado e Prática

A didática do Téo é realmente diferenciada. Ele consegue explicar conceitos complexos de um jeito que você entende praticamente tudo de primeira.

Claro que nem tudo é instantâneo. Confesso que ainda dou uma tropeçada ou outra nos JOIN e também me confundo um pouco com a lógica dos GROUP BY. Às vezes a ordem das tabelas ou como agrupar os resultados dá um nó na cabeça, mas nada que a prática e o terminal de query não resolvam.

Por exemplo, olha essa query que montamos para descobrir qual mês teve mais assinaturas de lista de presença:

```sql
-- Qual mês tivemos mais lista de presença assinada?

SELECT  substr(t1.DtCriacao, 1, 7) AS anoMes,
        count(distinct t1.IdTransacao) AS qtdeTransacao
        
FROM transacoes AS t1

LEFT JOIN transacao_produto AS t2
ON t1.IdTransacao = t2.IdTransacao

LEFT JOIN produtos AS t3
ON t2.IdProduto = t3.IdProduto

WHERE t3.DescDescricaoProduto = 'Lista de presença'

GROUP BY substr(t1.DtCriacao, 1, 7)
ORDER BY qtdeTransacao DESC
```

---

## Subindo o nível com Window Functions

Depois de dominar os joins e agregações básicas, comecei a explorar as **Window Functions**. Elas são ferramentas poderosas para análises que dependem da ordem ou de "olhar" para a linha anterior ou posterior sem precisar de subqueries complexas.

Um exemplo legal foi usar a função `lag()` para calcular o tempo médio entre as transações de cada cliente em 2025. A lógica foi extrair o dia, pegar a data da compra anterior com o `lag` e calcular a diferença de dias.

```sql
WITH cliente_dia AS (
    SELECT DISTINCT IdCliente,
                    substr(DtCriacao,1,10) AS dtDia
    FROM transacoes
    WHERE substr(DtCriacao,1,4) = '2025'
    ORDER BY IdCliente, dtDia
),
tb_lag AS (
    SELECT *,
           lag(dtDia) OVER (PARTITION BY IdCliente ORDER BY dtDia) AS lagDia
    FROM cliente_dia
),
tb_diff_dt AS (
    SELECT *,
           julianday(dtDia) - julianday(lagDia) AS DtDiff
    FROM tb_lag
),
avg_cliente AS (
    SELECT IdCliente,
           avg(DtDiff) AS avgDia
    FROM tb_diff_dt
    GROUP BY IdCliente
)
SELECT avg(avgDia)
FROM avg_cliente
```

---

## Material de Apoio (Slides)

Para acompanhar as magias, aqui está a apresentação oficial do curso. Você pode navegar pelos slides diretamente aqui:

<div class="ratio ratio-16x9 my-5 shadow-lg rounded overflow-hidden">
    <iframe src="https://docs.google.com/presentation/d/1eDEYXim51tBJcIkkeJ_HZtQO6o45xxEQx0lsmbBcDS0/embed?start=false&loop=false&delayms=3000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
</div>

---

## Meu Repositório de Magias

Todo o meu progresso, resoluções de desafios e as anotações que fiz estão documentados no meu GitHub:

<div class="text-center my-4">
    <a href="https://github.com/rafaeldiasgarcia/primeiras-magias-na-linguagem-dos-dados" target="_blank" class="btn btn-outline-dark btn-lg px-5 shadow-sm">
        <i class="fab fa-github me-2"></i> Ver Minhas Resoluções
    </a>
</div>
