import React from "react";

import { Container } from "./Container";

const ScriptureRef = ({ data }) => {
  return data.passages.map((passage, index) => {
    const canonical = data.passage_meta[index].canonical;
    let passageText = passage.replace(canonical, "").replace("(ESV)", "");

    const [passageTop, footnotesBottom] = passageText.split("Footnotes");

    const passageFootnotes = passageTop.match(/\(\d+\)/g) || [];
    const passageNumbers = passageTop.match(/\[\d+\]/g) || [];
    const passageSections = passageTop.match(/[a-zA-Z ]+\n\n/g) || [];

    let scriptureTopPassage = passageFootnotes.reduce((result, match) => {
      result = result.replace(
        match,
        `<span class="scripture-passage-footnote">${match
          .replace("(", "")
          .replace(")", "")}</span>`
      );

      return result;
    }, passageTop);

    scriptureTopPassage = passageNumbers.reduce((result, match) => {
      result = result.replace(
        match,
        `<strong>${match.replace("[", "").replace("]", "")}</strong>`
      );

      return result;
    }, scriptureTopPassage);

    scriptureTopPassage = passageSections.reduce((result, match) => {
      result = result.replace(match, `<div><strong>${match}</strong></div>`);

      return result;
    }, scriptureTopPassage);

    let scriptureBottomFootnotes = null;

    if (footnotesBottom) {
      const footnoteNumbers = footnotesBottom.match(/\(\d+\)/g);

      scriptureBottomFootnotes = footnoteNumbers.reduce(
        (result, match, index) => {
          result = result.replace(
            match,
            `<span class="scripture-footnumber-number">${match
              .replace("(", "")
              .replace(")", ".")}</span>`
          );

          return result;
        },
        footnotesBottom
      );
    }

    return (
      <Container key={data.passage_meta[index].canonical}>
        <div style={{ padding: "5px 10px" }}>
          <p>
            <strong>{`${canonical} (ESV)`}</strong>
          </p>
          <p dangerouslySetInnerHTML={{ __html: scriptureTopPassage }} />
          {footnotesBottom ? (
            <div>
              <p className="small">
                <em>Footnotes</em>
              </p>
              <p
                className="nomargin small"
                dangerouslySetInnerHTML={{
                  __html: scriptureBottomFootnotes
                }}
              />
            </div>
          ) : null}
        </div>

        <style jsx>{`
          p {
            font-size: 16px;
            line-height: 1.25;
            margin: 0;
            margin-top: 8px;
          }

          .nomargin {
            margin-top: 0;
          }

          .small {
            font-size: 13px;
          }
        `}</style>
      </Container>
    );
  });
};

export default ScriptureRef;
