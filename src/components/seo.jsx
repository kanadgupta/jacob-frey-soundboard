import * as React from "react";
import { Helmet } from "react-helmet-async";

const Seo = () => {
  const url = "https://jacobfrey.live";
  const seo = {
    "glitch-help-instructions":
      "For a custom domain, change the 'url' parameter from 'glitch-default' to your domain _without_ a traling slash, like 'https://www.example.com'",
    title: "bootlicker soundboard",
    description:
      "a soundboard of some of the stupid shit that jacob frey (the mayor of minneapolis) says.",
    url,
    image: `${url}/logo.png`,
    twitter: "@kanadgupta",
  };

  // If url is set to 'glitch-default', we use the hostname for the current page
  // Otherwise we use the value set in seo.json
  // check this works in build

  return (
    <Helmet>
      <title>{seo.title}</title>

      <meta name="description" content={seo.description} />
      <meta name="robots" content="index,follow" />
      <link rel="canonical" href={seo.url} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={seo.url} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content={seo.twitter} />
      <meta name="twitter:image" content={seo.image} />
    </Helmet>
  );
};

export default Seo;
