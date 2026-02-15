import type { ServicePageDataFull } from '@/types/servicePageTypes'

export const pythonJobSupportData: ServicePageDataFull = {
  slug: 'python-job-support',
  name: 'Python',
  meta: {
    title: 'Python Job Support from India | Expert Django & Flask Developers',
    description:
      'Get professional Python job support from senior developers. Help with Django, Flask, FastAPI, APIs. 2-4 hours daily. Trusted by 400+ Python developers.',
    keywords:
      'Python job support, Django support, Flask support, FastAPI, Python API, backend Python support, Python consultant',
    canonicalUrl: '/services/python-job-support',
    ogImage: '/og-image.jpg',
  },
  hero: {
    title: 'Expert Python Job Support from India',
    subtitle:
      'Get real-time help from senior Python developers. Master Django, Flask, FastAPI, and backend development.',
    cta: {
      primary: 'Book Free Consultation',
      primaryLink: '/join-our-team',
      secondary: 'View Pricing',
      secondaryLink: '/pricing',
    },
    trustBadges: [
      '400+ Python Developers Helped',
      '5+ Years Python Experience',
      'Available Mon-Fri, 2-4 hours daily',
      '4.8/5 Client Rating',
    ],
  },
  introduction: `Working on a Python backend with Django, Flask, or FastAPI and need expert help? Our Python job support connects you with senior developers who've built and maintained production Python applications for years.

We understand the challenges—designing models and migrations, building REST or GraphQL APIs, managing authentication, background tasks, and deploying to AWS or GCP. Whether you're on a legacy Django app or a new FastAPI service, we provide pair programming and code reviews so you can deliver on time.

Our consultants have helped hundreds of developers across the USA, UK, Canada, and Australia with Python backends, APIs, and data pipelines. We offer flexible plans so you get expert help when you need it.

Let us help you ship your Python project with confidence.`,
  challenges: [
    {
      title: 'Django ORM & Migrations',
      description:
        'Struggling with models, migrations, querysets, or N+1 queries? We help you design schemas, write efficient queries, use select_related and prefetch_related, and handle migration conflicts safely.',
      icon: '🗄️',
    },
    {
      title: 'Django REST Framework & APIs',
      description:
        'Building REST APIs with DRF? Need help with serializers, viewsets, permissions, throttling, or filtering? We guide you through best practices and help you structure your API for maintainability.',
      icon: '🔌',
    },
    {
      title: 'Flask & FastAPI',
      description:
        'Using Flask or FastAPI for APIs or microservices? We help with routing, dependency injection, validation with Pydantic, and structuring your application for scale and testability.',
      icon: '⚡',
    },
    {
      title: 'Authentication & Security',
      description:
        'Implementing JWT, session auth, OAuth, or role-based access? We help you secure your Python app, handle passwords correctly, and protect against common vulnerabilities.',
      icon: '🔐',
    },
    {
      title: 'Background Tasks & Celery',
      description:
        'Need async tasks with Celery, RQ, or Django background tasks? We help with task design, retries, monitoring, and avoiding common pitfalls with distributed tasks.',
      icon: '📨',
    },
    {
      title: 'Testing & Debugging',
      description:
        'Writing tests with pytest or Django TestCase? We help you mock external services, test APIs, and debug complex issues in your Python application.',
      icon: '🐛',
    },
    {
      title: 'Deployment & DevOps',
      description:
        'Deploying with Gunicorn, uWSGI, or Docker? We help you containerize your app, set up CI/CD, and deploy to AWS, GCP, or other platforms with best practices.',
      icon: '🚀',
    },
    {
      title: 'Legacy Code & Refactoring',
      description:
        'Maintaining legacy Django or Flask code? We help you refactor safely, add tests, and modernize without big-bang rewrites.',
      icon: '🏗️',
    },
  ],
  technologies: [
    {
      category: 'Frameworks',
      items: [
        'Django',
        'Django REST Framework',
        'Flask',
        'FastAPI',
        'Celery',
      ],
    },
    {
      category: 'Data & ORM',
      items: [
        'Django ORM',
        'SQLAlchemy',
        'Alembic',
        'PostgreSQL',
        'MySQL',
        'Redis',
      ],
    },
    {
      category: 'APIs & Validation',
      items: [
        'REST',
        'GraphQL (Strawberry, Graphene)',
        'Pydantic',
        'OpenAPI',
      ],
    },
    {
      category: 'Auth & Security',
      items: [
        'Django Auth',
        'JWT',
        'OAuth',
        'django-allauth',
      ],
    },
    {
      category: 'Testing',
      items: [
        'pytest',
        'Django TestCase',
        'Factory Boy',
        'Responses / HTTPX',
      ],
    },
    {
      category: 'Deploy & DevOps',
      items: [
        'Gunicorn',
        'uWSGI',
        'Docker',
        'AWS',
        'GCP',
      ],
    },
  ],
  howItWorks: [
    {
      number: 1,
      title: 'Free Consultation Call',
      description:
        'Schedule a 15-minute call to discuss your Python project, Django/Flask challenges, and timeline. We\'ll assess fit and answer any questions.',
      icon: '📅',
    },
    {
      number: 2,
      title: 'Get Matched with Python Expert',
      description:
        'Within 24 hours we pair you with a senior Python developer. Review their profile and schedule your first session.',
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
        'Ship your Python backend with confidence. Ongoing support until your goals are met, with flexible hours for deadlines.',
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
        'Perfect for Django/Flask questions',
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
        'Best for medium Python projects',
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
        'ORM and API best practices',
        'Most popular choice',
      ],
      popular: true,
      cta: 'Start Monthly Plan',
    },
  ],
  caseStudies: [
    {
      title: 'Django API Performance and Scaling',
      client: 'EdTech Startup, USA',
      challenge:
        'A Django REST API was slowing down as data grew. Slow queries and missing indexes were affecting response times. The team needed to optimize without rewriting.',
      solution:
        'We profiled queries, added database indexes, introduced select_related/prefetch_related, and optimized serializers. We also set up caching with Redis for heavy endpoints and added basic monitoring.',
      result:
        'API latency dropped by 50%, and the team had a clear pattern for optimizing new endpoints. The app now handles 3x the traffic on the same infrastructure.',
      technologies: ['Django', 'DRF', 'PostgreSQL', 'Redis'],
      duration: '1 month',
    },
    {
      title: 'Flask to FastAPI Migration',
      client: 'Data Platform, UK',
      challenge:
        'A legacy Flask API needed to be migrated to FastAPI for better async support and OpenAPI docs. The team had no FastAPI experience.',
      solution:
        'We designed an incremental migration, moved endpoints one by one to FastAPI with Pydantic models, and added integration tests. We also trained the team on async and dependency injection in FastAPI.',
      result:
        'Migration completed in 2 months. The new API has automatic OpenAPI docs and better performance under load. The team now uses FastAPI for all new services.',
      technologies: ['FastAPI', 'Pydantic', 'PostgreSQL'],
      duration: '2 months',
    },
  ],
  faq: [
    {
      question: 'Do you support both Django and Flask?',
      answer:
        'Yes. We have consultants experienced in Django, Django REST Framework, Flask, and FastAPI. We match you with someone who knows your framework and can help with your specific challenges.',
    },
    {
      question: 'Can you help with Celery and background tasks?',
      answer:
        'Absolutely. We help with Celery setup, task design, retries, monitoring, and debugging. We can also help with Django background tasks or other async patterns depending on your stack.',
    },
    {
      question: 'How quickly can I start Python support?',
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
      name: 'Rachel P.',
      role: 'Backend Developer',
      company: 'USA',
      rating: 5,
      text: 'The Django ORM and DRF support was exactly what I needed. We fixed our N+1 issues and our API is much faster. My consultant was patient and very knowledgeable.',
      date: '2024-01-25',
    },
    {
      name: 'Vikram S.',
      role: 'Full Stack Developer',
      company: 'India',
      rating: 5,
      text: 'I was new to FastAPI and they helped me structure the project and understand async and Pydantic. Now I can build APIs confidently. Great experience.',
      date: '2024-02-08',
    },
    {
      name: 'Emma W.',
      role: 'Tech Lead',
      company: 'Australia',
      rating: 5,
      text: 'We migrated our Flask API to FastAPI with their guidance. The async support and OpenAPI docs have been a big win. Highly recommend for any Python backend work.',
      date: '2024-01-12',
    },
  ],
  finalCTA: {
    heading: 'Ready to Ship Your Python Backend Successfully?',
    description:
      'Book a free 15-minute consultation with a senior Python developer. No commitment—just a conversation about your Django, Flask, or FastAPI challenges and how we can help.',
    cta: {
      primary: 'Book Free Consultation Now',
      secondary: 'View All Our Services',
    },
  },
  relatedServices: [
    { name: 'React Job Support', link: '/services/react-job-support', description: 'Frontend React support' },
    { name: 'Node.js Job Support', link: '/services/nodejs-job-support', description: 'Node.js & Express backend' },
    { name: 'Java Job Support', link: '/services/java-job-support', description: 'Spring Boot & Java backend' },
    { name: 'Full Stack Job Support', link: '/job-support', description: 'Complete frontend & backend assistance' },
  ],
}
