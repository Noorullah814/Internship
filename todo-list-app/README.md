# React Todo List App

A simple and reusable Todo List application built using React. This project demonstrates React component architecture, props passing, state management, and CSS styling.

## Project Objective

The objective of this project is to understand how to design reusable components in React and implement a simple task management application.

## Technologies Used

- React
- Vite
- JavaScript
- CSS
- LocalStorage

## Features

- Add new tasks
- Delete tasks
- Edit existing tasks
- Mark tasks as completed
- Data persistence using localStorage
- Clean and simple user interface

## Component Architecture

The application follows a component-based architecture.

App Component  
│  
├── TodoList Component  
│       │  
│       └── TodoItem Component  

### App.jsx
- Manages application state
- Handles adding, deleting, updating todos
- Passes data to child components

### TodoList.jsx
- Receives todos as props
- Iterates through the list using map()

### TodoItem.jsx
- Displays individual todo item
- Handles edit, delete, and completion functionality

## Noor Ullah - Frontend developer

