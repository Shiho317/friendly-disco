import React from "react";
import { Link } from "react-router-dom";
import "../../style/index.css";

const DirComponent = (props) => {
  return (
    <div>
      <h1>Bread Crumb</h1>
      <ul className="bread-crumb-list">
        {/*remove contents from bread crumb*/}
        {props.pathName.length > 0 &&
          props.pathName.map((path, index) => (
            <li
              key={`${path}${index}`}
              className={index === props.pathName.length - 1 && "active"}
              onClick={() => props.removePath(path)}
            >
              <Link to={`/path/dir/${path}`}>&nbsp;{path} /</Link>
            </li>
          ))}
      </ul>
      <ul>
        {/*add contents from bread crumb*/}
        {Object.keys(props.root.children).map((key, index) => (
          <li key={`${key}-${index}`} onClick={() => props.addPath(key)}>
            {/*sorted by type*/}
            {props.root.children[key].type === "dir" ? (
              <Link to={`/path/dir/${key}`}>{key}</Link>
            ) : (
              <Link to={`/path/file/${key}`}>{key}</Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DirComponent;
