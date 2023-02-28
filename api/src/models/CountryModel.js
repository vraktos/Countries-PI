const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Country", {
    id: {
      type: DataTypes.CHAR(3),
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    flagImg: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    continent: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    capital: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    subregion: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: "Not specified",
    },
    area: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "Not specified",
    },
    population: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
};
