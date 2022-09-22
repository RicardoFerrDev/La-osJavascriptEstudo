
let peso, exc, multa = 0.0
peso = prompt("Digite o peso dos tomates: ");

if(peso > 50){
  exc = peso - 50
  multa = exc * 4 
  alert("Jão pagara R$:" + multa.toFixed(2) + " de multa ") 
}else{
    alert("Não precisa pagar multa");
}
