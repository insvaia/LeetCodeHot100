// 归并排序
function Merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] <= right[rightIndex]) {
      result.push(left[leftIndex++]);
    } else {
      result.push(right[rightIndex++]);
    }
  }

  if (leftIndex < left.length) {
    result = result.concat(left.slice(leftIndex));
  }

  if (rightIndex < right.length) {
    result = result.concat(right.slice(rightIndex));
  }

  return result;
}

function MergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  let mid = Math.floor(arr.length / 2);

  let left = MergeSort(arr.slice(0, mid));
  let right = MergeSort(arr.slice(mid));

  return Merge(left, right);
}

const res = [22, 33, 5, 67, 34, 11];

const ans = MergeSort(res);

console.log(ans);
