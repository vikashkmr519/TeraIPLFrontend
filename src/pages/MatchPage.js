import { React, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Header } from '../components/Header'
import { MatchDetailCard } from '../components/MatchDetailCard'
import './MatchPage.scss'
import { YearSelector } from './YearSelector'

export const MatchPage = () => {
  const { teamName, year } = useParams()
  const [matches, setMatches] = useState([])

  useEffect(() => {
    const fetchMatches = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}team/${teamName}/matches?year=${year}`,
      )
      const data = await response.json()
      setMatches(data)
      console.log(data)
    }
    fetchMatches()
  }, [teamName, year])

  return (
    <div className="MatchPageOuter">
      <Header />
      <div className="MatchPage">
        <div className="year-selector">
          <h3>Select Year</h3>
          <YearSelector teamName={teamName} />
        </div>
        <div>
          <h1 className="page-heading">
            Matches of {teamName} in {year}
          </h1>
          {matches.length === 0 ? (
            <h1 className="team-did-not-played">
              Team did not played this season
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
                id="IconChangeColor"
                height="86"
                width="86"
              >
                <rect width="256" height="256" fill="none"></rect>
                <circle
                  cx="128"
                  cy="128"
                  r="96"
                  fill="none"
                  stroke="#000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="24"
                ></circle>
                <circle cx="92" cy="108" r="16"></circle>
                <circle cx="164" cy="108" r="16"></circle>
                <path
                  d="M165.3,169.8a48,48,0,0,0-74.6,0"
                  fill="none"
                  stroke="#000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="24"
                  id="mainIconPathAttribute"
                ></path>
              </svg>
            </h1>
          ) : (
            matches.map((match) => (
              <MatchDetailCard
                teamName={teamName}
                match={match}
                key={match.id}
              />
            ))
          )}
        </div>
      </div>
    </div>
  )
}
