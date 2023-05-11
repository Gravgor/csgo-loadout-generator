"use client";

import { ILoadout } from "@/addons/interfaces/interface";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";

export default function Loadouts({ loadout }: { loadout: ILoadout }) {
  const [loadouts, setLoadouts] = useState<ILoadout[]>([]);
  const { data: session, status } = useSession();
  if (status === "loading") return <p>Loading...</p>;
  if (status === "unauthenticated") {
    return (
      <div>
        <h1>Access Denied</h1>
      </div>
    );
  }

    async function handleEditLoadout(id: number){
    const response = await fetch(`/api/loadouts/${id}`, {
      method: "PUT",
    });
    const { loadout } = await response.json();
    setLoadouts(loadout);
    }

  async function handleDeleteLoadout(id: number){
    const response = await fetch(`/api/loadouts/${id}`, {
      method: "DELETE",
    });
    const { loadout } = await response.json();
    setLoadouts(loadout);
  }

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold text-text mb-4">Saved Loadouts</h1>
      {loadouts.length === 0 && (
        <div className="h-full flex flex-col gap-2 justify-center items-center">
            <p className="text-text">No loadouts saved</p>
            <Link className="bg-primary text-white px-4 py-1 relative top-1 rounded-md hover:bg-primary-dark transition-colors duration-300" href="/user/loadout/create">Create a loadout</Link>
        </div>
      )}
      <ul>
        {loadouts.map((loadout) => (
          <>
            <li key={loadout.id} className="mb-4">
              <h2 className="text-lg font-bold">{loadout.name}</h2>
              <ul>
                {loadout.items.map((item) => (
                  <li key={item.id} className="mb-4">
                    {item.name} - {item.rarity} - &#36;{item.price}
                  </li>
                ))}
              </ul>
              <div className="flex justify-between">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => handleEditLoadout(loadout.id)}
                >
                  EDIT
                </button>
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => handleDeleteLoadout(loadout.id)}
                >
                  DELETE
                </button>
              </div>
            </li>
          </>
        ))}
      </ul>
    </div>
  );
}
