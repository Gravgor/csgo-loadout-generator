"use client"
import { signIn, signOut, useSession } from "next-auth/react"
import Link from "next/link"

export default function Navbar() {
    const { data: session, status } = useSession()
    return (
        <nav className="w-full h-[50px] bg-background flex justify-between items-center px-4">
            <div className="flex items-start">
                <Link className="text-2xl font-bold text-text" href="/">
                    CSGO Loadout Generator
                </Link>
            </div>
            <div className="hidden md:flex items-end gap-4">
                {session ? (
                    <>
                    <Link className="text-text" href="/user/loadout/create">
                  Create Loadout
                </Link>
                <Link className="text-text" href="/user/loadout">
                    My Loadouts
                </Link>
                <Link className="text-text" href="/user">
                    My Account
                </Link>
                <button className="bg-primary text-white px-4 py-1 relative top-1 rounded-md hover:bg-primary-dark transition-colors duration-300" onClick={() => {
                    signOut()
                }}>Sign out
                
                </button>
                </>
                ) : (
                   <>
                    <a className="text-text cursor-pointer" onClick={() => {
                        signIn()
                    }}>
                        Sign in
                    </a>
                    <Link className="text-text" href="/auth/signup">
                        Sign up
                    </Link>
                   </>
                )}
            </div>
        </nav>
    )
}