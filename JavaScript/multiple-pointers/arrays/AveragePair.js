/*
	1. Write a function called averagePair. Given a sorted array of integers and a target average.
	2. Determine if there is a pair of values in the array where the average of the pair equals the target avaerage.
	3. There may be more than one pair that matches the average target.
	
	Constraints:
		- Time: O(N)
		- Space: O(1)
	
	Input1: [1, 2, 3], 2.5
	Output1: true
	
	Input2: [1, 3, 3, 5, 6, 7, 10, 12, 19], 8
	Output2: true
	
	Input3: [-1, 0, 3, 4, 5, 6], 4.1
	Output3: false
	
	Input4: [], 4
	Output4: false
*/

// My Solution
// Time: O(N)
// Space: O(1)
function averagePair(arr, avg) {
	if(arr.length < 2) {
		return false;
	}

	let i = 0;
	let j = arr.length - 1;
	  
	while(i < j) {
		let curAvg = (arr[i] + arr[j]) / 2;
		if(curAvg < avg) {
			i++;
		}
		else if(curAvg > avg) {
			j--;
		}
		else {
			return true;
		}
	}
	  return false;
}

// Colt Steel's Solution
// Time: O(N)
// Space: O(1)
function averagePair(arr, num){
  let start = 0
  let end = arr.length-1;
  while(start < end){
    let avg = (arr[start]+arr[end]) / 2 
    if(avg === num) return true;
    else if(avg < num) start++
    else end--
  }
  return false;
}