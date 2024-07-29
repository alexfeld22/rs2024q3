import { Component } from 'react';

type Props = {
  name: string;
  species: string;
  status: string;
};

export default class CardTitle extends Component<Props> {
  render() {
    return (
      <div>
        <h3>{this.props.name}</h3>
        <div>
          <span
            className={
              this.props.status === 'Alive' ? 'icon-green' : 'icon-red'
            }
          >
            icon
          </span>
          <span>
            {this.props.status} - {this.props.species}
          </span>
        </div>
      </div>
    );
  }
}
