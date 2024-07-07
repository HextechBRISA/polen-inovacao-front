import React, { useState } from "react";
import { Calendar, dateFnsLocalizer, Views } from "react-big-calendar";
import { format, startOfDay, startOfWeek, getDay } from "date-fns";
import { ptBR } from "date-fns/locale";
import Swal from "sweetalert2";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "../../../../styles/calendar.css";
import { useRouter } from "next/navigation";

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

export default function AuditoriumCalendar() {
  const [events, setEvents] = useState<Event[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [view, setView] = useState(Views.MONTH);
  const [date, setDate] = useState(new Date());
  const router = useRouter();

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

    if (view === Views.MONTH && (action === "click" || action === "select")) {
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
      const newEvent: Event = { start, end, title };
      setEvents([...events, newEvent]);
      setSelectedEvent(newEvent);
      Swal.fire({
        icon: "success",
        title: "Evento adicionado",
        text: 'Clique em "Reservar" para ir ao pagamento.',
        confirmButtonText: "Ok",
        confirmButtonColor: "#EA5E53",
      });
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

  const handleReserveClick = () => {
    try {
      if (!selectedEvent) {
        throw new Error(
          "Você deve selecionar uma data e horário para reservar o espaço."
        );
      }
      router.push("/payment");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Atenção",
        text: error.message,
        confirmButtonText: "OK",
        confirmButtonColor: "#EA5E53",
      });
    }
  };

  return (
    <form className="calendar-container" onSubmit={(e) => e.preventDefault()}>
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
        views={["month", "day"]}
        eventPropGetter={eventPropGetter}
        longPressThreshold={false}
        messages={{
          next: "❯",
          previous: "❮",
          today: "Hoje",
          month: "Mês",
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

      <button
        type="submit"
        className="shadow-md mt-8 xs:mt-6 xs:mb-2 mx-auto w-[200px] h-[30px] bg-[#EA5E53] text-white text-sm font-bold rounded-[50px]"
        onClick={handleReserveClick}
      >
        Reservar
      </button>
    </form>
  );
}
