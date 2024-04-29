// 1 - Utilizando ForLoop e array juntos, faça uma lista com 5 nomes, e faça o forLoop percorrer por ela exibindo todos os nomes um por um.
// Será necessário um método de array chamado "length".

const nomes = ["Sofia" , "Pedro" , "Viviane" , "Rebeca" , "Rodrigo"];

for (i = 0 ; i < nomes.length ; i++) {//se não colocar uma variável, fiva como var por baixo dos panos.
   console.log(nomes[i]);
}