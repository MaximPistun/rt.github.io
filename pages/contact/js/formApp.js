const form = document.forms["form"];  // это имя 

const button = form.elements["button"]

const inputArr = Array.from(form);  //массив всех инпутов
const validInputArr = [];

inputArr.forEach((el) => {
    if ( el.hasAttribute("data-reg")){
        el.setAttribute("is-valid", "0");
        validInputArr.push(el);
    }
});


form.addEventListener("input", inputHandler);
button.addEventListener("click", buttonHandler);


function inputHandler({target}) {
    if (target.hasAttribute("data-reg")) {
        inputCheck(target)
    }
}

function inputCheck(el) {
    const inputValue = el.value;
    const inputReg = el.getAttribute("data-reg");
    const reg = new RegExp(inputReg);
    if (reg.test(inputValue)) {
        el.style.border = "2px solid rgb(0, 196, 0)";
        el.setAttribute("is-valid", "1");
    } else{
        el.style.border = "2px solid rgb(255, 0, 0)"
        el.setAttribute("is-valid", "0");
    }
}
//el - элемент


function buttonHandler(e){
    const isAllValid = [];   //если в массиве все 1, то тогда форма отправляется (валидные импуты)
    validInputArr.forEach((el) => {
        isAllValid.push(el.getAttribute("is-valid"));
    });
    const isValid = isAllValid.reduce((acc, current) => {
        return acc && current;
    });
    if (!Boolean(Number(isValid))) {
        e.preventDefault();
    }
}


//e - эвент