export const SEO = ({ pageDescription, pageTitle, pageLink }) => {
  return (
    <>
      <title>{pageTitle}</title>
      {/* Basic meta */}
      <meta name="description" content={pageDescription} />

      {/* Open Graph (social previews) */}
      <meta property="og:title" content="Hergis Bridge Limited Company" />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_GH" />
      <meta
        property="og:image"
        content="https://www.hergisbridge.com/og-image.jpg"
      />
      <meta
        property="og:url"
        content={`https://www.hergisbridge.com/${pageLink}`}
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta
        name="twitter:image"
        content="https://www.hergisbridge.com/og-image.jpg"
      />
    </>
  );
};
