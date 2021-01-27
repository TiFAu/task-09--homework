//Допилите код функции changeClass, которая парсит все стили страницы в поисках заданного класса, а затем меняет атрибуты стиля этого класса

let changeClass = ( classname, styleString ) => ( 
//   ...
).length > 0 ? console.log ( "found" ) : 
    document.head.appendChild (
        document.createElement ( "style" )
    ).textContent = `.${classname} {${styleString}}`
//После вызова функции:

changeClass ( "second-level-menu", "background-color: red!important;" )
//в консоли страницы, где есть элементы с классом second-level-menu, у всех элементов этого класса цвет фона должен измениться на красный

// Решение данного задание доступно здесь https://github.com/garevna/js-course/wiki/lesson-08-samples
/* let changeClass = ( classname, styleString ) => ( Array.from ( document.styleSheets )
    .filter ( sheet => !sheet.href )
        .map (
            sheet => Array.from ( sheet.cssRules )
                    .filter ( rule => rule.selectorText === `.{classname}` )
        )
           .filter ( item => item.length > 0 )
               .map ( item => item[0].cssText.split ("}")
                           .join ( `${styleString}}` )
               )
).length > 0 ? console.log ( "found" ) : 
    document.head.appendChild (
        document.createElement ( "style" )
    ).textContent = `.${classname} {${styleString}}`

changeClass ( "graf", "background-color: red!important;" ) */