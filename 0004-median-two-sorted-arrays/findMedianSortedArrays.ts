export function findMedianSortedArrays(
  nums1: number[],
  nums2: number[],
): number {
  const finalArray: number[] = [...nums1, ...nums2].sort();

  if (finalArray.length === 0) return 0;
  if (finalArray.length === 1) return finalArray[0];

  const isEven = finalArray.length % 2 === 0;
  const middleIndex = Math.floor((finalArray.length - 1) / 2);
  return isEven
    ? (finalArray[middleIndex] + finalArray[middleIndex + 1]) / 2
    : finalArray[middleIndex];
}
