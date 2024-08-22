import bcrypt from 'bcrypt'

export const generateSafePassword = async (password) => {
    let salt = await bcrypt.genSalt(10);
    let cryptPassword = await bcrypt.hash(password, salt);

    return cryptPassword;
}