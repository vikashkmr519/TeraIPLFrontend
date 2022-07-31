import React from 'react'
import { Link } from 'react-router-dom'
import './MatchSmallCard.scss'

export const MatchSmallCard = ({ teamName, match }) => {
  if (!match) return null
  const otherTeam = teamName === match.team1 ? match.team2 : match.team1
  const isMatchWon = teamName === match.winningTeam
  const otherTeamRoute = `/teams/${otherTeam}`
  return (
    <div
      className={
        isMatchWon ? 'MatchSmallCard won-card' : 'MatchSmallCard lost-card'
      }
    >
      <span className="vs">vs</span>
      <h3>
        <Link to={otherTeamRoute}>
          <p className="text">{otherTeam}</p>
        </Link>
      </h3>
      <p className="match-result">
        {match.winningTeam} won by {match.margin} {match.wonBy}
      </p>
    </div>
  )
}
