import fetch from "isomorphic-unfetch";

const Sitemap = ({ sitemap }) => sitemap;

Sitemap.getInitialProps = async ({ res }) => {
  res.set("Content-Type", "text/xml");
  const response = await fetch(`http://bibleanswersapi.herokuapp.com/sitemap`);
  const data = await response.json();

  return {
    sitemap: data.content
  };
};

export default Sitemap;
