import React from "react";

const date = new Date().getFullYear();

const Footer: React.FC = () => (
  <>
    <section className="footer" id="footer">
      <div className="links">
        <h2>Used Icons</h2>
        <a
          href="https://www.flaticon.com/de/kostenlose-icons/github"
          title="github Icons"
        >
          Github Icons erstellt von Pixel perfect - Flaticon
        </a>
        <a
          href="https://www.flaticon.com/de/kostenlose-icons/instagram-logo"
          title="instagram-logo Icons"
        >
          Instagram-logo Icons erstellt von Laisa Islam Ani - Flaticon
        </a>
        <a
          href="https://www.flaticon.com/de/kostenlose-icons/twitter-logo"
          title="twitter-logo Icons"
        >
          Twitter-logo Icons erstellt von Md Tanvirul Haque - Flaticon
        </a>
        <a
          href="https://www.flaticon.com/de/kostenlose-icons/youtube"
          title="youtube Icons"
        >
          Youtube Icons erstellt von Md Tanvirul Haque - Flaticon
        </a>
        <a
          href="https://www.flaticon.com/free-icons/discord"
          title="discord icons"
        >
          Discord icons created by Freepik - Flaticon
        </a>
      </div>
      <div className="copyright">
        <p>Copyright © {date} Just_Daniel. All Rights Reserved</p>
      </div>
    </section>
  </>
);

export default Footer;
