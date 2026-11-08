import { comingSoonStyles as a } from "./../assets/dummyStyles";
import CS1 from "../../assets/CS1.png";
import CS2 from "../../assets/CS2.png";
import CS3 from "../../assets/CS3.png";
import CS4 from "../../assets/CS4.png";
import CS5 from "../../assets/CS5.png";
const watches = [
  {
    id: 1,
    name: "Norqain Independence",
    price: 619000,
    imgUrl: CS1,
  },
  {
    id: 2,
    name: "Zenith Chronomaster",
    price: 1069200,
    imgUrl: CS2,
  },
  {
    id: 3,
    name: "Jacob & Co. Epic X ",
    price: 3100000,
    imgUrl: CS3,
  },
  {
    id: 4,
    name: "Bvlgari Octo",
    price: 2450000,
    imgUrl: CS4,
  },
  {
    id: 5,
    name: "Louis Erard Excellence",
    price: 3300000,
    imgUrl: CS5,
  },
];

// Use the format function from styles
const formatINR = comingSoonStyles.formatINR;

const ComingSoonWatchesPage = () => {
  return (
    <section className={a.section}>
        <div className={a.container}>
            <div className={a.headerContainer}>
                <div className={a.titleContainer}>
                    <h2 className={a.title} style={a.titleStyle}>New Arrivals</h2>
                    <p className={a.subtitle}>Coming Soon</p>

                </div>
                <a href="/watches" className={a.viewAllLink}>View All</a>
            </div>
            {/* watches row */}
        </div>
    </section>
  );
};

export default ComingSoonWatchesPage;
