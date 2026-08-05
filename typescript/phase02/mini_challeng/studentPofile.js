"use strict";
// 2. Instantiate the profile object using the type contract
const student = {
    name: "Hong",
    age: 22,
    university: "Royal University of Phnom Penh",
    major: "Computer Science",
    gpa: 3.85,
    isGraduated: false,
    skills: {
        backend: ["Node.js", "NestJS"],
        databases: ["PostgreSQL", "MongoDB"],
    },
};
// 3. Print everything in a clean, human-readable format
function printStudentProfile(profile) {
    console.log(`===== Student Profile =====`);
    console.log(`Name: ${profile.name}`);
    console.log(`Age: ${profile.age}`);
    console.log(`University: ${profile.university}`);
    console.log(`Major: ${profile.major}`);
    console.log(`GPA: ${profile.gpa.toFixed(2)}`);
    console.log(`Graduated: ${profile.isGraduated}`);
    console.log(`\nBackend Skills:`);
    profile.skills.backend.forEach((tech) => console.log(`- ${tech}`));
    console.log(`\nDatabases:`);
    profile.skills.databases.forEach((db) => console.log(`- ${db}`));
}
// Run the print execution function
printStudentProfile(student);
