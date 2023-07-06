export default class Opponent {

    /**
     * The available choices an opponent can choose from.
     *
     * @param {Map<string, {beats: string[], message: string}>} choices
     */
    constructor(choices) {
        this.choices = choices;
    }

    /**
     * Get a random choice.
     *
     * @returns {string}
     *   Choice key.
     */
    getChoice() {
        const values = Array.from(this.choices.keys());
        const randomIndex = Math.floor(Math.random() * values.length);
        return String(values[randomIndex]);
    }

}