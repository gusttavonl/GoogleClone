import React from 'react'
import './Home.css'
import { Link } from "react-router-dom"
import AppsIcon from "@material-ui/icons/Apps"
import {Avatar, Button} from "@material-ui/core"
import Search from "../../components/Search/Search"

function Home() {
    return (
        <div className='home'>
            <div className='header'>
                <div className='headerleft'>
                    <Link to='/about'>Sobre</Link>
                    <Link to='/store'>Loja</Link>
                </div>
                <div className='headerright'>
                    <Link to='/gmail'>Gmail</Link>
                    <Link to='/images'>Imagens</Link>
                    <AppsIcon />
                    <Avatar />
                </div>
            </div>

            <div className='body'>
            <img src = "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
                alt=""
            />
            <div className="inputcontainer" />
                {/* Component criado para o input com dois icones */}
                <Search/> 
            </div>
        </div>
    )
}

export default Home
