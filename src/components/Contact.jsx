import React, { useState } from 'react'
import vg from '../assets/vg.png'
import { toast } from 'react-hot-toast'

const Contact = () => {



    const [inputs, setInputs] = useState({name: "", email: "", message: ""})

    const changeHandler = (e) => {
        
        setInputs({...inputs,[e.target.name]: e.target.value})
    }

    const submitHandler = (e) => {
        e.preventDefault();
        toast.success("Message Sent")

        // console.log(name, email, message);
    }

  return (
    <div id='contact'>
        <section>
            <form onSubmit={submitHandler}>
                <h2>Contact Me</h2>
                <input type="text" value={inputs.name} name='name' onChange={changeHandler} placeholder='Your Name' required/>
                <input type="email" value={inputs.email} name='email' onChange={changeHandler} placeholder='Your Email' required/>
                <input type="text" value={inputs.message} name='message' onChange={changeHandler} placeholder='Your Message' required/>

                <button type='submit'>Send</button>
            </form>
        </section>

        <aside>
            <img src={vg} alt="vector graphics" />
        </aside>
    </div>
  )
}

export default Contact