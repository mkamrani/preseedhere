// implement a login page. Show the sign in with Github, Google, Facebook, Twitter buttons in the middle of the page.

import React, { useState } from 'react';
import Logo from '../../images/logo.png';
import { Link, navigate } from "gatsby";
import authService from '../../services/auth.service';
import useAuth from '../../hooks/useAuth';

export default function Login() {

  const {isLoading, login} = useAuth();

  // Add the SignUp form
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(form.email, form.password);
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };


  return (

    <div class="flex items-center min-h-screen bg-gray-200">
      <div class="flex-1 h-full max-w-4xl mx-auto rounded-xl shadow-xl">
        <div class="flex flex-col md:flex-row">
          <div class="h-32 md:h-auto md:w-1/2">
            <img class="object-cover w-full h-full" src="https://source.unsplash.com/user/erondu/1600x900"
              alt="img"></img>
          </div>
          <div class="flex items-center justify-center p-6 sm:p-12 md:w-1/2 bg-purple-900">
            <form onSubmit={handleSubmit} class="w-full">
              <div class="flex justify-center">
                <Link to="/">
                  <img fill="none" src={Logo}>
                  </img>
                </Link>
              </div>
              <h1 class="mb-4 text-2xl font-bold text-center text-gray-200">
                Access your account
              </h1>
              <div>
                <label class="block mt-4 text-sm text-white">
                  Email
                </label>
                <input type="email"
                  name="email"
                  onChange={handleChange}
                  class="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                  placeholder="Email" />
              </div>
              <div>
                <label class="block mt-4 text-sm text-white">
                  Password
                </label>
                <input
                  name="password"
                  onChange={handleChange}
                  class="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                  placeholder="Password" type="password" />
              </div>
              <button
                disabled={isLoading}
                type="submit"
                class="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-sky-400 border border-transparent rounded-lg active:bg-sky-400 hover:bg-sky-600 focus:outline-none focus:shadow-outline-blue"
              >
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>


  )
}