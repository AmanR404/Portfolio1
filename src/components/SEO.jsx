import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, type = "website" }) {
  return (
    <Helmet>
      { /* Standard HTML tags */ }
      <title>{title}</title>
      <meta name='description' content={description} />
      
      { /* Facebook / LinkedIn Open Graph tags */ }
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      
      { /* Twitter tags */ }
      <meta name="twitter:creator" content="Aman Rai" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
}
