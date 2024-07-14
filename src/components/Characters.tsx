// import React from 'react'
import { Component } from 'react';
import { Character as CharacterType } from '../types/characters.types';
import Character from './Character';

type Props = {
  characters: CharacterType[];
};

export default class Characters extends Component<Props> {
  render() {
    return (
      <ul className="flex flex-wrap items-center justify-center justify-items-center gap-2 py-[4.5rem] lg:max-w-[1300px] 2xl:max-w-[1920px]">
        {this.props.characters.map((item) => (
          <Character key={item.id} character={item} />
        ))}
      </ul>
    );
  }
}
