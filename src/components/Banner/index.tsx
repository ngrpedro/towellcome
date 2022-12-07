import { Confetti } from "phosphor-react";
import styles from "./index.module.sass";

type Props = {};

const index = (props: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <Confetti size={22} color="white" />
        <p>
          <strong>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </strong>
          <span>
            {" "}
            Hic facilis, natus earum eos molestias sit magnam minus pariatur.
          </span>
        </p>
      </div>
    </div>
  );
};

export default index;
