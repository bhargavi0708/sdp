import React from 'react';
import Card from '../../components/Card/Card';
import './Tournaments.css';

const Tournaments = () => {
  const tournaments = [
    {
      id: 1,
      name: "Inter-Department Cricket Championship",
      status: "Ongoing",
      matches: [
        {
          round: "Quarter Finals",
          matches: [
            { teams: "CSE vs AIDS", time: "10:00 AM", date: "2024-03-25" },
            { teams: "CS-IT vs ECE", time: "2:00 PM", date: "2024-03-25" },
            { teams: "IoT vs EEE", time: "10:00 AM", date: "2024-03-26" }
          ]
        }
      ]
    },
    {
      id: 2,
      name: "Basketball Tournament",
      status: "Upcoming",
      matches: [
        {
          round: "Group Stage",
          matches: [
            { teams: "CSE vs ECE", time: "11:00 AM", date: "2024-03-28" },
            { teams: "AIDS vs IoT", time: "3:00 PM", date: "2024-03-28" },
            { teams: "CS-IT vs EEE", time: "5:00 PM", date: "2024-03-28" }
          ]
        }
      ]
    },
    {
      id: 3,
      name: "Volleyball Championship",
      status: "Ongoing",
      matches: [
        {
          round: "Semi Finals",
          matches: [
            { teams: "CSE vs IoT", time: "9:00 AM", date: "2024-03-30" },
            { teams: "AIDS vs ECE", time: "11:00 AM", date: "2024-03-30" }
          ]
        }
      ]
    },
    {
      id: 4,
      name: "Table Tennis Tournament",
      status: "Upcoming",
      matches: [
        {
          round: "Group Stage",
          matches: [
            { teams: "CSE vs EEE", time: "10:00 AM", date: "2024-04-02" },
            { teams: "CS-IT vs IoT", time: "2:00 PM", date: "2024-04-02" },
            { teams: "AIDS vs ECE", time: "4:00 PM", date: "2024-04-02" }
          ]
        }
      ]
    },
    {
      id: 5,
      name: "Badminton Championship",
      status: "Registration Open",
      matches: [
        {
          round: "Qualifiers",
          matches: [
            { teams: "CSE vs CS-IT", time: "9:00 AM", date: "2024-04-05" },
            { teams: "ECE vs IoT", time: "11:00 AM", date: "2024-04-05" },
            { teams: "AIDS vs EEE", time: "2:00 PM", date: "2024-04-05" }
          ]
        }
      ]
    },
    {
      id: 6,
      name: "Chess Championship",
      status: "Registration Open",
      matches: [
        {
          round: "Preliminary Round",
          matches: [
            { teams: "CSE vs AIDS", time: "10:00 AM", date: "2024-04-08" },
            { teams: "ECE vs CS-IT", time: "2:00 PM", date: "2024-04-08" },
            { teams: "IoT vs EEE", time: "4:00 PM", date: "2024-04-08" }
          ]
        }
      ]
    },
    {
      id: 7,
      name: "Carrom Tournament",
      status: "Registration Open",
      matches: [
        {
          round: "Preliminary Round",
          matches: [
            { teams: "CSE vs IoT", time: "9:00 AM", date: "2024-04-10" },
            { teams: "AIDS vs CS-IT", time: "11:00 AM", date: "2024-04-10" },
            { teams: "ECE vs EEE", time: "2:00 PM", date: "2024-04-10" }
          ]
        }
      ]
    }
  ];

  return (
    <div className="tournaments-container">
      <h1>Department Tournaments</h1>
      <div className="tournaments-grid">
        {tournaments.map(tournament => (
          <Card key={tournament.id}>
            <div className="tournament-card">
              <div className="tournament-header">
                <h2>{tournament.name}</h2>
                <span className={`tournament-status ${tournament.status.toLowerCase().replace(' ', '-')}`}>
                  {tournament.status}
                </span>
              </div>
              {tournament.matches.map((round, index) => (
                <div key={index} className="tournament-round">
                  <h3>{round.round}</h3>
                  <div className="matches-list">
                    {round.matches.map((match, matchIndex) => (
                      <div key={matchIndex} className="match-item">
                        <div className="match-teams">{match.teams}</div>
                        <div className="match-details">
                          <span>{match.date}</span>
                          <span>{match.time}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
              <button className="register-button">Register Now</button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Tournaments; 