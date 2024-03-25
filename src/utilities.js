const getStoredJobApplication = () => {
    const storedApplication = localStorage.getItem('job-applications');
    if (storedApplication) {
        return JSON.parse(storedApplication)
    }
    return []
}


const saveJobApplication = id => {
    const storedApplication = getStoredJobApplication();
    const exists = storedApplication.find(jobId => jobId === id);
    if (!exists) {
        storedApplication.push(id)
        localStorage.setItem('job-applications',JSON.stringify(storedApplication))
    }

}

const deleteJobApplications = id => {
    const storedApplication = getStoredJobApplication();
    const remaining = storedApplication.filter(jobId => jobId != id);
    localStorage.setItem('job-applications', JSON.stringify(remaining));
}

export { saveJobApplication, getStoredJobApplication, deleteJobApplications }