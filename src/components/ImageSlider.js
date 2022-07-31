import React, { useState } from 'react'
import './ImageSlider.scss'
export const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const slideStyle = {
    width: '100%',
    height: '100%',
    borderRadius: '10px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundImage: `url(${slides[currentIndex].img})`,
  }
  const goToLeft = () => {
    const newIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const goToRight = () => {
    const newIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  return (
    <div className="ImageSlider">
      <div className="leftArrow" onClick={goToLeft}>
        <div className="left">⬅</div>
      </div>
      <div className="rightArrow" onClick={goToRight}>
        <div className="right">⮕</div>
      </div>
      <div style={slideStyle}></div>
    </div>
  )
}
