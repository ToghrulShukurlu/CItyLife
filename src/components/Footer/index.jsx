import React from 'react'
import './style.scss'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import{ faInstagram } from '@fortawesome/free-regular-svg-icons'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-head">
        <h1>CITYLIFE</h1>
        <ul>
          <li>Layihə haqqında</li>
          <li>Reklam</li>
          <li>Əlaqələr</li>
        </ul>
        <div className="btn-c">
          {/* <i class="fa-brands fa-instagram"></i>
          <i class="fa-solid fa-heart"></i>
          <i class="fa-solid fa-basket-shopping"></i> */}
        </div>
      </div>
      <div className="footer-body">
        <div className="column">
          <span className="column-title">Elan</span>
          <hr />
          <ul>
            <li>Kino</li>
            <li>Əyləncə</li>
            <li>Konsertlər</li>
            <li>Teatr</li>
            <li>Sərgilər</li>
            <li>Uşaqlar</li>
            <li>Fotoreportajlar</li>
          </ul>
        </div>
        <div className="column">
          <span className="column-title">Kataloq</span> <hr />
          <ul>
            <li>Restoranlar</li>
            <li>Alış-veriş</li>
            <li>Klublar</li>
            <li>Kinoteatr</li>
            <li>Muzeylər</li>
            <li>Teatrlar</li>
            <li>Konsert zalları</li>
          </ul>
        </div>
        <div className="column">
          <span className="column-title">Jurnal</span> <hr />
          <ul>
            <li>Musiqi</li>
            <li>Şəhər</li>
            <li>Yemək</li>
            <li>Kino</li>
            <li>Texnologiyalar</li>
            <li>Maraqlı Xəbərlər</li>
            <li>Mədəniyyət</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer