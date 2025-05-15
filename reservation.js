// Variables
const tab = document.querySelector('table');
let number_adulte = parseInt(document.getElementById('number-adulte').textContent);
let number_enfant = parseInt(document.getElementById('number-enfant').textContent);
let number_chambre = parseInt(document.getElementById('number-chambre').textContent);

// Adulte
document.getElementById('plus-adulte').addEventListener("click", () => {
    number_adulte++;
    document.getElementById('number-adulte').textContent = number_adulte;
});

document.getElementById('moins-adulte').addEventListener("click", () => {
    if (number_adulte > 0) {
        number_adulte--;
        document.getElementById('number-adulte').textContent = number_adulte;
    }
});

// Enfant
document.getElementById('plus-enfant').addEventListener("click", () => {
    number_enfant++;
    document.getElementById('number-enfant').textContent = number_enfant;
    tab.insertAdjacentHTML('beforeend', '<tr class="age-row"><td>Âge<input type="number" min="0" max="17"></td></tr>');
});

document.getElementById('moins-enfant').addEventListener("click", () => {
    if (number_enfant > 0) {
        number_enfant--;
        document.getElementById('number-enfant').textContent = number_enfant;
        const ageRows = document.querySelectorAll('.age-row');
        if (ageRows.length > 0) {
            ageRows[ageRows.length - 1].remove();
        }
    }
});

// Chambre
document.getElementById('plus-chambre').addEventListener("click", () => {
    number_chambre++;
    document.getElementById('number-chambre').textContent = number_chambre;
});

document.getElementById('moins-chambre').addEventListener("click", () => {
    if (number_chambre > 0) {
        number_chambre--;
        document.getElementById('number-chambre').textContent = number_chambre;
    }
});

// Rechercher
document.getElementById('rechercher').addEventListener("click", () => {
    // Partie user
    let date_debut = document.getElementById('arrive').value;
    let date_fin = document.getElementById('retour').value;
    let v_travail = document.querySelector('.form-check-input').checked;
    
    // Partie back
    document.getElementById('nb-adulte').textContent = number_adulte;
    document.getElementById('nb-enfant').textContent = number_enfant;
    document.getElementById('nb-chambre').textContent = number_chambre;
    document.getElementById('voyage-travail').textContent = v_travail ? 'Oui' : 'Non';

    // Vérification des dates
    if (date_debut && date_fin && date_debut > date_fin) {
        alert("La date d'arrivée doit être antérieure à la date de départ !");
    }

    // Vérification des âges des enfants
    document.querySelectorAll('.age-row input').forEach(input => {
        if (input.value < 0 || input.value > 17) {
            alert("Les enfants doivent avoir un âge entre 0 et 17 ans.");
        }
    });
});

// Effacer
document.getElementById('effacer').addEventListener("click", () => {
    
    document.getElementById('number-adulte').textContent = '';
    document.getElementById('number-enfant').textContent = '';
    document.getElementById('number-chambre').textContent = '';
    document.getElementById('voyage-travail').textContent = '';

    // Supprimer les lignes des âges des enfants
    document.querySelectorAll('.age-row').forEach(row => row.remove());
});
