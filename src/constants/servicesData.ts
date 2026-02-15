export interface ServicePageData {
  slug: string
  name: string
  title: string
  metaTitle: string
  metaDescription: string
  metaKeywords: string
  heroHeadline: string
  heroSubhead: string
  intro: string
  challenges: { title: string; description: string }[]
  sampleProjects: string[]
  relatedTechnologies: { name: string; href: string }[]
  ctaHeading: string
  ctaSubtext: string
}

export const serviceSlugs = [
  'react-job-support',
  'angular-job-support',
  'nodejs-job-support',
  'python-job-support',
  'java-job-support',
] as const

export type ServiceSlug = (typeof serviceSlugs)[number]

export const servicesPageData: Record<ServiceSlug, ServicePageData> = {
  'react-job-support': {
    slug: 'react-job-support',
    name: 'React',
    title: 'React Job Support',
    metaTitle: 'React Job Support | Expert React.js Help for Developers',
    metaDescription:
      'Professional React job support from India. Get real-time help with React hooks, Redux, Next.js, and component architecture. 2–4 hours daily, Monday–Friday.',
    metaKeywords:
      'React job support, React.js help, React hooks support, Redux support, Next.js job support, frontend developer support',
    heroHeadline: 'React Job Support from Expert Developers',
    heroSubhead:
      'Real-time help with React, hooks, Redux, Next.js, and modern frontend architecture. Pair programming and code reviews to ship on time.',
    intro:
      'IndiaJobSupport provides dedicated React job support for developers who need to deliver React projects with confidence. Our experts help with hooks, state management, performance, testing, and integration with backend APIs. Whether you’re on a legacy class-component codebase or building with the latest patterns, we match you with a consultant who knows your stack.',
    challenges: [
      {
        title: 'React Hooks & state management',
        description:
          'Master useState, useEffect, custom hooks, and choose the right approach (Context, Redux, Zustand) for your app.',
      },
      {
        title: 'Component architecture & reusability',
        description:
          'Design clear component hierarchies, composition, and shared logic without over-engineering.',
      },
      {
        title: 'Performance & optimization',
        description:
          'Fix re-renders, lazy loading, code splitting, and bundle size with practical, production-ready patterns.',
      },
      {
        title: 'Testing (Jest, React Testing Library)',
        description:
          'Write maintainable unit and integration tests and get to a solid test coverage strategy.',
      },
    ],
    sampleProjects: [
      'SPAs and dashboards with React + TypeScript',
      'Next.js SSR/SSG and API routes',
      'React + Redux or Context for state-heavy UIs',
      'Legacy React migration to hooks and modern patterns',
    ],
    relatedTechnologies: [
      { name: 'Angular', href: '/services/angular-job-support' },
      { name: 'Node.js', href: '/services/nodejs-job-support' },
      { name: 'Next.js', href: '/job-support' },
    ],
    ctaHeading: 'Get React support from an expert',
    ctaSubtext: 'Free 15-minute consultation. Matched with a consultant within 24 hours.',
  },
  'angular-job-support': {
    slug: 'angular-job-support',
    name: 'Angular',
    title: 'Angular Job Support',
    metaTitle: 'Angular Job Support | Expert Angular Help for Developers',
    metaDescription:
      'Professional Angular job support from India. Real-time help with Angular (2+), RxJS, NgRx, and enterprise frontend. 2–4 hours daily.',
    metaKeywords:
      'Angular job support, Angular 2 support, RxJS support, NgRx, TypeScript Angular, enterprise frontend support',
    heroHeadline: 'Angular Job Support from Expert Developers',
    heroSubhead:
      'Real-time help with Angular, RxJS, NgRx, services, and enterprise-scale frontend. Deliver your project on time.',
    intro:
      'Our Angular job support helps developers working on Angular 2+ applications. We cover components, services, RxJS, forms, routing, and state management with NgRx or similar. Whether you’re on a large enterprise app or a new greenfield project, we pair you with a consultant who has shipped production Angular applications.',
    challenges: [
      {
        title: 'RxJS & reactive patterns',
        description:
          'Understand observables, operators, and async flows so you can debug and extend existing code with confidence.',
      },
      {
        title: 'State management (NgRx, services)',
        description:
          'Design and refactor state, effects, and selectors for maintainable, predictable state management.',
      },
      {
        title: 'Components, modules & lazy loading',
        description:
          'Structure feature modules, lazy loading, and shared modules for scalability and performance.',
      },
      {
        title: 'Testing (Jasmine, Karma)',
        description:
          'Unit test components and services and set up a testing strategy that fits your team.',
      },
    ],
    sampleProjects: [
      'Enterprise Angular apps with NgRx',
      'Angular Material or custom component libraries',
      'Migration from AngularJS to Angular',
      'Angular + backend API integration',
    ],
    relatedTechnologies: [
      { name: 'React', href: '/services/react-job-support' },
      { name: 'Node.js', href: '/services/nodejs-job-support' },
      { name: 'Java', href: '/services/java-job-support' },
    ],
    ctaHeading: 'Get Angular support from an expert',
    ctaSubtext: 'Free 15-minute consultation. Matched with a consultant within 24 hours.',
  },
  'nodejs-job-support': {
    slug: 'nodejs-job-support',
    name: 'Node.js',
    title: 'Node.js Job Support',
    metaTitle: 'Node.js Job Support | Expert Backend & API Help',
    metaDescription:
      'Professional Node.js job support from India. Real-time help with Express, NestJS, APIs, and backend architecture. 2–4 hours daily.',
    metaKeywords:
      'Node.js job support, Express support, NestJS support, Node API development, backend job support',
    heroHeadline: 'Node.js Job Support from Expert Developers',
    heroSubhead:
      'Real-time help with Express, NestJS, REST/GraphQL APIs, databases, and backend architecture. Ship your backend on time.',
    intro:
      'IndiaJobSupport offers Node.js job support for developers building or maintaining Node-based backends. We cover Express, NestJS, Fastify, API design, authentication, databases (SQL and NoSQL), and deployment. Our consultants help you debug, refactor, and implement features so you can deliver reliably.',
    challenges: [
      {
        title: 'API design & implementation',
        description:
          'REST and GraphQL APIs, validation, error handling, and versioning with best practices.',
      },
      {
        title: 'Authentication & authorization',
        description:
          'JWT, sessions, OAuth, and role-based access control implemented securely and maintainably.',
      },
      {
        title: 'Database integration & optimization',
        description:
          'PostgreSQL, MongoDB, Redis—queries, migrations, indexing, and connection handling.',
      },
      {
        title: 'Async flow & performance',
        description:
          'Event loop, worker threads, streaming, and scaling Node.js under load.',
      },
    ],
    sampleProjects: [
      'REST or GraphQL APIs with Express/NestJS',
      'Microservices and message queues',
      'Real-time features with WebSockets',
      'Serverless and serverful deployment',
    ],
    relatedTechnologies: [
      { name: 'React', href: '/services/react-job-support' },
      { name: 'Python', href: '/services/python-job-support' },
      { name: 'Java', href: '/services/java-job-support' },
    ],
    ctaHeading: 'Get Node.js support from an expert',
    ctaSubtext: 'Free 15-minute consultation. Matched with a consultant within 24 hours.',
  },
  'python-job-support': {
    slug: 'python-job-support',
    name: 'Python',
    title: 'Python Job Support',
    metaTitle: 'Python Job Support | Expert Python & Django/Flask Help',
    metaDescription:
      'Professional Python job support from India. Real-time help with Django, Flask, APIs, and scripting. 2–4 hours daily.',
    metaKeywords:
      'Python job support, Django support, Flask support, Python API, backend Python support',
    heroHeadline: 'Python Job Support from Expert Developers',
    heroSubhead:
      'Real-time help with Django, Flask, FastAPI, APIs, and Python backend development. Deliver your project on time.',
    intro:
      'Our Python job support helps developers working on Django, Flask, FastAPI, or custom Python backends. We cover ORM, migrations, REST APIs, authentication, background tasks, and deployment. Whether you’re maintaining a legacy app or building a new one, we match you with a consultant who has deep Python and web framework experience.',
    challenges: [
      {
        title: 'Django/Flask architecture & patterns',
        description:
          'Models, views, serializers, and project structure for maintainable, scalable apps.',
      },
      {
        title: 'APIs & integration',
        description:
          'REST and GraphQL in Python, third-party APIs, and frontend-backend integration.',
      },
      {
        title: 'Database & ORM',
        description:
          'Django ORM or SQLAlchemy, migrations, query optimization, and connection pooling.',
      },
      {
        title: 'Deployment & DevOps',
        description:
          'Docker, WSGI/ASGI servers, and deployment to AWS, GCP, or on-premise.',
      },
    ],
    sampleProjects: [
      'Django or Flask web applications',
      'REST/GraphQL APIs with FastAPI or Django REST',
      'Data pipelines and scripting',
      'Integration with React or other frontends',
    ],
    relatedTechnologies: [
      { name: 'Node.js', href: '/services/nodejs-job-support' },
      { name: 'React', href: '/services/react-job-support' },
      { name: 'Java', href: '/services/java-job-support' },
    ],
    ctaHeading: 'Get Python support from an expert',
    ctaSubtext: 'Free 15-minute consultation. Matched with a consultant within 24 hours.',
  },
  'java-job-support': {
    slug: 'java-job-support',
    name: 'Java',
    title: 'Java Job Support',
    metaTitle: 'Java Job Support | Expert Java & Spring Boot Help',
    metaDescription:
      'Professional Java job support from India. Real-time help with Java, Spring Boot, microservices, and enterprise backend. 2–4 hours daily.',
    metaKeywords:
      'Java job support, Spring Boot support, Java backend, microservices Java, enterprise Java support',
    heroHeadline: 'Java Job Support from Expert Developers',
    heroSubhead:
      'Real-time help with Java, Spring Boot, microservices, and enterprise backend. Ship your project on time.',
    intro:
      'IndiaJobSupport provides Java job support for developers working on Spring Boot, microservices, or legacy Java applications. We cover Spring MVC, Spring Data, security, messaging, and deployment. Our consultants help you debug, design, and implement features so you can meet deadlines and quality standards.',
    challenges: [
      {
        title: 'Spring Boot & Spring ecosystem',
        description:
          'Configuration, dependency injection, and Spring MVC/Data/Security used effectively in your project.',
      },
      {
        title: 'Microservices & APIs',
        description:
          'REST APIs, service communication, and microservice patterns with Java.',
      },
      {
        title: 'Database & JPA/Hibernate',
        description:
          'Entity design, queries, transactions, and performance tuning with JPA/Hibernate.',
      },
      {
        title: 'Testing & deployment',
        description:
          'Unit and integration tests (JUnit, Mockito) and CI/CD and deployment strategies.',
      },
    ],
    sampleProjects: [
      'Spring Boot REST APIs and web apps',
      'Microservices with Spring Cloud',
      'Legacy Java modernization',
      'Java + React/Angular frontends',
    ],
    relatedTechnologies: [
      { name: 'Angular', href: '/services/angular-job-support' },
      { name: 'Node.js', href: '/services/nodejs-job-support' },
      { name: 'Python', href: '/services/python-job-support' },
    ],
    ctaHeading: 'Get Java support from an expert',
    ctaSubtext: 'Free 15-minute consultation. Matched with a consultant within 24 hours.',
  },
}

export function getServiceBySlug(slug: string): ServicePageData | null {
  if (serviceSlugs.includes(slug as ServiceSlug)) {
    return servicesPageData[slug as ServiceSlug]
  }
  return null
}
