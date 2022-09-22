// Construa um sistema para ler uma variável numérica N e imprimi-la somente se a mesma for maior que 100, 
//caso contrário imprimi-la com o valor zero.


let num
num = prompt("Só diremos o valor se for maior que 100");
if (num <= 100) {
     num = 0
}else{
    alert("Seu numero foi" + num);
}
