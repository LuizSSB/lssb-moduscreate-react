# Modus Create Test

Test for the position of software engineer at Modus Create, by Luiz Baglie.

The code comprises a single page React webpage which loads a list of products from a specified URI.

This code is a fork of [https://codesandbox.io/s/modus-react-quiz-fetch-forked-qss8b](https://codesandbox.io/s/modus-react-quiz-fetch-forked-qss8b)

## Setup

The project uses `yarn`, so you install dependencies by running:
```shell
$ yarn install
```

And then you can execute the project by running the command below; it should compile the code and launch the website:
```shell
$ yarn start
```

The project is configured with ESLint, so you can also verify for compilation and code-style warnings and errors by running:
```shell
$ yarn lint:fix
```

## Architecture

### Layers

The code is meant to be separated into the following main layers (topdown):
-  `View`: React components for displaying the app's `State` and dispatching user interactions via `Actions`.
-  `Store`: [Redux](https://redux.js.org) structures for managing the app's state. Subdivided into:
	-  `State`: objects describing the app's state.
	-  `Action`: objects describing actions that should alter the app's `State`s.
	-  `Reducer`: functions that synthesize the new `State` of the app, given some `Action`.
	- [`Saga`](https://redux-saga.js.org): generator functions for handling complex and/or asynchronous, procedures spawned by `Action`s. May dispatch other `Action`s over the course of its execution.
-  `Repository`: structures for managing the app's data.
-  `Service`: structures for accessing the app's HTTP API.

The purpose of these layers is to  ~~decouple~~ decompose the _types_ of responsibility that occur in the project into ~~cohesive~~ specialized objects which can be:
- more easily maintained (no need to understand all the magic to maintain each layer - although it helps);
- more easily replaced, implementation-wise (in case of different platform API, for example);
- more easily tested (although the code itself provides no automated testing).

Each layer depends, at most, solely on the layer immediately below it. A layer should not access structures from layers above it - it would raise coupling and the chance of creating unforeseen, hard-to-debug bugs. A layer should also not access structures from layers below its immediate base - it would reduce its cohesion, creating hard-to-test monoliths.

### Services and Repositories

`Service`s and `Repository`s should be completely stateless, i.e. their classes should have no internal variables, only methods. Therefore, these classes will pretty much always be singletons. A given `Service` or `Repository` will usually deal with a single type of data - in the case of this code, Products.

For now, `Repository`s (specifically, `ProductRepository`) are merely proxies to `Services` (specifically, `ProductService`), however, in more complex scenarios, `Repository`s would also manage internal storage and other forms of storage, in addition to the HTTP services.


### Store

The main layer of the app, which stores and manages its state. By necessity, it is stateful, although it is composed solely by pure-functions, so as to reduce potential problems that come from dealing with state.

The `State`, `Action` and `Reducer` layers depend solely on each other. `Saga` is the only sublayer to access the `Repository` layer, acquiring its dependencies via the app's default IoC container.

The code uses [Redux Toolkit](https://redux-toolkit.js.org) to help set all the Redux boilerplate up. As such, `State`s, `Actions`, and `Reducer`s are created at once using the [`createSlice`](https://redux-toolkit.js.org/api/createslice/) function. The code contains a single _slice_, `ProductSlice`, which encapsulates these three sublayers for handling the products preview.

As for the sagas, since they are simple generator functions, there's not much need for complexity beyond defining some standard way to defining them - see `ProductSaga`.

### View

The `View` layer is as stateless as possible - i.e. it transfers as much as possible of its state to the `Store` layer: values are acquired from `Store` and user interactions should be dispatched to it. If a view should own some state, said state should pertain to details specific to displaying some component (i.e. it would be related more to React than to the apps's business logic).
 
This makes testing easier, as the state of the `View` can be provided "as-is" to it (instead of being computed) and interactions can be intercepted and handled as necessity demands.

### Inversion of Control

In hopes of making the app more flexible regarding different operating conditions, as well as making it easier to write automated unit tests, the code does not instantiate classes (mostly, `Service`s and `Repository`s) manually. Instead, it makes use of [Inversion of Control](https://en.wikipedia.org/wiki/Inversion_of_control) to acquire references to instances of such classes.

The code defines an `IoC` object, in which there are the following methods:
- `load()`: called at the very beginning of the app's lifecycle and receives as parameter an instance of `PlatformContainerLoader`, which is an object that defines which implementations our IoC mechanism will use.
- `get(InjectableType)`: receives a class and returns an instance of it.
  

The great advantage of this approach is that it decouples the dependency on a class from its instantiation and implementation. In cases where different implementations of a class are needed (e.g. automated testing, different user region), they can be registered using different `PlatformContainerLoader`s.

## TODO
- Better layout responsiveness
- Automated testing

-- Luiz S. S. Baglie (luizssb.biz -at- gmail -dot- com)