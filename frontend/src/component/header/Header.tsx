import React from 'react';
import logo_2 from '../../assets/logo_2.jpg';
import s from "./header.module.scss";


const Header: React.FC = () => {
    return (
        <header className={s.header}>
            <img src={logo_2} alt="Logo" className={s.header_img} />
            <nav className={s.header_nav}>
                <ul className={s.header_nav__ul}>
                    <li><a href="/home">О сервисе</a></li>
                    <li><a href="/about">Кого мониторим</a></li>
                    <li><a href="/services">Вопросы</a></li>
                    <li><a href="/services">Карьера</a></li>
                    <li><a href="/contact">Контакты</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;