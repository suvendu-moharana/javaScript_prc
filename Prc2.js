//sorting array fist and second name
const arr=["suvendu moharana","anup  bal","biswajit prusty","rajib senapti"];

const arr1=[];
const arr2=[];
for (let i=0;i<arr.length;i++){
    const splitArr = arr[i].split(" ");
    arr1.push(splitArr[0]);
    arr2.push(splitArr.slice(1).join(" "));
}
arr1.sort();
arr2.sort()
console.log("sorting in fist name..")
console.log(arr1);
console.log("sorting in last name..")
console.log(arr2);