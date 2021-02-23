import React from "react";
import style from "./ProgressBar.module.css";


type ProgressBarTextPropsType = {

};

export const ProgressBar: React.FC<ProgressBarTextPropsType> = () => {
    // const loadingValue = {
    //     width: '100%'
    // }
    return <div className={style.progress}>
        <span className={style.progressBar} />
    </div>
}

export default ProgressBar;
