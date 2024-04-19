import { useState } from "react";
import classNames from "classnames";
import styles from "./styles/home.module.scss";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Importpage from "./components/Importpage";

function App() {
  return (
    <>
      <div className={classNames(styles.home)}>
        <div className={classNames(styles.menu)}>Menu</div>
        <div className={classNames(styles.container)}>
          <Importpage></Importpage>
        </div>
        {/* <Menu
              typeMachine={typeMachine}
              setOpenAlertModale={setOpenAlertModale}
            />

            <div className={classNames(styles.containerzone)}>
              <div className={classNames(styles.navbarcontainer)}>
                <Navbar></Navbar>
              </div>
              <Routes>
                <Route path="/" element={<ProductionPage />} />
                <Route path="production" element={<ProductionPage />} />
                <Route path="/activation" element={<ActivationPage />}></Route>
                <Route path="/tracking" element={<TrackingPage />}></Route>
              </Routes>
            </div> */}
      </div>
    </>
  );
}

export default App;
