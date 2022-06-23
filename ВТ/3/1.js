function task1() {
    while (true) {
        let first = prompt("Введите первое число: ")
        if (first.toLowerCase() == 'q')
            break

        let second = prompt("Введите второе число: ")
        if (second.toLowerCase() == 'q')
            break

        if (isNaN(first))
            alert("Первый ввод - не число")
        else if (isNaN(second))
            alert("Второй ввод - не число")
        else if (first < second)
            alert("Первое число меньше")
        else if (first > second)
            alert("Второе число меньше")
        else
            alert("Числа равны")
    }
}

function task2() {
    let countFloors = prompt("Введите количство этажей: ")
    let countEntrances = prompt("Введите количство подъездов: ")
    let countFlats = prompt("Введите количество квартир на этаже: ")

    if (isNaN(countFloors) || isNaN(countEntrances) || isNaN(countFlats)) {
        alert("Некоректный ввод")
        throw new "Некоректный ввод"
    }
    else if (countFloors < 1 || countFloors > 20 ||
        countEntrances < 1 || countEntrances > 15 ||
        countFlats < 1 || countFlats > 5) {
        alert("Выход за пределы")
        throw new "Выход за пределы"
    }

    let flat = prompt("Введите номер квартиры: ")
    let entrance = Math.ceil(flat / (countFloors * countFlats))

    if (entrance > countEntrances) {
        alert("Выход за пределы")
        throw new "Выход за пределы"
    } else
        alert("Номер подъезда: " + entrance)
}

function task3() {
    let date = prompt("Введите день месяца: ")
    let month = prompt("Введите месяц: ")

    if (isNaN(date) || isNaN(month)) {
        alert("Некоректный ввод")
        throw new "Некоректный ввод"
    }

    if (date < 1 || date > 31 || month < 1 || month > 12) {
        alert("Выход за пределы")
        throw new "Выход за пределы"
    }

    var days = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресение"]

    let myDate = new Date(2022, month - 1, date - 1)
    alert(days[myDate.getDay()])
}

function task4(second) {
    first = Number(prompt("Первое число"))
    second = Number(prompt("Второе число"))

    if (isNaN(first) || isNaN(second)){
        alert("Некоректный ввод")
        return  
    }

    if (((first & 1) == 0) && ((second & 1) == 0)) 
        alert(first * second)
    else if ((first & 1 == 1) && (second & 1 == 1)) 
        alert(first + second)
    else alert(second) 
}

function task5(){
    let command = "sum";
    let num = +prompt("Вводите цифры или любой символ для выхода")
    while(!isNaN(num)){
        command += '(' + num + ')';
        num = +prompt("Вводите цифры или любой символ для выхода");
    };
    alert(eval(command));
}

function sum(a){
    let currentSum = a

    function f(b) {
        currentSum += b
        return f
    }
    
    f.toString = function() {
        return currentSum;
    }

    return f
}

function task6(){
    let start = +prompt("Введите начальную точку")
    let end = +prompt("Введите конечную точку")
    let step = +prompt("Введите шаг")
    if (isNaN(start) || isNaN(end) || isNaN(step) || step == 0)
        alert("Некоректный ввод")

    let arr = []    

    if (step > 0)
        for (let i = start; i <= end; i += step)
            arr.push(i)
    else
        for (let i = start; i >= end; i += step)
            arr.push(i)

    alert(arr)
}

function task7(rows, cols){
    if (isNaN(rows) || isNaN(cols) || rows < '0' || cols < '0')
        return "Некоректный ввод"
    matrix = new Array(Number(rows));
    for (let i = 0; i < rows; i++){
        matrix[i] = new Array(Number(cols))
        for (let j = 0; j < cols; j++)
            matrix[i][j] = Math.floor(Math.random() * 101); 
    }
    alert(matrix)
}

function task8(mas){
    if (JSON.stringify(mas.flat()) != JSON.stringify(mas.flat(2)))
        return "Не корректный ввод"
    return Array.from(new Set(mas.flat()))
} 

function task9(mas){
    return Array.from(new Set(mas.flat(Infinity)))
}

function task10(obj, repetition){
    let map = new Map()
    for (let element of obj)
        if(map.has(element))
            map.set(element, map.get(element) + 1)
        else
            map.set(element, 1)
    
    let result = new Array()
    for (let element of map)
        if (element[1] < repetition)
            result.push(element[0])
    
    return result
}
