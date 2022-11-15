# Welcome to Codelab.ai

We're building a web application builder that allows usage of all Ant Design components & all their props. We'll soon integrate other frameworks such as Material UI.

In short, we use a graph database & store the serialized Component tree there (which is naturally suitable for the DOM tree). Our user interface allows users to create a tree of React components.

We also built our own Interface abstraction, which allows users to define object types. These types map 1 to 1 with our components, and users can configure the props form (which is generated from the interface).

As for functions, we've integrated AWS Lambda and allows users to create their custom function handlers for components.
