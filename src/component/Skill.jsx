import React, { useEffect, useState } from "react";
import "../css/Skill.css";
import { useSelector } from "react-redux";

const Skill = () => {
  const [skills, setSkills] = useState({});
  const stacks = useSelector((state) => state.counter.items?.skill);

  useEffect(() => {
    setSkills(stacks || {});
  }, [stacks]);

  return (
    <>
      <div className="so1">
        <h1 className="skillheading">Stack</h1>
        <div className="so2">
          {Object.keys(skills).map((category, index) => {
            const skillList = skills[category];
            const categoryName = skillList.find((item) => item?.name)?.name || category;

            return (
              <div key={index} className="parent">
                <h1 className="skillname">{categoryName}</h1>
                <div className="so3">
                  {skillList
                    .map((skill, i) => (
                      <i key={i} className={`${skill} icons`}></i>
                    ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Skill;















{/* <div className="parent">
          <h1 className="skillname">{server?.find(c => typeof c === "object")?.name || "Client Side"}</h1>
          <div className="so3">

              {server?.map((sl, i) => (
                <i key={i} className={`${sl} icons`}></i>
              ))}
            </div>
          </div>
          <div className="parent">
          <h1 className="skillname">{prog?.find(c => typeof c === "object")?.name || "Client Side"}</h1>
          <div className="so3">

              {prog?.map((pl, i) => (
                <i key={i} className={`${pl} icons`}></i>
              ))}
            </div>
          </div>
          <div className="parent">
          <h1 className="skillname">{dbms?.find(c => typeof c === "object")?.name || "Client Side"}</h1>
          <div className="so3">

              {dbms?.map((dl, i) => (
                <i key={i} className={`${dl} icons`}></i>
              ))}
            </div>
          </div>

          <div className="parent">
          <h1 className="skillname">{dev?.find(c => typeof c === "object")?.name || "Client Side"}</h1>
          <div className="so3">

              {dev?.map((del, i) => (
                <i key={i} className={`${del} icons`}></i>
              ))}
            </div>
          </div>

          <div className="parent">
          <h1 className="skillname">{version?.find(c => typeof c === "object")?.name || "Client Side"}</h1>
          <div className="so3">

              {version?.map((vl, i) => (
                <i key={i} className={`${vl} icons`}></i>
              ))}
            </div>
          </div> */}









            // const [client, setClient] = useState(null);
  // const [server, setServer] = useState(null);
  // const [dbms, setDbms] = useState(null);
  // const [prog, setProg] = useState(null);
  // const [dev, setDev] = useState(null);
  // const [version, setVersion] = useState(null);

  // const ClientSide = useSelector((state) => state.counter.items?.ClientSide);
  // const DatastoringandORMs = useSelector(
  //   (state) => state.counter.items?.DatastoringandORMs
  // );
  // const DevOpsandDevelopmentTools = useSelector(
  //   (state) => state.counter.items?.DevOpsandDevelopmentTools
  // );
  // const ProgrammingLanguages = useSelector(
  //   (state) => state.counter.items?.ProgrammingLanguages
  // );
  // const ServerSide = useSelector((state) => state.counter.items?.ServerSide);
  // const VersionControlandCollaboration = useSelector(
  //   (state) => state.counter.items?.VersionControlandCollaboration
  // );

  // useEffect(() => {
  //   setClient(ClientSide || []);
  //   setServer(ServerSide || []);
  //   setDbms(DatastoringandORMs || []);
  //   setProg(ProgrammingLanguages || []);
  //   setDev(DevOpsandDevelopmentTools || []);
  //   setVersion(VersionControlandCollaboration || []);
  // }, [
  //   ClientSide,
  //   VersionControlandCollaboration,
  //   ServerSide,
  //   DatastoringandORMs,
  //   ProgrammingLanguages,
  //   DevOpsandDevelopmentTools,
  // ]);