import Round from "../../src/engine/Round";
import Results from "../../src/engine/Results";
import {describe, beforeEach, expect, test, jest} from "@jest/globals";
import {GameOutcome} from "../../src/engine/GameOutcome";

describe('Opponent object:', function () {

    let round;
    let mockResults;
    const choicesFixture = new Map([
        ['rock', {beats: ['scissors'], message: 'Rock smashes scissors'}],
        ['scissors', {beats: ['paper'], message: 'Scissors cut paper'}],
        ['paper', {beats: ['rock'], message: 'Paper covers rock'}],
    ]);

    describe('Given the object is instantiated', function () {

        beforeEach(() => {

            // Create the mock results log.
            jest.mock('../../src/engine/Results');
            mockResults = new Results();
            mockResults.incrementResult = jest.fn();

            // Instantiate round with fixture and mock.
            round = new Round(mockResults, choicesFixture);
        });

        test('It should add the choices as a property', function () {
            expect(round.choices).toEqual(choicesFixture);
        });

        test('It should add the results as a property', () => {
            expect(round.resultsLog).toEqual(mockResults);
        });

        describe('when getResult() is called', () => {

            let playerChoice;
            let opponentChoice;

            describe('and the player has the winning choice', () => {

                beforeEach(() => {
                    playerChoice = 'rock';
                    opponentChoice = 'scissors';
                });

                test('It should register the WIN', () => {
                    expect(round.getResult(playerChoice, opponentChoice)).toBe(GameOutcome.WIN);
                    expect(mockResults.incrementResult).toHaveBeenCalledWith(GameOutcome.WIN);
                });

            });

            describe('and the opponent has the winning choice', () => {

                beforeEach(() => {
                    playerChoice = 'scissors';
                    opponentChoice = 'rock';
                });

                test('It should register the LOSS', () => {
                    expect(round.getResult(playerChoice, opponentChoice)).toBe(GameOutcome.LOSS);
                    expect(mockResults.incrementResult).toHaveBeenCalledWith(GameOutcome.LOSS);
                });

            });

            describe('and the result should be a tie', () => {

                beforeEach(() => {
                    playerChoice = 'paper';
                    opponentChoice = 'paper';
                });

                test('It should register the DRAW', () => {
                    expect(round.getResult(playerChoice, opponentChoice)).toBe(GameOutcome.DRAW);
                    expect(mockResults.incrementResult).toHaveBeenCalledWith(GameOutcome.DRAW);
                });

            });

        });

    });

});