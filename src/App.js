import { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import DirComponent from "./components/dir/reusable-dir-component";
import FileComponent from "./components/file/reusable-file-component";

function App() {
  let root = {
    type: "dir",
    children: {
      home: {
        type: "dir",
        children: {
          myname: {
            type: "dir",
            children: {
              "filea.txt": {
                type: "file",
              },
              "fileb.txt": {
                type: "file",
              },
              projects: {
                type: "dir",
                children: {
                  mysupersecretproject: {
                    type: "dir",
                    children: {
                      mysupersecretfile: {
                        type: "file",
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  };

  const [pathName, setPathName] = useState([]);

  const addPath = (name) => {
    const addedNewPath = [...pathName, name];
    setPathName(addedNewPath);
  };

  const removePath = (name) => {
    const num = pathName.indexOf(name);
    const removePath = pathName.slice(0, num + 1);
    setPathName(removePath);
  };

  const pageFuncs = {
    addPath,
    pathName,
    removePath,
  };

  return (
    <div>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<DirComponent root={root} {...pageFuncs} />}
          />
          <Route
            path="/path/dir/home"
            element={<DirComponent root={root.children.home} {...pageFuncs} />}
          />
          <Route
            path="/path/dir/myname"
            element={
              <DirComponent
                root={root.children.home.children.myname}
                {...pageFuncs}
              />
            }
          />
          <Route
            path="/path/file/:filename.txt"
            element={
              <FileComponent
                root={root.children.home.children.myname.children["filea.txt"]}
                {...pageFuncs}
              />
            }
          />
          <Route
            path="/path/file/:filename.txt"
            element={
              <FileComponent
                root={root.children.home.children.myname.children["fileb.txt"]}
                {...pageFuncs}
              />
            }
          />
          <Route
            path="/path/dir/projects"
            element={
              <DirComponent
                root={root.children.home.children.myname.children.projects}
                {...pageFuncs}
              />
            }
          />
          <Route
            path="/path/dir/mysupersecretproject"
            element={
              <DirComponent
                root={
                  root.children.home.children.myname.children.projects.children
                    .mysupersecretproject
                }
                {...pageFuncs}
              />
            }
          />
          <Route
            path="/path/file/:filename"
            element={
              <FileComponent
                root={
                  root.children.home.children.myname.children.projects.children
                    .mysupersecretproject.children.mysupersecretfile
                }
                {...pageFuncs}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
