import CompanyInvoices from "../models/CompanyInvoiceModel.js";
 
 
export const getAllCompanyInvoices = async(req, res) => {
    try {
        const companyInvoices = await CompanyInvoices.findAll({});
        res.json({ companyInvoices });
    } catch (error) {
        res.status(404).json({msg:"Oops! Something went wrong"});
    }
}
