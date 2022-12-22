import style from "./Modal.module.scss"

const Modal = (props) => {
    return (
        <div className={style.modalBlock}>
            <div className={style.background}></div>
            <div className={style.modalContent}>

            </div>
        </div>
    )
}

export default Modal;