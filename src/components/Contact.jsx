import React, { useState } from 'react'
import mail from 'emailjs-com';

import '../css/Contact.css';

const Contact = () => {
    const[name, setName] = useState('');
    const[email, setEmail] = useState('');
    const[message, setMessage] = useState('');

    const onNameChange = e =>{
        setName(e.target.value)
    };
    const onEmailChange = e =>{
        setEmail(e.target.value)
    };
    const onMessageChange = e =>{
        setMessage(e.target.value)
    };

    const sendEmail = e =>{
        e.preventDefault();
    
        if( name !== '' &&
            email !== '' &&
            message !== ''){
            mail.sendForm('gmail', 'template_rqv0phb', e.target, 'user_8B2QJXgmNfRiLOQeC1i3S')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          setName('');
          setEmail('');
          setMessage('');
        }
      }

    return (
        <div className="contact">
            <section className="detail_page">
                <div>
                    <h1>CONTACT</h1>
                    <p>Send Me a message if you are interessed of my work or for some other question</p>
                </div>
                <hr />
            </section>
            <section className="portfolio_contact_forms">
                <form onSubmit={sendEmail}>
                    <div>
                        <input type="text" name='name' id="name" value={name} placeholder="Name" onChange={onNameChange}/>
                    </div>
                    <div>
                        <input type="email" name='email' id="email" value={email} placeholder="Email" onChange={onEmailChange}/>
                    </div>
                    <div>
                        <textarea name="message" id="message" cols="30" rows="10" placeholder="Enter text here...." value={message} onChange={onMessageChange}></textarea>
                    </div>
                    <div>
                        <label><input type="checkbox"/> Check if you are not a robot</label>
                    </div>
                    <div>
                        <input type="submit" value="Send"/>
                    </div>
                </form>
            </section>
        </div>
    )
}

export default Contact
