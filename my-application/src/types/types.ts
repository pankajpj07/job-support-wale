import { ReactNode } from 'react'

export interface BulletPointProps {
  text: string
}

export interface NavLinkProps extends BulletPointProps {
  href: string
}

export interface ButtonProps {
  href: string
  title: string
}

export interface FormData {
  name: string
  email: string
  phone: string
  country: string
  technology?: string
  otherTechnology?: string
  preferredDate?: string
  query?: string
}

export interface ModalProps {
  isOpen: boolean
  toggleModal: Function
}

export enum formType {
  CONTACT = 'contact',
  DEMO = 'demo',
}

export interface MetricsCardProps {
  bgColor: string
  icon: any
  metrics: string
  text: string
}

export interface LayoutProps {
  metaTitle: string
  pageHref: string
  children: ReactNode
}
export interface JobSupportSectionProps {
  imagePath: string
  skills?: string
  skillsText?: string
  skillsServiceText?: string
}

export interface JobSupportPageDataProps {
  [key: string]: {
    skills: string
    skillsText: string
    skillsServiceText: string
  }
}

export interface ErrorBoundaryState {
  hasError: boolean
}
