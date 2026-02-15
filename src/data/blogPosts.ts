import type { BlogPost } from '@/types/blog'

export const blogCategories = [
  { slug: 'guides' as const, name: 'Guides' },
  { slug: 'how-to' as const, name: 'How-To' },
  { slug: 'technology' as const, name: 'Technology' },
  { slug: 'career' as const, name: 'Career' },
  { slug: 'company' as const, name: 'Company' },
] as const

export const blogPosts: BlogPost[] = [
  {
    slug: 'complete-guide-it-job-support-services',
    title: 'Complete Guide to IT Job Support Services',
    excerpt:
      'Everything you need to know about IT job support: what it is, who it’s for, how it works, and how to get the most from remote expert help.',
    category: 'guides',
    date: '2025-01-15',
    author: 'IndiaJobSupport',
    authorRole: 'Job Support Team',
    image: '/og-image.jpg',
    readTimeMinutes: 12,
    body: [
      {
        type: 'p',
        content:
          'IT job support is a service where experienced developers and engineers work alongside you—remotely—to help you deliver on your role. Whether you’re new to a stack, stuck on a deadline, or bridging a skills gap, the right support can keep you productive and growing.',
      },
      {
        type: 'h2',
        content: 'What is IT job support?',
      },
      {
        type: 'p',
        content:
          'Job support typically means a dedicated expert (or small team) joins your project for a set number of hours per day or week. They pair with you on code, architecture, debugging, and best practices. Support is confidential, professional, and focused on your deliverables—not replacing you, but enabling you to succeed.',
      },
      {
        type: 'h2',
        content: 'Who is it for?',
      },
      {
        type: 'p',
        content:
          'Common situations include: new hires ramping on a legacy or new stack, developers moving into a different technology (e.g. backend to full‑stack), contractors who need to ship fast, and teams that lack in-house expertise in a specific area. If you’re in the USA, UK, Canada, or elsewhere and need real-time technical backup, job support can be a fit.',
      },
      {
        type: 'h2',
        content: 'How it usually works',
      },
      {
        type: 'ul',
        content: [
          'You share your project, tech stack, and availability.',
          'A provider matches you with an expert and agrees on hours (e.g. 2–4 hours/day, Mon–Fri).',
          'You work together via screen share, chat, and your normal tools.',
          'You keep ownership of the work; the expert advises, codes with you, and helps unblock.',
        ],
      },
      {
        type: 'h2',
        content: 'Getting the most from job support',
      },
      {
        type: 'p',
        content:
          'Be clear about goals and deadlines. Share context and code access as needed. Treat sessions like focused pair programming. Over time, you’ll not only deliver but also learn patterns you can reuse. For a deeper dive on choosing a provider and what to expect day to day, see our guide on how to choose the right job support provider.',
      },
    ],
  },
  {
    slug: 'how-to-choose-right-job-support-provider',
    title: 'How to Choose the Right Job Support Provider',
    excerpt:
      'Practical criteria to evaluate job support providers: expertise, process, confidentiality, and fit for your role and timeline.',
    category: 'how-to',
    date: '2025-01-22',
    author: 'IndiaJobSupport',
    authorRole: 'Job Support Team',
    readTimeMinutes: 8,
    body: [
      {
        type: 'p',
        content:
          'Choosing a job support provider can feel overwhelming. You need someone who understands your stack, fits your schedule, and keeps your work confidential. Here’s a concise framework to compare options.',
      },
      {
        type: 'h2',
        content: 'Relevant technical expertise',
      },
      {
        type: 'p',
        content:
          'Look for providers that specialize in your technologies—React, Angular, Node.js, Python, Java, .NET, DevOps, etc. Ask for brief consultant profiles or a short intro call. The best providers will match you with someone who has shipped similar projects, not just generic “full-stack” support.',
      },
      {
        type: 'h2',
        content: 'Clear process and availability',
      },
      {
        type: 'p',
        content:
          'Understand how onboarding works, how many hours you get, and how scheduling and communication happen. Prefer providers that offer 2–4 hour blocks on your timezone and a stable schedule (e.g. same consultant, same slots).',
      },
      {
        type: 'h2',
        content: 'Confidentiality and professionalism',
      },
      {
        type: 'p',
        content:
          'Your code and project details must stay private. Check for NDAs, data handling, and whether the provider works only for you during your engagement. Read reviews or ask for references if possible.',
      },
      {
        type: 'h2',
        content: 'Flexible engagement and value',
      },
      {
        type: 'p',
        content:
          'Some providers offer monthly, half-month, or hourly plans. Compare pricing and what’s included (revisions, scope changes, weekend support). Start with a short commitment if you’re unsure, and scale up once you’re confident.',
      },
      {
        type: 'p',
        content:
          'Taking time to vet expertise, process, and confidentiality will help you choose a job support provider that actually fits your role and goals.',
      },
    ],
  },
  {
    slug: 'react-developers-guide-to-job-support',
    title: "React Developer's Guide to Job Support",
    excerpt:
      'Why React developers use job support, what to expect, and how to make the most of expert help on hooks, architecture, and delivery.',
    category: 'technology',
    date: '2025-02-01',
    author: 'IndiaJobSupport',
    authorRole: 'Job Support Team',
    readTimeMinutes: 10,
    body: [
      {
        type: 'p',
        content:
          'React is everywhere—but teams and codebases vary wildly. New roles often mean new patterns: hooks, state management, testing, and architecture. Job support gives you a dedicated expert to pair with so you can deliver and learn at the same time.',
      },
      {
        type: 'h2',
        content: 'When React developers seek support',
      },
      {
        type: 'ul',
        content: [
          'Ramping on a new codebase (class components, hooks, or mixed).',
          'Implementing or refactoring state (Context, Redux, Zustand).',
          'Performance (re-renders, memo, code splitting).',
          'Testing (Jest, React Testing Library, E2E).',
          'Integrating with design systems or backend APIs.',
        ],
      },
      {
        type: 'h2',
        content: 'What good support looks like',
      },
      {
        type: 'p',
        content:
          'Your consultant should understand your stack (TypeScript, Next.js, Vite, etc.) and work in your environment. Sessions are typically 2–4 hours of pair programming: debugging, reviewing PRs, and applying best practices. You stay in the driver’s seat; they help you unblock and level up.',
      },
      {
        type: 'h2',
        content: 'Getting the most from React job support',
      },
      {
        type: 'p',
        content:
          'Share access and context early. List your biggest unknowns (e.g. “our state layer” or “testing strategy”). Prioritize one or two goals per week. Over time, you’ll internalize patterns and need less support. For more, see our React job support service or the complete guide to IT job support.',
      },
    ],
  },
  {
    slug: 'top-10-signs-you-need-job-support',
    title: 'Top 10 Signs You Need Job Support',
    excerpt:
      'Stuck on deadlines, new tech, or unclear expectations? Here are 10 clear signs that job support could help you deliver and grow.',
    category: 'career',
    date: '2025-02-08',
    author: 'IndiaJobSupport',
    authorRole: 'Job Support Team',
    readTimeMinutes: 6,
    body: [
      {
        type: 'p',
        content:
          'Job support isn’t only for emergencies. It’s for anyone who’s stretched on skills, time, or context. Here are 10 signs it might be the right move.',
      },
      {
        type: 'h2',
        content: '1. You’re repeatedly missing deadlines',
      },
      {
        type: 'p',
        content:
          'If scope or complexity keeps pushing you past due dates, a few hours of focused help can get you unblocked and back on track.',
      },
      {
        type: 'h2',
        content: '2. You’ve just joined and the codebase is overwhelming',
      },
      {
        type: 'p',
        content:
          'Pairing with someone who can navigate architecture and patterns speeds up onboarding and reduces stress.',
      },
      {
        type: 'h2',
        content: '3. You’re on a new technology or stack',
      },
      {
        type: 'p',
        content:
          'Moving from Angular to React, or into Node.js or DevOps? An expert can shortcut learning and help you deliver while you learn.',
      },
      {
        type: 'h2',
        content: '4. Code reviews take forever or feel hostile',
      },
      {
        type: 'p',
        content:
          'A consultant can help you align with team standards and improve your first drafts so reviews are faster and smoother.',
      },
      {
        type: 'h2',
        content: '5. You’re the only one who knows a critical area',
      },
      {
        type: 'p',
        content:
          'Bus factor risk is real. Job support can help document, refactor, or share knowledge so you’re not a single point of failure.',
      },
      {
        type: 'h2',
        content: '6–10. Other strong signals',
      },
      {
        type: 'ul',
        content: [
          'You’re contracting and need to ship fast without a long learning curve.',
          'You’re worried about performance reviews or probation.',
          'You want to grow into a new role (e.g. lead, new stack) and need a safety net.',
          'Your team is understaffed and you’re carrying too much.',
          'You’ve tried tutorials and docs but need real-world, project-specific guidance.',
        ],
      },
      {
        type: 'p',
        content:
          'If several of these sound familiar, it’s worth exploring job support. The right provider will help you deliver today and build skills for tomorrow.',
      },
    ],
  },
  {
    slug: 'angular-job-support-when-and-how',
    title: 'Angular Job Support: When and How It Helps',
    excerpt:
      'How Angular job support works, when to use it, and what to expect for enterprise apps, NgRx, and migration projects.',
    category: 'technology',
    date: '2025-02-12',
    author: 'IndiaJobSupport',
    authorRole: 'Job Support Team',
    readTimeMinutes: 8,
    body: [
      {
        type: 'p',
        content:
          'Angular is common in enterprise and long-lived products. Teams often need help with upgrades, NgRx, RxJS, or new features. Job support gives you an Angular expert in your corner without a full-time hire.',
      },
      {
        type: 'h2',
        content: 'When Angular teams use job support',
      },
      {
        type: 'ul',
        content: [
          'Upgrading between major versions (e.g. Angular 14 → 18).',
          'Introducing or refactoring NgRx or other state management.',
          'Complex forms, routing, or lazy loading.',
          'Performance and change detection tuning.',
          'Training or pairing with junior or new team members.',
        ],
      },
      {
        type: 'h2',
        content: 'What to expect',
      },
      {
        type: 'p',
        content:
          'You’ll typically get 2–4 hours per day of paired work: debugging, design review, and hands-on implementation. Consultants should be comfortable with your CLI version, testing setup, and deployment pipeline.',
      },
      {
        type: 'p',
        content:
          'If you’re on Angular and feeling the pinch, see our Angular job support service or book a short call to discuss your project.',
      },
    ],
  },
  {
    slug: 'nodejs-job-support-for-backend-developers',
    title: 'Node.js Job Support for Backend Developers',
    excerpt:
      'How Node.js job support helps backend developers ship APIs, microservices, and integrations when time or experience is limited.',
    category: 'technology',
    date: '2025-02-14',
    author: 'IndiaJobSupport',
    authorRole: 'Job Support Team',
    readTimeMinutes: 7,
    body: [
      {
        type: 'p',
        content:
          'Node.js powers APIs, microservices, and tooling across the industry. If you’re new to Node or moving from another backend stack, job support can help you deliver without getting stuck for weeks.',
      },
      {
        type: 'h2',
        content: 'Common Node.js support scenarios',
      },
      {
        type: 'ul',
        content: [
          'Designing and building REST or GraphQL APIs (Express, Fastify, Nest).',
          'Database integration (SQL, MongoDB, Redis) and migrations.',
          'Async patterns, error handling, and logging.',
          'Testing (unit, integration) and CI/CD.',
          'Moving from Java, .NET, or PHP to Node.js.',
        ],
      },
      {
        type: 'h2',
        content: 'Making it work for you',
      },
      {
        type: 'p',
        content:
          'Share your repo (or a sanitized version), API contracts, and deployment process. A good consultant will align with your style and help you ship while teaching patterns you can reuse. For more, see our Node.js job support page.',
      },
    ],
  },
  {
    slug: 'python-job-support-developers-guide',
    title: 'Python Job Support: A Developer’s Guide',
    excerpt:
      'When and how Python developers use job support for web apps, data pipelines, automation, and new codebases.',
    category: 'technology',
    date: '2025-02-16',
    author: 'IndiaJobSupport',
    authorRole: 'Job Support Team',
    readTimeMinutes: 7,
    body: [
      {
        type: 'p',
        content:
          'Python is used for web apps (Django, FastAPI), data work, scripting, and more. Job support can help you deliver on a Python project when you’re new to the framework or the codebase.',
      },
      {
        type: 'h2',
        content: 'Typical Python job support use cases',
      },
      {
        type: 'ul',
        content: [
          'Django or FastAPI: APIs, auth, ORM, and deployment.',
          'Data pipelines and ETL (pandas, Airflow, etc.).',
          'Testing, type hints, and refactoring legacy code.',
          'Moving from another language (e.g. Java, C#) into Python.',
        ],
      },
      {
        type: 'h2',
        content: 'What you get',
      },
      {
        type: 'p',
        content:
          'Scheduled pairing sessions with an expert who knows your stack. You work through bugs, design decisions, and best practices together. Ideal for hitting deadlines while building long-term Python skills. Explore our Python job support offering for details.',
      },
    ],
  },
  {
    slug: 'java-job-support-enterprise-developers',
    title: 'Java Job Support for Enterprise Developers',
    excerpt:
      'How Java job support helps enterprise developers with Spring, microservices, and legacy systems under tight deadlines.',
    category: 'technology',
    date: '2025-02-18',
    author: 'IndiaJobSupport',
    authorRole: 'Job Support Team',
    readTimeMinutes: 8,
    body: [
      {
        type: 'p',
        content:
          'Java and the Spring ecosystem power many enterprise systems. Job support can help you deliver on Spring Boot, microservices, or legacy Java when you’re short on time or depth in a specific area.',
      },
      {
        type: 'h2',
        content: 'Where Java job support fits',
      },
      {
        type: 'ul',
        content: [
          'Spring Boot: REST APIs, security, data access, and configuration.',
          'Microservices: design, inter-service communication, and observability.',
          'Legacy Java: refactoring, testing, and gradual modernization.',
          'Build and deployment: Maven/Gradle, Docker, and CI/CD.',
        ],
      },
      {
        type: 'h2',
        content: 'Working with a Java support consultant',
      },
      {
        type: 'p',
        content:
          'You’ll pair for a few hours per day on your codebase. The consultant should match your Java version and frameworks. Focus on your highest-impact tasks first. For more, see our Java job support service.',
      },
    ],
  },
]

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug)
}

export function getBlogPostsByCategory(category: string): BlogPost[] {
  if (!category) return blogPosts
  return blogPosts.filter((p) => p.category === category)
}

export function getRelatedPosts(post: BlogPost, limit = 3): BlogPost[] {
  return blogPosts
    .filter((p) => p.slug !== post.slug)
    .sort((a, b) => {
      const sameCategory = (p: BlogPost) => (p.category === post.category ? 1 : 0)
      return sameCategory(b) - sameCategory(a) || new Date(b.date).getTime() - new Date(a.date).getTime()
    })
    .slice(0, limit)
}

export function getAllBlogSlugs(): string[] {
  return blogPosts.map((p) => p.slug)
}

/** Plain text of post body for schema and meta (no HTML). */
export function getPostBodyPlainText(blocks: BlogPost['body']): string {
  return blocks
    .map((b) => (Array.isArray(b.content) ? b.content.join(' ') : b.content))
    .join('\n\n')
}
