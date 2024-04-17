import React from "react";
import { Link, useParams } from "react-router-dom";
import modulesData from "../database/Data.json";
import "../index.css";

function SingleModule() {
  const { id } = useParams();
  const module = modulesData.modules.find((module) => module.id === parseInt(id));

  if (!module) {
    return <div>Module not found</div>;
  }

  return (
    <>
    <div className="sc-bce89526-1 cbbBGh">
        <h1 className="sc-bce89526-3 jSshRv">Modules details</h1>
    </div>
    <div className="container">
      <div className="module">
        <h2 className="title">{module.title}</h2>
        <p className="description">{module.description}</p>
        <div className="schedule">
          <p><h3 className="strong">Schedule:</h3></p>
          <p><strong>Days:</strong> {module.schedule.days.join(", ")}</p>
          <p><strong>Time:</strong> {module.schedule.time}</p>
          <p><strong>Location:</strong> {module.schedule.location}</p>
        </div>
        <div className="documents">
          <p><h3 className="strong">Documents:</h3></p>
          {module.documents.map((document, index) => (
            <div key={index}>
              <p><strong>Title:</strong> {document.title}</p>
              <p><strong>Type:</strong> {document.type}</p>
              <p><strong>Link:</strong> <Link href={document.link} target="_blank" rel="noopener noreferrer">{document.link}</Link></p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
}

export default SingleModule;
