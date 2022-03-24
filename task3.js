
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
    parent.appendChild(createpost);

}
