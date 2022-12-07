import styles from "./index.module.sass";
import Filters from "./Filters";
import Card from "./Card";

type Props = {};

const index = (props: Props) => {
  return (
    <div className={styles.container}>
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
