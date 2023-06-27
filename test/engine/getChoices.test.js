import {describe, expect, test} from '@jest/globals';
import getChoices from '../../src/engine/getChoices';

describe('Engine. getChoices module: ', () => {

    describe('getChoices()', () => {

        describe('when called with no arguments', () => {

            test('should return paper/scissor/rock configuration', () => {
                expect(getChoices().size).toBe(3);
                expect(getChoices().get('rock').beats).toEqual(['scissors']);
            });

        })

    });

});