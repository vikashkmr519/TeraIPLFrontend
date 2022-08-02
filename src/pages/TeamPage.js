import { React, useEffect, useState } from 'react'
import { PieChart } from 'react-minimal-pie-chart'
import { Link, useParams } from 'react-router-dom'
import { Header } from '../components/Header'
import { MatchDetailCard } from '../components/MatchDetailCard'
import { MatchSmallCard } from '../components/MatchSmallCard'
import './TeamPage.scss'

export const TeamPage = () => {
  const [team, setTeam] = useState({ matches: [] })

  const { teamName } = useParams()

  useEffect(() => {
    const fetchMatches = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}team/${teamName}/4`,
      )
      const data = await response.json()
      console.log(data)
      setTeam(data)
    }
    fetchMatches()
  }, [teamName])

  if (!team || !team.teamName) return <h1> Team not found</h1>
  return (
    <div className="TeamPageOuter">
      <div className="Header">
        <Header />
      </div>
      <div className="TeamPage">
        <div className="TeamPage1">
          <div className="team-name-section">
            <h1 className="team-name">{team.teamName}</h1>
          </div>
          <div className="win-loss-section">
            Wins / Losses
            <PieChart
              data={[
                {
                  title: 'Losses',
                  value: team.totalMatches - team.totalWins,
                  color: '#CC0000',
                },
                { title: 'Wins', value: team.totalWins, color: '#008200' },
              ]}
            ></PieChart>
          </div>
        </div>
        <div className="match-detail-section">
          <MatchDetailCard
            className="inside-match-detail-section"
            teamName={team.teamName}
            match={team.matches[0]}
          />
        </div>
        <div className="smallCards">
          {team.matches.slice(1).map((match) => (
            <div className="smallCard">
              <MatchSmallCard
                className="smallCard"
                teamName={team.teamName}
                match={match}
                key={match.id}
              />
            </div>
          ))}

          <div className="more-link">
            <Link
              to={`/teams/${teamName}/matches/${process.env.REACT_APP_DATA_END_YEAR}`}
            >
              <p className="more">More>></p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
