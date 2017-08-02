function triangleArea(a, h) {
    if (a < 0 || h < 0) {
        return 'nieprawidlowe dane';
    } else {
        return a * h / 2;
    }
}

console.log('Wynik = ' + triangleArea(-4, 5));