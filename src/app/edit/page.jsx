import React from 'react'
import Navbar from "../components/login/Navbar";
import Footer from "../components/login/Footer";
import Link from 'next/link'
import Container from "../components/login/Container";

function EditPage() {
  return (
    <Container>
        <Navbar />
            <div className='flex-grow'>
                <div className='container mx-auto shadow-xl my-10 p-10 rounded-xl'>
                    <Link href="/welcome" className='bg-gray-500 inline-block text-white border py-2 px-3 rounded my-2'>Go back</Link>
                    <hr className='my-3' />
                    <h3 className='text-xl'>Edit Post</h3>
                    <form action="">
                        <input type="text" className='w-[300px] block bg-gray-200 border py-2 px-3 rounded text-lg my-2' placeholder='Post title' value="Title before update" />
                        <input type="text" className='w-[300px] block bg-gray-200 border py-2 px-3 rounded text-lg my-2' placeholder='Post Img url' value="https://imgurl.com/img" />
                        <textarea className='w-[300px] block bg-gray-200 border py-2 px-3 rounded text-lg my-2' name="" id="" cols="30" rows="10" placeholder='Enter your post content'>
                            Content before update
                        </textarea>
                        <button type='submit' name='update' className='bg-green-500 text-white border py-2 px-3 rounded text-lg my-2'>Update Post</button>
                    </form>
                </div>
            </div>
        <Footer />
    </Container>
  )
}

export default EditPage