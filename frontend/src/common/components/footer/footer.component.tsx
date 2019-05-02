import * as React from "react";
import { LogoMicrosoftComponent } from "../logo-microsoft";
import { cnc } from "../../../util";

const style = require("./footer.style.scss");

const Links = () => (
  <div className={style.linkArea}>
  </div>
);

const Statement = () => (
  <div className={style.statementArea}>
    Pinnacle 2019
  </div>
);

export const FooterComponent = ({className = null}) => {
  return (
    <footer className={cnc(style.footer, className)}>
      <Statement />
      <a href="https://cognitiveops.io" target="__blank">
      </a>
      <Links />
    </footer>
  );
}