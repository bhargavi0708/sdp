import React from 'react';
import './Home.css';

const sportsData = [
  {
    name: 'BASKETBALL',
    image: 'https://th.bing.com/th/id/OIP.cQvq8fFRTbDZX7mJp7ACgQHaEb?rs=1&pid=ImgDetMain',
    description: 'Develops teamwork, agility, and strategic thinking skills.'
  },
  {
    name: 'CRICKET',
    image: 'https://th.bing.com/th/id/R.708143c9f90cec7aa9c0ceaa11a42aa7?rik=rZk8ew4MkqHItg&riu=http%3a%2f%2fp.imgci.com%2fdb%2fPICTURES%2fCMS%2f258800%2f258875.jpg&ehk=pCb3f6PUIU5vWs94EvmnQnIpQEA44g7STRCulesnadY%3d&risl=&pid=ImgRaw&r=0',
    description: 'Enhances concentration, physical endurance, and decision-making skills. Perfect blend of individual skill and team strategy.'
  },
  {
    name: 'FOOTBALL',
    image: 'https://www.descente.co.jp/media/wp-content/uploads/2020/10/shutterstock_517663504-min.jpg',
    description: 'Builds endurance, teamwork, and tactical understanding.'
  },
  {
    name: 'VOLLEYBALL',
    image: 'https://th.bing.com/th/id/OIP.2xRk_xGsu8k4Z-HSDcWavwHaEM?rs=1&pid=ImgDetMain',
    description: 'Improves reflexes, coordination, and team communication.'
  },
  {
    name: 'ATHLETICS',
    image: 'https://th.bing.com/th/id/OIP.b4evssGjmHqGhUktv8adhQHaE7?rs=1&pid=ImgDetMain',
    description: 'Develops speed, strength, and personal excellence.'
  },
  {
    name: 'BADMINTON',
    image: 'https://blog.playo.co/wp-content/uploads/2019/02/shutterstock_794204539.jpg',
    description: 'Enhances agility, hand-eye coordination, and quick thinking.'
  }
];

const upcomingEvents = [
  {
    id: 1,
    title: "Inter-College Basketball Tournament",
    date: "2024-04-15",
    time: "14:00",
    venue: "Main Sports Complex",
    teams: "Multiple College Teams",
    sport: "Basketball"
  },
  {
    id: 2,
    title: "Annual Cricket Championship",
    date: "2024-04-20",
    time: "09:00",
    venue: "University Cricket Ground",
    teams: "8 Teams Competition",
    sport: "Cricket"
  },
  {
    id: 3,
    title: "Football League Finals",
    date: "2024-04-25",
    time: "16:30",
    venue: "Central Stadium",
    teams: "Top 2 Teams",
    sport: "Football"
  }
];

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>WELCOME TO KL SPORTS HUB</h1>
        <p>Your Gateway to Sports Excellence and Athletic Achievement</p>
      </div>

      <section className="sports-section">
        <h2 className="section-title">Popular Sports</h2>
        <div className="sports-grid">
          {sportsData.map((sport, index) => (
            <div key={index} className="sport-card">
              <div className="sport-image-container">
                <img src={sport.image} alt={sport.name} className="sport-image" />
              </div>
              <div className="sport-content">
                <h2>{sport.name}</h2>
                <p>{sport.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="events-section">
        <h2 className="section-title">Upcoming Events</h2>
        <div className="events-grid">
          {upcomingEvents.map((event) => (
            <div key={event.id} className="event-card">
              <div className="event-header">
                <h3>{event.title}</h3>
                <span className="event-sport">{event.sport}</span>
              </div>
              <div className="event-details">
                <div className="event-info">
                  <p><i className="far fa-calendar"></i> {event.date}</p>
                  <p><i className="far fa-clock"></i> {event.time}</p>
                  <p><i className="fas fa-map-marker-alt"></i> {event.venue}</p>
                </div>
                <p className="event-teams">{event.teams}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;