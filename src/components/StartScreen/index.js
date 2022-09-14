import { useState } from 'react';
import logo from './../../assets/logo.png';
import './index.css';
import Engine from '../Engine';
import barbarian from '../../assets/characters/barbarian/barbarian_1.png';
import soldier from '../../assets/characters/wizard/wizard_1.png';
import wizard from '../../assets/characters/soldier/soldier.png';
import packageJson from '../../../package.json';

const HEROES = { BARBARIAN: 1, WIZARD: 2, WARRIOR: 3 }

const NewGame = () => {
    const [newGame, setNewGame] = useState(false);
    const [hero, setHero] = useState(HEROES.BARBARIAN);
    const [isSelectedHero, setIsSelectedHero] = useState(false);

    const selectHero = (hero) => {
        setHero(hero); setNewGame(true);
    }

    return (newGame ?
        <Engine hero={hero} /> : <>
            <div className="background">
                <div className="center ">
                    <center>
                        <img src={logo} alt="THE SINNERS" width="100%" />
                    </center>
                    {isSelectedHero ?
                        <>
                            <div className="menu">
                                <img className="menu-item" src={barbarian} width="150" alt="barbarian" />
                                <img className="menu-item" src={soldier} width="150" alt="soldier" />
                                <img className="menu-item" src={wizard} width="150" alt="wizzard" />
                            </div>
                            <div className="menu">
                                <button className="menu-item" onClick={() => { selectHero(HEROES.BARBARIAN); }} alt="Barbarian">Barbarian </button>
                                <button className="menu-item" onClick={() => { selectHero(HEROES.WIZARD); }} alt="Wizard"> Wizard</button>
                                <button className="menu-item" onClick={() => { selectHero(HEROES.WARRIOR); }} alt="Warrior">Warrior </button>
                            </div></> :
                        <center>
                            <div><button onClick={() => { setIsSelectedHero(true) }}>NEW GAME </button></div>
                        </center>

                    }
                    <center>v.{packageJson.version}</center>
                </div>
            </div>
        </>);
}

export default NewGame;