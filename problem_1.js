/**
 * Черепашке нужно забраться на вершину холма. Расстояние от подножия холма до его вершины - 100м.
 * Черепашка за день залезает вверх по холму на 50м. Ночью она спит и скатывается на 30м вниз.
 * На какие сутки черепашка залезет на столб? Требуется написать код на JS для решения задачи и дать ответ
 */

/**
 * @class Solution
 *
 * В решение, я предполагаю что, если на новый день, черепашка поднялась и достигла
 * вершины, то спать ей не надо (отнимать расстояние на которое она опускается пока спит).
 * Можно сразу считать что цель в таком случае достигнута.
 */
class Solution {
    /**
     * @param {number} distance
     * @param {number} upMove
     * @param {number} downMove
     * @returns {number} days
     */
    static raisingTurtle(distance, upMove, downMove) {
        if (!distance || !upMove || !downMove) {
            throw new Error(
                "Parameters: distance, upMove, downMove requried, check it please.",
            );
        }

        if (distance <= upMove) {
            return 1;
        }

        let days = 1;
        let distanceTraveled = 0;

        while (distanceTraveled < distance) {
            distanceTraveled += upMove;

            /**
             * Предположение о котором говорится в описании к классу Solution.
             */
            if (distanceTraveled >= distance) {
                break;
            }

            distanceTraveled -= downMove;

            days++;
        }

        return days;
    }
}

console.log(Solution.raisingTurtle(100, 50, 30) === 4);
console.log(Solution.raisingTurtle(10, 10, 10) === 1);
console.log(Solution.raisingTurtle(5, 10, 10) === 1);
console.log(Solution.raisingTurtle(100, 20, 10) === 9);
console.log(Solution.raisingTurtle(300, 50, 10) === 8);
