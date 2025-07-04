import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Signup form data:", data);
    document.getElementById("my_modal_3").showModal(); // open login modal after successful signup
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-slate-900 px-4">
      <div className="w-full max-w-md p-8 space-y-6 bg-white dark:bg-slate-800 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white">
          Create an Account
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Arijit Pal"
              {...register("name", { required: true })}
              className="input input-bordered w-full dark:bg-slate-700 dark:text-white dark:border-gray-600"
            />
            {errors.name && <p className="text-red-500 text-sm">Name is required</p>}
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
              Email Address
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              {...register("email", { required: true })}
              className="input input-bordered w-full dark:bg-slate-700 dark:text-white dark:border-gray-600"
            />
            {errors.email && <p className="text-red-500 text-sm">Email is required</p>}
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              {...register("password", { required: true })}
              className="input input-bordered w-full dark:bg-slate-700 dark:text-white dark:border-gray-600"
            />
            {errors.password && <p className="text-red-500 text-sm">Password is required</p>}
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              {...register("confirmPassword", { required: true })}
              className="input input-bordered w-full dark:bg-slate-700 dark:text-white dark:border-gray-600"
            />
            {errors.confirmPassword && <p className="text-red-500 text-sm">Confirm password</p>}
          </div>

          <button type="submit" className="btn btn-primary w-full mt-4">
            Sign Up
          </button>
        </form>

        <p className="text-sm text-center text-gray-500 dark:text-gray-300">
          Already have an account?{" "}
          <button
            className="underline text-blue-500 cursor-pointer"
            onClick={() => document.getElementById("my_modal_3").showModal()}
          >
            Login
          </button>
        </p>

        {/* Login Modal */}
        <Login />
      </div>
    </div>
  );
}

export default Signup;
