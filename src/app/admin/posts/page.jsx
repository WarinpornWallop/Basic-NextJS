import React from 'react'
import AdminNav from '../components/AdminNav'
import Footer from '../components/Footer'
import SideNav from '../components/SideNav'
import Container from '../components/Container'
import hong from "../../../../public/hong.jpg";
import Link from 'next/link'
import Image from 'next/image'

function AdminUserManagePage() {
  return (
    <Container>
      <AdminNav />
      <div className="flex-grow">
        <div className="container mx-auto">
          <div className="flex mt-10">
            <div className="p-10">
              <h3 className="text-3xl mb-3">Manage Posts</h3>
              <p>A list of posts retrieved from a MongoDB database</p>

              <div className="shadow-lg overflow-x-auto">
                <table className="text-left rounded-md mt-3 table-fixed w-full">
                  <thead>
                    <tr className="bg-primary text-white rounded">
                      <th className="p-5">Post ID</th>
                      <th className="p-5">Post Title</th>
                      <th className="p-5">Post Image</th>
                      <th className="p-5">Post Content</th>
                      <th className="p-5">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-5">1</td>
                      <td className="p-5">This is hong title</td>
                      <td className="p-5">
                        <Image
                          src={hong}
                          width={100}
                          height={100}
                          alt="profile image"
                        />
                      </td>
                      <td className="p-5">This is hong content</td>
                      <td className="p-5">
                        <Link
                          className="btn btn-secondary btn-sm rounded"
                          href="/admin/users/edit"
                        >
                          Edit
                        </Link>
                        <Link
                          className="btn btn-error btn-sm rounded ms-2"
                          href="/admin/users/delete"
                        >
                          Delete
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Container>
  );
}

export default AdminUserManagePage