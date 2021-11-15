import React from "react";

import "./TextArea.css";

const TextArea = () => {
  return (
    <div className="textarea">
      <form>
        <input type="text" placeholder="Message #channel-name" />
        <button type="submit" />
      </form>
    </div>
  );
};

export default TextArea;
