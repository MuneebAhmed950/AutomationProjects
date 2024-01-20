/// <reference types="cypress" />

import 'cypress-file-upload';

it('displays two todo items by default', () => {
    

// Importing necessary Cypress commands

// Visit the website
cy.visit('https://demoqa.com/');

// Log the title
cy.title().then((title) => {
  console.log(title);
});

// Scroll down as element is not clickable due to ads
cy.scrollTo(0, 400);

// Click on the card
cy.get('div.card:nth-child(2)').click();

// Click on "Practice Form"
cy.contains('Practice Form').click();

// Fill out the form
cy.get('#firstName').type('Muneeb');
cy.get('#lastName').type('Ahmed');
cy.get('#userEmail').type('muneeb950@gmail.com');
cy.get('label[for="gender-radio-1"]').click();
cy.get('#userNumber').type('03422809056');
cy.window().scrollTo(0, 400);

// Enter date of birth
cy.get('#dateOfBirthInput').type('{backspace}{backspace}{backspace}{backspace}2023{enter}');

// Enter subjects
cy.get('#subjectsInput').type('Maths')

// Select hobbies
cy.get('#hobbies-checkbox-1').check({ force: true });

// Upload picture
//cy.fixture('Image_20230104_173946_123.jpeg').then(fileContent => {
  //cy.get('#uploadPicture').upload({ fileContent, fileName: 'Image_20230104_173946_123.jpeg', mimeType: 'image/jpeg' });
//});

//cy.get('#uploadPicture').upload('/home/syedmuneeb/Downloads/Image_20230104_173946_123.jpeg');


// Enter current address
cy.get('#currentAddress').type('Test Address');

// Submit the form
cy.get('#submit').click({force: true});

// Wait for a few seconds
cy.wait(5000);

// Close the browser
cy.window().then(win => {
  win.close();
});


})