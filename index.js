// const 
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let arr2 = [];

// arrauButtons
let classes = document.querySelectorAll(".main-number");
// buttonsWrapper
let inputs = document.getElementById("calc-table");

let mainInput = document.querySelector(".displayNumbers");

//functions
let fillInput = () => {
    for (let a = 0; a < arr.length; a++) {
        classes[a].value = arr[a];
    }
};

// should return newRandomArr
let randomArr = () => {
    let j, temp;
    // let newRandomArr = [0,1,2,3,4,5,6,7,8,9];
    for (let i = arr.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        // instead arr use newRandomArr
        temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
    }
    return arr;
    // return newRandomArr;
};

let randomFun = (tg) =>{
    arr2.push(+tg);
    let str=arr2.join("");
    // let newRandomArr = randomArr();
    // fillInput(newRandomArr); 
    randomArr();
    fillInput();
    mainInput.value = str;
};

let deleteLast=()=>{
    
    arr2 = arr2.slice(0, arr2.length - 1);
    mainInput.value = arr2.join("");
};

let clearAll=()=>{
    arr2 = [];
    // class Array { toString() { this.join('') } }
    // mainInput.value = '';
    mainInput.value = arr2;
};

mainInput.oninput=()=>{
    let pr = mainInput.value;
    let ar = pr.split("");
    arr2.push(ar.slice(-1));
};

fillInput();

// деструкторизация
inputs.onclick = (event) => {
    // const
    let target = event.target;
    // remove target.tagName === 'INPUT'
    // not use if else
    // if (target.tagName === 'INPUT' && target.className==='main-number') {
    //     randomFun(target.value);
    //     return;
    // }
    if (target.tagName === 'INPUT' && target.className==='main-number') {
        randomFun(target.value);
    }else if (target.tagName === 'INPUT' && target.className==='main-numberDel') {
        deleteLast();
        // Why target.value
        randomArr(target.value);
    }else  if (target.tagName === 'INPUT' && target.className==='main-numberClear'){
        clearAll()
    }
};
