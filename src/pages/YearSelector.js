import React from 'react'
import { Link } from 'react-router-dom'
import './YearSelector.scss'

export const YearSelector = ({ teamName }) => {
  let years = []
  const startYear = process.env.REACT_APP_DATA_START_YEAR
  const endYear = process.env.REACT_APP_DATA_END_YEAR

  for (let i = endYear; i >= startYear; i--) {
    years.push(i)
  }
  return years.map((year) => (
    <div className="YearSelector" key={year}>
      <li className="list-item" key={year}>
        <Link key={year} to={`/teams/${teamName}/matches/${year}`}>
          <h3 className="text">{year}</h3>
        </Link>
      </li>
    </div>
  ))
}
