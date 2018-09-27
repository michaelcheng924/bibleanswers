import { map } from "lodash";

const references = {
  1: ""
};

function textRef(number) {
  return `<superscript><a href="#footnote-${number}" id="text-${number}">[${number}]</a></superscript>`;
}

const content = `
  <div class="writing">
    <h3></h3>

    ${renderRefs()}
  </div>
`;

const post = {
  title: "",
  subtitle: "",
  imageUrl: "/images/.png",
  imagePosition: "79% 50%",
  url: "/answers/",
  added: "",
  content
};

export default post;
