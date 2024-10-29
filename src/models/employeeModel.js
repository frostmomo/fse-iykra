const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

class Employee extends Model {}

Employee.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    position: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    salary: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
}, {
    sequelize,
    modelName: 'Employee',
    tableName: 'employees',
    timestamps: false,
});

module.exports = Employee;
