import type { ServicePageDataFull } from '@/types/servicePageTypes'

export const nodeJobSupportData: ServicePageDataFull = {
  slug: 'nodejs-job-support',
  name: 'Node.js',
  meta: {
    title: 'Node.js Job Support from India | Expert Backend Developers',
    description:
      'Get professional Node.js job support from senior developers. Help with Express, NestJS, APIs, databases. 2-4 hours daily. Trusted by 450+ backend developers.',
    keywords:
      'Node.js job support, Express support, NestJS support, Node API development, backend job support, Node.js consultant',
    canonicalUrl: '/services/nodejs-job-support',
    ogImage: '/og-image.jpg',
  },
  hero: {
    title: 'Expert Node.js Job Support from India',
    subtitle:
      'Get real-time help from senior Node.js developers. Master Express, NestJS, REST/GraphQL APIs, and backend architecture.',
    cta: {
      primary: 'Book Free Consultation',
      primaryLink: '/join-our-team',
      secondary: 'View Pricing',
      secondaryLink: '/pricing',
    },
    trustBadges: [
      '450+ Node.js Developers Helped',
      '5+ Years Backend Experience',
      'Available Mon-Fri, 2-4 hours daily',
      '4.8/5 Client Rating',
    ],
  },
  introduction: `Building or maintaining a Node.js backend and need expert help? Whether you're working with Express, NestJS, Fastify, or custom setups, our Node.js job support connects you with senior backend developers who've shipped production APIs and services for years.

We understand the challenges—designing REST and GraphQL APIs, managing authentication, integrating databases (SQL and NoSQL), and scaling Node.js under load. From quick debugging to full architecture reviews, we provide pair programming and code reviews so you can deliver on time.

Our consultants have helped hundreds of developers across the USA, UK, Canada, and Australia with Node.js backends, microservices, and real-time systems. We offer flexible plans so you get expert help when you need it.

Let us help you ship your Node.js project with confidence.`,
  challenges: [
    {
      title: 'API Design & Implementation',
      description:
        'Struggling with REST or GraphQL API design, validation, error handling, or versioning? We help you structure routes, middleware, and responses following best practices and industry standards.',
      icon: '🔌',
    },
    {
      title: 'Authentication & Authorization',
      description:
        'Need to implement JWT, sessions, OAuth, or role-based access? We guide you through secure auth patterns, token refresh, and protecting routes so your API stays secure and maintainable.',
      icon: '🔐',
    },
    {
      title: 'Database Integration',
      description:
        'Working with PostgreSQL, MongoDB, Redis, or Prisma? We help with queries, migrations, connection pooling, indexing, and avoiding N+1 and other performance pitfalls.',
      icon: '🗄️',
    },
    {
      title: 'NestJS & TypeScript Backends',
      description:
        'Using NestJS and need help with modules, dependency injection, guards, interceptors, or testing? We help you get the most out of the framework and TypeScript on the backend.',
      icon: '🏗️',
    },
    {
      title: 'Async Flow & Performance',
      description:
        'Dealing with the event loop, worker threads, streaming, or scaling Node under load? We help you avoid blocking the event loop, handle concurrency, and optimize for production.',
      icon: '⚡',
    },
    {
      title: 'Testing & Debugging',
      description:
        'Need to write unit and integration tests with Jest or Mocha? Or debug complex async bugs? We help you mock dependencies, test APIs, and use debugging tools effectively.',
      icon: '🐛',
    },
    {
      title: 'Microservices & Message Queues',
      description:
        'Building microservices or using RabbitMQ, Kafka, or Redis queues? We help with service boundaries, message patterns, and reliability so your system scales and stays resilient.',
      icon: '📨',
    },
    {
      title: 'Deployment & DevOps',
      description:
        'Docker, Kubernetes, or serverless with Node? We help you containerize your app, set up CI/CD, and deploy to AWS, GCP, or Vercel with best practices.',
      icon: '🚀',
    },
  ],
  technologies: [
    {
      category: 'Frameworks & Runtime',
      items: [
        'Node.js 18+ LTS',
        'Express.js',
        'NestJS',
        'Fastify',
        'Hapi',
        'TypeScript',
      ],
    },
    {
      category: 'APIs & Data',
      items: [
        'REST APIs',
        'GraphQL (Apollo, type-graphql)',
        'tRPC',
        'WebSockets',
        'Server-Sent Events',
      ],
    },
    {
      category: 'Databases',
      items: [
        'PostgreSQL',
        'MongoDB',
        'Redis',
        'MySQL',
        'Prisma',
        'TypeORM',
        'Sequelize',
      ],
    },
    {
      category: 'Auth & Security',
      items: [
        'JWT',
        'Passport.js',
        'OAuth 2.0',
        'Sessions',
        'bcrypt',
        'Rate limiting',
      ],
    },
    {
      category: 'Testing',
      items: [
        'Jest',
        'Supertest',
        'Mocha',
        'Chai',
        'MSW',
      ],
    },
    {
      category: 'DevOps & Deploy',
      items: [
        'Docker',
        'Kubernetes',
        'PM2',
        'AWS',
        'Vercel',
        'Railway',
      ],
    },
  ],
  howItWorks: [
    {
      number: 1,
      title: 'Free Consultation Call',
      description:
        'Schedule a 15-minute call to discuss your Node.js project, API or database challenges, and timeline. We\'ll assess fit and answer any questions.',
      icon: '📅',
    },
    {
      number: 2,
      title: 'Get Matched with Node.js Expert',
      description:
        'Within 24 hours we pair you with a senior Node.js/backend developer. Review their profile and schedule your first session.',
      icon: '🤝',
    },
    {
      number: 3,
      title: 'Start Daily Support Sessions',
      description:
        'Work 2-4 hours daily via pair programming and code reviews. Screen sharing and live coding on your actual backend.',
      icon: '💻',
    },
    {
      number: 4,
      title: 'Deliver Project Successfully',
      description:
        'Ship your Node.js backend with confidence. Ongoing support until your goals are met, with flexible hours for deadlines.',
      icon: '✅',
    },
  ],
  pricing: [
    {
      name: 'Hourly Support',
      price: '$25',
      period: 'per hour',
      features: [
        'Pay as you go - no commitment',
        'Flexible scheduling',
        'Perfect for API or database questions',
        'Email support between sessions',
        'Minimum 2 hours per session',
      ],
      popular: false,
      cta: 'Get Started',
    },
    {
      name: 'Half-Month Support',
      price: '$800',
      period: 'per 2 weeks',
      features: [
        '2 hours daily support',
        '10 working days coverage',
        'WhatsApp & email support',
        'Code review included',
        'Best for medium backend projects',
      ],
      popular: false,
      cta: 'Book Half-Month',
    },
    {
      name: 'Monthly Support',
      price: '$1,400',
      period: 'per month',
      features: [
        '4 hours daily support',
        '20 working days coverage',
        'Priority support',
        'Architecture guidance',
        'Database & API best practices',
        'Most popular choice',
      ],
      popular: true,
      cta: 'Start Monthly Plan',
    },
  ],
  caseStudies: [
    {
      title: 'REST API Refactor and Database Optimization',
      client: 'SaaS Startup, USA',
      challenge:
        'A Node/Express API had become slow and hard to extend. N+1 queries and missing indexes were hurting performance. The team needed to refactor without a full rewrite.',
      solution:
        'We introduced query optimization, proper indexing, and connection pooling. We refactored critical routes to use a repository pattern and added integration tests. We also set up basic monitoring and error tracking.',
      result:
        'API response times improved by 60%, and the codebase became easier to extend. The team adopted the same patterns for new features.',
      technologies: ['Node.js', 'Express', 'PostgreSQL', 'Jest'],
      duration: '1.5 months',
    },
    {
      title: 'NestJS Migration from Express',
      client: 'E-commerce Platform, UK',
      challenge:
        'The company wanted to migrate from a large Express codebase to NestJS for better structure and TypeScript support. The in-house team had no NestJS experience.',
      solution:
        'We designed a phased migration, starting with new modules in NestJS and gradually moving existing logic. We trained the team on modules, DI, and testing in NestJS.',
      result:
        'Migration completed in 3 months. New features are now built in NestJS with consistent structure and test coverage.',
      technologies: ['NestJS', 'TypeScript', 'PostgreSQL', 'Redis'],
      duration: '3 months',
    },
  ],
  faq: [
    {
      question: 'Do you support both Express and NestJS?',
      answer:
        'Yes. We have consultants experienced in Express, NestJS, Fastify, and other Node frameworks. During the consultation we match you with someone who knows your stack and can help with your specific challenges.',
    },
    {
      question: 'Can you help with GraphQL and REST?',
      answer:
        'Absolutely. We help with REST API design, GraphQL schemas and resolvers (Apollo, type-graphql), and even tRPC. We can also help you choose and integrate the right approach for your product.',
    },
    {
      question: 'What databases do you work with?',
      answer:
        'We work with PostgreSQL, MongoDB, Redis, MySQL, and others. We help with ORMs like Prisma and TypeORM, raw queries, migrations, and performance tuning. Just tell us your stack during the consultation.',
    },
    {
      question: 'How quickly can I start Node.js support?',
      answer:
        'After your free 15-minute consultation we typically match you within 24 hours. You can start your first session as soon as the next business day. Same-day support is possible for urgent cases.',
    },
    {
      question: 'Do you sign NDAs?',
      answer:
        'Yes. We\'re happy to sign your NDA or confidentiality agreement. All consultants treat client code and business logic as strictly confidential.',
    },
  ],
  testimonials: [
    {
      name: 'Mike R.',
      role: 'Backend Developer',
      company: 'USA',
      rating: 5,
      text: 'The NestJS and database support was exactly what we needed. We refactored our API and fixed our N+1 issues. Our consultant was responsive and knew Node inside out.',
      date: '2024-01-22',
    },
    {
      name: 'Anita K.',
      role: 'Full Stack Developer',
      company: 'Canada',
      rating: 5,
      text: 'I was new to Node and our codebase was Express with a lot of callbacks. They helped me modernize to async/await and set up proper error handling. Huge improvement.',
      date: '2024-02-05',
    },
    {
      name: 'Chris T.',
      role: 'Tech Lead',
      company: 'UK',
      rating: 5,
      text: 'We migrated from Express to NestJS with their guidance. The structure and testing approach we learned is now our standard. Highly recommend for any Node backend work.',
      date: '2024-01-18',
    },
  ],
  finalCTA: {
    heading: 'Ready to Ship Your Node.js Backend Successfully?',
    description:
      'Book a free 15-minute consultation with a senior Node.js developer. No commitment—just a conversation about your backend challenges and how we can help.',
    cta: {
      primary: 'Book Free Consultation Now',
      secondary: 'View All Our Services',
    },
  },
  relatedServices: [
    { name: 'React Job Support', link: '/services/react-job-support', description: 'Frontend React & Next.js support' },
    { name: 'Angular Job Support', link: '/services/angular-job-support', description: 'Enterprise Angular support' },
    { name: 'Python Job Support', link: '/services/python-job-support', description: 'Django, Flask & Python backend' },
    { name: 'Java Job Support', link: '/services/java-job-support', description: 'Spring Boot & Java backend' },
    { name: 'Full Stack Job Support', link: '/job-support', description: 'Complete frontend & backend assistance' },
  ],
}
