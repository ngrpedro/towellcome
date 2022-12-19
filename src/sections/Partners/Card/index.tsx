import styles from "./index.module.sass";
import { ArrowRight, Star, User } from "phosphor-react";
import { Link } from "react-router-dom";

type Props = {};

const index = (props: Props) => {
  return (
    <div className={styles.box}>
      <div className={styles.cardHeader}>
        <div className={styles.avatar}>
          <User size={55} />
        </div>

        <div className={styles.headerContent}>
          <div className={styles.headerMain}>
            <h1 className={styles.name}>Pietro Ramos</h1>
            <p className={styles.area}>Piscólogo</p>
          </div>

          <div className={styles.starts}>
            <Star size={18} />
            <Star size={18} />
            <Star size={18} />
            <Star size={18} />
            <Star size={18} />
          </div>

          <div className={styles.tags}>
            <span>Homens Trans</span>
            <span>LGBTQIAP+</span>
          </div>
        </div>
      </div>

      <span className={styles.bio}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ratione
        minus deserunt eum quo aut reiciendis veniam saepe temporibus,
        cupiditate exercitationem. Delectus ducimus nesciunt nisi obcaecati
        tenetur est repellendus culpa!
      </span>
      <Link to="/partnerProfile/:id">
        <button className={styles.button}>
          Saber mais
          <ArrowRight size={18} />
        </button>
      </Link>
    </div>
  );
};

export default index;
