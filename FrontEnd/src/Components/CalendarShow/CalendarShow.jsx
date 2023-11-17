import { useState, useEffect } from "react";
import FullCalendar, { formatDate } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";

import Header from "../Global/Header";
import { tokens } from "../../Theme";

const Calendar = () => {

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);


  const [currentEvents, setCurrentEvents] = useState([]);

  const [allCalendars, setAllCalendars] = useState([]);
  const [selectedOwnerCalendarId, setSelectedOwnerCalendarId] = useState(null);

  const [selectedCalendar, setSelectedCalendar] = useState([]);




  const TOKEN = "eyJ0eXAiOiJKV1QiLCJub25jZSI6Il9CQ1Y5cnYzNnQydnYwaUxFRU1rSzQwZXE0NG80X3dtWG1VcXFiYVB3NzAiLCJhbGciOiJSUzI1NiIsIng1dCI6IjlHbW55RlBraGMzaE91UjIybXZTdmduTG83WSIsImtpZCI6IjlHbW55RlBraGMzaE91UjIybXZTdmduTG83WSJ9.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTAwMDAtYzAwMC0wMDAwMDAwMDAwMDAiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC80ZWNlNmQxZS01OTJjLTQ0ZjEtYjE4Ny02MDc2ZTkxODA1MTAvIiwiaWF0IjoxNjk3NzQ5NzMwLCJuYmYiOjE2OTc3NDk3MzAsImV4cCI6MTY5NzgzNjQzMCwiYWNjdCI6MCwiYWNyIjoiMSIsImFpbyI6IkFWUUFxLzhVQUFBQXdnTittclg4b0plczdWZFNCOW84RlIycFRPb1R2ZEQ1TWNQK05XOXk1UXV2b1FJSnhta1VHNjlTM2VUNkEwQU1sdzQ0WU42NUQyd3BzWUMycC9sa1k5M09OM1BMVlFTNWhxZ2s1WVNWb3pzPSIsImFtciI6WyJwd2QiLCJtZmEiXSwiYXBwX2Rpc3BsYXluYW1lIjoiR3JhcGggRXhwbG9yZXIiLCJhcHBpZCI6ImRlOGJjOGI1LWQ5ZjktNDhiMS1hOGFkLWI3NDhkYTcyNTA2NCIsImFwcGlkYWNyIjoiMCIsImZhbWlseV9uYW1lIjoiU2Fya2FyIiwiZ2l2ZW5fbmFtZSI6IkFiaGluYWIiLCJpZHR5cCI6InVzZXIiLCJpcGFkZHIiOiIxMDYuMjAxLjI0My43OCIsIm5hbWUiOiJBYmhpbmFiIFNhcmthciIsIm9pZCI6IjdmMzM5ODRiLTIwMWEtNDJiMy04OTJiLTkyYmJkNWMyYWI4YSIsInBsYXRmIjoiMyIsInB1aWQiOiIxMDAzMjAwMkYzNDU0MTIzIiwicmgiOiIwLkFWWUFIbTNPVGl4WjhVU3hoMkIyNlJnRkVBTUFBQUFBQUFBQXdBQUFBQUFBQUFDZkFJOC4iLCJzY3AiOiJDYWxlbmRhcnMuUmVhZCBDYWxlbmRhcnMuUmVhZC5TaGFyZWQgQ2FsZW5kYXJzLlJlYWRCYXNpYyBDYWxlbmRhcnMuUmVhZFdyaXRlIG9wZW5pZCBQZW9wbGUuUmVhZCBwcm9maWxlIFVzZXIuUmVhZCBlbWFpbCIsInN1YiI6IjV4dEdIRWkxMW1YcTllc1kzSWxmOXluV2dCSmdJUTRJYmNtZFUxRV9SdEEiLCJ0ZW5hbnRfcmVnaW9uX3Njb3BlIjoiQVMiLCJ0aWQiOiI0ZWNlNmQxZS01OTJjLTQ0ZjEtYjE4Ny02MDc2ZTkxODA1MTAiLCJ1bmlxdWVfbmFtZSI6IkFiaGluYWIuU2Fya2FyQHNpbHZlcnNwYWNlaW5jLmNvbSIsInVwbiI6IkFiaGluYWIuU2Fya2FyQHNpbHZlcnNwYWNlaW5jLmNvbSIsInV0aSI6IjFMVkZwOUhRUVV5V2YxRWFyQ2NDQUEiLCJ2ZXIiOiIxLjAiLCJ3aWRzIjpbImI3OWZiZjRkLTNlZjktNDY4OS04MTQzLTc2YjE5NGU4NTUwOSJdLCJ4bXNfY2MiOlsiQ1AxIl0sInhtc19zc20iOiIxIiwieG1zX3N0Ijp7InN1YiI6IjlZb2NIM3BjRE96a2NldFF3MXJNOGRIeEtEMTFKVGhNX3RCdmhlU0I1NkEifSwieG1zX3RjZHQiOjE2NjkwMjc5OTl9.kWba7WLx41dUpS3DmgIar1m6sHnUCmnVim9xpopI9DCfyTm6FI2IgCoVlko-s-EntHThquhrw-L7xRrBG6jD4IrtHr3SwpuuLDEHK-5qNPcvwO6W6sVlxsu0tiwM5-d8dyKFyNXbkGwfXNocxC-QMj02aDq_4SVSIr19sCts8LGMjX7bOrX-wyXOWdTPCJfclA8eVKybe6M3GnynMAZlx7Dt8WYri5jkwzgg-UUvApnt8mgytMufTlSAlk6i55Z7E9SmcE33zONxalOXBMeKDW270E5S7BF3U7Jr7iQUG1oLUy95-mmJwwpOLLg_z0iT7KRDMOZt5N6kJ7pIOxAQEw"; // Replace with your token

  const fetchOutlookData = async (calendarId) => {
    const endpoint = calendarId
      ? `https://graph.microsoft.com/v1.0/me/calendars/${calendarId}/events`
      : "https://graph.microsoft.com/v1.0/me/events";

    const response = await fetch(endpoint, {
      headers: {
        Authorization: `Bearer ${TOKEN}`, // Replace with your token
        Accept: "application/json",
      },
    });

    const data = await response.json();

    return data.value;
  };

  const handleOwnerClick = async (calendarId) => {
    setSelectedOwnerCalendarId(calendarId);
    const eventsForOwner = await fetchOutlookData(calendarId);
    const mappedEvents = mapEventsToFullCalendar(eventsForOwner);
    setCurrentEvents(mappedEvents);
  };


  const fetchCalendars = async () => {
    const response = await fetch("https://graph.microsoft.com/v1.0/me/calendars", {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        Accept: "application/json",
      },
    });
    const data = await response.json();
    if (data?.value) {
      setSelectedCalendar(data?.value)
    }
    return data.value;
  };


  const mapEventsToFullCalendar = (events) => {
    return events.map(event => ({
      id: event.id,
      title: event.subject,
      start: event.start.dateTime,
      end: event.end.dateTime
    }));
  };

  // for creating new event in full calender

  useEffect(() => {
    const fetchAndSetEvents = async () => {
      // Initially fetch all events
      setSelectedOwnerCalendarId(null);
      const outlookEvents = await fetchOutlookData(null);
      const mappedEvents = mapEventsToFullCalendar(outlookEvents);
      setCurrentEvents(mappedEvents);
      // Fetch all calendars (i.e., owners)
      const calendarData = await fetchCalendars();
      setAllCalendars(calendarData);
    };

    fetchAndSetEvents();
  }, []);



  const handleDateClick = (selected) => {
    const title = prompt("Please enter a new title for your event");
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();

    if (title) {
      const newEvent = {
        id: `${selected.dateStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      };
      calendarApi.addEvent(newEvent);
      setCurrentEvents(prevEvents => [...prevEvents, newEvent]);
    }
  };





  const handleEventClick = (selected) => {
    if (
      window.confirm(
        `Are you sure you want to delete the event '${selected.event.title}'`
      )
    ) {
      selected.event.remove();
    }
  };



  return (
    <Box m="20px">

      <Header title="Calendar" subtitle="Full Calendar Interactive Page" />

      <Box display="flex" justifyContent="space-between">

        {/*User Selection for filtering out events */}
        <Box
          flex="1 1 20%"
          backgroundColor={colors.primary[400]}
          p="15px"
          borderRadius="4px"
        >
          <Typography variant="h5">Owners</Typography>

          <List>
            {selectedCalendar.map((calendar, index) => (
              <ListItem
                key={index}
                sx={{
                  backgroundColor: colors.greenAccent[500],
                  margin: "10px 0",
                  borderRadius: "2px",
                }}
                onClick={() => handleOwnerClick(calendar?.id)}
              >
                <ListItemText
                  primary={calendar.owner.name}
                />
              </ListItem>
            ))}
          </List>
        </Box>

        {/* CALENDAR SIDEBAR */}

        <Box
          flex="1 1 20%"
          backgroundColor={colors.primary[400]}
          p="15px"
          borderRadius="4px"
        >
          <Typography variant="h5">Events</Typography>
          <List>
            {currentEvents.map((event) => (
              <ListItem
                key={event.id}
                sx={{
                  backgroundColor: colors.greenAccent[500],
                  margin: "10px 0",
                  borderRadius: "2px",
                }}
              >
                <ListItemText
                  primary={event.title}
                  secondary={
                    <Typography>
                      {formatDate(event.start, {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Box>

        {/* END OF CALENDAR SIDEBAR */}


        {/* CALENDAR */}
        <Box flex="1 1 100%" ml="15px">
          <FullCalendar
            height="75vh"
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
            ]}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handleDateClick}
            eventClick={handleEventClick}
            // eventsSet={(events) => setCurrentEvents(events)}
            events={currentEvents}
          />
          <Box>

          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Calendar;
