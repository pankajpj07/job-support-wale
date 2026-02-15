import type { ServicePageDataFull } from '@/types/servicePageTypes'

export const javaJobSupportData: ServicePageDataFull = {
  slug: 'java-job-support',
  name: 'Java',
  meta: {
    title: 'Java Job Support from India | Expert Spring Boot Developers',
    description:
      'Get professional Java job support from senior developers. Help with Spring Boot, microservices, JPA. 2-4 hours daily. Trusted by 400+ Java developers.',
    keywords:
      'Java job support, Spring Boot support, Java backend, microservices Java, enterprise Java support, Spring consultant',
    canonicalUrl: '/services/java-job-support',
    ogImage: '/og-image.jpg',
  },
  hero: {
    title: 'Expert Java Job Support from India',
    subtitle:
      'Get real-time help from senior Java developers. Master Spring Boot, microservices, JPA/Hibernate, and enterprise backend.',
    cta: {
      primary: 'Book Free Consultation',
      primaryLink: '/join-our-team',
      secondary: 'View Pricing',
      secondaryLink: '/pricing',
    },
    trustBadges: [
      '400+ Java Developers Helped',
      '5+ Years Java/Spring Experience',
      'Available Mon-Fri, 2-4 hours daily',
      '4.8/5 Client Rating',
    ],
  },
  introduction: `Working on a Java or Spring Boot application and need expert help? Our Java job support connects you with senior developers who've built and maintained enterprise Java systems for years.

We understand the challenges—Spring Boot configuration, REST APIs, JPA/Hibernate, microservices with Spring Cloud, and testing with JUnit and Mockito. Whether you're on a monolith or distributed system, we provide pair programming and code reviews so you can deliver on time.

Our consultants have helped hundreds of developers across the USA, UK, Canada, and Australia with Java backends, Spring Boot services, and legacy modernization. We offer flexible plans so you get expert help when you need it.

Let us help you ship your Java project with confidence.`,
  challenges: [
    {
      title: 'Spring Boot & Core Spring',
      description:
        'Struggling with configuration, dependency injection, or Spring MVC? We help you structure your Spring Boot app, use profiles correctly, and follow best practices for controllers and services.',
      icon: '🍃',
    },
    {
      title: 'REST APIs & Spring Web',
      description:
        'Building REST APIs with Spring Web? Need help with DTOs, validation, exception handling, or documentation with OpenAPI/Swagger? We guide you through design and implementation.',
      icon: '🔌',
    },
    {
      title: 'JPA & Hibernate',
      description:
        'Dealing with entities, relationships, queries, or N+1 issues? We help you design your domain model, write efficient JPQL and criteria queries, and use transactions correctly.',
      icon: '🗄️',
    },
    {
      title: 'Microservices & Spring Cloud',
      description:
        'Building microservices with Spring Cloud? We help with service discovery, configuration, API gateways, resilience (Circuit Breaker, Retry), and distributed tracing.',
      icon: '☁️',
    },
    {
      title: 'Security (Spring Security)',
      description:
        'Implementing authentication and authorization with Spring Security? We help with JWT, OAuth2, method security, and securing your APIs and web layer.',
      icon: '🔐',
    },
    {
      title: 'Testing (JUnit, Mockito)',
      description:
        'Writing unit and integration tests? We help you mock dependencies, test Spring components, use TestContainers for databases, and structure tests for maintainability.',
      icon: '🐛',
    },
    {
      title: 'Performance & Tuning',
      description:
        'Dealing with slow queries, connection pools, or JVM tuning? We help you profile your app, optimize database access, and tune the JVM for production.',
      icon: '⚡',
    },
    {
      title: 'Legacy Java Modernization',
      description:
        'Maintaining legacy Java or migrating to Spring Boot? We help you refactor safely, introduce Spring where appropriate, and modernize without big-bang rewrites.',
      icon: '🏗️',
    },
  ],
  technologies: [
    {
      category: 'Core & Framework',
      items: [
        'Java 11+',
        'Spring Boot 2.x / 3.x',
        'Spring MVC',
        'Spring Data',
        'Spring Security',
      ],
    },
    {
      category: 'Data & Persistence',
      items: [
        'JPA / Hibernate',
        'Spring Data JPA',
        'Liquibase / Flyway',
        'PostgreSQL',
        'MySQL',
        'MongoDB',
      ],
    },
    {
      category: 'APIs & Integration',
      items: [
        'REST',
        'OpenAPI / Swagger',
        'Feign Client',
        'Kafka',
        'RabbitMQ',
      ],
    },
    {
      category: 'Spring Cloud',
      items: [
        'Config Server',
        'Eureka / Consul',
        'API Gateway',
        'Resilience4j',
        'Sleuth / Zipkin',
      ],
    },
    {
      category: 'Testing',
      items: [
        'JUnit 5',
        'Mockito',
        'Spring Boot Test',
        'TestContainers',
      ],
    },
    {
      category: 'Build & Deploy',
      items: [
        'Maven',
        'Gradle',
        'Docker',
        'Kubernetes',
      ],
    },
  ],
  howItWorks: [
    {
      number: 1,
      title: 'Free Consultation Call',
      description:
        'Schedule a 15-minute call to discuss your Java/Spring project, microservices or JPA challenges, and timeline. We\'ll assess fit and answer any questions.',
      icon: '📅',
    },
    {
      number: 2,
      title: 'Get Matched with Java Expert',
      description:
        'Within 24 hours we pair you with a senior Java/Spring developer. Review their profile and schedule your first session.',
      icon: '🤝',
    },
    {
      number: 3,
      title: 'Start Daily Support Sessions',
      description:
        'Work 2-4 hours daily via pair programming and code reviews. Screen sharing and live coding on your actual project.',
      icon: '💻',
    },
    {
      number: 4,
      title: 'Deliver Project Successfully',
      description:
        'Ship your Java backend with confidence. Ongoing support until your goals are met, with flexible hours for deadlines.',
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
        'Perfect for Spring/Java questions',
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
        'Best for medium Java projects',
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
        'Spring & JPA best practices',
        'Most popular choice',
      ],
      popular: true,
      cta: 'Start Monthly Plan',
    },
  ],
  caseStudies: [
    {
      title: 'Spring Boot API and JPA Optimization',
      client: 'Enterprise, USA',
      challenge:
        'A Spring Boot REST API had slow response times and complex JPA relationships. The team needed to optimize queries and improve transaction boundaries without a full rewrite.',
      solution:
        'We profiled the application, identified N+1 and slow queries, added proper fetch strategies and indexes. We refactored transaction boundaries and introduced DTOs where needed. We also added integration tests for critical paths.',
      result:
        'API latency improved by 50%, and the codebase became easier to extend. The team adopted the same patterns for new features.',
      technologies: ['Spring Boot', 'JPA', 'PostgreSQL', 'JUnit'],
      duration: '1.5 months',
    },
    {
      title: 'Microservices with Spring Cloud',
      client: 'FinTech, UK',
      challenge:
        'A monolith was being split into microservices using Spring Cloud. The team had limited experience with distributed systems and needed guidance on service boundaries and resilience.',
      solution:
        'We helped design service boundaries, set up Spring Cloud Config and service discovery, and implement resilience patterns with Resilience4j. We also established testing and deployment practices for each service.',
      result:
        'Three core services were extracted and deployed. The team now has a clear pattern for further decomposition and operational runbooks.',
      technologies: ['Spring Boot', 'Spring Cloud', 'Kafka', 'Docker'],
      duration: '2 months',
    },
  ],
  faq: [
    {
      question: 'Do you support both Spring Boot 2 and 3?',
      answer:
        'Yes. We have consultants experienced in Spring Boot 2.x and 3.x, including the migration path and Java 17+. We can help you upgrade and adopt new features where it makes sense.',
    },
    {
      question: 'Can you help with microservices and Spring Cloud?',
      answer:
        'Absolutely. We help with service design, Spring Cloud Config, service discovery, API gateways, and resilience patterns. We can also help with Kafka, RabbitMQ, and distributed tracing.',
    },
    {
      question: 'What about JPA and Hibernate?',
      answer:
        'We work with JPA and Hibernate daily. We help with entity design, relationships, query optimization, transactions, and debugging N+1 and other performance issues.',
    },
    {
      question: 'How quickly can I start Java support?',
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
      name: 'Kevin B.',
      role: 'Backend Developer',
      company: 'USA',
      rating: 5,
      text: 'The Spring Boot and JPA support was invaluable. We fixed our N+1 issues and our API is much faster. My consultant knew Spring inside out and was very clear in explanations.',
      date: '2024-01-28',
    },
    {
      name: 'Sneha R.',
      role: 'Software Engineer',
      company: 'India',
      rating: 5,
      text: 'I was new to microservices and Spring Cloud. They helped me understand service boundaries and set up our first two services. Now I can contribute to the rest of the migration.',
      date: '2024-02-10',
    },
    {
      name: 'Oliver M.',
      role: 'Tech Lead',
      company: 'UK',
      rating: 5,
      text: 'We modernized our legacy Java app to Spring Boot with their guidance. The refactoring plan was realistic and we delivered on time. Great team to work with.',
      date: '2024-01-08',
    },
  ],
  finalCTA: {
    heading: 'Ready to Ship Your Java Backend Successfully?',
    description:
      'Book a free 15-minute consultation with a senior Java/Spring developer. No commitment—just a conversation about your challenges and how we can help.',
    cta: {
      primary: 'Book Free Consultation Now',
      secondary: 'View All Our Services',
    },
  },
  relatedServices: [
    { name: 'React Job Support', link: '/services/react-job-support', description: 'Frontend React support' },
    { name: 'Angular Job Support', link: '/services/angular-job-support', description: 'Enterprise Angular support' },
    { name: 'Node.js Job Support', link: '/services/nodejs-job-support', description: 'Node.js & Express backend' },
    { name: 'Python Job Support', link: '/services/python-job-support', description: 'Django, Flask & Python backend' },
    { name: 'Full Stack Job Support', link: '/job-support', description: 'Complete frontend & backend assistance' },
  ],
}
