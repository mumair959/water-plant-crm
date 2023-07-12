import { Sequelize } from "sequelize";
import db from "../config/Database.js";
 
const { DataTypes } = Sequelize;
 
const Packages = db.define('packages',{
    name:{
        type: DataTypes.STRING
    },
    setup_charges:{
        type: DataTypes.INTEGER
    },
    price:{
        type: DataTypes.INTEGER
    },
    discount:{
        type: DataTypes.INTEGER
    },
    net_price:{
        type: DataTypes.INTEGER
    },
    yearly_price:{
        type: DataTypes.INTEGER
    },
    yearly_discount:{
        type: DataTypes.INTEGER
    },
    yearly_net_price:{
        type: DataTypes.INTEGER
    },
    max_filling_users:{
        type: DataTypes.INTEGER
    },
    max_supply_users:{
        type: DataTypes.INTEGER
    },
    max_employees:{
        type: DataTypes.INTEGER
    },
    max_outlets:{
        type: DataTypes.INTEGER
    },
    reports:{
        type: DataTypes.STRING
    },
    filling:{
        type: DataTypes.STRING
    },
    supply:{
        type: DataTypes.STRING
    },
    employee_management:{
        type: DataTypes.STRING
    },
    inventory_management:{
        type: DataTypes.STRING
    },
    daily_expenses:{
        type: DataTypes.STRING
    },
    access_control:{
        type: DataTypes.STRING
    },
    profit_sharing:{
        type: DataTypes.STRING
    },
    walkin_customer:{
        type: DataTypes.STRING
    },
    viewable:{
        type: DataTypes.STRING
    },
    active:{
        type: DataTypes.STRING
    },
},{
    freezeTableName:true
});
 
(async () => {
    await db.sync();
})();

export default Packages;