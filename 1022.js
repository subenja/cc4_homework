<script>
/*
1.จงสร้าง array ให้ได้แบบนี้ {0,1,2,3,4,5,6,7,8,9,10} 
 แล้วก็เอาเลขคู่ออกทั้งหมดจนเป็นแบบนี้ {1,3,5,7,9}
*/


function getEvenNumbers(arrInput) {
    let result = new Array();
    for (i in arrInput) {
        let value = arrInput[i];
        if ((value%2) == 1) {
            result.push(value);
        } 
    }
    return result;
}

let arr1 = [0,1,2,3,4,5,6,7,8,9,10];
console.log(getOddNumbers(arr1));


/*
2.	จงสร้าง array {0,9,1,8,2,7,3,6,4,5} แล้ว sort จากน้อยไปมาก ห้ามใช้ sort
arr2.sort();
*/

function sortAsc(arrInput) {
    for (let i=1; i<=arrInput.length; i++) {
        for (let j=0; (j<=i-1); j++) {
            let tempNumber = arrInput[j];
            if (arrInput[i]<arrInput[j]) {
                arrInput[j] = arrInput[i];
                arrInput[i] = tempNumber;
            }
        }
    }
    return arrInput;
}


let arr2 = [0,9,1,8,2,7,3,6,4,5];
console.log(sortAsc(arr2));

//3.	จงสร้าง array ให้ได้แบบนี้ {0,1,2,3,4,5,6,7,8,9,10}, แล้วก็เอาเลขคู่ออกทั้งหมดจนเป็นแบบนี้ {1,3,5,7,9} แต่รอบนี้ทำโดยการใช้ for loop หรือ while


let arr3 = [0,1,2,3,4,5,6,7,8,9,10];

let result = new Array();
for (let i=0; i<=arr3.length; i++) {
    let value = arr3[i];
    if (value%2==1) {
        result.push(value);
    }
}


console.log(arr3);

//4.	จงสร้าง map ที่เก็บชื่อคนเป็นkey และอายุเป็น value {{Adam:28},{Sophie:22},{Aorum,13}} แล้วลองเรียกkeyของแต่ละelement
let person = new Map();
person.set('Adam',28);
person.set('Sophie',22);
person.set('Aorum',13);
for (let [key, value] of person) {
    console.log("key is " + key);
}


//5.	จงสร้าง array {0,9,1,8,2,7,3,6,4,5} แล้ว sort จากมากไปหาน้อย แต่ห้ามใช้ function sort()

let arr5 = [0,9,1,8,2,7,3,6,4,5];
for (let i=1; i<=arr5.length; i++) {
    for (let j=0; (j<=i-1); j++) {
        let tempNumber = arr5[j];
        if (arr5[i]>arr5[j]) {
            arr5[j] = arr5[i];
            arr5[i] = tempNumber;
        }
    }
}
console.log(arr5);

}  
</script>