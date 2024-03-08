/**
 * В комнате находится человек. Через какое-то время в комнату заходит еще один человек и
 * здоровается с первым. Людей в комнате становится 2, а счетчик рукопожатий становится равен 1.
 * Через какое-то время заходит еще один человек и здоровается с другими людьми в комнате.
 * Людей в комнате - 3 и счетчик рукопожатий - 3. И т.д.
 * Требуется написать код на JS для подсчета кол-ва рукопожатий для 10 человек и дать ответ.
 */

class Solution {
    /**
     * @param {number} humans
     * @returns {number}
     */
    static countingHandshakes(humans) {
        if(!humans) {
            throw new Error('humans parameter required.');
        }

        return (humans * (humans - 1)) / 2;
    }
}

console.log(Solution.countingHandshakes(10) === 45);
console.log(Solution.countingHandshakes(1) === 0);
console.log(Solution.countingHandshakes(2) === 1);
console.log(Solution.countingHandshakes(3) === 3);
