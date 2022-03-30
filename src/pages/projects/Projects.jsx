import React from 'react'
import Card from '../../components/projectCards/Card'
import Cover2 from '../../images/cover2.png'

const Projects = () => {
  return (
    <div>
        <Card image = {Cover2} color= '#000000' title= 'Thrifty AI' pos='Lead Graphic Designer · Website Devlopment Lead' desc= 'Website Revamp with custom designs and all new framework implementation' />
        <Card image = {Cover2} color= '#141415' title= 'Thrifty AI' pos='Lead Graphic Designer · Website Devlopment Lead' desc= 'Website Revamp with custom designs and all new framework implementation'/>
        <Card image = {Cover2} color= '#000000' title= 'Thrifty AI' pos='Lead Graphic Designer · Website Devlopment Lead' desc= 'Website Revamp with custom designs and all new framework implementation' />
    </div>
  )
}

export default Projects