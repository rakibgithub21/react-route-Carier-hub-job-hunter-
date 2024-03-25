/* eslint-disable react/prop-types */


const Cat = ({ cat }) => {
    // console.log(cat);
    const { logo, category_name, availability } = cat
    return (
        <div className="bg-gradient-to-r from-[#7e90fe0d] rounded to-[#9873ff0d] p-10 space-y-2">
            <img className="w-[50px]" src={logo} alt="" />
            <h3>{category_name}</h3>
            <p>{availability}</p>
        </div>
    );
};

export default Cat;