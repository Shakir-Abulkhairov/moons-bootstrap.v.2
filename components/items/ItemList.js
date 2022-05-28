import style from'../../styles/ItemList.module.scss';

function ItemList({planet}) {
  return (
      <>
              <div className={style.block}>
                  <div className={style.img}>
                      <img src={planet.src} />
                  </div>
                  <div className={style.text}>
                      {planet.name}
                  </div>
              </div>
      </>
  )
}

export default ItemList