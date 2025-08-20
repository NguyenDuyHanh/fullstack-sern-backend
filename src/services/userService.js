import { where } from "sequelize";
import db from "../models/index.js"
import bcrypt from "bcryptjs";

const handleUserLogin = async (email, password) => {
    try {
        const userData = {};
        const isExist = await checkUserEmail(email);
        if(isExist) {
            const user = await db.User.findOne({
                where: {
                    email: email,
                },
                attributes: ['email', 'roleId', 'password'],  
                raw: true  
            });
            if (user) {
                const checkPassword =  await bcrypt.compare(password, user.password);
                if (checkPassword) {
                    userData.errCode = 0;
                    userData.errMessage = 'Login success';
                    delete user.password;
                    userData.user = user;
                }
                else {
                    userData.errCode = 3;
                    userData.errMessage = 'Wrong password';
                }
            }
            else {
                 userData.errCode = 2;
                userData.errMessage = 'User not found';
            }
        }
        else {
            userData.errCode = 1;
            userData.errMessage = `Your email not exist in system. Please try othor email`;
        }
        return userData;    
    } catch (error) {
        throw error;
    }
}

const checkUserEmail = async (userEmail) => {
    try {
        const user = await db.User.findOne({
            where: {
                email: userEmail
            }
        });
        if(user) {
            return true;
        }
        else {
            return false;
        }
    } catch (error) {
        throw error;
    }
}

const getAllUsers = async (userId) => {
    let users = '';
    try {
        if(userId === 'ALL') {
            users = await db.User.findAll({
                attributes: {
                    exclude: ['password']
                }
            });
        }
        if(userId && userId != 'ALL') {
            users = await db.User.findOne({
                where: {
                    id: userId
                },
                attributes: {
                    exclude: ['password']
                }
            });
        }
        return users;
    } catch (error) {
        throw error;
    }
}

export default {
    handleUserLogin: handleUserLogin,
    getAllUsers: getAllUsers
}