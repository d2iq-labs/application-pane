import React from "react";
import Head from "next/head";
import {
  AppChrome,
  Container,
  HeadingText1,
  Link,
  SpacingBox,
  Text,
} from "@d2iq/ui-kit";

import { Header } from "../components/Header";

export default function Home() {
  return (
    <AppChrome headerBar={<Header />}>
      <Head>
        <title>DKP Application Pane</title>
        <meta
          name="description"
          content="A single space to view your application"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Container>
        <SpacingBox>
          <HeadingText1>
            Welcome! This page will not exist in real life.
          </HeadingText1>
          <SpacingBox side="top">
            <Text size="l">
              But you should try a url like{" "}
              <Link>
                <code>{"/${namespace}/${deployment}"}</code>
              </Link>
            </Text>
          </SpacingBox>
        </SpacingBox>
      </Container>
    </AppChrome>
  );
}
