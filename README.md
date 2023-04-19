# To-do list application in React

## Part 1: UI and component structure

- Create a dummy project named “Todo-react-app” in react using any of the above methods - CRA or webpack from scratch.
- Make sure you use the components directory for creating React components as this is a single-page application.
- Make sure you create components of all types - class component, stateless component, the functional component with hooks.
- Import them in App.js file and keep the styling in App.css file

## 🚀 Live Demonstraion

[Todo-UI](https://todo-ui-part.netlify.app/)

### Class Component

- A class component is a more featured way to define a React component. It also acts like a function that receives props, but that function also considers a private internal state as additional input that controls the returned JSX.
- class component will be created using the class keyword, and it extends the React.

### Function Component

- Functional components are just javascript functions, which contains some logic to perform certain actions. These components accept the data as props and return the React element which is nothing HTML content. With introduction to the React 16, writing functional components is the standard way of creating components in modern react applications.

### Stateful and Stateless Component

| Stateful                                                                                                                                                                                                                                                                                                                                               | Stateless                                                                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| A stateful component is always a class component. It is created by extending the React.Component class. A stateful component is dependent on it’s state object and can change it’s own state. The component re-renders based on changes to it’s state, and may pass down properties of it’s state to child components as properties on a props object. | A stateless component is usually associated with how a concept is presented to the user. It is similar to a function in that, it takes an input (props) and returns the output (react element). |
| ` When would you use a stateful component?`                                                                                                                                                                                                                                                                                                            | `When would you use a stateless component??`                                                                                                                                                    |
|  |
| When building element that accepts user input                                                                                                                                                                                                                                                                                                          | When you just need to present the props                                                                                                                                                         |
| ..or element that is interactive on page                                                                                                                                                                                                                                                                                                               | When you don’t need a state, or any internal variables                                                                                                                                          |
| When dependent on state for rendering, such as, fetching data before rendering                                                                                                                                                                                                                                                                         | When creating element does not need to be interactive                                                                                                                                           |
| When dependent on any data that cannot be passed down as props                                                                                                                                                                                                                                                                                         | When you want reusable code                                                                                                                                                                     |

### React Pros and Cons

> `Pros`
>
> 1. Component based architecture
> 2. High Performance
> 3. Redux
> 4. Easy to Learn
> 5. Mobile App Development
>
> `Cons`
>
> 1. High Pace of Development
> 2. Flexibility and Lack of Conventions
> 3. Not a full-featured framework
> 4. JSX
> 5. SEO Handling
