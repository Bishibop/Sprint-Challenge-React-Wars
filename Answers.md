# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

React JS is a front-end web framework for building complex, dynamic, fast UIs. The problem it solves is managing a lot of state and keeping the UI up-to-date in regards to that state. It does this by breaking the UI into composable pieces called Components that each manage their own state. 

1. What does it mean to think in react?

Thinking in React is a way of approaching the construction of complex UIs. You start by building a static version of your UI out of a hierarchy of components. Then, with this, you define the state needed to encapsulate all of the information in the UI and in what componenets it should live. Finally, you build out the flow of data throughout your application. State flows down through components by way of props, and back up via callback functions (also passed through props),

1. Describe state.

State is the information in your application that changes. So, a ToDo
application would have a list of items as state. This list would contain
information that changes as you use the application and that needs to be used
to update the display of the application. 

1. Describe props.

Props are how you pass state infomation down to child componenets in your React UI. You simply add them to the JSX tag in a component, similar to HTML attributes. A key difference between state and props is that state is mutable and props are immutable; a componenet may not change any of the information passed to it in props. 

1. What are side effects, and how do you sync effects in a React component to state or prop changes?

Side effects are any changes or code we need to run outside of a component. This might include network requests, manual DOM manipulation or logging. So if you want to fetch data from an API to use in your application, fetching that data would be a side effect. You sync effects with the `useEffect` hook. In this code block you can specify what side effects you want to perform, when you want to do them, and what you want to do afterwards.
