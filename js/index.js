const elements = document.querySelectorAll('.el');
const toggleBorders = document.querySelector('#toggleBorders');

toggleBorders.addEventListener('change', function(){
    if(this.checked){
        elements.forEach(el => el.classList.add('border'));
    }else{
        elements.forEach(el => el.classList.remove('border'));
    }
});