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

## Redux Core Concepts
* There are several of core concepts of Redux:
    * Single state tree
    * Actions
    * Reducers
    * Store
    * One-way dataflow

### String State Tree
* What does a single state tree consists of?
    * Plain JavaScript Object
    * Composed by reducers (the only way to update a state tree is via reducer)

### Actions
* What are actions in Redux?
    * Two properties:
        * **type**: string, describeds event
        *  **payload**: optional data
    * Dispatch actions to reducers

### Reducers
* What are reducers?
    * Pure functions
    * Given dispatched action
        * Responds to action.type
        * Access to action.payload
        * Composes new state
        * Returns new state

### Store
* What is the function of a Store?
    * State container
    * Components interact with the Store
        * Subscribe to slices of State
        * Dispatch Actions to the Store
    * Store invokes Reducers with previous State and Action
    * Reducers compose new State
    * Store is updated, notifies subscribers

### One-way Dataflow
* What do we mean by one-way dataflow?
    * Data flows one way from start to finish:
        1. First the component dispatches an action to the Store
        2. Then the action is sent to the reducer by the Store
        3. The reducer composes a new state within the Store
        4. The state then renders data back to the component

## Understanding Immutability
* What does immutability mean?
    * An immutable object is an object whose state cannot be modified after creation

### Why Immutable?
* There are several of reasons why we want our data to be immutable
    * Predictability
    * Explicit state changes
    * Performance (Change Detection)
    * Mutation Tracking
    * Undo state changes

### Mutability in JavaScript
* What are some things we can mutate in JavaScript?
    * Functions
    * Objects
    * Arrays

### Immutability in JavaScript
* What are some things we cannot mutate in JavaScript?
    * Strings
    * Numbers

## What is NgRx Store?
* NgRx Store is a Redux inspired reactive state management library

### NgRx Store
* What are some components of NgRx Store?
    * Based on Redux
    * Written with Observables
    * Made for Angular

### Benefits of NgRx Store
* What are some benefits of using NgRx Store?
    * Single source of truth
    * Testability
    * Performance benefits
        * ChangeDetectionStrategy.OnPush
        * Immutable @Inputs
        * Object reference checks are fast
    * Root and feature module support
        * Eagerly loaded modules
        * Lazily loaded modules

## Reactive Angular
* What is Reactive Angular in terms of a component architecture?
    * Container
        * Aware of Store
        * Dispatches Actions
        * Reads data from Store
    * Presentational
        * Not Award of Store
        * Invokes callbacks via @Output
        * Read data from @Inputs
