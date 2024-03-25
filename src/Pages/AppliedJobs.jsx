import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../utilities";
import Applied from "./Applied";


const AppliedJobs = () => {
    const jobs = useLoaderData();
    const [appliedJobs, setAppliedJobs] = useState([]);
    const [displayJob, setDisplayJob] = useState([]);


    useEffect(() => {
        const storedJobsID = getStoredJobApplication();
        if (jobs.length) {
            let jobsApplied = [];
            for (const id of storedJobsID) {
                const job = jobs.find(job => job.id === parseInt(id));
                jobsApplied.push(job)
            }
            setAppliedJobs(jobsApplied)
            setDisplayJob(jobsApplied)
        }
    }, [jobs])
    console.log(appliedJobs);

    // const handleJobsFilter = filter => {
    //     if (filter === 'all') {
    //         setDisplayJob(appliedJobs);
    //     }
    //     else if (filter === 'remote') {
    //         const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Remote');
    //         setDisplayJob(remoteJobs)
    //     }
    //     else if (filter === 'onsite') {
    //         const onsiteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite');
    //         setDisplayJob(onsiteJobs)
    //     }
    // }
    const handleJobsFilter = filter => {
        if (filter === 'all') {
            setDisplayJob(appliedJobs)
        }
        else if (filter === 'remote') {
            const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Remote');
            setDisplayJob(remoteJobs)
        }
        else if (filter === 'onsite') {
            const onsiteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite');
            setDisplayJob(onsiteJobs)
        }
    }

    return (
        <div className="container mx-auto">
            <details className="dropdown">
                <summary className="m-1 btn">open or close</summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <li onClick={() => handleJobsFilter('all')}><a>All</a></li>
                    <li onClick={() => handleJobsFilter('onsite')}><a>Onsite</a></li>
                    <li onClick={() => handleJobsFilter('remote')}><a>Remote</a></li>
                </ul>
            </details>
            {
                displayJob.map(job => <Applied
                    key={job.id}
                    applied={job}
                ></Applied>)
            }
        </div>
    );
};

export default AppliedJobs;