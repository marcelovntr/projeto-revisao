import { Header } from "../components/header";
//import PropTypes from 'prop-types' // NECESSITA INSTALAR: npm install prop-types
import { Outlet } from 'react-router-dom'
import './template.css'

export function Layout() { //Layout({ title, children }) <-- antes do Outlet
    return (
        <>
            <Header />
            <main className="container--template">
                <div className="container--template-contents">
                    {/* <h1>{title}</h1>
                    {children} */}
                    <Outlet />
                </div>
            </main>
        </>
    )
}

//saiu ao aplicar o Outlet
// Layout.propTypes = {
//     children: PropTypes.node, //node <-- recebe vários tipos (element, div, etc.)
// }