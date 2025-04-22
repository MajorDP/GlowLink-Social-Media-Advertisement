"use client";
import { LogIn, UserPlus } from "lucide-react";
import { useState } from "react";
import { IFormData } from "../_interfaces/auth";
import { useForm } from "react-hook-form";

interface IAuthForm {
  onSubmit: (
    formData: IFormData,
    isRegistering: boolean
  ) => Promise<string | null>;
}

function AuthForm({ onSubmit }: IAuthForm) {
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors, isSubmitting },
  } = useForm();
  const password = watch("password");

  const [isRegistering, setIsRegistering] = useState(false);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        {isRegistering ? (
          <UserPlus className="w-6 h-6" />
        ) : (
          <LogIn className="w-6 h-6" />
        )}
        <h2 className="text-2xl font-bold">
          {isRegistering ? "Create an Account" : "Welcome Back"}
        </h2>
      </div>

      <form
        className="flex flex-col gap-4 mt-4"
        onSubmit={handleSubmit(async (data) => {
          const error = await onSubmit(data as IFormData, isRegistering);
          if (error) {
            setError("email", {
              type: "manual",
              message: error,
            });
          }
        })}
      >
        {isRegistering && (
          <input
            type="text"
            placeholder="Username"
            className="bg-white/10 border border-white/20 p-3 rounded-lg focus:outline-none"
            {...register("username", {
              required: "Please enter a username.",
              minLength: {
                value: 6,
                message: "Username must be at least 6 characters long",
              },
            })}
          />
        )}
        <input
          type="email"
          placeholder="Email"
          className="bg-white/10 border border-white/20 p-3 rounded-lg focus:outline-none"
          {...register("email", {
            required: "Please enter an email.",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Please enter a valid email address",
            },
          })}
        />
        <input
          type="password"
          placeholder="Password"
          className="bg-white/10 border border-white/20 p-3 rounded-lg focus:outline-none"
          {...register("password", {
            required: "Please enter a password.",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters long",
            },
          })}
        />

        {isRegistering && (
          <input
            type="password"
            placeholder="Repeat Password"
            className="bg-white/10 border border-white/20 p-3 rounded-lg focus:outline-none"
            {...register("repeatPassword", {
              required: "Please repeat your password.",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters long",
              },
              validate: (value) =>
                (value && value === password) || "Passwords do not match",
            })}
          />
        )}

        {Object.values(errors)[0]?.message && (
          <p className="text-red-400 text-center">
            {Object.values(errors)[0]?.message as string}
          </p>
        )}

        <button
          type="submit"
          className="disabled:bg-black enabled:bg-white disabled:text-white enabled:text-black transition-all duration-200 py-2 rounded-lg font-semibold hover:opacity-90 cursor-pointer"
          disabled={isSubmitting}
        >
          {isSubmitting
            ? "Please wait..."
            : isRegistering
            ? "Sign Up"
            : "Sign In"}
        </button>
      </form>

      <p className="text-sm text-center text-white/60 mt-2">
        {isRegistering ? "Already have an account?" : "Don't have an account?"}{" "}
        <button
          onClick={() => setIsRegistering(!isRegistering)}
          className="text-blue-400 underline underline-offset-2 hover:text-blue-500 transition-colors cursor-pointer"
        >
          {isRegistering ? "Log in" : "Sign up"}
        </button>
      </p>
    </div>
  );
}

export default AuthForm;
