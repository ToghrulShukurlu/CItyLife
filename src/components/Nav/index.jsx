import React from 'react'
import "./style.scss"

const Nav = () => {
  return (
    <nav>
      <div className="white">
        <div className="navbar">
          <ul>
            <li>Kataloq</li>
            <li>Restoranlar</li>
            <li>Şopinq</li>
            <li>Foto </li>
            <li>Müsabiqələr</li>
            <div className="lineV"></div>
            <li>
              <i class="fa-solid fa-phone"></i>+994 51 400-00-32
              <input
                type="text"
                placeholder="Search Here"
                className="inpt-nav"
              />
            </li>
          </ul>
          <div className="second">
            <span>AZ</span>
            <div className="lineV"></div>
            <span>EN</span>
            <div className="lineV"></div>
            <span>RU</span>
          </div>
          <div className="third">
            <i class="fa-solid fa-user"></i>
            <button className='rgstr'>Register</button>
          </div>
        </div>
      </div>
      <div className="black">
        <ul>
          <h1>CityLife.az</h1>
          <div className="lineWhite"></div>
          <i class="fa-solid fa-magnifying-glass"></i>
          <li>Kino</li>
          <li>Konsertlər</li>
          <li>Əyləncə Gecləri</li>
          <li>Sərgilər</li>
          <li>Teatr</li>
          <li>Uşaqlar üçün</li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav