import { ErrorBoundaryState } from '@/types/types'
import React, {
  Component,
  ErrorInfo,
  ReactNode,
  PropsWithChildren,
} from 'react'

class ErrorBoundary extends Component<
  PropsWithChildren<{}>,
  ErrorBoundaryState
> {
  constructor(props: PropsWithChildren<{}>) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    // Update state to indicate an error has occurred
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // You can log the error or send it to an error reporting service
    console.error('Error:', error)
    console.error('ErrorInfo:', errorInfo)
  }

  render(): ReactNode {
    if (this.state.hasError) {
      // Render fallback UI when there is an error
      return <h1>Something went wrong.</h1>
    }

    // Render children components normally
    return this.props.children
  }
}

export default ErrorBoundary
