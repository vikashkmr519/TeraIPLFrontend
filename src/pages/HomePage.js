import React, { useEffect, useState } from 'react'
import { Header } from '../components/Header'
import { ImageSlider } from '../components/ImageSlider'
import { TeamTile } from '../components/TeamTile'
import './HomePage.scss'
import { DataSlider } from '../components/DataSlider'

export const HomePage = () => {
  const [teams, setTeams] = useState([])

  useEffect(() => {
    const getAllTeams = async () => {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}teams`)
      const data = await response.json()

      setTeams(data)
    }
    getAllTeams()
  }, [])
  const slide = []
  DataSlider.map((img) => slide.push(img))
  return (
    <div className="HomePageOuter">
      <Header />
      <div className="ImageSlider">
        <ImageSlider slides={slide} />
      </div>
      <div className="HomePage">
        <div className="header-section">
          <h1 className="app-name">Tera IPL : Madness Of IPL</h1>
        </div>
        <div className="team-grid">
          {teams.map((team) => (
            <TeamTile
              teamName={team.teamName}
              totalMatches={team.totalMatches}
              totalWins={team.totalWins}
              key={team.id}
            ></TeamTile>
          ))}
        </div>
      </div>
    </div>
  )
}
