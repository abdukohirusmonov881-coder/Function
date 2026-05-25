// Vazifa 3 Создать функцию чётного числа 
function juft(num) {
    if (num % 2 === 0) {
        console.log("Juft");
    } else {
        console.log("Toq");
    }
}

let raq = +prompt("Raqam vorid kun");
juft(raq);


// Vazifa 4 Создать функцию поиска максимального числа массива
function maxMassiv(arr) {
    console.log(Math.max(...arr));
}

let massiv1 = prompt("Raqamro bo probel vorid kun")
    .split(" ")
    .map(Number);

maxMassiv(massiv1);


// Vazifa 5 Создать функйию суммы массива
function sumMassiv(arr) {
    let sum = 0;

    for (let num of arr) {
        sum += num;
    }

    console.log(sum);
}

let massiv2 = prompt("Raqamro bo probel vorid kun")
    .split(" ")
    .map(Number);

sumMassiv(massiv2);

// Vazifa 7 Создать функйцию подсчёта чётных чисел
function countJuft(arr) {
    let count = 0;

    for (let num of arr) {
        if (num % 2 === 0) {
            count++;
        }
    }

    console.log(count);
}

let massiv4 = prompt("Raqamro bo probel vorid kun")
    .split(" ")
    .map(Number);

countJuft(massiv4);