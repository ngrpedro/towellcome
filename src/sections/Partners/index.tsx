import styles from "./index.module.sass";
import Filters from "./Filters";

type Props = {};

const index = (props: Props) => {
  return (
    <div className={styles.container}>
      <Filters />
    </div>
  );
};

export default index;
