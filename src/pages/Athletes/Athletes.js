import React, { useState } from 'react';
import './Athletes.css';

const Athletes = () => {
  const [selectedSport, setSelectedSport] = useState('all');
  
  const athletes = [
    {
      id: 1,
      name: 'Rahul Kumar',
      department: 'CSE',
      sport: 'Cricket',
      position: 'All-rounder',
      achievements: ['Best Player 2023', 'Most Wickets'],
      stats: {
        matches: 45,
        average: 48.5,
        wickets: 65
      }
    },
    {
      id: 2,
      name: 'Priya Singh',
      department: 'AIDS',
      sport: 'Basketball',
      position: 'Point Guard',
      achievements: ['MVP 2023', 'Most Assists'],
      stats: {
        points: 18.5,
        assists: 7.2,
        rebounds: 4.8
      }
    },
    {
      id: 3,
      name: 'Arun Reddy',
      department: 'ECE',
      sport: 'Football',
      position: 'Striker',
      achievements: ['Golden Boot 2023', 'Most Goals'],
      stats: {
        goals: 28,
        assists: 12,
        matches: 34
      }
    },
    {
      id: 4,
      name: 'Karthik Sharma',
      department: 'CSE',
      sport: 'Volleyball',
      position: 'Setter',
      achievements: ['Best Setter 2023', 'Tournament MVP'],
      stats: {
        matches: 32,
        assists: 456,
        aces: 45
      }
    },
    {
      id: 5,
      name: 'Sneha Patel',
      department: 'IoT',
      sport: 'Badminton',
      position: 'Singles',
      achievements: ['Singles Champion 2023', 'Most Improved Player'],
      stats: {
        matches: 28,
        wins: 22,
        tournaments: 8
      }
    },
    {
      id: 6,
      name: 'Mohammed Ali',
      department: 'AIDS',
      sport: 'Cricket',
      position: 'Bowler',
      achievements: ['Best Bowler 2023', 'Hat-trick Award'],
      stats: {
        matches: 38,
        wickets: 85,
        economy: 6.2
      }
    },
    {
      id: 7,
      name: 'Ananya Reddy',
      department: 'CS-IT',
      sport: 'Basketball',
      position: 'Shooting Guard',
      achievements: ['Highest Scorer 2023', '3-Point Champion'],
      stats: {
        points: 22.4,
        threePointers: 98,
        steals: 45
      }
    },
    {
      id: 8,
      name: 'Ravi Teja',
      department: 'EEE',
      sport: 'Football',
      position: 'Midfielder',
      achievements: ['Best Midfielder 2023', 'Most Assists'],
      stats: {
        matches: 30,
        goals: 12,
        assists: 24
      }
    },
    {
      id: 9,
      name: 'Deepika Kumari',
      department: 'ECE',
      sport: 'Badminton',
      position: 'Doubles',
      achievements: ['Doubles Champion 2023', 'Best Partnership'],
      stats: {
        matches: 34,
        wins: 28,
        tournaments: 6
      }
    }
  ];

  const filteredAthletes = selectedSport === 'all' 
    ? athletes 
    : athletes.filter(athlete => athlete.sport.toLowerCase() === selectedSport);

  return (
    <div className="athletes-container">
      <h1 className="section-title">Athletes</h1>
      
      <div className="filters">
        <select 
          value={selectedSport} 
          onChange={(e) => setSelectedSport(e.target.value)}
          className="sport-filter"
        >
          <option value="all">All Sports</option>
          <option value="cricket">Cricket</option>
          <option value="basketball">Basketball</option>
          <option value="football">Football</option>
          <option value="volleyball">Volleyball</option>
          <option value="badminton">Badminton</option>
        </select>
      </div>

      <div className="athletes-grid">
        {filteredAthletes.map(athlete => (
          <div key={athlete.id} className="athlete-card">
            <div className="athlete-header">
              <div className="athlete-info">
                <h2>{athlete.name}</h2>
                <div className="athlete-tags">
                  <span className="department">{athlete.department}</span>
                  <span className="sport-tag">{athlete.sport}</span>
                </div>
                <span className="position-tag">{athlete.position}</span>
              </div>
            </div>

            <div className="athlete-stats">
              <h3>Statistics</h3>
              {Object.entries(athlete.stats).map(([key, value]) => (
                <div key={key} className="stat-item">
                  <span className="stat-label">{key}</span>
                  <span className="stat-value">{value}</span>
                </div>
              ))}
            </div>

            <div className="athlete-achievements">
              <h3>Achievements</h3>
              <ul>
                {athlete.achievements.map((achievement, index) => (
                  <li key={index}>{achievement}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Athletes;