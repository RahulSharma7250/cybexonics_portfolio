"use client";
import React, { useState } from "react";
import style from "../page.module.css";
import Main from "@/components/Main";

function Career() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setSubmissionStatus(true);
        setIsModalOpen(false);
        e.target.reset();
      } else {
        console.error("Failed to submit the form.");
        alert("There was an issue submitting your application. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      alert("An error occurred while submitting the form. Please try again later.");
    }
  };

  const closeSuccessMessage = () => {
    setSubmissionStatus(false);
  };

  return (
    <>
      <Main>
        <section className={style.pageMain} style={{ textAlign: "center" }}>
          <h2>Join Our Team</h2>
          <span className={style.muted}>
            Explore our open positions and apply to become part of our amazing team.
          </span>

          <div className={style.flex} style={{ marginTop: "2rem", gap: "120px" }}>
            {/* Frontend Developer Job Card */}
            <div className={style.jobCard}>
              <h3>Frontend Developer</h3>
              <p>Work on modern UI/UX designs using React, Tailwind, and more.</p>
              <button className={style.button} onClick={toggleModal}>
                Apply Now
              </button>
            </div>

            {/* Backend Developer Job Card */}
            <div className={style.jobCard}>
              <h3>Backend Developer</h3>
              <p>Build scalable and secure APIs using Node.js and MongoDB.</p>
              <button className={style.button} onClick={toggleModal}>
                Apply Now
              </button>
            </div>
          </div>
        </section>

        {/* Modal for Job Application Form */}
        {isModalOpen && (
          <div className={style.modalOverlay}>
            <div className={style.modal}>
              <button className={style.closeButton} onClick={toggleModal}>
                &times;
              </button>
              <h3 className={style.muted}>
                Please fill out the form below to submit your job application.
              </h3>
              <form onSubmit={handleFormSubmit}>
                {/* Web3Forms Access Key */}
                <input
                  type="hidden"
                  name="access_key"
                  value="79a0e1f8-5b01-476c-9fef-5d4aa32f43f7"
                />

                <div className={style.inputGroup}>
                  <label htmlFor="name" className={style.label}>
                    Enter your name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className={style.formControl}
                    placeholder="Full Name"
                    required
                  />
                </div>

                <div className={style.inputGroup}>
                  <label htmlFor="email" className={style.label}>
                    Enter your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className={style.formControl}
                    placeholder="Email"
                    required
                  />
                </div>

                <div className={style.inputGroup}>
                  <label htmlFor="contact" className={style.label}>
                    Enter your contact number
                  </label>
                  <input
                    type="number"
                    name="contact_no"
                    id="contact"
                    className={style.formControl}
                    placeholder="Contact/Phone No"
                  />
                </div>

                <div className={style.inputGroup}>
                  <label htmlFor="message" className={style.label}>
                    Cover Letter
                  </label>
                  <textarea
                    className={style.formControl}
                    name="message"
                    id="message"
                    cols={6}
                    rows={3}
                    placeholder="Cover your letter."
                    required
                  />
                </div>

                <button className={style.button} type="submit">
                  Submit
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Success Message Overlay */}
        {submissionStatus && (
          <div className={style.successOverlay}>
            <div className={style.successMessage}>
              <h2>🎉 Success!</h2>
              <p>Your application has been submitted successfully.</p>
              <button className={style.button} onClick={closeSuccessMessage}>
                Close
              </button>
            </div>
          </div>
        )}
      </Main>
    </>
  );
}

export default Career;
