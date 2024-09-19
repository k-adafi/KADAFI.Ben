
let animationInterval;

function startAnimations() {
    document.getElementById('myName').classList.remove('visible', 'float-in');
    document.getElementById('myskill1').classList.remove('visible', 'float-in');
    document.getElementById('myskill2').classList.remove('visible', 'float-in');

    setTimeout(function() {
        document.getElementById('myName').classList.add('visible', 'float-in');
    }, 500); // Délai de 0.5 seconde

    setTimeout(function() {
        document.getElementById('myskill1').classList.add('visible', 'float-in');
    }, 1500); // Délai de 1.5 secondes

    setTimeout(function() {
        document.getElementById('myskill2').classList.add('visible', 'float-in');
    }, 2500); // Délai de 2.5 secondes
}

function stopAnimations() {
    clearInterval(animationInterval);
}

function resumeAnimations() {
    startAnimations();
    animationInterval = setInterval(startAnimations, 6000); // Boucle toutes les 2 minutes (120000 ms)
}

window.addEventListener('load', function() {
    resumeAnimations();

    document.getElementById('myName').addEventListener('mouseover', stopAnimations);
    document.getElementById('myName').addEventListener('mouseout', resumeAnimations);

    document.getElementById('myskill1').addEventListener('mouseover', stopAnimations);
    document.getElementById('myskill1').addEventListener('mouseout', resumeAnimations);

    document.getElementById('myskill2').addEventListener('mouseover', stopAnimations);
    document.getElementById('myskill2').addEventListener('mouseout', resumeAnimations);
});




// function startAnimations() {
//     document.getElementById('myName').classList.remove('visible', 'float-in');
//     document.getElementById('myskill1').classList.remove('visible', 'float-in');
//     document.getElementById('myskill2').classList.remove('visible', 'float-in');

//     setTimeout(function() {
//         document.getElementById('myName').classList.add('visible', 'float-in');
//     }, 500); // Délai de 0.5 seconde

//     setTimeout(function() {
//         document.getElementById('myskill1').classList.add('visible', 'float-in');
//     }, 1500); // Délai de 1.5 secondes

//     setTimeout(function() {
//         document.getElementById('myskill2').classList.add('visible', 'float-in');
//     }, 2500); // Délai de 2.5 secondes
// }

// window.addEventListener('load', function() {
//     startAnimations();
//     setInterval(startAnimations, 5000); // Boucle toutes les 2 minutes (120000 ms)
// });




// window.addEventListener('load', function() {
//     setTimeout(function() {
//         document.getElementById('myName').classList.add('visible', 'float-in');
//     }, 500); // Délai de 0.5 seconde

//     setTimeout(function() {
//         document.getElementById('myskill1').classList.add('visible', 'float-in');
//     }, 1500); // Délai de 1.5 secondes

//     setTimeout(function() {
//         document.getElementById('myskill2').classList.add('visible', 'float-in');
//     }, 2500); // Délai de 2.5 secondes
// });