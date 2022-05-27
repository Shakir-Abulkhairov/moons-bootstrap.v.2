
import Container from 'react-bootstrap/Container';
import Link from 'next/link';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import style from '../styles/Promo.module.css';
import Header from './Header';
import Button from './Button';
function Promo() {
  return (
    <>
        <div className={style.promo}>
            <Container>
                <Row>
                    <Header/>
                      <Col md={5} className={style.text}>
                        Welcome to the Moons
                        <div>discover new beauties</div>
                       <Link href="/moons">
                          <a>
                            <Button text='Start'/>
                          </a>
                       </Link>
                      </Col>
                </Row>
            </Container>
        </div>
    </>
  )
}

export default Promo