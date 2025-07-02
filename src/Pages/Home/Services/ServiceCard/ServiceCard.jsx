

const ServiceCard = ({service}) => {
    const {title, img, price } = service
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <figure className="px-10 pt-10">
                <img
                    src={img}
                    alt="Shoes"
                    className="rounded-xl" />
            </figure>
            <div className="card-body pl-10">
                <h2 className="card-title text-2xl font-bold text-[#444444]">{title}</h2>
                <p className="text-[20px] font-semibold text-[#FF3811]"> Price: {price}</p>
                
            </div>
        </div>
    );
};

export default ServiceCard;