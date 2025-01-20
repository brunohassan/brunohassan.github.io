const SITE_CONFIG = {
    languages: {
        EN: {
            code: 'EN',
            name: 'English',
            content: {
                header: {
                    title: 'Software Engineer & Developer',
                    greeting: "Hi, I'm"
                },
                navigation: {
                    about: "About",
                    work: "Work", 
                    skills: "Skills",
                    contact: "Contact"
                },
                about: {
                    headline: "I am a software engineer and developer living in São Paulo, Brazil.",
                    life: "Passionate for the unpredictability of life and always trying to look on its bright side. Apart from work, I enjoy my time praticing sports, listening to music and exploring new places.",
                    path: {
                        title: "My path until now...",
                        description: `Always intriged by math and other sciences, I seeked a bachelor degree in automation and control engineering in UNICAMP, which is a magnificent place to be part of.<br/> Since I found out about programming, i love using it as a tool
                        to automate and make anything in my life more practical. Not only developing this new ideas, but doing it in the bes way possible is my main go, thus, I'm more and more interested in solutions architecture.`
                    },
                    projects: {
                        intro: "Some of my personal projects include house automation, illustrations and investments. <br/> Meanwhile, some of my interests are:",
                        interests: {
                            web: "Backend Web Development",
                            iot: "Internet of Things",
                            architecture: "Software Architecture", 
                            cloud: "Cloud Computing"
                        }
                    }
                },
                work: {
                    positions: {
                        salu: {
                            title: "Software Engineer / Architect",
                            period: "Dec 2023 - Today",
                            description: [
                                "Led team operations and task prioritization, improving eciency and ensuring timely delivery of key projects",
                                "Architected and designed scalable, maintainable software solutions using Domain-Driven Design (DDD), aligning technical implementation with evolving business requirements",
                                "Developed and maintained backend services including REST APIs, utilizing AWS Lambda and PostgreSQL, ensuring high availability and performance",
                                "Ensured high code quality standards by conducting code reviews, providing mentorship, and promoting best practices, resulting in reduced bugs and more maintainable and scalable codebase",
                                "Implemented CI/CD pipelines to streamline deployments, reducing release times and minimizing errors through automated testing and integration."
                            ]
                        },
                        ourinvest: {
                            title: "Software Engineer / Tech Lead",
                            period: "Jan 2022 - Dec 2023",
                            description: [
                                "Demonstrated leadership by guiding diverse technical teams, maintaining industry standards, and ensuring exceptional project delivery",
                                "Utilized DDD along with agile methodologies for seamless collaboration in technical discovery exercises and development",
                                "Established efficient CI/CD pipelines using GitHub Actions, ensuring reliable software delivery",
                                "Integrated a variety of AWS services for optimal architecture, such as API Gateways, Lambdas, SNS, SQS, Cognito, RDS, DynamoDB, etc",
                                "Applied clean architecture principles to ensure a well-organized codebase in robust API solutions using Python and FastAPI"
                            ]
                        },
                        itau_analyst: {
                            title: "Data Analyst",
                            period: "Jun 2021 - Dec 2021",
                            description: [
                                "Analyzing data to spot trends and creating visualizations",
                                "Using statistical modeling to improve processes"
                            ]
                        },
                        itau_intern: {
                            title: "Intern",
                            period: "May 2019 - May 2021",
                            description: [
                                "Developing websites with Python frameworks (Flask and Django) to automate workflows",
                                "Creating shell scripts for automating internal processes"
                            ]
                        }
                    }
                },
                skills: {
                    education: {
                        title: "Education",
                        degree: "Automation and Control Engineering",
                        period: "Feb 2015 - Dec 2021"
                    },
                    sections: {
                        title: "Skills",
                        programming: "Programming Languages",
                        tools: "Frameworks and Tools",
                        architecture: "Architecture & Design",
                        db: "Databases",
                        programmingList: [
                            "Python",
                            "JavaScript",
                            "C",
                        ],
                        toolsList: [
                            "FastAPI",
                            "Django",
                            "Flask",
                            "Docker",
                            "GitHub Actions",
                            "CI/CD",
                            "AWS",
                        ],
                        architectureList: [
                            "DDD",
                            "Clean Architecture",
                            "Monolith",
                            "Microservices",
                            "Event-Driven Architecture",
                            "Observability",
                        ],
                        dbList: [
                            "PostgreSQL",
                            "MySQL",
                            "DynamoDB",
                            "Redis"
                        ],
                    },
                    languages: {
                        title: "Languages",
                        list: {
                            portuguese: "Portuguese",
                            english: "English",
                            french: "French (intermediate)"
                        }
                    }
                }
            }
        },
        PT: {
            code: 'PT',
            name: 'Português',
            content: {
                header: {
                    title: 'Engenheiro de Software & Desenvolvedor',
                    greeting: "Olá, eu sou"
                },
                navigation: {
                    about: "Sobre",
                    work: "Trabalho", 
                    skills: "Competências",
                    contact: "Contato"
                },
                about: {
                    headline: "Sou um engenheiro de software e desenvolvedor morando em São Paulo, Brasil.",
                    life: "Apaixonado pela imprevisibilidade da vida e sempre tentando vê-la pelo lado otimista. Além do trabalho, aproveito meu tempo praticando esportes, escutando música e explorando novos lugares.",
                    path: {
                        title: "Meu caminho até aqui...",
                        description: `Sempre intrigado por matemática e outras ciências, busquei uma formação em engenharia de controle e automação na UNICAMP.<br/> Desde que aprendi programação, adoro usá-la como ferramenta
                        para automatizar e facilitar diversos fatores da vida. E ainda, não só desenvolver esses projetos, mas fazê-los da melhor maneira possível, dessa forma estou me interessando cada vez mais pela arquitetura de soluções.`
                    },
                    projects: {
                        intro: "Alguns de meus projetos pessoais incluem automações residenciais, o estudo de ilustrações e investimentos. <br/> Enquanto alguns dos meus interesses técnicos são ciência de dados e internet das coisas.",
                        interests: {
                            web: "Desenvolvimento web",
                            iot: "Internet das Coisas",
                            architecture: "Arquitetura de software", 
                            cloud: "Computação em Cloud"
                        }
                    }
                },
                work: {
                    positions: {
                        salu: {
                            title: "Engenheiro de Software / Arquiteto",
                            period: "Dez 2023 - Atual",
                            description: [
                                "Liderei a equipe e priorização de tarefas, melhorando a eficiência e garantindo a entrega pontual de projetos-chave",
                                "Arquitetei e projetei soluções de software escaláveis e sustentáveis usando Domain-Driven Design (DDD), alinhando a implementação técnica com requisitos de negócios em evolução",
                                "Desenvolvi e mantive serviços de backend incluindo APIs REST, utilizando AWS Lambda e PostgreSQL, garantindo alta disponibilidade e performance",
                                "Garanti altos padrões de qualidade de código através de revisões e mentoria, além do incentivo a boas práticas, resultando em menos bugs e uma base de código mais sustentável e escalável",
                                "Implementei pipelines de CI/CD para otimizar implantações, reduzindo tempos de lançamento e minimizando erros através de testes e integração automatizados"
                            ]
                        },
                        ourinvest: {
                            title: "Engenheiro de Software / Tech Lead",
                            period: "Jan 2022 - Dez 2023",
                            description: [
                                "Demonstrei liderança guiando equipes técnicas diversas, mantendo padrões da indústria e garantindo entrega excepcional de projetos",
                                "Utilizei DDD junto com metodologias ágeis para colaboração eficiente em entendimentos técnicos e desenvolvimento",
                                "Estabeleci pipelines eficientes de CI/CD usando GitHub Actions, garantindo entrega confiável de software",
                                "Integrei diversos serviços AWS para arquitetura otimizada, como API Gateways, Lambdas, SNS, SQS, Cognito, RDS, DynamoDB, etc",
                                "Apliquei princípios de clean architecture para garantir uma base de código bem organizada em soluções robustas de API usando Python e FastAPI"
                            ]
                        },
                        itau_analyst: {
                            title: "Analista de Dados Jr.",
                            period: "Jun 2021 - Dez 2021",
                            description: [
                                "Analisando dados para identificar tendências e criando visualizações",
                                "Utilizando modelagem estatística para aprimorar processos"
                            ]
                        },
                        itau_intern: {
                            title: "Estagiário",
                            period: "Mai 2019 - Mai 2021",
                            description: [
                                "Desenvolvendo sites com frameworks em Python (Flask e Django) para automatizar fluxos de trabalho",
                                "Criando scripts de shell para automatizar processos internos"
                            ]
                        }
                    }
                },
                skills: {
                    education: {
                        title: "Educação",
                        degree: "Engenharia de Controle e Automação",
                        period: "Fev 2015 - Dez 2021"
                    },
                    sections: {
                        title: "Skills",
                        programming: "Linguagens de Programação",
                        tools: "Frameworks e Ferramentas", 
                        architecture: "Arquitetura & Design",
                        db: "Bancos de Dados",
                        programmingList: [
                            "Python",
                            "JavaScript",
                            "C",
                        ],
                        toolsList: [
                            "FastAPI",
                            "Django",
                            "Flask",
                            "Docker",
                            "GitHub Actions",
                            "CI/CD",
                            "AWS",
                        ],
                        architectureList: [
                            "DDD",
                            "Clean Architecture",
                            "Monolito",
                            "Microserviços",
                            "Arquitetura Orientada a Eventos",
                            "Observabilidade",
                        ],
                        dbList: [
                            "PostgreSQL",
                            "MySQL",
                            "DynamoDB",
                            "Redis"
                        ],
                    },
                    languages: {
                        title: "Idiomas",
                        list: {
                            portuguese: "Português",
                            english: "Inglês",
                            french: "Francês (intermediário)"
                        }
                    }
                }
            }
        }
    }
};

export default SITE_CONFIG;
