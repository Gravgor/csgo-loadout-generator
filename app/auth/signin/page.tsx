"use client";

import { ValidationSchemaLoginInterface } from "@/addons/interfaces/interface";
import { validationSchemaLogin } from "@/addons/schemas/ValidationSchemaLogin";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

export default function Page() {
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ValidationSchemaLoginInterface>({
    resolver: zodResolver(validationSchemaLogin),
  });

  const onSubmit: SubmitHandler<ValidationSchemaLoginInterface> = (data) => {
    const { email, password } = data;
    async function login() {
      const result = await signIn("credentials", {
        email: email,
        password: password,
        redirect: false,
      });
      if (result !== undefined) {
        if (result.error) {
          setError(result.error);
          setTimeout(() => {
            setError(null);
          }, 5000);
        } else {
          router.push("/user/loadout");
        }
      } else {
        console.log("error");
      }
    }
    login();
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-background">
      <div className="flex flex-col items-center justify-center w-full max-w-md p-4 bg-white rounded-md shadow-md">
        <h1 className="text-3xl font-bold text-black">Sign in</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 w-full mt-4"
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="border border-gray-300 rounded-md px-4 py-2"
              {...register("email")}
            />
            {errors.email && (
              <span className="text-red-500">{errors.email.message}</span>
            )}
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="border border-gray-300 rounded-md px-4 py-2"
              {...register("password")}
            />
            {errors.password && (
              <span className="text-red-500">{errors.password.message}</span>
            )}
            {error && <span className="text-red-500">{error}</span>}
          </div>
          <button
            type="submit"
            className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark transition-colors duration-300"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}
