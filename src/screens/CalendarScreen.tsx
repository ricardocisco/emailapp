import moment, { Moment } from "moment";
import React, { useState } from "react";
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
interface Event {
  date: string;
  events: string[];
}

export default function CalendarScreen() {
  const [currentDate, setCurrentDate] = useState<Moment>(moment());
  const [selectedDate, setSelectedDate] = useState<Moment | null>(null);
  const [events, setEvents] = useState<Record<string, string[]>>({});
  const [newEvent, setNewEvent] = useState<string>("");

  const renderHeader = () => {
    return (
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() =>
            setCurrentDate(moment(currentDate).subtract(1, "month"))
          }
        >
          <Text style={styles.navText}>{"<"}</Text>
        </TouchableOpacity>
        <Text style={styles.headerText}>{currentDate.format("MMMM YYYY")}</Text>
        <TouchableOpacity
          onPress={() => setCurrentDate(moment(currentDate).add(1, "month"))}
        >
          <Text style={styles.navText}>{">"}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const renderDaysOfWeek = () => {
    const daysOfWeek = moment.weekdaysShort();
    return (
      <View style={styles.daysOfWeek}>
        {daysOfWeek.map((day) => (
          <Text key={day} style={styles.dayOfWeekText}>
            {day}
          </Text>
        ))}
      </View>
    );
  };

  const renderDays = () => {
    const startOfMonth = moment(currentDate).startOf("month");
    const endOfMonth = moment(currentDate).endOf("month");
    const startOfWeek = moment(startOfMonth).startOf("week");
    const endOfWeek = moment(endOfMonth).endOf("week");

    const days = [];
    let day = startOfWeek;

    while (day <= endOfWeek) {
      const formattedDate = day.format("YYYY-MM-DD");
      const hasEvent = events[formattedDate];

      days.push(
        <TouchableOpacity
          key={day.format("DDMMYYYY")}
          style={[
            styles.day,
            day.month() !== currentDate.month() && styles.dayOutsideMonth,
            day.isSame(moment(), "day") && styles.dayToday,
            selectedDate &&
              day.isSame(selectedDate, "day") &&
              styles.selectedDay,
            hasEvent && styles.dayWithEvent,
          ]}
          onPress={() => handleDayPress(day)}
        >
          <Text style={styles.dayText}>{day.date()}</Text>
        </TouchableOpacity>
      );
      day = day.add(1, "day");
    }

    return <View style={styles.daysGrid}>{days}</View>;
  };

  const handleDayPress = (day: Moment) => {
    if (selectedDate && selectedDate.isSame(day, "day")) {
      setSelectedDate(null); // Deselect the day if already selected
    } else {
      setSelectedDate(day); // Select the day
    }
  };

  const addEvent = () => {
    if (selectedDate && newEvent) {
      const dateStr = selectedDate.format("YYYY-MM-DD");
      setEvents({
        ...events,
        [dateStr]: [...(events[dateStr] || []), newEvent],
      });
      setNewEvent("");
    }
  };

  const renderEvents = () => {
    if (!selectedDate) return null;
    const dateStr = selectedDate.format("YYYY-MM-DD");
    return (
      <View style={styles.eventsContainer}>
        <Text style={styles.eventsTitle}>
          Eventos em {selectedDate.format("DD MMMM YYYY")}:
        </Text>
        {events[dateStr] ? (
          events[dateStr].map((event, index) => (
            <Text key={index} style={styles.eventText}>
              {event}
            </Text>
          ))
        ) : (
          <Text style={styles.noEventText}>Sem eventos para este dia.</Text>
        )}
      </View>
    );
  };

  return (
    <ScrollView style={styles.container}>
      {renderHeader()}
      {renderDaysOfWeek()}
      {renderDays()}
      {renderEvents()}
      {selectedDate && (
        <View style={styles.addEventContainer}>
          <TextInput
            style={styles.eventInput}
            placeholder="Adicionar evento"
            value={newEvent}
            onChangeText={setNewEvent}
          />
          <Button title="Adicionar" onPress={addEvent} />
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  navText: {
    fontSize: 20,
  },
  daysOfWeek: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 8,
  },
  dayOfWeekText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  daysGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  day: {
    width: `${100 / 7}%`,
    alignItems: "center",
    marginVertical: 4,
  },
  dayText: {
    fontSize: 16,
  },
  dayOutsideMonth: {
    opacity: 0.5,
  },
  dayToday: {
    backgroundColor: "#0275d8",
    borderRadius: 50,
    padding: 4,
    color: "white",
  },
  selectedDay: {
    borderColor: "#0275d8",
    borderWidth: 1,
    borderRadius: 50,
    padding: 4,
  },
  dayWithEvent: {
    backgroundColor: "#FFD700",
    borderRadius: 50,
    padding: 4,
  },
  eventsContainer: {
    marginTop: 16,
  },
  eventsTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  eventText: {
    fontSize: 16,
    marginBottom: 4,
  },
  noEventText: {
    fontSize: 16,
    color: "#777",
  },
  addEventContainer: {
    marginTop: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  eventInput: {
    flex: 1,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 4,
    padding: 8,
    marginRight: 8,
  },
});
