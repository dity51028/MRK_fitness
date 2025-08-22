import React, { useState } from 'react';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BMIcalculator = () => {
    const [height, setHeight] = useState();
    const [weight, setWeight] = useState();
    const [gender, setGender] = useState();
    const [bmi, setBmi] = useState();

    const caculateBMI = (e) => {
        e.preventDefault();

        if(!height || !weight || !gender){
            toast.error("Please fill all the fields");
            return;
        }
        const heightInMeters = height / 100;
        const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);
        setBmi(bmi);

        if(bmi < 18.5){
            toast.warning("Underweight...Consider seeking advice from a healthcare professional.");
        }
        else if(bmi >= 18.5 && bmi < 24.9){
            toast.success("Normal weight...Maintain your current lifestyle.");
        }
        else if(bmi >= 25 && bmi < 29.9){
            toast.warning("Overweight...Consider making lifestyle changes to improve your health.");
        }
        else if(bmi >= 30){
            toast.error("Obesity...Consider seeking medical advice to address your weight.");
        }
    }

    return (
        <section className='bmi'>
            <h1>BMI CALCULATOR</h1>
            <div className='container'>
                <div className="wrapper">
                    <form onSubmit={caculateBMI}>
                        <div>
                            <label htmlFor="height">Height (cm)</label>
                            <input 
                            type="number" id="height" 
                            value={height} onChange={(e)=>setHeight(e.target.value)} 
                            required
                            />
                        </div>
                        <div>
                            <label htmlFor="weight">Weight (kg)</label>
                            <input 
                            type="number" id="weight" 
                            value={weight} onChange={(e)=>setWeight(e.target.value)} required/>
                        </div>
                        <div>
                            <label htmlFor="gender">Gender</label>
                            <select id="gender" value={gender} onChange={(e)=>setGender(e.target.value)}>
                                <option value="">Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </div>
                        <button type="submit">Calculate BMI</button>
                    </form>
                </div>
                <div className="wrapper">
                    <img src="/bmi.jpg" alt="bmi" />
                </div>
            </div>
        </section>
    )
}

export default BMIcalculator
