import React from 'react'
import './Contact.css'
// Message icon
import { FaEnvelope } from 'react-icons/fa'
// Mail icon
import { FaMailBulk } from 'react-icons/fa'
// Phone icon
import { FaPhone } from 'react-icons/fa'
// Location icon
import { FaMapMarkerAlt } from 'react-icons/fa'
// arrow-right icon
import { FaArrowRight } from 'react-icons/fa'

const Contact = () => {
  return (
    <div className='contact'>
        <div className='contact-col'>
            <h3>Send a message <FaEnvelope /></h3>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.
            </p>

            <ul>
                <li><FaPhone/> Phone: 123-456-7890</li>
                <li><FaMailBulk/> Email: email@gmail.com</li>
                <li><FaMapMarkerAlt/> Address: 123 Main St, New York, NY</li>
            </ul>
        </div>

        <div className='contact-col'>
            <form>
                <label>Your name</label>
                <input type='text' name='name' placeholder='Enter your name' required />

                <label>Phone number</label>
                <input type='tel'  name='phone' placeholder='Enter your phone number' required />

                <label>Write your message</label>
                <textarea name='message' rows="10" placeholder='Write your message here' required />

                <button type='submit' className='btn dark-btn'>Send <FaArrowRight/></button>
            </form>
        </div>
    </div>
  )
}

export default Contact
