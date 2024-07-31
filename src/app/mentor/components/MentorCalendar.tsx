"use client";
import React, { useState } from "react";
import { Calendar, dateFnsLocalizer, Views } from "react-big-calendar";
import {
  format,
  startOfDay,
  startOfWeek,
  getDay,
  setHours,
  setMinutes,
  parse,
} from "date-fns";
import { ptBR } from "date-fns/locale";
import Swal from "sweetalert2";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "../../../styles/calendar.css";
import MeetingSuccess from "./MeetingSuccess";

const locales = {
  "pt-BR": ptBR,
};

const localizer = dateFnsLocalizer({
  format: (date, formatStr, options) =>
    format(date, formatStr, { ...options, locale: ptBR }),
  parse: (str, format) => parse(str, format, new Date(), { locale: ptBR }),
  startOfWeek: () => startOfWeek(new Date(), { weekStartsOn: 1 }),
  getDay,
  locales,
});

const messages = {
  allDay: "Dia todo",
  previous: "❮",
  next: "❯",
  today: "Hoje",
  month: "Mês",
  week: "Semana",
  day: "Dia",
  agenda: "Agenda",
  date: "Data",
  time: "Hora",
  event: "Nome",
  noEventsInRange: "Nenhum evento neste período.",
  showMore: (total) => `+ (${total})`,
};

const formats = {
  dateFormat: "dd",
  dayFormat: (date, culture, localizer) =>
    localizer.format(date, "EEEE", culture),
  dayHeaderFormat: (date, culture, localizer) =>
    localizer.format(date, "EEEE, MMMM dd", culture),
  dayRangeHeaderFormat: ({ start, end }, culture, localizer) =>
    `${localizer.format(start, "MMMM dd", culture)} - ${localizer.format(
      end,
      "MMMM dd",
      culture
    )}`,
  agendaDateFormat: "dd/MM/yyyy",
  agendaTimeFormat: "HH:mm",
  agendaHeaderFormat: ({ start, end }, culture, localizer) =>
    `${localizer.format(start, "MMMM dd", culture)} - ${localizer.format(
      end,
      "MMMM dd",
      culture
    )}`,
};

interface Event {
  start: Date;
  end: Date;
  title: string;
  link?: string;
}

interface MentorCalendarProps {
  isMentor: boolean;
}

export default function MentorCalendar({ isMentor }: MentorCalendarProps) {
  const [events, setEvents] = useState<Event[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [view, setView] = useState(Views.MONTH);
  const [date, setDate] = useState(new Date());
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSelectSlot = async ({
    start,
    end,
    action,
  }: {
    start: Date;
    end: Date;
    action: "select" | "click" | "doubleClick";
  }) => {
    if (isMentor) return;

    const today = new Date();

    if (start < startOfDay(today)) {
      Swal.fire({
        icon: "error",
        title: "Erro",
        text: "Não é possível agendar reuniões em datas passadas.",
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

    if (getDay(start) === 0 || getDay(start) === 6) {
      Swal.fire({
        icon: "error",
        title: "Erro",
        text: "Não é possível agendar reuniões aos sábados e domingos.",
        confirmButtonText: "Ok",
        confirmButtonColor: "#EA5E53",
      });
      return;
    }

    if (view === Views.MONTH && (action === "click" || action === "select")) {
      setView(Views.DAY);
      setDate(startOfDay(start));
      return;
    }

    const durationInMinutes = (end.getTime() - start.getTime()) / (1000 * 60);
    if (durationInMinutes > 60) {
      Swal.fire({
        icon: "error",
        title: "Erro",
        text: "A mentoria deve ter duração máxima de 1h.",
        confirmButtonText: "Ok",
        confirmButtonColor: "#EA5E53",
      });
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
        text: "Já existe uma reunião marcada neste horário.",
        confirmButtonText: "Ok",
        confirmButtonColor: "#EA5E53",
      });
      return;
    }

    const { value: title } = await Swal.fire({
      title: "Nome e sobrenome",
      input: "text",
      inputLabel: "Informe seu nome ao mentor:",
      showCancelButton: true,
      cancelButtonText: "Cancelar",
      confirmButtonText: "Ok",
      confirmButtonColor: "#EA5E53",
      inputValidator: (value) => {
        if (!value) {
          return "Você precisa digitar algo!";
        }
      },
    });

    if (title) {
      const { value: link } = await Swal.fire({
        title: "Link da reunião",
        input: "url",
        inputLabel: "Insira o link da reunião Google Meet:",
        showCancelButton: true,
        cancelButtonText: "Cancelar",
        confirmButtonText: "Ok",
        confirmButtonColor: "#EA5E53",
        inputValidator: (value) => {
          if (!value) {
            return "Você precisa digitar um link!";
          }
        },
      });

      if (link) {
        const newEvent: Event = { start, end, title, link };
        setEvents([...events, newEvent]);
        setSelectedEvent(newEvent);

        Swal.fire({
          icon: "success",
          title: "Reunião adicionada",
          text: 'Clique em "Salvar" para confirmar o agendamento.',
          confirmButtonText: "Ok",
          confirmButtonColor: "#EA5E53",
        });
      }
    }
  };

  const eventPropGetter = (event: Event) => {
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

  const eventComponent = ({ event }: { event: Event }) => {
    return (
      <>
        {isMentor && event.link && (
          <a
            href={event.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "white" }}
          >
            <strong>{event.title}</strong>
            <span className="ml-1 xs:invisible">| Acessar Reunião</span>
          </a>
        )}
      </>
    );
  };

  const handleSubmit = async () => {
    if (!selectedEvent) {
      Swal.fire({
        icon: "error",
        title: "Atenção",
        text: "Você deve selecionar uma data e horário para reservar o espaço.",
        confirmButtonText: "Ok",
        confirmButtonColor: "#EA5E53",
      });
      return;
    }

    try {
      console.log("Enviando dados do evento:", selectedEvent);
      setShowSuccess(true);
    } catch (error) {
      console.error("Erro ao enviar dados do evento:", error);
    }
  };

  return (
    <>
      {showSuccess ? (
        <MeetingSuccess />
      ) : (
        <form
          className="calendar-container"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          {!isMentor && (
            <h1 className="w-full font-bold text-[18px] xs:text-[16px] text-left mb-6">
              Marcar reunião de mentoria:
            </h1>
          )}

          <Calendar
            className="rbc-calendar"
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            selectable={!isMentor}
            onSelectSlot={handleSelectSlot}
            step={30}
            timeslots={2}
            view={view}
            date={date}
            onView={(view) => setView(view)}
            onNavigate={(date) => setDate(date)}
            views={["month", "day"]}
            eventPropGetter={eventPropGetter}
            longPressThreshold={false}
            messages={messages}
            formats={formats}
            min={setMinutes(setHours(new Date(), 8), 0)}
            max={setMinutes(setHours(new Date(), 18), 0)}
            components={{
              event: eventComponent,
            }}
          />

          {!isMentor && (
            <button
              type="submit"
              className="shadow-md mt-8 mx-auto w-[200px] h-[30px] bg-[#EA5E53] text-white text-sm font-bold rounded-[50px]"
            >
              Salvar
            </button>
          )}
        </form>
      )}
    </>
  );
}
