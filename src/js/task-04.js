const counterValue = document.querySelector('#value');
const incrBtn = document.querySelector('[data-action="increment"]');
const decrBtn = document.querySelector('[data-action="decrement"]');

const counter = {
    value: 0,

    decrement () {
    this.value -= 1;
    },
    
    increment () {
    this.value += 1;
},
}

decrBtn.addEventListener('click', function () {
    counter.decrement();
    counterValue.textContent = counter.value;
});

incrBtn.addEventListener('click', function () {
    counter.increment();
    counterValue.textContent = counter.value;
});





