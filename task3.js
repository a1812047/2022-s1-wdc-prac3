
var count = 0;
function increaseCount(){
    count++;
    let object = document.getElementById("mcount");
    object.innerText = count;
}

function changeDisplay(){
    var object1 = document.getElementById("main");
    var object2 = document.getElementById("menu");
    let disp = object1.style.display;
    object1.style.display = object2.style.display;
    object2.style.display = disp;
}

function displayBlog(){
    const date_time = document.createElement('P');
    date_time.className = "post-time";
    var now = new Date();
    
    date_time.innerHTML= now;
    date_time.style.color = "grey";
    date_time.style.fontWeight = "bold";
    var parent = document.getElementById("posts");

    var post = document.getElementsByTagName('textarea');
    var str = post[0].value;

    const createpost = document.createElement('P');
    createpost.style.fontWeight = "normal";
    createpost.className = "post-content";
    createpost.innerText = str;
    var elements = document.querySelectorAll('input[name = "color"]');
    let colour = "black";
    for(let i = 0; i < elements.length; i++){
        if(elements[i].checked === true){
             colour = elements[i].value;
        }
    }
    createpost.style.color = colour;
    date_time.appendChild(createpost);
    var elements = document.querySelectorAll('input[type = "checkbox"]');
    for(const element of elements){
        if(element.checked && element.value === "bold"){
            console.log(element.value);
            createpost.style.fontWeight = element.value;
        }else if(element.checked && element.value === "italic"){
            createpost.style.fontStyle = element.value;
        }
    }
    parent.appendChild(date_time);
}
function displayBlog_manytimes(){
    var element = document.querySelector('input[name = "quantity"]');
    var storeValue = element.value;
    for(let i = 0; i < storeValue; i++){
        displayBlog();
    }
}

function changeBackgroundColor(){
    var getText = document.querySelector('input[type = "text"]');
    document.querySelector("body").style.backgroundColor = getText.value;
}

function manageDisplay(){
    var allposts = document.getElementsByClassName("post-time");
    var range = document.querySelector('input[type = "range"]');
   if (range.value >= allposts.length){//posts length = 3, range = 0
       for(let i = 1; i < allposts.length; i++ ){
           allposts[i].style.display = "block";
       }
   }else{
       for(let j = 1; j < range.value; j++){
           allposts[j].style.display = "block";
       }
       for(let j = range.value; j < allposts.length; j++){
           allposts[j].style.display = "none";
       }
   }

}

