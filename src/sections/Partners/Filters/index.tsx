import styles from "./index.module.sass";
import { Select } from "@chakra-ui/react";

type Props = {};

const index = (props: Props) => {
  return (
    <div className={styles.filters}>
      <Select placeholder="Cidade">
        <option value="option1">Araçatuba</option>
        <option value="option2">Birigui</option>
      </Select>

      <Select placeholder="Tipo de Atendimento">
        <option value="option1">Psocológico</option>
        <option value="option2">Clinico Geral</option>
        <option value="option3">Casa de acolhimento</option>
      </Select>
    </div>
  );
};

export default index;
