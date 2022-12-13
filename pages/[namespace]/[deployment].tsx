import React from "react";
import { NextPageContext } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import {
  AppChrome,
  Container,
  SpacingBox,
  GridList,
  LinkCard,
  HeadingText2,
  Flex,
  ConfigurationMap,
  ConfigurationMapRow,
  ConfigurationMapLabel,
  ConfigurationMapValue,
  Text,
} from "@d2iq/ui-kit";

import { Header } from "../../components/Header";

interface DeploymentProps {
  namespace: string;
  deployment: string;
}

export default function Deployment({ namespace, deployment }: DeploymentProps) {
  const { basePath } = useRouter();

  const dashboards = [
    {
      title: "Kubernetes Dashboard",
      icon: "/kubernetesLogo.svg",
      path: `/dkp/kubernetes/#/deployment/${namespace}/${deployment}?namespace=${namespace}`,
    },
    {
      title: "Grafana",
      icon: "/grafanaLogo.svg",
      path: `/dkp/grafana/d/a164a7f0339f99e89cea5cb47e9be617/kubernetes-compute-resources-workload?orgId=1&refresh=10s&var-datasource=default&var-cluster=&var-namespace=${namespace}&var-type=deployment&var-workload=${deployment}`,
    },
    {
      title: "Grafana Logging",
      icon: "/grafanaLogo.svg",
      path: `/dkp/logging/grafana/d/fRIvzUZMz/logging-dashboard-via-loki?orgId=1&refresh=5s&var-datasource=Loki&var-container=prometheus-adapter&var-pod=All&var-stream=All&var-searchable_pattern=`,
    },
  ];

  const configuration = [
    { label: "Deployment name", value: deployment },
    { label: "Kubernetes Namespace", value: namespace },
  ];

  return (
    <>
      <Head>
        <title>DKP Application Pane</title>
        <meta
          name="description"
          content="A single space to view your application"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <AppChrome headerBar={<Header />}>
        <Container>
          <SpacingBox spacingSizePerSide={{ top: "xl", bottom: "xl" }}>
            <SpacingBox side="bottom">
              <ConfigurationMap>
                {configuration.map(({ label, value }) => {
                  return (
                    <ConfigurationMapRow key={value}>
                      <ConfigurationMapLabel>{label}</ConfigurationMapLabel>
                      <ConfigurationMapValue>{value}</ConfigurationMapValue>
                    </ConfigurationMapRow>
                  );
                })}
              </ConfigurationMap>
            </SpacingBox>
            <SpacingBox spacingSizePerSide={{ top: "xl", bottom: "l" }}>
              <Text>
                Visit any of the following dashboards to check the health of
                your application and debug issues you may be experiencing.
              </Text>
            </SpacingBox>
            <GridList columnCount={3}>
              {dashboards.map(({ title, icon, path }) => {
                return (
                  <LinkCard key={path} linkDescription={title} url={path}>
                    <Flex align="center" gutterSize="s">
                      <Image
                        src={`${basePath}/${icon}`}
                        alt={title}
                        width={32}
                        height={32}
                      />
                      <HeadingText2>{title}</HeadingText2>
                    </Flex>
                  </LinkCard>
                );
              })}
            </GridList>
          </SpacingBox>
        </Container>
      </AppChrome>
    </>
  );
}

export async function getServerSideProps(context: NextPageContext) {
  return {
    props: {
      ...context.query,
    }, // will be passed to the page component as props
  };
}
