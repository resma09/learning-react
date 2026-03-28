import { useState } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Auth() {
  const [mode, setMode] = useState("signup");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const { signUp, logIn, user, logOut } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    setError(null);
    let result;
    if (mode === "signup") {
      result = signUp(data.email, data.password);
    } else {
      result = logIn(data.email, data.password);
    }

    if (result.success) {
      navigate("/");
    } else {
      setError(result.error);
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
      <div className="w-full max-w-sm bg-white rounded-2xl border border-slate-200 shadow-sm p-8 flex flex-col gap-6">
        {/* PAGE HEADER */}
        <div className="flex flex-col gap-1">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            {mode === "signup" ? "Create account" : "Welcome back"}
          </h1>
        </div>
        {/* LOGGED IN STATE */}

        {/* Form */}
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
          {error && (
            <div className="error-message text-xs text-red-500 mt-1">
              {error}
            </div>
          )}
          {/* Form Field */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="email"
              className="text-sm font-medium text-slate-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              {...register("email", { required: "Email is required" })}
              placeholder="you@example.com"
              className="w-full rounded border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition"
            />
            {errors.email && (
              <p className="text-xs text-red-500 mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Form Field */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="password"
              className="text-sm font-medium text-slate-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
                maxLength: {
                  value: 12,
                  message: "Password must be less than 12 characters",
                },
              })}
              placeholder="••••••••"
              className="w-full rounded border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition"
            />
            {errors.password && (
              <p className="text-xs text-red-500 mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full rounded bg-indigo-600 text-white text-sm font-semibold py-2.5 mt-2 hover:bg-indigo-700 active:scale-95 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2"
          >
            {mode === "signup" ? "Sign Up" : "Log In"}
          </button>
        </form>
        {/* Toggle */}
        {mode === "signup" ? (
          <p className="text-center text-sm text-slate-500 border-t border-slate-100 pt-4">
            Already have an account?{" "}
            <span
              onClick={() => setMode("login")}
              className="text-indigo-600 font-medium hover:underline cursor-pointer"
            >
              Login
            </span>
          </p>
        ) : (
          <p className="text-center text-sm text-slate-500 border-t border-slate-100 pt-4">
            Don't have an account?{" "}
            <span
              onClick={() => setMode("signup")}
              className="text-indigo-600 font-medium hover:underline cursor-pointer"
            >
              SignUp
            </span>
          </p>
        )}
      </div>
    </div>
  );
}
