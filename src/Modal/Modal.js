import style from "./Modal.module.scss"
import Fade from 'react-reveal/Fade';

const Modal = (props) => {



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
                        <form>
                            <div className={style.inputBlock}>
                                <input className={style.modalInput} type="text" name="name" placeholder={"Full Name"}/>
                                <input className={style.modalInput} type="text" name="email" placeholder={"E-mail"}/>
                            </div>
                            <div className={style.inputBlock}>
                                <input className={style.modalInput} type="text" name="company" placeholder={"Company Name"}/>
                                <input className={style.modalInput} type="text" name="phone" placeholder={"Phone Number"}/>
                            </div>
                            <textarea placeholder={"Your message..."} name="message" cols="30" rows="10"></textarea>
                            <button>SEND</button>
                        </form>
                    </div>
                </div>
            </Fade>
        </div>
    )
}

export default Modal;