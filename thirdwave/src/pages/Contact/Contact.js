import React, { useState, useRef } from "react";
import Header from "../../compenents/Header/Header";
import Footer from "../../compenents/Footer/Footer";
// import emailjs from '@emailjs/browser';
import "../../sass/pages/_contact.scss";

export default function Contact() {
  const [inputs, setInputs] = useState({
    displayName: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const form = useRef();

  // const handleChangeName = (e) => {
  //   setInputs({
  //     ...inputs,
  //     name: e.target.value
  //   });
  // }

  // const handleChangeEmail = (e) => {
  //   setInputs({
  //     ...inputs,
  //     email: e.target.value
  //   });
  // }

  // const handleChangeMessage = (e) => {
  //   setInputs({
  //     ...inputs,
  //     message: e.target.value
  //   });
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you " + inputs.displayName + " :)");

    // emailjs.sendForm(
    //   'gmail',
    //   'template_0fcv719',
    //   form.current,
    //   'user_RimOnGyUfCEMCL9yCSP74'
    // )
    //   .then((result) => {
    //    alert('Thank you ' + inputs.displayName + ' :)');
    //   }, (error) => {
    //     console.log(error.text);
    //   });
  };

  const { displayName, email, message } = inputs;

  return (
    <div id="parent">
      <Header />
      <div className="contact">
        <div className="row-1">
          <div className="col-1">
            <div className="contact-form">
              <form ref={form} onSubmit={handleSubmit}>
                <input
                  name="displayName"
                  type="text"
                  className="feedback-input"
                  placeholder="Name"
                  value={displayName}
                  onChange={handleChange}
                />
                <input
                  name="email"
                  type="text"
                  className="feedback-input"
                  placeholder="Email"
                  value={email}
                  onChange={handleChange}
                />
                <textarea
                  name="message"
                  className="feedback-input"
                  placeholder="Message"
                  value={message}
                  onChange={handleChange}
                />
                <input type="submit" value="Submit" />
              </form>
            </div>
          </div>
          <div className="col-2">col2</div>
        </div>
        <div className="row-2">
          <div className="col-3">col3</div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
