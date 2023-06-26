import React from "react";

const sizeClasses = {
  txtSpaceGroteskRegular15WhiteA700: "font-normal font-spacegrotesk",
  txtSpaceGroteskRegular14Bluegray200: "font-normal font-spacegrotesk",
  txtSpaceGroteskRegular16Bluegray200: "font-normal font-spacegrotesk",
  txtSpaceGroteskRegular19WhiteA700: "font-normal font-spacegrotesk",
  txtSpaceGroteskRegular20: "font-normal font-spacegrotesk",
  txtSpaceGroteskRegular16Black900: "font-normal font-spacegrotesk",
  txtSpaceGroteskRegular13: "font-normal font-spacegrotesk",
  txtSpaceGroteskRegular34: "font-normal font-spacegrotesk",
  txtSpaceGroteskRegular12: "font-normal font-spacegrotesk",
  txtSpaceGroteskRegular22: "font-normal font-spacegrotesk",
  txtSpaceGroteskRegular33: "font-normal font-spacegrotesk",
  txtSpaceGroteskRegular21: "font-normal font-spacegrotesk",
  txtSpaceGroteskRegular16: "font-normal font-spacegrotesk",
  txtSpaceGroteskRegular49: "font-normal font-spacegrotesk",
  txtSpaceGroteskRegular15: "font-normal font-spacegrotesk",
  txtSpaceGroteskRegular36: "font-normal font-spacegrotesk",
  txtSpaceGroteskRegular15Yellow400: "font-normal font-spacegrotesk",
  txtSpaceGroteskRegular14: "font-normal font-spacegrotesk",
  txtSpaceGroteskRegular14Yellow400: "font-normal font-spacegrotesk",
  txtSpaceGroteskRegular13Bluegray200: "font-normal font-spacegrotesk",
  txtSpaceGroteskRegular19: "font-normal font-spacegrotesk",
  txtSpaceGroteskRegular18: "font-normal font-spacegrotesk",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
