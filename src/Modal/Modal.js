import style from "./Modal.module.scss"

const Modal = (props) => {
    return (
        <div className={style.modalBlock} onClick={() => props.setActive(false)}>
            <div className={style.modalContent} onClick={e => e.stopPropagation()}>
                <div className={style.modalHeader}>
                    <h2>HAVE AN OFFER?</h2>
                    <span>I am ready to consider it. Send a short description and leave your contacts.</span>
                </div>
                <div className={style.modalBody}>

                </div>
            </div>
        </div>
    )
}

export default Modal;