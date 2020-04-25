import React from "react";
import PropTypes from "prop-types";

import { Overlay, StyledSidebar, Group, StyledIcon } from "./styles";

export default function Sidebar({
  isVisible,
  onClickAllBookmarks,
  onClickArchive,
  handleCloseSidebar
}) {
  return (
    <>
      <StyledSidebar isVisible={isVisible}>
        <Group>
          <button
            type="button"
            onClick={() => {
              handleCloseSidebar();
              onClickAllBookmarks();
            }}
          >
            <StyledIcon name="Bookmark" /> All Bookmarks
          </button>
          <button
            type="button"
            onClick={() => {
              handleCloseSidebar();
              onClickArchive();
            }}
          >
            <StyledIcon name="Archive" /> Archive
          </button>
        </Group>
      </StyledSidebar>
      <Overlay
        role="button"
        isVisible={isVisible}
        onClick={handleCloseSidebar}
      />
    </>
  );
}

Sidebar.propTypes = {
  isVisible: PropTypes.bool,
  onClickAllBookmarks: PropTypes.func.isRequired,
  onClickArchive: PropTypes.func.isRequired,
  handleCloseSidebar: PropTypes.func.isRequired
};

Sidebar.defaultProps = {
  isVisible: false
};
