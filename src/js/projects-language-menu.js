// Language Menu Functionality for Projects Page
class ProjectsLanguageMenu {
    constructor() {
        this.currentLanguage = 'pt-BR';
        this.languageFlags = {
            'pt-BR': '🇧🇷',
            'en-US': '🇺🇸',
            'es-ES': '🇪🇸',
            'de-DE': '🇩🇪',
            'ja-JP': '🇯🇵'
        };
        this.translations = {
            'pt-BR': {
                'nav-resume': 'Currículo',
                'nav-projects': 'Projetos',
                'hero-title': 'Meus Projetos',
                'hero-description': 'Uma coleção dos principais projetos que desenvolvi, demonstrando minhas habilidades em diferentes tecnologias e áreas de desenvolvimento.',
                'sge-description': 'Sistema de Gerenciamento de Eventos desenvolvido para o Centro Universitário UNIFIO. Aplicação web completa para modernizar e centralizar a gestão de eventos esportivos e acadêmicos na quadra poliesportiva da instituição.',
                'llmops-description': 'Sistema de classificação de feedbacks de clientes utilizando fine-tuning de modelos de linguagem (DistilBERT). Deploy via Docker com API FastAPI. Sistema preciso, rápido e econômico para análise de sentimentos.',
                'portfolio-description': 'Site pessoal hospedado no GitHub Pages, servindo como portfólio online. Apresenta minhas habilidades, experiências, certificações e projetos desenvolvidos.',
                'cs50x-description': 'Soluções para o curso CS50x (Introduction to Computer Science) da Harvard. Inclui todos os problem sets, labs e o projeto final, demonstrando conhecimento em algoritmos, estruturas de dados e programação.',
                'bookshelf-description': 'API REST simples construída com Node.js e Express para gerenciar uma coleção de livros. Os dados são armazenados em um arquivo JSON local. Projeto focado em demonstrar conhecimento em desenvolvimento backend e arquitetura de APIs.',
                'weather-description': 'Aplicação que fornece informações meteorológicas em tempo real para diferentes localidades. Utiliza APIs de terceiros para obter dados atualizados sobre condições climáticas.',
                'btn-view-code': 'Ver Código',
                'btn-view-github': 'Ver no GitHub',
                'modal-sge-title': 'SGE - Prévia do Código',
                'modal-llmops-title': 'Classificador de Texto LLMOps - Prévia do Código',
                'modal-portfolio-title': 'Portfólio Pessoal - Prévia do Código',
                'modal-cs50x-title': 'CS50x - Prévia do Código',
                'modal-bookshelf-title': 'BookshelfAPI - Prévia do Código',
                'modal-weather-title': 'WeatherNow - Prévia do Código',
                'modal-close': 'Fechar',
                'modal-see-full-code': 'Clique aqui para ver o código completo',
                'modal-see-full-code-short': 'Código Completo',
                'cs50x-alert': '<strong>Projeto Final CS50x:</strong> Termo Clone - Jogo de palavras em português brasileiro (clone do Wordle)',
                'portfolio-alert': 'Este é o código-fonte do próprio portfólio. Você está visualizando-o agora! Para ver todos os arquivos, visite o repositório no GitHub.',
                'footer-copyright': '© 2025 Rafael Dias Garcia. Todos os direitos reservados.',
                'readme-sge': '# 🚀 SGE - Como Usar\n\n## ⚡ Início Rápido\n\n### 📋 Pré-requisitos\n- **Docker Desktop** (versão 20.10+)\n- **Git**\n- Portas livres: **80**, **3306**, **8080**\n\n---\n\n## 📦 Instalação e Inicialização\n\n### 1. Clone o Repositório\n\n```bash\ngit clone https://github.com/seu-usuario/sge.git\ncd sge\n```\n\n### 2. Inicie os Containers\n\n```bash\ndocker-compose up -d\n```\n\n**O que acontece automaticamente:**\n- ✅ Container PHP inicia na porta **80**\n- ✅ Container MySQL inicia na porta **3306**\n- ✅ Container phpMyAdmin inicia na porta **8080**\n- ✅ Composer instala dependências automaticamente via `entrypoint.sh`\n- ✅ MySQL cria a estrutura do banco de dados\n\n### 3. Popular o Banco de Dados\n\n⚠️ **IMPORTANTE:** O banco é criado vazio. Você **precisa** popular com dados de exemplo.\n\n#### Windows PowerShell:\n```powershell\nGet-Content assets/seeds/db_populate.sql | docker exec -i mysql mysql -uroot -prootpass application\n```\n\n#### Linux/Mac:\n```bash\ndocker exec -i mysql mysql -uroot -prootpass application < assets/seeds/db_populate.sql\n```\n\n### 4. Acesse a Aplicação\n\n🎉 **Pronto!** Acesse: **http://localhost**\n\n---\n\n## 🔐 Credenciais de Login\n\n### Super Admin (Acesso Total)\n```\nEmail/RA: sadmin\nSenha: sadmin\n```\n\n### Admin de Atlética\n```\nEmail: admin.atletica@sge.com\nSenha: sadmin\n```\n\n### Usuário Comum (Aluno)\n```\nEmail: aluno@sge.com\nSenha: sadmin\n```',
                'readme-llmops': '# Classificador de Texto Otimizado com LLMOps\n\nSistema de classificação de feedbacks de clientes usando fine-tuning de modelos de linguagem (DistilBERT) com deploy via Docker e API FastAPI.\n\n## 🎯 Objetivo\n\nCriar um sistema de classificação de texto que seja:\n- **Preciso**: Tão bom quanto modelos grandes para tarefa específica\n- **Rápido**: Baixa latência para respostas em tempo real\n- **Barato**: Custo por classificação muito menor que APIs comerciais\n\n## 🏗️ Arquitetura\n\n- **Modelo**: DistilBERT (fine-tuned)\n- **Framework**: PyTorch + Transformers (Hugging Face)\n- **API**: FastAPI\n- **Containerização**: Docker\n- **Linguagem**: Python 3.10+\n\n## 🚀 Como Usar\n\n### 1. Instalação Local\n\n```bash\npip install -r requirements.txt\n```\n\n### 2. Gerar Dataset de Treinamento\n\n```bash\npython src/generate_data.py\n```\n\n### 3. Treinar o Modelo\n\n```bash\npython src/train.py\n```\n\n**Tempo estimado**: 10-30 minutos (dependendo do hardware)\n\n### 4. Executar a API Localmente\n\n```bash\npython src/api.py\n```\n\nA API estará disponível em `http://localhost:8000`\n\n### 5. Testar a API\n\n```bash\ncurl -X POST "http://localhost:8000/classify" \\\n     -H "Content-Type: application/json" \\\n     -d \'{"text": "A entrega foi super rápida, chegou antes do prazo!"}\'\n```',
                'readme-cs50x': '# 💻 CS50x – Introduction to Computer Science\n\nEste repositório contém minhas soluções para os exercícios, labs e projeto final do curso **CS50x (2025)**, oferecido por Harvard University.\n\n## 📚 Conteúdo do Curso\n\n- **Week 0:** Scratch  \n- **Week 1:** C  \n- **Week 2:** Arrays  \n- **Week 3:** Algorithms  \n- **Week 4:** Memory  \n- **Week 5:** Data Structures  \n- **Week 6:** Python  \n- **Week 7:** SQL  \n- **Week 8:** HTML, CSS, JavaScript  \n- **Week 9:** Flask  \n- **Week 10:** Final Project  \n\n## 🛠️ Tecnologias Usadas\n\n- Scratch  \n- C  \n- Python  \n- SQL (SQLite)  \n- HTML, CSS, JavaScript  \n- Flask (Python)\n\n## ✅ Status\n\n✔️ Todas as semanas concluídas, incluindo o projeto final.  \n📂 Cada pasta contém os arquivos correspondentes a cada semana ou exercício.',
                'readme-bookshelf': '# BookshelfAPI 📚\n\nUma API REST simples construída com Node.js e Express para gerenciar uma coleção de livros. Este projeto serve como um exemplo básico de desenvolvimento back-end, ideal para fins de aprendizado e portfólio. Os dados são armazenados em um arquivo JSON local (`data/books.json`).\n\n## Funcionalidades Principais\n\n*   **CRUD completo para livros:**\n    *   Criar (POST)\n    *   Ler (GET - todos e por ID)\n    *   Atualizar (PUT)\n    *   Deletar (DELETE)\n*   Persistência de dados simples usando arquivo JSON.\n*   Geração automática de IDs únicos (UUID) para novos livros.\n*   Estrutura básica de projeto Express (Rotas, Controllers, Utils).\n\n## Tecnologias Utilizadas\n\n*   **Node.js:** Ambiente de execução JavaScript no lado do servidor.\n*   **Express.js:** Framework web para Node.js, usado para criar as rotas e gerenciar requisições/respostas HTTP.\n*   **UUID:** Biblioteca para geração de identificadores únicos universais.\n*   **JSON:** Formato leve de troca de dados, usado como nosso "banco de dados".\n\n## Pré-requisitos\n\nAntes de começar, garanta que você tenha instalado:\n\n*   [Node.js](https://nodejs.org/) (versão LTS recomendada - ex: v18 ou v20+)\n*   [npm](https://www.npmjs.com/) (geralmente vem instalado com o Node.js)\n*   Uma ferramenta para testar APIs, como [Postman](https://www.postman.com/downloads/) ou [Insomnia](https://insomnia.rest/download).\n\n## Instalação\n\n1.  **Clone o repositório:**\n    ```bash\n    git clone https://github.com/rafaeldiasgarcia/BookshelfAPI.git\n    cd BookshelfAPI\n    ```\n\n2.  **Instale as dependências do projeto:**\n    ```bash\n    npm install\n    ```\n\n## Executando o Servidor\n\nPara iniciar o servidor da API, execute:\n\n```bash\nnode server.js\n```',
                'readme-weather': '# 🌤️ WeatherNow 🌧️\n\n**Um aplicativo web simples e elegante para verificar o clima atual, desenvolvido como um projeto prático para aprimorar habilidades em HTML, CSS e JavaScript.**\n\n---\n\n## ✨ Visão Geral\n\nWeatherNow é sua pequena janela para o clima do mundo! Digite o nome de uma cidade e obtenha instantaneamente as condições meteorológicas atuais, incluindo temperatura, umidade e uma breve descrição. Além disso, mantenha-se atualizado com um relógio em tempo real e alterne entre temas claro e escuro!\n\n---\n\n## 🚀 Funcionalidades\n\n*   **Busca de Clima por Cidade:** Insira o nome de qualquer cidade para obter dados meteorológicos.\n*   **Informações Essenciais:** Exibe temperatura (em °C), umidade (%) e descrição do tempo.\n*   **Relógio em Tempo Real:** Mostra a hora atual (HH:MM:SS) e a data formatada.\n*   **Alternador de Tema:** Botão para alternar entre modo claro (light) e escuro (dark).\n*   **Persistência de Tema:** A escolha do tema é salva no `localStorage` do navegador.\n*   **Design Responsivo:** Interface adaptável a diferentes tamanhos de tela.\n\n---\n\n## 🛠️ Tecnologias Utilizadas\n\n*   **HTML5:** Estrutura semântica da página.\n*   **CSS3:** Estilização, layout (Flexbox), variáveis CSS para temas e design responsivo.\n*   **JavaScript (Vanilla JS):** Manipulação do DOM, requisições `fetch` para a API OpenWeatherMap.\n*   **OpenWeatherMap API:** Fonte dos dados meteorológicos.\n\n---\n\n## ⚙️ Como Executar Localmente\n\n1.  **Clone o repositório:**\n    ```bash\n    git clone https://github.com/rafaeldiasgarcia/WeatherNow.git\n    cd WeatherNow\n    ```\n\n2.  **Obtenha uma Chave de API:**\n    *   Vá para [OpenWeatherMap](https://openweathermap.org/api) e crie uma conta gratuita.\n    *   Obtenha sua chave de API (API Key).\n\n3.  **Configure a Chave de API:**\n    *   Abra o arquivo `script.js`.\n    *   Localize a linha: `const apiKey` \n    *   Substitua pela sua chave de API real.\n\n4.  **Abra o `index.html`:**\n    *   Abra o arquivo `index.html` diretamente no seu navegador web preferido.'
            },
            'en-US': {
                'nav-resume': 'Resume',
                'nav-projects': 'Projects',
                'hero-title': 'My Projects',
                'hero-description': 'A collection of the main projects I have developed, demonstrating my skills in different technologies and development areas.',
                'sge-description': 'Event Management System developed for UNIFIO University Center. Complete web application to modernize and centralize the management of sports and academic events at the institution\'s sports court.',
                'llmops-description': 'Customer feedback classification system using fine-tuning of language models (DistilBERT). Docker deployment with FastAPI. Precise, fast and economical system for sentiment analysis.',
                'portfolio-description': 'Personal website hosted on GitHub Pages, serving as an online portfolio. Presents my skills, experiences, certifications and developed projects.',
                'cs50x-description': 'Solutions for Harvard\'s CS50x course (Introduction to Computer Science). Includes all problem sets, labs and the final project, demonstrating knowledge in algorithms, data structures and programming.',
                'bookshelf-description': 'Simple REST API built with Node.js and Express to manage a book collection. Data is stored in a local JSON file. Project focused on demonstrating knowledge in backend development and API architecture.',
                'weather-description': 'Application that provides real-time weather information for different locations. Uses third-party APIs to obtain updated data on weather conditions.',
                'btn-view-code': 'View Code',
                'btn-view-github': 'View on GitHub',
                'modal-sge-title': 'SGE - Code Preview',
                'modal-llmops-title': 'Text Classifier LLMOps - Code Preview',
                'modal-portfolio-title': 'Personal Portfolio - Code Preview',
                'modal-cs50x-title': 'CS50x - Code Preview',
                'modal-bookshelf-title': 'BookshelfAPI - Code Preview',
                'modal-weather-title': 'WeatherNow - Code Preview',
                'modal-close': 'Close',
                'modal-see-full-code': 'Click here to see the complete code',
                'modal-see-full-code-short': 'Full Code',
                'cs50x-alert': '<strong>CS50x Final Project:</strong> Termo Clone - Word game in Brazilian Portuguese (Wordle clone)',
                'portfolio-alert': 'This is the source code of the portfolio itself. You are viewing it now! To see all files, visit the repository on GitHub.',
                'footer-copyright': '© 2025 Rafael Dias Garcia. All rights reserved.',
                'readme-sge': '# 🚀 SGE - How to Use\n\n## ⚡ Quick Start\n\n### 📋 Prerequisites\n- **Docker Desktop** (version 20.10+)\n- **Git**\n- Free ports: **80**, **3306**, **8080**\n\n---\n\n## 📦 Installation and Initialization\n\n### 1. Clone the Repository\n\n```bash\ngit clone https://github.com/seu-usuario/sge.git\ncd sge\n```\n\n### 2. Start Containers\n\n```bash\ndocker-compose up -d\n```\n\n**What happens automatically:**\n- ✅ PHP container starts on port **80**\n- ✅ MySQL container starts on port **3306**\n- ✅ phpMyAdmin container starts on port **8080**\n- ✅ Composer installs dependencies automatically via `entrypoint.sh`\n- ✅ MySQL creates the database structure\n\n### 3. Populate the Database\n\n⚠️ **IMPORTANT:** The database is created empty. You **need** to populate it with sample data.\n\n#### Windows PowerShell:\n```powershell\nGet-Content assets/seeds/db_populate.sql | docker exec -i mysql mysql -uroot -prootpass application\n```\n\n#### Linux/Mac:\n```bash\ndocker exec -i mysql mysql -uroot -prootpass application < assets/seeds/db_populate.sql\n```\n\n### 4. Access the Application\n\n🎉 **Ready!** Access: **http://localhost**\n\n---\n\n## 🔐 Login Credentials\n\n### Super Admin (Full Access)\n```\nEmail/RA: sadmin\nPassword: sadmin\n```\n\n### Athletics Admin\n```\nEmail: admin.atletica@sge.com\nPassword: sadmin\n```\n\n### Regular User (Student)\n```\nEmail: aluno@sge.com\nPassword: sadmin\n```',
                'readme-llmops': '# Text Classifier Optimized with LLMOps\n\nCustomer feedback classification system using fine-tuning of language models (DistilBERT) with Docker deployment and FastAPI.\n\n## 🎯 Objective\n\nCreate a text classification system that is:\n- **Accurate**: As good as large models for specific task\n- **Fast**: Low latency for real-time responses\n- **Cheap**: Much lower cost per classification than commercial APIs\n\n## 🏗️ Architecture\n\n- **Model**: DistilBERT (fine-tuned)\n- **Framework**: PyTorch + Transformers (Hugging Face)\n- **API**: FastAPI\n- **Containerization**: Docker\n- **Language**: Python 3.10+\n\n## 🚀 How to Use\n\n### 1. Local Installation\n\n```bash\npip install -r requirements.txt\n```\n\n### 2. Generate Training Dataset\n\n```bash\npython src/generate_data.py\n```\n\n### 3. Train the Model\n\n```bash\npython src/train.py\n```\n\n**Estimated time**: 10-30 minutes (depending on hardware)\n\n### 4. Run API Locally\n\n```bash\npython src/api.py\n```\n\nThe API will be available at `http://localhost:8000`\n\n### 5. Test the API\n\n```bash\ncurl -X POST "http://localhost:8000/classify" \\\n     -H "Content-Type: application/json" \\\n     -d \'{"text": "The delivery was super fast, arrived before the deadline!"}\'\n```',
                'readme-cs50x': '# 💻 CS50x – Introduction to Computer Science\n\nThis repository contains my solutions for exercises, labs and final project of the **CS50x (2025)** course, offered by Harvard University.\n\n## 📚 Course Content\n\n- **Week 0:** Scratch  \n- **Week 1:** C  \n- **Week 2:** Arrays  \n- **Week 3:** Algorithms  \n- **Week 4:** Memory  \n- **Week 5:** Data Structures  \n- **Week 6:** Python  \n- **Week 7:** SQL  \n- **Week 8:** HTML, CSS, JavaScript  \n- **Week 9:** Flask  \n- **Week 10:** Final Project  \n\n## 🛠️ Technologies Used\n\n- Scratch  \n- C  \n- Python  \n- SQL (SQLite)  \n- HTML, CSS, JavaScript  \n- Flask (Python)\n\n## ✅ Status\n\n✔️ All weeks completed, including the final project.  \n📂 Each folder contains files corresponding to each week or exercise.',
                'readme-bookshelf': '# BookshelfAPI 📚\n\nA simple REST API built with Node.js and Express to manage a book collection. This project serves as a basic back-end development example, ideal for learning and portfolio purposes. Data is stored in a local JSON file (`data/books.json`).\n\n## Main Features\n\n*   **Complete CRUD for books:**\n    *   Create (POST)\n    *   Read (GET - all and by ID)\n    *   Update (PUT)\n    *   Delete (DELETE)\n*   Simple data persistence using JSON file.\n*   Automatic generation of unique IDs (UUID) for new books.\n*   Basic Express project structure (Routes, Controllers, Utils).\n\n## Technologies Used\n\n*   **Node.js:** JavaScript runtime environment on the server side.\n*   **Express.js:** Web framework for Node.js, used to create routes and manage HTTP requests/responses.\n*   **UUID:** Library for generating universal unique identifiers.\n*   **JSON:** Lightweight data exchange format, used as our "database".\n\n## Prerequisites\n\nBefore starting, make sure you have installed:\n\n*   [Node.js](https://nodejs.org/) (LTS version recommended - e.g.: v18 or v20+)\n*   [npm](https://www.npmjs.com/) (usually comes installed with Node.js)\n*   A tool to test APIs, such as [Postman](https://www.postman.com/downloads/) or [Insomnia](https://insomnia.rest/download).\n\n## Installation\n\n1.  **Clone the repository:**\n    ```bash\n    git clone https://github.com/rafaeldiasgarcia/BookshelfAPI.git\n    cd BookshelfAPI\n    ```\n\n2.  **Install project dependencies:**\n    ```bash\n    npm install\n    ```\n\n## Running the Server\n\nTo start the API server, run:\n\n```bash\nnode server.js\n```',
                'readme-weather': '# 🌤️ WeatherNow 🌧️\n\n**A simple and elegant web application to check current weather, developed as a practical project to enhance HTML, CSS and JavaScript skills.**\n\n---\n\n## ✨ Overview\n\nWeatherNow is your small window to the world\'s weather! Type a city name and instantly get current weather conditions, including temperature, humidity and a brief description. Also, stay updated with a real-time clock and toggle between light and dark themes!\n\n---\n\n## 🚀 Features\n\n*   **Weather Search by City:** Enter any city name to get weather data.\n*   **Essential Information:** Displays temperature (in °C), humidity (%) and weather description.\n*   **Real-Time Clock:** Shows current time (HH:MM:SS) and formatted date.\n*   **Theme Toggle:** Button to switch between light and dark mode.\n*   **Theme Persistence:** Theme choice is saved in browser `localStorage`.\n*   **Responsive Design:** Interface adaptable to different screen sizes.\n\n---\n\n## 🛠️ Technologies Used\n\n*   **HTML5:** Semantic page structure.\n*   **CSS3:** Styling, layout (Flexbox), CSS variables for themes and responsive design.\n*   **JavaScript (Vanilla JS):** DOM manipulation, `fetch` requests to OpenWeatherMap API.\n*   **OpenWeatherMap API:** Source of weather data.\n\n---\n\n## ⚙️ How to Run Locally\n\n1.  **Clone the repository:**\n    ```bash\n    git clone https://github.com/rafaeldiasgarcia/WeatherNow.git\n    cd WeatherNow\n    ```\n\n2.  **Get an API Key:**\n    *   Go to [OpenWeatherMap](https://openweathermap.org/api) and create a free account.\n    *   Get your API key.\n\n3.  **Configure the API Key:**\n    *   Open the `script.js` file.\n    *   Find the line: `const apiKey` \n    *   Replace with your real API key.\n\n4.  **Open `index.html`:**\n    *   Open the `index.html` file directly in your preferred web browser.'
            },
            'es-ES': {
                'nav-resume': 'Currículo',
                'nav-projects': 'Proyectos',
                'hero-title': 'Mis Proyectos',
                'hero-description': 'Una colección de los principales proyectos que he desarrollado, demostrando mis habilidades en diferentes tecnologías y áreas de desarrollo.',
                'sge-description': 'Sistema de Gestión de Eventos desarrollado para el Centro Universitario UNIFIO. Aplicación web completa para modernizar y centralizar la gestión de eventos deportivos y académicos en la cancha polideportiva de la institución.',
                'llmops-description': 'Sistema de clasificación de comentarios de clientes utilizando fine-tuning de modelos de lenguaje (DistilBERT). Despliegue vía Docker con API FastAPI. Sistema preciso, rápido y económico para análisis de sentimientos.',
                'portfolio-description': 'Sitio web personal alojado en GitHub Pages, que sirve como portafolio en línea. Presenta mis habilidades, experiencias, certificaciones y proyectos desarrollados.',
                'cs50x-description': 'Soluciones para el curso CS50x (Introduction to Computer Science) de Harvard. Incluye todos los problem sets, labs y el proyecto final, demostrando conocimiento en algoritmos, estructuras de datos y programación.',
                'bookshelf-description': 'API REST simple construida con Node.js y Express para gestionar una colección de libros. Los datos se almacenan en un archivo JSON local. Proyecto enfocado en demostrar conocimiento en desarrollo backend y arquitectura de APIs.',
                'weather-description': 'Aplicación que proporciona información meteorológica en tiempo real para diferentes localidades. Utiliza APIs de terceros para obtener datos actualizados sobre condiciones climáticas.',
                'btn-view-code': 'Ver Código',
                'btn-view-github': 'Ver en GitHub',
                'modal-sge-title': 'SGE - Vista Previa del Código',
                'modal-llmops-title': 'Clasificador de Texto LLMOps - Vista Previa del Código',
                'modal-portfolio-title': 'Portafolio Personal - Vista Previa del Código',
                'modal-cs50x-title': 'CS50x - Vista Previa del Código',
                'modal-bookshelf-title': 'BookshelfAPI - Vista Previa del Código',
                'modal-weather-title': 'WeatherNow - Vista Previa del Código',
                'modal-close': 'Cerrar',
                'modal-see-full-code': 'Haz clic aquí para ver el código completo',
                'modal-see-full-code-short': 'Código Completo',
                'cs50x-alert': '<strong>Proyecto Final CS50x:</strong> Termo Clone - Juego de palabras en portugués brasileño (clon de Wordle)',
                'portfolio-alert': 'Este es el código fuente del propio portafolio. ¡Lo estás viendo ahora! Para ver todos los archivos, visita el repositorio en GitHub.',
                'footer-copyright': '© 2025 Rafael Dias Garcia. Todos los derechos reservados.',
                'readme-sge': '# 🚀 SGE - Cómo Usar\n\n## ⚡ Inicio Rápido\n\n### 📋 Requisitos Previos\n- **Docker Desktop** (versión 20.10+)\n- **Git**\n- Puertos libres: **80**, **3306**, **8080**\n\n---\n\n## 📦 Instalación e Inicialización\n\n### 1. Clonar el Repositorio\n\n```bash\ngit clone https://github.com/seu-usuario/sge.git\ncd sge\n```\n\n### 2. Iniciar los Contenedores\n\n```bash\ndocker-compose up -d\n```\n\n**Lo que sucede automáticamente:**\n- ✅ Contenedor PHP inicia en el puerto **80**\n- ✅ Contenedor MySQL inicia en el puerto **3306**\n- ✅ Contenedor phpMyAdmin inicia en el puerto **8080**\n- ✅ Composer instala dependencias automáticamente vía `entrypoint.sh`\n- ✅ MySQL crea la estructura de la base de datos\n\n### 3. Poblar la Base de Datos\n\n⚠️ **IMPORTANTE:** La base de datos se crea vacía. **Necesitas** poblarla con datos de ejemplo.\n\n#### Windows PowerShell:\n```powershell\nGet-Content assets/seeds/db_populate.sql | docker exec -i mysql mysql -uroot -prootpass application\n```\n\n#### Linux/Mac:\n```bash\ndocker exec -i mysql mysql -uroot -prootpass application < assets/seeds/db_populate.sql\n```\n\n### 4. Acceder a la Aplicación\n\n🎉 **¡Listo!** Accede: **http://localhost**\n\n---\n\n## 🔐 Credenciales de Inicio de Sesión\n\n### Super Admin (Acceso Total)\n```\nEmail/RA: sadmin\nContraseña: sadmin\n```\n\n### Admin de Atletismo\n```\nEmail: admin.atletica@sge.com\nContraseña: sadmin\n```\n\n### Usuario Común (Estudiante)\n```\nEmail: alumno@sge.com\nContraseña: sadmin\n```',
                'readme-llmops': '# Clasificador de Texto Optimizado con LLMOps\n\nSistema de clasificación de comentarios de clientes usando fine-tuning de modelos de lenguaje (DistilBERT) con despliegue vía Docker y API FastAPI.\n\n## 🎯 Objetivo\n\nCrear un sistema de clasificación de texto que sea:\n- **Preciso**: Tan bueno como modelos grandes para tarea específica\n- **Rápido**: Baja latencia para respuestas en tiempo real\n- **Barato**: Costo por clasificación mucho menor que APIs comerciales\n\n## 🏗️ Arquitectura\n\n- **Modelo**: DistilBERT (fine-tuned)\n- **Framework**: PyTorch + Transformers (Hugging Face)\n- **API**: FastAPI\n- **Containerización**: Docker\n- **Lenguaje**: Python 3.10+\n\n## 🚀 Cómo Usar\n\n### 1. Instalación Local\n\n```bash\npip install -r requirements.txt\n```\n\n### 2. Generar Dataset de Entrenamiento\n\n```bash\npython src/generate_data.py\n```\n\n### 3. Entrenar el Modelo\n\n```bash\npython src/train.py\n```\n\n**Tiempo estimado**: 10-30 minutos (dependiendo del hardware)\n\n### 4. Ejecutar la API Localmente\n\n```bash\npython src/api.py\n```\n\nLa API estará disponible en `http://localhost:8000`\n\n### 5. Probar la API\n\n```bash\ncurl -X POST "http://localhost:8000/classify" \\\n     -H "Content-Type: application/json" \\\n     -d \'{"text": "¡La entrega fue súper rápida, llegó antes del plazo!"}\'\n```',
                'readme-cs50x': '# 💻 CS50x – Introduction to Computer Science\n\nEste repositorio contiene mis soluciones para los ejercicios, labs y proyecto final del curso **CS50x (2025)**, ofrecido por Harvard University.\n\n## 📚 Contenido del Curso\n\n- **Week 0:** Scratch  \n- **Week 1:** C  \n- **Week 2:** Arrays  \n- **Week 3:** Algorithms  \n- **Week 4:** Memory  \n- **Week 5:** Data Structures  \n- **Week 6:** Python  \n- **Week 7:** SQL  \n- **Week 8:** HTML, CSS, JavaScript  \n- **Week 9:** Flask  \n- **Week 10:** Final Project  \n\n## 🛠️ Tecnologías Utilizadas\n\n- Scratch  \n- C  \n- Python  \n- SQL (SQLite)  \n- HTML, CSS, JavaScript  \n- Flask (Python)\n\n## ✅ Estado\n\n✔️ Todas las semanas completadas, incluyendo el proyecto final.  \n📂 Cada carpeta contiene los archivos correspondientes a cada semana o ejercicio.',
                'readme-bookshelf': '# BookshelfAPI 📚\n\nUna API REST simple construida con Node.js y Express para gestionar una colección de libros. Este proyecto sirve como un ejemplo básico de desarrollo back-end, ideal para fines de aprendizaje y portafolio. Los datos se almacenan en un archivo JSON local (`data/books.json`).\n\n## Funcionalidades Principales\n\n*   **CRUD completo para libros:**\n    *   Crear (POST)\n    *   Leer (GET - todos y por ID)\n    *   Actualizar (PUT)\n    *   Eliminar (DELETE)\n*   Persistencia de datos simple usando archivo JSON.\n*   Generación automática de IDs únicos (UUID) para nuevos libros.\n*   Estructura básica de proyecto Express (Rutas, Controladores, Utils).\n\n## Tecnologías Utilizadas\n\n*   **Node.js:** Entorno de ejecución JavaScript en el lado del servidor.\n*   **Express.js:** Framework web para Node.js, usado para crear las rutas y gestionar solicitudes/respuestas HTTP.\n*   **UUID:** Biblioteca para generación de identificadores únicos universales.\n*   **JSON:** Formato ligero de intercambio de datos, usado como nuestra "base de datos".\n\n## Requisitos Previos\n\nAntes de comenzar, asegúrate de tener instalado:\n\n*   [Node.js](https://nodejs.org/) (versión LTS recomendada - ej: v18 o v20+)\n*   [npm](https://www.npmjs.com/) (generalmente viene instalado con Node.js)\n*   Una herramienta para probar APIs, como [Postman](https://www.postman.com/downloads/) o [Insomnia](https://insomnia.rest/download).\n\n## Instalación\n\n1.  **Clonar el repositorio:**\n    ```bash\n    git clone https://github.com/rafaeldiasgarcia/BookshelfAPI.git\n    cd BookshelfAPI\n    ```\n\n2.  **Instalar las dependencias del proyecto:**\n    ```bash\n    npm install\n    ```\n\n## Ejecutando el Servidor\n\nPara iniciar el servidor de la API, ejecuta:\n\n```bash\nnode server.js\n```',
                'readme-weather': '# 🌤️ WeatherNow 🌧️\n\n**Una aplicación web simple y elegante para verificar el clima actual, desarrollada como un proyecto práctico para mejorar habilidades en HTML, CSS y JavaScript.**\n\n---\n\n## ✨ Visión General\n\n¡WeatherNow es tu pequeña ventana al clima del mundo! Escribe el nombre de una ciudad y obtén instantáneamente las condiciones meteorológicas actuales, incluyendo temperatura, humedad y una breve descripción. ¡Además, mantente actualizado con un reloj en tiempo real y alterna entre temas claro y oscuro!\n\n---\n\n## 🚀 Funcionalidades\n\n*   **Búsqueda de Clima por Ciudad:** Ingresa el nombre de cualquier ciudad para obtener datos meteorológicos.\n*   **Información Esencial:** Muestra temperatura (en °C), humedad (%) y descripción del clima.\n*   **Reloj en Tiempo Real:** Muestra la hora actual (HH:MM:SS) y la fecha formateada.\n*   **Alternador de Tema:** Botón para alternar entre modo claro y oscuro.\n*   **Persistencia de Tema:** La elección del tema se guarda en `localStorage` del navegador.\n*   **Diseño Responsivo:** Interfaz adaptable a diferentes tamaños de pantalla.\n\n---\n\n## 🛠️ Tecnologías Utilizadas\n\n*   **HTML5:** Estructura semántica de la página.\n*   **CSS3:** Estilización, diseño (Flexbox), variables CSS para temas y diseño responsivo.\n*   **JavaScript (Vanilla JS):** Manipulación del DOM, solicitudes `fetch` a la API OpenWeatherMap.\n*   **OpenWeatherMap API:** Fuente de datos meteorológicos.\n\n---\n\n## ⚙️ Cómo Ejecutar Localmente\n\n1.  **Clonar el repositorio:**\n    ```bash\n    git clone https://github.com/rafaeldiasgarcia/WeatherNow.git\n    cd WeatherNow\n    ```\n\n2.  **Obtener una Clave de API:**\n    *   Ve a [OpenWeatherMap](https://openweathermap.org/api) y crea una cuenta gratuita.\n    *   Obtén tu clave de API.\n\n3.  **Configurar la Clave de API:**\n    *   Abre el archivo `script.js`.\n    *   Localiza la línea: `const apiKey` \n    *   Reemplaza con tu clave de API real.\n\n4.  **Abrir `index.html`:**\n    *   Abre el archivo `index.html` directamente en tu navegador web preferido.'
            },
            'de-DE': {
                'nav-resume': 'Lebenslauf',
                'nav-projects': 'Projekte',
                'hero-title': 'Meine Projekte',
                'hero-description': 'Eine Sammlung der Hauptprojekte, die ich entwickelt habe, die meine Fähigkeiten in verschiedenen Technologien und Entwicklungsbereichen demonstrieren.',
                'sge-description': 'Event-Management-System entwickelt für das Universitätszentrum UNIFIO. Vollständige Webanwendung zur Modernisierung und Zentralisierung der Verwaltung von Sport- und akademischen Veranstaltungen auf dem Sportplatz der Institution.',
                'llmops-description': 'Kundenfeedback-Klassifizierungssystem mit Fine-Tuning von Sprachmodellen (DistilBERT). Docker-Bereitstellung mit FastAPI. Präzises, schnelles und wirtschaftliches System zur Stimmungsanalyse.',
                'portfolio-description': 'Persönliche Website auf GitHub Pages gehostet, die als Online-Portfolio dient. Präsentiert meine Fähigkeiten, Erfahrungen, Zertifizierungen und entwickelte Projekte.',
                'cs50x-description': 'Lösungen für den CS50x-Kurs (Introduction to Computer Science) von Harvard. Enthält alle Problem Sets, Labs und das Abschlussprojekt und demonstriert Wissen in Algorithmen, Datenstrukturen und Programmierung.',
                'bookshelf-description': 'Einfache REST-API mit Node.js und Express zur Verwaltung einer Büchersammlung. Daten werden in einer lokalen JSON-Datei gespeichert. Projekt konzentriert sich auf die Demonstration von Wissen in Backend-Entwicklung und API-Architektur.',
                'weather-description': 'Anwendung, die Echtzeit-Wetterinformationen für verschiedene Standorte bereitstellt. Verwendet APIs von Drittanbietern, um aktualisierte Daten zu Wetterbedingungen zu erhalten.',
                'btn-view-code': 'Code anzeigen',
                'btn-view-github': 'Auf GitHub anzeigen',
                'modal-sge-title': 'SGE - Code-Vorschau',
                'modal-llmops-title': 'Text-Klassifikator LLMOps - Code-Vorschau',
                'modal-portfolio-title': 'Persönliches Portfolio - Code-Vorschau',
                'modal-cs50x-title': 'CS50x - Code-Vorschau',
                'modal-bookshelf-title': 'BookshelfAPI - Code-Vorschau',
                'modal-weather-title': 'WeatherNow - Code-Vorschau',
                'modal-close': 'Schließen',
                'modal-see-full-code': 'Klicken Sie hier, um den vollständigen Code zu sehen',
                'modal-see-full-code-short': 'Vollständiger Code',
                'cs50x-alert': '<strong>CS50x Abschlussprojekt:</strong> Termo Clone - Wortspiel auf Brasilianischem Portugiesisch (Wordle-Klon)',
                'portfolio-alert': 'Dies ist der Quellcode des Portfolios selbst. Sie sehen ihn jetzt! Um alle Dateien zu sehen, besuchen Sie das Repository auf GitHub.',
                'footer-copyright': '© 2025 Rafael Dias Garcia. Alle Rechte vorbehalten.',
                'readme-sge': '# 🚀 SGE - Verwendung\n\n## ⚡ Schnellstart\n\n### 📋 Voraussetzungen\n- **Docker Desktop** (Version 20.10+)\n- **Git**\n- Freie Ports: **80**, **3306**, **8080**\n\n---\n\n## 📦 Installation und Initialisierung\n\n### 1. Repository klonen\n\n```bash\ngit clone https://github.com/seu-usuario/sge.git\ncd sge\n```\n\n### 2. Container starten\n\n```bash\ndocker-compose up -d\n```\n\n**Was automatisch passiert:**\n- ✅ PHP-Container startet auf Port **80**\n- ✅ MySQL-Container startet auf Port **3306**\n- ✅ phpMyAdmin-Container startet auf Port **8080**\n- ✅ Composer installiert Abhängigkeiten automatisch über `entrypoint.sh`\n- ✅ MySQL erstellt die Datenbankstruktur\n\n### 3. Datenbank befüllen\n\n⚠️ **WICHTIG:** Die Datenbank wird leer erstellt. Sie **müssen** sie mit Beispieldaten befüllen.\n\n#### Windows PowerShell:\n```powershell\nGet-Content assets/seeds/db_populate.sql | docker exec -i mysql mysql -uroot -prootpass application\n```\n\n#### Linux/Mac:\n```bash\ndocker exec -i mysql mysql -uroot -prootpass application < assets/seeds/db_populate.sql\n```\n\n### 4. Auf die Anwendung zugreifen\n\n🎉 **Fertig!** Zugriff: **http://localhost**\n\n---\n\n## 🔐 Anmeldedaten\n\n### Super Admin (Vollzugriff)\n```\nE-Mail/RA: sadmin\nPasswort: sadmin\n```\n\n### Sport-Admin\n```\nE-Mail: admin.atletica@sge.com\nPasswort: sadmin\n```\n\n### Normaler Benutzer (Student)\n```\nE-Mail: aluno@sge.com\nPasswort: sadmin\n```',
                'readme-llmops': '# Textklassifikator optimiert mit LLMOps\n\nKundenfeedback-Klassifizierungssystem mit Fine-Tuning von Sprachmodellen (DistilBERT) mit Docker-Bereitstellung und FastAPI.\n\n## 🎯 Ziel\n\nErstellen Sie ein Textklassifizierungssystem, das:\n- **Präzise**: So gut wie große Modelle für spezifische Aufgabe\n- **Schnell**: Niedrige Latenz für Echtzeitantworten\n- **Günstig**: Viel niedrigere Kosten pro Klassifizierung als kommerzielle APIs\n\n## 🏗️ Architektur\n\n- **Modell**: DistilBERT (fine-tuned)\n- **Framework**: PyTorch + Transformers (Hugging Face)\n- **API**: FastAPI\n- **Containerisierung**: Docker\n- **Sprache**: Python 3.10+\n\n## 🚀 Verwendung\n\n### 1. Lokale Installation\n\n```bash\npip install -r requirements.txt\n```\n\n### 2. Trainingsdatensatz generieren\n\n```bash\npython src/generate_data.py\n```\n\n### 3. Modell trainieren\n\n```bash\npython src/train.py\n```\n\n**Geschätzte Zeit**: 10-30 Minuten (je nach Hardware)\n\n### 4. API lokal ausführen\n\n```bash\npython src/api.py\n```\n\nDie API ist unter `http://localhost:8000` verfügbar\n\n### 5. API testen\n\n```bash\ncurl -X POST "http://localhost:8000/classify" \\\n     -H "Content-Type: application/json" \\\n     -d \'{"text": "Die Lieferung war super schnell, kam vor dem Termin an!"}\'\n```',
                'readme-cs50x': '# 💻 CS50x – Introduction to Computer Science\n\nDieses Repository enthält meine Lösungen für Übungen, Labs und Abschlussprojekt des **CS50x (2025)** Kurses, angeboten von Harvard University.\n\n## 📚 Kursinhalt\n\n- **Week 0:** Scratch  \n- **Week 1:** C  \n- **Week 2:** Arrays  \n- **Week 3:** Algorithms  \n- **Week 4:** Memory  \n- **Week 5:** Data Structures  \n- **Week 6:** Python  \n- **Week 7:** SQL  \n- **Week 8:** HTML, CSS, JavaScript  \n- **Week 9:** Flask  \n- **Week 10:** Final Project  \n\n## 🛠️ Verwendete Technologien\n\n- Scratch  \n- C  \n- Python  \n- SQL (SQLite)  \n- HTML, CSS, JavaScript  \n- Flask (Python)\n\n## ✅ Status\n\n✔️ Alle Wochen abgeschlossen, einschließlich des Abschlussprojekts.  \n📂 Jeder Ordner enthält Dateien entsprechend jeder Woche oder Übung.',
                'readme-bookshelf': '# BookshelfAPI 📚\n\nEine einfache REST-API mit Node.js und Express zur Verwaltung einer Büchersammlung. Dieses Projekt dient als grundlegendes Back-End-Entwicklungsbeispiel, ideal für Lern- und Portfoliozwecke. Daten werden in einer lokalen JSON-Datei (`data/books.json`) gespeichert.\n\n## Hauptfunktionen\n\n*   **Vollständiges CRUD für Bücher:**\n    *   Erstellen (POST)\n    *   Lesen (GET - alle und nach ID)\n    *   Aktualisieren (PUT)\n    *   Löschen (DELETE)\n*   Einfache Datenspeicherung mit JSON-Datei.\n*   Automatische Generierung eindeutiger IDs (UUID) für neue Bücher.\n*   Grundlegende Express-Projektstruktur (Routen, Controller, Utils).\n\n## Verwendete Technologien\n\n*   **Node.js:** JavaScript-Laufzeitumgebung auf der Serverseite.\n*   **Express.js:** Web-Framework für Node.js, verwendet zum Erstellen von Routen und Verwalten von HTTP-Anfragen/Antworten.\n*   **UUID:** Bibliothek zur Generierung universeller eindeutiger Bezeichner.\n*   **JSON:** Leichtes Datenaustauschformat, verwendet als unsere "Datenbank".\n\n## Voraussetzungen\n\nStellen Sie vor dem Start sicher, dass Sie installiert haben:\n\n*   [Node.js](https://nodejs.org/) (LTS-Version empfohlen - z.B.: v18 oder v20+)\n*   [npm](https://www.npmjs.com/) (kommt normalerweise mit Node.js installiert)\n*   Ein Tool zum Testen von APIs, wie [Postman](https://www.postman.com/downloads/) oder [Insomnia](https://insomnia.rest/download).\n\n## Installation\n\n1.  **Repository klonen:**\n    ```bash\n    git clone https://github.com/rafaeldiasgarcia/BookshelfAPI.git\n    cd BookshelfAPI\n    ```\n\n2.  **Projektabhängigkeiten installieren:**\n    ```bash\n    npm install\n    ```\n\n## Server ausführen\n\nUm den API-Server zu starten, führen Sie aus:\n\n```bash\nnode server.js\n```',
                'readme-weather': '# 🌤️ WeatherNow 🌧️\n\n**Eine einfache und elegante Webanwendung zur Überprüfung des aktuellen Wetters, entwickelt als praktisches Projekt zur Verbesserung von HTML-, CSS- und JavaScript-Fähigkeiten.**\n\n---\n\n## ✨ Übersicht\n\nWeatherNow ist Ihr kleines Fenster zum Wetter der Welt! Geben Sie einen Städtenamen ein und erhalten Sie sofort aktuelle Wetterbedingungen, einschließlich Temperatur, Luftfeuchtigkeit und einer kurzen Beschreibung. Bleiben Sie außerdem mit einer Echtzeituhr auf dem Laufenden und wechseln Sie zwischen hellen und dunklen Themen!\n\n---\n\n## 🚀 Funktionen\n\n*   **Wettersuche nach Stadt:** Geben Sie einen beliebigen Städtenamen ein, um Wetterdaten zu erhalten.\n*   **Wesentliche Informationen:** Zeigt Temperatur (in °C), Luftfeuchtigkeit (%) und Wetterbeschreibung.\n*   **Echtzeituhr:** Zeigt aktuelle Zeit (HH:MM:SS) und formatierte Datum.\n*   **Themenwechsel:** Schaltfläche zum Wechseln zwischen hellem und dunklem Modus.\n*   **Themenpersistenz:** Themenauswahl wird im Browser-`localStorage` gespeichert.\n*   **Responsives Design:** Anpassbare Benutzeroberfläche für verschiedene Bildschirmgrößen.\n\n---\n\n## 🛠️ Verwendete Technologien\n\n*   **HTML5:** Semantische Seitenstruktur.\n*   **CSS3:** Styling, Layout (Flexbox), CSS-Variablen für Themen und responsives Design.\n*   **JavaScript (Vanilla JS):** DOM-Manipulation, `fetch`-Anfragen an die OpenWeatherMap API.\n*   **OpenWeatherMap API:** Quelle der Wetterdaten.\n\n---\n\n## ⚙️ Lokal ausführen\n\n1.  **Repository klonen:**\n    ```bash\n    git clone https://github.com/rafaeldiasgarcia/WeatherNow.git\n    cd WeatherNow\n    ```\n\n2.  **API-Schlüssel erhalten:**\n    *   Gehen Sie zu [OpenWeatherMap](https://openweathermap.org/api) und erstellen Sie ein kostenloses Konto.\n    *   Holen Sie sich Ihren API-Schlüssel.\n\n3.  **API-Schlüssel konfigurieren:**\n    *   Öffnen Sie die Datei `script.js`.\n    *   Finden Sie die Zeile: `const apiKey` \n    *   Ersetzen Sie durch Ihren echten API-Schlüssel.\n\n4.  **`index.html` öffnen:**\n    *   Öffnen Sie die Datei `index.html` direkt in Ihrem bevorzugten Webbrowser.'
            },
            'ja-JP': {
                'nav-resume': '履歴書',
                'nav-projects': 'プロジェクト',
                'hero-title': '私のプロジェクト',
                'hero-description': '私が開発した主要なプロジェクトのコレクションで、さまざまなテクノロジーと開発分野でのスキルを示しています。',
                'sge-description': 'UNIFIO大学センター向けに開発されたイベント管理システム。機関のスポーツコートでのスポーツおよび学術イベントの管理を近代化し、一元化する完全なWebアプリケーション。',
                'llmops-description': '言語モデル（DistilBERT）のファインチューニングを使用した顧客フィードバック分類システム。FastAPIを使用したDockerデプロイメント。感情分析のための正確で高速で経済的なシステム。',
                'portfolio-description': 'GitHub Pagesでホストされている個人ウェブサイトで、オンラインポートフォリオとして機能します。私のスキル、経験、認定資格、開発したプロジェクトを紹介します。',
                'cs50x-description': 'ハーバードのCS50xコース（Introduction to Computer Science）のソリューション。すべての問題セット、ラボ、最終プロジェクトを含み、アルゴリズム、データ構造、プログラミングの知識を示しています。',
                'bookshelf-description': '本のコレクションを管理するためにNode.jsとExpressで構築されたシンプルなREST API。データはローカルJSONファイルに保存されます。バックエンド開発とAPIアーキテクチャの知識を示すことに焦点を当てたプロジェクト。',
                'weather-description': 'さまざまな場所のリアルタイムの天気情報を提供するアプリケーション。サードパーティのAPIを使用して、天候条件に関する最新データを取得します。',
                'btn-view-code': 'コードを表示',
                'btn-view-github': 'GitHubで表示',
                'modal-sge-title': 'SGE - コードプレビュー',
                'modal-llmops-title': 'テキスト分類器LLMOps - コードプレビュー',
                'modal-portfolio-title': '個人ポートフォリオ - コードプレビュー',
                'modal-cs50x-title': 'CS50x - コードプレビュー',
                'modal-bookshelf-title': 'BookshelfAPI - コードプレビュー',
                'modal-weather-title': 'WeatherNow - コードプレビュー',
                'modal-close': '閉じる',
                'modal-see-full-code': '完全なコードを表示するにはここをクリック',
                'modal-see-full-code-short': '完全なコード',
                'cs50x-alert': '<strong>CS50x最終プロジェクト:</strong> Termo Clone - ブラジルポルトガル語の単語ゲーム（Wordleクローン）',
                'portfolio-alert': 'これはポートフォリオ自体のソースコードです。今見ています！すべてのファイルを表示するには、GitHubのリポジトリにアクセスしてください。',
                'footer-copyright': '© 2025 Rafael Dias Garcia. 全著作権所有。',
                'readme-sge': '# 🚀 SGE - 使用方法\n\n## ⚡ クイックスタート\n\n### 📋 前提条件\n- **Docker Desktop** (バージョン 20.10+)\n- **Git**\n- 空きポート: **80**, **3306**, **8080**\n\n---\n\n## 📦 インストールと初期化\n\n### 1. リポジトリをクローン\n\n```bash\ngit clone https://github.com/seu-usuario/sge.git\ncd sge\n```\n\n### 2. コンテナを起動\n\n```bash\ndocker-compose up -d\n```\n\n**自動的に実行されること:**\n- ✅ PHPコンテナがポート **80** で起動\n- ✅ MySQLコンテナがポート **3306** で起動\n- ✅ phpMyAdminコンテナがポート **8080** で起動\n- ✅ Composerが`entrypoint.sh`経由で依存関係を自動インストール\n- ✅ MySQLがデータベース構造を作成\n\n### 3. データベースにデータを投入\n\n⚠️ **重要:** データベースは空で作成されます。サンプルデータで**投入する必要があります**。\n\n#### Windows PowerShell:\n```powershell\nGet-Content assets/seeds/db_populate.sql | docker exec -i mysql mysql -uroot -prootpass application\n```\n\n#### Linux/Mac:\n```bash\ndocker exec -i mysql mysql -uroot -prootpass application < assets/seeds/db_populate.sql\n```\n\n### 4. アプリケーションにアクセス\n\n🎉 **準備完了！** アクセス: **http://localhost**\n\n---\n\n## 🔐 ログイン認証情報\n\n### スーパー管理者（フルアクセス）\n```\nメール/RA: sadmin\nパスワード: sadmin\n```\n\n### アスレチック管理者\n```\nメール: admin.atletica@sge.com\nパスワード: sadmin\n```\n\n### 一般ユーザー（学生）\n```\nメール: aluno@sge.com\nパスワード: sadmin\n```',
                'readme-llmops': '# LLMOpsで最適化されたテキスト分類器\n\n言語モデル（DistilBERT）のファインチューニングを使用した顧客フィードバック分類システム、DockerデプロイメントとFastAPI付き。\n\n## 🎯 目的\n\n次のようなテキスト分類システムを作成:\n- **正確**: 特定のタスクに対して大型モデルと同等\n- **高速**: リアルタイム応答の低レイテンシ\n- **安価**: 商用APIよりも分類あたりのコストがはるかに低い\n\n## 🏗️ アーキテクチャ\n\n- **モデル**: DistilBERT (ファインチューニング済み)\n- **フレームワーク**: PyTorch + Transformers (Hugging Face)\n- **API**: FastAPI\n- **コンテナ化**: Docker\n- **言語**: Python 3.10+\n\n## 🚀 使用方法\n\n### 1. ローカルインストール\n\n```bash\npip install -r requirements.txt\n```\n\n### 2. トレーニングデータセットを生成\n\n```bash\npython src/generate_data.py\n```\n\n### 3. モデルをトレーニング\n\n```bash\npython src/train.py\n```\n\n**推定時間**: 10-30分（ハードウェアによる）\n\n### 4. APIをローカルで実行\n\n```bash\npython src/api.py\n```\n\nAPIは`http://localhost:8000`で利用可能\n\n### 5. APIをテスト\n\n```bash\ncurl -X POST "http://localhost:8000/classify" \\\n     -H "Content-Type: application/json" \\\n     -d \'{"text": "配達が超速く、期限前に到着しました！"}\'\n```',
                'readme-cs50x': '# 💻 CS50x – Introduction to Computer Science\n\nこのリポジトリには、ハーバード大学が提供する**CS50x (2025)**コースの演習、ラボ、最終プロジェクトの私のソリューションが含まれています。\n\n## 📚 コース内容\n\n- **Week 0:** Scratch  \n- **Week 1:** C  \n- **Week 2:** Arrays  \n- **Week 3:** Algorithms  \n- **Week 4:** Memory  \n- **Week 5:** Data Structures  \n- **Week 6:** Python  \n- **Week 7:** SQL  \n- **Week 8:** HTML, CSS, JavaScript  \n- **Week 9:** Flask  \n- **Week 10:** Final Project  \n\n## 🛠️ 使用技術\n\n- Scratch  \n- C  \n- Python  \n- SQL (SQLite)  \n- HTML, CSS, JavaScript  \n- Flask (Python)\n\n## ✅ ステータス\n\n✔️ 最終プロジェクトを含むすべての週が完了。  \n📂 各フォルダには、各週または演習に対応するファイルが含まれています。',
                'readme-bookshelf': '# BookshelfAPI 📚\n\n本のコレクションを管理するためにNode.jsとExpressで構築されたシンプルなREST API。このプロジェクトは、学習とポートフォリオの目的に最適な基本的なバックエンド開発の例として機能します。データはローカルJSONファイル（`data/books.json`）に保存されます。\n\n## 主な機能\n\n*   **本の完全なCRUD:**\n    *   作成 (POST)\n    *   読み取り (GET - すべてとID別)\n    *   更新 (PUT)\n    *   削除 (DELETE)\n*   JSONファイルを使用したシンプルなデータ永続化。\n*   新しい本の一意のID（UUID）の自動生成。\n*   基本的なExpressプロジェクト構造（ルート、コントローラー、ユーティリティ）。\n\n## 使用技術\n\n*   **Node.js:** サーバー側のJavaScript実行環境。\n*   **Express.js:** Node.js用のWebフレームワーク、ルートの作成とHTTPリクエスト/レスポンスの管理に使用。\n*   **UUID:** 汎用一意識別子を生成するライブラリ。\n*   **JSON:** 軽量なデータ交換形式、私たちの「データベース」として使用。\n\n## 前提条件\n\n開始する前に、以下がインストールされていることを確認してください:\n\n*   [Node.js](https://nodejs.org/) (LTSバージョン推奨 - 例: v18またはv20+)\n*   [npm](https://www.npmjs.com/) (通常、Node.jsと一緒にインストールされます)\n*   [Postman](https://www.postman.com/downloads/)や[Insomnia](https://insomnia.rest/download)などのAPIをテストするツール。\n\n## インストール\n\n1.  **リポジトリをクローン:**\n    ```bash\n    git clone https://github.com/rafaeldiasgarcia/BookshelfAPI.git\n    cd BookshelfAPI\n    ```\n\n2.  **プロジェクトの依存関係をインストール:**\n    ```bash\n    npm install\n    ```\n\n## サーバーの実行\n\nAPIサーバーを起動するには、次を実行します:\n\n```bash\nnode server.js\n```',
                'readme-weather': '# 🌤️ WeatherNow 🌧️\n\n**現在の天気を確認するためのシンプルでエレガントなWebアプリケーション、HTML、CSS、JavaScriptのスキルを向上させるための実践的なプロジェクトとして開発。**\n\n---\n\n## ✨ 概要\n\nWeatherNowは、世界の天気への小さな窓です！都市名を入力すると、温度、湿度、簡単な説明を含む現在の天気条件を即座に取得できます。また、リアルタイムの時計で最新情報を入手し、ライトテーマとダークテーマを切り替えることができます！\n\n---\n\n## 🚀 機能\n\n*   **都市別天気検索:** 任意の都市名を入力して天気データを取得。\n*   **基本情報:** 温度（°C）、湿度（%）、天気の説明を表示。\n*   **リアルタイム時計:** 現在の時刻（HH:MM:SS）とフォーマットされた日付を表示。\n*   **テーマ切り替え:** ライトモードとダークモードを切り替えるボタン。\n*   **テーマの永続化:** テーマの選択はブラウザの`localStorage`に保存されます。\n*   **レスポンシブデザイン:** 異なる画面サイズに適応可能なインターフェース。\n\n---\n\n## 🛠️ 使用技術\n\n*   **HTML5:** セマンティックなページ構造。\n*   **CSS3:** スタイリング、レイアウト（Flexbox）、テーマ用のCSS変数、レスポンシブデザイン。\n*   **JavaScript (Vanilla JS):** DOM操作、OpenWeatherMap APIへの`fetch`リクエスト。\n*   **OpenWeatherMap API:** 天気データのソース。\n\n---\n\n## ⚙️ ローカルで実行\n\n1.  **リポジトリをクローン:**\n    ```bash\n    git clone https://github.com/rafaeldiasgarcia/WeatherNow.git\n    cd WeatherNow\n    ```\n\n2.  **APIキーを取得:**\n    *   [OpenWeatherMap](https://openweathermap.org/api)にアクセスして無料アカウントを作成。\n    *   APIキーを取得。\n\n3.  **APIキーを設定:**\n    *   `script.js`ファイルを開く。\n    *   行を見つける: `const apiKey` \n    *   実際のAPIキーに置き換える。\n\n4.  **`index.html`を開く:**\n    *   好みのWebブラウザで`index.html`ファイルを直接開く。'
            }
        };
        
        this.init();
    }
    
    init() {
        this.createMenu();
        this.bindEvents();
        this.loadSavedLanguage();
    }
    
    createMenu() {
        const navbar = document.querySelector('.navbar .container');
        if (!navbar) return;
        
        // Check if menu already exists
        if (document.querySelector('.language-menu')) return;
        
        const currentFlag = this.languageFlags[this.currentLanguage] || '🇧🇷';
        
        const menuHTML = `
            <div class="language-menu">
                <button class="menu-toggle" aria-label="Language Menu" type="button">
                    <span class="flag-icon">${currentFlag}</span>
                </button>
                <div class="language-dropdown">
                    <button class="language-option active" data-lang="pt-BR" type="button">🇧🇷 Português</button>
                    <button class="language-option" data-lang="en-US" type="button">🇺🇸 English</button>
                    <button class="language-option" data-lang="es-ES" type="button">🇪🇸 Español</button>
                    <button class="language-option" data-lang="de-DE" type="button">🇩🇪 Deutsch</button>
                    <button class="language-option" data-lang="ja-JP" type="button">🇯🇵 日本語</button>
                </div>
            </div>
        `;
        
        navbar.insertAdjacentHTML('afterbegin', menuHTML);
    }
    
    bindEvents() {
        const menuToggle = document.querySelector('.menu-toggle');
        const dropdown = document.querySelector('.language-dropdown');
        const languageOptions = document.querySelectorAll('.language-option');
        
        if (menuToggle) {
            menuToggle.addEventListener('click', (e) => {
                e.stopPropagation();
                this.toggleMenu();
            });
        }
        
        languageOptions.forEach(option => {
            option.addEventListener('click', (e) => {
                e.stopPropagation();
                const lang = option.dataset.lang;
                this.changeLanguage(lang);
                this.closeMenu();
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.language-menu')) {
                this.closeMenu();
            }
        });
        
        // Translate modal content when shown
        document.addEventListener('shown.bs.modal', (e) => {
            const modal = e.target;
            this.translateModalContent(modal);
        });
    }
    
    toggleMenu() {
        const menuToggle = document.querySelector('.menu-toggle');
        const dropdown = document.querySelector('.language-dropdown');
        
        if (menuToggle && dropdown) {
            menuToggle.classList.toggle('active');
            dropdown.classList.toggle('active');
        }
    }
    
    closeMenu() {
        const menuToggle = document.querySelector('.menu-toggle');
        const dropdown = document.querySelector('.language-dropdown');
        
        if (menuToggle && dropdown) {
            menuToggle.classList.remove('active');
            dropdown.classList.remove('active');
        }
    }
    
    changeLanguage(lang) {
        if (this.currentLanguage === lang) return;
        
        this.currentLanguage = lang;
        this.updateActiveOption(lang);
        this.updateFlagIcon(lang);
        this.translateContent(lang);
        this.saveLanguage(lang);
    }
    
    updateFlagIcon(lang) {
        const flagIcon = document.querySelector('.menu-toggle .flag-icon');
        if (flagIcon && this.languageFlags[lang]) {
            flagIcon.textContent = this.languageFlags[lang];
        }
    }
    
    updateActiveOption(lang) {
        const options = document.querySelectorAll('.language-option');
        options.forEach(option => {
            option.classList.remove('active');
            if (option.dataset.lang === lang) {
                option.classList.add('active');
            }
        });
    }
    
    // Process README markdown content with syntax highlighting
    processReadmeContent(text) {
        if (!text) return '';
        
        // Split by lines
        const lines = text.split('\n');
        let inCodeBlock = false;
        let codeLanguage = '';
        let inList = false;
        let result = '';
        
        lines.forEach((line, index) => {
            // Check for code block start/end
            if (line.trim().startsWith('```')) {
                // Close list if open
                if (inList) {
                    result += '</ul>';
                    inList = false;
                }
                
                if (inCodeBlock) {
                    // End of code block
                    inCodeBlock = false;
                    codeLanguage = '';
                    result += '</code></pre>';
                } else {
                    // Start of code block
                    inCodeBlock = true;
                    codeLanguage = line.trim().substring(3).trim();
                    result += '<pre class="bg-dark text-light p-3 rounded mb-3" style="font-size: 0.9rem; border-left: 4px solid #0d6efd;"><code>';
                }
                return;
            }
            
            if (inCodeBlock) {
                // Inside code block - apply syntax highlighting
                result += this.highlightCodeLine(line, codeLanguage);
                // Add newline for code blocks
                if (index < lines.length - 1) {
                    result += '\n';
                }
            } else {
                // Check if it's a list item
                const isListItem = line.trim().startsWith('- ') || line.trim().startsWith('* ');
                
                if (isListItem) {
                    if (!inList) {
                        result += '<ul class="text-light mb-2">';
                        inList = true;
                    }
                    result += this.processMarkdownLine(line);
                } else {
                    // Close list if open
                    if (inList) {
                        result += '</ul>';
                        inList = false;
                    }
                    // Regular markdown line
                    result += this.processMarkdownLine(line);
                }
            }
        });
        
        // Close any unclosed structures
        if (inList) {
            result += '</ul>';
        }
        if (inCodeBlock) {
            result += '</code></pre>';
        }
        
        return result;
    }
    
    // Highlight a single line of code
    highlightCodeLine(line, language) {
        if (!line) return '';
        
        // Escape HTML
        let escaped = line
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
        
        // Apply syntax highlighting based on language or content
        let highlighted = escaped;
        
        // Bash/Shell commands
        if (language === 'bash' || language === 'sh' || language === 'powershell' || language === '') {
            highlighted = this.highlightBash(escaped);
        }
        // Python
        else if (language === 'python' || language === 'py') {
            highlighted = this.highlightPython(escaped);
        }
        // JavaScript
        else if (language === 'javascript' || language === 'js') {
            highlighted = this.highlightJavaScript(escaped);
        }
        // JSON
        else if (language === 'json') {
            highlighted = this.highlightJSON(escaped);
        }
        // Default - try to detect
        else {
            highlighted = this.highlightGeneric(escaped);
        }
        
        return highlighted;
    }
    
    // Highlight bash/shell commands
    highlightBash(line) {
        return line
            .replace(/^(\s*)(#.*)$/gm, '$1<span class="text-info">$2</span>') // Comments
            .replace(/(git|docker|npm|node|python|pip|cd|mkdir|ls|cat|echo)\s+/g, '<span class="text-warning">$1</span> ') // Commands
            .replace(/(https?:\/\/[^\s]+)/g, '<span class="text-danger">$1</span>') // URLs
            .replace(/`([^`]+)`/g, '<span class="text-success">$1</span>'); // Inline code
    }
    
    // Highlight Python code
    highlightPython(line) {
        return line
            .replace(/(#.*)$/g, '<span class="text-info">$1</span>') // Comments
            .replace(/\b(def|class|import|from|if|else|elif|for|while|return|try|except|with|as|pass|break|continue)\b/g, '<span class="text-primary">$1</span>') // Keywords
            .replace(/\b(True|False|None)\b/g, '<span class="text-success">$1</span>') // Constants
            .replace(/(["'])(?:(?=(\\?))\2.)*?\1/g, '<span class="text-danger">$&</span>') // Strings
            .replace(/\b(\d+)\b/g, '<span class="text-info">$1</span>'); // Numbers
    }
    
    // Highlight JavaScript code
    highlightJavaScript(line) {
        return line
            .replace(/(\/\/.*)$/g, '<span class="text-info">$1</span>') // Comments
            .replace(/\b(const|let|var|function|if|else|for|while|return|try|catch|async|await|import|export|from|default)\b/g, '<span class="text-primary">$1</span>') // Keywords
            .replace(/(["'])(?:(?=(\\?))\2.)*?\1/g, '<span class="text-danger">$&</span>') // Strings
            .replace(/\b(\d+)\b/g, '<span class="text-info">$1</span>'); // Numbers
    }
    
    // Highlight JSON
    highlightJSON(line) {
        return line
            .replace(/"([^"]+)":/g, '<span class="text-success">"$1"</span>:') // Keys
            .replace(/:(\s*)(["'])(?:(?=(\\?))\3.)*?\2/g, ':$1<span class="text-danger">$&</span>') // Values
            .replace(/\b(true|false|null)\b/g, '<span class="text-success">$1</span>') // Constants
            .replace(/\b(\d+)\b/g, '<span class="text-info">$1</span>'); // Numbers
    }
    
    // Generic highlighting
    highlightGeneric(line) {
        return line
            .replace(/(["'])(?:(?=(\\?))\2.)*?\1/g, '<span class="text-danger">$&</span>') // Strings
            .replace(/\b(\d+)\b/g, '<span class="text-info">$1</span>'); // Numbers
    }
    
    // Process markdown line (headers, bold, etc.)
    processMarkdownLine(line) {
        // Headers
        if (line.startsWith('# ')) {
            let content = line.substring(2);
            content = this.processInlineMarkdown(content);
            return `<h1 class="text-light mb-3">${content}</h1>`;
        }
        if (line.startsWith('## ')) {
            let content = line.substring(3);
            content = this.processInlineMarkdown(content);
            return `<h2 class="text-light mb-2 mt-3">${content}</h2>`;
        }
        if (line.startsWith('### ')) {
            let content = line.substring(4);
            content = this.processInlineMarkdown(content);
            return `<h3 class="text-light mb-2 mt-2">${content}</h3>`;
        }
        
        // Horizontal rule
        if (line.trim() === '---') {
            return '<hr class="border-secondary my-3">';
        }
        
        // List items
        if (line.trim().startsWith('- ') || line.trim().startsWith('* ')) {
            let content = line.trim().substring(2);
            content = this.processInlineMarkdown(content);
            return `<li class="text-light mb-1">${content}</li>`;
        }
        
        // Regular paragraph
        if (line.trim()) {
            let processed = this.processInlineMarkdown(line);
            return `<p class="text-light mb-2">${processed}</p>`;
        }
        
        return '<br>';
    }
    
    // Process inline markdown (bold, code, links, etc.)
    processInlineMarkdown(text) {
        // Escape HTML first
        let processed = text
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
        
        // Bold text
        processed = processed.replace(/\*\*([^*]+)\*\*/g, '<strong class="text-warning">$1</strong>');
        
        // Inline code
        processed = processed.replace(/`([^`]+)`/g, '<code class="text-success bg-dark px-1 rounded">$1</code>');
        
        // Links
        processed = processed.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-info" target="_blank">$1</a>');
        
        return processed;
    }
    
    translateContent(lang) {
        const elements = document.querySelectorAll('[data-translate]');
        const translations = this.translations[lang];
        
        if (!translations) return;
        
        elements.forEach(element => {
            const key = element.dataset.translate;
            if (translations[key]) {
                // Check if it's a README (by key or element type)
                if (key.startsWith('readme-') || element.tagName === 'PRE' || element.tagName === 'CODE') {
                    // Check if it's a README
                    if (key.startsWith('readme-')) {
                        element.innerHTML = this.processReadmeContent(translations[key]);
                    } else if (element.tagName === 'PRE' || element.tagName === 'CODE') {
                        element.textContent = translations[key];
                    } else {
                        element.innerHTML = translations[key];
                    }
                } else {
                    element.innerHTML = translations[key];
                }
            }
        });
        
        // Translate modal code text elements
        this.translateModalCodeTexts(lang);
        
        // Update document language
        document.documentElement.lang = lang;
    }
    
    // Translate modal code text elements (full and short versions)
    translateModalCodeTexts(lang) {
        const translations = this.translations[lang];
        if (!translations) return;
        
        const fullTextElements = document.querySelectorAll('.modal-code-text-full[data-translate]');
        const shortTextElements = document.querySelectorAll('.modal-code-text-short[data-translate]');
        
        fullTextElements.forEach(element => {
            const key = element.dataset.translate;
            if (translations[key]) {
                element.textContent = translations[key];
            }
        });
        
        shortTextElements.forEach(element => {
            const key = element.dataset.translate;
            // Use short version for mobile
            if (key === 'modal-see-full-code' && translations['modal-see-full-code-short']) {
                element.textContent = translations['modal-see-full-code-short'];
            } else if (translations[key]) {
                element.textContent = translations[key];
            }
        });
    }
    
    // Translate content when modal is shown
    translateModalContent(modalElement) {
        if (!modalElement) return;
        
        const lang = this.currentLanguage;
        const translations = this.translations[lang];
        if (!translations) return;
        
        const elements = modalElement.querySelectorAll('[data-translate]');
        elements.forEach(element => {
            const key = element.dataset.translate;
            if (translations[key]) {
                // Check if it's a README (by key or element type)
                if (key.startsWith('readme-') || element.tagName === 'PRE' || element.tagName === 'CODE') {
                    // Check if it's a README
                    if (key.startsWith('readme-')) {
                        element.innerHTML = this.processReadmeContent(translations[key]);
                    } else if (element.tagName === 'PRE' || element.tagName === 'CODE') {
                        element.textContent = translations[key];
                    } else {
                        element.innerHTML = translations[key];
                    }
                } else {
                    element.innerHTML = translations[key];
                }
            }
        });
        
        // Translate modal code text elements in this modal
        const fullTextElements = modalElement.querySelectorAll('.modal-code-text-full[data-translate]');
        const shortTextElements = modalElement.querySelectorAll('.modal-code-text-short[data-translate]');
        
        fullTextElements.forEach(element => {
            const key = element.dataset.translate;
            if (translations[key]) {
                element.textContent = translations[key];
            }
        });
        
        shortTextElements.forEach(element => {
            const key = element.dataset.translate;
            // Use short version for mobile
            if (key === 'modal-see-full-code' && translations['modal-see-full-code-short']) {
                element.textContent = translations['modal-see-full-code-short'];
            } else if (translations[key]) {
                element.textContent = translations[key];
            }
        });
    }
    
    saveLanguage(lang) {
        localStorage.setItem('preferred-language', lang);
    }
    
    loadSavedLanguage() {
        const savedLang = localStorage.getItem('preferred-language');
        if (savedLang && this.translations[savedLang]) {
            this.currentLanguage = savedLang;
            this.changeLanguage(savedLang);
        } else {
            // Update flag icon with default language
            this.updateFlagIcon(this.currentLanguage);
            // Translate content with default language
            // Use setTimeout to ensure DOM is fully ready
            setTimeout(() => {
                this.translateContent(this.currentLanguage);
            }, 100);
        }
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ProjectsLanguageMenu();
});

