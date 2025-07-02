import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard/ServiceCard";


const Services = () => {
    const [services, setServices] =useState([]);
    useEffect(() => {
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div>
            <div className="text-center w-[700px] mx-auto my-10">
                <h3 className='text-2xl text-[#FF3811] font-bold '>Service</h3>
                <h1 className="text-5xl font-bold my-3">Our Service Area</h1>
                <p className="">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-3">
                {
                    services.map(service => <ServiceCard
                    key={service._id}
                    service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;