import { Link } from 'react-router-dom';
import './navBar.scss'

const NavBar =()=> {
    const items = ["Mouse", "Monitores"];

    return(
        <nav>
            <ul>
                <Link key={'todos'} to={'/'}>
                    <li>Mostrar todos</li>
                </Link>
                {items.map((item, index)=>{
                    return (
                        <Link key={index} to={`/category/${item}`}>
                            <li>{item}</li>
                        </Link>
                    )
                })}
            </ul>
        </nav>
    )
}

export { NavBar };