import React from "react";

export const DarksoulSourceList = ({ children }) => (
  <div id="sources">
    {children.map((e, i) =>
      e.props && e.props.mdxType && e.props.mdxType === "p"
        ? React.cloneElement(e, { className: "yle__article__paragraph fynd",key: i })
        : null
    )}
  </div>
);
