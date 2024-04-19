import { Dispatch, SetStateAction } from "react";
import styles from "../styles/renderpage.module.scss";
import classNames from "classnames";
import { useTranslation } from "react-i18next";

import imgempty from "../img/imgvide.jpg";

const Renderpage = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className={classNames(styles.choseprojectzone)}>
        <div className={classNames(styles.choseprojecttitle)}>
          <p className={classNames(styles.text)}>Library</p>
          <div className={classNames(styles.itemnumber)}>
            <p>7 {t("items")}</p>
          </div>
        </div>
        <div className={classNames(styles.choseproject)}>
          <div className={classNames(styles.oneproject)}>
            <img src={imgempty} alt="Img empty" />
          </div>
          <div className={classNames(styles.oneproject)}>
            <img src={imgempty} alt="Img empty" />
          </div>
          <div className={classNames(styles.oneproject)}>
            <img src={imgempty} alt="Img empty" />
          </div>
          <div className={classNames(styles.oneproject)}>
            <img src={imgempty} alt="Img empty" />
          </div>
          <div className={classNames(styles.oneproject)}>
            <img src={imgempty} alt="Img empty" />
          </div>
          <div className={classNames(styles.oneproject)}>
            <img src={imgempty} alt="Img empty" />
          </div>
          <div className={classNames(styles.oneproject)}>
            <img src={imgempty} alt="Img empty" />
          </div>
          <div className={classNames(styles.oneproject)}>
            <img src={imgempty} alt="Img empty" />
          </div>
          <div className={classNames(styles.oneproject)}>
            <img src={imgempty} alt="Img empty" />
          </div>
          <div className={classNames(styles.oneproject)}>
            <img src={imgempty} alt="Img empty" />
          </div>
          <div className={classNames(styles.oneproject)}>
            <img src={imgempty} alt="Img empty" />
          </div>
          <div className={classNames(styles.oneproject)}>
            <img src={imgempty} alt="Img empty" />
          </div>
        </div>
      </div>
      <div className={classNames(styles.importzone)}>
        <div className={classNames(styles.title)}>
          <div className={classNames(styles.lefttitleborder)}></div>
          <h1>SmartAssist</h1>
          <p>Smartassist</p>
        </div>
        <div className={classNames(styles.bigtitle)}>
          <p>To Begin a new project, darg'n drop a PDF file...</p>
        </div>
        <div className={classNames(styles.zonebkgdragdrop)}>
          <p>Project - MGI Labs 2022</p>
        </div>
        <div className={classNames(styles.bigtitle)}>
          <p>Or</p>
        </div>
        <div className={classNames(styles.btnchosepdf)}>
          <p>{t("choosepdfbtn")}</p>
        </div>
      </div>
    </>
  );
};

export default Renderpage;
