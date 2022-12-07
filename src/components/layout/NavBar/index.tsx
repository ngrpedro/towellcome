import styles from "./index.module.sass";
type Props = {};

const index = (props: Props) => {
  return (
    <div className={styles.box}>
      <div className={styles.container}>
        <h1>Wellcome</h1>

        <div>
          <ul>
            <li>Inicio</li>
            <li>Saiba mais</li>
            <li>Sobre nós</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default index;
