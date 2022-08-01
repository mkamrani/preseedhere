// implement the sign in component with all the social sign in buttons
import React from 'react'


export default function SignIn() {
  return (
    // Using tailwind classes add the buttons to the sign in with Github, Google, Facebook, Twitter
    <div className="mx-auto flex items-center justify-center m-20">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        Sign In with Github
      </button>
      <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        Sign In with Google
      </button>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        Sign In with Facebook
      </button>
      <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        Sign In with Twitter
      </button>
    </div>
  )
}