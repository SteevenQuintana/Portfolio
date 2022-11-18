import React, { useState } from "react";
import { client } from "../../client";
import { AppWrap } from "../../wrapper";
import "./Footer.scss";

function Footer() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmited, setIsSubmited] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { name, email, message } = formData;

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const contact = {
      _type: "contact",
      name: name,
      email: email,
      message: message,
    };
    client.create(contact).then(() => {
      setIsLoading(false);
      setIsSubmited(true);
    });
  };

  return (
    <>
      {!isSubmited ? (
        <>
          <h2 className="head-text">CONTACT</h2>
          <form className="app__footer-form app__flex" onSubmit={handleSubmit}>
            <div className="app__flex">
              <input
                required
                type="text"
                placeholder="Name"
                name="name"
                value={name}
                onChange={inputChangeHandler}
              />
            </div>
            <div className="app__flex">
              <input
                required
                type="email"
                placeholder="email"
                name="email"
                value={email}
                onChange={inputChangeHandler}
              />
            </div>
            <div>
              <textarea
                required
                className="p-text"
                placeholder="Message"
                name="message"
                value={message}
                onChange={inputChangeHandler}
                rows="50"
              ></textarea>
            </div>
            <button type="submit" className="p-text">
              {isLoading ? "SENDING" : "SEND MESSAGE"}
            </button>
          </form>
        </>
      ) : (
        <div>
          <h3 className="head-text">Thank you for getting in touch!</h3>
        </div>
      )}
      <div className="copyright">
        <p className="p-text">Copyright © 2022</p>
        <p className="p-text">All rights reserved</p>
        <p className="p-text">Made with ♥️ </p>
      </div>
    </>
  );
}

export default AppWrap(Footer, "contact");
