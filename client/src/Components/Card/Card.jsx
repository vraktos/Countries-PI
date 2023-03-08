const Card = (props) => {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>
        Flag: <img src={props.flagImg} alt={props.name + "flag"} />
      </p>
      <p>Continent: {props.continent}</p>
    </div>
  );
};

export default Card;
