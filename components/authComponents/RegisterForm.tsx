"use client"

import { ValidationSchemaRegisterInterface } from "@/addons/interfaces/interface";
import { validationSchemaRegister } from "@/addons/schemas/ValidationSchemaRegister";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";


export default function RegisterForm() {
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ValidationSchemaRegisterInterface>({
        resolver: zodResolver(validationSchemaRegister),
    })

    const onSubmit: SubmitHandler<ValidationSchemaRegisterInterface> = (data) => {
        const {email, username, password} = data;
        async function register() {
            const result = await fetch(`http://localhost:3000/api/user/create`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: email,
                    username: username,
                    password: password,
                })
            })
            const data = await result.json();
            if (data.status === 400){
                setError(data.error);
                setTimeout(() => {
                    setError(null);
                }, 5000);
            } else {
                router.push("/auth/signin");
            }
        }
        register();
    }
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-background">
            <div className="flex flex-col items-center justify-center w-full max-w-md p-4 bg-white rounded-md shadow-md">
                <h1 className="text-3xl font-bold text-black">Sign up</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 w-full mt-4">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" className="border border-gray-300 rounded-md px-4 py-2" {...register("email")} />
                        {errors.email && <span className="text-red-500">{errors.email.message}</span>}
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" className="border border-gray-300 rounded-md px-4 py-2" {...register("username")} />
                        {errors.username && <span className="text-red-500">{errors.username.message}</span>}
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" className="border border-gray-300 rounded-md px-4 py-2" {...register("password")} />
                        {errors.password && <span className="text-red-500">{errors.password.message}</span>}
                        {error && <span className="text-red-500">{error}</span>}
                        <button type="submit" className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark transition-colors duration-300">Sign up</button>
                    </div>
                </form>
            </div>
        </div>
    )
}