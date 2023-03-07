const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Country",
    {
      id: {
        type: DataTypes.CHAR(3),
        primaryKey: true,
        allowNull: false,
        defaultValue: "UND",
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
        defaultValue: "Unknown",
      },
      subregion: {
        type: DataTypes.TEXT,
        allowNull: true,
        defaultValue: "Not specified",
      },
      area: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      population: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    { timestamps: false, charset: "utf8", collate: "utf8_unicode_ci" }
  );
};
