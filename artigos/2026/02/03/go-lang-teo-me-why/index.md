Quando comecei o curso de Go do Téo, tinha uma expectativa clara: entender o que torna essa linguagem tão popular no mundo de sistemas distribuídos e infraestrutura. O que encontrei foi algo surpreendente — uma linguagem que parece fundir o melhor de dois mundos: a simplicidade e legibilidade do Python com a performance e sintaxe familiar do C.

<div class="ratio ratio-16x9 my-5 shadow-lg rounded overflow-hidden">
    <iframe src="https://www.youtube.com/embed/videoseries?list=PLvlkVRRKOYFSV2F2JT2Ijd5_B461pl5yE" title="Curso Go - Téo Me Why" allowfullscreen></iframe>
</div>

O Téo, como sempre, traz uma abordagem didática diferenciada. Sendo um Cientista de Dados, ele ensina Go não apenas como mais uma linguagem de programação, mas como uma ferramenta prática para resolver problemas reais. O curso é completamente gratuito e disponível no YouTube, perfeito para quem quer dar os primeiros passos na linguagem.

---

## Primeiras Impressões: O Melhor de Dois Mundos

A primeira coisa que me chamou atenção no Go foi a sensação de estar trabalhando com uma versão "turbinada" do Python. A sintaxe é limpa, direta ao ponto, sem a verbosidade de linguagens como Java. Ao mesmo tempo, a estrutura do código e a forma de escrever me lembraram muito o C — e isso, para mim, foi um ponto super positivo.

Veja um exemplo simples de "Hello World" em Go:

```go
package main

import "fmt"

func main() {
    fmt.Println("Hello, World!")
}
```

Simples, direto e eficiente. Não há necessidade de classes desnecessárias ou boilerplate excessivo.

---

## Curva de Aprendizado

Como alguém que programa principalmente em Java, a transição para Go foi surpreendentemente suave. A sintaxe limpa e a ausência de "magia" nos bastidores facilitam muito o entendimento do que está acontecendo. O curso do Téo tem cerca de 14 módulos, e consegui completar em aproximadamente duas semanas dedicando algumas horas por dia.

O que mais me ajudou foi a filosofia do Go de "uma maneira certa de fazer as coisas". Diferente do Java, onde existem múltiplas abordagens para o mesmo problema, Go é mais opinativo e direto. Isso pode incomodar alguns, mas para iniciantes é libertador — você não fica paralisado tentando decidir qual caminho seguir.

Os conceitos que exigiram mais atenção foram:

- **Ponteiros:** Embora mais simples que em C, ainda requerem compreensão de quando usar `&` (endereço) e `*` (valor)
- **Interfaces:** A forma implícita como funcionam é diferente do Java, onde você declara explicitamente
- **Goroutines e Canais:** Conceito novo, mas muito bem explicado pelo Téo

No geral, se você já programa em qualquer linguagem, Go é acessível. Se está começando do zero, é uma excelente primeira linguagem por ser explícita e direta.

---

## Performance: O Pequeno Delay da Primeira Execução

Uma peculiaridade que notei logo de cara foi o tempo de compilação. Na primeira vez que você roda o código, há uma pequena demora. Depois disso, as execuções subsequentes são praticamente instantâneas. 

Acredito que isso aconteça por conta do processo de compilação e cache do Go, mas como estou usando o GoLand, não sei se é uma característica da IDE ou do próprio compilador. Pretendo testar diretamente no terminal (cmd) para confirmar esse comportamento.

Para quem está acostumado com linguagens interpretadas como Python, esse delay inicial pode causar estranheza. Mas a compensação vem na performance em tempo de execução — Go é extremamente rápido.

---

## Structs: Orientação a Objetos sem Classes

Uma das características mais interessantes do Go é como ele lida com organização de código. Não existem classes no sentido tradicional, mas você tem **structs** (estruturas) que podem ter métodos associados.

Veja este exemplo de tipos personalizados:

```go
type Altura float64 
type Peso float64   

type Celsius float64
type Fahrenheit float64

func IMC(h Altura, p Peso) float64 {
	return float64(p) / float64(h*h)
}

func CtoF(c Celsius) Fahrenheit {
	return Fahrenheit(float64(c)*9.0/5.0 + 32.0)
}
```

Aqui criamos tipos personalizados baseados em `float64`. Isso traz segurança: você não pode acidentalmente passar um `Celsius` onde se espera um `Fahrenheit` — o compilador vai reclamar.

Para quem está acostumado com linguagens orientadas a objetos tradicionais, onde tudo é classe e herança, a abordagem do Go de **composição sobre herança** é diferente. Você monta estruturas complexas combinando structs simples, e interfaces definem comportamentos de forma implícita. É mais flexível e menos acoplado.

---

## Formatação Automática: Um Caso de Amor e Ódio

Uma característica marcante do Go é a formatação automática do código através da ferramenta `gofmt`. O problema? Ela tem regras próprias de identação e espaçamento que nem sempre batem com minha preferência pessoal.

Voltando ao exemplo de conversão de temperatura que mostrei antes, repare nos tipos personalizados:

```go
package main

import "fmt"

type Altura float64 
type Peso float64   

type Celsius float64
type Fahrenheit float64

func IMC(h Altura, p Peso) float64 {
	return float64(p) / float64(h*h)
}

func CtoF(c Celsius) Fahrenheit {
	return Fahrenheit(float64(c)*9.0/5.0 + 32.0) // aqui!
}

func main() {

	alturaTeo := Altura(1.80)
	pesoTeo := Peso(70.34)

	res := float64(alturaTeo) + float64(pesoTeo)
	fmt.Println("altura + peso =", res)

	imc := IMC(alturaTeo, pesoTeo)
	fmt.Printf("IMC do Téo: %f\n", imc)

	c := Celsius(30)

	fNew := CtoF(c)
	fmt.Printf("%f C = %f F", c, fNew)

}
```

Repare na linha 16, no cálculo de conversão de Celsius para Fahrenheit: `float64(c)*9.0/5.0 + 32.0`. O `gofmt` junta a multiplicação e divisão sem espaços (`c*9.0/5.0`), mas separa o operador de adição (` + 32.0`). Aparentemente, a ferramenta faz isso para demonstrar visualmente a precedência de operadores — multiplicação e divisão acontecem primeiro, depois a adição.

Para comparar, veja este outro exemplo de um verificador de média:

```go
package main

import "fmt"

func main() {
    fmt.Println("=== Verificador de Média ===")
    fmt.Println("Digite as 3 notas:")

    var nota1, nota2, nota3 float64

    fmt.Print("Nota 1: ")
    fmt.Scanf("%f", &nota1)

    fmt.Print("Nota 2: ")
    fmt.Scanf("%f", &nota2)

    fmt.Print("Nota 3: ")
    fmt.Scanf("%f", &nota3)

    media := (nota1 + nota2 + nota3) / 3 // aqui!

    fmt.Printf("\nMédia: %.2f\n", media)

    if media >= 6.0 {
        fmt.Println("Aprovado! Parabéns!")
    } else {
        fmt.Printf("Reprovado. Faltaram %.2f pontos.\n", 6.0-media) // aqui!
    }
}
```

Aqui a inconsistência fica ainda mais evidente. Na linha 20, o `gofmt` mantém o operador de divisão separado: `(nota1 + nota2 + nota3) / 3`. Mas no `else` (linha 27), ele junta tudo: `6.0-media`, sem nenhum espaço. 

Não consigo identificar uma lógica clara para quando o formatador mantém ou remove os espaços, também nsem fui atrás. O problema é que, na minha opinião de leigo, isso não é tão intuitivo. Gostaria de ter o poder de deixar o código formatado como me agrada mais, com espaçamento uniforme para facilitar a leitura. Como sou iniciante na linguagem, posso estar perdendo algum contexto importante, mas essa foi minha primeira impressão.

**Reflexão importante:** Aparentemente a comunidade Go valoriza muito o código padronizado. Toda a base de código Go no mundo segue o mesmo 
estilo graças ao `gofmt`. Isso facilita a colaboração em equipe, mas exige que você abra mão de algumas preferências pessoais.

---

## Gerenciamento de Erros: Explícito e Direto

Go não tem `try/catch` ou exceções no sentido tradicional. Em vez disso, funções que podem falhar retornam múltiplos valores, sendo o último geralmente um `error`.

```go
func dividir(a, b float64) (float64, error) {
    if b == 0 {
        return 0, fmt.Errorf("divisão por zero")
    }
    return a / b, nil
}

// Usando a função
resultado, err := dividir(10, 0)
if err != nil {
    log.Println("Erro:", err)
    return
}
fmt.Println("Resultado:", resultado)
```

Inicialmente, parece verboso — você fica checando `if err != nil` o tempo todo. Mas há uma vantagem: **você é forçado a pensar sobre erros no momento em que escreve o código**, não como algo opcional que você pode "tratar depois".

Comparado com exceções que podem surgir em qualquer lugar e você precisa rastrear a stack trace, o modelo do Go é mais previsível. Você sabe exatamente quais funções podem falhar só olhando a assinatura delas.

---

## Goroutines: O Grande Diferencial

A parte mais impressionante do curso foi, sem dúvida, o módulo de concorrência. Goroutines são threads leves gerenciadas pelo runtime do Go, e a facilidade de uso delas é surpreendente. Basta adicionar a palavra `go` antes de uma função e ela roda em paralelo.

Veja este exemplo simples mas didático de um padrão rítmico "Tum Tá":

```go
package main

import (
	"fmt"
	"log"
	"time"
)

func toque(txt string, t int) {
	for {
		log.Println(txt)
		time.Sleep(time.Second * time.Duration(t))
	}
}

func main() {
	go toque("Tum", 1)
	go toque("Tá", 2)
	
	stop := ""
	fmt.Scanf("%s", &stop)
}
```

Aqui temos duas goroutines rodando simultaneamente: uma imprime "Tum" a cada 1 segundo, outra imprime "Tá" a cada 2 segundos. É uma forma muito elegante de criar comportamentos paralelos sem complicação.

### Canais: Comunicação Entre Goroutines

Goroutines sozinhas são poderosas, mas para comunicação entre elas, Go oferece os **channels** (canais). Eles funcionam como tubos por onde você passa dados de uma goroutine para outra de forma segura.

Um exemplo mais avançado usando canais com buffer e sincronização:

```go
package main

import (
	"fmt"
	"log"
	"sync"
	"time"
)

func pinger(c chan string, wg *sync.WaitGroup) {
	defer wg.Done()
	for i := 1; i <= 20; i++ {
		c <- "ping!"
		log.Println("Mensagem enviada! (ping)")
	}
	fmt.Println("Envio de Pinger Finalizado!!")
}

func ponger(c chan string, wg *sync.WaitGroup) {
	defer wg.Done()
	for i := 1; i <= 20; i++ {
		c <- "pong!"
		log.Println("Mensagem enviada! (pong)")
	}
	fmt.Println("Envio de Ponger Finalizado!!")
}

func printer(c chan string, wg *sync.WaitGroup) {
	defer wg.Done()
	for msg := range c {
		log.Println("Mensagem recebida!", msg)
		time.Sleep(time.Millisecond * 250)
	}
	log.Println("Todas mensagens retiradas do canal!")
}

func main() {
	wgSenders := sync.WaitGroup{}
	canal := make(chan string, 40) // canal com buffer de 40
	
	wgPrinter := sync.WaitGroup{}
	wgPrinter.Add(1)
	go printer(canal, &wgPrinter)
	
	wgSenders.Add(1)
	go pinger(canal, &wgSenders)
	
	wgSenders.Add(1)
	go ponger(canal, &wgSenders)
	
	wgSenders.Wait()
	close(canal)
	wgPrinter.Wait()
}
```

Este exemplo implementa o padrão **producer-consumer**: duas goroutines (pinger e ponger) produzem mensagens e uma terceira (printer) as consome. O `sync.WaitGroup` garante que o programa só termina quando todas as goroutines finalizam seu trabalho.

O conceito de canais com buffer é interessante: o canal pode armazenar até 40 mensagens antes de bloquear. Isso permite que os produtores trabalhem mais rápido que o consumidor sem travar.

---

## Tooling e Ecossistema

Uma surpresa positiva foi a qualidade das ferramentas que acompanham o Go. Tudo que você precisa já vem na instalação padrão:

- **`go mod`:** Gerenciamento de dependências moderno e simples
- **`go test`:** Framework de testes integrado, sem precisar instalar JUnit ou similar
- **`go build`:** Compilação rápida que gera um único binário executável
- **`gofmt`:** Formatação automática (que eu tanto critiquei, mas reconheço a utilidade)
- **`go doc`:** Documentação integrada e acessível via terminal

A compilação é incrivelmente rápida. Projetos que levariam minutos para compilar em Java compilam em segundos no Go. E o resultado é um único arquivo executável sem dependências — você copia e roda em qualquer servidor. Nada de `java -jar` com classpath ou configuração de runtime.

O ecossistema de bibliotecas também é maduro. Para tarefas comuns (web servers, banco de dados, APIs REST), a biblioteca padrão já resolve a maior parte. Quando você precisa de algo externo, o `go get` instala de forma simples e previsível.

---

## Go vs Java vs Python: Quando Usar Cada Um?

Depois de explorar Go, comecei a pensar em cenários práticos onde usaria cada linguagem. Como ainda estou aprendendo, essas são impressões baseadas no que vi até agora:

**Go parece ideal para:**
- Microserviços e APIs RESTful onde performance é importante
- Ferramentas CLI (command line) que você quer distribuir facilmente como um único arquivo
- Sistemas que precisam lidar com muitas operações simultâneas (concorrência)
- Quando você precisa de algo rápido mas não quer a complexidade de C

**Java, pelo que vejo no estágio, é forte em:**
- Sistemas corporativos grandes e complexos
- Projetos onde você tem uma equipe grande trabalhando junto
- Aplicações enterprise com Spring Boot, que tem muito suporte e documentação
- Quando você precisa integrar com sistemas antigos que já são Java

**Python parece continuar sendo melhor para:**
- Ciência de dados, machine learning e análise estatística (tem muito mais bibliotecas que Go)
- Scripts rápidos e automação do dia a dia
- Quando você quer testar uma ideia rapidamente
- Processamento e análise de dados em geral

Aparentemente, Go é forte em sistemas que precisam de performance e concorrência, mas Python ainda domina completamente quando o assunto é trabalhar com dados e estatística. Go pode ser rápido, mas não tem o ecossistema maduro de bibliotecas como pandas, numpy, scikit-learn que Python oferece.

Minha impressão pessoal: **Go parece ser a linguagem que eu gostaria de usar para construir sistemas novos do zero**, especialmente APIs e serviços. Java continua sendo o que uso no estágio. Python seria minha escolha se eu fosse trabalhar com dados ou precisasse automatizar algo rapidamente.

---

## Por Que Vale a Pena Aprender Go?

Mesmo com minhas ressalvas iniciais sobre formatação, Go é uma linguagem que vale muito a pena. Aqui estão os pontos que me convenceram:

1. **Simplicidade Real:** A linguagem foi projetada para ser fácil de aprender e manter.
2. **Performance de Baixo Nível:** Comparável a C, mas sem a complexidade de gerenciamento manual de memória.
3. **Concorrência Nativa:** Goroutines tornam a programação concorrente acessível e eficiente.
4. **Demanda de Mercado:** Empresas como Google, Uber, Docker e Kubernetes confiam em Go para suas infraestruturas críticas.
5. **Compilação Estática:** Um único binário, sem dependências externas, facilita o deploy.

---

## Conteúdo do Curso

O curso do Téo cobre uma gama completa de tópicos, desde o básico até concorrência (um dos grandes diferenciais do Go). Confira a apresentação completa com exemplos de código e exercícios:

<div class="ratio ratio-16x9 my-5 shadow-lg rounded overflow-hidden">
    <iframe src="https://docs.google.com/presentation/d/1A853kcKhvdhTrXK72xlufd5-wSVjg743HO0T1cuuvuc/embed?start=false&loop=false&delayms=3000" frameborder="0" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
</div>

Todo o material oficial do curso está disponível no [repositório do Téo no GitHub](https://github.com/TeoMeWhy/curso-go-ds).

---

## Conclusão

Concluir o curso de Go do Téo Me Why foi uma experiência que superou minhas expectativas. O que começou como curiosidade sobre "mais uma linguagem" se transformou em genuíno interesse por incorporar Go em projetos futuros.

A linguagem tem suas peculiaridades — a formatação automática que não me agrada totalmente, a ausência de genéricos robustos (embora tenha sido adicionado em versões recentes), e o gerenciamento de erros que pode parecer repetitivo. Mas esses são detalhes diante do que Go entrega: **simplicidade, performance e ferramentas excelentes prontas para usar**.

Para quem está começando em desenvolvimento, Go é uma escolha sólida. Você aprende conceitos fundamentais sem se perder em complexidade desnecessária. Para quem já programa, é uma adição valiosa ao arsenal — especialmente se você trabalha ou quer trabalhar com sistemas distribuídos, DevOps ou infraestrutura.

Vou continuar praticando e, honestamente, procurando oportunidades de usar Go em projetos pessoais. A sensação de compilar um programa e ter um único binário pronto para distribuir é libertadora. A facilidade de escrever código concorrente com goroutines abre portas para problemas que seriam complexos em outras linguagens.

Como desafio final do curso, implementei um [simulador de álbum de figurinhas](https://github.com/rafaeldiasgarcia/figurinhas_go) que calcula quantos pacotes são necessários em média para completar um álbum. O projeto usa goroutines e canais para processar milhares de simulações em paralelo — algo que seria bem mais complicado em outras linguagens.

**Vale a pena aprender Go em 2026?** Minha resposta, após este curso, é um sim convicto. Especialmente se você curte a ideia de escrever código limpo, performático e que "simplesmente funciona" sem magia nos bastidores.

O curso do Téo é gratuito, didático e vai direto ao ponto. Se você tem curiosidade, não tem desculpa para não experimentar.

<div class="text-center my-5">
    <a href="https://github.com/rafaeldiasgarcia/curso-go-ds" target="_blank" class="btn btn-outline-dark btn-lg px-5 shadow-sm">
        <i class="fab fa-github me-2"></i> Ver Repositório no GitHub
    </a>
</div>

*"Simplicidade é o último grau de sofisticação."* — **Leonardo da Vinci**
