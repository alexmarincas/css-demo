const elements = document.querySelectorAll('.el');
const toggleBorders = document.querySelector('#toggleBorders');
const roof = document.querySelector('.roof');

toggleBorders.addEventListener('change', (e)=>{
    const el = e.target;
    if(el.checked){
        elements.forEach(el => el.classList.add('border'));
        roof.classList.add('el-special');
        e.path[1].setAttribute('data-title', 'Hide borders');
    }else{
        elements.forEach(el => el.classList.remove('border'));
        roof.classList.remove('el-special');
        e.path[1].setAttribute('data-title', 'Show borders');
    }
});