import React, {useState} from 'react';
import Select from 'react-select'
import {observer} from "mobx-react-lite";
import {Container} from "react-bootstrap";
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import "./styles/style.css";

const city = [
    { value: 'minsk', label: 'Minsk' },
    { value: 'barysaw', label: 'Barysaw' },
    { value: 'salihorsk', label: 'Salihorsk' }
]

const country = [
    { value: 'egypt', label: 'Egypt' },
    { value: 'finland', label: 'Finland' },
    { value: 'greece', label: 'Greece' }
]

const App = () => {
    const [data, setDate] = useState(new Date())
    const [showCalendar, setShowCalendar] = useState(false)
    const [textWhen, setTextWhen] = useState('')
    const [showCalendarWhenBack, setShowCalendarWhenBack] = useState(false)
    const [textWhenBack, setTextWhenBack] = useState('')

    const onChange = () => {
        setDate(data)
    }

    const openCalendar = () => {
        setShowCalendar(true);
        setShowCalendarWhenBack(false);
    }
    
    const openBackCalendar = () => {
        setShowCalendar(false);
        setShowCalendarWhenBack(true);
    }    

    return (
        <Container className={"d-flex justify-content-center align-items-center"}>
            <h1 style={{textAlign: "center"}}>Поиск дешёвых авиабилетов</h1>
            <p style={{textAlign: "center"}}>Лучший способ купить авиабилеты дёшево</p>
            <div>
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                    <p style={{padding: "0 10px"}}>Откуда</p>
                    <Select options={city} />
                    <p style={{padding: "0 10px"}}>Куда</p>
                    <Select options={country} />
                    {showCalendar
                        ? <p
                            style={{padding: "0 10px"}}
                            onClick={() => setShowCalendar(false)}
                        >
                            <input
                                type="text"
                                placeholder={"Когда"}
                                style={{height: "30px"}}
                                value={textWhen}
                                disabled
                            />
                        </p>
                        :
                        <p
                            style={{padding: "0 10px"}}
                            onClick={() => openCalendar()}
                        >
                            <input
                                type="text"
                                placeholder={"Когда"}
                                value={textWhen}
                                disabled
                            />
                        </p>
                    }
                    {showCalendarWhenBack
                        ? <p
                            style={{padding: "0 10px"}}
                            onClick={() => setShowCalendarWhenBack(false)}
                        >
                            <input
                                type="text"
                                placeholder={"Обратно"}
                                style={{height: "30px"}}
                                value={textWhenBack}
                                disabled
                            />
                        </p>
                        :
                        <p
                            style={{padding: "0 10px"}}
                            onClick={() => openBackCalendar()}
                        >
                            <input
                                type="text"
                                placeholder={"Обратно"}
                                value={textWhenBack}
                                disabled
                            />
                        </p>
                    }
                    <button class="find-button">Найти билеты</button>
                </div>
                <div style={{display: "flex",
                    justifyContent: "center",
                    alignItems: "center"}}>
                    <div style={{padding: "0 20px"}}>
                        {showCalendar && (
                            <>
                                <Calendar onChange={onChange} onClickDay={e => setTextWhen(e)} value={data}/>
                            </>
                        )}
                    </div>
                    <div>
                        {showCalendarWhenBack && (
                            <>
                                <Calendar onChange={onChange} onClickDay={e => setTextWhenBack(e)} value={data}/>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default observer(App);