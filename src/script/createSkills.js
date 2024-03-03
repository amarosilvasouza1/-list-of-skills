
const captureSkilss = () => {
    const skills = document.querySelector(".conteiner_box-1")
    skills.addEventListener("click", () => {
        const skill = event.target
        if (skill.id == "not") {
         console.log(skill.id)
        } else {
            createSkill(skill.id, skill)
        }
    }) 
}

const createSkill = (skill, skilLi) => {
    const boxSkill = document.querySelector(".conteiner_box-2")
    const cardSkill = document.createElement("li")
    cardSkill.innerText = skill
    cardSkill.classList.add("card_skil_new-box")
    boxSkill.appendChild(cardSkill)

    deletSkilBox(skilLi)
}

const deletSkilBox = (skill) => {
skill.classList.add("off")
}

const resetPag = () => {
    const resetButton = document.querySelector("button")
    resetButton.addEventListener("click", () => {
        window.location.reload()
    })
}

resetPag()
captureSkilss()

