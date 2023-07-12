import { Sequelize } from "sequelize";
import db from "../config/Database.js";
 
const { DataTypes } = Sequelize;
 
const CompanyInvoices = db.define('company_invoices',{
    company_id:{
        type: DataTypes.INTEGER
    },
    invoice_num:{
        type: DataTypes.STRING
    },
    total_amount:{
        type: DataTypes.INTEGER
    },
    paid_amount:{
        type: DataTypes.INTEGER
    },
    paid_at:{
        type: DataTypes.STRING
    },
    is_paid:{
        type: DataTypes.INTEGER
    },
    payment_month:{
        type: DataTypes.STRING
    },
    payment_year:{
        type: DataTypes.STRING
    }
},{
    freezeTableName:true
});
 
(async () => {
    await db.sync();
})();
 
export default CompanyInvoices;