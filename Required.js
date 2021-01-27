//Завершите код функции typeMessage так, чтобы на страницу выводился один символ в секунду
function typeMessage ( message, velocity ) { // Обявлена функция
    var container = document.getElementById ( "demo" ) ? //котаря получает в  container (в случаи наличия id = demo)
        document.getElementById ( "demo" ) : // елемент с id = demo
        document.body.appendChild ( // либо передает в тело 
            document.createElement ( "h3" ) // созданный заголовок  h3
        )
    container.style = `color: magenta;` // задает цвет 

    let mass = message.split('') // создаем массив из полученного аргумента
    for ( var i = 0; i < mass.length; i++ ) { // заводим цикл
        let tim = i * 1000 * velocity           // задаем увеличивающееся время на каждой итерации
        setTimeout (()=>container.innerHTML += mass.shift(),tim) //стрелочная функция, передающая буковку в body.container время через которое прилетит функция на выполнение
     }
}

typeMessage ( `Welcome to the hell`, 1 )

/*//первоначальная версия с обычной функцией
function typeMessage ( message, velocity ) { // Обявлена функция
    var container = document.getElementById ( "demo" ) ? //котаря получает в  container (в случаи наличия id = demo)
        document.getElementById ( "demo" ) : // елемент с id = demo
        document.body.appendChild ( // либо передает в тело 
            document.createElement ( "h3" ) // созданный заголовок  h3
        )
    container.style = `color: magenta;` // задает цвет 

    let mass = message.split('') // создаем массив из полученного аргумента
    for ( var i = 0; i < mass.length; i++ ) { // заводим цикл
        let tim = i * 1000 * velocity           // задаем увеличивающееся время на каждой итерации
        setTimeout (
            function () {
                container.innerHTML +=  `${mass.shift()}`
            },
            tim // время через которое прилетит функция на выполнение
        )
    }
}

typeMessage ( `Welcome to the hell`, 1 )
 */
