import { Component, ReactNode } from 'react';

type ErrorBoundaryProps = {
  children: ReactNode | null;
};

type ErrorBoundaryState = {
  error: boolean;
};

export default class ErrorBoundaryForm extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      error: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick = () => {
    this.setState({
      error: true,
    });
  };
  render() {
    if (this.state.error) {
      throw new Error('Error Boundary test error');
    }
    return (
      <div>
        <button className="rounded bg-red-400 p-2" onClick={this.handleClick}>
          Throw an error!
        </button>
      </div>
    );
  }
}
