/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import { useAuth } from '../context/AuthContext'
import { useRouter } from 'next/router'
import Link from 'next/link'


export default function hi() {
      const { user, logout } = useAuth();
      const router = useRouter();

  return (
    <div>
      {user ? (
        <button
          className="inline-flex justify-end items-center px-4 py-2 bg-gradient-to-r from-blue-900 to-blue-700 shadow-sm hover:bg-red-700 text-white text-sm font-medium rounded-md"
          onClick={() => {
            logout();
            router.push("/login");
          }}
        >
          Logout
        </button>
      ) : (
        <>
          <Link href="/signup" passHref>
            <button>Signup</button>
          </Link>
          <Link href="/login" passHref>
            <button>Login</button>
          </Link>
        </>
      )}
    </div>
  );
}
