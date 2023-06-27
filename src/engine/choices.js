/**
 * The default choices are for rock/paper/scissor.
 *
 * @returns {Map<string, {beats: string[], message: string}>}
 */
function getDefaultChoices() {
    return new Map([
        ['rock', { beats: ['scissors'], message: 'Rock smashes scissors' }],
        ['scissors', { beats: ['paper'], message: 'Scissors cut paper' }],
        ['paper', { beats: ['rock'], message: 'Paper covers rock' }],
    ])
}

/**
 * Provide standard interface so the choices can be easily extended.
 *
 * @param {string} choiceSet
 * @returns {Map<string, {beats: string[], message: string}>}
 */
export default function getChoices(choiceSet = 'default') {
    // To be extended with conditionals when extra choice sets are added.
    return getDefaultChoices();
}