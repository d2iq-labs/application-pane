import Image from "next/image";
import { PageHeader, Flex } from "@d2iq/ui-kit";

import styles from "./Header.module.css";

export const Header = () => {
  return (
    <PageHeader
      className={styles.header}
      breadcrumbElements={[
        <Flex key="header" align="center" gutterSize="m">
          <Image src="/d2iq.svg" alt="D2iQ Logo" width={32} height={32} /> DKP
          Application Pane
        </Flex>,
      ]}
    ></PageHeader>
  );
};
