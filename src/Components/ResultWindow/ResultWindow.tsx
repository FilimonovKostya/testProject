import React from 'react';
import style from './ResultWindow.module.css'

type ResultWindowPropsType = {
    filterWords: string[]
}

const ResultWindow: React.FC<ResultWindowPropsType> = (props) => {
    return <div className={style.resultWindow}>Выводится результат: {props.filterWords.length !== 0 ? props.filterWords.map((el, index) => <span
        key={index}> {index}.{el}; </span>) : 'Нет слова'}
    </div>
};

export default React.memo(ResultWindow);
