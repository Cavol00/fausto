"use client";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin, {
  Draggable,
  DropArg,
} from "@fullcalendar/interaction";
import { useEffect, useState } from "react";

export default function Calendar({ calendarData }: any) {
  // class Event({
  // title: string;
  // description: string;
  // start: string;  //formato 0000-00-00T00:00:00
  // end?: string;
  // allDay: boolean;
  // id: number;
  // owner: string;
  // }

  const [fixedEvents, setFixedEvents] = useState<Event[]>([]);

  useEffect(() => {
    // Genera gli eventi nelle date specificate all'avvio del componente
    generateFixedEvents();
  }, []); // Esegue solo al mount del componente

  // Funzione per generare eventi nelle date specificate
  const generateFixedEvents = () => {
    const fixedEvents: any[] = [];
    calendarData.map((event: any) => {
      fixedEvents.push({
        title: event.attributes.title,
        description: event.attributes.description,
        start: event.attributes.beginAt,
        end: event.attributes.endAt,
        allDay: event.attributes.allDay,
        id: event.id,
      });
    });
    console.log(calendarData);
    setFixedEvents([...fixedEvents]);
  };

  const handleDateClick = (arg: { date: Date; allDay: boolean }) => {
    console.log("Date clicked: ", arg.date);
  };

  return (
    <>
      <main>
        <FullCalendar
          height={"auto"}
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "timeGridDay,timeGridWeek,dayGridMonth",
          }}
          initialView="dayGridMonth"
          events={fixedEvents}
          nowIndicator={true}
          editable={false}
          droppable={false}
          selectable={true}
          selectMirror={true}
          dateClick={handleDateClick}
        />
      </main>
    </>
  );
}
