import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <div className="relative overflow-hidden">
            <div className="max-w-7xl mx-auto flex-col">
                <div className="relative z-10 lg:w-full lg:pb-28 xl:pb-32">
                    <Image
                    className="rotate-[-10deg]"
                        src="/images/vulcan.png"
                        alt="Vulcan"
                        width={1020}
                        height={600}
                    />
                </div>
                <h1 className="text-6xl text-center font-bold text-text">
                Unleash your ultimate loadout
                </h1>
                <div className="flex justify-center gap-4 mt-4">
                    <Link href="/auth/signup" className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark transition-colors duration-300">
                        Sign up
                    </Link>
                    <Link href="/auth/signin" className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark transition-colors duration-300">
                        Sign in
                    </Link>
                </div>
            </div>
        </div>
    )
}