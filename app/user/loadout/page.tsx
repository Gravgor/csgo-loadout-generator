
import Loadouts from "@/components/loadoutComponents/Loadouts";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";


async function getLoadouts(email: any) {
    const response = await fetch(`http://localhost:3000/api/user/loadout?email=${email}`);
    return response.json();
}

export default async function Page(){
    const session = await getServerSession(authOptions)
    if(!session) return <p>Access Denied</p>
    const {email} = session.user
    const loadoutData = getLoadouts(email);
    const [loadout] = await Promise.all([loadoutData]);
    return <Loadouts loadout={loadout} />
   
}