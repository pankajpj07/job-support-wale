import type { ServicePageDataFull } from '@/types/servicePageTypes'

export const angularJobSupportData: ServicePageDataFull = {
  slug: 'angular-job-support',
  name: 'Angular',
  meta: {
    title: 'Angular Job Support from India | Expert Angular Developers',
    description:
      'Get professional Angular job support from senior developers. Help with RxJS, NgRx, TypeScript, enterprise apps. 2-4 hours daily. Trusted by 400+ Angular developers.',
    keywords:
      'Angular job support, Angular 2 support, RxJS support, NgRx, TypeScript Angular, enterprise frontend support, Angular consultant',
    canonicalUrl: '/services/angular-job-support',
    ogImage: '/og-image.jpg',
  },
  hero: {
    title: 'Expert Angular Job Support from India',
    subtitle:
      'Get real-time help from senior Angular developers. Master RxJS, NgRx, components, and enterprise-scale frontend architecture.',
    cta: {
      primary: 'Book Free Consultation',
      primaryLink: '/join-our-team',
      secondary: 'View Pricing',
      secondaryLink: '/pricing',
    },
    trustBadges: [
      '400+ Angular Developers Helped',
      '5+ Years Angular Experience',
      'Available Mon-Fri, 2-4 hours daily',
      '4.8/5 Client Rating',
    ],
  },
  introduction: `Are you working on an Angular application and need expert guidance? Struggling with RxJS streams, NgRx state management, or scaling your enterprise frontend? Our Angular job support services connect you with senior Angular developers who have shipped production applications for years.

We understand the learning curve that comes with Angular—from dependency injection and modules to reactive programming with RxJS and complex state with NgRx. Whether you're on Angular 2+ or the latest standalone APIs, we help you debug, refactor, and deliver on time.

Our consultants have helped hundreds of developers across the USA, UK, and Canada deliver Angular projects, migrate from AngularJS, and adopt best practices. We provide pair programming, code reviews, and architecture guidance so you can meet deadlines and grow your skills.

Let us help you master Angular and deliver your project with confidence.`,
  challenges: [
    {
      title: 'RxJS & Reactive Patterns',
      description:
        'Struggling with observables, operators, and async flows? Understanding subscribe, pipe, map, switchMap, and avoiding memory leaks can be overwhelming. We help you master RxJS, debug streams, and implement reactive patterns correctly in your Angular app.',
      icon: '🔄',
    },
    {
      title: 'State Management with NgRx',
      description:
        'Need help with actions, reducers, effects, and selectors? NgRx can be complex. We guide you through store design, side effects, feature state, and best practices so your state stays predictable and maintainable.',
      icon: '📊',
    },
    {
      title: 'Components, Modules & Lazy Loading',
      description:
        'Unsure how to structure feature modules, shared modules, or lazy-loaded routes? We help you organize your Angular app for scalability, improve load times with lazy loading, and avoid circular dependencies.',
      icon: '🏗️',
    },
    {
      title: 'Forms (Reactive & Template-driven)',
      description:
        'Complex forms with validation, dynamic fields, or cross-field logic? We help you build reactive forms, custom validators, and handle form arrays and nested groups without getting stuck.',
      icon: '📝',
    },
    {
      title: 'Testing (Jasmine, Karma, Jest)',
      description:
        'Need to unit test components and services? Mocking dependencies, testing async code, and integration tests can be tricky. We help you write maintainable tests and set up a solid testing strategy.',
      icon: '🐛',
    },
    {
      title: 'Angular Material & UI',
      description:
        'Using Angular Material or custom component libraries? We help with theming, accessibility, responsive layouts, and integrating design systems into your Angular application.',
      icon: '🎨',
    },
    {
      title: 'Performance & Change Detection',
      description:
        'Dealing with slow change detection or unnecessary re-renders? We help you optimize with OnPush, trackBy, and reactive patterns so your Angular app stays fast at scale.',
      icon: '⚡',
    },
    {
      title: 'Migration & Upgrades',
      description:
        'Migrating from AngularJS or upgrading between Angular versions? We guide you through upgrade paths, breaking changes, and incremental migration strategies.',
      icon: '🚀',
    },
  ],
  technologies: [
    {
      category: 'Core Angular',
      items: [
        'Angular 2+ (latest stable)',
        'Standalone components & APIs',
        'Dependency Injection',
        'RxJS',
        'TypeScript',
        'Angular CLI',
        'Signals (Angular 16+)',
      ],
    },
    {
      category: 'State & Data',
      items: [
        'NgRx (Store, Effects, Router Store)',
        'Akita',
        'NgRx ComponentStore',
        'Services & observables',
        'HTTP Client',
      ],
    },
    {
      category: 'UI & Styling',
      items: [
        'Angular Material',
        'PrimeNG',
        'Tailwind CSS',
        'SCSS',
        'Custom component libraries',
      ],
    },
    {
      category: 'Forms & Validation',
      items: [
        'Reactive Forms',
        'Template-driven forms',
        'Custom validators',
        'Dynamic forms',
      ],
    },
    {
      category: 'Testing',
      items: [
        'Jasmine',
        'Karma',
        'Jest',
        'Testing Library',
        'Protractor / Cypress',
      ],
    },
    {
      category: 'Build & Deploy',
      items: [
        'Angular CLI',
        'Webpack',
        'Server-side rendering (Angular Universal)',
        'Docker',
      ],
    },
  ],
  howItWorks: [
    {
      number: 1,
      title: 'Free Consultation Call',
      description:
        'Schedule a 15-minute call to discuss your Angular project, RxJS or NgRx challenges, and timeline. We\'ll assess fit and answer questions about our support process.',
      icon: '📅',
    },
    {
      number: 2,
      title: 'Get Matched with Angular Expert',
      description:
        'Within 24 hours we pair you with a senior Angular developer. Review their profile and schedule your first session.',
      icon: '🤝',
    },
    {
      number: 3,
      title: 'Start Daily Support Sessions',
      description:
        'Work 2-4 hours daily via pair programming, code reviews, and problem-solving. Screen sharing and live coding on your actual project.',
      icon: '💻',
    },
    {
      number: 4,
      title: 'Deliver Project Successfully',
      description:
        'Complete your Angular project with confidence. Ongoing support until goals are met, with flexible hours for your deadlines.',
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
        'Perfect for quick Angular questions',
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
        'Best for medium Angular projects',
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
        'NgRx & RxJS deep dives',
        'Most popular choice',
      ],
      popular: true,
      cta: 'Start Monthly Plan',
    },
  ],
  caseStudies: [
    {
      title: 'Enterprise NgRx Refactor and Performance Tuning',
      client: 'FinTech Company, UK',
      challenge:
        'A large Angular app with scattered state and slow change detection was hard to maintain. The team needed to introduce NgRx and improve performance without halting feature work.',
      solution:
        'We designed a phased NgRx adoption plan, trained the team on effects and selectors, and refactored critical flows first. We also enabled OnPush change detection and optimized trackBy functions across lists.',
      result:
        'Reduced bundle size by 25%, improved Time to Interactive by 2 seconds, and established a clear state architecture. The team now ships features faster with fewer bugs.',
      technologies: ['Angular 15', 'NgRx', 'RxJS', 'TypeScript'],
      duration: '2 months',
    },
    {
      title: 'AngularJS to Angular Migration',
      client: 'Healthcare SaaS, USA',
      challenge:
        'A legacy AngularJS application needed to be migrated to modern Angular for security and maintainability. The in-house team had no prior Angular experience.',
      solution:
        'We set up an incremental migration using ngUpgrade, defined component boundaries, and migrated module by module. We also provided training on Angular patterns and TypeScript.',
      result:
        'Completed migration in 4 months with zero downtime. The application now runs on Angular 16 with improved performance and developer experience.',
      technologies: ['Angular 16', 'TypeScript', 'Angular Material'],
      duration: '4 months',
    },
  ],
  faq: [
    {
      question: 'What Angular versions do you support?',
      answer:
        'We support Angular 2 through the latest stable release, including the new standalone APIs and signals. Whether you\'re on an older LTS or the newest version, we can help. We can also guide you through version upgrades and breaking changes.',
    },
    {
      question: 'Can you help with AngularJS (1.x) as well?',
      answer:
        'Yes. We have consultants experienced in AngularJS who can help maintain legacy apps or plan a migration to modern Angular. We often help teams migrate incrementally using ngUpgrade or similar strategies.',
    },
    {
      question: 'Do you help with RxJS and NgRx specifically?',
      answer:
        'Absolutely. RxJS and NgRx are core to many Angular apps. We help with observables, operators, subscription management, and full NgRx store design—actions, reducers, effects, and selectors. Many of our engagements focus heavily on these areas.',
    },
    {
      question: 'How quickly can I start Angular support?',
      answer:
        'After your free 15-minute consultation, we typically match you with an Angular consultant within 24 hours. You can start your first session as soon as the next business day. For urgent needs, we can sometimes arrange same-day support.',
    },
    {
      question: 'Will I work with the same consultant?',
      answer:
        'Yes. You\'ll work with the same Angular expert throughout your engagement for consistency. If you\'re ever not satisfied, we can switch you to another consultant at no extra cost.',
    },
    {
      question: 'Do you sign NDAs?',
      answer:
        'Yes. We\'re happy to sign your company\'s NDA or confidentiality agreement. All our consultants treat client code and business logic as strictly confidential.',
    },
  ],
  testimonials: [
    {
      name: 'David M.',
      role: 'Frontend Lead',
      company: 'FinTech, UK',
      rating: 5,
      text: 'The NgRx and RxJS support was a game-changer. We refactored our state layer and the app is now much easier to maintain. Our consultant was patient and clearly knew Angular inside out.',
      date: '2024-01-20',
    },
    {
      name: 'Priya S.',
      role: 'Software Developer',
      company: 'USA',
      rating: 5,
      text: 'I was new to Angular and our codebase was huge. The daily sessions helped me understand modules, services, and RxJS. I\'m now confident enough to own features end to end.',
      date: '2024-02-01',
    },
    {
      name: 'James L.',
      role: 'Tech Lead',
      company: 'Canada',
      rating: 5,
      text: 'We migrated from AngularJS to Angular with their help. The phased approach and training meant we could keep shipping while migrating. Highly recommend for any Angular work.',
      date: '2024-01-15',
    },
  ],
  finalCTA: {
    heading: 'Ready to Master Angular and Deliver Your Project?',
    description:
      'Book a free 15-minute consultation with a senior Angular developer. No commitment—just a conversation about your challenges and how we can help.',
    cta: {
      primary: 'Book Free Consultation Now',
      secondary: 'View All Our Services',
    },
  },
  relatedServices: [
    { name: 'React Job Support', link: '/services/react-job-support', description: 'Expert React and Next.js support' },
    { name: 'Node.js Job Support', link: '/services/nodejs-job-support', description: 'Backend support for Node.js & Express' },
    { name: 'Java Job Support', link: '/services/java-job-support', description: 'Spring Boot & enterprise Java' },
    { name: 'Full Stack Job Support', link: '/job-support', description: 'Complete frontend & backend assistance' },
  ],
}
