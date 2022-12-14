import style from "./Title.module.css"

const Title = (props) => {
    return (
        <div className={style.title}>
            <div className={style.mainTitle}>
                <h6>MY WORKS</h6>
                <h1>Portfolio</h1>
            </div>
            <div className={style.titleDescription}>
                <p>Phasellus et lacus suscipit congue nisl the volutpat
                    magna. donec miss the drana risus tincidunt convallis velit orci congue tortor eu dignissim
                    ipsum suam non odio. Pellenta esuntion miss the imperdiet metus ornare. </p>
            </div>
        </div>
    )
}

export default Title;
