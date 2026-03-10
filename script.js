const canvas = document.getElementById("tela");
const ctx = canvas.getContext("2d");

let linhas = 3;
let colunas = 4;

let tamanho = 60;

let matriz = [];


// Primeiro loop (colunas)
// Percorre coluna 0 ~ 3
for(let c = 0; c < colunas; c++)
{
    matriz[c] = [];

    // Segundo loop linhas
    for(let r = 0; r < linhas; r++)
    {
        // Cada posição da matriz recebe valor 1
        // Resultado: [1][1][1]
        //            [1][1][1]
        //            [1][1][1]
        //            [1][1][1]   
    matriz[c][r] = 1;
    }
}

// Função Desenha os Quadrados no canvas
function desenhar()
{

    // Percorre toda matriz

    //matriz[0][0]
    //matriz[0][1]
    //matriz[0][2]

    //matriz[1][0]
    //matriz[1][1]
    //matriz[1][2]
    // ...

    for(let c = 0; c < colunas; c++)
    {

        for(let r = 0; r < linhas; r++)
        {

            //posição horizontal
            // x = colun a x tamanho
            // posição vertical
                // y = linha x tamanho
                // +20 é uma margem

            let x = c * tamanho + 20;
            let y = r * tamanho + 20;

            //Dsenha um retângulo apenas com borda.
            // Parâmetros:
                // x -> posição horizontal
                // y -> posição vertical

                ctx.strokeRect(x, y, tamanho, tamanho);
        }
    }
}

desenhar();