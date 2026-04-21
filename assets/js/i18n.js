// ========================================
// Sistema de Internacionalização (i18n)
// ========================================

const translations = {
    'pt-BR': {
        // Navbar
        'nav.about': 'Sobre',
        'nav.technologies': 'Tecnologias',
        'nav.projects': 'Projetos',
        'nav.experience': 'Experiência',
        'nav.blog': 'Artigos',
        'nav.contact': 'Contato',
        'blog.loading': 'Carregando conteúdo...',
        'blog.fetching': 'Buscando artigos...',
        
        // Hero Section
        'hero.name': 'Rafael Dias Garcia',
        'hero.title': 'Engenharia de Software | Full Stack Developer',
        'hero.description': 'Desenvolvedor apaixonado por criar soluções robustas com Java e Angular. Músico clássico trazendo harmonia e lógica para o código.',
        'hero.viewProjects': 'Ver Projetos',
        'hero.contact': 'Entrar em Contato',
        
        // About Section
        'about.title': 'Sobre Mim',
        'about.p1': 'Atualmente cursando o terceiro termo de Engenharia de Software, minha trajetória é marcada pela disciplina e pela busca constante por excelência. Antes de mergulhar no código, dediquei anos ao estudo do violão clássico no Conservatório de Tatuí, o que me ensinou a importância da prática deliberada, atenção aos detalhes e trabalho em equipe.',
        'about.p2': 'Como estagiário no <strong>CWI Crescer</strong>, estou aplicando esses conceitos em um ambiente corporativo de alta performance, desenvolvendo softwares escaláveis e aprendendo as melhores práticas de mercado.',
        'about.university': 'UNIFIO',
        'about.universityDesc': 'Eng. Software (2028)',
        'about.certificates': 'Certificados & Cursos',
        'about.viewCertificates': 'Ver Lista Completa',
        'about.englishLevel': 'INGLÊS AVANÇADO',
        'about.degree': 'BACHARELADO ENG. SOFTWARE',
        'about.quote': '"Arquitetura de software é música congelada."',
        'about.quoteAuthor': '— Adaptado de Goethe',
        
        // Tech Stack Section
        'tech.title': 'Stack Tecnológico',
        'tech.subtitle': 'Ferramentas que utilizo no dia a dia. Passe o mouse para saber mais.',
        'tech.showMore': 'Ver Mais Tecnologias',
        'tech.showLess': 'Ver Menos',
        'tech.divider': 'Aprendendo Agora',
        'tech.java': 'Linguagem robusta para sistemas backend corporativos.',
        'tech.php': 'Desenvolvimento web dinâmico e veloz para servidores.',
        'tech.javascript': 'Interatividade no frontend e lógica no backend.',
        'tech.playwright': 'Testes E2E em navegadores com API estável e paralelização.',
        'tech.html': 'Estrutura semântica e estilização visual responsiva.',
        'tech.sql': 'Modelagem e consulta eficiente de bancos de dados.',
        'tech.python': 'Automação, processamento de dados e IA.',
        'tech.git': 'Controle de versão e colaboração em equipe.',
        'tech.docker': 'Containerização para ambientes de deploy consistentes.',
        'tech.spring': 'Framework Spring Boot para APIs REST e serviços backend escaláveis.',
        'tech.go': 'Linguagem moderna para sistemas de alta performance.',
        'tech.angular': 'Framework SPA do Google para aplicações web escaláveis.',
        'tech.devops': 'Integração contínua (CI/CD) e infraestrutura ágil.',
        'tech.security': 'Proteção de dados, vulnerabilidades e OWASP.',
        'tech.ai': 'Integração com LLMs e ferramentas de GenAI.',
        'tech.agile': 'Metodologias ágeis (Scrum/Kanban) para projetos.',
        
        // SGE Project
        'sge.badge': 'Projeto Destaque',
        'sge.title': 'SGE - Sistema de Gerenciamento de Eventos',
        'sge.description': 'Sistema de Gerenciamento de Eventos desenvolvido para o Centro Universitário UNIFIO. Aplicação web completa para modernizar e centralizar a gestão de eventos esportivos e acadêmicos na quadra poliesportiva da instituição.',
        'sge.feature1': 'PHP 8.2 & MySQL',
        'sge.feature2': 'Repository Pattern',
        'sge.feature3': 'Controle de Acesso (RBAC)',
        'sge.feature4': 'Dockerizado',
        'sge.viewCode': 'Ver Código',
        
        // Other Projects
        'projects.title': 'Projetos',
        'projects.showMore': 'Ver Mais Projetos',
        'projects.showLess': 'Ver Menos',
        'projects.llm.title': 'Classificador de Texto LLMOps',
        'projects.llm.badge': 'Gemini AI Powered',
        'projects.llm.description': 'Sistema de classificação de feedbacks usando fine-tuning (DistilBERT) com deploy via Docker e API FastAPI.',
        'projects.llm.note': 'Feito inteiramente com Gemini AI para iFood GenAI.',
        'projects.todo.title': 'Task Manager Pro',
        'projects.todo.badge': 'Java 21',
        'projects.todo.description': 'Sistema de gerenciamento de tarefas desktop com Swing. Prioridades, categorias, observações e exportação CSV/JSON.',
        'projects.weather.title': 'WeatherNow',
        'projects.weather.description': 'Dashboard de clima consumindo API OpenWeatherMap. Features de tema dark/light e requisições assíncronas.',
        'projects.guitar.title': 'Violão Clássico',
        'projects.guitar.description': 'Guia interativo open-source para a comunidade de violonistas. Recurso educacional colaborativo.',
        'projects.bookshelf.title': 'Bookshelf API',
        'projects.bookshelf.description': 'API RESTful com Node.js e Express. CRUD completo de livros com persistência local em JSON.',
        'projects.partituras.title': 'Partituras API',
        'projects.partituras.description': 'API REST em Spring Boot para gerenciar partituras, praticando arquitetura em camadas, validações e boas práticas do programa Crescer.',
        'projects.javaRoadmap.title': 'Roadmap Java Backend 2026',
        'projects.javaRoadmap.description': 'Guia completo de estudos em Java Backend. Roadmap estruturado com cronograma, notas de teoria e projetos práticos aplicando desde fundamentos até arquitetura.',
        
        // Experience Section
        'experience.title': 'Experiência Profissional',
        'experience.current': 'Atual',
        'experience.showMore': 'Ver Mais Experiências',
        'experience.showLess': 'Ver Menos',
        'experience.cwi.company': 'CWI Software (Crescer)',
        'experience.cwi.position': 'Estagiário',
        'experience.cwi.description': 'Capacitação intensiva em desenvolvimento de software corporativo focando em Java e Angular. Práticas de DevOps, Segurança e Metodologias Ágeis em ambiente simulado de alta performance.',
        'experience.conservatory.company': 'Conservatório de Tatuí',
        'experience.conservatory.position': 'Bolsista - Camerata de Violões',
        'experience.conservatory.description': 'Atuação profissional como músico, desenvolvendo disciplina rigorosa, trabalho em equipe e gestão de tempo sob pressão de apresentações públicas.',
        'experience.microtec.company': 'Microtec Papelaria e Informática',
        'experience.microtec.position': 'Estagiário de TI',
        'experience.microtec.description': 'Suporte técnico (hardware/software), gestão de inventário e atendimento ao cliente.',
        
        // Footer
        'footer.title': 'Vamos conversar?',
        'footer.description': 'Estou aberto a oportunidades em desenvolvimento web (Backend/Fullstack).',
        'footer.sendEmail': 'Enviar Email',
        'footer.linkedin': 'LinkedIn',
        'footer.copyright': '© 2025-2026 Rafael Dias Garcia - All Rights Reserved',
        
        // Contact Modal
        'contact.title': 'Enviar Mensagem',
        'contact.emailLabel': 'Seu Email',
        'contact.emailPlaceholder': 'nome@exemplo.com',
        'contact.messageLabel': 'Mensagem',
        'contact.messagePlaceholder': 'Como posso ajudar?',
        'contact.sendButton': 'Enviar Agora',
        'contact.successTitle': 'Mensagem Enviada!',
        'contact.successMessage': 'Obrigado pelo contato. Retornarei em breve.',
        'contact.errorTitle': 'Erro ao enviar',
        'contact.errorMessage': 'Houve um problema. Tente novamente ou use meu email direto.',
        'contact.tryAgain': 'Tentar Novamente',
        'contact.close': 'Fechar',
        
        // Certificates Modal
        'certs.title': 'Certificados & Cursos',
        'certs.cs50': 'CS50: Introduction to Computer Science',
        'certs.cs50.org': 'Harvard University',
        'certs.cisco': 'JavaScript Essentials',
        'certs.cisco.org': 'Cisco Networking Academy',
        'certs.huawei': 'Python Advanced',
        'certs.huawei.org': 'Huawei Talent Online',
        'certs.english': 'Advanced English (C1)',
        'certs.english.org': 'UNINTER - U-BEST',
        'certs.cwi': 'CWI Level 1',
        'certs.cwi.org': 'CWI Crescer',
        'certs.devdojo': 'Maratona Java & Spring Boot',
        'certs.devdojo.org': 'DevDojo',
        'certs.info': 'Clique no ícone para visualizar o certificado',
        
        // Mobile Menu
        'mobile.menu': 'Menu',
        'mobile.navigation': 'Navegação',
        'mobile.contactButton': 'Vamos conversar',
        'mobile.language': 'Idioma',
        
        // Tooltips
        'tooltip.university': 'Centro Universitário das Faculdades Integradas de Ourinhos',
        'tooltip.englishLevel': 'Nível avançado de inglês segundo o Quadro Europeu Comum de Referência para Línguas',
        'tooltip.degree': 'Cursando o 3º termo da faculdade de Engenharia de Software na UNIFIO',
        'tooltip.viewCertificate': 'Clique no ícone para visualizar o certificado',
    },
    
    'en': {
        // Navbar
        'nav.about': 'About',
        'nav.technologies': 'Technologies',
        'nav.projects': 'Projects',
        'nav.experience': 'Experience',
        'nav.blog': 'Articles',
        'nav.contact': 'Contact',
        'blog.loading': 'Loading content...',
        'blog.fetching': 'Fetching articles...',
        
        // Hero Section
        'hero.name': 'Rafael Dias Garcia',
        'hero.title': 'Software Engineering | Full Stack Developer',
        'hero.description': 'Developer passionate about creating robust solutions with Java and Angular. Classical musician bringing harmony and logic to code.',
        'hero.viewProjects': 'View Projects',
        'hero.contact': 'Get in Touch',
        
        // About Section
        'about.title': 'About Me',
        'about.p1': 'Currently in my third term of Software Engineering, my journey is marked by discipline and the constant pursuit of excellence. Before diving into code, I dedicated years to studying classical guitar at Tatuí Conservatory, which taught me the importance of deliberate practice, attention to detail, and teamwork.',
        'about.p2': 'As an intern at <strong>CWI Crescer</strong>, I am applying these concepts in a high-performance corporate environment, developing scalable software and learning industry best practices.',
        'about.university': 'UNIFIO',
        'about.universityDesc': 'Software Eng. (2028)',
        'about.certificates': 'Certificates & Courses',
        'about.viewCertificates': 'View Full List',
        'about.englishLevel': 'ADVANCED ENGLISH',
        'about.degree': 'SOFTWARE ENG. BACHELOR',
        'about.quote': '"Software architecture is frozen music."',
        'about.quoteAuthor': '— Adapted from Goethe',
        
        // Tech Stack Section
        'tech.title': 'Tech Stack',
        'tech.subtitle': 'Tools I use on a daily basis. Hover to learn more.',
        'tech.showMore': 'Show More Technologies',
        'tech.showLess': 'Show Less',
        'tech.divider': 'Currently Learning',
        'tech.java': 'Robust language for corporate backend systems.',
        'tech.php': 'Dynamic and fast web development for servers.',
        'tech.javascript': 'Frontend interactivity and backend logic.',
        'tech.playwright': 'End-to-end browser testing with a stable API and parallel runs.',
        'tech.html': 'Semantic structure and responsive visual styling.',
        'tech.sql': 'Efficient database modeling and querying.',
        'tech.python': 'Automation, data processing, and AI.',
        'tech.git': 'Version control and team collaboration.',
        'tech.docker': 'Containerization for consistent deployment environments.',
        'tech.spring': 'Spring Boot framework for REST APIs and scalable backend services.',
        'tech.go': 'Modern language for high-performance systems.',
        'tech.angular': 'Google\'s SPA framework for scalable web applications.',
        'tech.devops': 'Continuous integration (CI/CD) and agile infrastructure.',
        'tech.security': 'Data protection, vulnerabilities, and OWASP.',
        'tech.ai': 'Integration with LLMs and GenAI tools.',
        'tech.agile': 'Agile methodologies (Scrum/Kanban) for projects.',
        
        // SGE Project
        'sge.badge': 'Featured Project',
        'sge.title': 'SGE - Event Management System',
        'sge.description': 'Event Management System developed for UNIFIO University Center. Complete web application to modernize and centralize the management of sports and academic events at the institution\'s sports court.',
        'sge.feature1': 'PHP 8.2 & MySQL',
        'sge.feature2': 'Repository Pattern',
        'sge.feature3': 'Access Control (RBAC)',
        'sge.feature4': 'Dockerized',
        'sge.viewCode': 'View Code',
        
        // Other Projects
        'projects.title': 'Projects',
        'projects.showMore': 'Show More Projects',
        'projects.showLess': 'Show Less',
        'projects.llm.title': 'LLMOps Text Classifier',
        'projects.llm.badge': 'Gemini AI Powered',
        'projects.llm.description': 'Feedback classification system using fine-tuning (DistilBERT) with deployment via Docker and FastAPI.',
        'projects.llm.note': 'Entirely made with Gemini AI for iFood GenAI.',
        'projects.todo.title': 'Task Manager Pro',
        'projects.todo.badge': 'Java 21',
        'projects.todo.description': 'Desktop task management system with Swing. Priorities, categories, notes and CSV/JSON export.',
        'projects.weather.title': 'WeatherNow',
        'projects.weather.description': 'Weather dashboard consuming OpenWeatherMap API. Features dark/light theme and asynchronous requests.',
        'projects.guitar.title': 'Classical Guitar',
        'projects.guitar.description': 'Interactive open-source guide for the guitar community. Collaborative educational resource.',
        'projects.bookshelf.title': 'Bookshelf API',
        'projects.bookshelf.description': 'RESTful API with Node.js and Express. Complete CRUD for books with local JSON persistence.',
        'projects.partituras.title': 'Partituras API',
        'projects.partituras.description': 'Spring Boot REST API for managing sheet music, used to practice layered architecture, validations, and Crescer best practices.',
        'projects.javaRoadmap.title': 'Java Backend Roadmap 2026',
        'projects.javaRoadmap.description': 'Complete Java Backend study guide. Structured roadmap with timeline, theory notes, and practical projects from fundamentals to architecture.',
        
        // Experience Section
        'experience.title': 'Professional Experience',
        'experience.current': 'Current',
        'experience.showMore': 'Show More Experience',
        'experience.showLess': 'Show Less',
        'experience.cwi.company': 'CWI Software (Crescer)',
        'experience.cwi.position': 'Intern',
        'experience.cwi.description': 'Intensive training in corporate software development focusing on Java and Angular. DevOps practices, Security, and Agile Methodologies in a simulated high-performance environment.',
        'experience.conservatory.company': 'Tatuí Conservatory',
        'experience.conservatory.position': 'Scholar - Guitar Chamber',
        'experience.conservatory.description': 'Professional performance as a musician, developing rigorous discipline, teamwork, and time management under the pressure of public presentations.',
        'experience.microtec.company': 'Microtec Office Supplies and IT',
        'experience.microtec.position': 'IT Intern',
        'experience.microtec.description': 'Technical support (hardware/software), inventory management, and customer service.',
        
        // Footer
        'footer.title': 'Let\'s talk?',
        'footer.description': 'I am open to opportunities in web development (Backend/Fullstack).',
        'footer.sendEmail': 'Send Email',
        'footer.linkedin': 'LinkedIn',
        'footer.copyright': '© 2025-2026 Rafael Dias Garcia - All Rights Reserved',
        
        // Contact Modal
        'contact.title': 'Send Message',
        'contact.emailLabel': 'Your Email',
        'contact.emailPlaceholder': 'name@example.com',
        'contact.messageLabel': 'Message',
        'contact.messagePlaceholder': 'How can I help?',
        'contact.sendButton': 'Send Now',
        'contact.successTitle': 'Message Sent!',
        'contact.successMessage': 'Thank you for contacting me. I will get back to you soon.',
        'contact.errorTitle': 'Error sending',
        'contact.errorMessage': 'There was a problem. Please try again or use my direct email.',
        'contact.tryAgain': 'Try Again',
        'contact.close': 'Close',
        
        // Certificates Modal
        'certs.title': 'Certificates & Courses',
        'certs.cs50': 'CS50: Introduction to Computer Science',
        'certs.cs50.org': 'Harvard University',
        'certs.cisco': 'JavaScript Essentials',
        'certs.cisco.org': 'Cisco Networking Academy',
        'certs.huawei': 'Python Advanced',
        'certs.huawei.org': 'Huawei Talent Online',
        'certs.english': 'Advanced English (C1)',
        'certs.english.org': 'UNINTER - U-BEST',
        'certs.cwi': 'CWI Level 1',
        'certs.cwi.org': 'CWI Crescer',
        'certs.devdojo': 'Java & Spring Boot Bootcamp',
        'certs.devdojo.org': 'DevDojo',
        'certs.info': 'Click the icon to view the certificate',
        
        // Mobile Menu
        'mobile.menu': 'Menu',
        'mobile.navigation': 'Navigation',
        'mobile.contactButton': 'Let\'s talk',
        'mobile.language': 'Language',
        
        // Tooltips
        'tooltip.university': 'University Center of the Integrated Faculties of Ourinhos',
        'tooltip.englishLevel': 'Advanced English level according to the Common European Framework of Reference for Languages',
        'tooltip.degree': 'Currently in the 3rd term of Software Engineering at UNIFIO',
        'tooltip.viewCertificate': 'Click the icon to view the certificate',
    },
    
    'es': {
        // Navbar
        'nav.about': 'Sobre Mí',
        'nav.technologies': 'Tecnologías',
        'nav.projects': 'Proyectos',
        'nav.experience': 'Experiencia',
        'nav.blog': 'Artículos',
        'nav.contact': 'Contacto',
        
        // Hero Section
        'hero.name': 'Rafael Dias Garcia',
        'hero.title': 'Ingeniería de Software | Desarrollador Full Stack',
        'hero.description': 'Desarrollador apasionado por crear soluciones robustas con Java y Angular. Músico clásico que aporta armonía y lógica al código.',
        'hero.viewProjects': 'Ver Proyectos',
        'hero.contact': 'Ponerse en Contacto',
        
        // About Section
        'about.title': 'Sobre Mí',
        'about.p1': 'Actualmente cursando el tercer período de Ingeniería de Software, mi trayectoria está marcada por la disciplina y la búsqueda constante de excelencia. Antes de sumergirme en el código, dediqué años al estudio de la guitarra clásica en el Conservatorio de Tatuí, lo que me enseñó la importancia de la práctica deliberada, la atención al detalle y el trabajo en equipo.',
        'about.p2': 'Como pasante en <strong>CWI Crescer</strong>, estoy aplicando estos conceptos en un entorno corporativo de alto rendimiento, desarrollando software escalable y aprendiendo las mejores prácticas del mercado.',
        'about.university': 'UNIFIO',
        'about.universityDesc': 'Ing. Software (2028)',
        'about.certificates': 'Certificados y Cursos',
        'about.viewCertificates': 'Ver Lista Completa',
        'about.englishLevel': 'INGLÉS AVANZADO',
        'about.degree': 'LICENCIATURA ING. SOFTWARE',
        'about.quote': '"La arquitectura de software es música congelada."',
        'about.quoteAuthor': '— Adaptado de Goethe',
        
        // Tech Stack Section
        'tech.title': 'Stack Tecnológico',
        'tech.subtitle': 'Herramientas que uso a diario. Pasa el cursor para saber más.',
        'tech.showMore': 'Ver Más Tecnologías',
        'tech.showLess': 'Ver Menos',
        'tech.divider': 'Aprendiendo Ahora',
        'tech.java': 'Lenguaje robusto para sistemas backend corporativos.',
        'tech.php': 'Desarrollo web dinámico y rápido para servidores.',
        'tech.javascript': 'Interactividad en frontend y lógica en backend.',
        'tech.playwright': 'Pruebas E2E en navegadores con API estable y ejecución en paralelo.',
        'tech.html': 'Estructura semántica y estilización visual responsiva.',
        'tech.sql': 'Modelado y consulta eficiente de bases de datos.',
        'tech.python': 'Automatización, procesamiento de datos e IA.',
        'tech.git': 'Control de versiones y colaboración en equipo.',
        'tech.docker': 'Contenedorización para entornos de despliegue consistentes.',
        'tech.angular': 'Framework SPA de Google para aplicaciones web escalables.',
        'tech.devops': 'Integración continua (CI/CD) e infraestructura ágil.',
        'tech.security': 'Protección de datos, vulnerabilidades y OWASP.',
        'tech.ai': 'Integración con LLMs y herramientas de GenAI.',
        'tech.agile': 'Metodologías ágiles (Scrum/Kanban) para proyectos.',
        
        // SGE Project
        'sge.badge': 'Proyecto Destacado',
        'sge.title': 'SGE - Sistema de Gestión de Eventos',
        'sge.description': 'Sistema de Gestión de Eventos desarrollado para el Centro Universitario UNIFIO. Aplicación web completa para modernizar y centralizar la gestión de eventos deportivos y académicos en la cancha deportiva de la institución.',
        'sge.feature1': 'PHP 8.2 & MySQL',
        'sge.feature2': 'Patrón Repository',
        'sge.feature3': 'Control de Acceso (RBAC)',
        'sge.feature4': 'Dockerizado',
        'sge.viewCode': 'Ver Código',
        
        // Other Projects
        'projects.title': 'Proyectos',
        'projects.showMore': 'Ver Más Proyectos',
        'projects.showLess': 'Ver Menos',
        'projects.llm.title': 'Clasificador de Texto LLMOps',
        'projects.llm.badge': 'Potenciado por Gemini AI',
        'projects.llm.description': 'Sistema de clasificación de feedbacks usando fine-tuning (DistilBERT) con despliegue vía Docker y API FastAPI.',
        'projects.llm.note': 'Hecho completamente con Gemini AI para iFood GenAI.',
        'projects.todo.title': 'Task Manager Pro',
        'projects.todo.badge': 'Java 21',
        'projects.todo.description': 'Sistema de gestión de tareas de escritorio con Swing. Prioridades, categorías, notas y exportación CSV/JSON.',
        'projects.weather.title': 'WeatherNow',
        'projects.weather.description': 'Dashboard de clima consumiendo API OpenWeatherMap. Características de tema oscuro/claro y solicitudes asíncronas.',
        'projects.guitar.title': 'Guitarra Clásica',
        'projects.guitar.description': 'Guía interactiva de código abierto para la comunidad de guitarristas. Recurso educativo colaborativo.',
        'projects.bookshelf.title': 'Bookshelf API',
        'projects.bookshelf.description': 'API RESTful con Node.js y Express. CRUD completo de libros con persistencia local en JSON.',
        'projects.javaRoadmap.title': 'Hoja de Ruta Java Backend 2026',
        'projects.javaRoadmap.description': 'Guía completa de estudios en Java Backend. Hoja de ruta estructurada con cronograma, notas de teoría y proyectos prácticos desde fundamentos hasta arquitectura.',
        
        // Experience Section
        'experience.title': 'Experiencia Profesional',
        'experience.current': 'Actual',
        'experience.cwi.company': 'CWI Software (Crescer)',
        'experience.cwi.position': 'Pasante',
        'experience.cwi.description': 'Capacitación intensiva en desarrollo de software corporativo enfocándose en Java y Angular. Prácticas de DevOps, Seguridad y Metodologías Ágiles en un entorno simulado de alto rendimiento.',
        'experience.conservatory.company': 'Conservatorio de Tatuí',
        'experience.conservatory.position': 'Becario - Camerata de Guitarras',
        'experience.conservatory.description': 'Actuación profesional como músico, desarrollando disciplina rigurosa, trabajo en equipo y gestión del tiempo bajo la presión de presentaciones públicas.',
        'experience.microtec.company': 'Microtec Papelería e Informática',
        'experience.microtec.position': 'Pasante de TI',
        'experience.microtec.description': 'Soporte técnico (hardware/software), gestión de inventario y atención al cliente.',
        
        // Footer
        'footer.title': '¿Hablamos?',
        'footer.description': 'Estoy abierto a oportunidades en desarrollo web (Backend/Fullstack).',
        'footer.sendEmail': 'Enviar Email',
        'footer.linkedin': 'LinkedIn',
        'footer.copyright': '© 2025-2026 Rafael Dias Garcia - All Rights Reserved',
        
        // Contact Modal
        'contact.title': 'Enviar Mensaje',
        'contact.emailLabel': 'Tu Email',
        'contact.emailPlaceholder': 'nombre@ejemplo.com',
        'contact.messageLabel': 'Mensaje',
        'contact.messagePlaceholder': '¿Cómo puedo ayudarte?',
        'contact.sendButton': 'Enviar Ahora',
        'contact.successTitle': '¡Mensaje Enviado!',
        'contact.successMessage': 'Gracias por contactar. Te responderé pronto.',
        'contact.errorTitle': 'Error al enviar',
        'contact.errorMessage': 'Hubo un problema. Inténtalo de nuevo o usa mi email directo.',
        'contact.tryAgain': 'Intentar de Nuevo',
        'contact.close': 'Cerrar',
        
        // Certificates Modal
        'certs.title': 'Certificados y Cursos',
        'certs.cs50': 'CS50: Introducción a la Ciencia de la Computación',
        'certs.cs50.org': 'Universidad de Harvard',
        'certs.cisco': 'JavaScript Essentials',
        'certs.cisco.org': 'Cisco Networking Academy',
        'certs.huawei': 'Python Avanzado',
        'certs.huawei.org': 'Huawei Talent Online',
        'certs.english': 'Inglés Avanzado (C1)',
        'certs.english.org': 'UNINTER - U-BEST',
        'certs.cwi': 'CWI Nivel 1',
        'certs.cwi.org': 'CWI Crescer',
        'certs.devdojo': 'Bootcamp de Java y Spring Boot',
        'certs.devdojo.org': 'DevDojo',
        'certs.info': 'Haz clic en el icono para ver el certificado',
        
        // Mobile Menu
        'mobile.menu': 'Menú',
        'mobile.navigation': 'Navegación',
        'mobile.contactButton': 'Hablemos',
        'mobile.language': 'Idioma',
        
        // Tooltips
        'tooltip.university': 'Centro Universitario de las Facultades Integradas de Ourinhos',
        'tooltip.englishLevel': 'Nivel avanzado de inglés según el Marco Común Europeo de Referencia para las Lenguas',
        'tooltip.degree': 'Cursando el 3er período de Ingeniería de Software en UNIFIO',
        'tooltip.viewCertificate': 'Haz clic en el icono para ver el certificado',
    },
    
    'zh': {
        // Navbar
        'nav.about': '关于',
        'nav.technologies': '技术',
        'nav.projects': '项目',
        'nav.experience': '经验',
        'nav.blog': '文章',
        'nav.contact': '联系',
        
        // Hero Section
        'hero.name': 'Rafael Dias Garcia',
        'hero.title': '软件工程 | 全栈开发者',
        'hero.description': '热衷于使用 Java 和 Angular 创建强大解决方案的开发者。古典音乐家为代码带来和谐与逻辑。',
        'hero.viewProjects': '查看项目',
        'hero.contact': '联系我',
        
        // About Section
        'about.title': '关于我',
        'about.p1': '目前正在攻读软件工程第三学期，我的旅程以纪律和对卓越的不断追求为特征。在深入代码之前，我多年致力于在 Tatuí 音乐学院学习古典吉他，这教会了我刻意练习、注重细节和团队合作的重要性。',
        'about.p2': '作为 <strong>CWI Crescer</strong> 的实习生，我正在高性能企业环境中应用这些概念，开发可扩展的软件并学习行业最佳实践。',
        'about.university': 'UNIFIO',
        'about.universityDesc': '软件工程 (2028)',
        'about.certificates': '证书与课程',
        'about.viewCertificates': '查看完整列表',
        'about.englishLevel': '高级英语',
        'about.degree': '软件工程学士',
        'about.quote': '"软件架构是冰冻的音乐。"',
        'about.quoteAuthor': '— 改编自歌德',
        
        // Tech Stack Section
        'tech.title': '技术栈',
        'tech.subtitle': '我日常使用的工具。悬停以了解更多。',
        'tech.showMore': '查看更多技术',
        'tech.showLess': '收起',
        'tech.divider': '正在学习',
        'tech.java': '用于企业后端系统的强大语言。',
        'tech.php': '为服务器提供动态快速的 Web 开发。',
        'tech.javascript': '前端交互和后端逻辑。',
        'tech.playwright': '基于稳定 API 与并行执行的浏览器端到端测试。',
        'tech.html': '语义结构和响应式视觉样式。',
        'tech.sql': '高效的数据库建模和查询。',
        'tech.python': '自动化、数据处理和人工智能。',
        'tech.git': '版本控制和团队协作。',
        'tech.docker': '容器化以获得一致的部署环境。',
        'tech.angular': 'Google 的 SPA 框架，用于可扩展的 Web 应用程序。',
        'tech.devops': '持续集成 (CI/CD) 和敏捷基础设施。',
        'tech.security': '数据保护、漏洞和 OWASP。',
        'tech.ai': '与 LLM 和 GenAI 工具集成。',
        'tech.agile': '项目的敏捷方法论（Scrum/Kanban）。',
        
        // SGE Project
        'sge.badge': '特色项目',
        'sge.title': 'SGE - 活动管理系统',
        'sge.description': '为 UNIFIO 大学中心开发的活动管理系统。完整的 Web 应用程序，用于现代化和集中管理学校体育场的体育和学术活动。',
        'sge.feature1': 'PHP 8.2 & MySQL',
        'sge.feature2': 'Repository 模式',
        'sge.feature3': '访问控制 (RBAC)',
        'sge.feature4': 'Docker 化',
        'sge.viewCode': '查看代码',
        
        // Other Projects
        'projects.title': '项目',
        'projects.showMore': '查看更多项目',
        'projects.showLess': '收起',
        'projects.llm.title': 'LLMOps 文本分类器',
        'projects.llm.badge': 'Gemini AI 驱动',
        'projects.llm.description': '使用微调 (DistilBERT) 的反馈分类系统，通过 Docker 和 FastAPI 部署。',
        'projects.llm.note': '完全使用 Gemini AI 为 iFood GenAI 制作。',
        'projects.todo.title': 'Task Manager Pro',
        'projects.todo.badge': 'Java 21',
        'projects.todo.description': '使用 Swing 的桌面任务管理系统。优先级、类别、笔记和 CSV/JSON 导出。',
        'projects.weather.title': 'WeatherNow',
        'projects.weather.description': '消费 OpenWeatherMap API 的天气仪表板。具有深色/浅色主题和异步请求功能。',
        'projects.guitar.title': '古典吉他',
        'projects.guitar.description': '为吉他社区提供的交互式开源指南。协作教育资源。',
        'projects.bookshelf.title': 'Bookshelf API',
        'projects.bookshelf.description': '使用 Node.js 和 Express 的 RESTful API。具有本地 JSON 持久性的完整书籍 CRUD。',
        'projects.javaRoadmap.title': 'Java 后端路线图 2026',
        'projects.javaRoadmap.description': '完整的 Java 后端学习指南。结构化路线图，包含时间表、理论笔记和从基础到架构的实践项目。',
        
        // Experience Section
        'experience.title': '专业经验',
        'experience.current': '当前',
        'experience.cwi.company': 'CWI Software (Crescer)',
        'experience.cwi.position': '实习生',
        'experience.cwi.description': '专注于 Java 和 Angular 的企业软件开发强化培训。在模拟的高性能环境中进行 DevOps 实践、安全性和敏捷方法论。',
        'experience.conservatory.company': 'Tatuí 音乐学院',
        'experience.conservatory.position': '学者 - 吉他室内乐',
        'experience.conservatory.description': '作为音乐家的专业表演，在公开演出的压力下培养严格的纪律、团队合作和时间管理。',
        'experience.microtec.company': 'Microtec 办公用品和 IT',
        'experience.microtec.position': 'IT 实习生',
        'experience.microtec.description': '技术支持（硬件/软件）、库存管理和客户服务。',
        
        // Footer
        'footer.title': '让我们谈谈？',
        'footer.description': '我愿意接受 Web 开发（后端/全栈）方面的机会。',
        'footer.sendEmail': '发送电子邮件',
        'footer.linkedin': 'LinkedIn',
        'footer.copyright': '© 2025-2026 Rafael Dias Garcia - All Rights Reserved',
        
        // Contact Modal
        'contact.title': '发送消息',
        'contact.emailLabel': '您的电子邮件',
        'contact.emailPlaceholder': 'name@example.com',
        'contact.messageLabel': '消息',
        'contact.messagePlaceholder': '我能帮您什么？',
        'contact.sendButton': '立即发送',
        'contact.successTitle': '消息已发送！',
        'contact.successMessage': '感谢您的联系。我会尽快回复您。',
        'contact.errorTitle': '发送错误',
        'contact.errorMessage': '出现问题。请重试或使用我的直接电子邮件。',
        'contact.tryAgain': '重试',
        'contact.close': '关闭',
        
        // Certificates Modal
        'certs.title': '证书与课程',
        'certs.cs50': 'CS50：计算机科学导论',
        'certs.cs50.org': '哈佛大学',
        'certs.cisco': 'JavaScript Essentials',
        'certs.cisco.org': 'Cisco Networking Academy',
        'certs.huawei': 'Python 高级',
        'certs.huawei.org': 'Huawei Talent Online',
        'certs.english': '高级英语 (C1)',
        'certs.english.org': 'UNINTER - U-BEST',
        'certs.cwi': 'CWI 一级',
        'certs.cwi.org': 'CWI Crescer',
        'certs.devdojo': 'Java 与 Spring Boot 训练营',
        'certs.devdojo.org': 'DevDojo',
        'certs.info': '点击图标查看证书',
        
        // Mobile Menu
        'mobile.menu': '菜单',
        'mobile.navigation': '导航',
        'mobile.contactButton': '让我们谈谈',
        'mobile.language': '语言',
        
        // Tooltips
        'tooltip.university': 'Ourinhos 综合学院大学中心',
        'tooltip.englishLevel': '根据欧洲语言共同参考框架的高级英语水平',
        'tooltip.degree': '目前在 UNIFIO 就读软件工程第三学期',
        'tooltip.viewCertificate': '点击图标查看证书',
    },
    
    'de': {
        // Navbar
        'nav.about': 'Über',
        'nav.technologies': 'Technologien',
        'nav.projects': 'Projekte',
        'nav.experience': 'Erfahrung',
        'nav.blog': 'Artikel',
        'nav.contact': 'Kontakt',
        
        // Hero Section
        'hero.name': 'Rafael Dias Garcia',
        'hero.title': 'Software-Engineering | Full-Stack-Entwickler',
        'hero.description': 'Entwickler mit Leidenschaft für robuste Lösungen mit Java und Angular. Klassischer Musiker, der Harmonie und Logik in den Code bringt.',
        'hero.viewProjects': 'Projekte ansehen',
        'hero.contact': 'Kontakt aufnehmen',
        
        // About Section
        'about.title': 'Über mich',
        'about.p1': 'Ich befinde mich derzeit im dritten Semester des Software-Engineerings, und mein Weg ist geprägt von Disziplin und dem ständigen Streben nach Exzellenz. Bevor ich mich in den Code vertiefte, widmete ich Jahre dem Studium der klassischen Gitarre am Tatuí-Konservatorium, was mir die Bedeutung von gezieltem Üben, Liebe zum Detail und Teamarbeit lehrte.',
        'about.p2': 'Als Praktikant bei <strong>CWI Crescer</strong> wende ich diese Konzepte in einem leistungsstarken Unternehmensumfeld an, entwickle skalierbare Software und lerne Best Practices der Branche.',
        'about.university': 'UNIFIO',
        'about.universityDesc': 'Software-Eng. (2028)',
        'about.certificates': 'Zertifikate & Kurse',
        'about.viewCertificates': 'Vollständige Liste anzeigen',
        'about.englishLevel': 'FORTGESCHRITTENES ENGLISCH',
        'about.degree': 'SOFTWARE-ENG. BACHELOR',
        'about.quote': '"Software-Architektur ist gefrorene Musik."',
        'about.quoteAuthor': '— Adaptiert von Goethe',
        
        // Tech Stack Section
        'tech.title': 'Tech-Stack',
        'tech.subtitle': 'Tools, die ich täglich verwende. Fahren Sie mit der Maus darüber, um mehr zu erfahren.',
        'tech.showMore': 'Mehr Technologien anzeigen',
        'tech.showLess': 'Weniger anzeigen',
        'tech.divider': 'Derzeit lerne ich',
        'tech.java': 'Robuste Sprache für Unternehmens-Backend-Systeme.',
        'tech.php': 'Dynamische und schnelle Webentwicklung für Server.',
        'tech.javascript': 'Frontend-Interaktivität und Backend-Logik.',
        'tech.playwright': 'End-to-End-Browsertests mit stabiler API und Parallelisierung.',
        'tech.html': 'Semantische Struktur und responsives visuelles Styling.',
        'tech.sql': 'Effiziente Datenbankmodellierung und -abfrage.',
        'tech.python': 'Automatisierung, Datenverarbeitung und KI.',
        'tech.git': 'Versionskontrolle und Teamzusammenarbeit.',
        'tech.docker': 'Containerisierung für konsistente Bereitstellungsumgebungen.',
        'tech.angular': 'Googles SPA-Framework für skalierbare Webanwendungen.',
        'tech.devops': 'Kontinuierliche Integration (CI/CD) und agile Infrastruktur.',
        'tech.security': 'Datenschutz, Schwachstellen und OWASP.',
        'tech.ai': 'Integration mit LLMs und GenAI-Tools.',
        'tech.agile': 'Agile Methoden (Scrum/Kanban) für Projekte.',
        
        // SGE Project
        'sge.badge': 'Vorgestelltes Projekt',
        'sge.title': 'SGE - Event-Management-System',
        'sge.description': 'Event-Management-System, das für das UNIFIO-Universitätszentrum entwickelt wurde. Vollständige Webanwendung zur Modernisierung und Zentralisierung der Verwaltung von Sport- und akademischen Veranstaltungen auf dem Sportplatz der Institution.',
        'sge.feature1': 'PHP 8.2 & MySQL',
        'sge.feature2': 'Repository-Muster',
        'sge.feature3': 'Zugriffskontrolle (RBAC)',
        'sge.feature4': 'Dockerisiert',
        'sge.viewCode': 'Code ansehen',
        
        // Other Projects
        'projects.title': 'Projekte',
        'projects.showMore': 'Mehr Projekte anzeigen',
        'projects.showLess': 'Weniger anzeigen',
        'projects.llm.title': 'LLMOps-Textklassifikator',
        'projects.llm.badge': 'Angetrieben von Gemini AI',
        'projects.llm.description': 'Feedback-Klassifizierungssystem mit Feinabstimmung (DistilBERT) und Bereitstellung über Docker und FastAPI.',
        'projects.llm.note': 'Vollständig mit Gemini AI für iFood GenAI erstellt.',
        'projects.todo.title': 'Task Manager Pro',
        'projects.todo.badge': 'Java 21',
        'projects.todo.description': 'Desktop-Aufgabenverwaltungssystem mit Swing. Prioritäten, Kategorien, Notizen und CSV/JSON-Export.',
        'projects.weather.title': 'WeatherNow',
        'projects.weather.description': 'Wetter-Dashboard, das die OpenWeatherMap-API nutzt. Funktionen mit dunklem/hellem Design und asynchronen Anfragen.',
        'projects.guitar.title': 'Klassische Gitarre',
        'projects.guitar.description': 'Interaktiver Open-Source-Leitfaden für die Gitarren-Community. Kollaborative Bildungsressource.',
        'projects.bookshelf.title': 'Bookshelf API',
        'projects.bookshelf.description': 'RESTful-API mit Node.js und Express. Vollständige CRUD für Bücher mit lokaler JSON-Persistenz.',
        'projects.javaRoadmap.title': 'Java-Backend-Roadmap 2026',
        'projects.javaRoadmap.description': 'Vollständiger Java-Backend-Studienführer. Strukturierte Roadmap mit Zeitplan, Theorienotizen und praktischen Projekten von Grundlagen bis Architektur.',
        
        // Experience Section
        'experience.title': 'Berufserfahrung',
        'experience.current': 'Aktuell',
        'experience.cwi.company': 'CWI Software (Crescer)',
        'experience.cwi.position': 'Praktikant',
        'experience.cwi.description': 'Intensive Schulung in der Entwicklung von Unternehmenssoftware mit Schwerpunkt auf Java und Angular. DevOps-Praktiken, Sicherheit und agile Methoden in einer simulierten Hochleistungsumgebung.',
        'experience.conservatory.company': 'Tatuí-Konservatorium',
        'experience.conservatory.position': 'Stipendiat - Gitarrenkammer',
        'experience.conservatory.description': 'Professionelle Auftritte als Musiker, Entwicklung strenger Disziplin, Teamarbeit und Zeitmanagement unter dem Druck öffentlicher Auftritte.',
        'experience.microtec.company': 'Microtec Bürobedarf und IT',
        'experience.microtec.position': 'IT-Praktikant',
        'experience.microtec.description': 'Technischer Support (Hardware/Software), Bestandsverwaltung und Kundenservice.',
        
        // Footer
        'footer.title': 'Lass uns reden?',
        'footer.description': 'Ich bin offen für Möglichkeiten in der Webentwicklung (Backend/Fullstack).',
        'footer.sendEmail': 'E-Mail senden',
        'footer.linkedin': 'LinkedIn',
        'footer.copyright': '© 2025-2026 Rafael Dias Garcia - All Rights Reserved',
        
        // Contact Modal
        'contact.title': 'Nachricht senden',
        'contact.emailLabel': 'Ihre E-Mail',
        'contact.emailPlaceholder': 'name@beispiel.com',
        'contact.messageLabel': 'Nachricht',
        'contact.messagePlaceholder': 'Wie kann ich helfen?',
        'contact.sendButton': 'Jetzt senden',
        'contact.successTitle': 'Nachricht gesendet!',
        'contact.successMessage': 'Vielen Dank für Ihre Kontaktaufnahme. Ich werde mich in Kürze bei Ihnen melden.',
        'contact.errorTitle': 'Fehler beim Senden',
        'contact.errorMessage': 'Es gab ein Problem. Bitte versuchen Sie es erneut oder verwenden Sie meine direkte E-Mail.',
        'contact.tryAgain': 'Erneut versuchen',
        'contact.close': 'Schließen',
        
        // Certificates Modal
        'certs.title': 'Zertifikate & Kurse',
        'certs.cs50': 'CS50: Einführung in die Informatik',
        'certs.cs50.org': 'Harvard-Universität',
        'certs.cisco': 'JavaScript Essentials',
        'certs.cisco.org': 'Cisco Networking Academy',
        'certs.huawei': 'Python Fortgeschritten',
        'certs.huawei.org': 'Huawei Talent Online',
        'certs.english': 'Fortgeschrittenes Englisch (C1)',
        'certs.english.org': 'UNINTER - U-BEST',
        'certs.cwi': 'CWI Stufe 1',
        'certs.cwi.org': 'CWI Crescer',
        'certs.devdojo': 'Java & Spring Boot Bootcamp',
        'certs.devdojo.org': 'DevDojo',
        'certs.info': 'Klicken Sie auf das Symbol, um das Zertifikat anzuzeigen',
        
        // Mobile Menu
        'mobile.menu': 'Menü',
        'mobile.navigation': 'Navigation',
        'mobile.contactButton': 'Lass uns reden',
        'mobile.language': 'Sprache',
        
        // Tooltips
        'tooltip.university': 'Universitätszentrum der Integrierten Fakultäten von Ourinhos',
        'tooltip.englishLevel': 'Fortgeschrittenes Englischniveau nach dem Gemeinsamen Europäischen Referenzrahmen für Sprachen',
        'tooltip.degree': 'Derzeit im 3. Semester Software-Engineering an der UNIFIO',
        'tooltip.viewCertificate': 'Klicken Sie auf das Symbol, um das Zertifikat anzuzeigen',
    }
};

// Language configurations
const languages = {
    'pt-BR': { name: 'Português', flag: '🇧🇷' },
    'en': { name: 'English', flag: '🇺🇸' },
    'es': { name: 'Español', flag: '🇪🇸' },
    'zh': { name: '中文', flag: '🇨🇳' },
    'de': { name: 'Deutsch', flag: '🇩🇪' }
};

// Initialize i18n
let currentLanguage = localStorage.getItem('language') || 'pt-BR';

function setLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    updatePageLanguage();
    updateLanguageSelector();
}

function updatePageLanguage() {
    const t = translations[currentLanguage];
    if (!t) return;
    
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (t[key]) {
            // Check if the element should use innerHTML (for elements with HTML tags)
            if (element.hasAttribute('data-i18n-html')) {
                element.innerHTML = t[key];
            } else {
                element.textContent = t[key];
            }
        }
    });
    
    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (t[key]) {
            element.placeholder = t[key];
        }
    });
    
    // Update tooltips only if Bootstrap is available
    if (typeof bootstrap !== 'undefined' && bootstrap.Tooltip) {
        // Update tooltips - dispose all first, then recreate
        document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(element => {
            const tooltipInstance = bootstrap.Tooltip.getInstance(element);
            if (tooltipInstance) {
                tooltipInstance.dispose();
            }
        });
        
        // Now update tooltip text and recreate them
        document.querySelectorAll('[data-i18n-tooltip]').forEach(element => {
            const key = element.getAttribute('data-i18n-tooltip');
            if (t[key]) {
                // Update the data-bs-title attribute
                element.setAttribute('data-bs-title', t[key]);
            }
        });
        
        // Reinitialize all tooltips
        const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
        [...tooltipTriggerList].forEach(tooltipTriggerEl => {
            new bootstrap.Tooltip(tooltipTriggerEl);
        });
    }
    
    // Update HTML lang attribute
    document.documentElement.lang = currentLanguage;
}

function updateLanguageSelector() {
    const currentLang = languages[currentLanguage];
    
    // Update desktop selector
    const desktopBtn = document.getElementById('languageSelectorBtn');
    if (desktopBtn) {
        desktopBtn.innerHTML = `${currentLang.flag} <i class="fas fa-chevron-down ms-1"></i>`;
    }
    
    // Update mobile selector
    const mobileBtn = document.getElementById('mobileLanguageBtn');
    if (mobileBtn) {
        mobileBtn.innerHTML = `<span class="flag-emoji">${currentLang.flag}</span>`;
    }
    
    // Update active state in dropdowns
    document.querySelectorAll('[data-lang]').forEach(item => {
        const lang = item.getAttribute('data-lang');
        if (lang === currentLanguage) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Small delay to ensure Bootstrap tooltips are initialized first
    setTimeout(function() {
        // Set initial language
        updatePageLanguage();
        updateLanguageSelector();
    }, 50);
    
    // Add click handlers for language selection
    document.querySelectorAll('[data-lang]').forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const lang = this.getAttribute('data-lang');
            setLanguage(lang);
            
            // Close dropdowns after selection
            const desktopDropdown = document.getElementById('languageDropdown');
            const mobileDropdown = document.getElementById('mobileLanguageDropdown');
            
            if (desktopDropdown) {
                desktopDropdown.classList.remove('show');
            }
            if (mobileDropdown) {
                mobileDropdown.classList.remove('show');    
            }
        });
    });
});

// Export for global use
window.i18n = {
    setLanguage,
    currentLanguage: () => currentLanguage,
    translate: (key) => translations[currentLanguage][key] || key
};

