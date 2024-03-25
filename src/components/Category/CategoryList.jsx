import { useEffect, useState } from "react";
import Cat from "./Cat";

const CategoryList = () => {
    const [category, setCategory] = useState([]);
    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategory(data))
    }, [])
    return (
        <div className="container mx-auto my-10">
            <div className="text-center md:w-[590px] my-10 space-y-4 mx-auto">
                <h3 className="font-bold text-5xl">Job Category List</h3>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="flex justify-around">
                {
                    category.map(cat => <Cat
                        key={cat.id}
                        cat={cat}
                    ></Cat>)
                }
            </div>
        </div>
    );
};

export default CategoryList;