import styles from "./Layout.module.css";
import Chatbot from "../Chatbot";
import Login from "../Login/Login";

const Layout = ({ children, loggedIn, onLogin, onLogout }) => {
  if (!loggedIn) {
    return (
      <div className={styles.loginWrapper}>
        <Login onLogin={onLogin} />
      </div>
    );
  }

  return (
    <main className={styles.layout}>
      {children}
      <Chatbot /> {/* fixed in corner */}
    </main>
  );
};

export default Layout;
