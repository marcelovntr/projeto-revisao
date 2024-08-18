import { Header } from "../components/header";
import PropTypes from 'prop-types' // NECESSITA INSTALAR: npm install prop-types
import './template.css'

export function Layout({ title, children }) {
    return (
        <>
            <Header />
            <main className="container--template">
                <div className="container--template-contents">
                    {/*<h1>{title}</h1>*/}
                    {children}
                </div>
            </main>
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node, //node <-- recebe vários tipos (element, div, etc.)
}