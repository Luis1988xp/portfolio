# React App

Este projeto consiste em uma aplicação React que explora diversos conceitos fundamentais, como componentes, hooks, estado e efeitos colaterais. Além disso, oferece interatividade avançada com botões, manipulação de DOM com `useRef` e navegação dinâmica.

## Estrutura do Projeto

### Componentes Principais

- **Header:**

  - Representa o cabeçalho da aplicação, contendo uma barra de navegação simples.

- **Button:**

  - Componente reutilizável que renderiza botões estilizados, permitindo controle de estados como `active` e eventos `onClick`.

- **App:**
  - Componente principal que gerencia estados, eventos e interatividade, compondo a estrutura central da aplicação.

## Funcionalidades

### 1. Navegação no Cabeçalho

- Exibe uma barra de navegação com os itens "Nome", "Fotos" e "Contato".
- Possibilidade de expansão para incluir mais seções.

### 2. Botões Interativos

- Configuração dinâmica para alternar entre diferentes estados (habilitado/desabilitado).
- Suporte para eventos personalizados.

### 3. Gerenciamento de Estado

- **`useState`** para:
  - Controlar carregamento da página (`carregando`).
  - Gerenciar valores de contadores (`contador`).
- **`useEffect`** para executar ações quando os estados são modificados.

### 4. Manipulação de DOM

- Uso do **`useRef`** para controle de elementos, como vídeos e interações específicas.
- Exemplo: acessar o método `play()` de um vídeo embutido na página.

### 5. Estilização

- Utilização de **arquivos CSS** dedicados para cada componente.
- Classes CSS como `.header`, `.button` e `.disabledButton` para personalizar layout e interatividade.

## Tecnologias Utilizadas

- **React:** Biblioteca principal para construção da interface.
- **CSS:** Estilização modular para componentes reutilizáveis.
- **JavaScript (ES6+):** Implementação de lógica interativa e manipulação de estados.

## Instalação e Execução

1. Clone o repositório:
   ```bash
   git clone <URL_DO_REPOSITORIO>
   ```
2. Acesse o diretório do projeto:
   ```bash
   cd <nome-do-diretorio>
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```
4. Inicie o servidor de desenvolvimento:
   ```bash
   npm start
   ```
5. Acesse a aplicação no navegador:
   - [http://localhost:3000](http://localhost:3000)

## Organização dos Arquivos

```
├── src
│   ├── components
│   │   ├── button
│   │   │   ├── button.js
│   │   │   └── button.css
│   │   ├── header
│   │   │   ├── header.js
│   │   │   └── header.css
│   ├── App.js
│   ├── App.css
│   └── index.js
├── public
│   └── index.html
└── package.json
```

## Melhorias Futuras

- **Adicionar Rotas:** Implementação do React Router para navegação entre diferentes páginas.
- **Testes Automatizados:** Uso de Jest e React Testing Library para garantir estabilidade do código.
- **Acessibilidade:** Melhorar a usabilidade para usuários com deficiência, adicionando atributos ARIA.
- **Design Responsivo:** Adaptação para telas de dispositivos móveis, tornando a interface mais flexível.
