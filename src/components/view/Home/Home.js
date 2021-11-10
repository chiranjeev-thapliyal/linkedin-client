import React from 'react'
// import { Container } from './Header.Styles'
// import styled from 'styled-components'
import '../../../styles/components/home.css'
import LeftSide from './LeftSide'
import Main from './Main'
import RightSide from './Rightside'

export default function Home() {
    return (
        <div className='mainContainer'>
            
            <section><LeftSide/></section>
            <section><Main/></section>
            <section><RightSide/></section>

       </div>
    )
}
