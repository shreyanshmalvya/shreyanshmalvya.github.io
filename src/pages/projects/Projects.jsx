import React from 'react'
import Card from '../../components/projectCards/Card'
import Cover1 from '../../images/cover1.jpg'
import Cover2 from '../../images/cover2.png'
import Cover3 from '../../images/cover3.png'

const Projects = () => {
  return (
    <div>
        <Card image = {Cover1} color= '#000000' title= 'Thrifty AI' pos='Lead Graphic Designer · Website Devlopment Lead' desc= 'Website Revamp with custom designs and all new framework implementation' />
        <Card image = {Cover2} color= '#141415' title= 'Thrifty AI' pos='Lead Graphic Designer · Website Devlopment Lead' desc= 'Website Revamp with custom designs and all new framework implementation'/>
        <Card image = {Cover3} color= '#000000' title= 'Thrifty AI' pos='Lead Graphic Designer · Website Devlopment Lead' desc= 'Website Revamp with custom designs and all new framework implementation' />
    </div>
  )
}

export default Projects