"use client"

import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

function Header() {

    const router = useRouter();

    const [userId, setUserId] = useState("");

    console.log(userId);

    const handleInput = (e) => {
        setUserId(e.target.value);
    }

    const handleForm = (e) => {
        e.preventDefault();

        router.push(`/cartsearch/${userId}`)
    }

  return (
    <header className="bg-[url('../../public/daisy.jpg')] bg-cover h-[240px] flex justify-center items-center">
      <div className="text-center">
        <h1 className="text-neutral text-4xl">Carts</h1>
        <p className="text-neutral text-lg">Find carts by user id</p>
        <form onSubmit={handleForm} className="flex mt-2">
          <input
            type="text"
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-700 shadow-md"
            placeholder="User Id"
            onChange={handleInput}
          />
          <button
            className="inline-flex items-center mx-2 rounded-md btn btn-primary"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </header>
  );
}

export default Header