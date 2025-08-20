import userService from "../services/userService";

const handleLogin = async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    if (!email || !password) {
        return res.status(400).json({
            errCode: 1,
            message: "Missing inputs parameter"
        })
    }

    const userData = await userService.handleUserLogin(email, password);

    if (userData.errCode !== 0) {
        return res.status(401).json({
            errCode: userData.errCode,
            message: userData.errMessage
        });
    }

    return res.status(200).json({
        errCode: userData.errCode,
        message: userData.errMessage,
        // userData,
        user: userData.user ? userData.user : {}
    })
}

const handleGetAllUsers = async (req, res) => {
    const id = req.body.id;
    if (!id) {
        return res.status(400).json({
            errCode: 1,
            message: 'Missing required parameter',
            users: []
        });
    }
    const users = await userService.getAllUsers(id);
    return res.status(200).json({
        errCode: 0,
        message: 'Get users info successfully',
        users
    });
}

export default {
    handleLogin: handleLogin,
    handleGetAllUsers: handleGetAllUsers
}