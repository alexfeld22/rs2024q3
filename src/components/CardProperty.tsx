import { Component } from 'react';

type Props = {
  title: string;
  value: string;
};

class CardProperty extends Component<Props> {
  render() {
    return (
      <div>
        <p>{this.props.title}</p>
        <p>{this.props.value}</p>
      </div>
    );
  }
}

export default CardProperty;
