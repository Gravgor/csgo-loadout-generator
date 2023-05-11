import Image from "next/image";

export default function Testimonials() {
  return (
    <section>
      <div className="container px-4">
        <h2 className="text-4xl font-bold text-center text-text mb-2">Testimonials</h2>
        <p className="text-gray-400 text-center mb-8">
            See what our users have to say about us!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex flex-col items-start justify-center">
                <Image
                    src="/images/user.png"  
                    alt="User"
                    width={100}
                    height={200}
                    className="rounded-full"
                />
                <h3 className="text-2xl font-bold text-text mt-4">John Doe</h3>
                <p className="text-gray-400 mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam nec urna at augue fringilla fermentum eu vel enim.
                    Mauris scelerisque ante ac erat dictum, in laoreet massa
                    eleifend. Donec a lectus in ligula imperdiet pharetra.
                </p>
            </div>
            <div className="flex flex-col items-start justify-center">
                <Image
                    src="/images/user.png"  
                    alt="User"
                    width={100}
                    height={200}
                    className="rounded-full"
                />
                <h3 className="text-2xl font-bold text-text mt-4">John Doe</h3>
                <p className="text-gray-400 mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam nec urna at augue fringilla fermentum eu vel enim.
                    Mauris scelerisque ante ac erat dictum, in laoreet massa
                    eleifend. Donec a lectus in ligula imperdiet pharetra.
                </p>
            </div>
            <div className="flex flex-col items-start justify-center">
                <Image
                    src="/images/user.png"  
                    alt="User"
                    width={100}
                    height={200}
                    className="rounded-full"
                />
                <h3 className="text-2xl font-bold text-text mt-4">John Doe</h3>
                <p className="text-gray-400 mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam nec urna at augue fringilla fermentum eu vel enim.
                    Mauris scelerisque ante ac erat dictum, in laoreet massa
                    eleifend. Donec a lectus in ligula imperdiet pharetra.
                </p>
            </div>
            <div className="flex flex-col items-start justify-center">
                <Image
                    src="/images/user.png"  
                    alt="User"
                    width={100}
                    height={200}
                    className="rounded-full"
                />
                <h3 className="text-2xl font-bold text-text mt-4">John Doe</h3>
                <p className="text-gray-400 mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam nec urna at augue fringilla fermentum eu vel enim.
                    Mauris scelerisque ante ac erat dictum, in laoreet massa
                    eleifend. Donec a lectus in ligula imperdiet pharetra.
                </p>
            </div>
            <div className="flex flex-col items-start justify-center">
                <Image
                    src="/images/user.png"  
                    alt="User"
                    width={100}
                    height={200}
                    className="rounded-full"
                />
                <h3 className="text-2xl font-bold text-text mt-4">John Doe</h3>
                <p className="text-gray-400 mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam nec urna at augue fringilla fermentum eu vel enim.
                    Mauris scelerisque ante ac erat dictum, in laoreet massa
                    eleifend. Donec a lectus in ligula imperdiet pharetra.
                </p>
            </div>
            <div className="flex flex-col items-start justify-center">
                <Image
                    src="/images/user.png"  
                    alt="User"
                    width={100}
                    height={200}
                    className="rounded-full"
                />
                <h3 className="text-2xl font-bold text-text mt-4">John Doe</h3>
                <p className="text-gray-400 mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam nec urna at augue fringilla fermentum eu vel enim.
                    Mauris scelerisque ante ac erat dictum, in laoreet massa
                    eleifend. Donec a lectus in ligula imperdiet pharetra.
                </p>
            </div>
        </div>
      </div>
    </section>
  );
}
