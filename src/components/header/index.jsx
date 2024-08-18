import { Timer, ScrollText } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import './header.css'

export function Header() {
    return (
        <header className='container--header'>
            <img src="/logotipo.png" alt="Logotipo do LAB Timer365" />

            <nav>
                
                {/* <a href="#"><Timer size={24} /></a> */}
                <NavLink to='/' end><Timer size={24} /></NavLink> {/*do Lucide, vem como SVG, com várias configurações */}
                <NavLink to='/historico' end><ScrollText size={24}/></NavLink>
            </nav>
        </header>
    )
}