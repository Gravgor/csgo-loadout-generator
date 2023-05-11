import UserAccount from "@/components/userComponents/UserAccount";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

async function getUser(email: any) {
    const response = await fetch(`http://localhost:3000/api/user?email=${email}`);
    return response.json();
}
export default async function Page(){
    const session = await getServerSession(authOptions)
    if(!session) return <p>Access Denied</p>
    const {email} = session.user
    const userData = getUser(email);
    const [user] = await Promise.all([userData]);
    return <UserAccount user={user} />
   
}