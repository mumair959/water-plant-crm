import Packages from "../models/PackageModel.js";
 
export const getAllPackages = async(req, res) => {
    try {
        const packages = await Packages.findAll({});
        res.json({ packages });
    } catch (error) {
        res.status(404).json({msg:"Oops! Something went wrong"});
    }
}
