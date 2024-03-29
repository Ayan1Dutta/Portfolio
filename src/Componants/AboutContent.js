import React from 'react'
import Experience from "./ExperienceData"
import TecCard from './TecCard'
import coding from "./CodingProfile"
import "./TecCard.css"
const AboutContent = () => {
  return (
    <>
    <div className="work-contanier">
      <h1 className="project-heading">Tecnical Skills</h1>
      <div className="abc">
        {Experience.map((val, ind) => {
          return <TecCard
            key={ind}
            imgsrc={val.imgsrc}
            title={val.title}
          />
        })}
      </div>
    </div>
    <div className="work-contanier">
      <h1 className="project-heading">Coding Profiles</h1>
      <div className="abc">
        {coding.map((val, ind) => {
          return <TecCard
            key={ind}
            imgsrc={val.imgsrc}
            title={val.title}
            src={val.src}
          />
        })}
      </div>
    </div>
    </>
  )
}

export default AboutContent