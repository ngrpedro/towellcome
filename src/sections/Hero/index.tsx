import styles from "./index.module.sass";
import App from "./../../App";

type Props = {};

const index = (props: Props) => {
  return (
    <div className={styles.container}>
      <p className={styles.texttohover}>CUIDE-SE</p>

      <h1 className={styles.main_text}>
        Está procurando algum serviço de acolhimento <span>LGBTQIAP+</span>? De
        uma olhada nos nossos parceiros!
      </h1>

      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt eaque
        dolore impedit, dolorem corporis nisi doloremque quaerat magni expedita
        sed beatae quia animi laborum itaque, neque vel facilis distinctio.
        Repudiandae!
      </p>

      <button className={styles.button}>Pesquisar</button>
    </div>
  );
};

export default index;
