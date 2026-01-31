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

## Performance: O Pequeno Delay da Primeira Execução

Uma peculiaridade que notei logo de cara foi o tempo de compilação. Na primeira vez que você roda o código, há uma pequena demora. Depois disso, as execuções subsequentes são praticamente instantâneas. 

Acredito que isso aconteça por conta do processo de compilação e cache do Go, mas como estou usando o GoLand, não sei se é uma característica da IDE ou do próprio compilador. Pretendo testar diretamente no terminal (cmd) para confirmar esse comportamento.

Para quem está acostumado com linguagens interpretadas como Python, esse delay inicial pode causar estranheza. Mas a compensação vem na performance em tempo de execução — Go é extremamente rápido.

---

## Formatação Automática: Um Caso de Amor e Ódio

Uma característica marcante do Go é a formatação automática do código através da ferramenta `gofmt`. O problema? Ela tem regras próprias de identação e espaçamento que nem sempre batem com minha preferência pessoal.

Veja este exemplo de conversão de temperatura que escrevi:

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

O problema é que, na minha opinião de leigo, isso não é tão intuitivo. Gostaria de ter o poder de deixar o código formatado como me agrada mais, com espaçamento uniforme para facilitar a leitura. Como sou iniciante na linguagem, posso estar perdendo algum contexto importante, mas essa foi minha primeira impressão.

**Reflexão importante:** A comunidade Go valoriza muito o código padronizado. Toda a base de código Go no mundo segue o mesmo estilo graças ao `gofmt`. Isso facilita a colaboração em equipe, mas exige que você abra mão de algumas preferências pessoais.

---

## Conteúdo do Curso

O curso do Téo cobre uma gama completa de tópicos, desde o básico até concorrência (um dos grandes diferenciais do Go). Confira a apresentação completa com exemplos de código e exercícios:

<div class="ratio ratio-16x9 my-5 shadow-lg rounded overflow-hidden">
    <iframe src="https://docs.google.com/presentation/d/1A853kcKhvdhTrXK72xlufd5-wSVjg743HO0T1cuuvuc/embed?start=false&loop=false&delayms=3000" frameborder="0" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
</div>

---

## Por Que Vale a Pena Aprender Go?

Mesmo com minhas ressalvas iniciais sobre formatação, Go é uma linguagem que vale muito a pena. Aqui estão os pontos que me convenceram:

1. **Simplicidade Real:** A linguagem foi projetada para ser fácil de aprender e manter.
2. **Performance de Baixo Nível:** Comparável a C, mas sem a complexidade de gerenciamento manual de memória.
3. **Concorrência Nativa:** Goroutines tornam a programação concorrente acessível e eficiente.
4. **Demanda de Mercado:** Empresas como Google, Uber, Docker e Kubernetes confiam em Go para suas infraestruturas críticas.
5. **Compilação Estática:** Um único binário, sem dependências externas, facilita o deploy.

---

## Conclusão

Minha jornada com Go está apenas começando, mas já deu para perceber o potencial da linguagem. A curva de aprendizado é suave, especialmente se você já tem experiência com outras linguagens, e o ecossistema é sólido e bem documentado.

O curso do Téo é um excelente ponto de partida. Se você quer explorar uma linguagem moderna, performática e com demanda crescente no mercado, Go é uma boa aposta.

<div class="text-center my-5">
    <a href="https://github.com/rafaeldiasgarcia/curso-go-ds" target="_blank" class="btn btn-outline-dark btn-lg px-5 shadow-sm">
        <i class="fab fa-github me-2"></i> Ver Repositório no GitHub
    </a>
</div>

*"Simplicidade é o último grau de sofisticação."* — **Leonardo da Vinci**
