import "./index.css";
// import {Button, TextField} from "@mui/material";
// import {useEffect, useState} from "react";

// interface IPlayers {
//     name: string;
// }
//
// interface ITeam {
//     name: string;
//     players: IPlayers[];
// }
//
// interface IPlayersTeam {
//     teamOne: ITeam;
//     teamTwo: ITeam;
// }

const Play = () => {
    // const [isOneTeam, setIsOneTeam] = useState<boolean>(false);
    // const [isTwoTeam, setIsTwoTeam] = useState<boolean>(false);
    // const [teams, setTeams] = useState<IPlayersTeam>();
    // const [nameTeamOne, setNameTeamOne] = useState<string>();
    // const [nameTeamTwo, setNameTeamTwo] = useState<string>();
    return (
        <div className={"block-play"}>
            {/*<div className={"play"}>*/}
            {/*    <div className={`block-mode ${isOneTeam || isTwoTeam ? 'block-mode-hide' : ''}`}>*/}
            {/*        <h2>Choose mode</h2>*/}
            {/*        <div className={"mode"}>*/}
            {/*            <Button onClick={() => setIsOneTeam(true)}>*/}
            {/*                1v1*/}
            {/*            </Button>*/}
            {/*            <Button onClick={() => setIsTwoTeam(true)}>*/}
            {/*                2v2*/}
            {/*            </Button>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <div className={`block-mode ${!isOneTeam && !isTwoTeam ? 'block-mode-hide' : ''}`}>*/}
            {/*        <h2>Team name</h2>*/}
            {/*        <div className={"mode"}>*/}
            {/*            <TextField label={"Team 1"} value={nameTeamOne} />*/}
            {/*            <TextField label={"Team 2"} value={nameTeamTwo} />*/}
            {/*            <Button >*/}
            {/*                submit*/}
            {/*            </Button>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <div className={`block-mode ${!isOneTeam && !isTwoTeam ? 'block-mode-hide' : ''}`}>*/}
            {/*        <h2>Team name</h2>*/}
            {/*        <div className={"mode"}>*/}
            {/*            <TextField label={"Team 1"}/>*/}
            {/*            <TextField label={"Team 2"}/>*/}
            {/*            <Button>*/}
            {/*                submit*/}
            {/*            </Button>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    )
}
export default Play;