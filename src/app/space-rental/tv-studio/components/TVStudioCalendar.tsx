"use client";
import React, { useState } from "react";
import { Calendar, dateFnsLocalizer, Views } from "react-big-calendar";
import { format, startOfDay, endOfDay, startOfWeek, getDay } from "date-fns";
import { ptBR } from "date-fns/locale";
import Swal from "sweetalert2";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "../../../../styles/calendar.css";

const locales = {
  "pt-BR": ptBR,
};

const localizer = dateFnsLocalizer({
  format,
  startOfWeek: () => startOfWeek(new Date(), { weekStartsOn: 1 }),
  getDay,
  locales,
});

interface Event {
  start: Date;
  end: Date;
  title: string;
}

export default function TVStudioCalendar() {
  const [events, setEvents] = useState<Event[]>([]);
  const [view, setView] = useState(Views.MONTH);
  const [date, setDate] = useState(new Date());

  const handleSelectSlot = async ({
    start,
    end,
    action,
  }: {
    start: Date;
    end: Date;
    action: "select" | "click" | "doubleClick";
  }) => {
    const today = new Date();

    if (start < startOfDay(today)) {
      Swal.fire({
        icon: "error",
        title: "Erro",
        text: "Não é possível agendar eventos em datas passadas.",
        confirmButtonText: "Ok",
        confirmButtonColor: "#EA5E53",
      });
      return;
    }

    if (start < today) {
      Swal.fire({
        icon: "error",
        title: "Erro",
        text: "Você precisa agendar com 1 dia de antecedência.",
        confirmButtonText: "Ok",
        confirmButtonColor: "#EA5E53",
      });
      return;
    }

    if (getDay(start) === 0) {
      Swal.fire({
        icon: "error",
        title: "Erro",
        text: "Não é possível agendar eventos aos domingos.",
        confirmButtonText: "Ok",
        confirmButtonColor: "#EA5E53",
      });
      return;
    }

    if (view === Views.MONTH && action === "click") {
      setView(Views.DAY);
      setDate(startOfDay(start));
      return;
    }

    const isSlotOccupied = events.some(
      (event) =>
        (start >= event.start && start < event.end) ||
        (end > event.start && end <= event.end)
    );

    if (isSlotOccupied) {
      Swal.fire({
        icon: "error",
        title: "Erro",
        text: "Já existe um evento marcado neste horário.",
        confirmButtonText: "Ok",
        confirmButtonColor: "#EA5E53",
      });
      return;
    }

    const { value: title } = await Swal.fire({
      title: "Nome do evento",
      input: "text",
      inputLabel: "Digite o nome do evento",
      showCancelButton: true,
      cancelButtonText: "Cancelar",
      confirmButtonText: "Salvar",
      confirmButtonColor: "#EA5E53",
      inputValidator: (value) => {
        if (!value) {
          return "Você precisa digitar algo!";
        }
      },
    });

    if (title) {
      const newEvent = { start, end, title };
      setEvents([...events, newEvent]);
      Swal.fire({
        icon: "success",
        title: "Evento adicionado",
        text: "Seu evento foi adicionado com sucesso.",
        confirmButtonText: "Ok",
        confirmButtonColor: "#EA5E53",
      });
    }
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
        longPressThreshold={250}
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
