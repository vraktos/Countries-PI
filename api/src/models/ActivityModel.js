const { DataTypes, UUIDV4 } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Activity",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      dificulty: {
        type: DataTypes.ENUM("1", "2", "3", "4", "5"),
        allowNull: false,
      },
      duration: {
        type: DataTypes.FLOAT,
        allowNull: true,
        defaultValue: "Not specified",
      },
      season: {
        type: DataTypes.ENUM("Summer", "Fall", "Winter", "Spring"),
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
};
