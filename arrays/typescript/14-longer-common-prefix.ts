/**
 * 	Number 14 - "Longest Common Prefix"
 * 
	Write a function to find the longest common prefix string amongst an array of strings.
	If there is no common prefix, return an empty string "".
 */

function longestCommonPrefix(strs: string[]): string {
	let prefix: string = "";
	let curr: number = 0;

	while (true) {
		const letter = strs[0][curr];
		if (!letter) break;

		for (let i = 0; i < strs.length; i++) {
			if (strs[i][curr] !== letter) {
				return prefix;
			}
		}

		prefix += letter;
		curr++;
	}
	return prefix;
};