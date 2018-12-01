import React, { useState, useEffect } from "react";
import axios from "axios";
import Popover from "./Popover";

import ScriptureRef from "./ScriptureRef";

const ConfessionParagraph = ({ paragraph, index }) => {
  const [activeScripture, setActiveScripture] = useState(null);
  const [activeScriptureText, setActiveScriptureText] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.addEventListener("click", handleClick);
    document.addEventListener("touchstart", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
      document.removeEventListener("touchstart", handleClick);
    };
  });

  function handleClick(event) {
    if (!event.target.classList.contains("scripture")) {
      setActiveScripture(null);
      setActiveScriptureText(null);
    }
  }

  return (
    <div>
      <h4>Chapter {index + 1}</h4>
      <p>
        {paragraph.map(section => {
          return (
            <span key={section.superscript}>
              {section.text}
              <a
                href={`#ref-${index}-${section.superscript}`}
                id={`${index}-${section.superscript}`}
                className="superscript"
              >{`${section.superscript} `}</a>
            </span>
          );
        })}
      </p>

      <div className="scripture-section">
        {paragraph.map(section => {
          return (
            <div key={section.superscript}>
              <a
                href={`#${index}-${section.superscript}`}
                id={`ref-${index}-${section.superscript}`}
              >
                {`^ `}
              </a>
              <strong>{section.superscript}.</strong>{" "}
              {section.scriptures
                ? section.scriptures.map((scripture, index) => {
                    return (
                      <span key={scripture}>
                        <Popover
                          isOpen={scripture === activeScripture}
                          body={
                            activeScriptureText ? (
                              loading ? (
                                <div style={{ padding: "5px 10px" }}>
                                  <img
                                    src="https://i.imgur.com/P7fXP4s.gif"
                                    style={{
                                      display: "flex",
                                      height: 25,
                                      width: 25,
                                      textAlign: "center",
                                      margin: "8px auto 0"
                                    }}
                                  />
                                </div>
                              ) : (
                                <ScriptureRef
                                  key={index}
                                  data={activeScriptureText}
                                />
                              )
                            ) : null
                          }
                          place="below"
                        >
                          <span
                            className="scripture"
                            onClick={() => {
                              const savedActiveScripture =
                                scripture === activeScripture
                                  ? null
                                  : scripture;

                              setActiveScripture(savedActiveScripture);

                              if (savedActiveScripture) {
                                setLoading(true);

                                axios
                                  .get(
                                    `https://bibleanswersapi.herokuapp.com/passages?passages=${encodeURIComponent(
                                      savedActiveScripture
                                    )}`
                                  )
                                  .then(response => {
                                    setLoading(false);
                                    setActiveScriptureText(response.data);
                                  });
                              } else {
                                setActiveScriptureText(null);
                              }
                            }}
                          >
                            {scripture}
                          </span>
                        </Popover>
                        {index === section.scriptures.length - 1 ? "" : `; `}
                      </span>
                    );
                  })
                : null}
            </div>
          );
        })}
      </div>

      <style jsx>{`
        h4 {
          font-size: 26px;
          line-height: 1.22;
          margin: 0;
          margin-top: 30px;
        }

        p {
          font-size: 21px;
          line-height: 1.58;
          margin: 0;
          margin-top: 29px;
        }

        h4 + p {
          margin-top: 8px;
        }

        .first {
          margin-top: 8px;
        }

        .nomargin {
          margin-top: 0;
        }

        a {
          color: #689f38;
          text-decoration: none;
        }

        @media screen and (max-width: 768px) {
          h4 {
            font-size: 24px;
            margin-top: 22px;
          }

          p {
            font-size: 18px;
            margin-top: 21px;
          }
        }

        .superscript {
          color: #689f38;
          font-size: 15px;
          margin-left: 1px;
          position: relative;
          top: -6px;
        }

        .scripture-section {
          font-size: 14px;
          margin-top: 10px;
        }

        .scripture {
          color: #039be5;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default ConfessionParagraph;
