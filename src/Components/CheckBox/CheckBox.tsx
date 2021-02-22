import React, {ChangeEvent} from 'react';
import style from "./CheckBox.module.css";

type CheckBoxPropsType = {
    checked: boolean
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

const CheckBox: React.FC<CheckBoxPropsType> = (props) => {
    return <div className={style.container}>
        <label className={style.pureMaterialCheckbox}>
            <input className={style.input} type={'checkbox'} checked={props.checked} onChange={props.onChange}/>
            <span className={style.spanClassName}> Поиск с регистром </span>
        </label>
    </div>
};

export default React.memo(CheckBox);


