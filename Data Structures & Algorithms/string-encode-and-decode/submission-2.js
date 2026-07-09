class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    encode(strs) {
        let encoded = "";

        for (const str of strs) {
            encoded += str.length + "#" + str;
        }

        return encoded;
    }

    /**
     * @param {string} str
     * @return {string[]}
     */
    decode(str) {
        const result = [];
        let i = 0;

        while (i < str.length) {
            // Find the '#'
            let j = i;
            while (str[j] !== "#") {
                j++;
            }

            // Length of the next string
            const length = Number(str.slice(i, j));

            // Move to the first character of the string
            j++;

            // Extract exactly 'length' characters
            result.push(str.slice(j, j + length));

            // Jump to the next encoded string
            i = j + length;
        }

        return result;
    }
}