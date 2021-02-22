import React, {ChangeEvent} from 'react';
import style from "./Input.module.css";

type InputPropsType = {
    inputText: string
    onChangeInputValue: (event: ChangeEvent<HTMLInputElement>) => void
}

const Input: React.FC<InputPropsType> = (props) => {
    return <div className={style.inputContainer}>
        <input className={style.input} type={'text'} value={props.inputText} onChange={props.onChangeInputValue} placeholder={'Введите искомое слово'}/>
        <span className={style.focusBorder}/>
    </div>
};

export default React.memo(Input);
