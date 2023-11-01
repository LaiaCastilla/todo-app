import React from "react";
import { Toaster } from "react-hot-toast"; 
import PageTitle from "./components/PageTitle";
import style from "./styles/modules/app.module.scss"
import AppHeader from "./components/AppHeader";
import AppContent from "./components/AppContent";


function App() {
  return (
    <div>
      <div className="container">
        <PageTitle />
        <div className={style.app__wrapper}>
          <AppHeader />
          <AppContent />
          <footer className={style.app__footer}>
            <a
              className={style.app__footer__link}
              href="https://github.com/LaiaCastilla/todo-app"
              target="_blank"
              rel="noreferrer"
            >
              Open-sourced 
            </a>{" "}
            coded by{" "}
            <a
              className={style.app__footer__link}
              href="https://laiacastilla.com"
              target="_blank"
              rel="noreferrer"
            >
              Laia
            </a>
          </footer>
        </div>
      </div>
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            fontSize: "1.4rem",
          },
        }}
      />
    </div>
  );
}

export default App;
