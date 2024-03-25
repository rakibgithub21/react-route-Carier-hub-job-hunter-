import { useEffect, useState } from "react";
import { useLoaderData, useNavigation, useParams } from "react-router-dom";
import { deleteJobApplications, getStoredJobApplication } from "../utilities";
import Applied from "./Applied";
import NoData from "./NoData";



const AppliedJobs = () => {

    const navigation = useNavigation();
    console.log(navigation.state);

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

    const deleteJob = (id) => {
        const remaining = deleteJobApplications(id)
        console.log(remaining);
        const filterJob = displayJob.filter(job => job.id != id);
        setDisplayJob(filterJob);


    }

   

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
        <div className="container mx-auto min-h-[calc(100vh-292px)]">
            <details className="dropdown">
                <summary className="m-1 btn">open or close</summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <li onClick={() => handleJobsFilter('all')}><a>All</a></li>
                    <li onClick={() => handleJobsFilter('onsite')}><a>Onsite</a></li>
                    <li onClick={() => handleJobsFilter('remote')}><a>Remote</a></li>
                </ul>
            </details>
            {
                displayJob.length === 0 ? <NoData></NoData> : displayJob.map(job => <Applied
                    key={job.id}
                    applied={job}
                    deleteJob={deleteJob}
                ></Applied>)
                
            }
        </div>
    );
};

export default AppliedJobs;