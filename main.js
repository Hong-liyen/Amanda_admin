let toggle =  document.querySelector('.toggle');
let navigation = document.querySelector('.navigation');
let main = document.querySelector('.main');

toggle.onclick = function(){
    navigation.classList.toggle('active');
    main.classList.toggle('active');
}

if(window.innerWidth < 767) {
    navigation.classList.toggle('active')
    main.classList.toggle('active');
}

const deleteModel = document.querySelector('.delete_model');
const editAddModel = document.querySelector('.edit_add_model');

function deletebox() {
    deleteModel.classList.add('open')
    if(deleteModel.classList.contains('open')) {
        deleteModel.classList.remove('close')
    }
}
function editaddbox() {
    editAddModel.classList.add('open')
    if(editAddModel.classList.contains('open')) {
        editAddModel.classList.remove('close')
    }
}

function confirm() {
    deleteModel.classList.add('close')
    if(deleteModel.classList.contains('close')) {
        deleteModel.classList.remove('open')
    }
    editAddModel.classList.add('close')
    if(editAddModel.classList.contains('close')) {
        editAddModel.classList.remove('open')
    }
}

function cancel() {
    deleteModel.classList.add('close')
    if(deleteModel.classList.contains('close')) {
        deleteModel.classList.remove('open')
    }
    editAddModel.classList.add('close')
    if(editAddModel.classList.contains('close')) {
        editAddModel.classList.remove('open')
    }
}

const dateInput = document.getElementById('datePicker');
dateInput.valueAsDate = new Date(); 
