//import React from "react";
import headerLogo from "../images/logo.jpg";
import iconLabel from "../images/iconLabel.svg";
import iconArrow from "../images/iconArrow.svg";
import iconWatch from "../images/iconWatch.svg";

function Header() {
  //   const [burgerButton, setBurgerButton] = React.useState(false);

  //   function handleBurgerClick() {
  //     setBurgerButton(!burgerButton);
  //   }

  return (
    <header className="header">
      <div className="header__container_menu">
        <img className="header__logo" src={headerLogo} alt="Логотип" />
        <div className="header__navigation">
          <ul className="header__navigation_list">
            <li className="header__navigation_item">
              <a className="header__navigation_link" href="#">
                Автомобили в наличии
              </a>
            </li>
            <li className="header__navigation_item">
              <a className="header__navigation_link" href="#">
                Спецпредложения
              </a>
            </li>
            <li className="header__navigation_item">
              <a className="header__navigation_link" href="#">
                Продать авто
              </a>
            </li>
            <li className="header__navigation_item">
              <a className="header__navigation_link" href="#">
                Сервис
              </a>
            </li>
            <li className="header__navigation_item">
              <a className="header__navigation_link" href="#">
                Контакты
              </a>
            </li>
          </ul>
          <button className="header__button">Заказать звонок</button>
        </div>
      </div>
      <div className="header__line"></div>
      <div className="header__container">
        <div className="header__route">
          <a className="header__link">
            <img className="header__picture" src={iconLabel} />
            Олимпийский просп., 5, стр. 1, Москва
          </a>
          <a className="header__link">
            <img className="header__picture" src={iconArrow} />
            Проложить маршрут
          </a>
        </div>
        <span className="header__schedule">
          <img className="header__picture" src={iconWatch} />
          9:00 - 21:00 (ежедневно)
        </span>
      </div>
    </header>
  );
}

export default Header;
