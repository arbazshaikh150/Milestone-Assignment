//  For adding feature on clicking on Add Button
const addingButton = document.getElementsByClassName('icon');
// Rendering using Javascript
addingButton[0].addEventListener('click' , blog);
console.log(addingButton[0]);
let count = 3;

function blog(){
    // Create the html form page for adding blogs in it
    // Adding icon ( Cross ) and input forms
    // const postUrl = document.createElement('input');
    // postUrl.type = 'text';
    // postUrl.placeholder = 'Enter Blog Post Url';
    // document.body.append(postUrl);

    
    // Aise karunga Abb !!!!!!!
    // const postUrl = [];
    // postUrl.push(`<input type="text" placeholder="Enter Name" />`);
    // let a = document.getElementsByClassName('h');
    // a[0].innerHTML = postUrl.join('');

    const add = [];
    add.push(`<div class="hamburger">
    <span class="line1"></span>
    <span class="line2"></span>
    </div><form action="" class="formTable">
    <input type="text" name="url" id="url1" placeholder="Enter the Blog Url">
    <input type="text" name="url" id="url2" placeholder="Enter the Blog Title">
    <input type="text" name="url" id="url3" placeholder="Enter Blog Description">
    <textarea name="" id="url4" cols="30" rows="10" placeholder="Write.."></textarea>
    <button class="addBlog" type="button" onclick="addingBlog()">Add Blog</button>

    </form>`);

    let a = document.getElementById('addHere');
    a.classList.toggle('t');
    


    let body = document.getElementById('body');
    let element = document.getElementsByClassName('hidingColor');
    if(!a.classList.contains('t')){
    body.style.backgroundImage = 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))';
    for(ele of element){
        ele.classList.toggle('k');
    }
    }
    else{
        body.style.backgroundImage = 'none';  
        for(ele of element){
            ele.classList.toggle('k');
        }
    }
    a.innerHTML = add.join('');
    let cut = document.getElementsByClassName('hamburger');
    cut[0].addEventListener('click' , () => {
        a.classList.toggle('t');
                body.style.backgroundImage = 'none';  
                for(ele of element){
                    ele.classList.toggle('k');
                }
        return;
    })

}




// Reading the Blog Page
// Design the webpage and takae the source of image add that image in respective click

function readMore(x){

    console.log(x);
    let container = document.getElementById('contain');
    container.classList.toggle('swap');
    const out = [];
    out.push(
        `<div class="hamburger second">
        <span class="line1"></span>
        <span class="line2"></span>
        </div><div class="blogPage">
        <section class="up">
            <p class="description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore porro aliquam odio atque ab distinctio, expedita accusantium laudantium sint quos minus, suscipit quod amet ipsam.</p>
        </section>
        <img src="${x.getAttribute('src')}" alt="Img" width="150px" height="150px">
    </div>
    <p class="overview">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel provident, ipsum quaerat ea molestias quis vitae suscipit assumenda aliquam veniam exercitationem cum delectus eligendi doloremque, sed aperiam nihil, enim error. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, earum! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde obcaecati impedit aliquam repellat aut, nesciunt atque eius, tempora, optio in cum quidem dolorem corrupti quis dolorum velit quod quia quam similique tenetur sunt quasi! Quod enim eaque est aperiam quos, consectetur voluptatem ipsum sequi maxime vero alias sed? Maxime, odio!</p>
    <p class="overview">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate recusandae tenetur mollitia aperiam consectetur eum quo, alias ea blanditiis quaerat! Autem aspernatur illo perferendis similique amet. Hic, ut error, sapiente similique doloribus cumque nesciunt dolores aliquid deleniti aperiam illum impedit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam sunt aliquid odio suscipit nulla dolor repellendus doloribus neque vel, error eligendi nihil debitis temporibus possimus doloremque blanditiis itaque, quas porro ab minus amet consequuntur architecto in? Ipsam, facilis. Fugit nulla quam, natus molestias, eum, nemo amet possimus expedita distinctio ducimus quasi. Sunt, accusantium. Enim, veritatis quam! Expedita nam autem est!</p>`);
    const show = document.getElementById('show');
    show.classList.toggle('togg');
    show.innerHTML = out.join('');

    let ele = document.getElementsByClassName('hamburger');
    ele[0].addEventListener('click' , () => {
        container.classList.toggle('swap');
        show.classList.toggle('togg');
        return;
    })

    
}






// Adding Blog in the webpage 
// OnClicking on the add blog button new card with the given attributes will be added to container


function addingBlog(){
    count++;
    let a = document.getElementById('addHere');
    a.classList.toggle('t');
    let body = document.getElementById('body');
    let element = document.getElementsByClassName('hidingColor');
    if(!a.classList.contains('t')){
        body.style.backgroundImage = 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))';
        for(ele of element){
            ele.classList.toggle('k');
        }
        }
        else{
            body.style.backgroundImage = 'none';  
            for(ele of element){
                ele.classList.toggle('k');
            }
        }

    let first = document.getElementById('url1').value;
    let second = document.getElementById('url2').value;
    let third = document.getElementById('url3').value;
    console.log(first , second , third);
    const displaying = [];
    displaying.push(`
    <img src="${first}" alt="Image" class="image">
    <h3 class="title">Blog Title : ${second}</h3>
    <p class="desc">Blog Description : ${third}.</p>
    <button class="read hidingColor" src="${first}" onclick="readMore(this)">Read More</button>
    `);

    let present = document.getElementById(`here${count}`);
    present.innerHTML = displaying.join('');

}

