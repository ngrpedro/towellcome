import Breadcrumb from "../../components/Breadcrumb";
import styles from "./index.module.sass";

const index = () => {
  return (
    <div className={styles.container}>
      <Breadcrumb>Profile user</Breadcrumb>
    </div>
  );
};

export default index;
