import React from 'react';
import style from "./Button.module.css";

type ButtonsPropsType = {
    onClick: () => void
    children: string
}

const Button: React.FC<ButtonsPropsType> = (props) => {
    return <div className={style.container}>
        <button className={style.button} onClick={props.onClick}> {props.children} </button>
    </div>
};

export default React.memo(Button);
