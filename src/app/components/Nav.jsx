import React from 'react'
import Link from 'next/link';

function Nav() {
  return (
    <div>
      <ul className="flex items-center justify-center py-4">
        <li className="hover:underline"><Link href="/"></Link>Home</li>
        <li className="hover:underline"><Link href="/about">About</Link></li>
        <li className="hover:underline"><Link href="/blog">Blog</Link></li>
        <li className="hover:underline"><Link href="/contact">Contact</Link></li>
      </ul>
    </div>
  );
}

export default Nav