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
