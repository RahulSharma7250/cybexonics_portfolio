"use client";
import { useState } from "react";

const Modal = ({ showModal, closeModal, handleSubmit, formStatus }) => {
  return (
    <>
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2 className="modal-heading">Let’s Build Your Dream Website</h2>
            {formStatus === "success" ? (
              <p className="success-message">Form submitted successfully!</p>
            ) : formStatus === "error" ? (
              <p className="error-message">Failed to submit the form. Try again later.</p>
            ) : (
              <form action="https://api.web3forms.com/submit" method="POST" onSubmit={handleSubmit}>
                <input type="hidden" name="access_key" value="79a0e1f8-5b01-476c-9fef-5d4aa32f43f7" />
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="service">Service Type</label>
                  <select id="service" name="service" className="form-control" required>
                    <option value="">Select a service</option>
                    <option value="ecommerce">E-commerce Website</option>
                    <option value="portfolio">Portfolio Website</option>
                    <option value="business">Business Website</option>
                    <option value="custom">Custom Solution</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-control"
                    placeholder="Describe your requirements"
                    rows="4"
                  ></textarea>
                </div>
                <button type="submit" className="submit-button">
                  Submit
                </button>
              </form>
            )}
            <button className="close-button" onClick={closeModal}>
              ✕
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 9999;
        }
        .modal-content {
          background: #ffffff;
          padding: 30px;
          border-radius: 20px;
          max-width: 500px;
          width: 100%;
          box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1);
          color: #333;
          text-align: center;
          position: relative;
        }
        .modal-heading {
          font-size: 24px;
          font-weight: bold;
          margin-bottom: 20px;
          color: #007bff;
        }
        .form-group {
          margin-bottom: 20px;
          text-align: left;
        }
        .form-group label {
          display: block;
          font-weight: 600;
          margin-bottom: 8px;
          color: #555;
        }
        .form-control {
          width: 100%;
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 10px;
          background: #f9f9f9;
          color: #333;
        }
        .form-control:focus {
          border-color: #007bff;
          outline: none;
          box-shadow: 0 0 10px rgba(0, 123, 255, 0.2);
        }
        .submit-button {
          width: 100%;
          padding: 12px;
          border: none;
          border-radius: 10px;
          background: #172eff;
          color: #fff;
          font-size: 16px;
          font-weight: bold;
          cursor: pointer;
          transition: all 0.3s ease-in-out;
        }
        .submit-button:hover {
          background: #1526c2;
        }
        .close-button {
          position: absolute;
          top: 10px;
          right: 10px;
          background: none;
          border: none;
          font-size: 24px;
          color: #333;
          cursor: pointer;
        }
        .success-message {
          color: green;
          font-size: 18px;
        }
        .error-message {
          color: red;
          font-size: 18px;
        }
      `}</style>
    </>
  );
};

export default Modal;
