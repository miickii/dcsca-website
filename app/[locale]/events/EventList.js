'use client';
import React, { useState } from "react";
import EventCard from "./EventCard";
import LargeEventCard from "./LargeEventCard";

export default function EventList({ events }) {
    const [selectedEvent, setSelectedEvent] = useState(null);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {events.map(event => <EventCard key={event._id} event={event} isSelected={selectedEvent && event._id === selectedEvent._id} setSelected={setSelectedEvent}/>)}
            <LargeEventCard selected={selectedEvent} setSelected={setSelectedEvent} />
        </div>
    )
}