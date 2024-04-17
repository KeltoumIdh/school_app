import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import exams from "../database/exams.json";
import useUserStore from '../store/userStore';
import schedule from "../database/emploi.json";
import modules from "../database/modules.json";

function Calendar() {
    const { user } = useUserStore();

    const handleDateClick = (arg) => {
        alert(arg.dateStr)
    };

    // Logic for generating events based on user role
    const getEvents = () => {
        if (user?.role === "teacher") {
          return modules.map((module) => ({
            title: module.moduleName,
            start: new Date(module.startDate),
            end: new Date(new Date(module.startDate).setDate(new Date(module.startDate).getDate() + module.days)),
            color: module.color
        }));
        } else if (user?.role === "student") {
            // For students, display exams and schedule
            const examEvents = exams.map((exam) => ({
                title: `Exam: ${exam.examName}`,
                start: new Date(exam.date),
                allDay: true,
                color: 'red'
            }));
            // Add schedule events here if available for students
            const scheduleEvents = schedule.map((item) => ({
                title: `${item.subject} (${item.teacher})`,
                start: item.day,
                end: item.day,
                color: "#3788D8",
            }));
            return [...examEvents, ...scheduleEvents];
        } else {
            // Default case: no events
            return modules.map((module) => ({
              title: module.moduleName,
              start: new Date(module.startDate),
              end: new Date(new Date(module.startDate).setDate(new Date(module.startDate).getDate() + module.days)),
              color: module.color
          }));
        }
    };

    return (
        <div>
            <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                initialView={"dayGridMonth"}
                headerToolbar={{
                    start: "today prev,next",
                    center: "title",
                    end: "dayGridMonth,timeGridWeek,timeGridDay",
                }}
                height={"90vh"}
                events={getEvents()}
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
            <i>{eventInfo.event.title}</i>
        </>
    );
}
