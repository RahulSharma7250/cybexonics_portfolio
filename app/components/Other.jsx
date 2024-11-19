"use client"
import React from 'react';
import Link from "next/link";
import style from "../page.module.css";
import { FaArrowDown } from "react-icons/fa";
import Image from 'next/image';

export function FAQ(){
	return(
		<section className={style.services} id="faq">
			<span className={style.muted}>F.A.Q</span>
			<h3>Frequently Asked Questions</h3>
			<Gap/>
			<div className={style.accordion}>
				<Image width={400} height={400} src="/faq.svg" className="img-fluid" alt="question" data-aos="fade-right"/>
				<div style={{gap:"10px"}}>
					<div className={style.faq} data-aos="fade-up" id="faqs">
				<h4 className="accordion-header d-flex" id="headingOne">
							<button id={style.btn} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target='#one' aria-expanded="false" aria-controls="collapseOne">
								Q.How do I get started?
							</button>
							<FaArrowDown size="1rem" />
						</h4>
						<div id='one' className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#faqs">
							<div className="accordion-body mt-4">
								<b>Ans.</b>Simply contact us through our website or give us a call. We’ll schedule a consultation to discuss your project in detail and provide a custom quote.
							</div>
						</div>
					</div>

					<div className={style.faq} data-aos="fade-up" data-aos-delay="300">
						<h4 className="accordion-header d-flex" id="headingOne">
							<button id={style.btn} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target='#two' aria-expanded="false" aria-controls="collapseOne">
								Q.Can you build an online store for my business? 
							</button>
							<FaArrowDown size="1rem" />
						</h4>
						<div id='two' className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#faqs">
							<div className="accordion-body mt-4">
								<b>Ans.</b>Yes, we specialize in creating e-commerce websites that are secure, user-friendly, and optimized for conversions.
							</div>
						</div>
					</div>

					<div className={style.faq} data-aos="fade-up" data-aos-delay="400">
						<h4 className="accordion-header d-flex" id="headingOne">
							<button id={style.btn} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target='#three' aria-expanded="false" aria-controls="collapseOne">
								Q. How much time required to build a website?
							</button>
							<FaArrowDown size="1rem" />
						</h4>
						<div id='three' className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#faqs">
							<div className="accordion-body mt-4">
								<b>Ans.</b>Anywhere between 15 days to 30 days..
							</div>
						</div>
					</div>

					<div className={style.faq} data-aos="fade-up" data-aos-delay="300">
						<h4 className="accordion-header d-flex" id="headingOne">
							<button id={style.btn} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target='#four' aria-expanded="false" aria-controls="collapseOne">
								Q.How much does a new website cost?
							</button>
							<FaArrowDown size="1rem" />
						</h4>
						<div id='four' className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#faqs">
							<div className="accordion-body mt-4">
								<b>Ans.</b> The cost of a new website depends on various factors such as the complexity of the design, the number of pages, and any additional features you require. We provide a custom quote after discussing your specific needs.
							</div>
						</div>
					</div>

				</div>
			</div>
		</section>
	)
}

const PortfolioData = [
	{"id":1,"src":"/clients/client-1.png","delay":"200","link":"https://wwww.google.com"},
	{"id":2,"src":"/clients/client-2.png","delay":"200","link":"https://wwww.google.com"},
	{"id":3,"src":"/clients/client-3.png","delay":"200","link":"https://wwww.google.com"}
]

export function Portfolio(){
	return(
		<section className={style.center} id="protfolio">
			<span className={style.muted}>Portfolio</span>
			<h3>Check our latest work</h3>
			<div className={style.grid}>
				{PortfolioData.map((p)=>{
					return(
						<Link href={p.link} className={style.small} key={p.id} data-aos="fade-up" data-aos-delay={p.delay}><Image src={p.src} width={100} height={100} className={style.full} alt="img"/></Link>
					)
				})}
			</div>
		</section>
	)
}

const team = [
	{"id":1,"img":"/A.jpeg","name":"Mr. Aayush Panchal","delay":"300","role":"CEO",
	"info":"I'm passionate about crafting innovative, user-centric digital solution that help businesses thrive online.I'm committed to driving CYBEXONICS forword with a focus on excellence and client satisfaction."},

	{"id":2,"img":"/A.jpeg","name":"Mrs. Ashlesha Panchal","delay":"400","role":"Director",
	"info":"I'm with a background in strategy and management, I ensure our projects meet the highest standards of quality and innovation."}
]

export function Team(){
	return(
		<section className={style.center} id="team">
			<span className={style.muted} data-aos="fade-up">Team</span>
			<h3 data-aos="fade-up">Our hard working Team.</h3>
			<div className={style.grid}>
				{team.map((t)=>(
					<div className={style.team} key={t.id} style={{paddingBottom:"1rem"}} data-aos="fade-up" data-aos-delay={t.delay}>
						<div>
						<div style={{
							width:"100%",
							height:"220px",
							background:`#101010 url(${t.img}) no-repeat top left / cover`
						}}></div>
						<Image width={300} height={200} src="/team-shape.svg" className="img-fluid" id={style.teamShape} alt="img"/>
						</div>
						<h5 style={{color:"var(--primary)"}}>{t.name}</h5>
						<span className={style.darkmuted} style={{marginBottom:"25px"}}>{t.role}</span>
						<p style={{padding:"0px 10px"}}>{t.info}</p>
					</div>
				))}
			</div>
		</section>
	)
}

const client = [
	{"id":1,"name":"google","img":"/clients/client-1.png"},
	{"id":2,"name":"google","img":"/clients/client-2.png"},
	{"id":3,"name":"google","img":"/clients/client-3.png"},
	{"id":4,"name":"google","img":"/clients/client-4.png"},
	{"id":5,"name":"google","img":"/clients/client-5.png"},
	{"id":6,"name":"google","img":"/clients/client-6.png"},
	{"id":7,"name":"google","img":"/clients/client-7.png"},
	{"id":8,"name":"google","img":"/clients/client-8.png"}
]

export function Clients(){
	return(
		<section className={style.center} id="clients">
			<span className={style.muted} data-aos="fade-up">Clients</span>
			<h3 data-aos="fade-up">Our happy Clients</h3>
			<Gap/>
				<div className={style.slider} data-aos="fade-up">
					{client.map((c)=>(
						<div key={c.id}>
							<Image width={150} height={75} src={c.img}  alt={c.name}/>
						</div>
					))}
				</div>
		</section>
	)
}

const feedback=[
	{"id":1,"name":"Sanskar Bandgar","rol":"Freelancer","info":"hii i amdjsdjn sdh sdk cu u sdku jknksdn hii i amdjsdjn sdh sdk cu u sdku jknksdn hii i amdjsdjn sdh sdk cu u sdku jknksdn"},
	{"id":2,"name":"Ayush Panchal","rol":"CEO","info":"hii i amdjsdjn sdh sdk cu u sdku jknksdn hii i amdjsdjn sdh sdk cu u sdku jknksdn hii i amdjsdjn sdh sdk cu u sdku jknksdn"},
	{"id":3,"name":"Sanskar Bandgar","rol":"designer","info":"hii i amdjsdjn sdh sdk cu u sdku jknksdn hii i amdjsdjn sdh sdk cu u sdku jknksdn hii i amdjsdjn sdh sdk cu u sdku jknksdn"},
	{"id":4,"name":"Sanskar Bandgar","rol":"client","info":"hii i amdjsdjn sdh sdk cu u sdku jknksdn hii i amdjsdjn sdh sdk cu u sdku jknksdn hii i amdjsdjn sdh sdk cu u sdku jknksdn"}
]

export function Feedback(){
	return(
		<section className={style.center} id="feedback">
			<span className={style.muted} data-aos="fade-up">TESTIMONIALS</span>
			<h3 data-aos="fade-up">What they are saying about us.</h3>
			<div className={style.grid}>
				{feedback.map((f)=>(
					<div className={style.team} style={{padding:"2rem 0rem"}} key={f.id} data-aos="fade-up"  data-aos-delay="300">
						<div className="d-flex text-center gap-1" style={{
							justifyContent:"center",
							padding:"1rem 0rem",
							color:'var(--primary)'
							}}>
							
						</div>
						<p className="px-3">{f.info}</p>
						<Image width={100} height={100} src="/user.jpg" style={{width:"100px",borderRadius:"50px"}} alt="img" />
						<h5 style={{color:"var(--primary)"}}>{f.name}</h5>
						<span className={style.darkmuted}>{f.rol}</span>
					</div>
				))}
			</div>
		</section>
		)
}

export function Subscribe(){
	return(
	<section className={style.subscribe}>
		<span className={style.muted}>SUBSCRIBE</span>
		<h4>Get our first notifications! </h4>
		<form action='https://api.web3forms.com/submit' method='POST'>
		<input type="hidden" name="access_key" value="c4dd928f-3de9-49e7-aef1-a8dcb686fdfd" />
			<div className={style.flex}>
			<input type="email" className="form-control text-center" name='email' placeholder='Enter your Email...'/>
			<button className="btn px-5" style={{
				backgroundColor:"var(--primary)",
				color:"var(--text-white)"
				}}
				type="submit">Subscribe</button>
				</div>
		</form>
		</section>
	)
}

export function Gap(){
	return(
		<div><br/><br/></div>
	)
}
