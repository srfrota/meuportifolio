export const NAV_LINKS = [
    { id: 'sobre', label: 'Sobre' },
    { id: 'experiencia', label: 'Experiência' },
    { id: 'skills', label: 'Skills' },
    { id: 'formacao', label: 'Formação' },
    { id: 'contato', label: 'Contato' },
];

export const PROFILE = {
    name: 'Eduardo Frota',
    role: 'Analista de Dados & Desenvolvedor Full Stack',
    location: 'Luís Correia – PI',
    email: 'eduardofrotati@gmail.com',
    phone: '(86) 9 8178-1184',
    linkedin: 'https://www.linkedin.com/in/eduardofrota-5b1b1724a',
    resume: '/curriculo.pdf',
};

export const LINKS = [
    { label: 'LinkedIn', href: PROFILE.linkedin },
    { label: 'E-mail', href: `mailto:${PROFILE.email}` },
    { label: 'Currículo ↓', href: PROFILE.resume, download: true },
];

export const STATS = [
    { value: '3', label: 'Anos de Exp.' },
    { value: '6', label: 'Certificações' },
    { value: '3', label: 'Empresas' },
    { value: '∞', label: 'Café' },
];

export const EXPERIENCE = [
    {
        company: 'Cajutec',
        role: 'Desenvolvedor Full Stack',
        stack: 'Laravel / Vue.js',
        period: 'Nov 2023 — Atual',
        location: 'Parnaíba – PI',
        current: true,
        highlights: [
            'Desenvolvimento e manutenção de sistema de gestão escolar em produção, com Laravel 12 no backend e Vue.js no frontend.',
            'Escrita e otimização de consultas SQL nos módulos acadêmico, financeiro e pedagógico, melhorando desempenho e confiabilidade dos dados.',
            'Implementação de funcionalidades a partir das demandas dos usuários, integração com APIs e correção de bugs.',
            'Melhoria contínua da experiência do usuário e da organização do código, facilitando a manutenção do sistema.',
        ],
    },
    {
        company: 'EMATER-PI',
        role: 'Estagiário de Extensão em TI',
        stack: 'Órgão público estadual',
        period: 'Mai 2022 — Set 2023',
        location: 'Parnaíba – PI',
        current: false,
        highlights: [
            'Suporte técnico aos usuários, com diagnóstico e resolução de problemas de hardware e software.',
            'Participação em projetos de migração de sistemas, com testes em ambiente de homologação e apoio à implantação.',
        ],
    },
    {
        company: 'Associação Pestalozzi',
        role: 'Responsável pela TI',
        stack: 'Infraestrutura e sistemas',
        period: 'Fev 2020 — Nov 2021',
        location: 'Cantanhede – MA',
        current: false,
        highlights: [
            'Gestão da infraestrutura de TI: servidores, redes e manutenção de computadores.',
            'Segurança da informação, com medidas preventivas e rotinas de backup.',
            'Treinamento da equipe de professores no uso do sistema de cadastro de alunos.',
        ],
    },
];

export const SKILLS = [
    {
        category: 'Dados e BI',
        items: ['SQL (consultas, otimização e modelagem)', 'Power BI', 'Integração de dados', 'Big Data em Python'],
    },
    {
        category: 'Programação',
        items: ['Python', 'PHP (Laravel 12)', 'JavaScript (Vue.js)', 'Java'],
    },
    {
        category: 'Aplicações e Automação',
        items: ['Sistemas web', 'APIs', 'Automação de rotinas', 'Computação em nuvem', 'IoT'],
    },
    {
        category: 'Ferramentas',
        items: ['Git', 'GitHub', 'Apache', 'Modelagem UML'],
    },
    {
        category: 'Comunicação',
        items: ['Documentação de sistemas', 'Treinamento de usuários', 'Suporte a equipes não técnicas'],
    },
];

export const EDUCATION = [
    {
        course: 'Tecnologia em Análise e Desenvolvimento de Sistemas',
        institution: 'Estácio',
        period: '2024 — 2026',
    },
    {
        course: 'Curso Técnico Integrado em Tecnologia da Informação',
        institution: 'IFPI',
        period: '2021 — 2023',
    },
    {
        course: 'Bacharelado em Direito',
        institution: 'UNINASSAU',
        period: '2014 — 2019',
    },
];

export const CERTIFICATIONS = [
    {
        title: 'Desenvolvimento Rápido de Aplicações em Python para Cloud, IoT e Big Data',
        hours: '320h',
        date: 'Dez 2025',
    },
    {
        title: 'Programação de Algoritmos Escaláveis',
        hours: '240h',
        date: 'Jul 2025',
    },
    {
        title: 'Programação para Dispositivos Móveis',
        hours: '280h',
        date: 'Jul 2026',
    },
    {
        title: 'Programação de Sistemas de Informação',
        hours: '240h',
        date: 'Dez 2025',
    },
    {
        title: 'Programação para Internet',
        hours: '200h',
        date: 'Mai 2025',
    },
    {
        title: 'Desenvolvimento de Projetos Sociais',
        hours: '80h',
        date: 'Jul 2026',
    },
];
