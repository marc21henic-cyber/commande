const nomClient = "Awa";
const nomProduit = "Ordinateur";
const prixunitaire = 250000;
const quantite = 2;
const fraislivraison = 50000;
const TVA = 18;

const montatntproduits = prixunitaire*quantite
const montantTVA = montatntproduits*TVA /100
const montantTTC = montatntproduits+montantTVA
const montantfinal =  montantTTC+fraislivraison
const prixmoyenTTC = montantTTC/quantite