let list  = document.querySelectorAll('.workFlow_contract__itemThree__tabs ul li');
let content  = document.querySelectorAll('.workFlow_contract__itemThree__tabs .content > div');

list.forEach(ele => {
    ele.addEventListener('click' , (e)=>{
        list.forEach(ele => {
            ele.classList.remove('activeList') 
        });
        e.currentTarget.classList.add('activeList') 

        content.forEach(ele => {
            ele.classList.remove('activeContent')
        });
        document.querySelector(e.currentTarget.dataset.class).classList.add('activeContent')
    })
});
