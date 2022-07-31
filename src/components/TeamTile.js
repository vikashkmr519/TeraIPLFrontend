import React from 'react'
import './TeamTile.scss'
import { Link } from 'react-router-dom'

export const TeamTile = ({ teamName, totalMatches, totalWins }) => {
  return (
    <div className="TeamTile">
      <Link to={`teams/${teamName}`}>
        <div className="TeamTileData">
          <h1 className="team-name">{teamName}</h1>
          <h2 className="text">Total Matches : {totalMatches}</h2>
          <h2 className="text">Total Wins : {totalWins}</h2>
        </div>
      </Link>
    </div>
  )
}
