# Dev Stack

Dev Stack is a modern React application that helps developers explore different technologies and create their personalized development stack. Users can browse available technologies, add them to their stack, remove selected technologies, and explore different sections of the website through a responsive interface.

## Live Website

Add your deployed website link here.

## Technologies Used

- React.js
- JavaScript
- Vite
- React Toastify
- React Icons
- CSS3

## Features

- Browse different development technologies with detailed information
- View technology categories, difficulty levels, and ratings
- Add technologies to a personalized development stack
- Remove individual technologies from the stack
- Clear the entire selected stack
- Responsive design for desktop, tablet, and mobile devices
- Sticky responsive navigation bar
- Smooth navigation between website sections
- Interactive toast notifications for user actions
- Component-based React architecture
- JSON-based technology data management

## Project Structure

```
src
│
├── components
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── TechnologyCard.jsx
│   ├── TechnologyList.jsx
│   ├── StackSidebar.jsx
│   ├── InfoSection.jsx
│   └── Footer.jsx
│
├── data
│   └── technologies.json
│
├── App.jsx
├── main.jsx
└── index.css
```

# React Concepts Questions & Answers

## 1. What is JSX, and why is it used in React?

JSX (JavaScript XML) is a syntax extension for JavaScript that allows developers to write HTML-like structures inside JavaScript files.

Although JSX looks similar to HTML, it is not actual HTML. React converts JSX into regular JavaScript code before the browser executes it.

Example:

```jsx
const element = <h1>Hello React</h1>;
```

React uses JSX because it makes UI development easier and more readable.

Benefits of JSX:

- Makes React components easier to write and understand
- Improves code readability
- Allows developers to describe UI structure directly inside JavaScript
- Keeps UI logic and structure together inside components

---

# 2. What is the difference between props and state?

Props and state are both used to manage data in React, but they serve different purposes.

## Props

Props (properties) are used to pass data from a parent component to a child component.

Characteristics:

- Data flows from parent component to child component
- Props are read-only
- Child components cannot directly modify props
- Used for sharing data and functions between components

Example:

```jsx
<TechnologyCard technology={technology} />
```

Here, the parent component passes technology data to the child `TechnologyCard` component using props.

---

## State

State is data that is managed inside a component.

Characteristics:

- State belongs to the component itself
- State can change over time
- Updating state causes React to re-render the UI
- Used for dynamic data management

Example:

```jsx
const [stack, setStack] = useState([]);
```

In this project:

- Props are used to pass technology information and functions between components.
- State is used to manage the selected technology stack and loading status.

---

# 3. What does the useState hook do, and where did you use it in this project?

The `useState` hook allows functional components to create and manage state.

It provides:

- A state variable
- A function to update that state

Syntax:

```jsx
const [state, setState] = useState(initialValue);
```

In this project, `useState` is used inside `App.jsx`.

## Selected Technology Stack

```jsx
const [stack, setStack] = useState([]);
```

This stores the technologies selected by the user.

When users add or remove technologies, this state updates and the UI changes automatically.

## Loading State

```jsx
const [loading, setLoading] = useState(true);
```

This controls the loading screen before displaying the main content.

---

# 4. What does the useEffect hook do, and why did you need it to load the JSON data?

The `useEffect` hook is used to perform side effects in React components.

Common examples of side effects:

- Fetching data
- Running timers
- Updating external resources
- Working with APIs

In this project, `useEffect` is used to control the loading process before showing the technology cards.

Example:

```jsx
useEffect(() => {
  const timer = setTimeout(() => {
    setLoading(false);
  }, 800);

  return () => clearTimeout(timer);
}, []);
```

How it works:

1. The component starts with the loading state enabled.
2. `useEffect` runs when the component loads.
3. A timer runs for a short period.
4. The loading state changes to false.
5. React displays the technology content.

The technology data itself is imported from the JSON file:

```javascript
import technologies from "../data/technologies.json";
```

and rendered using React components.

---

# 5. Why does every item in a .map() list need a unique key prop?

React requires every item rendered inside a `.map()` list to have a unique `key` prop.

The key helps React identify each item and efficiently update the UI when data changes.

Example:

```jsx
{technologies.map((technology) => (
  <TechnologyCard
    key={technology.id}
    technology={technology}
  />
))}
```

Here:

```jsx
key={technology.id}
```

is used because every technology has a unique ID.

A unique key helps React:

- Track individual items
- Update only required elements
- Avoid unnecessary rendering
- Improve performance

---

# 6. What is conditional rendering? Show one place you used it.

Conditional rendering means displaying different UI elements based on a condition.

In this project, conditional rendering is used in the `StackSidebar` component.

When no technology is selected:

```
No technology selected
```

is displayed.

When technologies are added, the selected technology list is shown.

Example:

```jsx
{stack.length === 0 ? (
  <p>No technology selected</p>
) : (
  stack.map((item) => (
    <div key={item.id}>
      {item.name}
    </div>
  ))
)}
```

Explanation:

- If the stack is empty, React displays the empty message.
- Otherwise, React displays the selected technologies.

---

# 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

React uses props for communication between components.

## Parent to Child Communication

A parent component passes data or functions to a child component using props.

Example:

```jsx
<TechnologyList onAdd={addToStack} />
```

Here, `App.jsx` passes the `addToStack` function to `TechnologyList`.

---

## Child to Parent Communication

A child component cannot directly modify the parent's state.

Instead, the parent passes a function through props, and the child calls that function when it needs to send data back.

Example:

```jsx
onAdd(technology);
```

The child sends the technology data back by calling the function, and the parent updates its state.

Communication flow:

```
Parent Component
        |
        | passes data/function through props
        ↓
Child Component
        |
        | calls function with data
        ↓
Parent updates state
        |
        ↓
UI re-renders
```

This maintains React's one-way data flow architecture.

---

# React Concepts Covered in This Project

| Concept | Usage |
|---|---|
| JSX | Building React UI components |
| Components | Creating reusable UI sections |
| Props | Passing data and functions between components |
| State | Managing selected technologies and loading status |
| useState | Creating and updating component state |
| useEffect | Managing loading effects |
| map() | Rendering technology lists |
| key prop | Identifying list items efficiently |
| Conditional Rendering | Showing different UI states |
| Parent-Child Communication | Sharing data between components |

---

# Installation and Running Locally

Clone the repository:

```bash
git clone https://github.com/15tashdid15/B14-A05-DevStack.git
```

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```