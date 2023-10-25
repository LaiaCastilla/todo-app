import React from "react";
import PageTitle from "./components/PageTitle";
import style from "./styles/modules/app.module.scss"
import AppHeader from "./components/AppHeader";

function App() {
  return (
    <div className="container">
      <PageTitle/>
      <div className={style.app__wrapper}>
       <AppHeader/>
       <AppContent/>
      </div>
    </div>
  );
}

export default App;
