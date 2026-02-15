import type { ServicePageDataFull } from '@/types/servicePageTypes'

export const reactJobSupportData: ServicePageDataFull = {
  slug: 'react-job-support',
  name: 'React',
  meta: {
    title: 'React Job Support from India | Expert React Developers',
    description:
      'Get professional React job support from senior developers. Help with hooks, Redux, Next.js, TypeScript. 2-4 hours daily. Trusted by 500+ React developers.',
    keywords:
      'React job support, React hooks support, Redux help, Next.js support, React developer assistance India, React consultant, React training',
    canonicalUrl: '/services/react-job-support',
    ogImage: '/og-image.jpg',
  },
  hero: {
    title: 'Expert React Job Support from India',
    subtitle:
      'Get real-time help from senior React developers. Master hooks, Redux, Next.js, performance optimization & more.',
    cta: {
      primary: 'Book Free Consultation',
      primaryLink: '/join-our-team',
      secondary: 'View Pricing',
      secondaryLink: '/pricing',
    },
    trustBadges: [
      '500+ React Developers Helped',
      '5+ Years React Experience',
      'Available Mon-Fri, 2-4 hours daily',
      '4.9/5 Client Rating',
    ],
  },
  introduction: `Are you struggling with React development in your current job? Need help understanding hooks, managing state with Redux, or building performant applications with Next.js? Our React job support services provide you with dedicated assistance from senior React developers with 5+ years of experience.

We understand the challenges developers face when working with React—from mastering the component lifecycle and hooks to implementing complex state management and optimizing performance. Whether you're a junior developer learning React for the first time or an experienced developer tackling enterprise-level React applications, we're here to help.

Our React consultants have successfully helped over 500 developers deliver projects on time, improve their React skills, and advance their careers. We provide practical, hands-on support through pair programming, code reviews, architecture guidance, and debugging assistance. With our flexible support plans, you get expert help exactly when you need it.

Let us help you overcome React challenges and deliver successful projects with confidence.`,
  challenges: [
    {
      title: 'React Hooks Complexity',
      description:
        'Struggling with useState, useEffect, useContext, useReducer, or building custom hooks? Understanding hook dependencies, avoiding infinite loops, and managing side effects can be tricky. We help you master hooks deeply, write clean and efficient hook-based components, and avoid common pitfalls that lead to bugs and performance issues.',
      icon: '🎣',
    },
    {
      title: 'State Management Challenges',
      description:
        'Confused about when to use Context API vs Redux? Need help implementing Redux Toolkit, Zustand, or Recoil? Managing global state, avoiding prop drilling, and choosing the right state management solution for your project can be overwhelming. We guide you through state management best practices and help you implement the right solution for your needs.',
      icon: '📊',
    },
    {
      title: 'Performance Optimization',
      description:
        'Is your React app slow or laggy? Dealing with unnecessary re-renders, large bundle sizes, or slow initial page loads? We help you identify performance bottlenecks using React DevTools, implement proper memoization with useMemo and useCallback, optimize component rendering with React.memo, and implement code splitting and lazy loading.',
      icon: '⚡',
    },
    {
      title: 'Next.js Server-Side Rendering',
      description:
        'Building server-side rendered apps with Next.js? Need help with getServerSideProps, getStaticProps, API routes, or App Router? We help you implement proper data fetching strategies, set up API routes correctly, optimize SEO with proper meta tags, and deploy to Vercel or other platforms.',
      icon: '🚀',
    },
    {
      title: 'TypeScript Integration',
      description:
        'Adding TypeScript to your React project? Struggling with component props typing, generic components, or complex type definitions? We help you properly type React components, create reusable type definitions, use TypeScript with hooks effectively, and follow TypeScript best practices for React applications.',
      icon: '📘',
    },
    {
      title: 'Testing & Debugging',
      description:
        'Need help writing tests with Jest and React Testing Library? Dealing with complex bugs or hard-to-reproduce issues? We guide you through writing effective unit tests, integration tests, using React DevTools for debugging, implementing proper error boundaries, and handling asynchronous operations in tests.',
      icon: '🐛',
    },
    {
      title: 'Component Architecture',
      description:
        'Unsure how to structure your React components? When to split components? How to make them reusable? We help you design clean component architectures, implement proper component composition, create reusable design systems, and organize your project structure for scalability.',
      icon: '🏗️',
    },
    {
      title: 'API Integration & Data Fetching',
      description:
        'Struggling with REST APIs, GraphQL, or managing loading/error states? Need help with React Query, SWR, or Axios? We guide you through proper API integration patterns, implementing efficient data fetching strategies, handling authentication, and managing cache and revalidation.',
      icon: '🔌',
    },
  ],
  technologies: [
    {
      category: 'Core React',
      items: [
        'React 18+ (latest features)',
        'React Hooks (useState, useEffect, useContext, etc.)',
        'Context API',
        'React Router v6',
        'JSX/TSX',
        'React Suspense',
        'Concurrent Rendering',
      ],
    },
    {
      category: 'State Management',
      items: [
        'Redux Toolkit',
        'Zustand',
        'Recoil',
        'Jotai',
        'MobX',
        'Context API with useReducer',
      ],
    },
    {
      category: 'React Frameworks',
      items: [
        'Next.js 14+ (App Router & Pages Router)',
        'Remix',
        'Gatsby',
        'Vite',
        'Create React App',
      ],
    },
    {
      category: 'UI & Styling',
      items: [
        'Material-UI (MUI)',
        'Chakra UI',
        'Ant Design',
        'Tailwind CSS',
        'Styled Components',
        'Emotion',
        'Shadcn/ui',
        'Radix UI',
      ],
    },
    {
      category: 'Data Fetching',
      items: [
        'React Query (TanStack Query)',
        'SWR',
        'Axios',
        'Fetch API',
        'GraphQL (Apollo Client, urql)',
      ],
    },
    {
      category: 'Testing',
      items: [
        'Jest',
        'React Testing Library',
        'Vitest',
        'Cypress',
        'Playwright',
      ],
    },
  ],
  howItWorks: [
    {
      number: 1,
      title: 'Free Consultation Call',
      description:
        "Schedule a 15-minute call to discuss your React challenges, project requirements, and timeline. We'll assess if we're the right fit and answer any questions you have about our support process.",
      icon: '📅',
    },
    {
      number: 2,
      title: 'Get Matched with React Expert',
      description:
        "Within 24 hours, we'll pair you with a senior React developer whose expertise matches your needs. Review their profile, experience, and schedule your first session.",
      icon: '🤝',
    },
    {
      number: 3,
      title: 'Start Daily Support Sessions',
      description:
        'Work with your consultant for 2-4 hours daily through pair programming, code reviews, and problem-solving. Sessions include screen sharing, live coding, and practical guidance on your actual project.',
      icon: '💻',
    },
    {
      number: 4,
      title: 'Deliver Project Successfully',
      description:
        'Complete your project with confidence while improving your React skills. Get ongoing support until your project goals are met, with flexible hours based on your deadlines.',
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
        'Perfect for quick questions',
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
        'Project documentation help',
        'Best for medium projects',
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
        'Performance optimization',
        'Interview preparation',
        'Most popular choice',
      ],
      popular: true,
      cta: 'Start Monthly Plan',
    },
  ],
  caseStudies: [
    {
      title: 'E-commerce Platform Migration to Next.js',
      client: 'Startup in USA',
      challenge:
        'Client had a React SPA built with Create React App that was struggling with SEO and poor initial load times. They needed to migrate to Next.js for better search engine visibility and performance, but the team lacked Next.js experience.',
      solution:
        'We guided the team through an incremental migration strategy, helping them implement Server-Side Rendering (SSR) for product pages, Static Site Generation (SSG) for category pages, and Incremental Static Regeneration (ISR) for dynamic content. We set up proper meta tags, implemented image optimization with next/image, and configured dynamic routing for SEO-friendly URLs.',
      result:
        'Achieved 40% faster page load times, 60% improvement in Lighthouse scores, and 2x increase in organic traffic within 3 months. The client successfully launched on time and saw immediate improvements in search rankings.',
      technologies: ['Next.js 13', 'React 18', 'TypeScript', 'Tailwind CSS', 'Vercel'],
      duration: '2 months',
    },
    {
      title: 'Legacy Class Components Refactoring to Hooks',
      client: 'Enterprise in UK',
      challenge:
        'A large enterprise application with 200+ React class components was becoming difficult to maintain. The codebase had complex lifecycle methods, wrapper hell with HOCs, and the team wanted to modernize to hooks and functional components with TypeScript.',
      solution:
        'We created a systematic refactoring plan, prioritizing critical components first. Provided training on hooks patterns, helped refactor complex lifecycle logic to useEffect, converted HOCs to custom hooks, implemented proper TypeScript types for all components, and introduced React Query for data fetching to replace componentDidMount patterns.',
      result:
        'Successfully refactored all 200+ components over 3 months, reduced codebase by 30%, improved developer productivity by 50%, and reduced bug reports by 60%. All new features are now built with hooks and TypeScript.',
      technologies: ['React Hooks', 'TypeScript', 'Redux Toolkit', 'React Query', 'Jest'],
      duration: '3 months',
    },
    {
      title: 'Real-time Dashboard Performance Optimization',
      client: 'SaaS Company in Canada',
      challenge:
        "A React dashboard displaying real-time data from WebSockets was experiencing severe performance issues. With 50+ charts and tables updating every second, the UI was laggy and sometimes froze. The client's users were complaining about the poor experience.",
      solution:
        'We conducted a thorough performance audit using React DevTools Profiler and identified unnecessary re-renders. Implemented React.memo for expensive components, used useMemo and useCallback, virtualized large lists with react-window, debounced WebSocket updates, and split the dashboard into code-split routes with lazy-loaded chart libraries.',
      result:
        'Reduced re-renders by 80%, achieved smooth 60fps performance, decreased bundle size by 40% through code splitting, and improved Time to Interactive by 3 seconds. User satisfaction scores increased from 3.2/5 to 4.7/5.',
      technologies: ['React 18', 'WebSockets', 'Recharts', 'react-window', 'Webpack'],
      duration: '1 month',
    },
  ],
  faq: [
    {
      question: 'What React versions do you support?',
      answer:
        "We support all React versions from 16.8+ (when hooks were introduced) to the latest React 18. We stay constantly updated with React's newest features including concurrent rendering, automatic batching, transitions, suspense, and server components. If you're using an older version, we can also help you plan and execute an upgrade to the latest version.",
    },
    {
      question: 'Can you help with React Native as well?',
      answer:
        'Yes! While this page focuses on React web development (React DOM), we also have experienced consultants specializing in React Native for iOS and Android mobile app development. React Native shares many concepts with React web, so if you need both web and mobile support, we can provide comprehensive assistance. Just mention your React Native requirements during the consultation call.',
    },
    {
      question: 'Do you provide help with React job interviews?',
      answer:
        'Absolutely! Many of our clients use our services for interview preparation. We can help you review common React interview questions, conduct mock interviews with real-time feedback, build a strong portfolio of React projects, practice coding challenges, explain complex React concepts clearly, and prepare for system design discussions. We\'ve helped dozens of developers land jobs at top tech companies.',
    },
    {
      question: 'What if I need weekend support for an urgent deadline?',
      answer:
        'While our standard support hours are Monday through Friday, we understand that deadlines don\'t always respect weekends. For urgent situations, we can arrange weekend support at no additional charge—just give us advance notice. If you have a critical production issue or a Monday morning deadline, we\'re here to help you succeed.',
    },
    {
      question: 'How quickly can I get started with React support?',
      answer:
        'Very quickly! After your free 15-minute consultation call, we typically match you with a senior React consultant within 24 hours. Once matched, you can start your first session as soon as the next business day. For urgent cases requiring immediate help, we can sometimes arrange same-day support. Book your consultation call as soon as possible so we can understand your needs and find the right expert for you.',
    },
    {
      question: 'Will I work with the same consultant throughout my project?',
      answer:
        'Yes, consistency is important for effective support. You\'ll work with the same React expert throughout your engagement so they can deeply understand your project, codebase, and requirements. This ensures continuity and allows your consultant to provide increasingly valuable guidance. If for any reason you\'re not satisfied with your consultant, we can arrange a switch at no additional cost.',
    },
    {
      question: 'What happens during a typical support session?',
      answer:
        'Sessions typically involve: screen sharing where we can see your code and environment, pair programming where we work together on solving problems, code reviews of your recent work with constructive feedback, debugging complex issues step-by-step, architecture discussions for new features, answering your questions about React concepts, and planning next steps. Sessions are highly interactive and focused on your actual project work.',
    },
    {
      question: 'Can you help with existing legacy React code or only new projects?',
      answer:
        'We excel at both! Many clients come to us with existing React codebases that need help—whether it\'s legacy code, poorly written code, or code without documentation. We can analyze and understand your existing codebase, refactor problematic code, add tests to legacy code, update to modern React patterns, improve performance, and add new features. Some of our most successful engagements involve modernizing and improving existing React applications.',
    },
    {
      question: 'Do you sign NDAs and confidentiality agreements?',
      answer:
        'Yes, absolutely. We understand that you may be working with proprietary code and sensitive business logic. We\'re happy to sign your company\'s NDA or confidentiality agreement before starting any work. All our consultants are professionals who understand the importance of client confidentiality and protecting intellectual property.',
    },
    {
      question: 'What if my project uses React with another technology I need help with?',
      answer:
        'No problem! React is often used with Node.js backends, GraphQL APIs, MongoDB databases, AWS deployment, etc. Our consultants have experience with full-stack development and can provide guidance across your entire technology stack. During your consultation, let us know all the technologies you\'re using so we can match you with a consultant who has relevant expertise in your complete stack.',
    },
  ],
  testimonials: [
    {
      name: 'John Davidson',
      role: 'Frontend Developer',
      company: 'Tech Startup, USA',
      rating: 5,
      text: 'The React hooks support literally saved my job! I was completely lost with useEffect dependencies and custom hooks. My consultant not only explained everything clearly but helped me refactor my entire component structure. We delivered the project 2 weeks ahead of schedule, and I learned more in one month than I did in 6 months on my own. Highly recommended!',
      date: '2024-01-15',
    },
    {
      name: 'Sarah Mitchell',
      role: 'Full Stack Developer',
      company: 'E-commerce Company, UK',
      rating: 5,
      text: 'Needed urgent help migrating our SPA to Next.js for SEO. The guidance was exceptional—from SSR setup to API routes to Vercel deployment. My consultant was patient, knowledgeable, and always available when I hit roadblocks. The migration was completed successfully in 6 weeks, and we\'re now ranking on Google. Best investment we made for our project!',
      date: '2024-02-03',
    },
    {
      name: 'Rajesh Kumar',
      role: 'Junior React Developer',
      company: 'Software Agency, India',
      rating: 5,
      text: 'As a junior developer, I was struggling with Redux Toolkit and complex state management. The daily support sessions transformed my understanding. We built a proper architecture together, I learned best practices, and now I can confidently work on enterprise React applications. My manager even gave me a raise after seeing my improvement!',
      date: '2024-01-28',
    },
    {
      name: 'Emily Chen',
      role: 'Tech Lead',
      company: 'Healthcare SaaS, Canada',
      rating: 5,
      text: 'Our React dashboard had severe performance issues with real-time updates. The consultant identified all the bottlenecks within the first session and helped us implement proper memoization, virtualization, and optimization techniques. Performance improved by 80%, and the user experience is now smooth. Extremely valuable expertise!',
      date: '2024-02-10',
    },
  ],
  finalCTA: {
    heading: 'Ready to Master React and Deliver Your Project Successfully?',
    description:
      'Book a free 15-minute consultation with a senior React developer. No commitment required—just a friendly conversation about your challenges and how we can help.',
    cta: {
      primary: 'Book Free Consultation Now',
      secondary: 'View All Our Services',
    },
  },
  relatedServices: [
    { name: 'Angular Job Support', link: '/services/angular-job-support', description: 'Expert Angular support for enterprise applications' },
    { name: 'Node.js Job Support', link: '/services/nodejs-job-support', description: 'Backend support for Node.js & Express' },
    { name: 'Python Job Support', link: '/services/python-job-support', description: 'Django, Flask & Python backend assistance' },
    { name: 'Java Job Support', link: '/services/java-job-support', description: 'Spring Boot & enterprise Java support' },
    { name: 'Full Stack Job Support', link: '/job-support', description: 'Complete frontend & backend assistance' },
  ],
}
