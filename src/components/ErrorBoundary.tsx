import { Component, ErrorInfo, ReactNode } from 'react';

type ErrorBoundaryProps = {
  children: ReactNode;
};
type ErrorBoundaryState = {
  hasError: boolean;
  errorInfo: ErrorInfo | null;
};

export default class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      errorInfo: null,
    };
  }
  static getDevivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log('Error Boundary Error: ', error, errorInfo);
    this.setState({
      hasError: true,
      errorInfo: errorInfo,
    });
  }
  render(): ReactNode {
    if (this.state.hasError) {
      return (
        <h1 className="text-xl">
          Something went wrong, Error Boundary caught an Error. Please reload
          the page
        </h1>
      );
    }
    return this.props.children;
  }
}
