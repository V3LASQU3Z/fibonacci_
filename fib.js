let n = parseFloat(prompt("introducir los n números para la serie fibonacci: "));
a = 0
b = 1
document.write("<h2>Se muestra los " + n + " primeros números de la secuencia:</h2>")
for (i = 1; i <= n; i++) {
    document.write(a + " , ")
    c = a + b
    a = b
    b = c
}