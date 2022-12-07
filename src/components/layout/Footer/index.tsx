import styles from "./index.module.sass";
import { InstagramLogo, WhatsappLogo, EnvelopeSimple } from "phosphor-react";

type Props = {};

const index = (props: Props) => {
  return (
    <div className={styles.box}>
      <div className={styles.container}>
        <h1>Wellcome</h1>

        <div>
          <ul className="flex items-center justify-center gap-4">
            <li>
              <InstagramLogo size={32} color="white" />
            </li>
            <li>
              <WhatsappLogo size={32} color="white" />
            </li>
            <li>
              <EnvelopeSimple size={32} color="white" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default index;
