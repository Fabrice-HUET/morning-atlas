export const creatorProfile = {
  name: 'Fabrice Huet',
  role: 'Développeur Front-End',
  tagline: 'Front-End orienté UX, accessibilité, performance et qualité du code.',
  intro:
    'Je conçois des interfaces web modernes, maintenables et utiles, avec une attention particulière portée aux usages réels, à la clarté du code et à l’expérience utilisateur.',
  summary: [
    'Développeur Front-End axé sur la performance, l’expérience utilisateur et la qualité du code, j’interviens sur des interfaces modernes avec React, Next.js et Twig.',
    'Mon parcours combine développement web, accompagnement médico-social et expérience commerciale. Cette trajectoire m’aide à travailler avec attention sur les besoins utilisateurs, la collaboration et la résolution de problèmes concrets.',
    'Je m’intéresse particulièrement à l’accessibilité, au SEO technique, à l’optimisation front-end et aux usages responsables de l’IA appliquée au web.',
  ],
  focusAreas: ['UX pragmatique', 'Accessibilité', 'Performance front-end', 'SEO technique', 'IA appliquée au web'],
  cvPath: '/files/fabrice-huet-cv.pdf',
  links: [
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/fabrice-huet/',
    },
    {
      label: 'Email',
      href: 'mailto:fabrice.huet.01@gmail.com',
    },
  ],
} as const

export const creatorSkills = [
  {
    title: 'Front-end',
    items: ['HTML', 'CSS', 'SCSS', 'Tailwind', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'React Native'],
  },
  {
    title: 'Back-office & templates',
    items: ['Twig', 'Symfony', 'Django', 'API REST', 'API Platform'],
  },
  {
    title: 'Qualité & produit',
    items: ['Accessibilité', 'SEO technique', 'UI/UX', 'Responsive design', 'Performance', 'Debugging'],
  },
  {
    title: 'Outils',
    items: ['GitHub', 'GitLab', 'Jira', 'Trello', 'Figma', 'ESLint', 'Prettier'],
  },
] as const

export const creatorExperiences = [
  {
    company: 'Agence Référence',
    role: 'Développeur Front-End',
    period: '2022 — aujourd’hui',
    location: 'Tours, France',
    highlights: [
      'Développement et maintenance de sites web commerciaux et événementiels.',
      'Modernisation d’interfaces existantes pour améliorer l’UX, la cohérence graphique et les performances.',
      'Migrations d’applications Next.js et contribution à des outils internes sur mesure.',
      'Travail avec des équipes pluridisciplinaires et partenaires spécialisés SEO / analytics UX.',
    ],
  },
  {
    company: 'StudioLabs',
    role: 'Développeur React / React Native',
    period: 'Août 2022 — novembre 2022',
    location: 'Remote',
    highlights: [
      'Interventions rapides sur projets web et mobiles : corrections, évolutions et intégrations de fonctionnalités.',
      'Missions courtes nécessitant autonomie, adaptation et gestion efficace du temps.',
    ],
  },
  {
    company: 'Bucéphale Software',
    role: 'Développeur Front-End React Native — stage',
    period: 'Janvier 2022 — juin 2022',
    location: 'Remote',
    highlights: [
      'Développement front de deux applications mobiles React Native.',
      'Mise en place de composants, d’une charte graphique et d’améliorations UX sous mentorat senior.',
    ],
  },
] as const

export const compactExperiences = [
  'Formation Développeur Web Front-End — Wild Code School',
  'Accompagnement éducatif et social — ADMR Les Maisonnées',
  'Expériences commerciales B2B et relation client — JTI, TIP, optique, prospection',
] as const

export const creatorProjects = [
  {
    name: 'Morning Atlas',
    description:
      'Projet éditorial Next.js autour des petits-déjeuners du monde : contenus structurés, SEO technique, images locales, JSON-LD et maillage interne.',
  },
  {
    name: 'Sites web professionnels',
    description:
      'Contributions à des sites commerciaux et institutionnels comme citya.com, arche.fr, api-financement.net, snexi.fr ou stpierreassurances.com.',
  },
  {
    name: 'Interfaces et outils internes',
    description:
      'Création d’interfaces utiles pour fluidifier des workflows, améliorer la maintenabilité et réduire les tâches répétitives.',
  },
] as const
