import { map } from "lodash";

export function textRef(number) {
  return `<span class="superscript"><a class="reference" href="#footnote-${number}" id="text-${number}">[${number}]</a></span>`;
}

export function renderRefs(references) {
  return `
    <h4>References</h4>

    <ol class="first">
      ${map(references, (reference, number) => {
        return `<li><a class="reference-arrow" href="#text-${number}" id="footnote-${number}">^</a> ${reference}</li>`;
      }).join(" ")}
    </ol>
  `;
}
