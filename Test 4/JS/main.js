/*
Это - джаваскрипт-комментарий
*/
const testDiv = document.querySelector('.test');
/*
А эта штука позволяет положить в переменную, точнее в константу,
твой див
Про неё можно почитать вот здесь
https://www.w3schools.com/jsref/met_document_queryselector.asp
*/

/*Ниже будет функция. Надеюсь, ты уже знаком с функциями через паскаль
Если нет, то тут можно почиать, что такое функция
https://www.w3schools.com/js/js_functions.asp
Мы будем ещё вызывать эту функцию ниже в коде, например, вот так
innerHTMLToTestDiv(test1);
*/
function innerHTMLToTestDiv(text) {
    testDiv.innerHTML += text + '<br>';
    /*Здесь мы используем innerHTML, можешь почиать про него здесь
    https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML
    Простыми словами, мы добавляем тескт и переход на новую строку <br>
    */
}

//Это тоже функция.
//А это - новый тип комментариев в JS - однострочные
function innerTextToTestDiv(text) {
    testDiv.innerText += text;
    //innerText работает аналогично innerHTML, но игнорирует html-разметку
    //Плюс ещё кое-что
}

const test1 = 0b0001;
const test2 = 0o1;
const test3 = 0x1;
const test4 = 1;
const test5 = "1";
const test6 = -0.1;
const test7 = 1n;
const test8 = true;
const test9 = `Test ${test1}`
//И вот мы начинаем вызывать функцию innerHTMLToTestDiv(), добавляя строки в твой див
innerHTMLToTestDiv(test1);
innerHTMLToTestDiv(test2);
innerHTMLToTestDiv(test3);
innerHTMLToTestDiv(test4);
innerHTMLToTestDiv(test5);
innerHTMLToTestDiv(test6);
innerHTMLToTestDiv(test7);
innerHTMLToTestDiv(test8);
innerHTMLToTestDiv(Number.MIN_VALUE);
innerHTMLToTestDiv(Number.MAX_VALUE);
innerHTMLToTestDiv(BigInt.MIN_VALUE);
innerHTMLToTestDiv(BigInt.MAX_VALUE);
innerHTMLToTestDiv(String.MAX_VALUE);
innerHTMLToTestDiv(String.MAX_VALUE);
innerHTMLToTestDiv(Boolean.MIN_VALUE);
innerHTMLToTestDiv(Boolean.MAX_VALUE);
//Я закомментировал нерабочий кот, который ломал другие функции
//var test10 = test;
//innerHTMLToTestDiv(test10);
innerHTMLToTestDiv(typeof test10);
test10 = 1;
innerHTMLToTestDiv(test10);
//innerHTMLToTestDiv(typeof test10)
innerHTMLToTestDiv(typeof test1);
innerHTMLToTestDiv(typeof test2);
innerHTMLToTestDiv(typeof test3);
innerHTMLToTestDiv(typeof test4);
innerHTMLToTestDiv(typeof test5);
innerHTMLToTestDiv(typeof test6);
innerHTMLToTestDiv(typeof test7);
innerHTMLToTestDiv(typeof test8);
innerHTMLToTestDiv(typeof test9);
innerHTMLToTestDiv(Number.MIN_VALUE);
innerHTMLToTestDiv(Number.MAX_VALUE);
/*innerHTMLToTestDiv(BigInt.MIN_VALUE);
innerHTMLToTestDiv(BigInt.MAX_VALUE);
innerHTMLToTestDiv(String.MAX_VALUE);
innerHTMLToTestDiv(String.MAX_VALUE);
innerHTMLToTestDiv(Boolean.MIN_VALUE);
innerHTMLToTestDiv(Boolean.MAX_VALUE);*/
//const test11 = {test12: "test", test13: 1};
//var test14;
/*innerHTMLToTestDiv(test11);
innerHTMLToTestDiv(test12);
innerHTMLToTestDiv(test13);
innerHTMLToTestDiv(test14);*/
const test15 =`— Скажи-ка, дядя, ведь не даром
Москва, спаленная пожаром,
Французу отдана?
Ведь были ж схватки боевые,
Да, говорят, еще какие!
Недаром помнит вся Россия
Про день Бородина!
— Да, были люди в наше время,
Не то, что нынешнее племя:
Богатыри не вы!
Плохая им досталась доля:
Немногие вернулись с поля…
Не будь на то господня воля,
Не отдали б Москвы!
Мы долго молча отступали,
Досадно было, боя ждали,
Ворчали старики:
«Что ж мы? на зимние квартиры?
Не смеют, что ли, командиры
Чужие изорвать мундиры
О русские штыки?»
И вот нашли большое поле:
Есть разгуляться где на воле!
Построили редут.
У наших ушки на макушке!
Чуть утро осветило пушки
И леса синие верхушки —
Французы тут как тут.
Забил заряд я в пушку туго
И думал: угощу я друга!
Постой-ка, брат мусью!
Что тут хитрить, пожалуй к бою;
Уж мы пойдем ломить стеною,
Уж постоим мы головою
За родину свою!
Два дня мы были в перестрелке.
Что толку в этакой безделке?
Мы ждали третий день.
Повсюду стали слышны речи:
«Пора добраться до картечи!»
И вот на поле грозной сечи
Ночная пала тень.
Прилег вздремнуть я у лафета,
И слышно было до рассвета,
Как ликовал француз.
Но тих был наш бивак открытый:
Кто кивер чистил весь избитый,
Кто штык точил, ворча сердито,
Кусая длинный ус.
И только небо засветилось —
Всё шумно вдруг зашевелилось,
Сверкнул за строем строй.
Полковник наш рождён был хватом:
Слуга царю, отец солдатам…
Да, жаль его: сражён булатом,
Он спит в земле сырой.
И молвил он, сверкнув очами:
«Ребята! не Москва ль за нами?
Умрёмте ж под Москвой,
Как наши братья умирали!»
И умереть мы обещали,
И клятву верности сдержали
Мы в Бородинский бой.
Ну ж был денек! Сквозь дым летучий
Французы двинулись, как тучи,
И всё на наш редут.
Уланы с пёстрыми значками,
Драгуны с конскими хвостами,
Все промелькнули перед нами,
Все побывали тут.
Вам не видать таких сражений!..
Носились знамена, как тени,
В дыму огонь блестел,
Звучал булат, картечь визжала,
Рука бойцов колоть устала,
И ядрам пролетать мешала
Гора кровавых тел.
Изведал враг в тот день немало,
Что значит русский бой удалый,
Наш рукопашный бой!..
Земля тряслась — как наши груди,
Смешались в кучу кони, люди,
И залпы тысячи орудий
Слились в протяжный вой…
Вот смерклось. Были все готовы
Заутра бой затеять новый
И до конца стоять…
Вот затрещали барабаны
И отступили бусурманы.
Тогда считать мы стали раны,
Товарищей считать.
Да, были люди в наше время,
Могучее, лихое племя:
Богатыри не вы.
Плохая им досталась доля:
Немногие вернулись с поля.
Когда б на то не божья воля,
Не отдали б Москвы!`;
//Тут мы используем не innerHTMLToTestDiv()>, а innerTextToTestDiv()
innerTextToTestDiv(test15);
/*
На этом всё. надеюсь, я тебя не сильно загрузил новой инфой.
Можешь попробовать вместо вывода в div вывод в консоль.
Также можешь удалить мои комменты, если они не нужны.
*/