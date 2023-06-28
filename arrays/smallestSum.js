// You are given two integer arrays nums1 and nums2 sorted in ascending order and an integer k.
// Define a pair (u, v) which consists of one element from the first array and one element from the second array.
// Return the k pairs (u1, v1), (u2, v2), ..., (uk, vk) with the smallest sums.

// Input: nums1 = [1,7,11], nums2 = [2,4,6], k = 3
// Output: [[1,2],[1,4],[1,6]]
// Explanation: The first 3 pairs are returned from the sequence: [1,2],[1,4],[1,6],[7,2],[7,4],[11,2],[7,6],[11,4],[11,6]

// Input: nums1 = [1,1,2], nums2 = [1,2,3], k = 2
// Output: [[1,1],[1,1]]
// Explanation: The first 2 pairs are returned from the sequence: [1,1],[1,1],[1,2],[2,1],[1,2],[2,2],[1,3],[1,3],[2,3]

// Input: nums1 = [1,2], nums2 = [3], k = 3
// Output: [[1,3],[2,3]]
// Explanation: All possible pairs are returned from the sequence: [1,3],[2,3]

// first approach
// not suitable for large inputs
const smallestPairs = (nums1, nums2, k) => {
  let pairs = [];
  nums1.forEach((num1) => {
    nums2.forEach((num2) => {
      pairs.push([num1, num2, num1 + num2]);
    });
  });

  pairs.sort((a, b) => {
    return a[2] - b[2];
  });

  return pairs.slice(0, k).map(([num1, num2]) => [num1, num2]);
};

console.log(smallestPairs([1, 1, 2], [1, 2, 3], 2));
console.log(smallestPairs([1, 7, 11], [2, 4, 6], 3));
console.log(smallestPairs());

// second approach
// using min heap
const smallestSum = (nums1, nums2, k) => {
  const heap = new MinHeap();

  // Populate the min-heap with the k smallest pairs
  for (let i = 0; i < Math.min(nums1.length, k); i++) {
    for (let j = 0; j < Math.min(nums2.length, k); j++) {
      const sum = nums1[i] + nums2[j];
      heap.insert([nums1[i], nums2[j], sum]);

      // Limit the size of the heap to k
      if (heap.size() > k) {
        heap.extractMin();
      }
    }
  }

  // Extract the k smallest pairs from the min-heap
  const result = [];
  while (!heap.isEmpty()) {
    const [num1, num2, sum] = heap.extractMin();
    result.push([num1, num2]);
  }

  return result;
};
