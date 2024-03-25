
import { useNavigate } from 'react-router-dom';
import Image from '../assets/images/core-web-vitals-no-data_e2fd8dc809.png'

const NoData = () => {
    const navigate = useNavigate();

    const bgStyle = {
        backgroundImage: `url(${Image})`,
        backgroundPosition: 'center'
    }
    const goBack = () => {

        navigate('/')
    }

    
    return (
        <div style={bgStyle} className="min-h-[calc(100vh-292px)] container mx-auto flex justify-center items-end py-5">
            
                <button onClick={goBack} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Featured Job
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </button>
               
            
        </div>
    );
};

export default NoData;