// form validation

const nome = document.querySelector('.name') || null;
const email = document.querySelector('.email');
const password = document.querySelector('.password');
const submitBtn = document.querySelector('.submit-btn');


if (nome == null) { // login page is open

} else { //register page is open
    submitBtn.addEventListener('click', ()=>{
        fetch('register-user', {
            method: 'post',
            headers: new Headers({'Content-Type':'application/json'}),
            body: JSON.stringify({
                nome: nome.value,
                email: email.value,
                password: password.value
            })
        })
        .then(res => res.json())
    })
}