import React from 'react'
import style from './firstpart.module.css'
import Data from '../Data.json';
import { Link } from 'react-router-dom';

const Firstpart = () => {
  return (
    <div>
        <div className={style.container}>
          {/* Put it in separate component and call it here */}
          {Data.image_data.map((el)=>(
            <div className={style.box} key={el.name}>
                <div className={style.image_box}>
                    <Link to={el.link}><img src={el.image} alt="" /></Link>
                </div>
                <div className={style.text_box}>
                    <p>{el.name}</p>
                    <p className={style.text_box_red}>{el.discount}</p>
                </div>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Firstpart