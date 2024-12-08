import React from 'react';
import Card from '../../components/Card/Card';
import './Departments.css';

const Departments = () => {
  console.log('Departments component rendering');
  const departments = [
    {
      id: 1,
      name: "Computer Science Engineering",
      code: "CSE",
      achievements: {
        tournaments: 12,
        trophies: 5,
        medals: 25
      },
      topAthletes: 8,
      currentRank: 2,
      sports: ["Cricket", "Basketball", "Athletics"]
    },
    {
      id: 2,
      name: "Computer Science and IT",
      code: "CS-IT",
      achievements: {
        tournaments: 10,
        trophies: 4,
        medals: 18
      },
      topAthletes: 6,
      currentRank: 4,
      sports: ["Football", "Table Tennis", "Chess"]
    },
    {
      id: 3,
      name: "Electronics and Communication",
      code: "ECE",
      achievements: {
        tournaments: 15,
        trophies: 6,
        medals: 30
      },
      topAthletes: 10,
      currentRank: 1,
      sports: ["Volleyball", "Athletics", "Badminton"]
    },
    {
      id: 4,
      name: "Electrical and Electronics",
      code: "EEE",
      achievements: {
        tournaments: 8,
        trophies: 3,
        medals: 15
      },
      topAthletes: 5,
      currentRank: 6,
      sports: ["Basketball", "Cricket", "Chess"]
    },
    {
      id: 5,
      name: "AI and Data Science",
      code: "AIDS",
      achievements: {
        tournaments: 11,
        trophies: 4,
        medals: 22
      },
      topAthletes: 7,
      currentRank: 3,
      sports: ["Table Tennis", "Badminton", "Athletics"]
    },
    {
      id: 6,
      name: "Internet of Things",
      code: "IoT",
      achievements: {
        tournaments: 9,
        trophies: 3,
        medals: 16
      },
      topAthletes: 6,
      currentRank: 5,
      sports: ["Football", "Cricket", "Chess"]
    },
    {
      id: 7,
      name: "Arts and Sciences",
      code: "ARTS",
      achievements: {
        tournaments: 14,
        trophies: 5,
        medals: 28
      },
      topAthletes: 9,
      currentRank: 2,
      sports: ["Athletics", "Basketball", "Volleyball"]
    }
  ];

  return (
    <div className="departments-container">
      <div className="departments-header">
        <h1>Department Sports Rankings</h1>
        <p>Department sports achievements and rankings</p>
      </div>

      <div className="departments-grid">
        {departments.map(dept => (
          <Card key={dept.id}>
            <div className="department-card">
              <div className="department-header">
                <h2>{dept.code}</h2>
                <span className="rank">Rank #{dept.currentRank}</span>
              </div>
              <h3>{dept.name}</h3>
              
              <div className="achievements-grid">
                <div className="achievement-item">
                  <span className="achievement-value">{dept.achievements.tournaments}</span>
                  <span className="achievement-label">Tournaments</span>
                </div>
                <div className="achievement-item">
                  <span className="achievement-value">{dept.achievements.trophies}</span>
                  <span className="achievement-label">Trophies</span>
                </div>
                <div className="achievement-item">
                  <span className="achievement-value">{dept.achievements.medals}</span>
                  <span className="achievement-label">Medals</span>
                </div>
              </div>

              <div className="department-details">
                <div className="top-athletes">
                  <span className="detail-label">Top Athletes:</span>
                  <span className="detail-value">{dept.topAthletes}</span>
                </div>
                <div className="sports-list">
                  <span className="detail-label">Top Sports:</span>
                  <div className="sport-tags">
                    {dept.sports.map((sport, index) => (
                      <span key={index} className="sport-tag">{sport}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Departments; 