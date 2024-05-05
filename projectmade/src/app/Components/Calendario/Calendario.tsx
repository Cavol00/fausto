"use client"
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin, { Draggable, DropArg } from "@fullcalendar/interaction";
import { useEffect, useState } from "react";

export default function Calendar() {
    const [events, setEvents] = useState<Event[]>([]);
    const [showModal, setShowModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [idTodelete, setIdToDelete] = useState<number | null>(null);
    const [newEvent, setNewEvent] = useState<Event>({ title: "", description: "", start: "", allDay: false, id: 0, owner: "" });

    useEffect(() => {
        // Genera gli eventi nelle date specificate all'avvio del componente
        generateFixedEvents();
    }, []); // Esegue solo al mount del componente

    // Funzione per generare eventi nelle date specificate
    const generateFixedEvents = () => {
        const fixedEvents: Event[] = [
            {
                title: "Event 1",
                description: "Description for Event 1",
                start: "2024-05-03",
                allDay: true,
                id: 1,
                owner: "Owner 1"
            },
            {
                title: "Event 2",
                description: "Description for Event 2",
                start: "2024-05-17", // 17 maggio 2024
                allDay: true,
                id: 2,
                owner: "Owner 2"
            },
            {
                title: "Event 3",
                description: "Description for Event 3",
                start: "2024-05-20", // 20 maggio 2024
                allDay: true,
                id: 3,
                owner: "Owner 3"
            },
            {
                title: "Event 4",
                description: "Description for Event 4",
                start: "2024-05-22",
                allDay: true,
                id: 4,
                owner: "Owner 4"
            },
            {
                title: "Event 5",
                description: "Description for Event 5",
                start: "2024-05-28", // 28 maggio 2024
                allDay: true,
                id: 5,
                owner: "Owner 5"
            }
        ];
        setEvents(fixedEvents);
    };

    const handleDateClick = (arg: { date: Date, allDay: boolean }) => {
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
                        right: "timeGridDay,timeGridWeek,dayGridMonth"
                    }}
                    initialView="dayGridMonth"
                    events={events}
                    nowIndicator={true}
                    editable={false}
                    droppable={false}
                    selectable={true}
                    selectMirror={true}
                    dateClick={handleDateClick}
                    eventClick={(data) => handleDeleteModal(data)}
                />
            </main>
        </>
    );
}
