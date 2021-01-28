//само задание выглядит так
/* Допилите код функции changeClass, которая парсит все стили страницы в поисках заданного класса, а затем меняет атрибуты стиля этого класса

let changeClass = ( classname, styleString ) => ( 
   ...
).length > 0 ? console.log ( "found" ) : 
    document.head.appendChild (
        document.createElement ( "style" )
    ).textContent = `.${classname} {${styleString}}`
После вызова функции:

changeClass ( "second-level-menu", "background-color: red!important;" )
в консоли страницы, где есть элементы с классом second-level-menu, у всех элементов этого класса цвет фона должен измениться на красный
 */

 //мои потуги перепилить код Ирины
/* let changeClass = ( classname, styleString ) => ( 
    let arr1 = Array.from ( document.styleSheets );
    let arr2 = arr.filter ( sheet => !sheet.href );
    let arr3 = arr2.map (                                                                        //к элементам последнего массива применяем функцию
            sheet => Array.from ( sheet.cssRules )                                    // функция берущая каждое правило и
                    .filter ( rule => rule.selectorText === `.{classname}` )          // проверяющая на наличие в селекторе текста с именем искомого класса и результат выдающая в новый массив
        )
    let arr4 = arr3.filter ( item => item.length > 0 )
    let arr5 = arr4.map ( item => item[0].cssText.split ("}")
                            .join ( `${styleString}}` )
                    )
    //   ...
).length > 0 ? console.log ( "found" ) : 
    document.head.appendChild (
        document.createElement ( "style" )
    ).textContent = `.${classname} {${styleString}}`
//После вызова функции:

changeClass ( "logo", "background-color: red!important;" ) */
//в консоли страницы, где есть элементы с классом second-level-menu, у всех элементов этого класса цвет фона должен измениться на красный

// Решение данного задание доступно здесь https://github.com/garevna/js-course/wiki/lesson-08-samples и все же очень хочется услышать коментарии автора как функция функционирует
let changeClass = ( classname, styleString ) => ( Array.from ( document.styleSheets ) // создаем из таблицы стилей документа анономный массив
    .filter ( sheet => !sheet.href )                                                  // к каждому элементу массива применяем фильтр (фильтруем атрибуты не содержащие ссылок)  и получаем массив на выходе
        .map (                                                                        // к элементам последнего массива применяем функцию
            sheet => Array.from ( sheet.cssRules )                                    // функция берущая каждое правило и
                    .filter ( rule => rule.selectorText === `.{classname}` )          // проверяющая на наличие в селекторе текста с именем искомого класса и результат выдающая в новый массив
        )
           .filter ( item => item.length > 0 )                                        // отфильтровываем непустые элементы 
               .map ( item => item[0].cssText.split ("}")                             // разбивает содержимое строки (удаляет "}")
                           .join ( `${styleString}}` )                                // присоединяет значение цвета фона
               )
).length > 0 ? console.log ( "found" ) :                                              // если длинна полученно массива больше 0 выводим в консоль "found"
    document.head.appendChild (                                                       // отправляем в голову документа
        document.createElement ( "style" )                                            // созданный стиль
    ).textContent = `.${classname} {${styleString}}`                                  // которому меняем значеня атрибута заданного класса на заданное значение

changeClass ( "logo", "background-color: red!important;" )                            //проба функции
// открытым остается вопрос как это заводится несколько раз???????????????????????????????????????