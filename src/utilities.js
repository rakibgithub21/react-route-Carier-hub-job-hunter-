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

export {saveJobApplication,getStoredJobApplication}