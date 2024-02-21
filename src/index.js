   //Usar o true dentro do swtich para esses casos 

let nomeHeroi = "Labussiere";  
let xp = 9100;
let nivel;

 switch (true){ //Usar o true dentro do swtich para esses casos
    
    case xp < 1001:
    nivel = "Ferro";
    console.log("O Herói " + nomeHeroi + " está no nível " + nivel + "!");
    break;

    case xp <= 2000:
    nivel = "Bronze";
    console.log("O Herói " + nomeHeroi + " está no nível " + nivel + "!");
    break;

    case xp <= 5000:
    nivel = "Prata";
    console.log("O Herói " + nomeHeroi + " está no nível " + nivel + "!");
    break;

    case xp <= 7000:
    nivel = "Ouro";
    console.log("O Herói " + nomeHeroi + " está no nível " + nivel + "!");
    break;
   

    case xp <= 8000:
    nivel = "Platina";
    console.log("O Herói " + nomeHeroi + " está no nível " + nivel + "!");
    break;

    case xp <= 9000:
    nivel = "Ascendente";
    console.log("O Herói " + nomeHeroi + " está no nível " + nivel + "!");
    break;

    case xp <= 10000:
    nivel = "Imortal";
    console.log("O Herói " + nomeHeroi + " está no nível " + nivel + "!");
    break;

    default: 
    nivel = "Radiante";
    console.log("O Herói " + nomeHeroi + " está no nível " + nivel + "!");
    break;

}