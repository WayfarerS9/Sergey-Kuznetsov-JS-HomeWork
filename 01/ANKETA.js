let userLastNameEntered = prompt('Укажите свою фамилию', 'Фамилия');

while ( userLastNameEntered == '' || userLastNameEntered == null || userLastNameEntered == 'Фамилия' ) {
    userLastNameEntered = prompt('Пожалуйста, укажите корректную фамилию');
};

let userLastName = userLastNameEntered;
let userFirstNameEntered = prompt('Укажите свое имя', 'Имя');

while ( userFirstNameEntered == '' || userFirstNameEntered == null || userFirstNameEntered == 'Имя' ) {
    userFirstNameEntered = prompt('Пожалуйста, укажите корректное имя');
};

let userFirstName = userFirstNameEntered;
let userPatronymicEntered = prompt('Укажите свое отчество', 'Отчество');

while ( userPatronymicEntered == '' || userPatronymicEntered == null || userPatronymicEntered == 'Отчество' ) {
    userPatronymicEntered = prompt('Пожалуйста, укажите корректное отчество');
};

let userPatronymic = userPatronymicEntered;
let userAgeEntered = Number(prompt('Укажите свой возраст',
    'Количество полных лет (следует указать цифрами от 1 до 125)'));

while ( !(userAgeEntered >= 1 && userAgeEntered <= 125) ) {
    userAgeEntered = Number(prompt('Пожалуйста, укажите корректный возраст'));
};

let userAge = userAgeEntered;
let userGenderBoolean = confirm('Ваш пол - мужской?');
let userGender;
let userRetiree;


if (userGenderBoolean == true) {
    userGender = 'мужской';

    if (userAge >=63) {
        userRetiree = 'да';
    } else {
        userRetiree = 'нет';
    }

} else if (userGenderBoolean == false) {
    userGender = 'женский';

    if (userAge >=58) {
        userRetiree = 'да';
    } else {
        userRetiree = 'нет';
    }

};

alert(`    ваше ФИО: ${userLastName} ${userFirstName} ${userPatronymic}
    ваш возраст в годах: ${userAge}
    ваш возраст в днях: ${userAge * 365}
    через 5 лет Вам будет: ${userAge + 5}
    ваш пол: ${userGender}
    вы на пенсии: ${userRetiree}
`);
