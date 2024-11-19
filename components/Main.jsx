"use client"
import style from "../styles/Navbar.module.css";
import { useEffect } from "react";

const Main = ({children}) =>{
	useEffect(()=>{
		if(typeof window !== "undefined"){
			require('aos/dist/aos.js');
		}
	});
	return(
		<main className={style.outMain} style={{
			backgroundColor:"var(--outer-background)",
			padding:"1rem 1rem",
			color:"#ffffff"
		}}>{children}</main>
	)
}

export default Main;

