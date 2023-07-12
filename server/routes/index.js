import express from "express";
import { Login, Logout } from "../controllers/Users.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controllers/RefreshToken.js";
import { getAllPackages } from "../controllers/Packages.js";
import { getAllCompanies } from "../controllers/Companies.js";
import { getAllCompanyInvoices } from "../controllers/CompanyInvoices.js";

const router = express.Router();
 
// router.get('/users', verifyToken, getUsers);
router.post('/login', Login);
router.get('/token', refreshToken);
router.delete('/logout', Logout);

router.get('/get_all_packages', verifyToken, getAllPackages);
router.get('/get_all_companies', verifyToken, getAllCompanies);
router.get('/get_all_company_invoices', verifyToken, getAllCompanyInvoices);

export default router;