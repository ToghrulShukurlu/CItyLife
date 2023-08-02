import React from 'react'
import "./style.scss"
import  {data} from '../../Data/data'
import image from '../../assets/images/banner.png'

const Card = () => {
  return (
    <div className="body">
      <a href="https://tripsome.az/ru/categories/all?utm_source=citylife&utm_medium=banner&utm_campaign=citylife+search+az">
        {" "}
        <img src={image} alt="" />
      </a>
      <h1>
        Azərbaycanda baş tutan fəaliyyətlərə baxın və{" "}
        <span className="active">CityLife.az</span> -dan online bilet alın.
      </h1>
      <section className="cards">
        {data.map((item, index) => (
          <div className="card">
            <img src={item.img} alt="" />
            <p>{item.name}</p>
            <span className="price">Qiymət: {item.price}</span>
            <button>Ətraflı </button>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Card