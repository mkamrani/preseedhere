import React from 'react'
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Footer() {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = data => {
    try {
      fetch('https://pshfunc-03b1a1f9.functions.utopiops.com/send_email', {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        body: JSON.stringify(data),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      reset();
      toast("Thanks for subscribing for early access!")
      console.log(`submitted the form`);
    } catch (error) {
      // handle server errors
    }
  };
  return (
    <footer className="flex justify-center px-4 text-gray-100 bg-gray-800">
      <ToastContainer />
      <div className="container py-6">
        <h1 className="text-center text-lg font-bold lg:text-2xl">
          Get early access, <br /> before anyone else!
        </h1>

        <div className="flex justify-center mt-6">
          <div className="bg-white rounded-lg">
            <div className="flex flex-wrap justify-between md:flex-row">
              <form onSubmit={handleSubmit(onSubmit)} method="post" >
                <input {...register('email', { required: true })} type="email" className="m-1 p-2 appearance-none text-gray-700 text-sm focus:outline-none" placeholder="Enter your email" />
                <button type="submit" className="w-full m-1 p-2 text-sm bg-gray-800 rounded-lg font-semibold uppercase lg:w-auto">subscribe</button>
              </form>
            </div>
          </div>
        </div>

        <hr className="h-px mt-6 bg-gray-700 border-none" />
        <div className="flex flex-col items-center justify-between mt-6 md:flex-row">
          <div>
            <a href="#" className="text-xl font-bold">PreSeedHere</a> - powered by <a href="https://dotenx.com" target="blank" className="text-xl font-bold">DoTenX</a>
          </div>
          <div className="flex mt-4 md:m-0">
            {/* <div className="-mx-4">
              <a href="#" className="px-4 text-sm">About</a>
              <a href="#" className="px-4 text-sm">Blog</a>
              <a href="#" className="px-4 text-sm">News</a>
              <a href="#" className="px-4 text-sm">Contact</a>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  )
}
