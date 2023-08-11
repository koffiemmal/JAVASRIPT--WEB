/* for (let a of Nom) {
    let liElt = document.createElement("li")
    liElt.textContent = a.nom
    ulElt.appendChild(liElt)
    console.log(liElt)
    
    liElt.addEventListener("click", (e) => {
        ulElt.removeChild(liElt)
    })
    console.log */
let Nom = [];
let ulElt = document.createElement("ul")
let table = document.createElement("table");
document.body.appendChild(ulElt)

for (let i = 0; i < 3; i++) {
    let nom = prompt("entrer le nom de votre ami")
    Nom.push({ nom: nom })

}

let tr = document.createElement("tr")
table.appendChild(tr)
document.body.appendChild(table)


for (let b of Nom) {
    let td = document.createElement("td")

    td.textContent = b.nom

    tr.appendChild(td)

    td.style.border = "1px solid black"
    td.addEventListener("click", (e) => {
        tr.removeChild(td)
    })
}

table.style.border = "1px solid black"
table.style.borderCollapse = "collapse"