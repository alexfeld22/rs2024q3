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
        <span className={status === 'Alive' ? 'icon-green' : 'icon-red'}>
          icon
        </span>
        <span>
          {status} - {species}
        </span>
      </div>
    </div>
  );
}
