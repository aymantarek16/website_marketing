let accList  = document.querySelectorAll('.accounting_powerFul__tabs li');


accList.forEach(ele => {
    ele.addEventListener('click' , (e)=>{
        accList.forEach(ele => {
            ele.classList.remove('activeList')
        });
        e.currentTarget.classList.add('activeList')
    })
});

