import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../../components/Button';
import style from '../../styles/ItemDetails.module.css';
function ItemDetails({planet,dataEx}) {
const {name,src,gravity,discoveryDate,discoveredBy,polarRadius,isPlanet,id,sideralOrbit} = planet
  return (
      <>
          <div className={cn('mt-5', style.block)}>
              <div className={style.img}>
                  <Image src={src} width={300} height={300} className={style.rounded} />
              </div>
              <div className={'mt-5'}>
                  <h1>Название:{dataEx(name)}</h1>
                  <h2>Гравитация:{dataEx(gravity)}</h2>
                  <h2>Дата открытия:{dataEx(discoveryDate) }</h2>
                  <h2>Ученый открывший:{dataEx(discoveredBy) }</h2>
                  <h2>Полярный Радиус:{dataEx(polarRadius) }</h2>
                  <h2>Сидеральная орбита:{dataEx(sideralOrbit)}</h2>
                  <h2>{isPlanet ? '' : 'Не'} является планетой</h2>
                  <Link href='/moons'>
                      <a>
                          <Button text='Home' />
                      </a>
                  </Link>
              </div>
          </div>
      </>
  )
}

export default ItemDetails