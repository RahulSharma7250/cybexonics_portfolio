"use client"; 
import style from "./page.module.css";
import { useEffect, useState } from "react";
import AOS from "aos";
import {
  FaGithub,
  FaFolder,
  FaUser,
  FaRegSmile,
  FaInstagram,
  FaFacebook,
  FaArrowRight,
} from "react-icons/fa";

import Pricing from "./components/Pricing";
import Main from "@/components/Main";
import { About, Services, Features, Contact } from "./components/About";
import {
  FAQ,
  Portfolio,
  Team,
  Clients,
  Gap,
  Feedback,
  Subscribe,
} from "./components/Other";
import Modal from "../app/components/Modal"; 

export default function Home() {
  const [showModal, setShowModal] = useState(false); 
  const [formStatus, setFormStatus] = useState(""); 
  useEffect(() => {
    AOS.init({
      delay: 200,
      offset: 0,
      easing: "ease-out-cubic",
      duration: 1000,
    });
    if (typeof window !== "undefined") {
      require("./counter.jsx");
    }
  }, []);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        setFormStatus("success");
      } else {
        setFormStatus("error");
      }
    } catch (error) {
      setFormStatus("error");
    }
  };

  return (
    <>
      <header className={style.hero}>
        <h1 data-aos="fade" data-aos-duration="6000">
          Modern solutions for growing your business
        </h1>
        <p data-aos="fade-up">
          We are a team of talented designers and developers making the best
          websites.
        </p>
        <button
          className={style['cta-button']}
          onClick={handleOpenModal} 
          data-aos="fade-up"
          data-aos-delay="400"
        >
          Get Start
        </button>
      </header>

      {/* Modal Component */}
      <Modal
        showModal={showModal}
        closeModal={handleCloseModal}
        handleSubmit={handleSubmit}
        formStatus={formStatus}
      />

      <Main>
        <main className={style.main}>
          <About />
          <Gap />
          <Services />
          <section className={style.counter}>
            <div className={style.count} data-aos="fade-up">
              <FaRegSmile size="3rem" />
              <p>
                <span className="num" end="23">
                  0
                </span>
                <span>+</span>
                <br />
                Happy Client
              </p>
            </div>
            <div
              className={style.count}
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <FaFolder size="3rem" />
              <p>
                <span className="num" end="25">
                  0
                </span>
                <span>+</span>
                <br />
                Our Projects
              </p>
            </div>
            <div
              className={style.count}
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <FaUser size="3rem" />
              <p>
                <span className="num" end="10">
                  0
                </span>
                <span>+</span>
                <br />
                Our Team
              </p>
            </div>
          </section>
          <Features />
          <Gap />
          <Pricing />
          <Gap />
          <FAQ />
          <Gap />
          <Portfolio />
          <Gap />
          <Team />
          <Gap />
          <Clients />
          <Gap />
          <Contact />
          <Gap />
        </main>
        <Subscribe />
      </Main>
    </>
  );
}
