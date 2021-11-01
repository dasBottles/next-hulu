import Requests from "../utils/Requests";

const Navbar = () => {
    return (
        <nav className='relative'>
            <div className='flex px-10 sm:px-20 whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide' >
                {Object.entries(Requests).map(([ key, { title, url }]) => (
                    <h2 className='last:pr-24 cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500' key={key}>{title}</h2>
                ))}
            </div>
            <div className='absolute top-0 right-0 bg-gradient-to-l from-gray-800 h-10 w-1/12' />
        </nav>
    )
}

export default Navbar
