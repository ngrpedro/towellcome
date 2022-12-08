import styles from "./index.module.sass";

type Props = {};

const index = (props: Props) => {
  return (
    <div className={styles.box}>
      <div className={styles.background}></div>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.texts}>
            <h1 className={styles.title}>
              Quer fazer parte do grupo Ecossistema Plural?! Nos mande uma
              mensagem!
            </h1>
            <p className={styles.subtitle}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde
              excepturi velit eligendi ut sit.
            </p>
          </div>
          <div className={styles.button}>
            <button className="">Nosso whatsapp</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
