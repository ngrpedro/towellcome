import styles from "./index.module.sass";
import { ArrowRight } from "phosphor-react";

type Props = {};

const index = (props: Props) => {
  return (
    <div className={styles.box}>
      <div className={styles.cardHeader}>
        <h1 className={styles.name}>Pietro Ramos</h1>

        <p className={styles.area}>Piscólogo</p>
      </div>
      <span className={styles.city}>Araçatuba</span>

      <button className={styles.button}>
        Contato
        <ArrowRight size={18} />
      </button>
    </div>
  );
};

export default index;
