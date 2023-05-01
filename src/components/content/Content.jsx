import { gifts } from '../constants';

import styles from './Content.module.scss';

const Content = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <p className={styles.title}>Зарабатывайте больше</p>
        <p className={styles.subtitle}>c WELBEX</p>
        <p className={styles.text}>Развиваем и контролируем продажи за вас</p>
      </div>
      <div className={styles.giftsContainer}>
        <p className={styles.giftsTitle}>
          Вместе c <span>бесплатной консультацией</span> мы дарим:
        </p>
        <div className={styles.gifts}>
          {gifts.map((gift, index) => (
            <div
              key={index}
              className={styles.gift}
            >
              <p className={styles.giftTitle}>{gift.title}</p>
              <p className={styles.giftText}>{gift.text}</p>
            </div>
          ))}
        </div>
        <button className={styles.giftButton}>Получить консультацию</button>
      </div>
    </div>
  );
};

export default Content;
