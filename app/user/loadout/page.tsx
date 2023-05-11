"use client"

import { useSession } from "next-auth/react"


export default function Page(){
    const { data: session, status } = useSession()
    if (status === "loading") return <p>Loading...</p>
    if (status === "unauthenticated") {
        return (
            <div>
                <h1>Access Denied</h1>
            </div>
        )
    } else {
        return (
            <div>
                <h1>My loadouts</h1>
            </div>
        )
    }
}