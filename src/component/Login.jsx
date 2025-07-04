import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Login form data:", data);
    document.getElementById("my_modal_3").close(); // close modal on successful login
  };

  return (
    <dialog id="my_modal_3" className="modal">
      <div className="modal-box dark:bg-slate-800 dark:text-white">
        {/* Close Button */}
        <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </Link>

        <h3 className="font-bold text-lg mb-4">Welcome Back!</h3>

        {/* ✅ Only one form now */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="label">
              <span className="label-text dark:text-white">Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full dark:bg-slate-700 dark:text-white dark:border-gray-600"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">Email is required</p>
            )}
          </div>

          <div>
            <label className="label">
              <span className="label-text dark:text-white">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="input input-bordered w-full dark:bg-slate-700 dark:text-white dark:border-gray-600"
              {...register("password", { required: true })}
            />
            
            {errors.password && (
              <p className="text-red-500 text-sm">Password is required</p>
            )}
          </div>

          <button className="btn btn-primary w-full mt-4" type="submit">
            Login
          </button>
        </form>

        <p className="pt-4 text-sm text-center dark:text-gray-300">
          Don’t have an account?{" "}
          <Link to="/signup" className="link text-pink-400">
            Signup
          </Link>
        </p>
      </div>
    </dialog>
  );
}

export default Login;
