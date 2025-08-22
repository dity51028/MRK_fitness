import React,{useState} from 'react';
import { ClipLoader } from 'react-spinners';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);  
    return (
        <section className='contact'>
            <form>
                <h1>Contact Us</h1>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" 
                           id="name" 
                           value={name}  
                           onChange={(e)=>setName(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" 
                           id="email" 
                           value={email}  
                           onChange={(e)=>setEmail(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="message">Message</label>
                    <textarea id="message" 
                              value={message}
                              onChange={(e)=>setMessage(e.target.value)}></textarea>
                </div>
                <button type="submit" disabled={loading} style={{display:'flex',justifyContent:'center',alignItems:'center',gap:"15px"}}>
                   {!loading && <ClipLoader size={20} color="#0095ff" /> } Send</button>
            </form>
        </section>
    )
}

export default Contact

