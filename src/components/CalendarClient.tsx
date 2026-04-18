"use client";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";
import type { EventInput } from "@fullcalendar/core";

const events: EventInput[] = [
  // ── April 2026 ─────────────────────────────────────────────────────────────
  {
    id: "1",
    title: "First Friday Tri-Chamber Speed Networking",
    start: "2026-04-03T08:00:00",
    end: "2026-04-03T10:00:00",
    location: "Legacy Retirement Center, 1617 Temple Ln, South Jordan",
    color: "#0D3B66",
  },
  {
    id: "2",
    title: "Riverton City Council",
    start: "2026-04-07T19:00:00",
    end: "2026-04-07T20:00:00",
    location: "Riverton City Hall, 12830 S Redwood Rd, Riverton, UT 84065",
    color: "#3F6183",
  },
  {
    id: "3",
    title: "Women in Business – Marketing & Advertising Visibility Lab",
    start: "2026-04-08T11:00:00",
    end: "2026-04-08T13:30:00",
    location: "Legacy Retirement Center, 1617 Temple Ln, South Jordan",
    color: "#5DCAD1",
  },
  {
    id: "4",
    title: "Bluffdale City Council",
    start: "2026-04-08T18:00:00",
    end: "2026-04-08T19:00:00",
    location: "Bluffdale City Hall, 2222 W 14400 S, Bluffdale, UT 84065",
    color: "#3F6183",
  },
  {
    id: "5",
    title: "Herriman City Council",
    start: "2026-04-08T19:00:00",
    end: "2026-04-08T20:00:00",
    location: "Herriman City Hall, 5355 W Herriman Main St, Herriman, UT",
    color: "#3F6183",
  },
  {
    id: "6",
    title: "Connect + Learn After-Hours",
    start: "2026-04-14T18:00:00",
    end: "2026-04-14T20:00:00",
    location: "Mil's Cafe, 14702 Porter Rockwell Blvd, Bluffdale, UT 84065",
    color: "#F7DE32",
    textColor: "#0D3B66",
  },
  {
    id: "7",
    title: "Chamber Board Meeting",
    start: "2026-04-16T08:00:00",
    end: "2026-04-16T09:30:00",
    location: "First Utah Bank Bldg, 4168 S 12600 S, Riverton, UT 84065",
    color: "#F7DE32",
    textColor: "#0D3B66",
  },
  {
    id: "8",
    title: "Riverton City Council",
    start: "2026-04-21T19:00:00",
    end: "2026-04-21T20:00:00",
    location: "Riverton City Hall, 12830 S Redwood Rd, Riverton, UT 84065",
    color: "#3F6183",
  },
  {
    id: "9",
    title: "Bluffdale City Council",
    start: "2026-04-22T18:00:00",
    end: "2026-04-22T19:00:00",
    location: "Bluffdale City Hall, 2222 W 14400 S, Bluffdale, UT 84065",
    color: "#3F6183",
  },
  {
    id: "10",
    title: "Herriman City Council",
    start: "2026-04-22T19:00:00",
    end: "2026-04-22T20:00:00",
    location: "Herriman City Hall, 5355 W Herriman Main St, Herriman, UT",
    color: "#3F6183",
  },
  {
    id: "11",
    title: "Connect and Learn Luncheon",
    start: "2026-04-23T11:30:00",
    end: "2026-04-23T13:00:00",
    location: "Legacy Retirement Center, 1617 Temple Ln, South Jordan",
    color: "#0D3B66",
  },
  {
    id: "12",
    title: "Ribbon Cutting – Riverton Bakehouse",
    start: "2026-04-29T10:00:00",
    end: "2026-04-29T11:00:00",
    location: "1234 W Redwood Rd, Riverton, UT 84065",
    color: "#5DCAD1",
  },

  // ── May 2026 ───────────────────────────────────────────────────────────────
  {
    id: "13",
    title: "First Friday Tri-Chamber Speed Networking",
    start: "2026-05-01T08:00:00",
    end: "2026-05-01T09:30:00",
    location: "Legacy Retirement Center, 1617 Temple Ln, South Jordan",
    color: "#0D3B66",
  },
  {
    id: "14",
    title: "Riverton City Council",
    start: "2026-05-05T19:00:00",
    end: "2026-05-05T20:00:00",
    location: "Riverton City Hall, 12830 S Redwood Rd, Riverton, UT 84065",
    color: "#3F6183",
  },
  {
    id: "15",
    title: "Herriman City Council",
    start: "2026-05-06T19:00:00",
    end: "2026-05-06T20:00:00",
    location: "Herriman City Hall, 5355 W Herriman Main St, Herriman, UT",
    color: "#3F6183",
  },
  {
    id: "16",
    title: "Chamber Board Meeting",
    start: "2026-05-07T08:00:00",
    end: "2026-05-07T09:30:00",
    location: "First Utah Bank Bldg, 4168 S 12600 S, Riverton, UT 84065",
    color: "#F7DE32",
    textColor: "#0D3B66",
  },
  {
    id: "17",
    title: "Bluffdale City Council",
    start: "2026-05-13T18:00:00",
    end: "2026-05-13T19:00:00",
    location: "Bluffdale City Hall, 2222 W 14400 S, Bluffdale, UT 84065",
    color: "#3F6183",
  },
  {
    id: "18",
    title: "Connect and Learn Luncheon",
    start: "2026-05-14T11:30:00",
    end: "2026-05-14T13:00:00",
    location: "Legacy Retirement Center, 1617 Temple Ln, South Jordan",
    color: "#0D3B66",
  },
  {
    id: "19",
    title: "Riverton City Council",
    start: "2026-05-19T19:00:00",
    end: "2026-05-19T20:00:00",
    location: "Riverton City Hall, 12830 S Redwood Rd, Riverton, UT 84065",
    color: "#3F6183",
  },
  {
    id: "20",
    title: "Herriman City Council",
    start: "2026-05-20T19:00:00",
    end: "2026-05-20T20:00:00",
    location: "Herriman City Hall, 5355 W Herriman Main St, Herriman, UT",
    color: "#3F6183",
  },
  {
    id: "21",
    title: "Annual Golf Tournament – Sponsor Preview",
    start: "2026-05-21T09:00:00",
    end: "2026-05-21T15:00:00",
    location: "Soldier Hollow Golf Course, Midway, UT 84049",
    color: "#5DCAD1",
  },
  {
    id: "22",
    title: "Bluffdale City Council",
    start: "2026-05-27T18:00:00",
    end: "2026-05-27T19:00:00",
    location: "Bluffdale City Hall, 2222 W 14400 S, Bluffdale, UT 84065",
    color: "#3F6183",
  },
  {
    id: "23",
    title: "Scholarship Awards Luncheon",
    start: "2026-05-28T11:30:00",
    end: "2026-05-28T13:30:00",
    location: "Legacy Retirement Center, 1617 Temple Ln, South Jordan",
    color: "#F7DE32",
    textColor: "#0D3B66",
  },

  // ── June 2026 ──────────────────────────────────────────────────────────────
  {
    id: "24",
    title: "First Friday Tri-Chamber Speed Networking",
    start: "2026-06-05T08:00:00",
    end: "2026-06-05T09:30:00",
    location: "Legacy Retirement Center, 1617 Temple Ln, South Jordan",
    color: "#0D3B66",
  },
  {
    id: "25",
    title: "Riverton City Council",
    start: "2026-06-02T19:00:00",
    end: "2026-06-02T20:00:00",
    location: "Riverton City Hall, 12830 S Redwood Rd, Riverton, UT 84065",
    color: "#3F6183",
  },
  {
    id: "26",
    title: "Herriman City Council",
    start: "2026-06-03T19:00:00",
    end: "2026-06-03T20:00:00",
    location: "Herriman City Hall, 5355 W Herriman Main St, Herriman, UT",
    color: "#3F6183",
  },
  {
    id: "27",
    title: "Riverton City Council",
    start: "2026-06-16T19:00:00",
    end: "2026-06-16T20:00:00",
    location: "Riverton City Hall, 12830 S Redwood Rd, Riverton, UT 84065",
    color: "#3F6183",
  },
  {
    id: "28",
    title: "Knight of Heroes Gala",
    start: "2026-06-20T18:00:00",
    end: "2026-06-20T22:00:00",
    location: "The Grand Venue, 500 W Main St, Salt Lake City, UT",
    color: "#F7DE32",
    textColor: "#0D3B66",
  },
  {
    id: "29",
    title: "Small Business Workshop – Grant Writing",
    start: "2026-06-24T10:00:00",
    end: "2026-06-24T12:00:00",
    location: "First Utah Bank Bldg, 4168 S 12600 S, Riverton, UT 84065",
    color: "#5DCAD1",
  },
];

export default function CalendarClient() {
  return (
    <div className="fullcalendar-wrapper">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        initialDate="2026-04-01"
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,listMonth",
        }}
        buttonText={{
          today: "Today",
          month: "Month",
          week: "Week",
          list: "List",
        }}
        events={events}
        eventDisplay="block"
        dayMaxEvents={3}
        navLinks
        height="auto"
        eventClick={(info) => {
          const loc = (info.event.extendedProps as { location?: string })
            .location;
          const title = info.event.title;
          const start = info.event.start
            ? info.event.start.toLocaleString("en-US", {
                weekday: "long",
                month: "long",
                day: "numeric",
                year: "numeric",
                hour: "numeric",
                minute: "2-digit",
              })
            : "";
          alert(`${title}\n${start}${loc ? `\n📍 ${loc}` : ""}`);
        }}
      />
    </div>
  );
}
