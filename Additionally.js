var users = (
    function ( list ) {
        var users = []
        for ( var user of list )
            users.push ({
                name: user,
                present: false
            })

        return {
            setUserPresent ( userName, present ) { // функция добавляющая отметки о присутствии
                users.some ( value => value.name === userName) ? users.find( // проверяем наличие имени в полях name объектов если проверка пройдена то к 
                    function ( value ) {                                     //
                    return value.name === userName ? value.present = present : null
                    }
                ) : null
            },
            showPresent () {
                users.forEach ( // функция выводящая имена из полей name объектов массива в которых есть записи в полях present
                    currentValue =>  currentValue.present !== false ? console.log (currentValue.name) : null
                ) 
            },
            showAbsent () {
                users.forEach ( // функция выводящая в консль имена которые есть в полях name  объектов массива users
                    currentValue => console.log ( currentValue.name ) 
                )       
            }
        }
    }
)( [ "Иван", "Дмитрий", "Степан", "Михаил" ] )

users.showAbsent()

users.setUserPresent( "Иван", "+" )
users.setUserPresent( "Михаил", "присутствовал" )
users.setUserPresent( "Степан", true )

users.showPresent()