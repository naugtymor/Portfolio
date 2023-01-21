import style from "./Modal.module.scss"
import Fade from 'react-reveal/Fade';
import emailjs from "@emailjs/browser";
import validator from "validator";
import {useEffect, useRef, useState} from "react";

const Modal = (props) => {

    const form = useRef();
    const [sendMessage, setSendMessage] = useState(false)
    const [nameErr, setNameErr] = useState("")
    const [emailErr, setEmailErr] = useState("")
    const [error, setError] = useState(true)

    const sendEmail = (e) => {
        e.preventDefault();
        valid(form.current)
    };

    const valid = async (form) => {
        debugger
        if (form.name.value.length < 3) {
            setNameErr("Name require")
            setError(true)
            return
        } else {
            setNameErr("")
            setError(false)
        }
        if (!validator.isEmail(form.email.value)) {
            setEmailErr("Invalid email address")
            setError(true)
        } else {
            setEmailErr("")
            setError(false)
        }
    }

    useEffect(() => {
        if (!error) {
            emailjs.sendForm('service_wwmidhj', 'template_qas13wd', form.current, 'vqdrMyPeB4oRgmqOh')
                .then((result) => {
                    setSendMessage(true)
                    setTimeout(() => {
                        props.setActive(false)
                    }, 3000)
                }, (error) => {
                    console.log(error.text);
                });
        }
    }, [error, props.setActive])

    return (
        <div className={style.modalBlock} onClick={() => props.setActive(false)}>
            <Fade top>
                <div className={style.modalContent} onClick={e => e.stopPropagation()}>
                    <div className={style.closeBlock} onClick={() => props.setActive(false)}></div>
                    <div className={style.modalHeader}>
                        <h2>HAVE AN OFFER?</h2>
                        <span>I am ready to consider it. Send a short description and leave your contacts.</span>
                    </div>
                    <div className={style.modalBody}>
                        {sendMessage ?
                            <div className={style.answer}>Леша пидорас, хуй ты мне что отправишь:)</div>
                            :
                            <form onSubmit={sendEmail} ref={form}>
                                <div className={style.inputBlock}>
                                    <input className={style.modalInput} type="text" name="name"
                                           placeholder={"Full Name"}/>
                                    <input className={style.modalInput} type="text" name="email"
                                           placeholder={"E-mail"}/>
                                </div>
                                <div className={style.firstErrorBlock}>
                                    {nameErr && <div className={style.errorBlock}>{nameErr}</div>}
                                    {emailErr && <div className={style.errorBlock}>{emailErr}</div>}
                                </div>
                                <div className={style.inputBlock}>
                                    <input className={style.modalInput} type="text" name="company"
                                           placeholder={"Company Name"}/>
                                    <input className={style.modalInput} type="text" name="phone"
                                           placeholder={"Phone Number"}/>
                                </div>
                                <textarea placeholder={"Your message..."} name="message" cols="30" rows="10"></textarea>
                                <button type={"submit"}>SEND</button>
                            </form>
                        }
                    </div>
                </div>
            </Fade>
        </div>
    )
}

export default Modal;