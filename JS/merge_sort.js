function merge(array) {
    half=array.length / 2;
    before = array.slice(0, half);
    after = array.slice(array.length / 2);
    console.log(before)
    console.log(after)

    sort = new Array;
    for(i = 0, j = 0; i < before.length && j < after.length; ++i, ++j) {
        if(before[i] < after[j]){
            sort.push(before[i]);
            console.log(sort)
            console.log(i)
            console.log(j)
            ++i;
        }
        else {
            sort.push(after[j]);
            console.log(sort)
            console.log(i)
            console.log(j)
            ++j;
        }
    }
    return sort;
}

console.log(merge([3, 2, 2, 4, 1]));
