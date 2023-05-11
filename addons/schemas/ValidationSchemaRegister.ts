import { z } from "zod";

export const validationSchemaRegister = z
    .object({
        email: z.string().email({
            message: 'Please enter a valid email'
        }),
        username: z.string().min(3).max(20, {
            message: 'Username must be between 3 and 20 characters long'
        }),
        password: z.string().min(8).max(100, {
            message: 'Password must be at least 8 characters long'
        }),
    })


export type ValidationSchema = z.infer<typeof validationSchemaRegister>;