"use client"
import Image from "next/image";
import style from "../page.module.css";
import { FaGithub, FaFolder, FaUser, FaRegSmile, FaInstagram, FaFacebook,FaArrowRight, FaTrello, FaUikit, FaWeebly, FaOpencart } from "react-icons/fa";
import AOS from'aos'

import { Gap } from "./Other"
import { useEffect } from "react";

export function About() {
    useEffect(() => {
        AOS.init({
            delay: 100,
            offset: 200,
            easing: 'ease-in-out-sine',
            duration: 800,
        });
    });

    return (
        <section className={style.reverse} id="about">
            <div data-aos="fade-up" className={style.center}>
                <span className={style.muted}>WHO WE ARE</span>
                <h2>About Us</h2>
                <p className={`${style.widthabout} ${style.centerText}`}>
                    Welcome to CYBEXONICS IT CONSULTANTS! We are a dynamic web development company dedicated to delivering fast, innovative, and creative solutions tailored to your needs. Our team of experienced professionals leverages the latest technologies and trends to create stunning websites that not only look great but also perform exceptionally. Whether you need a simple website or a complex application, we work efficiently to ensure timely delivery without compromising on quality. Let us help you bring your vision to life with our unique blend of speed and creativity!
                </p>
            </div>
            <Image
                width={200}
                height={280}
                src="/about.svg"
                className={style.image}
                alt="img"
                data-aos="fade-left"
                data-aos-delay="300"
            />
        </section>
    );
}


export function Mission(){
	return(
		<section className={style.reverse} id="about">
					<div>
					<span className={style.muted}>Our Mission</span>
					<h3>Mission</h3>
					<p>Our Mission is to provide innovative solution<br/> that einpower business to trive in the digital age.</p>
					</div>
					<Image width={200} height={400} src="/about.svg" className={style.image} alt="img" />
				</section>
	)
}

export function Services() {
    return (
        <section className={`${style.servicesSection}`} id="service">
            <span className={style.muted} data-aos="fade-up">
                Services
            </span>
            <h3 data-aos="fade-up">Our Services</h3>
            <div className={style.servicesGrid}>
                <div className={`${style.servicesCard}`} data-aos="fade-up">
                    <div className={style.cardImageContainer}>
                        <Image src="/web.jpg" width={300} height={200} alt="Web Development" />
                        <div className={style.cardOverlay}>
                            <h4>Web Development</h4>
                            <p>Customized website development tailored to your specific needs.</p>
                        </div>
                    </div>
                </div>
                <div className={`${style.servicesCard}`} data-aos="fade-up" data-aos-delay="200">
                    <div className={style.cardImageContainer}>
                        <Image src="/shop.jpg" width={300} height={200} alt="E-commerce Solutions" />
                        <div className={style.cardOverlay}>
                            <h4>E-commerce Solution</h4>
                            <p>Building robust online stores to help you reach more customers and increase sales.</p>
                        </div>
                    </div>
                </div>
                <div className={`${style.servicesCard}`} data-aos="fade-up" data-aos-delay="400">
                    <div className={style.cardImageContainer}>
                        <Image src="/ux.jpg" width={300} height={200} alt="UI/UX Design" />
                        <div className={style.cardOverlay}>
                            <h4>UI/UX Design</h4>
                            <p>Designing user-friendly interfaces that enhance the overall user experience.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}


const valueData =[
	{"id":1,"name":"Fast"},
	{"id":2,"name":"Innovation"},
	{"id":3,"name":"Customer Focus"},
	{"id":4,"name":"Collaboration"},
	{"id":5,"name":"Excellence"},
	{"id":6,"name":"Time Saving"}
]
export function Features(){
	return(
		<section className={style.services}>
			<Gap />
			<span className={style.muted} data-aos="fade-up">Values</span>
			<h3 data-aos="fade-up">Our Values</h3>
			<Gap />
			<div className={style.reverse}>
				<ul className={style.features} type="none">
					{valueData.map((v)=>(
						<li className={style.feature} key={v.id} data-aos-delay="300" data-aos="fade-up">
							<FaRegSmile /> {v.name}
						</li>
					))}
				</ul>
				<Image src="/value.svg" width={300} height={300} className={style.image} alt="img" data-aos="fade-right" />
			</div>
		</section>
	)
}

export function Contact(){
	
	return(
		<section className={style.center}>
			<span className={style.muted} data-aos="fade-up">Contact</span>
			<h3 data-aos="fade-up">Contact Us</h3>
			<div className={style.reverse} style={{rowGap:"40px"}}>
			<form action='https://formsubmit.co/d2d876f5c78dbd4c64e83ecdf8dc364f' method='POST' data-aos="fade-up">
					<div className={style.block}>
					<div className={style.textFlex} >
						<input type="text" className="form-control" placeholder="Full Name" name="Name" required/>
						<input type="email" className="form-control" placeholder="Your Email" name="Email" required/>
					</div><br/>
					<input type="text" className="form-control" placeholder="Subject" name="Subject" data-aos-delay="300" required/>
					<br/>
					<textarea className="form-control" placeholder="Message...." rows="6" name="Message" data-aos-delay="400" required/>
					<br/>
					<button id={style.btn} data-aos-delay="500" className={style.button} type="submit" style={{textAlign:"center"}}>Submit</button>
					</div>
				</form>
				<Image width={200} height={500} className={style.half} src="/contact.svg" alt="img" data-aos="fade-right"/>
			</div>
			<Gap/>
		</section>
	
	)
}
