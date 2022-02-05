const example = [
    {
        'Horaire': '08h00',
        'Matiere': 'Mathematique',
        'Professeur': 'M. Kiricou',
        'Classe': '228'
    },
    {
        'Horaire': '10h30',
        'Matiere': 'Physique',
        'Professeur': 'Mme. Seaugo',
        'Classe': '107'
    },
    {
        'Horaire': '16h20',
        'Matiere': 'Technologie',
        'Professeur': 'M. Azouze',
        'Classe': '122'
    },
    {
        'Horaire': '19h45',
        'Matiere': 'Specialité',
        'Professeur': 'Mme. Origon',
        'Classe': '202'
    }
]

let EmploisDuTemps = {
    'Lundi': example,
    'Mardi': example,
    'Mercredi': example,
    'Jeudi': example,
    'Vendredi': example,
}

for (const jour in EmploisDuTemps) {
    const ElEmploisDuTemps = document.getElementById(jour)

    for (const Cours of EmploisDuTemps[jour]){
        let El_Cours = document.createElement('dl')
        El_Cours.innerHTML = `<dt>${Cours['Horaire']}</dt><dd class="cours"><label class="matier">${Cours['Matiere']}</label><br>
                                <label class="auteur">${Cours['Professeur']}</label><br>
                                <label class="classe">${Cours['Classe']}</label></dd>`
        ElEmploisDuTemps.appendChild(El_Cours)
    }
}