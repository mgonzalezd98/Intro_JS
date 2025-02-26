function processText() {
    // Obtener el texto del cuadro de texto
    const text = document.getElementById('textInput').value;
    
    // Contar la cantidad de letras
    const letterCount = text.length;

    // Mostrar el número de letras en el div
    document.getElementById('letterCount').innerHTML = `El texto tiene ${letterCount} letras.`;

    // Generar el abecedario con # y letras
    const alphabetDiv = document.getElementById('alphabet');
    let alphabetHTML = '<h3>Abecedario:</h3><ul>';

    // Recorrer el abecedario y mostrarlo con # y la letra
    for (let i = 65; i <= 90; i++) {  // 65 es 'A' y 90 es 'Z' en la tabla ASCII
        const letter = String.fromCharCode(i);
        alphabetHTML += `<li>#${letter}</li>`;
    }

    alphabetHTML += '</ul>';
    
    // Mostrar el abecedario en el div
    alphabetDiv.innerHTML = alphabetHTML;
}

