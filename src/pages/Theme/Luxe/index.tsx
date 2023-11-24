import ScrollDown from "../../../modules/ScrollDown";

const Luxe = () => {
    return (
        <div className={"theme"}>
            <div className={"top-page top-page-luxe"}>
                <img src={"/images/luxe.jpg"}/>
                <div className={"top-page-text"}>
                    <p>Luxury</p>
                </div>
                <div className={"scroll-down"}>
                    <ScrollDown/>
                </div>
            </div>
            <div className={"block-moodboard"}>
                <h2 className={"moodboard-h2-luxe"}>Examples of moodboard</h2>
                <img src={"/images/moodboard-luxe.png"} />
            </div>
        </div>
    )
}
export default Luxe;