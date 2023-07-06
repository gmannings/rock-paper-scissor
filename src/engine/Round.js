import {GameOutcome} from "./GameOutcome";

export default class Round {

    /**
     * @param {Results} resultsLog
     * @param {Map<string, {beats: string[], message: string}>} choices
     */
    constructor(resultsLog, choices) {
        this.resultsLog = resultsLog;
        this.choices = choices;
    }

    /**
     * Get the round result.
     *
     * @param {string} playerChoice
     * @param {string} opponentChoice
     * @returns {string}
     */
    getResult(playerChoice, opponentChoice) {
        let result;
        if (playerChoice === opponentChoice) {
            result = GameOutcome.DRAW;
        } else if (this.choices.get(playerChoice).beats.includes(opponentChoice)) {
            result = GameOutcome.WIN;
        } else {
            result = GameOutcome.LOSS;
        }
        this.resultsLog.incrementResult(result);
        return result;
    }

}