function makeArrayConsecutive2(statues) {
    statues.sort()
    let n = statues.length;
    let max = statues[n-1];
    let min = statues[0];
    return max - min - n + 1;
}

console.log(makeArrayConsecutive2([6, 2, 3, 8]))