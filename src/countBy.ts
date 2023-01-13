interface CountList {
  [key: string]: number
}

function countBy(arr: (string | number)[]) {
  return arr.reduce((acc: CountList, item) => {
    if(acc[item]) {
      acc[item] += 1;
    } else {
      acc[item] = 1;
    }

    return acc;
  }, {});
}

export {
  countBy,
  type CountList
}