import React from "react";
import Navigation from "./components/Navigation";
import styles from "./style.scss";
import Logo from "./components/Logo";

const Header = () => {

    return (
        <header className={styles.header_area}>
            <div className={styles.main_menu}>
                <nav className={styles.navbar}>
                    <div className={styles.container}>
                        <Logo/>
                        <Navigation/>
                    </div>
                </nav>
            </div>
        </header>
    );
};


export default Header;
