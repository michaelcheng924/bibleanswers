import React from "react";

import { Container } from "../components/Container";
import { TitleSection } from "../components/TitleSection";
import ReadingContainer from "../components/ReadingContainer";

const Contact = () => {
  return (
    <Container>
      <TitleSection
        title="Contact us"
        subtitle="We'd love to hear from you!"
        image_url="https://i.imgur.com/seKFp6c.png"
      />
      <ReadingContainer>
        <div className="writing">
          <p>Here are several reasons why you might want to contact us:</p>

          <ol>
            <li>Ask a question</li>
            <li>Share a testimonial</li>
            <li>Report a typo or bug</li>
            <li>Ask how you can help contribute to Bible Answers's ministry</li>
          </ol>

          <h4>Email</h4>

          <p>
            To contact us, simply send an email to{" "}
            <strong>cheng.c.michael@gmail.com</strong>. We look forward to
            hearing from you!
          </p>
        </div>
      </ReadingContainer>

      <style jsx>{`
        .writing h4 {
          font-size: 26px;
          line-height: 1.22;
          margin: 0;
          margin-top: 30px;
        }

        .writing p,
        .writing ol {
          font-size: 21px;
          line-height: 1.58;
          margin: 0;
          margin-top: 29px;
        }

        .writing h4 + p {
          margin-top: 8px;
        }

        .writing ol {
          padding: 0 40px;
        }

        .writing li {
          margin-bottom: 10px;
        }

        .writing li:last-child {
          margin-bottom: 0;
        }

        form {
          margin-top: 20px;
        }

        input,
        textarea {
          border: 1px solid #bdbdbd;
          border-radius: 3px;
          font-size: 16px;
          padding: 5px 10px;
          width: 320px;
        }

        @media screen and (max-width: 768px) {
          .writing h4 {
            font-size: 24px;
            margin-top: 22px;
          }

          .writing p,
          .writing ol {
            font-size: 18px;
            margin-top: 21px;
          }
        }
      `}</style>
    </Container>
  );
};

export default Contact;
