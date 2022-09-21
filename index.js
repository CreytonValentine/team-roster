const inquirer = require('inquirer');
const fs = require('fs');
const generateHtml = require('./src/html-template.js');

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your team members name?'
        },
        {
            type: 'input',
            name: 'position',
            message: 'What is your team members position?'
        },
        {
            type: 'input',
            name: 'about',
            message: 'Give a description of your players attributes.'
        }
    ]);
};

promptUser();

