import React, {ChangeEvent, useCallback, useEffect, useState} from 'react';
import './App.css';
import Input from "./Components/Input/Input";
import CheckBox from "./Components/CheckBox/CheckBox";
import Button from "./Components/Button/Button";
import ResultWindow from "./Components/ResultWindow/ResultWindow";
import {api} from "./api";
import ProgressBar from "./Components/ProgressBar/ProgressBar";

function App() {
    const [data, setData] = useState<string[]>([])
    let [filterWords, setFilterWord] = useState<string[]>([])
    const [inputText, setInputText] = useState<string>('')
    const [isRegister, setIsRegister] = useState<boolean>(false)
    const [isLoadingData, setIsLoadingData] = useState<boolean>(false)

    const onChangeInputValue = useCallback((event: ChangeEvent<HTMLInputElement>) => setInputText(event.currentTarget.value), [])
    const onChangeHandler = useCallback((event: ChangeEvent<HTMLInputElement>) => setIsRegister(event.currentTarget.checked), [])
    const onClickFilterLength = useCallback(() => setFilterWord(data.filter(el => el.length > +inputText)), [data, inputText])
    const onClickSubStringValue = useCallback(() => {
        isRegister
            ? setFilterWord(data.filter(x => [inputText].every(y => x.includes(y))))
            : setFilterWord(data.filter(x => [inputText.toLowerCase()].every(y => x.toLowerCase().includes(y.toLowerCase()))))
    }, [data, inputText, isRegister])

    useEffect(() => {
        setIsLoadingData(true)
        api()
            .then(res => {
                setData(res.data.data)
                setIsLoadingData(false)
            })
            .catch(() => {
                alert('Something wrong')
            })
    }, [])

    return <div className={'wrapper'}>
        {isLoadingData ? <ProgressBar/> : null}
        <div className={'container'}>
            <Input inputText={inputText} onChangeInputValue={onChangeInputValue}/>
            <CheckBox checked={isRegister} onChange={onChangeHandler}/>
            <Button onClick={onClickFilterLength}>Фильтр по длине слова</Button>
            <Button onClick={onClickSubStringValue}>Фильтр по подстроке</Button>
            <ResultWindow filterWords={filterWords}/>
        </div>
    </div>

}

export default App;
