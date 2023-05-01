import logo from '../../assets/images/logo.png';

import { logoText, menuHeader, messengers, phone } from '../constants';

import styles from './Header.module.scss';

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.menuContainer}>
          <div className={styles.logo}>
            <img
              src={logo}
              alt="logo"
            />
          </div>

          <div className={styles.menu}>
            {menuHeader.map((item, index) => (
              <div
                key={index}
                className={styles.menuItem}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className={styles.infoContainer}>
          <p className={styles.phone}>{phone}</p>
          <div className={styles.messengers}>
            {messengers.map((messenger, index) => (
              <img
                key={index}
                src={messenger}
                alt={`messenger-${index}`}
                className={styles.messenger}
              />
            ))}
          </div>
        </div>
      </div>
      <p className={styles.text}>{logoText}</p>
    </div>
  );
};

export default Header;
