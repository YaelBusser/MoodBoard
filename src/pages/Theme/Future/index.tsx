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
                {/*<img src={"/images/moodboard-luxe.png"} />*/}
            </div>
        </div>
    )
}
export default Future;