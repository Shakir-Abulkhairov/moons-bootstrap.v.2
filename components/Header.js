import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';
import Link from 'next/link';
import style from '../styles/Header.module.css';
const Header =()=>{
    return(
        <>
            <ul className={style.nav}>
                    <li>
                        <Link href='/'>
                            <a>
                                 Home
                            </a>
                        </Link>
                    </li>
                    <li>
                    <Link href='/About'>
                            <a>
                                 About
                            </a>
                        </Link>
                    </li>
                    <li>
                    <Link href='/moons'>
                            <a>
                                 Moons
                            </a>
                        </Link>
                    </li>
            </ul>
        </>
    )
}
export default Header;