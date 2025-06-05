import React from "react";
import Event from "./Event";

// Helper function to get a random location
const getRandomLocation = () => {
  const locations = [
    "Room 1",
    "Room 2",
    "Conference Hall",
    "Main Lobby",
    "Cafeteria",
    "Auditorium",
    "Outdoor Area",
    "Meeting Room A",
    "Meeting Room B",
    "Studio"
  ];
  return locations[Math.floor(Math.random() * locations.length)];
};

const Calendar = () => {
  return (
    <div className="calendar">
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Sunday</th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Saturday</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="time">8 am</td>
            <Event event="Yoga Class" color="red" location={getRandomLocation()} />
            <td></td>
            <Event event="Breakfast" color="yellow" location={getRandomLocation()} />
            <td></td><td></td>
            <Event event="Gym" color="blue" location={getRandomLocation()} />
            <td></td>
          </tr>
          <tr>
            <td className="time">9 am</td>
            <Event event="Morning Meeting" color="blue" location={getRandomLocation()} />
            <td></td>
            <td></td>
            <Event event="Team Sync" color="yellow" location={getRandomLocation()} />
            <td></td>
            <td></td>
            <Event event="Coffee Break" color="red" location={getRandomLocation()} />
            <td></td>
          </tr>
          <tr>
            <td className="time">10 am</td>
            <Event event="Project Work" color="yellow" location={getRandomLocation()} />
            <td></td>
            <td></td>
            <td></td>
            <Event event="Client Call" color="blue" location={getRandomLocation()} />
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">11 am</td>
            <td></td>
            <Event event="Design Review" color="red" location={getRandomLocation()} />
            <td></td>
            <td></td>
            <td></td>
            <Event event="Code Review" color="yellow" location={getRandomLocation()} />
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">12 pm</td>
            <td></td>
            <td></td>
            <Event event="Lunch" color="blue" location={getRandomLocation()} />
            <td></td>
            <td></td>
            <td></td>
            <Event event="Lunch" color="red" location={getRandomLocation()} />
            <td></td>
          </tr>
          <tr>
            <td className="time">1 pm</td>
            <td></td>
            <td></td>
            <td></td>
            <Event event="Workshop" color="green" location={getRandomLocation()} />
            <td></td>
            <td></td>
            <td></td>
            <Event event="Brainstorm" color="blue" location={getRandomLocation()} />
          </tr>
          <tr>
            <td className="time">2 pm</td>
            <Event event="1:1 Meeting" color="red" location={getRandomLocation()} />
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <Event event="Demo" color="green" location={getRandomLocation()} />
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">3 pm</td>
            <td></td>
            <td></td>
            <Event event="Check-in" color="blue" location={getRandomLocation()} />
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <Event event="Wrap Up" color="green" location={getRandomLocation()} />
          </tr>
          <tr>
            <td className="time">4 pm</td>
            <td></td>
            <Event event="Planning" color="red" location={getRandomLocation()} />
            <td></td>
            <td></td>
            <td></td>
            <Event event="Retrospective" color="blue" location={getRandomLocation()} />
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">5 pm</td>
            <Event event="Happy Hour" color="yellow" location={getRandomLocation()} />
            <td></td>
            <td></td>
            <td></td>
            <Event event="Yoga" color="red" location={getRandomLocation()} />
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Calendar;
