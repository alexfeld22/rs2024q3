type Props = {
  title: string;
  value: string;
};

function CardProperty({ title, value }: Props) {
  return (
    <div>
      <p>{title}</p>
      <p>{value}</p>
    </div>
  );
}

export default CardProperty;
