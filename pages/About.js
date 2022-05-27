import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Button from '../components/Button';
import style from '../styles/About.module.css';


function About() {
  return (
    <>
         <div className={style.wrapper}>
             <Container> 
                <h2>About</h2>
                <div className={style.text}>
                    lorem ipsum dolor sit amet, consectetur adip
                    lorem ipsum dolor sit amet, consectetur adip
                    lorem ipsum dolor sit amet, consectetur adip
                    lorem ipsum dolor sit amet, consectetur adip
                    lorem ipsum dolor sit amet, consectetur adip
                    lorem ipsum dolor sit amet, consectetur adip
                    lorem ipsum dolor sit amet, consectetur adip
                    lorem ipsum dolor sit amet, consectetur adip
                    lorem ipsum dolor sit amet, consectetur adip
                    lorem ipsum dolor sit amet, consectetur adip
                    lorem ipsum dolor sit amet, consectetur adip
                    lorem ipsum dolor sit amet, consectetur adip
                    lorem ipsum dolor sit amet, consectetur adip
                    lorem ipsum dolor sit amet, consectetur adip


                </div>
                <div className={style.btn}> 
                    <Link href='/'>
                            <a>
                                <Button text='Home' />
                            </a>
                    </Link>
                </div>
             </Container>
        </div>
    </>
  )
}

export default About