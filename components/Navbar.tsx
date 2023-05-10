"use client"
import { signIn, useSession } from "next-auth/react"
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