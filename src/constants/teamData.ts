export interface ConsultantProfile {
  name: string
  title: string
  experience: string
  technologies: string[]
  bio: string
}

export const consultantProfiles: ConsultantProfile[] = [
  {
    name: 'Expert 1',
    title: 'Senior Full Stack Consultant',
    experience: '8+ years',
    technologies: ['React', 'Node.js', 'TypeScript', 'AWS'],
    bio: 'Specializes in React and Node.js applications. Has helped dozens of developers ship production apps and migrate legacy codebases.',
  },
  {
    name: 'Expert 2',
    title: 'Backend & DevOps Consultant',
    experience: '6+ years',
    technologies: ['Java', 'Spring Boot', 'Python', 'Docker', 'Kubernetes'],
    bio: 'Focus on backend systems and DevOps. Experienced in microservices, APIs, and cloud deployment.',
  },
  {
    name: 'Expert 3',
    title: 'Frontend & Angular Consultant',
    experience: '7+ years',
    technologies: ['Angular', 'RxJS', 'NgRx', 'TypeScript'],
    bio: 'Angular specialist. Helps teams with enterprise Angular apps, state management, and testing.',
  },
]
