import Head from "next/head";
import React from "react";

interface SEOProps {
  desc?: string;
  title?: string;
}

export default function SEO(props: SEOProps) {
  const title = props.title ? props.title + " | Valorant Colored Chat" : "Valorant Colored Chat";
  const desc =
    props.desc ||
    "Write colored chat messages in Valorant!  Spice up your game with rainbow or colored messages.";
  return (
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1"
      />
      <meta charSet="utf-8" />
      <title>{title}</title>
      {/* <!-- Search Engine --> */}
      <meta name="description" content={desc} />
      <meta name="image" content="https://valorant.anga.blue/logo.png" />
      {/* <!-- Schema.org for Google --> */}
      <meta itemProp="name" content={title} />
      <meta itemProp="description" content={desc} />
      <meta itemProp="image" content="https://valorant.anga.blue/logo.png" />
      {/* <!-- Twitter --> */}
      <meta name="twitter:card" content="summary" />
      <meta
        name="twitter:title"
        content={title}
      />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:site" content="@anga.blue" />
      <meta name="twitter:creator" content="@anga.blue" />
      <meta
        name="twitter:image:src"
        content="https://valorant.anga.blue/logo.png"
      />
      {/* <!-- Open Graph general (Facebook, Pinterest & Google+) --> */}
      <meta name="og:title" content={title} />
      <meta name="og:description" content={desc} />
      <meta name="og:image" content="https://valorant.anga.blue/logo.png" />
      <meta name="og:url" content="https://valorant.anga.blue" />
      <meta
        name="og:site_name"
        content={title}
      />
      <meta name="fb:admins" content="angablue" />
      <meta name="og:type" content="website" />
      {/* <!-- Favicon --> */}
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#ff9ff8" />
      <meta name="msapplication-TileColor" content="#ff9ff8" />
      <meta name="theme-color" content="#ff9ff8" />
    </Head>
  );
}
