import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Header } from '../components/Header'
import './SingleMatch.scss'

export const SingleMatch = () => {
  const { matchId } = useParams()
  let [match, setMatch] = useState({})

  useEffect(() => {
    const fetchMatch = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}match/${matchId}`,
      )
      const data = await response.json()
      setMatch(data)
    }

    fetchMatch()
  })

  return (
    <div>
      <Header />
      <div className="SingleMatch">
        {/* <div className="top-data">
          <div className="gsd">
            <p>
              <span>Game number : </span> {match.gameNumber}
            </p>

            <p>
              <span>Season :</span> {match.season}
            </p>
            <p>
              <span>Date : </span>
              {match.date}
            </p>
          </div>
          <div className="umpires">
            <h2>Umpires</h2>
            <p>{match.umpire1}</p>
            <p>{match.umpire2}</p>
          </div>
        </div>
        <div className="teamvs">
          <h2>{match.team1}</h2>
          <p>vs</p>
          <h2>{match.team2}</h2>
        </div>
        <div className="venue">
          <h3 className="venueText">Venue : </h3>
          <h3 className="venueOutput">{match.venue}</h3>
        </div>
        <div className="toss">
          <div className="tossWinner">
            <p>
              <span>Toss Winner :</span> {match.tossWinner}
            </p>
          </div>
          <div className="tossDecision">
            <p>
              <span>Toss Decision : </span>
              {match.tossDecision}
            </p>
          </div>
        </div>

        <div className="winner">
          <div>
            {match.winningTeam} won by {match.margin} {match.wonBy}
          </div>
        </div>

        <div className="manOfTheMatch">
          <h2>Man Of The Match : </h2>
          <h2>{match.playerOfMatch}</h2>
        </div> */}
        <div className="teamVsTeamBlock">
          <div className="firstTeam">
            <p className="teamName">{match.team1}</p>
          </div>
          <div className="secondTeam">
            <p className="teamName">{match.team2}</p>
          </div>
        </div>
        <div className="gsd">
          <div className="gameNumber hover">
            <h3>Game Number</h3>
            <p>{match.gameNumber}</p>
          </div>
          <div className="season hover">
            <h3>Season</h3>
            <p>{match.season}</p>
          </div>
          <div className="date hover">
            <h3>Date</h3>
            <p>{match.date}</p>
          </div>
        </div>
        <div className="venue">
          <div className="venueImage">
            <img
              src="https://t3.ftcdn.net/jpg/04/90/22/02/360_F_490220283_UKOlZwb2pS3wAbpqJkconjzfAx3JpIbT.jpg"
              alt="venueImage"
            ></img>
          </div>
          <div className="venueName">
            <h2>{match.venue}</h2>
          </div>
        </div>
        <div className="toss">
          <div className="tossInside rotate">
            <h3>Toss Winner</h3>
            <p>{match.tossWinner}</p>
          </div>
          <div className="tossInside rotate">
            <h3>Toss Decision</h3>
            <p>{match.tossDecision}</p>
          </div>
        </div>
        <div className="winner">
          <div className="winnerName pulse">
            <h3>Winner</h3>
            <h2>
              {match.winningTeam} won by {match.margin} {match.wonBy}
            </h2>
          </div>
        </div>
        <div className="manOfMatch">
          <div className="playerName shake">
            <h3>Player Of the Match</h3>
            <h2>{match.playerOfMatch}</h2>
          </div>
        </div>
        <div className="umpires">
          <div className="umpire hover">
            <h3>Umpire 1</h3>
            <h2>{match.umpire1}</h2>
          </div>
          <div className="umpire hover">
            <h3>Umpire 2</h3>
            <h2>{match.umpire2}</h2>
          </div>
        </div>
      </div>
    </div>
  )
}
