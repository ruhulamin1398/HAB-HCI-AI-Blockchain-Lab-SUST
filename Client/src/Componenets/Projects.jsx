import { nanoid } from "@reduxjs/toolkit";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProject } from "../features/project/projectSlice";
const Projects = () => {
  const projects = useSelector((state) => state.project.projects);
  const dispatch = useDispatch();
  function createNewProject() {
    const newProject = {
      title: "hi ",
      test: "hi test",
      member: {
        id: nanoid(),
        link: "#/asjfkslajf",
        name: "hello saif",
      },
    };
    dispatch(addProject(newProject));
    console.log("done project add");
  }
  return (
    <>
      <h1 className="text-3xl bg-slate-400"> hi project</h1>
      <button className="p-4 bg-slate-600" onClick={createNewProject}>
        add Project
      </button>

      {projects.map((project) => (
        <>
          <div className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded text-lg text-red-100">
            #{project.id} -- {project.test} --{project.title}{" "}
          </div>
        </>
      ))}
      <div className="bg-red"> end projects</div>
    </>
  );
};

export default Projects;
