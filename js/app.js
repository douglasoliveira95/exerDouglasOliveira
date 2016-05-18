function calcFatorial() {
    testarCalcular = document.getElementById('number').value;
    var d = 1; 
    var fatorial = 1;
    while (d <= testarCalcular) {
        fatorial = fatorial * d;
        d += 1;
    }
    document.getElementById('result').value = fatorial;
}