# NgRx: Store + Effects
Notes from Todd Motto's NgRx Course

## What is application state?
* The browser has various types of state the following are some common examples of state:
    * Server response data
    * User information
    * User input
    * UI state
    * Router/location state

* State typically lives inside the Store and the Store is essentially a container that holds out state and actually has everything in a centrallized location.
* We compose application state in our Store

* There are some key differences between a state and a Store:
    * A state is a representation of our application which lives inside of the Store
    * The Store allows us to access the application state and have CRUD

## State Management Library
* A state management library will allow us to:
    * Model our application state
    * Update state
    * Read state values
    * Monitor/observe changes to state
