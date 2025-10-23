# Páginas de Demonstração - Currículo Multilíngue

Esta pasta contém páginas estáticas para cada idioma do currículo, baseadas nas traduções do `language-menu.js`.

## Páginas Disponíveis

### 🇧🇷 Português (Brasil)
- **Arquivo**: `index-pt.html`
- **Idioma**: pt-BR
- **Título**: "Rafael Dias Garcia - Curriculo"

### 🇺🇸 English (United States)
- **Arquivo**: `index-en.html`
- **Idioma**: en-US
- **Título**: "Rafael Dias Garcia - Resume"

### 🇪🇸 Español (España)
- **Arquivo**: `index-es.html`
- **Idioma**: es-ES
- **Título**: "Rafael Dias Garcia - Currículo"

### 🇩🇪 Deutsch (Deutschland)
- **Arquivo**: `index-de.html`
- **Idioma**: de-DE
- **Título**: "Rafael Dias Garcia - Lebenslauf"

## Características

- **Conteúdo Idêntico**: Cada página contém exatamente o mesmo conteúdo que seria exibido quando o usuário clica no botão de idioma correspondente
- **Botão de Download**: Cada página inclui o botão discreto de download do PDF
- **Responsivo**: Todas as páginas mantêm o design responsivo original
- **Estilos Consistentes**: Usam os mesmos arquivos CSS da página principal

## Como Usar

1. Abra qualquer uma das páginas HTML em um navegador
2. Cada página mostra o currículo completo no idioma correspondente
3. O botão de download está posicionado no canto inferior direito da "folha branca"

## Estrutura dos Arquivos

```
demos/
├── README.md          # Este arquivo
├── index-pt.html      # Página em português
├── index-en.html      # Página em inglês
├── index-es.html      # Página em espanhol
└── index-de.html      # Página em alemão
```

## Traduções Baseadas Em

Todas as traduções são baseadas no objeto `translations` do arquivo `../src/js/language-menu.js`, garantindo consistência total com o sistema de troca de idiomas da página principal.
