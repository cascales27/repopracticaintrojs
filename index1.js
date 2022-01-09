
import { setupArrays } from "./utils/index.js"
import { teams16playoff } from "./teams.js"
import  playofffinal  from "./clases/playofflast16.js//"
import MundialPhaseFinal from "./clases/phaseplayoff.js"

setupArrays();
//playofffinal();

console.log("************************************************")
console.log("**************Comienza el Mundial***************")
console.log("************************************************")


console.log("*****************************************************************")
console.log("***Estos son los 16 equipos clasificados para la fase play-off***")
console.log(teams16playoff)
console.log("******************************************************************")

const roundoctfinalTeamNames = teams16playoff

console.log("")
console.log("******************************************************************")
console.log("*****************Ronda de octavos de final************************")
console.log("******************************************************************")
console.log("")

const roundoctfinal = new playofffinal(roundoctfinalTeamNames);


roundoctfinal.setupMatchDayFinal16();

roundoctfinal.start();

console.log("")
console.log("******************************************************************")
console.log("*****************Ronda de cuartos de final************************")
console.log("******************************************************************")
console.log("")


const roundquartfinalTeamNames = roundoctfinal.qualifTeams;
const roundquartfinal = new playofffinal(roundquartfinalTeamNames);


roundquartfinal.setupMatchDayFinal8();

roundquartfinal.start();

console.log("")
console.log("******************************************************************")
console.log("********************Ronda de semifinales**************************")
console.log("******************************************************************")
console.log("")


const roundsemisfinalTeamNames = roundquartfinal.qualifTeams;
const roundsemisfinal = new playofffinal(roundsemisfinalTeamNames);


roundsemisfinal.setupMatchDayFinal4();

roundsemisfinal.start();

console.log("")
console.log("********************************************************************")
console.log("**********************Tercer y cuarto puesto************************")
console.log("********************************************************************")
console.log("")


const round3y4finalTeamNames = roundsemisfinal.loserTeams;
const round3y4final = new playofffinal(round3y4finalTeamNames);


round3y4final.setupMatchDayFinal();

round3y4final.start();

const tercerClasificado = round3y4final.qualifTeams

console.log("")
console.log(`Tercer clasificado del Mundial:  !!!!!! ${tercerClasificado} ¡¡¡¡¡¡`)

console.log("")
console.log("********************************************************************")
console.log("**********************Gran final del Mundial************************")
console.log("********************************************************************")
console.log("")


const granfinalTeamNames = roundsemisfinal.qualifTeams;
const granfinal = new playofffinal(granfinalTeamNames);


granfinal.setupMatchDayFinal();

granfinal.start();

const championOfTheWorld = granfinal.qualifTeams;


console.log("")
console.log("******************************************************************")
console.log(`Selección campeona del Mundo:  ¡¡¡¡¡¡ ${championOfTheWorld} !!!!!!!`)
