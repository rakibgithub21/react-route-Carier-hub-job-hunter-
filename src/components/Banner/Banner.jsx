import banner from '../../assets/images/user.png'
const Banner = () => {
    return (
        <div className='flex justify-between container mx-auto items-center my-5'>
            <div className='md:w-[600px] space-y-5'>
                <h1 className='font-bold md:text-7xl'>One Step Closer To Your Dream Job</h1>
                <p className='text-lg'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <a href="#_" className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group">
                    <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </span>
                    <span className="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">Get Started</span>
                    <span className="relative invisible">Get Started</span>
                </a>
            </div>
            <div>
                <img className='w-full' src={banner} alt="" />
            </div>
        </div>
    );
};

export default Banner;