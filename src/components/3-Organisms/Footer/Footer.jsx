import React from "react";
import PropTypes from "prop-types";

import { StyledFooter, Attribution } from "./styles";

export default function Footer({ isUserSignedIn }) {
  return (
    <StyledFooter>
      <Attribution>
        <li>
          Made with 🧡 by {" "}
          <a href="https://github.com/rish18" title="Rishabh">
            Rishabh
          </a>{" "}
        </li>
      </Attribution>
    </StyledFooter>
  );
}

Footer.propTypes = {
  isUserSignedIn: PropTypes.bool
};

Footer.defaultProps = {
  isUserSignedIn: false
};
