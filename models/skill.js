const { name } = require("ejs")

const skills = [
    {
        name: 'CSS',
        learned: 'yes',
        id: 0,

    },

    {
        name: 'HTML',
        learned: 'yes',
        id: 1,

    },

    {
        name: 'JavaScript',
        learned: 'currently learning',
        id: 2,

    },

    {
        name: 'Python',
        learned: 'no',
        id: 3,

    }

]

module.exports = {
    getOne,
    getAll
}

function getOne(id) {
    id = parseInt(id)
    return skills.find(name => name.id === id)
}

function getAll() {
    return skills
}