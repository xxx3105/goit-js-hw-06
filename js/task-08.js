
 

const formUser = document.querySelector('.login-form');

const funcForm = (event) => {
    event.preventDefault();
    
    const {
        elements: { email, password }
    } = event.currentTarget;

    if (email.value === "" || password.value === "") {
             
        const notice = document.querySelector('.login-form');
        const textNotice = `<h2>Все поля должны быть заполнены!</h2>`;
        notice.insertAdjacentHTML("afterend", textNotice);

        return
    };
    const formData = {
        Email: email.value,
        Password: password.value,
    };

    console.log(formData);
    event.currentTarget.reset();
}; 

formUser.addEventListener("submit", funcForm);
 

// Задание 8
// Напиши скрипт управления формой логина.

// Обработка отправки формы form.login - form должна быть 
// по событию submit.
// При отправке формы страница не должна перезагружаться.
// Если в форме есть незаполненные поля, выводи alert 
// с предупреждением о том, что все поля должны быть
// заполнены.
// Если пользователь заполнил все поля и отправил форму,
// собери значения полей в обьект, где имя поля будет
// именем свойства, а значение поля - значением
// свойства.Для доступа к элементам формы используй 
// свойство elements.
// Выведи обьект с введенными данными в консоль и очисти
//  значения полей формы методом reset.
