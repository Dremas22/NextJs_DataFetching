import Link from "next/link";
import classses from './main-header.module.css'

function MainHeader(){
    return (
    <header className={classses.header}>
        <div className={classses.logo}>
            <Link href='/'>Next Event</Link>
        </div>
        <nav className={classses.navigation}>
            <ul>
            <li>
                <Link href='/events'>Browse All Events</Link>
            </li>
            </ul>
        </nav>
    </header>
    )
}

export default MainHeader;