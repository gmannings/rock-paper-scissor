import {GameOutcome} from "./GameOutcome";

/**
 * Used to help IDEs typehint properly.
 *
 * The GameOutcome enum like object should be used to supply these arguments.
 *
 * @typedef {('win'|'loss'|'draw')} GameOutcomeType
 */

/**
 * Results state store
 */
export default class Results {

    constructor() {
        this.resultCount = {
            [GameOutcome.WIN]: 0,
            [GameOutcome.LOSS]: 0,
            [GameOutcome.DRAW]: 0
        };
        this.gameHistory = [];
    }

    /**
     * Register a result.
     *
     * @param {GameOutcomeType} resultType - Result of the game.
     */
    incrementResult(resultType) {
        if (!Object.values(GameOutcome).includes(resultType)) {
            throw new Error('Invalid result type');
        }
        this.resultCount[resultType]++;
        this.recordGame(resultType);
    }

    /**
     * Get the result count for each type of result.
     *
     * @param {GameOutcomeType} resultType
     * @returns {int}
     */
    getNumberResultsByType(resultType) {
        if (!Object.values(GameOutcome).includes(resultType)) {
            throw new Error('Invalid result type');
        }
        return this.resultCount[resultType];
    }

    /**
     * Record the game result for a living history.
     *
     * @param {GameOutcomeType} resultType
     */
    recordGame(resultType) {
        this.gameHistory.push(resultType);
    }

    /**
     * Get a copy of the history.
     *
     * @returns {string[]}
     */
    getHistory() {
        // Don't pass a reference to the stored history.
        return [...this.gameHistory];
    }
}
