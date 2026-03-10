const canvas = document.getElementById("tela");
const ctx = canvas.getContext("2d");

let linhas = 3;
let colunas = 4;

let largura = 60;
let altura = 25;
let padding = 10;

let blocos = [];


// Primeiro loop (colunas)
// Percorre coluna 0 ~ 3
for(let c = 0; c < colunas; c++)
{
    blocos[c] = [];

    // Segundo loop linhas
    for(let r = 0; r < linhas; r++)
    {
        // Cada posição da matriz recebe valor 1
        // Resultado: [1][1][1]
        //            [1][1][1]
        //            [1][1][1]
        //            [1][1][1]   
        matriz[c][r] = {
            x:0,
            y:0,
            ativo:true
        };
    }
}

// Função Desenha os Quadrados no canvas
function desenharBlocos()
{
    ctx.clearRect(0,0,canvas.clientWidth,canvas.height);

    for(let c = 0; c < colunas; c++){
        for(let r = 0; r < linhas; r++){

            if(blocos[c][r].ativo){

                let x = c * (largura + padding) + 40;
                let y = r * (altura + padding) + 40;

                blocos [c][r].x = x;
                blocos[c][r].y = y;

                ctx.lineWidth = 2;
                ctx.strokeStyle - "white";
                ctx.strokeRect(x, y, largura, altura);
            }
        }
    }
}

    canvas.addEventListenter("click", clicar);

    function clicar(event){

        let rect = canvas.getBoundingClientRect();

        let mouseX = event.clientX - rect.left;
        let mouseY = event.clientY - rect.top;

        for(let c = 0; c < colunas; c++){
            for(let r = 0; r < linhas; r++)
            {

                let bloco= blocos[c][r];

                if (bloco.ativo){

                    if(
                        mouseX > bloco.x &&
                        mouseX < bloco.x + largura &&
                        mouseY > bloco.y &&
                        mouseY < bloco.y + altura
                    ){
                        bloco.ativo = false;
                    }
                }
            }
        }
        desenharBlocos();
    }

    desenharBlocos();