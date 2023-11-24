import ScrollDown from "../../../modules/ScrollDown";

const Future = () => {
    return (
        <div className={"theme"}>
            <div className={"top-page top-page-future"}>
                <img src={"/images/future.jpg"}/>
                <div className={"top-page-text"}>
                    <p>Future</p>
                </div>
                <div className={"scroll-down"}>
                    <ScrollDown/>
                </div>
            </div>
            <div className={"block-moodboard"}>
                <h2 className={"moodboard-h2-futur"}>Examples of moodboard</h2>
                <img src={"/images/moodboard-futur.png"} />
            </div>
        </div>
    )
}
export default Future;