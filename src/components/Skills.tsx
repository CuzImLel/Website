import React from "react";

const Skills: React.FC = () => (
  <>
    <section className="skills" id="skills">
      <h1 className="header">My Skills</h1>
      <div className="Languages">
        <span className="box">
          <h1>Languages</h1>
        </span>
        <ul>
          <li>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                alt="javascript"
                width="40"
                height="40"
              />{" "}
            </a>
            <a>JavaScript</a>
          </li>

          <li>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/TypeScript"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
                alt="typescript"
                width="40"
                height="40"
              />{" "}
            </a>
            <a>TypeScript</a>
          </li>

          <li>
            <a href="https://www.java.com" target="_blank" rel="noreferrer">
              {" "}
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg"
                alt="java"
                width="40"
                height="40"
              />{" "}
            </a>
            <a>Java</a>
          </li>
          <li>
            <a href="https://www.python.org" target="_blank" rel="noreferrer">
              {" "}
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
                alt="python"
                width="40"
                height="40"
              />{" "}
            </a>
            <a>Python</a>
          </li>
        </ul>
      </div>
      <div className="Frameworks">
        <span className="box">
          <h1>Frameworks</h1>
        </span>
        <ul>
          <li>
            <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
              {" "}
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                alt="react"
                width="40"
                height="40"
              />{" "}
            </a>
            <a>React</a>
          </li>
          <li>
            <a
              href="https://www.electronjs.org"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/electron/electron-original.svg"
                alt="electron"
                width="40"
                height="40>"
              />{" "}
            </a>
            <a>Electron</a>
          </li>
          <li>
            <a href="https://nodejs.org" target="_blank" rel="noreferrer">
              {" "}
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
                alt="nodejs"
                width="40"
                height="40"
              />{" "}
            </a>
            <a>Node.js</a>
          </li>
        </ul>
      </div>
      <div className="Other">
        <span className="box">
          <h1>Other</h1>
        </span>
        <ul>
          <li>
            <a href="https://www.mysql.com/" target="_blank" rel="noreferrer">
              {" "}
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg"
                alt="mysql"
                width="40"
                height="40"
              />{" "}
            </a>
            <a>SQL</a>
          </li>
          <li>
            <a href="https://git-scm.com/" target="_blank" rel="noreferrer">
              {" "}
              <img
                src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
                alt="git"
                width="40"
                height="40"
              />{" "}
            </a>{" "}
            <a>Git</a>
          </li>
          <li>
            <a href="https://www.linux.org/" target="_blank" rel="noreferrer">
              {" "}
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg"
                alt="linux"
                width="40"
                height="40"
              />{" "}
            </a>
            <a>Linux</a>
          </li>
        </ul>
      </div>
    </section>
  </>
);

export default Skills;
