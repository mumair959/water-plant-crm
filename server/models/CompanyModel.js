import { Sequelize } from "sequelize";
import db from "../config/Database.js";
 
const { DataTypes } = Sequelize;
 
const Companies = db.define('companies',{
    name:{
        type: DataTypes.STRING
    },
    company_logo_url:{
        type: DataTypes.TEXT
    },
    package_id:{
        type: DataTypes.INTEGER
    },
    admin_id:{
        type: DataTypes.INTEGER
    },
    package_price:{
        type: DataTypes.INTEGER
    },
    package_discount:{
        type: DataTypes.INTEGER
    },
    package_net_price:{
        type: DataTypes.INTEGER
    }
},{
    freezeTableName:true
});
 
(async () => {
    await db.sync();
})();

export default Companies;