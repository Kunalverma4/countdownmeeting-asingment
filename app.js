const amount = document.querySelector('#amount')
const form = document.querySelector('.countdown')
const result = document.querySelector('.lorem-text')

form.addEventListener('submit',function(e){
    e.preventDefault();
    console.log('hey')
    setInterval(() => {
        amount.value--
    }, 1000);
})