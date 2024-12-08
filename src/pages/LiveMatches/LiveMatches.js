import React, { useState, useEffect } from 'react';
import './LiveMatches.css';

const LIVE_MATCHES = [
  {
    id: 1,
    sport: 'Cricket',
    teams: {
      team1: { name: 'CSE Warriors', score: '156/4' },
      team2: { name: 'AIDS Strikers', score: '142/6' }
    },
    status: 'Live',
    overs: '18.4/20',
    venue: 'KLU Main Ground',
    details: {
      currentBatters: [
        { name: 'Rahul', runs: 45, balls: 32 },
        { name: 'Priya', runs: 28, balls: 20 }
      ],
      currentBowler: { name: 'Sneha', overs: '3.4', wickets: 2, runs: 28 },
      recentBalls: ['1', '4', '0', 'W', '2', '6']
    }
  },
  {
    id: 2,
    sport: 'Basketball',
    teams: {
      team1: { name: 'IOT Dragons', score: '78' },
      team2: { name: 'CSIT Phoenix', score: '82' }
    },
    status: 'Live',
    time: 'Q4 - 2:45',
    venue: 'Indoor Court 1',
    details: {
      quarter: 4,
      timeLeft: '2:45',
      fouls: { team1: 3, team2: 4 },
      timeouts: { team1: 2, team2: 1 },
      recentPlays: [
        '3-pointer by Sarah',
        'Layup by Meera',
        'Free throw by Anjali'
      ]
    }
  },
  {
    id: 3,
    sport: 'Volleyball',
    teams: {
      team1: { name: 'EEE United', score: '2' },
      team2: { name: 'CSE Warriors', score: '1' }
    },
    status: 'Live',
    set: 'Set 4',
    venue: 'KLU Indoor Stadium',
    details: {
      currentSet: 4,
      setScores: [
        { team1: 25, team2: 22 },
        { team1: 23, team2: 25 },
        { team1: 25, team2: 20 }
      ],
      currentSetScore: { team1: 15, team2: 12 },
      serves: { team1: 45, team2: 42 },
      points: { team1: 88, team2: 79 }
    }
  }
];

const updateScore = (match) => {
  switch (match.sport) {
    case 'Cricket':
      return {
        ...match.teams,
        team1: {
          ...match.teams.team1,
          score: `${parseInt(match.teams.team1.score.split('/')[0]) + Math.floor(Math.random() * 2)}/4`
        }
      };
    case 'Basketball':
      return {
        ...match.teams,
        team1: {
          ...match.teams.team1,
          score: (parseInt(match.teams.team1.score) + 2).toString()
        }
      };
    case 'Volleyball':
      return Math.random() > 0.5 ? {
        ...match.teams,
        team1: {
          ...match.teams.team1,
          score: (parseInt(match.teams.team1.score) + 1).toString()
        }
      } : match.teams;
    default:
      return match.teams;
  }
};

const LiveMatches = () => {
  const [selectedMatch, setSelectedMatch] = useState(null);
  const [liveScores, setLiveScores] = useState({});
  const [matches] = useState(LIVE_MATCHES);

  useEffect(() => {
    const interval = setInterval(() => {
      setLiveScores(prev => {
        const newScores = { ...prev };
        matches.forEach(match => {
          if (Math.random() > 0.7) {
            newScores[match.id] = updateScore(match);
          }
        });
        return newScores;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [matches]);

  const handleSelectMatch = (match) => {
    setSelectedMatch(match);
  };

  const renderMatchDetails = (match) => {
    switch (match.sport) {
      case 'Cricket':
        return (
          <div className="match-details cricket">
            <div className="current-players">
              <div className="batsmen">
                <h4>Current Batters</h4>
                {match.details.currentBatters.map((batter, index) => (
                  <div key={index} className="player-stats">
                    <span className="player-name">{batter.name}</span>
                    <span className="player-score">{batter.runs} ({batter.balls})</span>
                  </div>
                ))}
              </div>
              <div className="bowler">
                <h4>Current Bowler</h4>
                <div className="player-stats">
                  <span className="player-name">{match.details.currentBowler.name}</span>
                  <span className="player-score">
                    {match.details.currentBowler.wickets}/{match.details.currentBowler.runs} 
                    ({match.details.currentBowler.overs})
                  </span>
                </div>
              </div>
            </div>
            <div className="recent-balls">
              <h4>Recent Balls</h4>
              <div className="balls-container">
                {match.details.recentBalls.map((ball, index) => (
                  <span key={index} className={`ball ${ball === 'W' ? 'wicket' : ''}`}>
                    {ball}
                  </span>
                ))}
              </div>
            </div>
          </div>
        );

      case 'Basketball':
        return (
          <div className="match-details basketball">
            <div className="game-stats">
              <div className="stat-item">
                <span className="stat-label">Quarter</span>
                <span className="stat-value">{match.details.quarter}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Time Left</span>
                <span className="stat-value">{match.details.timeLeft}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Team Fouls</span>
                <span className="stat-value">
                  {match.details.fouls.team1} - {match.details.fouls.team2}
                </span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Timeouts Left</span>
                <span className="stat-value">
                  {match.details.timeouts.team1} - {match.details.timeouts.team2}
                </span>
              </div>
            </div>
            <div className="recent-plays">
              <h4>Recent Plays</h4>
              {match.details.recentPlays.map((play, index) => (
                <div key={index} className="play-item">{play}</div>
              ))}
            </div>
          </div>
        );

      case 'Volleyball':
        return (
          <div className="match-details volleyball">
            <div className="set-scores">
              <h4>Set Scores</h4>
              {match.details.setScores.map((set, index) => (
                <div key={index} className="set-score">
                  <span className="set-number">Set {index + 1}</span>
                  <span className="score">{set.team1} - {set.team2}</span>
                </div>
              ))}
              <div className="current-set">
                <span className="set-number">Current Set</span>
                <span className="score">
                  {match.details.currentSetScore.team1} - {match.details.currentSetScore.team2}
                </span>
              </div>
            </div>
            <div className="match-stats">
              <div className="stat-item">
                <span className="stat-label">Total Serves</span>
                <span className="stat-value">
                  {match.details.serves.team1} - {match.details.serves.team2}
                </span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Total Points</span>
                <span className="stat-value">
                  {match.details.points.team1} - {match.details.points.team2}
                </span>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="live-matches-container">
      <h1 className="section-title">Live Matches</h1>
      
      <div className="live-content">
        <div className="matches-grid">
          {matches.map(match => (
            <div 
              key={match.id} 
              className={`match-card ${selectedMatch?.id === match.id ? 'selected' : ''}`}
              onClick={() => handleSelectMatch(match)}
            >
              <div className="match-header">
                <span className="sport-tag">{match.sport}</span>
                <span className="live-indicator">LIVE</span>
              </div>

              <div className="match-content">
                <div className="team team1">
                  <h3>{match.teams.team1.name}</h3>
                  <span className="score">
                    {(liveScores[match.id]?.team1?.score || match.teams.team1.score)}
                  </span>
                </div>

                <div className="match-info">
                  <span className="vs">VS</span>
                  <span className="match-time">
                    {match.overs || match.time || match.set}
                  </span>
                </div>

                <div className="team team2">
                  <h3>{match.teams.team2.name}</h3>
                  <span className="score">
                    {(liveScores[match.id]?.team2?.score || match.teams.team2.score)}
                  </span>
                </div>
              </div>

              <div className="match-footer">
                <span className="venue">
                  <i className="fas fa-map-marker-alt"></i> {match.venue}
                </span>
              </div>
            </div>
          ))}
        </div>

        {selectedMatch && (
          <div className="live-details-section">
            <div className="details-header">
              <h2>{selectedMatch.teams.team1.name} vs {selectedMatch.teams.team2.name}</h2>
              <span className="match-type">{selectedMatch.sport} Match</span>
            </div>
            {renderMatchDetails(selectedMatch)}
          </div>
        )}
      </div>
    </div>
  );
};

export default LiveMatches;