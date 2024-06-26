/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Feature = ({ feature }) => {
    // console.log(feature);
    const { company_name, remote_or_onsite, logo, location, job_type, job_title, salary,id } = feature;
    return (
        <div className="border border-[#E8E8E8] p-10 rounded-xl my-5">
            <img className="w-[130px] h-[50px]" src={logo} alt="" />
            <h3 className="text-2xl font-bold">{job_title}</h3>
            <p className="text-xl font-semibold text-[#757575]">{company_name}</p>
            <div className="my-5 flex gap-5">
                <span className="px-4 py-2 border rounded-lg border-[#7E90FE] font-medium">{remote_or_onsite}</span>
                <span className="px-4 py-2 border border-[#7E90FE] rounded-lg font-medium" >{job_type}</span>
            </div>
            <div className="flex gap-10">
                <h3>{location}</h3>
                <h3>{salary}</h3>
            </div>
            <div className="mt-2">
                <Link to={`/job-details/${id}`} className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group">
                    <span className="w-48 h-48 rounded rotate-[-40deg] bg-purple-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                    <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">View Details</span>
                </Link>
            </div>

        </div>
    );
};

export default Feature;