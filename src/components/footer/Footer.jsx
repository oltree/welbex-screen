import { adress, company, menuFooter, messengers, phone } from '../constants';

import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.footer}>
        <div>
          <p className={styles.title}>o компании</p>
          <div className={styles.company}>
            {company.map((item, index) => (
              <p
                key={index}
                className={styles.item}
              >
                {item}
              </p>
            ))}
          </div>
        </div>
        <div>
          <p className={styles.title}>меню</p>
          <div className={styles.menu}>
            {menuFooter.map((item, index) => (
              <p
                key={index}
                className={styles.item}
              >
                {item}
              </p>
            ))}
          </div>
        </div>
        <div className={styles.contacts}>
          <p className={styles.title}>контакты</p>
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
          <p className={styles.adress}>{adress}</p>
        </div>
      </div>
      <div className={styles.privatyPolicy}>
        <p className={styles.text}>©WELBEX 2022. Bce права защищены.</p>
        <a
          href="/"
          className={styles.link}
        >
          Политика конфиденциальности
        </a>
      </div>
    </div>
  );
};

export default Footer;
