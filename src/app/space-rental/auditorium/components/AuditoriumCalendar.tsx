import React, { useState } from "react";
import { Calendar, dateFnsLocalizer, Views } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import {
  format,
  parse,
  startOfWeek,
  getDay,
} from "date-fns";
import { ptBR } from "date-fns/locale";
import "../../../../styles/calendar.css";
import { MySwal } from '../../../../config/sweetalertConfig';

const locales = {
  "pt-BR": ptBR,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek: () => startOfWeek(new Date(), { weekStartsOn: 1 }),
  getDay,
  locales,
});

export default function AuditoriumCalendar() {
  const [events, setEvents] = useState([]);
  const [view, setView] = useState(Views.WEEK);
  const [date, setDate] = useState(new Date());

  const handleSelectSlot = ({ start, end }) => {
    const isSlotOccupied = events.some(
      (event) =>
        (start >= event.start && start < event.end) ||
        (end > event.start && end <= event.end)
    );

    if (isSlotOccupied) {
      MySwal.fire({
        icon: 'error',
        title: 'Erro!',
        text: 'Já existe um evento marcado neste horário.',
      });
      return;
    }

    MySwal.fire({
      title: 'Nome do evento:',
      input: 'text',
      inputAttributes: {
        autocapitalize: 'off'
      },
      showCancelButton: true,
      confirmButtonText: 'Salvar',
      cancelButtonText: 'Cancelar',
      showLoaderOnConfirm: true,
      preConfirm: (title) => {
        if (!title) {
          MySwal.showValidationMessage('O nome do evento é obrigatório.');
          return;
        }

        const newEvent = { start, end, title };
        setEvents([...events, newEvent]);
      }
    });
  };

  const eventPropGetter = (event) => {
    const backgroundColor = event.title === "Reservado" ? "#868686" : "#EE7A3C";
    const cursor = event.title === "Reservado" ? "not-allowed" : "pointer";
    return {
      style: {
        backgroundColor,
        borderRadius: "5px",
        opacity: 0.8,
        color: "white",
        cursor,
      },
    };
  };

  return (
    <div className="calendar-container">
      <Calendar
        className="rbc-calendar"
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        selectable
        onSelectSlot={handleSelectSlot}
        step={30}
        timeslots={2}
        view={view}
        date={date}
        onView={(view) => setView(view)}
        onNavigate={(date) => setDate(date)}
        views={["month", "week", "day"]}
        eventPropGetter={eventPropGetter}
        messages={{
          next: "❯",
          previous: "❮",
          today: "Hoje",
          month: "Mês",
          week: "Semana",
          day: "Dia",
          date: "Data",
          time: "Hora",
          event: "Evento",
        }}
        formats={{
          dateFormat: "dd",
          dayFormat: (date, culture, localizer) =>
            localizer.format(date, "EEEE", culture),
          dayHeaderFormat: (date, culture, localizer) =>
            localizer.format(date, "EEEE, MMMM dd", culture),
        }}
      />
    </div>
  );
}
