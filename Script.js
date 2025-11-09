// ===== FONCTION POUR MODIFIER LE NOM =====

/**
 * Cette fonction permet de modifier le champ "Nom" du formulaire
 * Elle demande à l'utilisateur d'entrer un nouveau nom via une boîte de dialogue
 */
function modifierNom() {
    // Récupérer l'élément input du nom par son ID
    const champNom = document.getElementById('nom');
    
    // Afficher une boîte de dialogue pour entrer le nouveau nom
    // La valeur actuelle du champ est affichée par défaut
    const nouveauNom = prompt('Entrez le nouveau nom :', champNom.value);
    
    // Vérifier si l'utilisateur a entré quelque chose
    // (il peut annuler en cliquant sur "Annuler")
    if (nouveauNom !== null && nouveauNom.trim() !== '') {
        // Mettre à jour la valeur du champ avec le nouveau nom
        champNom.value = nouveauNom;
        
        // Afficher un message de confirmation
        alert('Le nom a été modifié avec succès !');
        
        // Mettre à jour l'affichage automatiquement
        afficherToutesLesValeurs();
    } else {
        // Si rien n'a été entré, afficher un message d'erreur
        alert('Aucune modification effectuée. Le nom ne peut pas être vide.');
    }
}

// ===== FONCTION POUR MODIFIER LE PRÉNOM =====

/**
 * Cette fonction permet de modifier le champ "Prénom" du formulaire
 * Fonctionne de la même manière que modifierNom()
 */
function modifierPrenom() {
    // Récupérer l'élément input du prénom
    const champPrenom = document.getElementById('prenom');
    
    // Demander le nouveau prénom via une boîte de dialogue
    const nouveauPrenom = prompt('Entrez le nouveau prénom :', champPrenom.value);
    
    // Vérifier que l'utilisateur a entré une valeur
    if (nouveauPrenom !== null && nouveauPrenom.trim() !== '') {
        // Mettre à jour le champ
        champPrenom.value = nouveauPrenom;
        
        // Message de confirmation
        alert('Le prénom a été modifié avec succès !');
        
        // Mettre à jour l'affichage
        afficherToutesLesValeurs();
    } else {
        alert('Aucune modification effectuée. Le prénom ne peut pas être vide.');
    }
}

// ===== FONCTION POUR MODIFIER L'EMAIL =====

/**
 * Cette fonction permet de modifier le champ "Email" du formulaire
 * Elle inclut une validation basique de l'email
 */
function modifierEmail() {
    // Récupérer l'élément input de l'email
    const champEmail = document.getElementById('email');
    
    // Demander le nouvel email
    const nouvelEmail = prompt('Entrez le nouvel email :', champEmail.value);
    
    // Vérifier que l'utilisateur a entré quelque chose
    if (nouvelEmail !== null && nouvelEmail.trim() !== '') {
        // Vérifier si l'email contient le symbole @
        // C'est une validation simple pour cet exemple
        if (nouvelEmail.includes('@')) {
            // Mettre à jour le champ
            champEmail.value = nouvelEmail;
            
            // Message de confirmation
            alert('L\'email a été modifié avec succès !');
            
            // Mettre à jour l'affichage
            afficherToutesLesValeurs();
        } else {
            // Si l'email n'est pas valide
            alert('Erreur : l\'email doit contenir le symbole @');
        }
    } else {
        alert('Aucune modification effectuée. L\'email ne peut pas être vide.');
    }
}

// ===== FONCTION POUR AFFICHER TOUTES LES VALEURS =====

/**
 * Cette fonction récupère toutes les valeurs du formulaire
 * et les affiche dans la section "Valeurs Actuelles"
 */
function afficherToutesLesValeurs() {
    // Récupérer les valeurs de tous les champs du formulaire
    const nom = document.getElementById('nom').value;
    const prenom = document.getElementById('prenom').value;
    const email = document.getElementById('email').value;
    
    // Récupérer les éléments où afficher les valeurs
    const affichageNom = document.getElementById('affichageNom');
    const affichagePrenom = document.getElementById('affichagePrenom');
    const affichageEmail = document.getElementById('affichageEmail');
    
    // Mettre à jour le contenu de chaque élément d'affichage
    // Si le champ est vide, afficher "Non renseigné"
    affichageNom.textContent = nom || 'Non renseigné';
    affichagePrenom.textContent = prenom || 'Non renseigné';
    affichageEmail.textContent = email || 'Non renseigné';
    
    // Ajouter une animation visuelle pour indiquer la mise à jour
    // On ajoute une classe CSS temporaire
    const displayBox = document.getElementById('affichageValeurs');
    displayBox.style.backgroundColor = '#d4edda';
    
    // Retirer l'animation après 1 seconde
    setTimeout(() => {
        displayBox.style.backgroundColor = 'white';
    }, 1000);
}

// ===== CODE EXÉCUTÉ AU CHARGEMENT DE LA PAGE =====

/**
 * Cette fonction s'exécute automatiquement quand la page est chargée
 * Elle permet d'initialiser certains comportements
 */
window.onload = function() {
    // Message de bienvenue dans la console du navigateur
    console.log('Formulaire interactif chargé avec succès !');
    
    // Ajouter un écouteur d'événement sur tous les champs du formulaire
    // Quand on tape dans un champ, l'affichage se met à jour automatiquement
    const tousLesChamps = document.querySelectorAll('input');
    
    // Pour chaque champ trouvé
    tousLesChamps.forEach(function(champ) {
        // Ajouter un écouteur qui détecte quand on tape (événement 'input')
        champ.addEventListener('input', function() {
            // Mettre à jour l'affichage en temps réel
            afficherToutesLesValeurs();
        });
    });
    
    console.log('Mise à jour automatique activée pour tous les champs !');
};