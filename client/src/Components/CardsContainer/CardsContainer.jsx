import Card from "../Card/Card";

const CardsContainer = () => {
  const countries = [
    {
      id: "CHL",
      name: "Chile",
      flagImg: "https://flagcdn.com/w320/cl.png",
      continent: "South America",
      capital: "Santiago",
      subregion: "South America",
      area: 756102,
      population: 19116209,
    },
    {
      id: "ARG",
      name: "Argentina",
      flagImg: "https://flagcdn.com/w320/ar.png",
      continent: "South America",
      capital: "Buenos Aires",
      subregion: "South America",
      area: 2780400,
      population: 45376763,
    },
  ];

  return (
    <div>
      {countries.map((country) => {
        return (
          <Card
            flagImg={country.flagImg}
            name={country.name}
            continent={country.continent}
          />
        );
      })}
    </div>
  );
};

export default CardsContainer;
