// Skill.js
import React, { useEffect, useState } from "react";
import "../css/Skill.css";
import { useSelector } from "react-redux";

const Skill = () => {
  const [client, setClient] = useState(null);
  const [server, setServer] = useState(null);
  const [dbms, setDbms] = useState(null);
  const [prog, setProg] = useState(null);
  const [dev, setDev] = useState(null);
  const [version, setVersion] = useState(null);

  const ClientSide = useSelector((state) => state.counter.items?.ClientSide);
  const DatastoringandORMs = useSelector(
    (state) => state.counter.items?.DatastoringandORMs
  );
  const DevOpsandDevelopmentTools = useSelector(
    (state) => state.counter.items?.DevOpsandDevelopmentTools
  );
  const ProgrammingLanguages = useSelector(
    (state) => state.counter.items?.ProgrammingLanguages
  );
  const ServerSide = useSelector((state) => state.counter.items?.ServerSide);
  const VersionControlandCollaboration = useSelector(
    (state) => state.counter.items?.VersionControlandCollaboration
  );

  useEffect(() => {
    setClient(ClientSide || []);
    setServer(ServerSide || []);
    setDbms(DatastoringandORMs || []);
    setProg(ProgrammingLanguages || []);
    setDev(DevOpsandDevelopmentTools || []);
    setVersion(VersionControlandCollaboration || []);
  }, [
    ClientSide,
    VersionControlandCollaboration,
    ServerSide,
    DatastoringandORMs,
    ProgrammingLanguages,
    DevOpsandDevelopmentTools,
  ]);

  return (
    <>
      <div className="so1">
        <h1 className="skillheading">Stack</h1>
        <div className="so2">
          <div className="parent">
              <h1 className="skillname">Client Side</h1>
            <div className="so3">
              {client?.map((cl, i) => (
                <i key={i} className={`${cl} icons`}></i>
              ))}
            </div>
          </div>
          <div className="parent">
              <h1 className="skillname">Server Side</h1>
            <div className="so3">

              {server?.map((sl, i) => (
                <i key={i} className={`${sl} icons`}></i>
              ))}
            </div>
          </div>
          <div className="parent">
              <h1 className="skillname">Programming Languages</h1>
            <div className="so3">

              {prog?.map((pl, i) => (
                <i key={i} className={`${pl} icons`}></i>
              ))}
            </div>
          </div>
          <div className="parent">
              <h1 className="skillname">Data storing and ORMs</h1>
            <div className="so3">

              {dbms?.map((dl, i) => (
                <i key={i} className={`${dl} icons`}></i>
              ))}
            </div>
          </div>

          <div className="parent">
              <h1 className="skillname">Development Tools</h1>
            <div className="so3">

              {dev?.map((del, i) => (
                <i key={i} className={`${del} icons`}></i>
              ))}
            </div>
          </div>

          <div className="parent">
              <h1 className="skillname">Version Control & Collaboration</h1>
            <div className="so3">

              {version?.map((vl, i) => (
                <i key={i} className={`${vl} icons`}></i>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skill;
