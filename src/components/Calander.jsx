import React from "react";
import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import modules from "../database/modules.json";

function Calendar() {
    const handleDateClick = (arg) => {
        alert(arg.dateStr)
      }
      const moduleEvents = modules.map((module) => {
        const startDate = new Date(module.startDate);

        const endDate = new Date(startDate);
        endDate.setDate(endDate.getDate() + module.days);
        return {
            title: module.moduleName,
            start: startDate,
            end: endDate,
            color: module.color
        };
    });
  return (
    <div>
      <Fullcalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView={"dayGridMonth"}
        headerToolbar={{
          start: "today prev,next", // will normally be on the left. if RTL, will be on the right
          center: "title",
          end: "dayGridMonth,timeGridWeek,timeGridDay", // will normally be on the right. if RTL, will be on the left
        }}
        height={"90vh"}
        // weekends={false}
        events={moduleEvents}
        dateClick={handleDateClick}
        eventContent={renderEventContent}
      />
    </div>
  );
}

export default Calendar;
function renderEventContent(eventInfo) {
    return(
      <>
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
      </>
    )
  }