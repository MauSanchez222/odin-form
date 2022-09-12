const inputList = document.querySelectorAll('input');
const inputListR = document.getElementsByClassName('inputR')
const form = document.querySelector('form');
const passInp = document.getElementById('password');
const confInp = document.getElementById('conf-password');
const inputWrap = document.getElementsByClassName('input')



document.addEventListener('DOMContentLoaded', () => {
    Array.from(inputList).forEach(input => {
        input.addEventListener('focusout', () => {
            input.classList.add('filled');
            if(input.parentElement.id === 'inp1'){
                document.getElementById('inp2').style.marginLeft = '-19px'
            }
            else if(input.parentElement.id === 'inp3'){
                document.getElementById('inp4').style.marginLeft = '-19px'
            }
            else if(input.parentElement.id === 'inp5'){
                document.getElementById('inp6').style.marginLeft = '-19px'
            }
        });
        input.value = '';
    })
    })

        
form.addEventListener('change', (event) => {
    if (passInp.value !== confInp.value){
        event.preventDefault();
        confInp.setCustomValidity('Passwords don\'t match');
        if(confInp.class === 'filled'){
            confInp.reportValidity();
        }
    }
    else{
        confInp.setCustomValidity('')
    }
}
)