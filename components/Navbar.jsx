"use client";

import { useState, useEffect } from "react";
import style from "../styles/Navbar.module.css";
import Link from "next/link";
import { RiMenu3Fill } from "react-icons/ri";
import Image from "next/image";
import Modal from "../app/components/Modal";

const Menu = [
  { id: 1, menu: "Home", link: "" },
  { id: 2, menu: "About", link: "about" },
  { id: 3, menu: "Services", link: "#service" },
  { id: 4, menu: "Portfolio", link: "#portfolio" },
];

const DropMenu = [
  { id: 1, menu: "Pricing", link: "#pricing" },
  { id: 2, menu: "F.A.Q", link: "#faq" },
  { id: 3, menu: "Feedback", link: "#feedback" },
  { id: 4, menu: "Clients", link: "#clients" },
];

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const [formStatus, setFormStatus] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      require("bootstrap/dist/js/bootstrap.min.js");
    }
  }, []);

  const handleGetStarted = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setFormStatus(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setFormStatus("success");
        form.reset();
      } else {
        setFormStatus("error");
      }
    } catch (error) {
      setFormStatus("error");
    }
  };

  return (
    <main>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg w-100 navbar-light bg-light" id={style.main}>
        <div className="container-fluid gap-3">
        <Link className="navbar-brand d-flex gap-2 align-items-center" href="/">
             <Image src="/logo2.png" width={40} height={40} alt="logo" />
             <span className={style.logoText}>
               <span className={style.mainLogo}>CYBEXONICS</span>
               <span className={style.subLogo}>IT CONSULTANT</span>
             </span>
           </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbar"
            aria-controls="navbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <RiMenu3Fill />
          </button>
          <div className="collapse navbar-collapse" id="navbar">
            <div className={style.menu}>
              <ul className="navbar-nav gap-3">
                {Menu.map((menu) => (
                  <li key={menu.id} style={{ display: "flex", alignItems: "center" }}>
                    <b>
                      <Link href={`/${menu.link}`} className="nav-link">
                        {menu.menu}
                      </Link>
                    </b>
                  </li>
                ))}
                <li className="dropdown">
                  <span
                    className="nav-link dropdown-toggle"
                    id="dropdown"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <b>Career</b>
                  </span>
                  <ul className="dropdown-menu bg-light" aria-labelledby="dropdown">
                    <li>
                      <b>
                        <Link className="dropdown-item" href="/career">
                          Job
                        </Link>
                      </b>
                    </li>
                    <li>
                      <b>
                        <Link className="dropdown-item" href="/career/internship">
                          Internship
                        </Link>
                      </b>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <span
                    className="nav-link dropdown-toggle"
                    id="dropdown"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <b>Other</b>
                  </span>
                  <ul className="dropdown-menu bg-light" aria-labelledby="dropdown">
                    {DropMenu.map((d) => (
                      <li key={d.id}>
                        <b>
                          <Link className="dropdown-item" href={`/${d.link}`}>
                            {d.menu}
                          </Link>
                        </b>
                      </li>
                    ))}
                  </ul>
                </li>
                <li style={{ display: "flex", alignItems: "center" }}>
                  <b>
                    <Link href="/contact" className="nav-link">
                      Contact Us
                    </Link>
                  </b>
                </li>
              </ul>
            </div>
            <button className={style.button} onClick={handleGetStarted}>
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Modal Component */}
      <Modal
        showModal={showModal}
        closeModal={closeModal}
        handleSubmit={handleSubmit}
        formStatus={formStatus}
      />
    </main>
  );
};

export default Navbar;
