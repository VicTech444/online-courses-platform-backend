import z from 'zod'

const logUserSchema = z.object({
    email: z.string().min(10, {message: "Email length has to be 10"}).email({message: "Invalid email address"}),
    password: z.string().min(10, {message: "Password length has to be 10"}),
});

export const logUserValidate = async (credentials) => {
    return logUserSchema.safeParse(credentials);
}