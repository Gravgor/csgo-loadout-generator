

export default function Features(){
    return (
        <section className=" py-48">
  <div className="container mx-auto px-4">
    <h2 className="text-4xl font-bold text-center text-text mb-8">Features</h2>
    <div className="flex flex-wrap -mx-4">
      <div className="w-full md:w-1/3 px-4 mb-8">
        <div className="flex items-center mb-4">
          <div className="rounded-full bg-primary h-12 w-12 flex items-center justify-center">
            <svg className="text-white fill-current h-8 w-8" viewBox="0 0 20 20">
              <path d="M10 0C4.475 0 0 4.476 0 10a10 10 0 1 0 20 0 10 10 0 0 0-10-10zm4.708 9.178L9.732 14.22a1 1 0 0 1-1.464 0l-2.976-3.042a1 1 0 0 1 1.464-1.316l2.357 2.408 4.768-4.87a1 1 0 1 1 1.463 1.316z" />
            </svg>
          </div>
          <h3 className="ml-3 text-lg font-medium text-text">Personalized Loadouts</h3>
        </div>
        <p className="text-gray-400 leading-loose">Create and save your own loadouts tailored to your playstyle.</p>
      </div>
      <div className="w-full md:w-1/3 px-4 mb-8">
        <div className="flex items-center mb-4">
          <div className="rounded-full bg-primary h-12 w-12 flex items-center justify-center">
            <svg className="text-white fill-current h-8 w-8" viewBox="0 0 20 20">
              <path d="M3.976 4C2.777 4 2 4.775 2 5.771v8.459c0 .996.777 1.771 1.976 1.771h5.237l-.044 2.749c0 .163.07.316.186.423a.61.61 0 0 0 .423.176c.068 0 .138-.013.203-.04l3.035-1.256h.208C14.223 18 15 17.225 15 16.23V5.771C15 4.775 14.223 4 13.024 4H3.976zM13 16H7v-2h6v2zm0-4H7v-2h6v2zm0-4H7V6h6v2z" />
            </svg>
          </div>
          <h3 className="ml-3 text-lg font-medium text-text">Detailed Item Information</h3>
        </div>
        <p className="text-gray-400 leading-loose">View detailed information about every item in the game.</p>
      </div>
      <div className="w-full md:w-1/3 px-4 mb-8">
        <div className="flex items-center mb-4">
          <div className="rounded-full bg-primary h-12 w-12 flex items-center justify-center">
            <svg className="text-white fill-current h-8 w-8" viewBox="0 0 20 20">
              <path d="M16 3H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 8H7v2h2V8zm4 0h-2v2h2V8zm2-3H5V5h10V5zm0 8H5v-2h10v2z" />
            </svg>
          </div>
          <h3 className="ml-3 text-lg font-medium text-text">Social Sharing</h3>
        </div>
        <p className="text-gray-400 leading-loose">Share your favorite loadouts and item information with friends on social media.</p>
      </div>
    </div>
  </div>
</section>

    )
}