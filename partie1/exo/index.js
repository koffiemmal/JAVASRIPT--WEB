let Nom = [];
let ulElt = document.createElement("ul")
for (let i = 0; i < 3; i++) {
    let nom = prompt("entrer le nom de votre ami")
    Nom.push({ nom: nom })


}
document.body.appendChild(ulElt)
for (let a of Nom) {
    let liElt = document.createElement("li")
    liElt.textContent = a.nom
    ulElt.appendChild(liElt)
    console.log(liElt)

    liElt.addEventListener("click", (e) => {
        ulElt.removeChild(liElt)
    })
}