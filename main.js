// Function to create an introduction
"use strict";
function MainIntroduction() {
    console.log("My name is Christian Rodriguez")
    console.log("I'm an Engineer")
    console.log('I create things on the computer')
    console.log('')
}
// Function to describe my work experience
function myExperience() {
    const mainProgramLangs = ['javascript', 'php', 'python', 'ts', 'java']
    const dbms = ['mysql', 'mongodb', 'postrgresql']
    var recentWorks = {
        work_1: {
            "ProjectName": "Advertising and appointment scheduler",
            "CompanyName": "Toltekianni Tattoos",
            "ProjectDescription": "To create and design a advertising site and an appointment scheduler for Toltekianni Tattoos Inc.",
            "TechnologiesUsed": "js,php,html,css,jquery,bootstrap",
            "projectTotalTime": "3 Months",
        },
        work_2: {
            "ProjectName": "In-house automotive spare parts catalogue",
            "CompanyName": "Refacciones Victorino",
            "ProjectDescription": "Develop an interactive catalog designed to assist users in efficiently searching and locating parts within a local network database",
            "TechnologiesUsed": "js,php,html,css,jquery,bootstrap",
            "projectTotalTime": "1 Year 1 Month",
        },
    };
}
// Function to get in touch with me
function contactMe() {
    window.open('mailto:l.aloeduardo@live.com.mx')
}