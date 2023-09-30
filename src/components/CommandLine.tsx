import React from "react";

const CommandLine: React.FC = () => {
  return (
    <div className="cmdsection" id="cmdsection">
      <div className="commandline">
        <div className="commandline_top">
          <div className="commandline_top_left">
            <div className="red_dot"></div>
            <div className="yellow_dot"></div>
            <div className="green_dot"></div>
          </div>
          <div className="commandline_top_middle">
            <span className="material-symbols-outlined">folder</span>
            <p id="package">justdaniel.de</p>
          </div>
          <div className="commandline_top_right"></div>
        </div>
        <div className="commandline_body">
          <textarea spellCheck="false" disabled id="console"></textarea>
        </div>
      </div>
    </div>
  );
};

export default CommandLine;
