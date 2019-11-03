let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let classes = document.querySelectorAll(".main-number");
let inputs = document.getElementById("calc-table");
let mainInput = document.querySelector(".displayNumbers");
let arr2 = [];
//functions
let fillInput = () => {
    for (let a = 0; a < arr.length; a++) {
        classes[a].value = arr[a];
    }
};

let randomArr = () => {
    let j, temp;
    for (let i = arr.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
    }
    return arr;
};

let click = () => {
    inputs.onclick = (event) => {
        let target = event.target;
        if (target.tagName === 'INPUT' && target.className==='main-number') {
            randomFun(target.value);
        }else if (target.tagName === 'INPUT' && target.className==='main-numberDel') {
            deleteLast();
            randomArr(target.value);
        }else  if (target.tagName === 'INPUT' && target.className==='main-numberClear'){
            clearAll()
        }
    };
};
let randomFun = (tg) =>{
    arr2.push(+tg);
    let str=arr2.join("");
    randomArr();
    fillInput();
    mainInput.value = str;
};
let deleteLast=()=>{
    arr2=arr2.slice(0,arr2.length-1);
    mainInput.value=arr2.join("");
};
let clearAll=()=>{
    arr2=[];
    mainInput.value=arr2;
};
mainInput.oninput=()=>{
    let pr=mainInput.value;
    let ar=pr.split("");
    arr2.push(ar.slice(-1));
};

fillInput();
click();

