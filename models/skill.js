const { name } = require("ejs")

const skills = [
    {
        name: 'CSS',
        status: 'learned',
        level: 'confident',
        id: 380604,
        description: 'Learned the general concepts of the language, and feel confident using it. Currently learning how to style pages with bootstrap'

    },

    {
        name: 'HTML',
        status: 'learned',
        level: 'confident',
        id: 390094,
        description: 'Learned the general concepts of the language, and feel confident using it.'

    },

    {
        name: 'JavaScript',
        status: 'currently learning',
        level: 'getting there',
        id: 410542,
        description: 'Learned the general concepts of the language, and am now learning different ways to apply it. Started by creating a game with DOM Elements, and I am now starting to use node, express and vue'

    },

    {
        name: 'Python',
        status: 'not yet',
        level: 'zero',
        id: 424022,
        description: ''
    }

]

module.exports = {
    getOne,
    getAll,
    create,
    update,
    deleteOne
    
}

function getOne(id) {
    id = parseInt(id)
    return skills.find(name => name.id === id)
}

function getAll() {
    return skills
}

function create(skill) {
    skill.id = Date.now() % 1000000
    skills.push(skill)
}

function update(id, updatedSkill) {
    id = parseInt(id)
    const skill = skills.find(name => name.id === id)
    Object.assign(skill, updatedSkill)
}

function deleteOne(id) {
    id = parseInt(id)
    const idx = skills.findIndex(name => name.id === id)
    skills.splice(idx, 1)
}