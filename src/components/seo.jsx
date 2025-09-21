export const SEO = ({ pageDescription, pageTitle, pageLink }) => {
  return (
    <>
      <title>{pageTitle}</title>
      {/* Basic meta */}
      <meta name="description" content={pageDescription} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

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

      {/* Canonical - update to your real site URL */}
      <link rel="canonical" href={`https://www.hergisbridge.com/${pageLink}`} />

      {/* Optional structured data (JSON-LD) */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Hergis Bridge Limited Company",
          url: "https://www.hergisbridge.com",
          logo: "https://www.hergisbridge.com/og-image.jpg",
          sameAs: [],
          contactPoint: [
            {
              "@type": "ContactPoint",
              telephone: "+233204188663",
              contactType: "customer service",
              areaServed: "GH",
              availableLanguage: ["English"],
            },
          ],
          address: {
            "@type": "PostalAddress",
            streetAddress: "Alaska Junction",
            addressLocality: "Sunyani",
            addressRegion: "Bono Region",
            addressCountry: "GH",
          },
          description: pageDescription,
        })}
      </script>
    </>
  );
};
