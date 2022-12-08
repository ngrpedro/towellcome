import styles from "./index.module.sass";
import Filters from "./Filters";
import Card from "./Card";

type Props = {};

const index = (props: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Encontre profissionais da saúde e locais de apoio para nós!</h1>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo harum
          error itaque.
        </span>
      </div>
      <Filters />

      <div className={styles.cards}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default index;
