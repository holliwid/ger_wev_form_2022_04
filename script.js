function alertAnswers(){
    let gender = document.querySelector('input[name="answer"]:checked').value
    console.log(gender);
    var sect = document.getElementById('city_ru')
    var city_ru = sect.options[sect.selectedIndex].text
    let mailing = document.getElementById('mailing').checked;

    

    const login = document.getElementById('login').value
    const password = document.getElementById('password').value
    const email = document.getElementById('email').value



    //формирование ответа текста
    if(gender == 'man')
        text="<h3>Уважаемый "
    else text="Уважаемая "
    text = text + login + ", проверьте введенные данные:</h3>";
    text = text + "Пароль: " + password + "<br>"
    if (mailing)
        text = text + "Информация будет отправлена на адрес: " + email + "<br>"
    
    text = text + "Будем рады видеть Вас в нашем офисе в " + city_ru
    
    // вставка текста в сущесвующий div
    document.getElementById('answer').innerHTML = text;
}

// очистка полей
function clearAnswers(){
    const login = document.getElementById('login').value = ""
    const password = document.getElementById('password').value = ""
    const email = document.getElementById('email').value = ""

    let mailing = document.getElementById('mailing').checked = false

}
