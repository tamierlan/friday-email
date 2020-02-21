import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import {FaRoad} from 'react-icons/fa';
import {MdPhoneInTalk} from 'react-icons/md';
import {MdEmail} from 'react-icons/md';

export default function Mail() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')


  const handleClick = (e) => {
    e.preventDefault()
    if (e.target.id === "name") {
      setName(e.target.value)
    } else if (e.target.id === "email") {
      setEmail(e.target.value)
    } else {
      setMessage(e.target.value)
    }
  }


  async function handleSubmit(e) {
    e.preventDefault()
    const form = await axios.post('/api/form', {
      name,
      email,
      message
    })
  }


  return (
    <div className="contact-one">
      <div className="column">
        <div className="wrapper">
          <div className="company-info">
            <h3>Acme Web Design</h3>
            <ul>
              <li><FaRoad /> 44 Something st</li>
              <li><MdPhoneInTalk /> (555) 555-5555</li>
              <li><MdEmail /> test@acme.test</li>
            </ul>
          </div>
          <div className="contact">
            <h3>Email Us</h3>
            <form onSubmit={handleSubmit}>
              <p>
                <label>Name</label>
                <input id="name" placeholder="Name"
                value={name} onChange={handleClick} />
              </p>
              <p>
                <label>Email</label>
                <input id="email" placeholder="Email"
                value={email} onChange={handleClick} />
              </p>
              <p className="full">
                <label>Message</label>
                <input id="message" placeholder="text..."
                value={message} onChange={handleClick} />
              </p>
              <p className="full">
                <button onClick={handleSubmit}>Send Email</button>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
