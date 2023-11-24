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
                <h2 className={"moodboard-h2-street"}>Examples of moodboard</h2>
                <img src={"/images/moodboard-street.png"} />
            </div>
        </div>
    )
}
export default Street;