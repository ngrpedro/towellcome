import styles from "./index.module.sass";

type Props = {};

const index = (props: Props) => {
  return (
    <div className="">
      <div className="">
        <div className="">
          <div className="">
            <h1 className={styles.title}>
              Vamos conversar. Nos mande uma mensagem!
            </h1>
            <p className={styles.subtitle}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde
              excepturi velit eligendi ut sit.
            </p>
          </div>

          <div className="">
            <button className="">Nosso whatsapp</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
