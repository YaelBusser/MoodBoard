import ScrollDown from "../../../modules/ScrollDown";

const Street = () => {
    return (
        <div className={"theme"}>
            <div className={"top-page top-page-street"}>
                <img src={"/images/street.jpg"}/>
                <div className={"top-page-text"}>
                    <p>Street</p>
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
export default Street;