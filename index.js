const inquirer = require('inquirer');
const { Circle, Triangle, Square } = require('./lib/shapes');
const { logoFile } = require("./lib/shapes");
const fs = require('fs/promises');
const { generateLogo } = require("./generator");

const handleResponse = (response) => {
    let logoFile = generateLogo(response);
    fs.writeFile("logo.svg", logoFile, "utf8")
        .then(() => console.log("Generated logo.svg!"))
    // .catch(err => console.log(`Error: ${err}`))
}


inquirer
    .prompt([
        {
            type: 'input',
            message: 'Text:',
            name: 'Text',
        },
        {
            type: 'input',
            message: 'Text Color:',
            name: 'TextColor',
        },
        {
            type: 'list',
            choices: ["Circle", new inquirer.Separator(), "Triangle", new inquirer.Separator(), "Square"],
            message: 'Shape:',
            name: 'Shape',
        },
        {
            type: 'input',
            message: 'Logo Color:',
            name: 'LogoColor',
        },

    ])
    .then(handleResponse)