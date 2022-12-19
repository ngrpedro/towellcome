import { Avatar, Divider } from "@chakra-ui/react";
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
        <div>
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
        </div>

        {/* user main content */}
        <div className={styles.mainContent}>
          {/* tags */}
          <div className={styles.userTags}>
            <div className={styles.tag}>
              <span>Espaço de acolhimento</span>
            </div>
            <div className={styles.tag}>
              <span>LGBTQIAP+</span>
            </div>
            <div className={styles.tag}>
              <span>Adultos</span>
            </div>
            <div className={styles.tag}>
              <span>Mulheres</span>
            </div>
          </div>
          <Divider />

          {/* bio */}
          <div className={styles.bio}>
            <h1>Biografia</h1>
            <div className={styles.texts}>
              <div className={styles.text}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias
                repellendus quisquam voluptates reiciendis rerum, quas laborum
                recusandae facilis placeat nequeut.
              </div>
              <div className={styles.text}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias
                repellendus quisquam voluptates reiciendis rerum, quas laborum
                recusandae facilis placeat neque temporibus molestiae pariatur
                dolorum at, nobis eos labore illo ut. Temporibus molestiae
                pariatur dolorum at, nobis eos labore illo .
              </div>
              <div className={styles.text}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias
                repellendus quisquam voluptates reiciendis rerum, quas laborum
                recusandae facilis placeat neque temporibus molestiae pariatur
                dolorum at, nobis eos labore illo ut. Endis rerum, quas laborum
                recusandae facilis placeat neque temporibus molestiae pariatur
                dolorum at, nobis eos labore illo ut.
              </div>
            </div>
          </div>
          <Divider />

          {/* galeria */}
          <div className={styles.galery}>
            <div className={styles.galeryFirstImage}></div>
            <div className={styles.galeryMinis}>
              <div className={styles.galeryMini}></div>
              <div className={styles.galeryMini}></div>
              <div className={styles.galeryMini}></div>
              <div className={styles.galeryMini}></div>
            </div>
          </div>
          <Divider />
        </div>
      </div>
    </div>
  );
};

export default index;
