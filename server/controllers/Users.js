import Users from "../models/UserModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
 
 
export const Login = async(req, res) => {
    try {
        const user = await Users.findAll({
            where:{
                email: req.body.email,
                user_type: 'SuperAdmin'
            }
        });
        
        let hash = user[0].password;
        hash = hash.replace(/^\$2y(.+)$/i, '$2a$1');

        const match = await bcrypt.compare(req.body.password, hash);
        if(!match) return res.status(400).json({msg: "This credentials doesn't exist in our record"});
        const userId = user[0].id;
        const name = user[0].name;
        const email = user[0].email;
        const accessToken = jwt.sign({userId, name, email}, process.env.ACCESS_TOKEN_SECRET,{
            expiresIn: '1d'
        });
        const refreshToken = jwt.sign({userId, name, email}, process.env.REFRESH_TOKEN_SECRET,{
            expiresIn: '1d'
        });
        await Users.update({refresh_token: refreshToken},{
            where:{
                id: userId
            }
        });
        res.json({ accessToken,refreshToken });
    } catch (error) {
        res.status(404).json({msg:"This credentials doesn't exist in our record"});
    }
}
 
export const Logout = async(req, res) => {
    const refreshToken = req.query.token;
    if(!refreshToken) return res.sendStatus(204);
    const user = await Users.findAll({
        where:{
            refresh_token: refreshToken
        }
    });
    if(!user[0]) return res.sendStatus(204);
    const userId = user[0].id;
    await Users.update({refresh_token: null},{
        where:{
            id: userId
        }
    });
    res.clearCookie('refreshToken');
    return res.sendStatus(200);
}