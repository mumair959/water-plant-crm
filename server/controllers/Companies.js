import {Companies, Packages, Users} from "../models/RelationshipModel.js";
 
 
export const getAllCompanies = async(req, res) => {
    try {
        const companies = await Companies.findAll({include: [Packages, Users]});
        res.json({ companies });
    } catch (error) {
        res.status(404).json({msg:error});
    }
}
