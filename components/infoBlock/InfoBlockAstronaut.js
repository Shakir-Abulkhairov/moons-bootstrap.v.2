import Image from 'next/image';
import style from '../../styles/InfoBlock.module.css';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
const infoBlockAstronaut =() =>{
    return(
        <Col md={4}>
            <div className={style.card}>
            <Image className={style.img}src="https://academ.info/upload/ao_images/2018/04/40661/src_749cc5c3380872cf.jpg" width="100%" height="100%" layout="responsive" objectFit="contain" alt="Card image cap" />
                    <div className={style.container}>
                        <h4><b>lorem</b></h4>
                        <p>lorem ipsum dolor</p>
                    </div>
            </div>
        </Col>
    )
}

export default infoBlockAstronaut;