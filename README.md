# Register - Learn to Sing Program Sign-Up

## About

This project is a web application designed to facilitate sign-ups for the "Learn to Sing" program offered by the Mount Baker Toppers. It aims to provide an easy and accessible way for interested participants to register their details, including name, email address, phone number, and how they heard about the program.

## Technologies Used

- **React**: A JavaScript library for building user interfaces. This project utilizes React to create a dynamic and responsive web application.
- **EmailJS**: Integrated for handling email notifications. Upon form submission, EmailJS sends an email to the program administrator with the participant's information and a confirmation email to the participant.
- **Google Sheets**: Used as a simple database to store participant information. A Google Apps Script is deployed as a web app to facilitate communication between the React app and the Google Sheet.
- **GitHub Pages**: Hosts the application, making it accessible on the web.

## Features

- **Participant Registration Form**: Users can fill out their information and submit it to express their interest in the program.
- **Email Notifications**: Automated emails are sent to both the administrator and the participant upon form submission.
- **Data Storage**: Submitted information is stored in a Google Sheet for easy access and management by the program administrator.

## Deployment

The application is deployed on GitHub Pages and can be accessed [here](https://learntosing.github.io/register/).
