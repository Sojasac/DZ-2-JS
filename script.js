var inputData = document.querySelector("input[type='text']");
var ulSpisok = document.querySelector("ul");
var spans = document.getElementsByTagName("span");
var saveBtn = document.getElementById("save");
var clearBtn = document.getElementById("clear");
var modal = document.getElementById('Mymodal');
var infoBtn = document.getElementById('infoB');
var close = document.getElementsByClassName("close")[0];


function deleteTodo(){
    for(let span of spans){
        span.addEventListener('click', function(){
            span.parentElement.remove();
            event.stopPropagation();
        });
    };
};


function loadTodo(){
    if(localStorage.getItem('TodoAppLication')){
        ulSpisok.innerHTML = localStorage.getItem('TodoAppLication');
    }

    deleteTodo();
};



//addEventListener - обработчик события

inputData.addEventListener('keypress', function(keyPressed){
    if(keyPressed.which === 13 & this.value != ""){
        var newLi = document.createElement("li");
        var newSpan = document.createElement("span");
        newSpan.innerHTML = 'Удалить ';
        let date = new Date();
        var newTodo = this.value;
        ulSpisok.appendChild(newLi).append(newSpan, newTodo, date);
        newLi.style.textDecoration='none'

        newLi.onclick = function lineThrough(){
                newLi.style.textDecoration='line-through'
            
        };
        
        }


    deleteTodo();
    });




saveBtn.addEventListener('click', function(){
    localStorage.setItem('TodoAppLication', ulSpisok.innerHTML);
});

clearBtn.addEventListener('click', function(){
    ulSpisok.innerHTML = "";
    localStorage.setItem('TodoAppLication', ulSpisok.innerHTML);
});



deleteTodo();
loadTodo();

infoBtn.onclick = function () {
    modal.style.display = "block";
}

close.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function (windowClick) {
    if( windowClick.target == modal) {
        modal.style.display = "none";
    }
}