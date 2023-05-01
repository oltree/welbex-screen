import Content from './content/Content';
import Footer from './footer/Footer';
import Header from './header/Header';

import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.app}>
      <span className={styles.circle_1} />
      <span className={styles.circle_2} />
      <span className={styles.circle_3} />
      <span className={styles.circle_4} />
      <div className={styles.wrapper}>
        <Header />
        <Content />
        <Footer />
      </div>
    </div>
  );
}

export default App;
