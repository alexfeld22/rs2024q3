// import React from "react";
import { Component } from 'react';
import { Character as CharacterType } from '../types/characters.types';
import CardProperty from './CardProperty';
import CardTitle from './CardTitle';

type CharacterProps = {
  character: CharacterType;
};

export default class Character extends Component<CharacterProps> {
  render() {
    return (
      <li className="m-[0.75rem] flex w-full flex-col overflow-hidden rounded-[0.5rem] bg-[#3C3E44] sm:h-[220px] sm:w-[600px] sm:flex-row">
        <div className="flex-[2_1_0]">
          <img
            className="m-0 h-[300px] w-full object-cover object-center sm:h-full"
            src={this.props.character.image}
          />
        </div>
        <div className="flex-[3_1_0] p-[0.75rem]">
          {/* <p>{character.status} - {character.species}</p> */}
          <CardTitle
            name={this.props.character.name}
            species={this.props.character.species}
            status={this.props.character.status}
          />
          <CardProperty
            title="Last known location:"
            value={this.props.character.location.name}
          />
          <CardProperty
            title="First seen in:"
            value={this.props.character.origin.name}
          />
        </div>
      </li>
    );
  }
}
