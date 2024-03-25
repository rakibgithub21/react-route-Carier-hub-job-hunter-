
import { useLoaderData, useParams } from "react-router-dom";

const JobDetails = () => {
    const jobs = useLoaderData();
    console.log(jobs);

    const { id } = useParams();
    const job = jobs.find(job => job.id === parseInt(id));
    console.log(job);
    return (
        <div className="grid grid-cols-5 container mx-auto gap-5 min-h-[calc(100vh-272px)] py-[130px]">
            <div className="col-span-3  space-y-6 ">
                <p>Job Description: {job.job_description}</p>
                <p>Job Responsibility: {job.job_responsibility}</p>
                <p>Educational Requirements:</p>
                <p>{job.educational_requirements}</p>
                <p>Experiences:</p>
                <p>{job.experiences}</p>

            </div>

            <div className=" col-span-2 ">
                <div className="bg-gradient-to-r from-indigo-50 text-xl font-medium to-red-50 p-8 space-y-3 mb-5 rounded-lg">
                    <p>Job Details</p>
                    <hr />
                    <p>Salary:{job.salary}</p>
                    <p>Job Title:{job.job_title}</p>
                    <p>Contact Information</p>
                    <hr />
                    <p>Phone:{job.contact_information.phone}</p>
                    <p>Email:{job.contact_information.email}</p>
                    <p>Address:{job.contact_information.address}</p>
                </div>
                <div className="bg-gradient-to-r from-[#7E90FE] to-[#9873FF] rounded-lg font-bold text-xl text-white">
                    <button className="w-full py-4">Apply Now</button>
                </div>

            </div>
        </div>
    );
};

export default JobDetails;