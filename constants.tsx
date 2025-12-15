import { ExperienceItem, SkillCategory, EducationItem, LanguageItem, ProjectItem, CertificationItem } from './types';
import { Github, Linkedin, Mail, Smartphone, Globe } from 'lucide-react';

const SHARED_INFO = {
  phone: "+55 11 9 8747 7525",
  email: "brunomouazzem@gmail.com",
  linkedin: "https://linkedin.com/in/bruno-mouazzem",
  linkedinDisplay: "linkedin.com/bruno-mouazzem",
  website: "https://www.brunomouazzem.com",
  websiteDisplay: "www.brunomouazzem.com",
};

export const CONTACT_LINKS = [
  { icon: Smartphone, text: SHARED_INFO.phone, href: `tel:${SHARED_INFO.phone.replace(/\s/g, '')}` },
  { icon: Mail, text: SHARED_INFO.email, href: `mailto:${SHARED_INFO.email}` },
  { icon: Linkedin, text: SHARED_INFO.linkedinDisplay, href: SHARED_INFO.linkedin },
  { icon: Globe, text: SHARED_INFO.websiteDisplay, href: SHARED_INFO.website },
];

const SKILLS_DATA: SkillCategory[] = [
  {
    title: "Programming Languages", // Will be translated in PT view if needed, or kept technical
    items: ["Python", "JavaScript", "Shell Script"]
  },
  {
    title: "Frameworks & Libraries",
    items: ["FastAPI / Django", "SQLAlchemy", "Pytest", "Docker", "Serverless Framework"]
  },
  {
    title: "Architecture & Design",
    items: ["Domain-Driven Design (DDD)", "Clean Architecture", "Microservices", "Modern Monoliths", "RESTful APIs"]
  },
  {
    title: "Databases",
    items: ["PostgreSQL", "MySQL", "DynamoDB", "Redis"]
  },
  {
    title: "Cloud & DevOps",
    items: ["AWS", "GitHub Actions", "Linux"]
  },
  {
    title: "Engineering Practices",
    items: ["Automated testing", "CI/CD", "Trunk Based Development"]
  }
];

export const DATA = {
  en: {
    personalInfo: {
      name: "Bruno Mouazzem",
      role: "Software Engineer",
      profile: `Experienced Backend Software Engineer with over 6 years of hands-on development in scalable, distributed systems using Python and AWS. Adept at translating complex business needs into clean, maintainable architectures following Domain-Driven Design and Clean Architecture principles. Highly adaptable and continuously learning, I thrive in fast-paced environments where I can apply my technical expertise while quickly acquiring new skills to drive meaningful impact. Now seeking a senior-level backend role where I can contribute to ambitious engineering goals and collaborate with high-performing remote teams.`
    },
    ui: {
      nav: {
        about: "_about",
        skills: "_stack",
        experience: "_experience",
        projects: "_projects",
        contact: "_contact"
      },
      hero: {
        available: "Available for hire",
        intro: "I build scalable distributed systems and robust backend architectures. Turning complex business logic into clean, maintainable code is my craft.",
        contactBtn: "./contact_me.sh",
        downloadBtn: "download_cv.pdf",
        codeWindow: {
            filename: "bruno_profile.json",
            status: "Open to work"
        }
      },
      sectionTitles: {
        skills: "Tech Stack",
        experience: "Commit History",
        projects: "Architecture Highlights",
        education: "Education",
        certifications: "Certifications",
        languages: "Languages"
      },
      footer: {
        commitMsg: "Open to new opportunities",
        rights: "All rights reserved."
      }
    },
    skills: SKILLS_DATA,
    experience: [
      {
        company: "Salú",
        role: "Tech Lead / Backend Software Engineer",
        period: "DEC 2023 - PRESENT",
        description: [
          "Led a backend team, organizing and prioritizing tasks to ensure timely delivery and boost overall productivity.",
          "Designed scalable software solutions following Domain-Driven Design (DDD) principles to meet evolving business requirements.",
          "Refactored a complex legacy system into a modern architecture, significantly reducing technical debt and simplifying feature development.",
          "Developed and maintained RESTful APIs using AWS Lambda, FastAPI, and PostgreSQL, ensuring high availability and performance.",
          "Implemented code quality standards via reviews, best practices, and mentorship of junior developers.",
          "Created CI/CD pipelines using GitHub Actions, reducing deployment errors and accelerating delivery cycles."
        ]
      },
      {
        company: "Ouribank",
        role: "Tech Lead",
        period: "JAN 2022 - DEC 2023",
        description: [
          "Guided cross-functional teams in delivering secure, scalable features with modern backend practices.",
          "Applied DDD and Agile methodologies to ensure business-technical alignment during discovery and implementation phases.",
          "Designed robust CI/CD workflows with GitHub Actions, enabling consistent and automated deployments.",
          "Developed and maintained an Airflow pipeline to keep the legacy database and the new application database in sync, ensuring data consistency during the transition phase."
        ],
        subRoles: [
          {
            role: "Backend Software Engineer",
            description: [
              "Developed and deployed backend services using FastAPI and Clean Architecture, ensuring modular, testable codebases.",
              "Integrated core AWS services (API Gateway, Lambda, SNS, SQS, Cognito, RDS, DynamoDB) into backend architecture.",
              "Improved observability and maintainability of distributed systems through logging, monitoring, and structured error handling."
            ]
          }
        ]
      },
      {
        company: "Itaú Unibanco",
        role: "Data Analyst",
        period: "MAY 2019 - JAN 2022",
        description: [
          "Analyzed and interpreted large datasets to support strategic decisions across business units.",
          "Created automated reports and dashboards to monitor KPIs and operational performance.",
          "Collaborated with stakeholders to translate business needs into data solutions."
        ],
        subRoles: [
          {
            role: "Developer Intern",
            description: [
              "Assisted in the development and maintenance of internal tools to automate processes and improve efficiency.",
              "Wrote scripts and small applications using Python and shell scripting.",
              "Participated in debugging, testing, and version control processes alongside the development team.",
              "Gained practical experience with the software development lifecycle in a corporate environment."
            ]
          }
        ]
      }
    ] as ExperienceItem[],
    projects: [
      {
        title: "Serverless FinTech Core",
        category: "Architecture",
        description: "Designed a secure, event-driven payment processing infrastructure using AWS Lambda, SNS, and SQS. Reduced infrastructure costs while improving scalability for high-volume transactions.",
        tech: ["AWS Lambda", "Python", "SQS/SNS", "DynamoDB"]
      },
      {
        title: "Legacy System Modernization",
        category: "Refactoring",
        description: "Strategically decoupled a monolithic healthcare platform into a modular architecture using Domain-Driven Design (DDD). Significantly reduced technical debt and improved deployment velocity.",
        tech: ["FastAPI", "PostgreSQL", "DDD", "Clean Arch"]
      },
      {
        title: "Data Sync Pipeline",
        category: "Data Engineering",
        description: "Built robust Airflow pipelines to maintain real-time consistency between legacy SQL databases and new microservices during a multi-phase migration strategy.",
        tech: ["Apache Airflow", "Python", "SQL", "ETL"]
      }
    ] as ProjectItem[],
    education: [
      {
        school: "State University of Campinas - UNICAMP",
        degree: "Control and Automation Engineering",
        period: "2015 - 2021"
      }
    ] as EducationItem[],
    certifications: [] as CertificationItem[],
    languages: [
      { language: "Portuguese", level: "Native" },
      { language: "English", level: "Advanced - C1" },
      { language: "French", level: "Intermediate - B1" },
      { language: "Spanish", level: "Basic - A2" }
    ] as LanguageItem[]
  },
  pt: {
    personalInfo: {
      name: "Bruno Mouazzem",
      role: "Engenheiro de Software",
      profile: `Engenheiro de Software Backend experiente com mais de 6 anos de desenvolvimento prático em sistemas distribuídos escaláveis utilizando Python e AWS. Especialista em traduzir necessidades complexas de negócios em arquiteturas limpas e sustentáveis, seguindo princípios de Domain-Driven Design (DDD) e Clean Architecture. Altamente adaptável e em constante aprendizado, prospero em ambientes dinâmicos onde posso aplicar minha expertise técnica enquanto adquiro rapidamente novas habilidades para gerar impacto significativo. Busco atuar como sênior em backend, contribuindo para objetivos de engenharia ambiciosos e colaborando com equipes remotas de alta performance.`
    },
    ui: {
      nav: {
        about: "_sobre",
        skills: "_stack",
        experience: "_experiencia",
        projects: "_projetos",
        contact: "_contato"
      },
      hero: {
        available: "Disponível para projetos",
        intro: "Construo sistemas distribuídos escaláveis e arquiteturas de backend robustas. Transformar lógica de negócios complexa em código limpo e sustentável é minha especialidade.",
        contactBtn: "./contato.sh",
        downloadBtn: "baixar_cv.pdf",
        codeWindow: {
            filename: "bruno_perfil.json",
            status: "Disponível"
        }
      },
      sectionTitles: {
        skills: "Stack Tecnológico",
        experience: "Histórico de Commits",
        projects: "Destaques de Arquitetura",
        education: "Formação",
        certifications: "Certificações",
        languages: "Idiomas"
      },
      footer: {
        commitMsg: "Aberto a novas oportunidades",
        rights: "Todos os direitos reservados."
      }
    },
    skills: SKILLS_DATA, // Tech terms usually stay in English/Global
    experience: [
      {
        company: "Salú",
        role: "Tech Lead / Engenheiro de Software Backend",
        period: "DEZ 2023 - ATUAL",
        description: [
          "Liderei uma equipe de backend, organizando e priorizando tarefas para garantir entregas pontuais e aumentar a produtividade geral.",
          "Projetei soluções de software escaláveis seguindo princípios de Domain-Driven Design (DDD) para atender a requisitos de negócios em evolução.",
          "Refatorei um sistema legado complexo para uma arquitetura moderna, reduzindo significativamente a dívida técnica e simplificando o desenvolvimento de funcionalidades.",
          "Desenvolvi e mantive APIs RESTful usando AWS Lambda, FastAPI e PostgreSQL, garantindo alta disponibilidade e desempenho.",
          "Implementei padrões de qualidade de código via revisões, melhores práticas e mentoria de desenvolvedores júnior.",
          "Criei pipelines de CI/CD usando GitHub Actions, reduzindo erros de implantação e acelerando ciclos de entrega."
        ]
      },
      {
        company: "Ouribank",
        role: "Tech Lead",
        period: "JAN 2022 - DEZ 2023",
        description: [
          "Guiei equipes multifuncionais na entrega de funcionalidades seguras e escaláveis com práticas modernas de backend.",
          "Apliquei metodologias de DDD e Agile para garantir o alinhamento técnico-comercial durante as fases de descoberta e implementação.",
          "Projetei fluxos de trabalho robustos de CI/CD com GitHub Actions, permitindo implantações consistentes e automatizadas.",
          "Desenvolvi e mantive um pipeline Airflow para manter o banco de dados legado e o novo banco de dados da aplicação sincronizados, garantindo consistência de dados durante a fase de transição."
        ],
        subRoles: [
          {
            role: "Engenheiro de Software Backend",
            description: [
              "Desenvolvi e implantei serviços de backend usando FastAPI e Clean Architecture, garantindo bases de código modulares e testáveis.",
              "Integrei serviços principais da AWS (API Gateway, Lambda, SNS, SQS, Cognito, RDS, DynamoDB) na arquitetura de backend.",
              "Melhorei a observabilidade e a manutenibilidade de sistemas distribuídos através de logs, monitoramento e tratamento estruturado de erros."
            ]
          }
        ]
      },
      {
        company: "Itaú Unibanco",
        role: "Analista de Dados",
        period: "MAI 2019 - JAN 2022",
        description: [
          "Analisei e interpretei grandes conjuntos de dados para apoiar decisões estratégicas em unidades de negócios.",
          "Criei relatórios e painéis automatizados para monitorar KPIs e desempenho operacional.",
          "Colaborei com stakeholders para traduzir necessidades de negócios em soluções de dados."
        ],
        subRoles: [
          {
            role: "Estagiário de Desenvolvimento",
            description: [
              "Auxiliei no desenvolvimento e manutenção de ferramentas internas para automatizar processos e melhorar a eficiência.",
              "Escrevi scripts e pequenas aplicações usando Python e shell scripting.",
              "Participei de processos de depuração, testes e controle de versão junto à equipe de desenvolvimento.",
              "Ganhei experiência prática com o ciclo de vida de desenvolvimento de software em um ambiente corporativo."
            ]
          }
        ]
      }
    ] as ExperienceItem[],
    projects: [
      {
        title: "Core Fintech Serverless",
        category: "Arquitetura",
        description: "Projetei uma infraestrutura segura de processamento de pagamentos orientada a eventos usando AWS Lambda, SNS e SQS. Reduzi custos de infraestrutura enquanto melhorei a escalabilidade para transações de alto volume.",
        tech: ["AWS Lambda", "Python", "SQS/SNS", "DynamoDB"]
      },
      {
        title: "Modernização de Sistema Legado",
        category: "Refatoração",
        description: "Desacoplei estrategicamente uma plataforma de saúde monolítica em uma arquitetura modular usando Domain-Driven Design (DDD). Reduzi significativamente a dívida técnica e melhorei a velocidade de implantação.",
        tech: ["FastAPI", "PostgreSQL", "DDD", "Clean Arch"]
      },
      {
        title: "Pipeline de Sincronização de Dados",
        category: "Engenharia de Dados",
        description: "Construí pipelines robustos no Airflow para manter consistência em tempo real entre bancos de dados SQL legados e novos microsserviços durante uma estratégia de migração em múltiplas fases.",
        tech: ["Apache Airflow", "Python", "SQL", "ETL"]
      }
    ] as ProjectItem[],
    education: [
      {
        school: "Universidade Estadual de Campinas - UNICAMP",
        degree: "Engenharia de Controle e Automação",
        period: "2015 - 2021"
      }
    ] as EducationItem[],
    certifications: [] as CertificationItem[],
    languages: [
      { language: "Português", level: "Nativo" },
      { language: "Inglês", level: "Avançado - C1" },
      { language: "Francês", level: "Intermediário - B1" },
      { language: "Espanhol", level: "Básico - A2" }
    ] as LanguageItem[]
  }
};
