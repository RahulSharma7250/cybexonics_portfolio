// import Image from "next/image";
// import { FaCheckCircle } from "react-icons/fa";
// import style from "../page.module.css";

// const Pricing = () => {
//   return (
//     <section className={style.prices} id="pricing">
//       <span className={style.muted} data-aos="fade-up">
//         Prices
//       </span>
//       <h3 data-aos="fade-up">Check our Pricing</h3>
//       <div className={style.price}>
//         <div className={style.grid}>
//           <div className={style.card} data-aos-delay="300" data-aos="fade-up">
//             <span className={style.muted}>Standard Plan</span>
//             <p style={{ marginBottom: "30px" }} className={style.darkmuted}>
//               INR<b style={{ color: "var(--text)", fontSize: "50px" }}>19,999</b>
//             </p>
//             <Image
//               src="/pricing-starter.png"
//               width={120}
//               height={100}
//               style={{ marginBottom: "10px" }}
//               alt="img"
//             />
//             <br />
//             <p style={{textAlign:"left"}}>
//               <span style={{ color: "#00ff00" }}><FaCheckCircle /> </span>PortFolio Website<br/>
// 			  <span style={{ color: "#00ff00" }}><FaCheckCircle /> </span>Free Maintenance 25 Days<br/>
// 			  <span style={{ color: "#00ff00" }}><FaCheckCircle /> </span>Max. 2 Pages<br/>
// 			  <i className="line"><span><FaCheckCircle /> </span>Free Domain</i><br/>
// 			  <i className="line"><span><FaCheckCircle /> </span>SEO</i><br/>
// 			  <i className="line"><span><FaCheckCircle /> </span>SMI</i>
//             </p>
//           </div>
//           <div className={style.card} data-aos-delay="400" data-aos="fade-up">
//             <span className={style.muted}>Pro Plan</span>
//             <p style={{ marginBottom: "30px" }} className={style.darkmuted}>
//               INR<b style={{ color: "var(--text)", fontSize: "50px" }}>24,999</b>
//             </p>
//             <Image
//               src="/pricing-business.png"
//               width={120}
//               height={100}
//               style={{ marginBottom: "10px" }}
//               alt="img"
//             />
//             <br />
//             <p style={{textAlign:"left"}}>
//               <span style={{ color: "#00ff00" }}><FaCheckCircle /> </span>Co-Operative website<br/>
// 			  <span style={{ color: "#00ff00" }}><FaCheckCircle /> </span>Free Maintenance 45 Days<br/>
// 			  <span style={{ color: "#00ff00" }}><FaCheckCircle /> </span>Max. 6 Pages<br/>
// 			  <span style={{ color: "#00ff00" }}><FaCheckCircle /> </span>Free Domain upto 1000INR<br/>
// 			  <span style={{ color: "#00ff00" }}><FaCheckCircle /> </span>SEO<br/>
// 			  <i className="line"><span><FaCheckCircle /> </span>SMI</i>
//             </p>
//           </div>
//           <div className={style.card} data-aos-delay="500" data-aos="fade-up">
//             <span className={style.muted}>Advance Plan</span>
//             <p style={{ marginBottom: "30px" }} className={style.darkmuted}>
//               INR<b style={{ color: "var(--text)", fontSize: "50px" }}>34,999</b>
//             </p>
//             <Image
//               src="/pricing-ultimate.png"
//               width={120}
//               height={100}
//               style={{ marginBottom: "10px" }}
//               alt="img"
//             />
//             <br />
//             <p style={{textAlign:"left"}}>
//               <span style={{ color: "#00ff00" }}><FaCheckCircle /> </span>E-Commerce website<br/>
// 			  <span style={{ color: "#00ff00" }}><FaCheckCircle /> </span>Free Maintenance 75 Days<br/>
// 			  <span style={{ color: "#00ff00" }}><FaCheckCircle /> </span>Max. 10 Pages<br/>
// 			  <span style={{ color: "#00ff00" }}><FaCheckCircle /> </span>Free Domain<br/>
// 			  <span style={{ color: "#00ff00" }}><FaCheckCircle /> </span>SEO<br/>
// 			  <span style={{ color: "#00ff00" }}><FaCheckCircle /> </span>SMI<br/>
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Pricing;


import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import styles from "../page.module.css";

const plans = [
  {
    title: "Standard Plan",
    price: "19,999",
    image: "/pricing-starter.png",
    features: [
      "PortFolio Website",
      "Free Maintenance 25 Days",
      "Max. 2 Pages",
    ],
    excluded: ["Free Domain", "SEO", "SMI"],
    description:
      "Perfect for individuals or small businesses who need a simple yet effective website.",
  },
  {
    title: "Pro Plan",
    price: "24,999",
    image: "/pricing-business.png",
    features: [
      "Co-Operative Website",
      "Free Maintenance 45 Days",
      "Max. 6 Pages",
      "Free Domain upto 1000INR",
      "SEO",
    ],
    excluded: ["SMI"],
    description:
      "Ideal for mid-sized businesses seeking a professional online presence.",
  },
  {
    title: "Advance Plan",
    price: "34,999",
    image: "/pricing-ultimate.png",
    features: [
      "E-Commerce Website",
      "Free Maintenance 75 Days",
      "Max. 10 Pages",
      "Free Domain",
      "SEO",
      "SMI",
    ],
    excluded: [],
    description:
      "The ultimate package for large businesses and e-commerce platforms.",
  },
];

const Pricing = () => {
  return (
    <section className={styles.prices} id="pricing">
      <span className={styles.muted} data-aos="fade-up">
        Prices
      </span>
      <h3 data-aos="fade-up">Check our Pricing</h3>
      <div className={styles.priceGrid}>
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`${styles.card} ${styles.flipCard}`}
            data-aos-delay={`${300 + index * 100}`}
            data-aos="fade-up"
          >
            <div className={`${styles.cardFace} ${styles.front}`}>
              <span className={styles.muted}>{plan.title}</span>
              <p className={styles.price}>
                INR<b>{plan.price}</b>
              </p>
              <Image
                src={plan.image}
                width={120}
                height={100}
                alt={`${plan.title} image`}
              />
              <p style={{ textAlign: "left" }}>
                {plan.features.map((feature, idx) => (
                  <span key={idx}>
                    <span style={{ color: "#00ff00" }}>
                      <FaCheckCircle />
                    </span>{" "}
                    {feature}
                    <br />
                  </span>
                ))}
                {plan.excluded.map((excl, idx) => (
                  <i className="line" key={idx}>
                    <span style={{ color: "#00ff00" }}>
                      <FaCheckCircle />
                    </span>{" "}
                    {excl}
                    <br />
                  </i>
                ))}
              </p>
            </div>
            <div className={`${styles.cardFace} ${styles.back}`}>
              <h4>{plan.title}</h4>
              <p>{plan.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
