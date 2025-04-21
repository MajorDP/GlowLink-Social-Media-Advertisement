"use client";
import { LogIn, UserPlus } from "lucide-react";
import { useState } from "react";
import { IFormData } from "../_interfaces/auth";

interface IAuthForm {
  onSubmit: (formData: IFormData, isRegistering: boolean) => void;
}

function AuthForm({ onSubmit }: IAuthForm) {
  const [isRegistering, setIsRegistering] = useState(false);
  const [formData, setFormData] = useState<IFormData>({
    username: "",
    email: "",
    password: "",
    repeatPassword: "",
  });
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
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit(formData, isRegistering);
        }}
      >
        {isRegistering && (
          <input
            type="text"
            placeholder="Username"
            className="bg-white/10 border border-white/20 p-3 rounded-lg focus:outline-none"
            value={formData.username}
            onChange={(e) => {
              setFormData((prev) => {
                return { ...prev, username: e.target.value };
              });
            }}
          />
        )}
        <input
          type="email"
          placeholder="Email"
          className="bg-white/10 border border-white/20 p-3 rounded-lg focus:outline-none"
          value={formData.email}
          onChange={(e) => {
            setFormData((prev) => {
              return { ...prev, email: e.target.value };
            });
          }}
        />
        <input
          type="password"
          placeholder="Password"
          className="bg-white/10 border border-white/20 p-3 rounded-lg focus:outline-none"
          value={formData.password}
          onChange={(e) => {
            setFormData((prev) => {
              return { ...prev, password: e.target.value };
            });
          }}
        />

        {isRegistering && (
          <input
            type="text"
            placeholder="Repeat Password"
            className="bg-white/10 border border-white/20 p-3 rounded-lg focus:outline-none"
            value={formData.repeatPassword}
            onChange={(e) => {
              setFormData((prev) => {
                return { ...prev, repeatPassword: e.target.value };
              });
            }}
          />
        )}
        <button
          type="submit"
          className="bg-white text-black py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity cursor-pointer"
        >
          {isRegistering ? "Sign Up" : "Log In"}
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
