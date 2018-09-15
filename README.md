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
    * Model our app state
    * Update state
    * Read state values
    * Monitor/observe changes to state

## Redux: Three Principles
* There are three key principles when it comes to redux:
    1. Single source of truth
    2. State is read-only
    3. Pure functions update state

### Redux: Single Source of Truth
* Why have a single source of truth?
    * One state tree inside Store
    * Predictability, maintainability
    * Universal app server side rendering (SSR)
    * Testing and debugging

### Redux: State is read-only
* Why is application state read-only?
    * Derive properties from state
    * Dispatch actions to change state
    * Immutable update patterns

### Redux: Pure functions update state
* Why have pure functions update state?
    * Pure functions are reducers
    * Reducers respond to action types
    * Reducers return new state
