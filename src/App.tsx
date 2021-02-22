import React, {ChangeEvent, useCallback, useState} from 'react';
import './App.css';
import Input from "./Components/Input/Input";
import CheckBox from "./Components/CheckBox/CheckBox";
import Button from "./Components/Button/Button";
import ResultWindow from "./Components/ResultWindow/ResultWindow";

function App() {
    const [data, setData] = useState<string[]>([
        "affenpinscher",
        "whippet",
        "african",
        "irish wolfhound",
        "pembroke",
        "airedale",
        "NEWFOUNDLAND",
        "OTTERHOUND",
        "PAPILLON",
        "PEKINESE",
        "SWISS MOUNTAIN",
        "weimaraner",
        "MINIATURE PINSCHER",
        "akita",
        "GERMAN POINTER",
        "vizsla",
        "POMERANIAN",
        "appenzeller",
        "MINIATURE POODLE",
        "yorkshire terrier",
        "STANDARD POODLE",
        "basenji",
        "BERNESE MOUNTAIN",
        "wheaten terrier",
        "TOY POODLE",
        "beagle",
        "MEXICANHAIRLESS",
        "westhighland terrier",
        "PUG",
        "bluetick",
        "TIBETAN MASTIFF",
        "toy terrier",
        "PYRENEES",
        "borzoi",
        "BULL MASTIFF",
        "tibetan terrier",
        "REDBONE",
        "bouvier",
        "MALTESE",
        "silky terrier",
        "CHESAPEAKE RETRIEVER",
        "boxer",
        "MALINOIS",
        "sealyham terrier",
        "CURLY RETRIEVER",
        "brabancon",
        "MALAMUTE",
        "scottish terrier",
        "FLATCOATED RETRIEVER",
        "briard",
        "LHASA",
        "patterdale terrier",
        "GOLDEN RETRIEVER",
        "boston bulldog",
        "LEONBERG",
        "norwich terrier",
        "RHODESIAN RIDGEBACK",
        "french bulldog",
        "LABRADOR",
        "norfolk terrier",
        "ROTTWEILER",
        "staffordshire bullterrier",
        "KUVASZ",
        "lakeland terrier",
        "SALUKI",
        "cairn",
        "KOMONDOR",
        "kerryblue terrier",
        "SAMOYED",
        "chihuahua",
        "KELPIE",
        "irish terrier",
        "SCHIPPERKE",
        "chow",
        "KEESHOND",
        "fox terrier",
        "GIANT SCHNAUZER",
        "clumber",
        "HUSKY",
        "dandie terrier",
        "MINIATURE SCHNAUZER",
        "border collie",
        "WALKER HOUND",
        "border terrier",
        "ENGLISH SETTER",
        "coonhound",
        "ENGLISH HOUND",
        "bedlington terrier",
        "GORDON SETTER",
        "cardigan corgi",
        "BLOOD HOUND",
        "australian terrier",
        "IRISH SETTER",
        "dachshund",
        "BASSET HOUND",
        "american terrier",
        "ENGLISH SHEEPDOG",
        "great dane",
        "AFGHAN HOUND",
        "stbernard",
        "SHETLAND SHEEPDOG",
        "scottish deerhound",
        "IBIZAN HOUND",
        "english springer",
        "SHIBA",
        "dhole",
        "GROENENDAEL",
        "welsh spaniel",
        "SHIHTZU",
        "dingo",
        "ITALIAN GREYHOUND",
        "sussex spaniel",
        "BLENHEIM SPANIEL",
        "doberman",
        "GERMANSHEPHERD",
        "japanese spaniel",
        "BRITTANY SPANIEL",
        "norwegian elkhound",
        "ESKIMO",
        "irish spaniel",
        "COCKER SPANIEL",
        "entlebucher",
        "ENTLEBUCHER",
        "cocker spaniel",
        "IRISH SPANIEL",
        "eskimo",
        "NORWEGIAN ELKHOUND",
        "brittany spaniel",
        "JAPANESE SPANIEL",
        "germanshepherd",
        "DOBERMAN",
        "blenheim spaniel",
        "SUSSEX SPANIEL",
        "italian greyhound",
        "DINGO",
        "shihtzu",
        "WELSH SPANIEL",
        "groenendael",
        "DHOLE",
        "shiba",
        "ENGLISH SPRINGER",
        "Ibizan hound",
        "SCOTTISH DEERHOUND",
        "shetland sheepdog",
        "STBERNARD",
        "afghan hound",
        "GREAT DANE",
        "english sheepdog",
        "AMERICAN TERRIER",
        "basset hound",
        "DACHSHUND",
        "irish setter",
        "AUSTRALIAN TERRIER",
        "blood hound",
        "CARDIGAN CORGI",
        "gordon setter",
        "BEDLINGTON TERRIER",
        "english hound",
        "COONHOUND",
        "english setter",
        "BORDER TERRIER",
        "walker hound",
        "BORDER COLLIE",
        "miniature schnauzer",
        "DANDIE TERRIER",
        "husky",
        "CLUMBER",
        "giant schnauzer",
        "FOX TERRIER",
        "keeshond",
        "CHOW",
        "schipperke",
        "IRISH TERRIER",
        "kelpie",
        "CHIHUAHUA",
        "samoyed",
        "KERRYBLUE TERRIER",
        "komondor",
        "CAIRN",
        "saluki",
        "LAKELAND TERRIER",
        "kuvasz",
        "STAFFORDSHIRE BULLTERRIER",
        "rottweiler",
        "NORFOLK TERRIER",
        "labrador",
        "FRENCH BULLDOG",
        "rhodesian ridgeback",
        "NORWICH TERRIER",
        "leonberg",
        "BOSTON BULLDOG",
        "golden retriever",
        "PATTERDALE TERRIER",
        "lhasa",
        "BRIARD",
        "flatcoated retriever",
        "SCOTTISH TERRIER",
        "malamute",
        "BRABANCON",
        "curly retriever",
        "SEALYHAM TERRIER",
        "malinois",
        "BOXER",
        "chesapeake retriever",
        "SILKY TERRIER",
        "maltese",
        "BOUVIER",
        "redbone",
        "TIBETAN TERRIER",
        "bull mastiff",
        "BORZOI",
        "pyrenees",
        "TOY TERRIER",
        "tibetan mastiff",
        "BLUETICK",
        "pug",
        "WESTHIGHLAND TERRIER",
        "mexicanhairless",
        "BEAGLE",
        "toy poodle",
        "WHEATEN TERRIER",
        "bernese mountain",
        "BASENJI",
        "standard poodle",
        "YORKSHIRE TERRIER",
        "miniature poodle",
        "APPENZELLER",
        "pomeranian",
        "VIZSLA",
        "german pointer",
        "AKITA",
        "miniature pinscher",
        "WEIMARANER",
        "swiss mountain",
        "AIREDALE",
        "pekinese",
        "WHIPPET",
        "papillon",
        "AFRICAN",
        "otterhound",
        "IRISH WOLFHOUND",
        "newfoundland",
        "PEMBROKE",
        "AFFENPINSCHER"
    ])
    let [filterWords, setFilterWord] = useState<string[]>([])
    const [inputText, setInputText] = useState<string>('')
    const [isRegister, setIsRegister] = useState<boolean>(false)

    const onChangeInputValue = (event: ChangeEvent<HTMLInputElement>) => setInputText(event.currentTarget.value)
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => setIsRegister(event.currentTarget.checked)

    const onClickFilterLength = useCallback(() => {
        setFilterWord(data.filter(el => el.length > +inputText))
    }, [data, inputText])

    const onClickSubStringValue = useCallback(() => {
        isRegister
            ? setFilterWord(data.filter(x => [inputText].every(y => x.includes(y))))
            : setFilterWord(data.filter(x => [inputText.toLowerCase()].every(y => x.toLowerCase().includes(y.toLowerCase()))))
    }, [data, inputText, isRegister])

    return <div className={'wrapper'}>
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
