//Elabore um sistema que leia as variáveis C e N, respectivamente código e número de horas trabalhadas de um operário.
// E calcule o salário sabendo-se que ele ganha R$ 10,00 por hora.
//  Quando o número de horas exceder a 50 calcule o excesso de pagamento armazenando-o na variável E,
//   caso contrário zerar tal variável.
//   A hora excedente de trabalho vale R$ 20,00.
// No final do processamento imprimir o salário total e o salário excedente.

let cod, numH, sal, exc = 0.0, salExc = 0.0;
cod = prompt("Qual é o codigo do trabalhador?")
numH = prompt("DIgite as horas trabalhadas")
sal + numH *10;
if (numH > 50) {
   exc = numH - 50
   salExc = sal + (exc * 20)
   alert("Seu salario é R$" + sal);
   alert("Seu salario excedente é R$" + salExc); 
}
