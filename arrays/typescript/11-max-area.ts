/**
 * 	Number 11 - "Container With Most Water"
 * 
	You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints 
	of the ith line are (i, 0) and (i, height[i]). Find two lines that together with the x-axis form a container, 
	such that the container contains the most water.

	Return the maximum amount of water a container can store.

	Notice that you may not slant the container
 */

function maxArea(height: number[]): number {
	let left: number = 0;
	let right: number = height.length - 1;
	let max = 0;

	for (; left < right;) {
		const width = right - left;
		const h = height[right] > height[left] ? height[left] : height[right];
		max = Math.max(max, width * h);

		if (height[left] > height[right]) {
			right--;
		} else {
			left++;
		}
	}

	return max;
};