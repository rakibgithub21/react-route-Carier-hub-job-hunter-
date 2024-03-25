/* eslint-disable react/prop-types */



const Applied = ({ applied, deleteJob }) => {

   
    return (
        <>
           
            <div className="flex gap-5 border border-[#E8E8E8] my-10 p-5">
                <div>
                    <img className="w-[240px]" src={applied.logo} alt="" />
                </div>
                <div className="w-full px-5">
                    <h3>Technical Database Engineer</h3>
                    <h3>Google LLC</h3>
                    <div className="flex justify-between items-center ">
                        <div className="my-5 flex gap-5">
                            <span className="px-4 py-2 border rounded-lg border-[#7E90FE] font-medium">{applied.remote_or_onsite}</span>
                            <span className="px-4 py-2 border border-[#7E90FE] rounded-lg font-medium" >{applied.job_type}</span>
                        </div>
                        <div>
                            <button onClick={()=>deleteJob(applied.id)} href="#_" className="relative px-5 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group">
                                <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
                                <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
                                <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                                <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                                <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
                                <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">Remove</span>
                            </button>
                        </div>
                    </div>
                    <div className="flex gap-10">
                        <h3>{applied.location}</h3>
                        <h3>{applied.salary}</h3>
                    </div>
                </div>
            </div>
        </>
        
    );
};

export default Applied;