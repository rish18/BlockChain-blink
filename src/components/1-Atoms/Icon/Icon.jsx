import React from "react";
import PropTypes from "prop-types";
import {
  Menu as OpenSidebar,
  ChevronLeft as CloseSidebar,
  Plus as Add,
  LogOut,
  X as Close,
  Clock,
  Trash2,
  Bookmark,
  Archive,
  PlusSquare as Unarchive
} from "react-feather";

import theme from "../../../theme";

export default function Icon({ name, color, size, className }) {
  const Icons = {
    OpenSidebar,
    CloseSidebar,
    Add,
    LogOut,
    Close,
    Clock,
    Trash2,
    Bookmark,
    Archive,
    Unarchive
  };

  const IconComponent = Icons[name];

  return <IconComponent color={color} size={size} className={className} />;
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  size: PropTypes.number,
  className: PropTypes.string
};

Icon.defaultProps = {
  color: theme.color.icon,
  size: undefined,
  className: undefined
};
