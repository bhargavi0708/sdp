import React, { useState } from 'react';
import Card from '../../components/Card/Card';
import './PlayerStats.css';

const PlayerStats = () => {
  const [players] = useState([
    {
      id: 1,
      name: "Arjun Kumar",
      department: "CSE",
      sport: "Cricket",
      year: "3rd Year",
      stats: {
        matches: 15,
        runs: 485,
        wickets: 12,
        rating: 8.8
      }
    },
    {
      id: 2,
      name: "Priya Patel",
      department: "AIDS",
      sport: "Badminton",
      year: "2nd Year",
      stats: {
        matches: 20,
        wins: 16,
        tournaments: 4,
        rating: 9.2
      }
    },
    {
      id: 3,
      name: "Rahul Sharma",
      department: "ECE",
      sport: "Basketball",
      year: "4th Year",
      stats: {
        matches: 18,
        points: 246,
        assists: 52,
        rating: 8.9
      }
    },
    {
      id: 4,
      name: "Ananya Singh",
      department: "CS-IT",
      sport: "Table Tennis",
      year: "2nd Year",
      stats: {
        matches: 22,
        wins: 17,
        tournaments: 5,
        rating: 9.0
      }
    },
    {
      id: 5,
      name: "Karthik Reddy",
      department: "IoT",
      sport: "Volleyball",
      year: "3rd Year",
      stats: {
        matches: 16,
        points: 198,
        blocks: 45,
        rating: 8.7
      }
    },
    {
      id: 6,
      name: "Meera Desai",
      department: "EEE",
      sport: "Athletics",
      year: "2nd Year",
      stats: {
        events: 12,
        medals: 7,
        records: 2,
        rating: 9.3
      }
    },
    {
      id: 7,
      name: "Vikram Choudhary",
      department: "CSE",
      sport: "Football",
      year: "3rd Year",
      stats: {
        matches: 14,
        goals: 12,
        assists: 8,
        rating: 8.6
      }
    },
    {
      id: 8,
      name: "Riya Verma",
      department: "AIDS",
      sport: "Chess",
      year: "1st Year",
      stats: {
        matches: 25,
        wins: 20,
        tournaments: 6,
        rating: 9.4
      }
    },
    {
      id: 9,
      name: "Aditya Nair",
      department: "ECE",
      sport: "Swimming",
      year: "4th Year",
      stats: {
        events: 15,
        medals: 8,
        records: 1,
        rating: 8.9
      }
    },
    {
      id: 10,
      name: "Kavya Menon",
      department: "CS-IT",
      sport: "Kabaddi",
      year: "3rd Year",
      stats: {
        matches: 20,
        points: 156,
        tackles: 48,
        rating: 8.8
      }
    }
  ]);

  return (
    <div className="player-stats-container">
      <h1>Student Athletes Statistics</h1>
      <div className="stats-grid">
        {players.map(player => (
          <Card key={player.id}>
            <div className="player-card">
              <div className="player-info">
                <h3>{player.name}</h3>
                <p>{player.department} - {player.year}</p>
                <p className="sport-tag">{player.sport}</p>
              </div>
              <div className="stats-grid-container">
                {Object.entries(player.stats).map(([key, value]) => (
                  <div key={key} className="stat-item">
                    <span className="stat-label">{key.charAt(0).toUpperCase() + key.slice(1)}</span>
                    <span className="stat-value">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PlayerStats; 