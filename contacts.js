//Création de la Class contact
class contact {

	constructor(nom, prenom) {
		this.nom = nom;
		this.prenom = prenom;
	}

	decrire() {
		return `Nom : ${this.nom}, prénom : ${this.prenom}`;
	}
};

//Introduction des différentes variables utilisées dans le programme
let listeContact = [];
let choixUser = "";

//Ajout des deux contacts existants
listeContact.push( new contact("Lévisse", "Carole"));
listeContact.push( new contact("Nelsonne", "Mélodie"));

//Message de bienvenue
console.log(`Bienvenue dans le gestionnaire des contacts`);

//Boucle While servant de menu naviguant
while (choixUser !== "0"){

	console.log(
		`\nVeuillez choisir un numéro du menu suivant :

		1 : Lister les contacts
		2 : Ajouter un contact
		0 : Quitter`);
	choixUser = prompt("Saisissez votre numéro ci-dessous :");

	switch (choixUser) {
		case "1":
			console.log("\nVoici la liste de vos contacts :\n ")
			listeContact.forEach(contact => console.log(contact.decrire()));
			break;
		case "2":
			let nom = prompt("Saisissez le Nom du contact que vous souhaitez ajouter.");
			let prenom = prompt("Saisissez le Prénom du contact que souhaitez ajouter.");
			if (nom != "" && prenom != "") {
				listeContact.push( new contact(nom, prenom));
				console.log(`\nVous venez d'ajouter ${nom} ${prenom} à votre liste de contacts!`);
			}
			else console.log("Le contact que vous avez tenté de rentrer n'est pas valide");
			break;
		case "0":
			console.log("\nMerci d'avoir pris le temps d'utiliser notre gestionnaire de contact.\nAu revoir!")
			break;
		default:
		console.log("\nJe n'ai pas compris votre demande, veuillez entrer uniquement: 1 , 2 ou 0 pour Quitter.")
	};
};

//Extraction du programme