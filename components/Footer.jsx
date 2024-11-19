"use client"
import style from "../styles/Footer.module.css";
import { FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import AOS from 'aos'
import { useEffect } from "react";

const Footer = () => {
	useEffect(()=>{
		if(typeof window !== "undefined"){
			require('aos/dist/aos.js');
		}
		AOS.init({
			delay: 100,
			offset:0,
			easing:'ease-in-out-sine',
			duration: 1000,
		})
	},[])
	return(
		<>
			<main className={style.main}>
				<div className={style.top}>
					<h4 data-aos="fade-right">Cybexonics ITConsultants Pvt. Ltd</h4>
					<div className={style.icons}>
						<Link href="https://www.instagram.com/cybexonics.it_consultants?igsh=bnVuZ2treTAxNzRy" className={style.link}><FaInstagram size="1.5rem" data-aos="fade-up" /></Link>
						<Link href="/" className={style.link}><FaWhatsapp size="1.5rem" data-aos="fade-up" /></Link>
						<Link href="/" className={style.link}><FaGithub size="1.5rem" data-aos="fade-up" /></Link>
					</div>
				</div>
				<div className={style.body}>
					<div className={style.box} data-aos="fade-up">
						<h5>About us</h5>
						<div className={style.links}>
							<p style={{width:"300px"}}> We are a dynamic web development company dedicated to delivering fast, innovative, and creative solutions tailored to your needs.</p>
						</div>
					</div>
					<div className={style.box} data-aos="fade-up">
						<h5>Qucik Links</h5>
						<div className={style.links}>
							<h6><Link href="/" className={style.link}>Home</Link></h6>
							<h6><Link href="#service" className={style.link}>Services</Link></h6>
							<h6><Link href="#tem" className={style.link}>Team</Link></h6>
							<h6><Link href="#about" className={style.link}>About Us</Link></h6>
						</div>
					</div>
					<div className={style.box} data-aos="fade-up">
						<h5>Legal</h5>
						<div className={style.links}>
							<h6><Link href="/termcondition" className={style.link}>Term & condition</Link></h6>
							<h6><Link href="/contact" className={style.link}>Help</Link></h6>
							<h6><Link href="/contact" className={style.link}>Contact Us</Link></h6>
						</div>
					</div>
					<div className={style.box} data-aos="fade-up">
						<h5>Contact Us</h5>
						<p>
							<b>Email:</b><Link href="mail:cybexonicsitconsultants@gmail.com" className={style.link}>cybexonicsitconsultants@gmail.com</Link><br/>
							<b>Phone no: </b><Link href="phone:7387643893" className={style.link}><FaWhatsapp/> +91 73876 43893</Link>
						</p>
					</div>
				</div>
				<div className={style.bottom} data-aos="fade">
					© Copyright<b style={{color:"var(--text)"}}> Cybexonics ITConsultants Pvt. Ltd</b>. All Rights Reserved<br/>
				</div>
			</main>
		</>
	)
}

export default Footer;
