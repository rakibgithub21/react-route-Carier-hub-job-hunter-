import { useEffect, useState } from "react";
import Feature from "./Feature";


const FeaturedJob = () => {
    const [featureJob, setFeaturedJob] = useState([]);
    const [dataLength,setDataLength] = useState(4)
    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setFeaturedJob(data))
    }, [])
    const showAllJobs = () => [
        setDataLength(featureJob.length)
    ]
    return (
        <div className="container mx-auto">
            <div className="container mx-auto md:w-[590px] text-center space-y-4">
                <h3 className="text-5xl font-bold">Featured Jobs</h3>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-2 gap-10">
                {
                    featureJob.slice(0,dataLength).map(feature => <Feature
                    key={feature.id}
                    feature={feature}
                    ></Feature>)
                }
            </div>
            <div className={dataLength === featureJob.length && 'hidden'}>
                <button className="underline text-lime-500" onClick={showAllJobs}>See All Jobs</button>
            </div>
        </div>
    );
};

export default FeaturedJob;