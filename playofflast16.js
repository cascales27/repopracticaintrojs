

const local_team = 0;
const away_team = 0;


export default class playofffinal{
    constructor(teamNames){
        this.setupTeams(teamNames)
        this.setupDosDTeamNamesArray(teamNames);
        this.matchday = [];
        this.qualifTeams = [];
        this.loserTeams = [];

    }
    setupTeams(teamNames){
        this.teams = [];

        for(const teamName of teamNames){
            const team = {
                name : teamName,
                goalsFor : 0
            }
            this.teams.push(team)
        }
    }

    setupDosDTeamNamesArray(teamNames){
        this.DosDTeamNamesArray=[];

        for (let i = 0; i <= teamNames.length; i+= 4) {
            this.DosDTeamNamesArray.push(teamNames.slice(i, i + 4));
        }
        return this.DosDTeamNamesArray.pop()
    }

    setupMatchDayFinal16(){

        const match1 = [[this.teams[0].name, this.teams[1].name]];
        const match2 = [[this.teams[2].name, this.teams[3].name]];
        const match3 = [[this.teams[4].name, this.teams[5].name]];
        const match4 = [[this.teams[6].name, this.teams[7].name]];
        const match5 = [[this.teams[8].name, this.teams[9].name]];
        const match6 = [[this.teams[10].name, this.teams[11].name]];
        const match7 = [[this.teams[12].name, this.teams[13].name]];
        const match8 = [[this.teams[14].name, this.teams[15].name]];

            this.matchday = [...match1,...match2,...match3,...match4,...match5,...match6,...match7,...match8];
    }

    setupMatchDayFinal8(){

        const match1 = [[this.teams[0].name, this.teams[1].name]];
        const match2 = [[this.teams[2].name, this.teams[3].name]];
        const match3 = [[this.teams[4].name, this.teams[5].name]];
        const match4 = [[this.teams[6].name, this.teams[7].name]];
        

            this.matchday = [...match1,...match2,...match3,...match4];
    }

    setupMatchDayFinal4(){

        const match1 = [[this.teams[0].name, this.teams[1].name]];
        const match2 = [[this.teams[2].name, this.teams[3].name]];
        

            this.matchday = [...match1,...match2];
    }

    setupMatchDayFinal(){

        const match1 = [[this.teams[0].name, this.teams[1].name]];
        

            this.matchday = [...match1];

    }


    getTeamNames() {
        return this.teams.map(team =>team.name)
    }

    start() {
        this.match.forEach(match =>{
            const result = this.play(match);
            this.qualifTeams.push(result[1]);
            this.loserTeams.push(result[2]);
            console.log(`${result[0].homeTeam} ${result[0].homegoals} ${result[0].awayTeam} ${result[0].awayGoals} ==> ${result[1]}`);
        })
    }

    //play() {
      //  const homeGoals = this.generateGoals();
      //  const awayGoals = this.generateGoals();
      //  return {
      //      homeTeam : match.local_team,
      //      homeGoals,
      //      awayTeam : match.away_team,
      //      awayGoals
       // }
   // }

   // generateGoals(){
   //     return Math.floor(Math.random() *10);
 //   }

    play(match){
        let homeGoals = 0;
        let awayGoals = 0;
        let winerTeam = "Equipo gana";
        let loserTeam = "Equipo pierde"

        do{
            homeGoals = Math.floor(Math.random(0,1) *10);
            awayGoals = Math.floor(Math.random(0,1) *10);
       }while(homeGoals === awayGoals)

        if(homeGoals > awayGoals){
           winerTeam = match[0];
           loserTeam = match[1];
        }else if(awayGoals > homeGoals){
           winerTeam = match[1];
           loserTeam = match[0];
        }

        return [{
            homeTeam:match[0],
            homeGoals:homeGoals,
            awayTeam: match[1],
            awayGoals:awayGoals
        }, winerTeam, loserTeam]
    }


}