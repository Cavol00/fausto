"use client";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin, {
  Draggable,
  DropArg,
} from "@fullcalendar/interaction";
import { useEffect, useRef, useState } from "react";
export default function Calendar({ calendarData }: any) {
  const calendarRef = useRef<any | null>(null);
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

  const handleDateClick = (arg: any) => {
    if (calendarRef.current) {
        const calendarApi = calendarRef.current.getApi();
        calendarApi.changeView('timeGridDay', arg.dateStr);
      }
    
  };
  return (
    <>
      <main>
        <FullCalendar
          height={"auto"}
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          headerToolbar={{
            left: "prev,next today",
            right: "title",
          }}
          ref={calendarRef}
          initialView="dayGridMonth"
          events={fixedEvents}
          nowIndicator={true}
          editable={false}
          droppable={false}
          selectable={true}
          selectMirror={true}
          dateClick={handleDateClick}
          eventContent={function (eventInfo) {
            const calendarApi = calendarRef.current.getApi();
            const currentViewType = calendarApi.view.type;
          
            console.log(eventInfo);
            return (
              <>
                <b>{eventInfo.event.title}</b>
                <br />
                {currentViewType === 'timeGridDay' && <p>{eventInfo.event.extendedProps.description}</p>}
              </>
            );
          }}
        />
      </main>
    </>
  );
}
