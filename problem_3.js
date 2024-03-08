/**
 * @class Solution
 *
 * Есть строка с большим кол-вом слов через запятую (например: "кошка,собака,лошадь,корова,кошка...").
 * Известно, что в строке встречаются повторяющиеся слова. Нужно написать функцию на JS.
 * На вход передаются строка с дублями, а на выходе мы получаем строку без дублей.
 */
class Solution {
    /**
     * @param {string} inputString
     * @return {string}
     */
    static removeDuplicates(inputString = '') {
        const wordsArray = inputString.split(',');

        const uniqueWordsArray = [];
        const wordSet = new Set();

        for (let word of wordsArray) {
            if (!wordSet.has(word)) {
                uniqueWordsArray.push(word);
                wordSet.add(word);
            }
        }

        return  uniqueWordsArray.join(',');
    }
}

console.log(Solution.removeDuplicates('кошка,собака,лошадь,корова,кошка') === 'кошка,собака,лошадь,корова');
console.log(Solution.removeDuplicates('кошка,собака,лошадь,кошка,корова') === 'кошка,собака,лошадь,корова');
console.log(Solution.removeDuplicates('кошка') === 'кошка');
console.log(Solution.removeDuplicates('кошка,кошка') === 'кошка');
console.log(Solution.removeDuplicates('кошка,собака,лошадь,собака,корова,кошка') === 'кошка,собака,лошадь,корова');
console.log(Solution.removeDuplicates('') === '');
