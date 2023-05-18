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
  fullName: string
  mobileNumber: string
  email: string
  technology: string
  otherTechnology: string
  country: string
  preferredDate: string
}

export interface ModalProps {
  isOpen: boolean
  toggleModal: Function
}
