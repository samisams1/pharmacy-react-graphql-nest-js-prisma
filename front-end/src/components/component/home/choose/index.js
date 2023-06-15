import { Heading } from "@chakra-ui/layout";
import styles from "./choose.module.css";

// Move to constants
const db = [
  {
    img: "https://assets.pharmeasy.in/web-assets/dist/4d2f7c48.svg",
    title: "32 Million+",
    para: "Registered users as of Mar 31, 2022"
  },
  {
    img: "https://assets.pharmeasy.in/web-assets/dist/92c372bb.svg",
    title: "36 Million+",
    para: "Orders on Pharmeasy till date"
  },
  {
    img: "https://assets.pharmeasy.in/web-assets/dist/773ae9c5.svg",
    title: "99000+",
    para: "Unique items sold last 3 months"
  },
  {
    img: "https://assets.pharmeasy.in/web-assets/dist/f2d557d3.svg",
    title: "19500+",
    para: "Pin codes serviced last 3 months"
  }
];

const Choose = () => {
  return (
    <div className={styles.container}>
      <Heading size="md" m="1rem" style={{ color: "#55585e" }}>
        Why Choose Us?
      </Heading>
      <div className={styles.flexBox}>

        {/* Shift it to different functional component */}
        {db.map((el) => {
          return (
            <div key={el.title}>
              {/* Try to not skip alt property , always keep gaps keeping mobile and web view in mind */}
              <img style={{ marginBottom: "30px" }} src={el.img} alt="" />
              <Heading
                size="md"
                style={{
                  color: "#55585e",
                  marginBottom: "16px"
                }}
              >
                {el.title}
              </Heading>
              <div
                style={{
                  fontSize: "15px",
                  fontWeight: "bold",
                  color: "#55585e"
                }}
              >
                {el.para}
              </div>
            </div>
          );
        })}
        
      </div>
    </div>
  );
};

export  default  Choose ;