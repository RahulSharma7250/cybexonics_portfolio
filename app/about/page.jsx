import style from "../page.module.css";

import {About,Mission} from "../components/About";
import Main from "@/components/Main";

export default function about(){
	return(
		<Main>
			<div className={style.pageMain}>
			<About />
			<Mission />
			</div>
		</Main>
	)
}