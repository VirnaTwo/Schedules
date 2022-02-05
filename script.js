let EmploisDuTemps = {
    'Lundi': [
        {
            'Horaire': '08h10',
            'Matiere': 'Anglais',
            'Professeur': 'Mr.Kouyio',
            'Classe': 'C-210'
        },
        {
            'Horaire': '09h05',
            'Matiere': '47',
            'Professeur': 'Mr.Kouyio',
            'Classe': 'C-210'
        },
        {
            'Horaire': '10h00',
            'Matiere': 'Aveugle',
            'Professeur': 'Mr.Kouyio',
            'Classe': 'C-210'
        },
        {
            'Horaire': '11h10',
            'Matiere': 'Mono Jambiste',
            'Professeur': 'Mr.Kouyio',
            'Classe': 'C-210'
        }
    ]
}

for (const jour in EmploisDuTemps) {
    const ElEmploisDuTemps = document.getElementById(jour)

    for (const Cours of EmploisDuTemps[jour]){
        let El_Cours = document.createElement('dl')
        El_Cours.innerHTML = `<dt>${Cours['Horaire']}</dt><dd class="cours"><label class="matier">${Cours['Matiere']}</label><br>
                                <label class="auteur">${Cours['Professeur']}</label><br>
                                <label class="classe">${Cours['Classe']}</label></dd><br>`
        ElEmploisDuTemps.appendChild(El_Cours)
    }
}