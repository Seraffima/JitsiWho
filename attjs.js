import { classNames, StudentList } from './clases.js';

// ClassManager to manage multiple classes
class ClassManager {
    constructor() {
        this.classes = {};
    }

    async addClass(className) {
        const classModule = await import(`./clases.js`);
        this.classes[className] = classModule[className];
    }

    getClass(className) {
        return this.classes[className];
    }

    getStudents(className) {
        const classInstance = this.getClass(className);
        return classInstance ? classInstance.getStudents() : [];
    }
}

// Create student div
function createStudentDiv(firstName, secondName, lastName, secondLastName, imageUrl, isPresent) {
    const studentDiv = document.createElement('div');
    studentDiv.className = 'student';

    // Add student image
    const img = document.createElement('img');
    img.src = imageUrl;
    img.alt = `${firstName} ${secondName} ${lastName} ${secondLastName}`.trim();
    studentDiv.appendChild(img);

    // Add student name
    const nameDiv = document.createElement('div');
    nameDiv.className = 'name';
    nameDiv.textContent = `${lastName} ${secondLastName}, ${firstName} ${secondName}`.trim();
    studentDiv.appendChild(nameDiv);

    // Add attendance checkboxes
    const labels = ['I', 'J', 'R'];
    labels.forEach(label => {
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = label;
        checkbox.name = label;
        if (label === 'I' && !isPresent) {
            checkbox.checked = true;
        }

        const checkboxLabel = document.createElement('label');
        checkboxLabel.htmlFor = label;
        checkboxLabel.textContent = label;

        studentDiv.appendChild(checkbox);
        studentDiv.appendChild(checkboxLabel);
    });

    return studentDiv;
}

document.addEventListener('DOMContentLoaded', async () => {
    const grid = document.getElementById('grid');
    const presentStudents = new Set(JSON.parse(localStorage.getItem('presentStudents')));
    const className = localStorage.getItem('className');
    const classManager = new ClassManager();

    // Dynamically add classes to the manager
    for (const name of classNames) {
        await classManager.addClass(name);
    }

    const students = classManager.getStudents(className);

    students.forEach(student => {
        const fullName = `${student.firstName} ${student.secondName} ${student.lastName} ${student.secondLastName}`.trim();
        const isPresent = presentStudents.has(fullName)
            || presentStudents.has(`${student.firstName} ${student.lastName}`.trim())
            || presentStudents.has(`${student.firstName} ${student.lastName} ${student.secondLastName}`.trim())
            || presentStudents.has(`${student.firstName} ${student.secondName} ${student.lastName}`.trim());

        const studentDiv = createStudentDiv(student.firstName, student.secondName, student.lastName, student.secondLastName, student.image, isPresent);
        grid.appendChild(studentDiv);
    });
});