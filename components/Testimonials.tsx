import Image from "next/image";

export default function Testimonials() {
  return (
    <section className="bg-white py-8">
      <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">
        <div className="w-full md:w-1/2 px-4">
          <div className="md:pr-12">
            <h2 className="text-4xl font-bold mb-2 text-gray-800">
              Customer Testimonials
            </h2>
            <p className="text-gray-600 mb-6">
              See what our users are saying about our app
            </p>
            <div className="flex items-center w-full mb-4">
              <div className="bg-gray-300 h-12 w-12 flex items-center justify-center rounded-full mr-4">
                <Image
                  src="/images/user.jpg"
                  width={10}
                  height={10}
                  className="h-10 w-10 rounded-full"
                  alt="User 3"
                />{" "}
              </div>
              <div className="flex-grow">
                <p className="text-gray-800 font-bold">John Doe</p>
                <p className="text-gray-600">
                  &quotI love this app! It has saved me so much time and
                  effort.&quot
                </p>
              </div>
            </div>
            <div className="flex items-center w-full mb-4">
              <div className="bg-gray-300 h-12 w-12 flex items-center justify-center rounded-full mr-4">
                <Image
                  src="/images/user.jpg"
                  width={10}
                  height={10}
                  className="h-10 w-10 rounded-full"
                  alt="User 3"
                />
              </div>
              <div className="flex-grow">
                <p className="text-gray-800 font-bold">Jane Smith</p>
                <p className="text-gray-600">
                  &quotThis app is amazing! It has completely changed the way I
                  work.&quot
                </p>
              </div>
            </div>
            <div className="flex items-center w-full mb-4">
              <div className="bg-gray-300 h-12 w-12 flex items-center justify-center rounded-full mr-4">
                <Image
                  src="/images/user.jpg"
                  width={10}
                  height={10}
                  className="h-10 w-10 rounded-full"
                  alt="User 3"
                />
              </div>
              <div className="flex-grow">
                <p className="text-gray-800 font-bold">Bob Johnson</p>
                <p className="text-gray-600">
                  &quotIve tried so many apps before, but this one is the best
                  by far.&quot
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
