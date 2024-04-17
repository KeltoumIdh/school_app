import React from "react";
import { Link, useNavigate } from "react-router-dom";
import modulesData from "../database/Data.json";

// import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";

function FetchData() {
  const modules = modulesData.modules;
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/module/${id}`);
  };

  return (
    <>
      <div class="sc-bce89526-1 cbbBGh">
        <h1 class="sc-bce89526-3 jSshRv">{modules.length} Modules</h1>
      </div>
      <div className="ag-format-container">
        <div className="ag-courses_box">
          {modules.map((module) => (
            <div className="ag-courses_item" key={module.id}>
              <Link onClick={() => handleClick(module.id)} to={`/module/${module.id}`} className="ag-courses-item_link">
                <div className="ag-courses-item_bg"></div>

                <div className="ag-courses-item_title">
                  {module.title}
                </div>

                <div className="ag-courses-item_date-box">
                  Schedule :{" "}
                  <span className="ag-courses-item_date">
                    {module.schedule.days.join(", ")} at{" "}
                    {module.schedule.time}, Location: {module.schedule.location}
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default FetchData;
