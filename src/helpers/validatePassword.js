import bcrypt from 'bcrypt'

export const validatePassword = async (password, hashPassword) => {
   return await bcrypt.compare(password, hashPassword);
}