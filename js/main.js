// parte 1
var studente = [
    firstname = 'Pietro',
    lastname = 'Marrazzo',
    eta = 28,
];

for (var key in studente) {
    console.log(key + ': ' + studente[key]);
};


// parte 2
var studenti = [
    {
        firstname: 'Pietro',
        lastname: 'Marrazzo',
        eta: 28,
    },
    {
        firstname: 'Sara',
        lastname: 'Marrazzo',
        eta: 23,
    },
    {
        firstname: 'Francesco',
        lastname: 'Marrazzo',
        eta: 25,
    },
    {
        firstname: 'Lulu',
        lastname: 'Nespoli',
        eta: 21,
    },
];

for (var i = 0; i < studenti.length; i++) {
    var student = studenti[i];
    console.log('studente ' + (i + 1));
    console.log('Nome', student.firstname);
    console.log('Cognome', student.lastname);
    console.log('età', student.eta);
}




// parte 3
var newFirstname = prompt('Inserisci il nome del nuovo studente').trim();
var newLastname = prompt('Inserisci il cognome del nuovo studente').trim();
var newAge = parseInt(prompt('Inserisci l\'età del nuovo studente').trim());

studenti.push({
    firstname: newFirstname,
    lastname: newLastname,
    eta: newAge,
});

console.log(studenti);
console.table(studenti);
