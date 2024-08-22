import z from 'zod'

const signUserSchema = z.object({
    firstName: z.string().min(2, {message: "First name length has to be 2"}),
    lastName: z.string().min(2, {message: "Last name length has to be 2"}),
    email: z.string().min(10, {message: "Email length has to be 10"}).email({message: "Invalid email address"}),
    password: z.string().min(10, {message: "Password length has to be 10"}),
});

export const signUserValidate = async (credentials) => {
    return signUserSchema.safeParse(credentials);
}