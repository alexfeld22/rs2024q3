import { Character as CharacterType } from '../types/characters.types';
import Character from './Character';

type Props = {
  characters: CharacterType[];
};

export default function Characters({ characters }: Props) {
  return (
    <ul className="flex flex-wrap items-center justify-center justify-items-center gap-2 py-[4.5rem] lg:max-w-[1300px] 2xl:max-w-[1920px]">
      {characters.map((item) => (
        <Character key={item.id} character={item} />
      ))}
    </ul>
  );
}
