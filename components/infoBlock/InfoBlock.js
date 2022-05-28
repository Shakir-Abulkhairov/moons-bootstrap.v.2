
import InfoBlockAstronaut from './InfoBlockAstronaut';
import Container from 'react-bootstrap/Container';
import Link from 'next/link';
import Button from '../Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import cn from 'classnames';
import Image from 'next/image';
import style from '../../styles/InfoBlock.module.css';
import Layout from '../Layout';




function InfoBlock() {
  return (
    <>
      <Layout>
      <div className={style.wrapper}>
           <Container>
                 <h2 className={cn(style.title,style.white)}> planetary satellites </h2>
                 <div className={cn(style.subtitle,style.white)}>lorem ipsum dolor sit am</div>
                <div className='d-flex '>
                    <Row >
                        <Col md={7}>
                              <div className='mt-5'>
                                  <Image
                                      src={'https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2020_29/2463761/180613-mars-rover-ew-102p.jpg'}
                                      width={700} height={500} alt />
                              </div>
                        </Col>
                        <Col md={5}>
                              <div className={cn(style.blockText,style.white)}>
                              <h2 className={cn(style.title,style.white)}> planetary satellites </h2>
                                  lorem ipsum dolor sit amet, consectetur adip
                                  lorem ipsum dolor sit amet, consectetur adip
                                  lorem ipsum dolor sit
                                  lorem ipsum dolor sit amet, consectetur adip
                                  lorem ipsum dolor sit amet, consectetur adip
                                  lorem ipsum dolor sit
                                  lorem ipsum dolor sit amet, consectetur adip
                                  lorem ipsum dolor sit amet, consectetur adip
                                  lorem ipsum dolor sit
                                <br/>
                                <br/>
                                <br/>
                                  lorem ipsum dolor sit amet, consectetur adip
                                  lorem ipsum dolor sit amet, consectetur adip
                                  lorem ipsum dolor sit
                              </div>
                        </Col>                    
                    </Row>
                </div>
                <div>
                    <Row>
                    <h2 className={cn(style.title,style.white,'mt-5')}> astronauts</h2>
                        <InfoBlockAstronaut/>
                        <InfoBlockAstronaut/>
                        <InfoBlockAstronaut/>
                        <InfoBlockAstronaut/>
                        <InfoBlockAstronaut/>
                        <InfoBlockAstronaut/>
                    </Row>
                    <Link href='/About'>
                      <a>
                          <Button text='About' />
                      </a>
                  </Link>
                </div>
           </Container>
        </div>
      </Layout>
    </>
  )
}

export default InfoBlock

