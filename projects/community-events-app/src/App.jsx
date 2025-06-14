import "./App.css";

const events = [
  {
    title: "Yoga in the Park",
    date: "June 20, 2025",
    location: "Greenwood Park",
    description: "Free morning yoga session for all ages.",
  },
  {
    title: "Mental Health Workshop",
    date: "June 22, 2025",
    location: "Community Center Room B",
    description: "Learn strategies for managing strnss and anxiety.",
  },
  {
    title: "Nutrition 101",
    date: "June 25, 2025",
    location: "Local Library",
    description: "A free talk on healthy eating habits.",
  },
  {
    title: "Community Gardening",
    date: "June 27, 2025",
    location: "Sunset Garden",
    description: "Join us in planting seasonal vegetables.",
  },
  {
    title: "Blood Donation Drive",
    date: "July 1, 2025",
    location: "Town Hall",
    description: "Donate blood and help save lives.",
  },
  {
    title: "Free Dental Checkup",
    date: "July 3, 2025",
    location: "Community Health Clinic",
    description: "Free checkups offered by local dentists.",
  },
  {
    title: "Walking Group Meetup",
    date: "July 5, 2025",
    location: "City Trail Entrance",
    description: "Morning walks for fitness and fun.",
  },
  {
    title: "Meditation for Beginners",
    date: "July 8, 2025",
    location: "Harmony Hall",
    description: "Introductory guided meditation session.",
  },
  {
    title: "Healthy Cooking Class",
    date: "July 10, 2025",
    location: "Kitchen Studio 3",
    description: "Hands-on class for cooking nutritious meals.",
  },
  {
    title: "CPR Training",
    date: "July 12, 2025",
    location: "Fire Station #4",
    description: "Learn life-saving CPR techniques.",
  },
];

const EventCard = ({ title, date, location, description }) => (
  <div className="card">
    <h3>{title}</h3>
    <p>
      <strong>Date:</strong> {date}
    </p>
    <p>
      <strong>Location:</strong> {location}
    </p>
    <p>{description}</p>
  </div>
);

function App() {
  return (
    <div className="container">
      <h1 className="header">Community Wellness Events</h1>
      <div className="grid">
        {events.map((event, index) => (
          <EventCard key={index} {...event} />
        ))}
      </div>
    </div>
  );
}

export default App;
