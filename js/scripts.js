var triangle1Area = getTriangleArea(10, 15);
var triangle2Area = getTriangleArea(-4, 15);
var triangle3Area = getTriangleArea(10, 6);

function getTriangleArea(a, h) {
    if (a < 0 || h < 0) {
        return 'nieprawidlowe dane';
    }
	return a * h / 2;
}

console.log('Wynik = ' + triangle1Area);
console.log('Wynik = ' + triangle2Area);
console.log('Wynik = ' + triangle3Area);
