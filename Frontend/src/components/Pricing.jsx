import React from 'react';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';
const Pricing = () => {
    const pricing = [
        {
            imageUrl: "/pricing.jpg",
            title: "Quaterly",
            price: "100",
            description:"Quaterly plan",
            length : 3
        },
        {
            imageUrl: "/pricing.jpg",
            title: "Monthly",
            price: "100",
            description:"Monthly plan",
            length : 1
        },
        {
            imageUrl: "/pricing.jpg",
            title: "Yearly",
            price: "100",
            description:"Yearly plan",
            length : 12
        }
    ]
    return (
        <section className='pricing'>
            <h1>Elite fitness plans</h1>
            <div className="wrapper">
                {
                    pricing.map(element=>{
                        return(
                            <div className="card" key={element.title}>
                                <img src={element.imageUrl} alt="pricing" />
                                <div className="title">
                                    <h1>{element.title}</h1>
                                    <h3>Rs. {element.price}</h3>
                                    <h1>Package</h1>
                                    <p>for {element.length} month</p>
                                </div>
                                <div className="description">
                                 <p>
                                    <Check/> Equipment
                                 </p>
                                 <p>
                                    <Check/> All day free training
                                 </p>
                                 <p>
                                    <Check/> Free Restroom
                                 </p>
                                 <p>
                                    <Check/> 24/7 skilled support
                                 </p>
                                 <p>
                                    <Check/> 20 Days Freeing
                                 </p>

                                 <Link to={"/"}>Join Now</Link>
                                
                                </div>
                            </div>

                           
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Pricing
