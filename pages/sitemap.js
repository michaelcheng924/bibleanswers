import fetch from "isomorphic-unfetch";

const Sitemap = () => null;

Sitemap.getInitialProps = ({ res }) => {
  fetch("https://bibleanswersapi.herokuapp.com/sitemap")
    .then(r => r.json())
    .then(sitemap => {
      res.set("Content-Type", "text/xml");
      res.send(sitemap);
    });
  return {};
};

export default Sitemap;
