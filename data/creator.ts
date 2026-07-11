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
  objective:
    'Intégrer une équipe tech où je pourrai consolider mes compétences en front-end, contribuer à des projets concrets et continuer à apprendre, notamment autour de l’accessibilité, de l’optimisation et de l’IA appliquée.',
  location: 'Esvres, Indre-et-Loire',
  phone: '06 63 19 21 30',
  cvPath: '/files/fabrice-huet-cv.pdf',
  links: [
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/fabrice-huet/',
    },
    {
      label: 'Email',
      href: 'mailto:huet.fabrice@icloud.com',
    },
  ],
} as const

// Compétences reformulées en bénéfices ; les technologies sont le second niveau de lecture.
export const creatorSkills = [
  {
    title: 'Interfaces accessibles et responsives',
    description: 'Des UI React/Next.js soignées, adaptées à tous les écrans et pensées pour l’accessibilité.',
    items: [
      'React',
      'Next.js',
      'TypeScript',
      'JavaScript',
      'Tailwind',
      'HTML',
      'CSS',
      'SCSS',
      'React Native',
      'Accessibilité',
      'UI/UX',
      'Responsive design',
    ],
  },
  {
    title: 'Performance & SEO technique',
    description: 'Des pages rapides, bien structurées et lisibles par les moteurs de recherche.',
    items: ['Performance', 'SEO technique', 'Debugging'],
  },
  {
    title: 'Intégration back-office',
    description: 'Templates et API pour alimenter des back-offices sur mesure.',
    items: ['Twig', 'Symfony', 'Django', 'API REST', 'API Platform'],
  },
  {
    title: 'Qualité & outillage',
    description: 'Un code propre, versionné et outillé, en équipe.',
    items: ['GitHub', 'GitLab', 'ESLint', 'Prettier', 'Jira', 'Trello', 'Figma'],
  },
] as const

// Parcours en récit : le développement, puis la reconversion assumée comme socle.
export const creatorTimeline = [
  {
    kind: 'dev',
    period: '2022 — aujourd’hui',
    location: 'Tours, France',
    role: 'Développeur Front-End',
    org: 'Agence Référence',
    highlights: [
      'Conception et maintenance de sites web commerciaux et événementiels, avec ajout régulier de fonctionnalités.',
      'Modernisation d’interfaces existantes pour améliorer l’UX et renforcer la cohérence graphique.',
      'Migration d’applications Next.js de la version 10 à la 15, pour la performance et la sécurité.',
      'Collaboration avec des partenaires spécialisés (Pixalione pour le SEO, Contentsquare pour l’analyse UX).',
      'Conception d’outils internes sur mesure et travail agile avec une équipe pluridisciplinaire.',
    ],
  },
  {
    kind: 'dev',
    period: 'Août — novembre 2022',
    location: 'Remote',
    role: 'Développeur React / React Native',
    org: 'StudioLabs',
    highlights: [
      'Interventions rapides sur projets web et mobiles : corrections, évolutions et intégrations de fonctionnalités.',
      'Missions courtes nécessitant autonomie, adaptation et gestion efficace du temps.',
    ],
  },
  {
    kind: 'dev',
    period: 'Janvier — juin 2022',
    location: 'Remote',
    role: 'Développeur Front-End React Native — stage',
    org: 'Bucéphale Software',
    highlights: [
      'Développement front de deux applications mobiles React Native.',
      'Mise en place de composants, d’une charte graphique et d’améliorations UX sous mentorat senior.',
    ],
  },
  {
    kind: 'formation',
    role: 'Formation Développeur Web Front-End',
    org: 'Wild Code School',
    note: 'Le point de bascule vers le développement web.',
  },
  {
    kind: 'avant',
    role: 'Accompagnement éducatif et social',
    org: 'ADMR Les Maisonnées',
    note: 'L’écoute et l’attention au besoin réel des personnes.',
  },
  {
    kind: 'avant',
    role: 'Expériences commerciales B2B et relation client',
    org: 'JTI, TIP, optique, prospection',
    note: 'La relation client, la persévérance et le sens du concret.',
  },
] as const

export const timelineKindLabels = {
  dev: 'Développement',
  formation: 'Formation',
  avant: 'Avant le code',
} as const

// Compétences transverses et langues (issues du CV) — surtout utiles à la page CV.
export const creatorSoftSkills = [
  'Méthodologie agile (Scrum / Kanban)',
  'Communication inter-équipes',
  'Analyse des besoins utilisateurs',
  'Résolution de problèmes',
  'Sens du détail et rigueur',
  'Adaptabilité et autonomie',
  'Écoute active et bienveillance (issues du médico-social)',
  'Relation client et prospection (parcours commercial)',
] as const

export const creatorLanguages = ['Français — langue maternelle', 'Anglais — professionnel (oral et écrit)'] as const

export const creatorProjects = [
  {
    name: 'Morning Atlas',
    description:
      'Projet éditorial Next.js autour des petits-déjeuners du monde : contenus structurés, SEO technique, images locales, JSON-LD et maillage interne.',
    metrics: ['652 pages statiques', '53 pays documentés', 'JSON-LD & SEO technique'],
  },
  {
    name: 'Sites web professionnels',
    description:
      'Contributions à des sites commerciaux et institutionnels comme citya.com, arche.fr, api-financement.net, snexi.fr ou stpierreassurances.com.',
    metrics: [],
  },
  {
    name: 'Interfaces et outils internes',
    description:
      'Création d’interfaces utiles pour fluidifier des workflows, améliorer la maintenabilité et réduire les tâches répétitives.',
    metrics: [],
  },
] as const
