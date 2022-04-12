import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div className="footerWrapper">
      <div className="lineBreakWrapper">
        <hr />
      </div>
      <div className="connectionsWrapper">
        <div className="connectionsLeft">
          <div className="connectionsLeftTitle">
            Lets build something together
          </div>
          <div className=".connectionsLeftContent">
          </div>
        </div>
        <div className="connectionsRight">
          <div className="projects">
            <div className="projectsTitle">
              Projects
            </div>
            <ul className='projectsList'>
              <li className='projectListItem'>DESIGNS</li>
              <li className='projectListItem'>WEBSITES</li>
            </ul>
          </div>
          <div className="more">
            <div className="moreTitle">
              More
            </div>
            <ul className='moreList'>
              <li className='moreListItem'>ABOUT</li>
              <li className='moreListItem'>RESUME</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer