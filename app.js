var nomutilisateur=prompt ("entrer votre nom");
var choixutilisateur = prompt ("Choisissez entre pierre,feuille et ciseaux");
var choixOrdi = Math.random ();

	if (Math.random <= 0.30) {
	    choixOrdi = alert ("l'ordinateur choisit la pierre");
	}
	else if (Math.random >0.31 <0.60) {
	    ChoixOrdi = alert ("l'ordinateur choisit la feuille");
	}
	else {
	     ChoixOrdi =alert ("l'ordinateur choisit les ciseaux");
	}

var comparer =function(choix1,choix2) {

	    if (choix1 === choix2) {
	        alert ("Vous êtes à égalité !");
	    }

	   	else if (choix1 === "pierre") {
	       
	        if (choix2 ==="ciseaux"){
	           alert( "la pierre écrase les ciseaux !, vous avez remporté la partie !");
	       	}

	       else {
	           alert( "la feuille enveloppe la pierre, vous avez perdu !");
	 		}
	   	}
}