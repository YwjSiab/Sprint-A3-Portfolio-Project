// Sprint A3 Part 1: Ensure DOM is fully loaded before executing scripts
window.displayProjects = () => {
  try {
      console.log('Loading projects...');

      const projectContainer = document.getElementById('projectContainer');
      if (!projectContainer) {
          console.warn("No 'projectContainer' found on this page. Skipping displayProjects().");
          return;
      }

      projectContainer.textContent = 'Loading projects...';
      // Fetch and display projects here (assuming `projects` is defined globally)

      console.log('Projects displayed successfully.');
  } catch (error) {
      console.error('Error displaying projects:', error);
  }
};

document.addEventListener('DOMContentLoaded', () => {
  try {
      console.log('🚀 Portfolio Project Loaded');

      // ✅ Validate the existence of the project container before displaying projects
      const projectContainer = document.getElementById('projectContainer');
      if (projectContainer) {
          window.displayProjects();
      } else {
          console.warn("No 'projectContainer' found on this page. Skipping displayProjects().");
          return; // Ensure function exits if projectContainer is not found
      }

      // ✅ Validate the existence of the contact form before adding event listener
      const contactForm = document.getElementById('contactForm');
      if (contactForm) {
          contactForm.addEventListener('submit', (event) => {
              try {
                  event.preventDefault();
                  const name = document.getElementById('name')?.value.trim();
                  const email = document.getElementById('email')?.value.trim();
                  const message = document.getElementById('message')?.value.trim();

                  if (!name || !email || !message) {
                      console.error('Error: All fields are required');
                      document.getElementById('formError').innerText = 'Please fill out all fields.';
                      return;
                  }

                  console.log('Form submitted successfully:', { name, email, message });
                  document.getElementById('formSuccess').innerText = 'Your message has been sent!';
                  contactForm.reset();
              } catch (error) {
                  console.error('Error handling contact form submission:', error);
              }
          });
      } else {
          console.warn("No 'contactForm' found on this page. Skipping form event listener.");
      }

  } catch (error) {
      console.error('Error during page initialization:', error);
  }

// Part 2: Variable Declarations and Data Types
const userName = "Ywj Siab Vaj"; // String
let userAge = 22; // Number
const isStudent = true; // Boolean

console.log("Data Types:");
console.log(typeof userName); // Expected output: string
console.log(typeof userAge); // Expected output: number
console.log(typeof isStudent); // Expected output: boolean

// Part 3: Operators
const num1 = 15;
const num2 = 5;

// Arithmetic Operations
const sum = num1 + num2;
const difference = num1 - num2;
const product = num1 * num2;
const quotient = num1 / num2;

// Logical Operation Example
const isAdult = userAge >= 18 && !isStudent;

// Conditional (ternary) operator
const category = userAge >= 18 ? "Adult" : "Minor";

console.log("Arithmetic Operations:");
console.log("Sum:", sum);
console.log("Difference:", difference);
console.log("Product:", product);
console.log("Quotient:", quotient);

console.log("Logical & Conditional Operations:");
console.log("Is Adult:", isAdult);
console.log("Category:", category);

// Part 4: Type Conversion

// Implicit type conversion
const implicitConversion = "The result is " + num1;
console.log("Implicit Conversion:", implicitConversion);

// Explicit type conversion
const explicitNumber = Number("42");
const explicitString = String(userAge);
const explicitBoolean = Boolean(1);

console.log("Explicit Conversions:");
console.log("Number:", explicitNumber);
console.log("String:", explicitString);
console.log("Boolean:", explicitBoolean);

// Sprint A2

// Part 2: Integrate Arrays and Objects
const projects = [
  {
    id: 1,
    title: "Tri and Succeed Sports",
    category: "Web Development",
    description: "Worked on website layout and text styling. Adjusted fonts, images, and positioning.",
    technologiesUsed: ["HTML", "CSS"],
  },
  {
    id: 2,
    title: "Trusted Friends DayCare",
    category: "Responsive Design",
    description: "Styled the website for different screen sizes (responsive design).",
    technologiesUsed: ["HTML", "CSS", "Responsive Design"],
  },
  {
    id: 3,
    title: "Slate & Pencil Tutoring",
    category: "UI/UX Design",
    description: "Utilized grid layouts for better positioning and website organization.",
    technologiesUsed: ["HTML", "CSS", "Grid Layout"],
  },
];
  
  // Log the projects array to console
  console.log("Projects:");
  projects.forEach((project) => {
    console.log(`ID: ${project.id}`);
    console.log(`Title: ${project.title}`);
    console.log(`Category: ${project.category}`);
    console.log(`Description: ${project.description}`);
    console.log(`Technologies Used: ${project.technologiesUsed.join(", ")}`);
    console.log("--------------------");
  });
  
  // Part 3: Testing and Validation
  console.log("JavaScript functionality is running as expected. Check the console for output.");

// Sprint A3 Part 2: Dynamic Project Display
window.displayProjects = () => {
  try {
      const projectContainer = document.getElementById('projectContainer');
      if (!projectContainer) {
          console.error('Error: Project container not found');
          throw new Error('Project container not found');
      }

      projectContainer.innerHTML = ''; // Clear existing projects
      projects.forEach(project => {
          const projectCard = document.createElement('div');
          projectCard.className = 'project-card';
          projectCard.innerHTML = `
              <h3>${project.title}</h3>
              <p><strong>Category:</strong> ${project.category}</p>
              <p>${project.description}</p>
              <p><strong>Technologies:</strong> ${project.technologiesUsed.join(', ')}</p>
              <button onclick="loadProjectDetails(${project.id})">View Details</button>
          `;
          projectContainer.appendChild(projectCard);
      });
  } catch (error) {
      console.error('Error displaying projects:', error);
      alert('An error occurred while displaying projects.');
  }
};
// Part 3: Interactive Features - Filtering Projects
window.filterProjects = (category) => {
  try {
      console.log(`Filtering projects by category: ${category}`);
      const filteredProjects = projects.filter(project => project.category === category || category === 'All');
      displayFilteredProjects(filteredProjects);
  } catch (error) {
      console.error('Error filtering projects:', error);
  }
};

// ✅ Function to load project details dynamically
// This function retrieves and displays the details of a selected project
window.loadProjectDetails = (projectId) => {
  try {
      console.log(`Attempting to load details for project ID: ${projectId}`);

      const project = projects.find(p => p.id === projectId);
      if (!project) {
          console.error(`Error: Project with ID ${projectId} not found`);
          const detailsContainer = document.getElementById('projectDetails');
          if (detailsContainer) {
            detailsContainer.textContent = 'Project not found. Please select a valid project.';
            detailsContainer.classList.add('error-message');
          }
          return;
      }

      const detailsContainer = document.getElementById('projectDetails');
      if (!detailsContainer) {
          console.error('Error: Project details container not found');
          return;
      }

      console.log(`Found project: ${project.title}`);

      // Clear previous project details before updating
      while (detailsContainer.firstChild) {
          detailsContainer.removeChild(detailsContainer.firstChild);
      }

      // Dynamically create and append elements for better security and structure
      const titleElement = document.createElement('h2');
      titleElement.innerText = project.title;
      detailsContainer.appendChild(titleElement);

      const categoryElement = document.createElement('p');
      categoryElement.innerText = `Category: ${project.category}`;
      detailsContainer.appendChild(categoryElement);

      const descriptionElement = document.createElement('p');
      descriptionElement.innerText = project.description;
      detailsContainer.appendChild(descriptionElement);

      const techElement = document.createElement('p');
      techElement.innerText = `Technologies Used: ${project.technologiesUsed.join(', ')}`;
      detailsContainer.appendChild(techElement);

      console.log(`Project details updated for: ${project.title}`);
  } catch (error) {
      console.error('Error loading project details:', error);
      const detailsContainer = document.getElementById('projectDetails');
      if (detailsContainer) {
          detailsContainer.innerText = 'An error occurred while loading project details. Please try again.';
          detailsContainer.classList.add('error-message');
      }
  }
};

// ✅ Function to display filtered projects dynamically
const displayFilteredProjects = (filteredProjects) => {
  try {
      const projectContainer = document.getElementById('projectContainer');
      if (!projectContainer) {
          console.error('Error: Project container not found');
          throw new Error('Project container not found');
      }

      projectContainer.textContent = '';
      filteredProjects.forEach(project => {
          const projectCard = document.createElement('div');
          projectCard.className = 'project-card';

          const titleElement = document.createElement('h3');
          titleElement.textContent = project.title;
          projectCard.appendChild(titleElement);

          const categoryElement = document.createElement('p');
          categoryElement.textContent = `Category: ${project.category}`;
          projectCard.appendChild(categoryElement);

          const descriptionElement = document.createElement('p');
          descriptionElement.textContent = project.description;
          projectCard.appendChild(descriptionElement);

          const techElement = document.createElement('p');
          techElement.textContent = `Technologies: ${project.technologiesUsed.join(', ')}`;
          projectCard.appendChild(techElement);

          const detailsButton = document.createElement('button');
          detailsButton.textContent = 'View Details';
          detailsButton.addEventListener('click', () => window.loadProjectDetails(project.id));
          projectCard.appendChild(detailsButton);

          projectContainer.appendChild(projectCard);
      });
  } catch (error) {
      console.error('Error displaying filtered projects:', error);
  }
};

// Part 5: Contact Form Validation
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
        try {
            event.preventDefault();
            const name = document.getElementById('name')?.value.trim();
            const email = document.getElementById('email')?.value.trim();
            const message = document.getElementById('message')?.value.trim();

            if (!name || !email || !message) {
                console.error('Error: All fields are required');
                document.getElementById('formError').innerText = 'Please fill out all fields.';
                return;
            }

            console.log('Form submitted successfully:', { name, email, message });
            document.getElementById('formSuccess').innerText = 'Your message has been sent!';
            contactForm.reset();
        } catch (error) {
            console.error('Error handling contact form submission:', error);
        }
    });
} else {
    console.warn("No 'contactForm' found on this page. Skipping form event listener.");
}

      // Initialize project display on page load
      window.displayProjects();
});