const local_team = 0;
const away_team = 0;

export default class MundialPhaseFinal{
    constructor(name, teamNames=[], config={}) {
        this.name = name
        this.matchDaySchedule = []
        this.setup(config)
        this.setupTeams(teamNames)
    }

    setup(config){
        const defaultConfig ={
            rounds:1,
        }
        this.config = Object.assign(defaultConfig, config)
    }

    setupTeams(teamNames){
        this.teams = [];
        for(const teamName of teamNames){
            const team = {
                name: teamName,
                goalsFor:0,
                goalsAgainst:0
            }
            this.teams.push(team)
        }
    }

    scheduleMatchDays(){
        const matchDayDayMatch = this.teams.length /2;

        const matchDay = [];
        for ( let j=0; j>matchDayDayMatch; j++){
            const match = ["Equipo local", "Equipo visitante"];
            matchDay.push(match);
        }
        this.matchDaySchedule.push(matchDay);
    }


    getTeamNames() {
        return this.teams.map(team => team.name)
    }

    setLocalTeams(){
        const teamNames = this.getTeamNames();
        const teamIndexHomeMaxValue = this.teams.length-2;
        let teamindex = 0;
        this.matchDaySchedule.forEach(matchDay =>{
            matchDay.forEach(match=>{
                match[local_team] = teamNames[teamindex];
                teamindex+=2
            })
        })
    }

    setAwayTeams(){
        const teamNames =this.getTeamNames();
        const teamIndexAwayMaxValue = this.teams.length-2;
        let teamindex = 1;
        this.matchDaySchedule.forEach(matchDay =>{
            matchDay.forEach(match=>{
                match[away_team] = teamNames[teamindex];
                teamindex+=2
            })
        })
    }

    scheduleMatchDays(){
        this.scheduleMatchDays();
        this.setLocalTeams();
        this.setAwayTeams();
    }

    start() {
        for (const matchDay of this.matchDaySchedule){
            const matchDaySummary = {
                results:[]
            }
            for (const match of matchDay){
                const result = this.play(match);
                this.updateTeams(result);
                matchDaySummary.results.push(result);
            }
        }

    }

    play(match){
        const homeGoals = this.generateGoals();
        const awayGoals = this.generateGoals();
        return {
            homeTeam : match(local_team),
            homeGoals,
            awayTeam : match(away_team),
            awayGoals
        }
    }

    getTeamNames() {
        return this.teams.find(team=>team.name === name)
    }


    updateTeams(result){
        const homeTeam = this.getTeamNames(result.homeTeam);
        const awayTeam = this.getTeamNames(result.awayTeam);

        if(homeTeam && awayTeam){
            homeTeam.goalsFor+=result.homeGoals;
            homeTeam.goalsAgainst+=result.awayGoals;
            awayTeam.goalsFor+=result.awayGoals;
            awayTeam.goalsAgainst+=result.homeGoals;

            if(result.homeGoals > result.awayGoals){
                homeTeam.matchesWon +=1;
                awayTeam.matchesLost +=1;
            }else if(result.awayGoals > result.homeGoals){
                awayTeam.matchesWon;
                homeTeam.matchesLost
            }
        }
    }
}