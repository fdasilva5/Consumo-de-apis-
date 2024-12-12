var frases = [
    "«Los buenos programadores usan sus cerebros, pero unas buenas directrices nos ahorran de tener que hacerlo en cada caso». Francis Glassborow.",
    "«Siempre codifica como si el tipo que terminará manteniendo tu código será un psicópata violento que sabe dónde vives».  Martin Golding",
    "«El optimismo es un riesgo laboral de la programación; el feedback es el tratamiento». Kent Beck"
];

function mostrarFrase() {
    var contador = frases.length;
    var elegirFrase = Math.floor(Math.random() * contador); 
    var fraseAleatoria = document.getElementById("fraseAleatoria"); 

    fraseAleatoria.textContent = frases[elegirFrase]; 
}

document.addEventListener("DOMContentLoaded", function() { 
    mostrarFrase();
});

//API JSONPLACEHOLDER

function getPosts() {
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/posts',
        method: 'GET',
        success: function(response) {
            $('.random-frase').hide();
            $('.expectation').hide();
            $('.apod').hide();

            $('.posts').show();

            $('#postsContainer').empty();

            response.forEach(function(post) {
                $('#postsContainer').append('<div><h3>' + post.title + '</h3><p>' + post.body + '</p></div>');
            });
        },
        error: function(req, status, err) {
            console.log(req, status, err);
        }
    });
}


//API NASA

function getAPOD() {
    const apiKey = 'oujjqOe6rg1i91iWUWNo3pnyq5Amr0gf4Ul1afnW';
    const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

    $.ajax({
        url: url,
        method: 'GET',
        success: function(response) {
            $('.random-frase').hide();
            $('.expectation').hide();
            $('.posts').hide();
s
            $('.apod').show();

            $('#imagenAPOD').attr('src', response.url);
            $('#tituloAPOD').text(response.title);
            $('#descripcionAPOD').text(response.explanation);
        },
        error: function(req, status, err) {
            console.log(req, status, err);
        }
    });
}

