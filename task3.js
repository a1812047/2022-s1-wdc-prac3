
var count = 0;
function increaseCount(){
    count++;
    let object = document.getElementById("mcount");
    object.innerText = count;
}

function displayBlog(){
    const date_time = document.createElement('P');
    date_time.className = "post-time";
    var now = new Date();
    
    date_time.innerHTML= now;
    date_time.style.color = "grey";
    date_time.style.fontWeight = "bold";
    var parent = document.getElementById("posts");
    parent.appendChild(date_time);
    var post = document.getElementsByTagName('textarea');
    var str = post[0].value;
    console.log(str);
    const createpost = document.createElement('P');
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
    parent.appendChild(createpost);
}



function displayBlog_manytimes(){
    var element = document.querySelector('input[name = "quantity"]');
    var storeValue = element.value;
    for(let i = 0; i < storeValue; i++){
        displayBlog();
    }
}
