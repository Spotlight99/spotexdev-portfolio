import Head from "next/head";

export default function SEO({
  title = "Emmanuel Ihejirika — Full-Stack Web Developer",
  description = "Full-stack web developer specializing in Next.js, React, Node.js, Django, and modern web technologies.",
  url = "https://yourdomain.com",
}) {
  return (
    <Head>
      <title>{title}</title>

      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />
      <meta name="google-site-verification" content="re1q_A6Mg7poCnv5kFfSahwwG9IU4TyMQwG5wTVwOV4" />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
  );
}
