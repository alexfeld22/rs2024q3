type Props = {
  name: string;
  species: string;
  status: string;
};

export default function CardTitle({ name, species, status }: Props) {
  return (
    <div>
      <h3>{name}</h3>
      <div>
        <div
          className={
            status === 'Alive'
              ? 'h=[14px] mr-1 inline-block aspect-square w-[14px] shrink-0 grow-0 rounded-full bg-green-600'
              : 'h=[14px] mr-1 inline-block aspect-square w-[14px] shrink-0 grow-0 rounded-full bg-red-400'
          }
        ></div>
        <span>
          {status} - {species}
        </span>
      </div>
    </div>
  );
}
