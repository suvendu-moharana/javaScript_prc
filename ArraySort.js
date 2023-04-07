//sorting in order to fist name...
const array=[];
array.push("suvendu moharana");
array.push("ajay jena");
array.push("bijay das");
array.sort();
console.log("sorting in order to the fist name in below..")
console.log(array)

//sorting in order to last name...
array.sort((a,b)=>a.split(' ')[1].localeCompare(b.split(' ')[1]));
console.log("Below are sorting in order to last name")
console.log(array)