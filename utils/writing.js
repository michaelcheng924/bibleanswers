import { map } from "lodash";

export function boldNumbers(text) {
  const splitText = text.split(" ");
  const mappedText = splitText.map(word => {
    if (Number(word) < 100) {
      return `<strong>${word}</strong>`;
    }

    return word;
  });

  return mappedText.join(" ");
}

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

export function getModifiedContent(post) {
  return getContentWithReferences(post.html || "", post.references || "");
}

function getContentWithReferences(content, references) {
  if (!references) {
    return content;
  }

  const matches = content.match(/\[[0-9]+\]/g);

  if (matches) {
    content = matches.reduce((result, match, index) => {
      const number = index + 1;

      return result.replace(
        match,
        `<span class="superscript"><a href="#footnote-${number}" id="text-${number}">[${number}]</a></span>`
      );
    }, content);
  }

  return `
    ${content}

    <div class="writing">
      <h4>References</h4>

      <ol class="first">
        ${references
          .split("\n")
          .map((reference, index) => {
            const number = index + 1;

            return `<li><a class="reference-arrow" href="#text-${number}" id="footnote-${number}">^</a> ${reference}</li>`;
          })
          .join("\n")}
      </ol>
    </div>
  `;
}
