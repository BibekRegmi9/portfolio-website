import React from 'react'
import user from '../assets/user.png'

const Testimonial = () => {
  return (
    <div id='testimonial'>
        <h2>Testimonial</h2>
        <section>
            <TestimonialCard name={"Paras"} feedback={"Project delivery time is consistent"}  />
            <TestimonialCard name={"John"} feedback={"Experience was wonderful"}  />
            <TestimonialCard name={"Bibek"} feedback={"Project was as expected"}  />
        </section>
    </div>
  )
}

const TestimonialCard = ({name, feedback}) =>(
    <article>
        <img src={user} alt="user" />
        <h4>{name}</h4>
        <p>{feedback}</p>
    </article>
)

export default Testimonial