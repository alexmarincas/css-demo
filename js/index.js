const elements = document.querySelectorAll('.el');
const toggleBorders = document.querySelector('#toggleBorders');
const roof = document.querySelector('.roof');

toggleBorders.addEventListener('change', function(){
    if(this.checked){
        elements.forEach(el => el.classList.add('border'));
        roof.classList.add('el-special');
    }else{
        elements.forEach(el => el.classList.remove('border'));
        roof.classList.remove('el-special');
    }
});