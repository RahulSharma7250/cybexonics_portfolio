"use client";
import React, { useState } from "react";
import style from "../page.module.css";
import Main from "@/components/Main";

function Career() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
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
              <form
                action="https://formsubmit.co/d2d876f5c78dbd4c64e83ecdf8dc364f"
                method="POST"
                encType="multipart/form-data"
              >
                <div className={style.inputGroup}>
                  <label htmlFor="name" className={style.label}>
                    Enter your name
                  </label>
                  <input
                    type="text"
                    name="Name"
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
                    name="Email"
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
                    name="ContactNo"
                    id="contact"
                    className={style.formControl}
                    placeholder="Contact/Phone No"
                  />
                </div>

                <div className={style.inputGroup}>
                  <label htmlFor="resume" className={style.label}>
                    Upload your resume
                  </label>
                  <input
                    type="file"
                    name="Resume"
                    id="resume"
                    className={style.formControl}
                    accept="application/pdf"
                    required
                  />
                </div>

                <div className={style.inputGroup}>
                  <label htmlFor="message" className={style.label}>
                    Cover Letter
                  </label>
                  <textarea
                    className={style.formControl}
                    name="Message"
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
      </Main>
    </>
  );
}

export default Career;
