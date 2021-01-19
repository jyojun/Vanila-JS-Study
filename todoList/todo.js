const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector('input'),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';

let toDos = [];
let idNumbers = 1;

function deleteToDo(event){
    //paintToDo 함수에서 만들어준 delBtn을 클릭하는 이벤트에 반응하면 삭제
    const btn = event.target; //무슨 버튼을 클릭했는지 알려줌
    const li = btn.parentNode; //그 버튼이 속해있는 부모노드를 알려줌
    toDoList.removeChild(li); //toDoList에있는 클릭한 버튼이 속해있는 html에서 li를 삭제
    const cleanToDos = toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id) //같은 경우엔 cleanToDos 에서 제외!! (지워주는 것과 같은 역할)
    }); //filterFn에서 리턴값이 트루인 경우만 cleanToDo에 저장됨
    toDos = cleanToDos;
    saveToDos(); //현재 cleanToDos값을 toDos 에 저장한뒤, 다시 업데이트해줌
}

function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos)); //localStorage 에 저장할 때 string 타입으로 저장  
}

function paintToDo(text){
    //console.log(text);
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = idNumbers + 1;
    idNumbers += 1 //버그 수정
    delBtn.innerHTML = "❌";
    delBtn.addEventListener("click", deleteToDo);
    span.innerText = text
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id: newId
    };
    toDos.push(toDoObj);
    saveToDos();
}


function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LS); //array 형태

    if(loadedToDos !== null){
        const parsedToDos = JSON.parse(loadedToDos); //String -> Object
        parsedToDos.forEach(function(element){ //리스트 각각의 원소마다 function 이 작용됨
            paintToDo(element.text); // localStorage에 들어있는 TODO리스트의 text(object의 key값)가 그려짐(버튼포함)
        })
    } 
}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();