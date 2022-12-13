import Image from "next/image";
import { useRouter } from "next/router";
import { PageHeader, Flex } from "@d2iq/ui-kit";

import styles from "./Header.module.css";

export const Header = () => {
  const { basePath } = useRouter();
  return (
    <PageHeader
      className={styles.header}
      breadcrumbElements={[
        <Flex key="header" align="center" gutterSize="m">
          <Image
            src={`${basePath}/d2iq.svg`}
            alt="D2iQ Logo"
            width={32}
            height={32}
          />{" "}
          DKP Application Pane
        </Flex>,
      ]}
    ></PageHeader>
  );
};
