import { Avatar } from "@chakra-ui/react";
import {
  Envelope,
  FacebookLogo,
  InstagramLogo,
  Star,
  WhatsappLogo,
} from "phosphor-react";
import Breadcrumb from "../../components/Breadcrumb";
import styles from "./index.module.sass";

const index = () => {
  return (
    <div className={styles.container}>
      <Breadcrumb>Profile user</Breadcrumb>

      {/* grid */}
      <div className={styles.gridContent}>
        {/* user sidebar  */}
        <div className={styles.userSideBar}>
          <div>
            <Avatar size="2xl" />
            <div className={styles.sidebarTitle}>
              <h1>Espaço Santo Agostinho</h1>
              <span>Endereço xxx - XX</span>
            </div>
          </div>

          <div className={styles.area}>
            <span>Espaço de acolhimento</span>
          </div>

          <div className={styles.starts}>
            <Star size={26} />
            <Star size={26} />
            <Star size={26} />
            <Star size={26} />
            <Star size={26} />
          </div>

          <div className={styles.sidebarSocialMedias}>
            <InstagramLogo size={32} />
            <FacebookLogo size={32} />
            <WhatsappLogo size={32} />
            <Envelope size={32} />
          </div>
        </div>

        {/* user main content */}
        <div></div>
      </div>
    </div>
  );
};

export default index;
