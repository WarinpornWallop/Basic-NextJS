"use client"

import React, { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

function PokeInfo() {

    const params = useParams();
    console.log(params)

    const [carts, setCarts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const fetchCartDetails = async () => {
            try {
                const response = await fetch(
                  `https://dummyjson.com/carts/${params.id}`
                );
                const cartData = await response.json();
                setCarts(cartData);
            } catch(error) {
                console.log(error)
            }
            setLoading(false);
        }
        fetchCartDetails();
    }, [])

    console.log(carts);

  return (
    <div className="p-4">
      <div className="mt-4">
        <p className='text-4xl font-bold'>Cart Infomation</p>
        <div className="shadow-md p-3 rounded-md">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <>
              <h3 className="text-error">User Id: {carts.userId}</h3>
              <p>Total Products: {carts.totalProducts}</p>
              <p>Price: {carts.discountedTotal}</p>
              <div className="mt-5">
                <p className="my-3 text-lg font-bold text-secondary">
                  Products:{" "}
                </p>
                <div className="grid grid-cols-3 gap-4">
                  {carts.products?.map((val) => (
                    <div className="card shadow-md" key={val.id}>
                      <div className="card-body">
                        <p className="text-primary font-bold">{val.title}</p>
                        <Image
                          src={val.thumbnail}
                          width={100}
                          height={100}
                          alt={val.title}
                        />
                        <div>
                          <p className="">Price: {val.price}</p>
                          <p className="">Quantity: {val.quantity}</p>
                          <p className="">Price before discount: {val.total}</p>
                          <p className="">
                            Discount Percentage: {val.discountPercentage}
                          </p>
                          <p className="">
                            Discounted Price: {val.discountedPrice}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <Link href="/cart" className="btn btn-secondary mt-4">
        Go Back
      </Link>
    </div>
  );
}

export default PokeInfo