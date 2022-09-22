//A Secretaria de Meio Ambiente que controla o índice de poluição mantém 3 grupos de indústrias
//que são altamente poluentes do meio ambiente. O índice de poluição aceitável varia de 0,05 até 0,25.
//Se o índice sobe para 0,3 as indústrias do 1º grupo são intimadas a suspenderem suas atividades, se o índice 
//crescer para 0,4 as industrias do 1º e 2º grupo são intimadas a suspenderem suas atividades,
 // se o índice atingir 0,5 todos os grupos devem ser notificados a paralisarem suas atividades.
//Faça um sistema que leia o índice de poluição medido e emita a notificação adeq
//uada aos diferentes grupos de empresas.


let ind
ind = prompt("Digite o indice da poluiçao medido")
if (ind < 0.3){
     alert("O indice é aceitavel");
}else if (ind < 0.4){
    alert("1° Grupo notificado, encerrar atividades");
}else if ( ind < 0.5){
    alert("o 1° e 2° grupo suspendem as atividades");
}else{
    alert("Todos os grupos,suspendam suas atividades");
}

