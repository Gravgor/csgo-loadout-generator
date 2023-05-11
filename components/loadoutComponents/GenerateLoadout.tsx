"use client"

import { IValidationGenerateLoadout } from "@/addons/interfaces/interface"
import { useState } from "react"
import { useSession } from "next-auth/react"


const colorOptions = ['Red', 'Blue', 'Green', 'Yellow'];
const priceOptions = ['$0 - $10', '$10 - $20', '$20 - $30', '$30 - $40', '$40 - $50', '$50+'];

export default function GenerateLoadOut(){
    const { data: session, status } = useSession()
    const [generateLoadout, setGenerateLoadout] = useState<IValidationGenerateLoadout>({
        name: "",
        color: "",
        price: "",
    })
    const [selectedColor, setSelectedColor] = useState<string>("")
    const [selectedPrice, setSelectedPrice] = useState<number>(0)
    const [error, setError] = useState<string>("")

    if (status === "loading") return <p>Loading...</p>
    if (status === "unauthenticated") return <p>Access Denied</p>


    function generateLoadoutFunction(){
        if(generateLoadout.name === "" || generateLoadout.color === "" || generateLoadout.price === ""){
            setError("Please fill out all fields")
        }else{
            setError("")
            console.log(generateLoadout)
        }
    }


    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold mb-4 text-text">Generate Loadout</h1>
            <div className="flex flex-col items-center justify-center border border-primary rounded-md p-4 mb-8">
                <h2 className="text-xl text-text font-semibold mb-4">
                    Loadout name
                </h2>
                <input
                    className="border border-primary rounded-md p-2 mb-4"
                    type="text"
                    placeholder="Loadout name"
                    value={generateLoadout.name}
                    onChange={(e) => setGenerateLoadout({...generateLoadout, name: e.target.value})}
                />
            </div>
            <div className="flex flex-col items-center justify-center border border-primary rounded-md p-4 mb-8">
            <h2 className="text-xl text-text font-semibold mb-4">
                    Preferred Loadout Color
                </h2>
                <div className="flex gap-4 justify-between w-full">
                    {colorOptions.map((color, index) => (
                        <button
                            key={color}
                            className={`border text-text border-primary rounded-md p-2 mb-4 ${selectedColor === color ? "bg-primary text-white" : ""}`}
                            onClick={() => {
                                setSelectedColor(color)
                                setGenerateLoadout({...generateLoadout, color: color})
                            }}
                        >
                            {color[0].toUpperCase() + color.slice(1)}
                        </button>
                    ))}
                </div>
            </div>
            <div className="flex flex-col items-center justify-center border border-primary rounded-md p-4 mb-8">
                <h2 className="text-xl text-text font-semibold mb-4">
                    Preferred Loadout Price
                </h2>
                <div className="flex gap-4 flex-wrap justify-between w-full">
                    {priceOptions.map((price, index) => (
                        <button
                            key={price}
                            className={`border text-text border-primary rounded-md p-2 mb-4 ${selectedPrice === index ? "bg-primary text-white" : ""}`}
                            onClick={() => {
                                setSelectedPrice(index)
                                setGenerateLoadout({...generateLoadout, price: price})
                            }}
                        >
                            {price}
                        </button>
                    ))}
                </div>
            </div>
            <button
                className="bg-primary hover:bg-red-900 text-white font-bold py-2 px-4 rounded"
                onClick={() => {
                    generateLoadoutFunction()
                }}
            >
                Generate Loadout
            </button>
        </div>
    )
}
