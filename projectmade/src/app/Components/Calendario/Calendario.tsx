"use client"
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin, { Draggable, DropArg } from "@fullcalendar/interaction";
import { useEffect, useState } from "react";
import { Fragment } from "react";
import { Transition } from "@headlessui/react";
import { Dialog } from "@headlessui/react";
import * as React from "react";
import ReactDOM from "react-dom";
import { EventSourceInput } from "@fullcalendar/common";

interface Event {
    title: string;
    description: string | undefined;
    start: Date | string;
    allDay: boolean;
    id: number;
    owner: string | undefined;
}

export default function Calendar() {


    const [events, setEvents] = useState([
        { title: "event 1", description: "description 1", start: new Date(), id: 1, owner: "owner 1" },   // ID DEVE Essere uNICo se no nel console da ERRORE
        { title: "event 2", description: "description 1", start: new Date(), id: 2, owner: "owner 1" },
        { title: "event 3", description: "description 1", start: new Date(), id: 3, owner: "owner 1" },
        { title: "event 4", description: "description 1", start: new Date(), id: 4, owner: "owner 1" },
    ]);

    const [allEvents, setAllEvents] = useState<Event[]>([]);
    const [showModal, setShowModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false); // modal
    const [idTodelete, setIdToDelete] = useState<number | null>(null);
    const [newEvent, setNewEvent] = useState<Event>({ title: "", description: "", start: "", allDay: false, id: 0, owner: "" });

    useEffect(() => {
        console.log("useEffect");
        let draggableEl = document.getElementById("draggable-el");
        if (draggableEl) {
            new Draggable(draggableEl, {
                itemSelector: ".fc-event",
                eventData: function (eventEl) {
                    let title = eventEl.getAttribute("title");
                    /* let id = eventEl.getAttribute("data"); // maybe error
                    let start = eventEl.getAttribute("start");  // need to check later  */
                    return { title };
                }
            });
        }
    }, [])

    function handleDateClick(arg: { date: Date, allDay: boolean }) {
        setNewEvent({ ...newEvent, start: arg.date, id: new Date().getTime() }); // in java viene passato riferimento, con ... creo una copia e modifico la copia e basta,
        setShowModal(true); // means that a new window will be openened 模糊窗口
    }

    function addEvent(data: DropArg) {
        console.log("data", data); //WT F is this // come faccio aggiunger descrizioniii
        // data.draggedEl.dataset.description  --> devi mettere data-description nel div draggable
        const event = {
            ...newEvent,
            title: data.draggedEl.innerText,
            description: data.draggedEl.dataset.description,
            start: data.date.toISOString(),
            allDay: data.allDay,
            id: new Date().getTime(),
            owner: data.draggedEl.dataset.owner
        };
        setAllEvents([...allEvents, event])
        console.log("allEvents", allEvents);
    }

    function handleDeleteModal(data: { event: { id: string } }) {
        setShowDeleteModal(true);
        setIdToDelete(Number(data.event.id));
    }

    function showAllEvent() {
        console.log("allEvents", allEvents);
    }




    return (
        <>
            <main>
                <FullCalendar
                    height={"auto"}
                    plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin,]} // plugins accetta un array di plugin
                    headerToolbar={{
                        left: "prev,next today",
                        center: "title",
                        right: "timeGridDay,timeGridWeek,dayGridMonth" // togliere virgola e basta, e mettere spazio i bottoni si separano
                    }}

                    initialView="dayGridMonth"
                    events={allEvents.map(event => ({
                        ...event,
                        id: event.id.toString(), // converti l'id in una stringa
                    }))} // dopo il parsing dovrebbe risultare gli eventi sul calendario.... ma vedo dopo
                    nowIndicator={true} // indica adesso adesso
                    editable={true}
                    droppable={true}
                    selectable={true}
                    selectMirror={true} // will draw a placeholder when user is dragging only TimeGrid view
                    dateClick={handleDateClick} // whjen a date or time is clicked
                    drop={(data) => addEvent(data)}
                    eventClick={(data) => handleDeleteModal(data)} // when a event is clickexcd
                />
            </main>


            <div id="draggable-el" className="">  {/*  drag and drop elements */}
                <h1>drag events</h1>
                {events.map(event => (
                    <div className="fc-event" title={event.title} key={event.id} data-description={event.description} data-owner={event.owner}>
                        {event.title}
                    </div>
                ))}
            </div>



        </>
    );
}