//var para nome
//var p xp

let nome    = prompt('Qual é o seu nome?');

console.log(`Seja bem-vindo ao classificador de nível de heroi ${nome}`);

let exp     = prompt('Diga quanto experiência seu heroi possui!');


/*
Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 5.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante
*/

function verificarNivel(xp){
    let nivel;

    if(xp <= 1000){
        nivel = "Ferro";

    }else if(xp >= 1001 && xp <= 2000){
        nivel = "Bronze";

    }else if(xp >= 2001 && xp <= 5000){
        nivel = "Prata";

    }else if(xp >= 5001 && xp <= 7000){
        nivel = "Ouro";

    }else if(xp >= 7001 && xp <= 8000){
        nivel = "Platina";

    }else if(xp >= 8001 && xp <= 9000){
        nivel = "Ascendente";

    }else if(xp >= 19001 && xp <= 10000){
        nivel = "Imortal";

    }else if(xp >= 10001){
        nivel = "Radiante";

    };

    return nivel;
};

console.log(`O herói de nome ${nome} está no nível ${verificarNivel(exp)}`);