export interface CaseStudy {
  slug: string
  title: string
  challenge: string
  solution: string[]
  results: string[]
  technologies: string[]
  duration: string
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'frontend-developer-react-hooks',
    title: 'How We Helped a Frontend Developer Master React Hooks',
    challenge:
      'A developer was struggling with React hooks in a new project. The codebase was moving from class components to functional components and hooks, and they were behind on deadlines with unclear patterns for state and effects.',
    solution: [
      'Daily 2-hour pair programming sessions focused on hooks and refactoring',
      'Code review and refactoring of existing components to use hooks consistently',
      'Best practices for useEffect, useMemo, and custom hooks',
    ],
    results: [
      'Project delivered 2 weeks ahead of schedule',
      'Developer gained confidence and could extend the pattern to new features',
      'Received positive feedback and took on more ownership within 3 months',
    ],
    technologies: ['React', 'Redux', 'TypeScript'],
    duration: '1 month',
  },
  {
    slug: 'backend-developer-node-migration',
    title: 'Smooth Backend Migration from Java to Node.js',
    challenge:
      'A backend developer was assigned to a new microservice written in Node.js and Express. They had strong Java/Spring experience but limited Node.js exposure and needed to ship features without delaying the team.',
    solution: [
      'Structured walkthrough of Node.js and Express patterns compared to Spring',
      'API design and database layer (MongoDB) with best practices',
      'Debugging and testing (Jest) so they could work independently',
    ],
    results: [
      'Delivered first feature within 2 weeks',
      'Became the go-to person for that service within 2 months',
      'Transitioned to full-time Node.js role on the team',
    ],
    technologies: ['Node.js', 'Express', 'MongoDB', 'Jest'],
    duration: '6 weeks',
  },
  {
    slug: 'angular-enterprise-ngrx',
    title: 'Enterprise Angular App: NgRx and State Management',
    challenge:
      'A developer joined a large Angular project using NgRx. They found the reactive patterns and store structure confusing and were slow to implement new features without introducing bugs.',
    solution: [
      'NgRx fundamentals: actions, reducers, effects, and selectors',
      'Pair programming on real features to apply the patterns',
      'Code reviews and refactoring of their first PRs',
    ],
    results: [
      'Confidently implemented a new feature module within 3 weeks',
      'Reduced code review cycles after understanding the patterns',
      'Able to onboard another team member later',
    ],
    technologies: ['Angular', 'NgRx', 'RxJS', 'TypeScript'],
    duration: '1 month',
  },
]

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug)
}
