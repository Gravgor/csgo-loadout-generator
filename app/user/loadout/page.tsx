import Loadouts from "@/components/loadoutComponents/Loadouts";



async function getLoadouts() {
    const response = await fetch("http://localhost:3000/api/user/loadout/");
    return response.json();
}

export default async function Page(){
   const loadoutData = await getLoadouts();
    return <Loadouts loadout={loadoutData} />
   
}