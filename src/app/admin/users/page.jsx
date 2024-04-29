import React from 'react'
import AdminNav from '../components/AdminNav'
import Footer from '../components/Footer'
import SideNav from '../components/SideNav'
import Container from '../components/Container'
import Link from 'next/link'

function AdminUserManagePage() {
  return (
    <Container>
      <AdminNav />
      <div className="flex-grow">
        <div className="container mx-auto">
          <div className="flex mt-10">
            <div className="p-10">
              <h3 className="text-3xl mb-3">Manage Users</h3>
              <p>A list of users retrieved from a MongoDB database</p>

              <div className="shadow-lg overflow-x-auto">
                <table className="text-left rounded-md mt-3 table-fixed w-full rounded-xl">
                  <thead>
                    <tr className="bg-primary text-white rounded">
                      <th className="p-5">ID</th>
                      <th className="p-5">Username</th>
                      <th className="p-5">Email</th>
                      <th className="p-5">Password</th>
                      <th className="p-5">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-5">1</td>
                      <td className="p-5">Eiei</td>
                      <td className="p-5">eiei@gmail.com</td>
                      <td className="p-5">eiei1234</td>
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