let _dataInp = ''
let data = document.getElementById('inp')
let task = 6
let flag = 0
let mode = true
let mainBox = document.getElementById('mainBox')
let _img1 =  document.getElementById('img1')
let _img2 =  document.getElementById('img2')

handleInput()

function myDate(s) {
  s.innerHTML = `today is  &nbsp  <span class='text-[15px] border-[#636363] border-b-2 border-dashed'> ${new Date().toDateString()} </span>`
}

function getDataInp() {
  if (data.value != null && data.value != '') {
    _img2.classList.add('hidden')
    //when task 0 you can not add any more
    disAbleInp()

    //get data
    _dataInp = data.value
    data.value = ''

    //creat box
    _div = document.createElement('div')
    _div.classList.add('px-3', 'py-2', 'border-[##5b5b5b]', 'border-2', 'rounded-3xl', 'w-full', 'flex', 'flex-wrap', 'overflow-hidden', 'mb-2', 'box')
    _div.innerHTML = `    
     <i onclick='myEdit(this)' class="bi bi-pencil-fill w-[8%]  flex items-center cursor-pointer"></i>
     <i onclick='myDel(this)' class="bi bi-trash-fill w-[8%]  flex items-center cursor-pointer"></i>
     <div class='w-[8%] flex items-center '><input type="checkbox" class=' w-4 h-4  border-4 border-[#2d2d2d] cursor-pointer' ></div>
     <h5  class='w-[60%] flex items-center'>${_dataInp} </h5>    
    `
    mainBox.appendChild(_div)

    //count the tasks
    task--
    handleInput()

    //reset form validation 
    flag = 0
    apperForm()

  } else {
    //form validation 
    flag = 1
    apperForm()
  }
}

function myDel(s) {
  //enable the form
  disAbleInp()

  //main opt
  flag = 0
  apperForm()
  s.parentElement.remove()

  //count the task
  task++
  handleInput()
}

function myEdit(s) {
  let _edit = s.nextElementSibling.nextElementSibling.nextElementSibling
  _edit.setAttribute('contenteditable', true)
  _edit.focus()
}

function getdel() {
  //enable the form
  disAbleInp()

  //main opt
  flag = 0
  apperForm()
  let _box = document.querySelectorAll('.box')
  _box.forEach(val => {
    let _child = val.children
    let _child2 = _child[2].children
    if (_child2[0].checked) {
      val.remove()
    }
  })

  _box = document.querySelectorAll('.box')
  task = 6 - (_box.length)
  handleInput()
}

//count the number of  tasks
function handleInput() {
  data.placeholder = `You Can Creat ${task} New Tasks`
}

//when task 0 you can not add any more
function disAbleInp() {
  task == 1 ? data.disabled = true : data.disabled = false;
}

//appreance the form
function apperForm() {  
  if (flag == 0) {
    data.classList.add('border-[#2d2d2d]','placeholder-[#2d2d2d]')
    data.classList.remove('border-red-600','placeholder-red-600')   
    } else {
    if(task != 0){
      data.classList.remove('border-[#2d2d2d]','placeholder-[#2d2d2d]','placeholder-white')
      data.classList.add('border-red-600','placeholder-red-600')
      data.placeholder = 'Please Enter Your Task'    
      }
  }
}

 function myDarkMode(){   
   mode = !mode
   console.log(task);
    if(!mode){    
    mainBox.classList.remove('bg-white','*:text-[#2d2d2d]')
    mainBox.classList.add('bg-[#2d2d2d]','*:text-white') 
    data.classList.remove('placeholder-[#2d2d2d]','border-[#2d2d2d]')
    data.classList.add('placeholder-white','border-white')
    _img1.src = "./asses/img/Light.svg"   
    }else{  
    mainBox.classList.remove('bg-[#2d2d2d]','*:text-white')     
    mainBox.classList.add('bg-white','*:text-[#2d2d2d]') 
    data.classList.remove('placeholder-white','border-white') 
    data.classList.add('placeholder-[#2d2d2d]','border-[#2d2d2d]') 
    _img1.src = "./asses/img/Dark.svg"    
    }
 }