import { AboutForMe, Profile, Project, SkillGroup, SocialLink } from '../models/portfolio.models';

export const profile: Profile = {
  name: 'Hector Vargas',
  role: 'Full-Stack Developer',
  headline:
    'Desarrollo aplicaciones fullstack con NestJS y Angular v21, creando interfaces rápidas y automatizando.',
  about:
    'Me especializo en el desarrollo fullstack con Angular v21, TypeScript y NestJS. Disfruto convertir ideas en productos escalables que resuelven problemas reales, combinando interfaces modernas con automatización de procesos.',
  image: '/foto-portafolio.jpg',
};

export const projects: Project[] = [
  {
    name: 'Portafolio Personal',
    descrption: 'Panel para visualizar métricas comerciales en tiempo real.',
    problem: 'Las ventas no tenían seguimiento claro ni visualización centralizada.',
    solution: 'Se desarrolló un dashboard con filtros dinámicos y gráficos interactivos.',
    impact: 'Reducción del tiempo de análisis en un 40%.',
    summary: 'Sitio para presentar experiencia, proyectos y contacto con foco en performance.',
    stack: ['Angular', 'TypeScript', 'Tailwind', 'Daisy UI'],
    liveUrl: '#',
    repositoryUrl: 'https://github.com/HectorDaniel-00/portfolio_angular',
    image:
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'Dashboard de Ventas',
    descrption: 'Panel para visualizar métricas comerciales en tiempo real.',
    problem: 'Las ventas no tenían seguimiento claro ni visualización centralizada.',
    solution: 'Se desarrolló un dashboard con filtros dinámicos y gráficos interactivos.',
    impact: 'Reducción del tiempo de análisis en un 40%.',
    summary: 'Panel con filtros, gráficos y exportación para seguimiento comercial.',
    stack: ['Angular', 'RxJS', 'Chart.js'],
    liveUrl: '#',
    repositoryUrl: '#',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'Sistema de Reservas',
    descrption: 'Panel para visualizar métricas comerciales en tiempo real.',
    problem: 'Las ventas no tenían seguimiento claro ni visualización centralizada.',
    solution: 'Se desarrolló un dashboard con filtros dinámicos y gráficos interactivos.',
    impact: 'Reducción del tiempo de análisis en un 40%.',
    summary: 'Aplicación para gestionar reservas con validaciones y calendario interactivo.',
    stack: ['Angular', 'Node.js', 'PostgreSQL'],
    liveUrl: '#',
    repositoryUrl: '#',
    image:
      'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'Automatizacion',
    descrption: 'Panel para visualizar métricas comerciales en tiempo real.',
    problem: 'Las ventas no tenían seguimiento claro ni visualización centralizada.',
    solution: 'Se desarrolló un dashboard con filtros dinámicos y gráficos interactivos.',
    impact: 'Reducción del tiempo de análisis en un 40%.',
    summary: 'Panel con filtros, gráficos y exportación para seguimiento comercial.',
    stack: ['N8N', 'Google Developers Console'],
    liveUrl: '#',
    repositoryUrl: '#',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
  },
];

export const aboutForMe: AboutForMe = {
  title: 'Construyo soluciones digitales con enfoque en rendimiento y experiencia',
  text1:
    'Soy desarrollador enfocado en crear aplicaciones modernas, escalables y bien estructuradas. Me gusta transformar ideas en productos reales utilizando buenas prácticas y tecnologías actuales.',
  text2: `Actualmente trabajo con Angular, Node.js y bases de datos, y siempre estoy aprendiendo nuevas herramientas para mejorar mi flujo de trabajo y la calidad de mis proyectos.`,
  numberProjects: 3,
  yearsLearning: 1,
  cards: [
    {
      title: 'Enfoque',
      description: 'Desarrollo aplicaciones rápidas, limpias y bien estructuradas.',
    },
    {
      title: 'Tecnologías',
      description: 'Angular moderno, Node.js, APIs REST y bases de datos relacionales.',
    },
    {
      title: 'Mentalidad',
      description: 'Aprendizaje constante, enfoque en buenas prácticas y código mantenible.',
    },
  ],
};

export const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend',
    items: [
      'Angular v21 (Standalone + Signals)',
      'TypeScript',
      'JavaScript (ES6+)',
      'HTML5',
      'CSS3',
      'Tailwind',
    ],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'NestJS', 'Express', 'REST APIs', 'Swagger'],
  },
  {
    title: 'Automatización & Data',
    items: ['N8N', 'Power Automate', 'Power BI', 'Integración de APIs'],
  },
  {
    title: 'DevOps & Herramientas',
    items: ['Docker', 'Git', 'GitHub', 'Bash', 'Linux', 'Vite', 'Postman', 'Figma'],
  },
  {
    title: 'Arquitectura & Buenas prácticas',
    items: [
      'Arquitectura escalable',
      'Clean Code',
      'Manejo de estado',
      'Asincronía',
      'Diseño de sistemas',
    ],
  },
];

export const socialLinks: SocialLink[] = [
  { label: 'Email', url: 'mailto:daniel@example.com' },
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/hector-daniel-vargas-cassiani-aa3b63370/',
  },
  { label: 'GitHub', url: 'https://github.com/HectorDaniel-00' },
  { label: 'CV', url: '#' },
];
