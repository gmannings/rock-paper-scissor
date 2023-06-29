import Results from "../../src/engine/Results";
import {GameOutcome} from "../../src/engine/GameOutcome";
import {describe, afterEach, beforeEach, expect, test} from "@jest/globals";

describe('Results object:', () => {

    let results;

    afterEach(() => {
        results = undefined;
    })

    describe('Given the object is instantiated', () => {

        beforeEach(() => {
            results = new Results();
        });

        test('It should have an empty history', () => {
            expect(results.getHistory()).toEqual([]);
        });

        test('It should have all results set to 0', () => {
            expect(results.getNumberResultsByType(GameOutcome.DRAW)).toBe(0);
            expect(results.getNumberResultsByType(GameOutcome.WIN)).toBe(0);
            expect(results.getNumberResultsByType(GameOutcome.LOSS)).toBe(0);
        });

        describe('When a WIN result is recorded', () => {

            beforeEach(() => {
                results.incrementResult(GameOutcome.WIN);
            });

            test('It should record the result', () => {
               expect(results.getNumberResultsByType(GameOutcome.WIN)).toBe(1);
            });

            test('It should not adjust any other results', () => {
                expect(results.getNumberResultsByType(GameOutcome.DRAW)).toBe(0);
                expect(results.getNumberResultsByType(GameOutcome.LOSS)).toBe(0);
            });

            test('It should add a history item recording the WIN', () => {
                expect(results.getHistory().length).toBe(1);
                expect(results.getHistory()[0]).toBe(GameOutcome.WIN);
            });

        });

        describe('When a WIN, a LOSS, and a DRAW are recorded', () => {

            beforeEach(() => {
                results.incrementResult(GameOutcome.WIN);
                results.incrementResult(GameOutcome.LOSS);
                results.incrementResult(GameOutcome.DRAW);
            });

            test('It should have all results set to 1', () => {
                expect(results.getNumberResultsByType(GameOutcome.WIN)).toBe(1);
                expect(results.getNumberResultsByType(GameOutcome.LOSS)).toBe(1);
                expect(results.getNumberResultsByType(GameOutcome.DRAW)).toBe(1);
            });

            test('It should have three items in the history, with the result', () => {
                expect(results.getHistory().length).toBe(3);
                expect(results.getHistory()[0]).toBe(GameOutcome.WIN);
                expect(results.getHistory()[1]).toBe(GameOutcome.LOSS);
                expect(results.getHistory()[2]).toBe(GameOutcome.DRAW);
            });

        });

    });

});