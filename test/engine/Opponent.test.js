import Opponent from "../../src/engine/Opponent";
import {describe, beforeEach, expect, test} from "@jest/globals";

describe('Opponent object:', function () {

    let opponent;
    let mockChoices = new Map([
        ['rock', {beats: ['scissors'], message: 'Rock smashes scissors'}],
        ['scissors', {beats: ['paper'], message: 'Scissors cut paper'}],
        ['paper', {beats: ['rock'], message: 'Paper covers rock'}],
    ]);

    describe('Given the object is instantiated', function () {

        beforeEach(() => {
            opponent = new Opponent(mockChoices);
        });

        test('should add the choices as a property', function () {
            expect(opponent.choices).toEqual(mockChoices);
        });

        describe('When getChoice() is called', function () {

            test('should respond with a key from the choices randomly', () => {
                expect(mockChoices.keys()).toContain(opponent.getChoice());
            });

        });

    });

});