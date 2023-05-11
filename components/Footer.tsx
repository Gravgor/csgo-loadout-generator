

export default function Footer(){
    return (
        <footer className=" bg-background text-white">
    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
        <a href="#" className="mr-4 text-gray-400 hover:text-white">Privacy Policy</a>
        <a href="#" className="mr-4 text-gray-400 hover:text-white">Terms of Service</a>
        <a href="#" className="mr-4 text-gray-400 hover:text-white">Contact Us</a>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <a href="#" className="text-gray-400 hover:text-white">
                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24"><path d="M17.59 7.76A5 5 0 0119 12.55v3.9a5 5 0 01-5 5H10.41a2 2 0 01-1.42-.6l-1.77-1.78a2 2 0 010-2.82L9.17 14a2 2 0 011.41-.6h3.9a3 3 0 003-3v-3.8a.6.6 0 00-.17-.42l-1.4-1.36a.6.6 0 00-.4-.18h-2.22a2 2 0 01-1.41-.6L9.17 5a2 2 0 00-2.83 0L5 6.17a2 2 0 000 2.82l1.37 1.36a2 2 0 01.59 1.42v2.2a3 3 0 003 3h3.8a.6.6 0 00.42-.17l1.4-1.4a.6.6 0 00.18-.4v-2.23a2 2 0 01.6-1.4l1.77-1.77a2 2 0 011.41-.6h2.2a2 2 0 001.41-.6zM6 9a3 3 0 110-6 3 3 0 010 6zm12 0a3 3 0 110-6 3 3 0 010 6z"></path></svg>
            </a>
            <a href="#" className="ml-3 text-gray-400 hover:text-white">
                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24"><path d="M22 2H2v20l4-4h16l-.01-16z"></path><path d="M16 2v6h-2V2h-3l4-4 4 4z"></path></svg>
            </a>
        </span>
    </div>
</footer>

    )
}