"use client"
import Link from "next/link"

export default function Navbar() {
    return (
        <nav className="w-full h-[50px] bg-background flex justify-between items-center px-4">
            <div className="flex items-start">
                <Link className="text-2xl font-bold text-primary" href="/">
                    CSGO Loadout Generator
                </Link>
            </div>
            <div className="flex items-end">
                <Link className="text-primary" href="/user/loadout/create">
                  Create Loadout
                </Link>
                <Link className="text-primary" href="/user/loadout">
                    My Loadouts
                </Link>
                <Link className="text-primary" href="/user">
                    My Account
                </Link>
            </div>
        </nav>
    )
}