import bcrypt, { hash } from "bcryptjs";
import db from "../models/index.js";

const createNewUser = async (data) => {
    try {
        let hashPasswordFromBcrypt = await hashUserPassword(data.password);
        await db.User.create({
            email: data.email,
            password: hashPasswordFromBcrypt,
            firstName: data.firstname,
            lastName: data.lastname,
            address: data.address,
            phonenumber: data.phonenumber,
            gender: data.gender === '1' ? true : false,
            image: data.image,
            roleId: data.roleId,
            positionId: data.positionId
        });
        return 'create a new user success';
    } catch (error) {
        throw error
    }
}

let hashUserPassword = async (password) => {
    try {
        const salt = await bcrypt.genSalt(10);
        let hashPassword = await bcrypt.hash(password, salt);
        return hashPassword;
    } catch (error) {
        throw error;
    }
}

export default {
    createNewUser: createNewUser,
    hashUserPassword: hashUserPassword
}