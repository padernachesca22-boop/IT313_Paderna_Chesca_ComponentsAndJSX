# IT313_Paderna_Chesca_ComponentsAndJSX

## Student Roster Card Renderer

This project is a React Native Expo application for displaying a list of IT313 students using reusable components and JSX.

## Problem

The task is to create a student roster screen where each student is displayed in a reusable card. Each card shows the student's name, course, and units enrolled. Students with a full load also display a "Full Load" label.

## Component Structure

### StudentCard

The `StudentCard` component is a reusable functional component that receives the student's name, course, units, and full-load status through props. The props are destructured in the function parameter.

### StudentRoster

The `StudentRoster` component contains the students array and uses `.map()` to render one `StudentCard` for each student. Each card uses the student's ID as a stable key.

The roster also displays the total number of students using `students.length`.

## React and JSX Concepts Used

- Functional components
- Props and destructuring
- JSX expressions
- Conditional rendering using `&&`
- `.map()` for rendering lists
- Stable `key` prop using the student ID
- React Native `useState` for reversing the roster

## How to Run

Install the project dependencies:

```bash
npm install