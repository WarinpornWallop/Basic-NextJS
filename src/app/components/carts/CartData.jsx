"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
function CartData() {
  const [carts, setCarts] = useState([]);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    setLoading(true);
    const fetchquoteData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/carts");
        const quoteData = await response.json();
        console.log(quoteData.carts);
        setCarts(quoteData.carts);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchquoteData();
  }, []);

  return (
    <div className="container mx-auto">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-4 px-4">
          {carts.map((val, index) => (
            <Link
              key={val.products?.title}
              href={`/cartinfo/[id]`}
              as={`/cartinfo/${index + 1}`}
            >
              <div
                key={index}
                className="flex justify-center items-center shadow-md transition cursor-pointer hover:shadow-lg m-3 rounded-md px-4"
              >
                <div>
                  <h3 className="text-error">User Id: {val.userId}</h3>
                  <p>Total Products: {val.totalProducts}</p>
                  <p>Price: {val.discountedTotal}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default CartData;
