//Q1
function olamundo(){
    console.log("Bom dia, Mundo!!!\n");
}

olemundo = () => console.log("Bom dia, Mundo !!!\n");

//Q2
function cubo(){
    var n = prompt("Dah um num: ");
    console.log(`${n*n*n}\n`);
}

kubo = () => {var n = prompt("Dah um num: "); console.log(`${n*n*n}`);};

//q3
function Firehigh(){
    var t = prompt("Dah uma temp: ");
    var res = (t-32)*(5/9);
    console.log(`${res}\n`);
}

Celsius = () =>{var t = prompt("Dah uma temp: "); var res = (t-32)*(5/9); console.log(`${res}\n`);}

//Q4
function atring(){
    b = prompt("Dah um num: ");
    h = prompt("Dah um otro: ");
    var area = (b*h)/2;
    console.log(`${area}\n`);
}

btriang = () => {b = prompt("Dah um num: "); h = prompt("Dah um otro: "); var area = (b*h)/2; console.log(`${area}\n`);}

//Q5
function Careas(){
    var r = prompt("Dah um raio: ");
    var per = 2*3.14*r;
    var ar = 3.14*(r*r);

    console.log(`area: ${ar}\n`);
    console.log(`perimetro: ${per}\n`);
}

Carecas = () =>{
    var r = prompt("Dah um raio: ");
    var per = 2*3.14*r;
    var ar = 3.14*(r*r);

    console.log(`area: ${ar}\n`);
    console.log(`perimetro: ${per}\n`);
}

//Q6
function Invert(){
    var k = prompt("Dah um num: ").toString().split('').reverse().join('');
    console.log(`${k}\n`);
}

Revert = () => {var k = prompt("Dah um num: ").toString().split('').reverse().join(''); console.log(`${k}\n`);}

//q7
function ContVog(){
    var p = prompt("Diga uma palavra: ").split('');
    var vog = ['a', 'e', 'i', 'o', 'u'];
    var cont = 0;

    for(i = 0; i < p.length; i++){
        for(j = 0; j < vog.length; j++){
            if(vog[j] == p[i]){
                cont = cont+1;
            }
        }
    }

    console.log(`${cont}\n`);
}

vogcont = () => {
    var p = prompt("Diga uma palavra: ").split('');
    var vog = ['a', 'e', 'i', 'o', 'u'];
    var cont = 0;

    for(i = 0; i < p.length; i++){
        for(j = 0; j < vog.length; j++){
            if(vog[j] == p[i]){
                cont = cont+1;
            }
        }
    }

    console.log(`${cont}\n`);
}

//Q8
function retorno(){
    var c = prompt("Dah um valor ai:");
    var m = c * (Math.pow((1+0.05), 4));

    console.log(`Simulacao para 3 anos com taxa de 0.05: ${m.toFixed(2)}`);
}

lucros = () => {var c = prompt("Dah um valor ai:"); var m = c * (Math.pow((1+0.05), 4)); console.log(`Simulacao para 3 anos com taxa de 0.05: ${m.toFixed(2)}`);}

//Q9
function fatorial(){
    var i = prompt("DDah um valor ai:");
    var u = i - 1;
    var rez = i;

    while(u != 1){
        rez = rez * u;
        u = u - 1;
    }

    console.log(`${rez}`);
}

fat = () => {var i = prompt("DDah um valor ai:"); var u = i - 1; var rez = i; while(u != 1){rez = rez * u; u = u - 1;} console.log(`${rez}`);}

//Q10
function contletra(){
    var p = prompt("Deh uma palavra").split('');
    var l = prompt("Deh uma letra");
    var cont = 0;
    var hold;

    for(hold = 0; hold < p.length; hold++){
        if(p[hold] == l){
            cont = cont + 1;
        }
    }

    console.log(`${cont}`);
}

verletra = () => {
    var p = prompt("Deh uma palavra").split('');
    var l = prompt("Deh uma letra");
    var cont = 0;
    var hold;

    for(hold = 0; hold < p.length; hold++){
        if(p[hold] == l){
            cont = cont + 1;
        }
    }

    console.log(`${cont}`);
}

//Q11
function primo(){
    var num = prompt("Deh um numero");
    var cont;
    var res = 0;

    for(cont = 2; cont < 6; cont++){
        if(num%cont == 0){
            res = 1;
        }
    }

    if(res == 0){
        console.log(`${num} eh primo`);
    }
    else{console.log(`${num} nao eh primo`);}
}

ehprimo = () => {
    var num = prompt("Deh um numero");
    var cont;
    var res = 0;

    for(cont = 2; cont < 6; cont++){
        if(num%cont == 0){
            res = 1;
        }
    }

    if(res == 0){
        console.log(`${num} eh primo`);
    }
    else{console.log(`${num} nao eh primo`);}
}

//Q12
function somaArray(){
    var o = [12, 24, 56, 9, 10, 30]
    var r = 0;
    var cont;

    for (cont=0; cont < o.length; cont++){
        r = r + o[cont];
    }

    console.log(`a soma do array [12, 24, 56, 9, 10, 30] eh: ${r}`);
}

Arraysoma = () =>{
    var o = [15, 18, 23, 79, 1, 4]
    var r = 0;
    var cont;

    for (cont=0; cont < o.length; cont++){
        r = r + o[cont];
    }

    console.log(`a soma do array [15, 18, 23, 79, 1, 4] eh: ${r}`);
}

//Q13
function arraymedia(){
    var o = [12, 24, 56, 9, 10, 30]
    var r = 0;
    var cont;

    for (cont=0; cont < o.length; cont++){
        r = r + o[cont];
    }

    r = r/o.length;

    console.log(`a media do array [12, 24, 56, 9, 10, 30] eh: ${r}`);
}

mediaArray = () =>{
    var o = [15, 18, 23, 79, 1, 4]
    var r = 0;
    var cont;

    for (cont=0; cont < o.length; cont++){
        r = r + o[cont];
    }

    r = r/o.length;

    console.log(`a media do array [15, 18, 23, 79, 1, 4] eh: ${r}`);
}

//Q14
function soPositivo(){
    var f = [-1, 4, -12, 78, -2, -9, 0, -8, 13];
    var q = [];

    var cont;

    for (cont=0; cont < f.length; cont++){
        if(f[cont] >= 0){
            q.push(f[cont]);
        }
    }

    console.log(`arrray inicial: [${f}]| array final: [${q}]`);
}

positivoApenas = () =>{
    var f = [15, 28, 0, -36, -2, -5, 7, -9, 11, -40, -3];
    var q = [];

    var cont;

    for (cont=0; cont < f.length; cont++){
        if(f[cont] >= 0){
            q.push(f[cont]);
        }
    }

    console.log(`arrray inicial: [${f}]| array final: [${q}]`);
}
