var pad = document.querySelectorAll('.pad'); // Seleciona todos os PADs

// Adciona cores aleatórias em cada PAD
for (var i = 0; i < pad.length; i++) {
    pad[i].style.background = '#' + coresAleatorias();
}


document.addEventListener('keydown', function(e){
    if (e.keyCode == 87) {
        var audio = document.getElementById('sound1');
        audio.play();
        audio.currentTime = 0;
        e.currentTime = 0;
        pad[0].style.opacity = '0.7';

        document.addEventListener('keyup', function(){
            pad[0].style.background = '#' + coresAleatorias();

        });

    
    }

    if (e.keyCode == 84) {
        var audio = document.getElementById('sound2');
        audio.play();
        audio.currentTime = 0;
        this.currentTime = 0;
        pad[1].style.opacity = '0.7';
        
        document.addEventListener('keyup', function(){
            pad[1].style.background = '#' + coresAleatorias();

        });

        
    }

    if (e.keyCode == 79) {
        var audio = document.getElementById('sound3');
        audio.play();
        audio.currentTime = 0;
        pad[2].style.opacity = '0.7';

        document.addEventListener('keyup', function(){
            pad[2].style.background = '#' + coresAleatorias();

        });


    }

    if (e.keyCode == 83) {
        var audio = document.getElementById('sound4');
        audio.play();
        audio.currentTime = 0;
        pad[3].style.opacity = '0.7';

        document.addEventListener('keyup', function(){
            pad[3].style.background = '#' + coresAleatorias();

        });

    }

    if (e.keyCode == 71) {
        var audio = document.getElementById('sound5');
        audio.play();
        audio.currentTime = 0;
        pad[4].style.opacity = '0.7';

        document.addEventListener('keyup', function(){
            pad[4].style.background = '#' + coresAleatorias();

        });
    
    }

    if (e.keyCode == 76) {
        var audio = document.getElementById('sound6');
        audio.play();
        audio.currentTime = 0;
        pad[5].style.opacity = '0.7';

        document.addEventListener('keyup', function(){
            pad[5].style.background = '#' + coresAleatorias();

        });
       
    }

    if (e.keyCode == 90) {
        var audio = document.getElementById('sound7');
        audio.play();
        audio.currentTime = 0;
        pad[6].style.opacity = '0.7';

        document.addEventListener('keyup', function(){
            pad[6].style.background = '#' + coresAleatorias();

        });
       
    }

    if (e.keyCode == 86) {
        var audio = document.getElementById('sound8');
        audio.play();
        audio.currentTime = 0;
        pad[7].style.opacity = '0.7';

        document.addEventListener('keyup', function(){
            pad[7].style.background = '#' + coresAleatorias();

        });
       
    }

    if (e.keyCode == 77) {
        var audio = document.getElementById('sound9');
        audio.play();
        audio.currentTime = 0;
        pad[8].style.opacity = '0.7';

        document.addEventListener('keyup', function(){
            pad[8].style.background = '#' + coresAleatorias();

        });
       
    }






});

//Cria cores aleatorias

function coresAleatorias() {
    cor = Math.floor(Math.random() * 999999);
    return cor;
}

// Reseta a cor do background para a padrão

function resetaCor() {
    pad.style.background = coresAleatorias();
    
}
