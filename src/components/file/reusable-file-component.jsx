import React from "react";
import { Link, useParams } from "react-router-dom";
import "../../style/index.css";

const FileComponent = (props) => {
  const params = useParams();
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
              <Link
                to={`/path/dir/${path}`}
                className={path === params.filename && "disabled"}
              >
                &nbsp;{path} /
              </Link>
            </li>
          ))}
      </ul>
      <h3>THIS IS FILE: {params.filename}.txt</h3>
    </div>
  );
};

export default FileComponent;
