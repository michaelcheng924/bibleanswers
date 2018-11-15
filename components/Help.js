import React from "react";

const Help = ({ description, title }) => (
  <div className="writing">
    <h3>{title}</h3>
    <p className="first">{description}</p>

    <h3>This article still needs to be written!</h3>

    <p className="first">
      Would you consider helping us write this article? If you would like to
      help others learn more about the Christian faith, as well as have an
      article be attributed to you as the author (with a link to your website,
      if you have one), simply send an email to{" "}
      <strong>cheng.c.michael@gmail.com</strong>, and we can provide you with
      more specific instructions for contributing!
    </p>
  </div>
);

export default Help;
