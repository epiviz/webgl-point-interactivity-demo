(function () {
  var $parcel$global = typeof globalThis !== 'undefined' ? globalThis : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : {};
  function $parcel$interopDefault(a) {
    return a && a.__esModule ? a.default : a;
  }
  function $parcel$export(e, n, v) {
    Object.defineProperty(e, n, {
      get: v,
      enumerable: true
    });
  }
  function $parcel$exportWildcard(dest, source) {
    Object.keys(source).forEach(function (key) {
      if (key === 'default' || key === '__esModule') {
        return;
      }
      Object.defineProperty(dest, key, {
        enumerable: true,
        get: function get() {
          return source[key];
        }
      });
    });
    return dest;
  }
  // ASSET: node_modules/@parcel/runtime-js/lib/JSRuntime.js
  var $1d2de42445546f9d0d441595fb07915f$exports = {};
  var $7d806a7a603c235ec027b73d847f4d95$var$mapping = {};
  function $7d806a7a603c235ec027b73d847f4d95$var$register(pairs) {
    var keys = Object.keys(pairs);
    for (var i = 0; i < keys.length; i++) {
      $7d806a7a603c235ec027b73d847f4d95$var$mapping[keys[i]] = pairs[keys[i]];
    }
  }
  function $7d806a7a603c235ec027b73d847f4d95$var$resolve(id) {
    var resolved = $7d806a7a603c235ec027b73d847f4d95$var$mapping[id];
    if (resolved == null) {
      throw new Error('Could not resolve bundle with id ' + id);
    }
    return resolved;
  }
  var $7d806a7a603c235ec027b73d847f4d95$export$register = $7d806a7a603c235ec027b73d847f4d95$var$register;
  var $7d806a7a603c235ec027b73d847f4d95$export$resolve = $7d806a7a603c235ec027b73d847f4d95$var$resolve;
  $7d806a7a603c235ec027b73d847f4d95$export$register(JSON.parse("{\"2aO6o\":\"index.7b80ae4b.js\",\"inPCI\":\"tsne_tenth.55e43465.csv\",\"5AQt2\":\"strawberries.11a42acc.csv\",\"W43K1\":\"broccoli.36a995d8.csv\",\"68hza\":\"signals.1a70087f.csv\",\"5zI6Y\":\"tsne.31f8a0af.csv\",\"xDcCF\":\"tsne_hundreth.33d06bad.csv\",\"1Ls68\":\"heatmap.7058ecef.csv\",\"1Utg0\":\"offscreen-webgl-worker.d45ee18a.js\",\"1S3Hi\":\"data-processor-worker.0193ab32.js\"}"));
  // ASSET: node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js
  var $a5a79905d7f29b6c9078769d5e01bfa0$exports = {};
  // ASSET: node_modules/redux/es/redux.js
  var $b81ba44106f6eb2cb6cdf2fb6c2cbde5$exports = {};
  function $65eb812e78781342e056ad948767e8b9$export$default(obj, key, value) {
    if ((key in obj)) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function $9d5e466193a723c69a03553ae8fa7fa6$var$ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) {
        symbols = symbols.filter(function (sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      }
      keys.push.apply(keys, symbols);
    }
    return keys;
  }
  function $9d5e466193a723c69a03553ae8fa7fa6$export$default(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      if (i % 2) {
        $9d5e466193a723c69a03553ae8fa7fa6$var$ownKeys(Object(source), true).forEach(function (key) {
          $65eb812e78781342e056ad948767e8b9$export$default(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        $9d5e466193a723c69a03553ae8fa7fa6$var$ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }
    return target;
  }
  /**
  * Adapted from React: https://github.com/facebook/react/blob/master/packages/shared/formatProdErrorMessage.js
  *
  * Do not require this module directly! Use normal throw error calls. These messages will be replaced with error codes
  * during build.
  * @param {number} code
  */
  function $b81ba44106f6eb2cb6cdf2fb6c2cbde5$var$formatProdErrorMessage(code) {
    return "Minified Redux error #" + code + "; visit https://redux.js.org/Errors?code=" + code + " for the full message or " + 'use the non-minified dev environment for full errors. ';
  }
  // Inlined version of the `symbol-observable` polyfill
  var $b81ba44106f6eb2cb6cdf2fb6c2cbde5$var$$$observable = (function () {
    return typeof Symbol === 'function' && Symbol.observable || '@@observable';
  })();
  /**
  * These are private action types reserved by Redux.
  * For any unknown actions, you must return the current state.
  * If the current state is undefined, you must return the initial state.
  * Do not reference these action types directly in your code.
  */
  var $b81ba44106f6eb2cb6cdf2fb6c2cbde5$var$randomString = function randomString() {
    return Math.random().toString(36).substring(7).split('').join('.');
  };
  var $b81ba44106f6eb2cb6cdf2fb6c2cbde5$export$__DO_NOT_USE__ActionTypes = {
    INIT: "@@redux/INIT" + $b81ba44106f6eb2cb6cdf2fb6c2cbde5$var$randomString(),
    REPLACE: "@@redux/REPLACE" + $b81ba44106f6eb2cb6cdf2fb6c2cbde5$var$randomString(),
    PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
      return "@@redux/PROBE_UNKNOWN_ACTION" + $b81ba44106f6eb2cb6cdf2fb6c2cbde5$var$randomString();
    }
  };
  /**
  * @param {any} obj The object to inspect.
  * @returns {boolean} True if the argument appears to be a plain object.
  */
  function $b81ba44106f6eb2cb6cdf2fb6c2cbde5$var$isPlainObject(obj) {
    if (typeof obj !== 'object' || obj === null) return false;
    var proto = obj;
    while (Object.getPrototypeOf(proto) !== null) {
      proto = Object.getPrototypeOf(proto);
    }
    return Object.getPrototypeOf(obj) === proto;
  }
  function $b81ba44106f6eb2cb6cdf2fb6c2cbde5$var$kindOf(val) {
    var typeOfVal = typeof val;
    if ("production" !== 'production') {
      // Inlined / shortened version of `kindOf` from https://github.com/jonschlinkert/kind-of
      function miniKindOf(val) {
        if (val === void 0) return 'undefined';
        if (val === null) return 'null';
        var type = typeof val;
        switch (type) {
          case 'boolean':
          case 'string':
          case 'number':
          case 'symbol':
          case 'function':
            {
              return type;
            }
        }
        if (Array.isArray(val)) return 'array';
        if (isDate(val)) return 'date';
        if (isError(val)) return 'error';
        var constructorName = ctorName(val);
        switch (constructorName) {
          case 'Symbol':
          case 'Promise':
          case 'WeakMap':
          case 'WeakSet':
          case 'Map':
          case 'Set':
            return constructorName;
        }
        // other
        return type.slice(8, -1).toLowerCase().replace(/\s/g, '');
      }
      function ctorName(val) {
        return typeof val.constructor === 'function' ? val.constructor.name : null;
      }
      function isError(val) {
        return val instanceof Error || typeof val.message === 'string' && val.constructor && typeof val.constructor.stackTraceLimit === 'number';
      }
      function isDate(val) {
        if (val instanceof Date) return true;
        return typeof val.toDateString === 'function' && typeof val.getDate === 'function' && typeof val.setDate === 'function';
      }
      typeOfVal = miniKindOf(val);
    }
    return typeOfVal;
  }
  /**
  * Creates a Redux store that holds the state tree.
  * The only way to change the data in the store is to call `dispatch()` on it.
  *
  * There should only be a single store in your app. To specify how different
  * parts of the state tree respond to actions, you may combine several reducers
  * into a single reducer function by using `combineReducers`.
  *
  * @param {Function} reducer A function that returns the next state tree, given
  * the current state tree and the action to handle.
  *
  * @param {any} [preloadedState] The initial state. You may optionally specify it
  * to hydrate the state from the server in universal apps, or to restore a
  * previously serialized user session.
  * If you use `combineReducers` to produce the root reducer function, this must be
  * an object with the same shape as `combineReducers` keys.
  *
  * @param {Function} [enhancer] The store enhancer. You may optionally specify it
  * to enhance the store with third-party capabilities such as middleware,
  * time travel, persistence, etc. The only store enhancer that ships with Redux
  * is `applyMiddleware()`.
  *
  * @returns {Store} A Redux store that lets you read the state, dispatch actions
  * and subscribe to changes.
  */
  function $b81ba44106f6eb2cb6cdf2fb6c2cbde5$export$createStore(reducer, preloadedState, enhancer) {
    var _ref2;
    if (typeof preloadedState === 'function' && typeof enhancer === 'function' || typeof enhancer === 'function' && typeof arguments[3] === 'function') {
      throw new Error("production" === "production" ? $b81ba44106f6eb2cb6cdf2fb6c2cbde5$var$formatProdErrorMessage(0) : 'It looks like you are passing several store enhancers to ' + 'createStore(). This is not supported. Instead, compose them ' + 'together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.');
    }
    if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
      enhancer = preloadedState;
      preloadedState = undefined;
    }
    if (typeof enhancer !== 'undefined') {
      if (typeof enhancer !== 'function') {
        throw new Error("production" === "production" ? $b81ba44106f6eb2cb6cdf2fb6c2cbde5$var$formatProdErrorMessage(1) : "Expected the enhancer to be a function. Instead, received: '" + $b81ba44106f6eb2cb6cdf2fb6c2cbde5$var$kindOf(enhancer) + "'");
      }
      return enhancer($b81ba44106f6eb2cb6cdf2fb6c2cbde5$export$createStore)(reducer, preloadedState);
    }
    if (typeof reducer !== 'function') {
      throw new Error("production" === "production" ? $b81ba44106f6eb2cb6cdf2fb6c2cbde5$var$formatProdErrorMessage(2) : "Expected the root reducer to be a function. Instead, received: '" + $b81ba44106f6eb2cb6cdf2fb6c2cbde5$var$kindOf(reducer) + "'");
    }
    var currentReducer = reducer;
    var currentState = preloadedState;
    var currentListeners = [];
    var nextListeners = currentListeners;
    var isDispatching = false;
    /**
    * This makes a shallow copy of currentListeners so we can use
    * nextListeners as a temporary list while dispatching.
    *
    * This prevents any bugs around consumers calling
    * subscribe/unsubscribe in the middle of a dispatch.
    */
    function ensureCanMutateNextListeners() {
      if (nextListeners === currentListeners) {
        nextListeners = currentListeners.slice();
      }
    }
    /**
    * Reads the state tree managed by the store.
    *
    * @returns {any} The current state tree of your application.
    */
    function getState() {
      if (isDispatching) {
        throw new Error("production" === "production" ? $b81ba44106f6eb2cb6cdf2fb6c2cbde5$var$formatProdErrorMessage(3) : 'You may not call store.getState() while the reducer is executing. ' + 'The reducer has already received the state as an argument. ' + 'Pass it down from the top reducer instead of reading it from the store.');
      }
      return currentState;
    }
    /**
    * Adds a change listener. It will be called any time an action is dispatched,
    * and some part of the state tree may potentially have changed. You may then
    * call `getState()` to read the current state tree inside the callback.
    *
    * You may call `dispatch()` from a change listener, with the following
    * caveats:
    *
    * 1. The subscriptions are snapshotted just before every `dispatch()` call.
    * If you subscribe or unsubscribe while the listeners are being invoked, this
    * will not have any effect on the `dispatch()` that is currently in progress.
    * However, the next `dispatch()` call, whether nested or not, will use a more
    * recent snapshot of the subscription list.
    *
    * 2. The listener should not expect to see all state changes, as the state
    * might have been updated multiple times during a nested `dispatch()` before
    * the listener is called. It is, however, guaranteed that all subscribers
    * registered before the `dispatch()` started will be called with the latest
    * state by the time it exits.
    *
    * @param {Function} listener A callback to be invoked on every dispatch.
    * @returns {Function} A function to remove this change listener.
    */
    function subscribe(listener) {
      if (typeof listener !== 'function') {
        throw new Error("production" === "production" ? $b81ba44106f6eb2cb6cdf2fb6c2cbde5$var$formatProdErrorMessage(4) : "Expected the listener to be a function. Instead, received: '" + $b81ba44106f6eb2cb6cdf2fb6c2cbde5$var$kindOf(listener) + "'");
      }
      if (isDispatching) {
        throw new Error("production" === "production" ? $b81ba44106f6eb2cb6cdf2fb6c2cbde5$var$formatProdErrorMessage(5) : 'You may not call store.subscribe() while the reducer is executing. ' + 'If you would like to be notified after the store has been updated, subscribe from a ' + 'component and invoke store.getState() in the callback to access the latest state. ' + 'See https://redux.js.org/api/store#subscribelistener for more details.');
      }
      var isSubscribed = true;
      ensureCanMutateNextListeners();
      nextListeners.push(listener);
      return function unsubscribe() {
        if (!isSubscribed) {
          return;
        }
        if (isDispatching) {
          throw new Error("production" === "production" ? $b81ba44106f6eb2cb6cdf2fb6c2cbde5$var$formatProdErrorMessage(6) : 'You may not unsubscribe from a store listener while the reducer is executing. ' + 'See https://redux.js.org/api/store#subscribelistener for more details.');
        }
        isSubscribed = false;
        ensureCanMutateNextListeners();
        var index = nextListeners.indexOf(listener);
        nextListeners.splice(index, 1);
        currentListeners = null;
      };
    }
    /**
    * Dispatches an action. It is the only way to trigger a state change.
    *
    * The `reducer` function, used to create the store, will be called with the
    * current state tree and the given `action`. Its return value will
    * be considered the **next** state of the tree, and the change listeners
    * will be notified.
    *
    * The base implementation only supports plain object actions. If you want to
    * dispatch a Promise, an Observable, a thunk, or something else, you need to
    * wrap your store creating function into the corresponding middleware. For
    * example, see the documentation for the `redux-thunk` package. Even the
    * middleware will eventually dispatch plain object actions using this method.
    *
    * @param {Object} action A plain object representing “what changed”. It is
    * a good idea to keep actions serializable so you can record and replay user
    * sessions, or use the time travelling `redux-devtools`. An action must have
    * a `type` property which may not be `undefined`. It is a good idea to use
    * string constants for action types.
    *
    * @returns {Object} For convenience, the same action object you dispatched.
    *
    * Note that, if you use a custom middleware, it may wrap `dispatch()` to
    * return something else (for example, a Promise you can await).
    */
    function dispatch(action) {
      if (!$b81ba44106f6eb2cb6cdf2fb6c2cbde5$var$isPlainObject(action)) {
        throw new Error("production" === "production" ? $b81ba44106f6eb2cb6cdf2fb6c2cbde5$var$formatProdErrorMessage(7) : "Actions must be plain objects. Instead, the actual type was: '" + $b81ba44106f6eb2cb6cdf2fb6c2cbde5$var$kindOf(action) + "'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.");
      }
      if (typeof action.type === 'undefined') {
        throw new Error("production" === "production" ? $b81ba44106f6eb2cb6cdf2fb6c2cbde5$var$formatProdErrorMessage(8) : 'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
      }
      if (isDispatching) {
        throw new Error("production" === "production" ? $b81ba44106f6eb2cb6cdf2fb6c2cbde5$var$formatProdErrorMessage(9) : 'Reducers may not dispatch actions.');
      }
      try {
        isDispatching = true;
        currentState = currentReducer(currentState, action);
      } finally {
        isDispatching = false;
      }
      var listeners = currentListeners = nextListeners;
      for (var i = 0; i < listeners.length; i++) {
        var listener = listeners[i];
        listener();
      }
      return action;
    }
    /**
    * Replaces the reducer currently used by the store to calculate the state.
    *
    * You might need this if your app implements code splitting and you want to
    * load some of the reducers dynamically. You might also need this if you
    * implement a hot reloading mechanism for Redux.
    *
    * @param {Function} nextReducer The reducer for the store to use instead.
    * @returns {void}
    */
    function replaceReducer(nextReducer) {
      if (typeof nextReducer !== 'function') {
        throw new Error("production" === "production" ? $b81ba44106f6eb2cb6cdf2fb6c2cbde5$var$formatProdErrorMessage(10) : "Expected the nextReducer to be a function. Instead, received: '" + $b81ba44106f6eb2cb6cdf2fb6c2cbde5$var$kindOf(nextReducer));
      }
      currentReducer = nextReducer;
      // This action has a similiar effect to ActionTypes.INIT.
      // Any reducers that existed in both the new and old rootReducer
      // will receive the previous state. This effectively populates
      // the new state tree with any relevant data from the old one.
      dispatch({
        type: $b81ba44106f6eb2cb6cdf2fb6c2cbde5$export$__DO_NOT_USE__ActionTypes.REPLACE
      });
    }
    /**
    * Interoperability point for observable/reactive libraries.
    * @returns {observable} A minimal observable of state changes.
    * For more information, see the observable proposal:
    * https://github.com/tc39/proposal-observable
    */
    function observable() {
      var _ref;
      var outerSubscribe = subscribe;
      return (_ref = {
        /**
        * The minimal observable subscription method.
        * @param {Object} observer Any object that can be used as an observer.
        * The observer object should have a `next` method.
        * @returns {subscription} An object with an `unsubscribe` method that can
        * be used to unsubscribe the observable from the store, and prevent further
        * emission of values from the observable.
        */
        subscribe: function subscribe(observer) {
          if (typeof observer !== 'object' || observer === null) {
            throw new Error("production" === "production" ? $b81ba44106f6eb2cb6cdf2fb6c2cbde5$var$formatProdErrorMessage(11) : "Expected the observer to be an object. Instead, received: '" + $b81ba44106f6eb2cb6cdf2fb6c2cbde5$var$kindOf(observer) + "'");
          }
          function observeState() {
            if (observer.next) {
              observer.next(getState());
            }
          }
          observeState();
          var unsubscribe = outerSubscribe(observeState);
          return {
            unsubscribe: unsubscribe
          };
        }
      }, _ref[$b81ba44106f6eb2cb6cdf2fb6c2cbde5$var$$$observable] = function () {
        return this;
      }, _ref);
    }
    // When a store is created, an "INIT" action is dispatched so that every
    // reducer returns their initial state. This effectively populates
    // the initial state tree.
    dispatch({
      type: $b81ba44106f6eb2cb6cdf2fb6c2cbde5$export$__DO_NOT_USE__ActionTypes.INIT
    });
    return (_ref2 = {
      dispatch: dispatch,
      subscribe: subscribe,
      getState: getState,
      replaceReducer: replaceReducer
    }, _ref2[$b81ba44106f6eb2cb6cdf2fb6c2cbde5$var$$$observable] = observable, _ref2);
  }
  /**
  * Prints a warning in the console if it exists.
  *
  * @param {String} message The warning message.
  * @returns {void}
  */
  function $b81ba44106f6eb2cb6cdf2fb6c2cbde5$var$warning(message) {
    /*eslint-disable no-console*/
    if (typeof console !== 'undefined' && typeof console.error === 'function') {
      console.error(message);
    }
    /*eslint-enable no-console*/
    try {
      // This error was thrown as a convenience so that if you enable
      // "break on all exceptions" in your console,
      // it would pause the execution at this line.
      throw new Error(message);
    } catch (e) {}
  }
  function $b81ba44106f6eb2cb6cdf2fb6c2cbde5$var$getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
    var reducerKeys = Object.keys(reducers);
    var argumentName = action && action.type === $b81ba44106f6eb2cb6cdf2fb6c2cbde5$export$__DO_NOT_USE__ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';
    if (reducerKeys.length === 0) {
      return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
    }
    if (!$b81ba44106f6eb2cb6cdf2fb6c2cbde5$var$isPlainObject(inputState)) {
      return "The " + argumentName + " has unexpected type of \"" + $b81ba44106f6eb2cb6cdf2fb6c2cbde5$var$kindOf(inputState) + "\". Expected argument to be an object with the following " + ("keys: \"" + reducerKeys.join('", "') + "\"");
    }
    var unexpectedKeys = Object.keys(inputState).filter(function (key) {
      return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
    });
    unexpectedKeys.forEach(function (key) {
      unexpectedKeyCache[key] = true;
    });
    if (action && action.type === $b81ba44106f6eb2cb6cdf2fb6c2cbde5$export$__DO_NOT_USE__ActionTypes.REPLACE) return;
    if (unexpectedKeys.length > 0) {
      return "Unexpected " + (unexpectedKeys.length > 1 ? 'keys' : 'key') + " " + ("\"" + unexpectedKeys.join('", "') + "\" found in " + argumentName + ". ") + "Expected to find one of the known reducer keys instead: " + ("\"" + reducerKeys.join('", "') + "\". Unexpected keys will be ignored.");
    }
  }
  function $b81ba44106f6eb2cb6cdf2fb6c2cbde5$var$assertReducerShape(reducers) {
    Object.keys(reducers).forEach(function (key) {
      var reducer = reducers[key];
      var initialState = reducer(undefined, {
        type: $b81ba44106f6eb2cb6cdf2fb6c2cbde5$export$__DO_NOT_USE__ActionTypes.INIT
      });
      if (typeof initialState === 'undefined') {
        throw new Error("production" === "production" ? $b81ba44106f6eb2cb6cdf2fb6c2cbde5$var$formatProdErrorMessage(12) : "The slice reducer for key \"" + key + "\" returned undefined during initialization. " + "If the state passed to the reducer is undefined, you must " + "explicitly return the initial state. The initial state may " + "not be undefined. If you don't want to set a value for this reducer, " + "you can use null instead of undefined.");
      }
      if (typeof reducer(undefined, {
        type: $b81ba44106f6eb2cb6cdf2fb6c2cbde5$export$__DO_NOT_USE__ActionTypes.PROBE_UNKNOWN_ACTION()
      }) === 'undefined') {
        throw new Error("production" === "production" ? $b81ba44106f6eb2cb6cdf2fb6c2cbde5$var$formatProdErrorMessage(13) : "The slice reducer for key \"" + key + "\" returned undefined when probed with a random type. " + ("Don't try to handle '" + $b81ba44106f6eb2cb6cdf2fb6c2cbde5$export$__DO_NOT_USE__ActionTypes.INIT + "' or other actions in \"redux/*\" ") + "namespace. They are considered private. Instead, you must return the " + "current state for any unknown actions, unless it is undefined, " + "in which case you must return the initial state, regardless of the " + "action type. The initial state may not be undefined, but can be null.");
      }
    });
  }
  /**
  * Turns an object whose values are different reducer functions, into a single
  * reducer function. It will call every child reducer, and gather their results
  * into a single state object, whose keys correspond to the keys of the passed
  * reducer functions.
  *
  * @param {Object} reducers An object whose values correspond to different
  * reducer functions that need to be combined into one. One handy way to obtain
  * it is to use ES6 `import * as reducers` syntax. The reducers may never return
  * undefined for any action. Instead, they should return their initial state
  * if the state passed to them was undefined, and the current state for any
  * unrecognized action.
  *
  * @returns {Function} A reducer function that invokes every reducer inside the
  * passed object, and builds a state object with the same shape.
  */
  function $b81ba44106f6eb2cb6cdf2fb6c2cbde5$export$combineReducers(reducers) {
    var reducerKeys = Object.keys(reducers);
    var finalReducers = {};
    for (var i = 0; i < reducerKeys.length; i++) {
      var key = reducerKeys[i];
      if ("production" !== 'production') {
        if (typeof reducers[key] === 'undefined') {
          $b81ba44106f6eb2cb6cdf2fb6c2cbde5$var$warning("No reducer provided for key \"" + key + "\"");
        }
      }
      if (typeof reducers[key] === 'function') {
        finalReducers[key] = reducers[key];
      }
    }
    var finalReducerKeys = Object.keys(finalReducers);
    // This is used to make sure we don't warn about the same
    // keys multiple times.
    var unexpectedKeyCache;
    if ("production" !== 'production') {
      unexpectedKeyCache = {};
    }
    var shapeAssertionError;
    try {
      $b81ba44106f6eb2cb6cdf2fb6c2cbde5$var$assertReducerShape(finalReducers);
    } catch (e) {
      shapeAssertionError = e;
    }
    return function combination(state, action) {
      if (state === void 0) {
        state = {};
      }
      if (shapeAssertionError) {
        throw shapeAssertionError;
      }
      if ("production" !== 'production') {
        var warningMessage = $b81ba44106f6eb2cb6cdf2fb6c2cbde5$var$getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);
        if (warningMessage) {
          $b81ba44106f6eb2cb6cdf2fb6c2cbde5$var$warning(warningMessage);
        }
      }
      var hasChanged = false;
      var nextState = {};
      for (var _i = 0; _i < finalReducerKeys.length; _i++) {
        var _key = finalReducerKeys[_i];
        var reducer = finalReducers[_key];
        var previousStateForKey = state[_key];
        var nextStateForKey = reducer(previousStateForKey, action);
        if (typeof nextStateForKey === 'undefined') {
          var actionType = action && action.type;
          throw new Error("production" === "production" ? $b81ba44106f6eb2cb6cdf2fb6c2cbde5$var$formatProdErrorMessage(14) : "When called with an action of type " + (actionType ? "\"" + String(actionType) + "\"" : '(unknown type)') + ", the slice reducer for key \"" + _key + "\" returned undefined. " + "To ignore an action, you must explicitly return the previous state. " + "If you want this reducer to hold no value, you can return null instead of undefined.");
        }
        nextState[_key] = nextStateForKey;
        hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
      }
      hasChanged = hasChanged || finalReducerKeys.length !== Object.keys(state).length;
      return hasChanged ? nextState : state;
    };
  }
  function $b81ba44106f6eb2cb6cdf2fb6c2cbde5$var$bindActionCreator(actionCreator, dispatch) {
    return function () {
      return dispatch(actionCreator.apply(this, arguments));
    };
  }
  /**
  * Turns an object whose values are action creators, into an object with the
  * same keys, but with every function wrapped into a `dispatch` call so they
  * may be invoked directly. This is just a convenience method, as you can call
  * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
  *
  * For convenience, you can also pass an action creator as the first argument,
  * and get a dispatch wrapped function in return.
  *
  * @param {Function|Object} actionCreators An object whose values are action
  * creator functions. One handy way to obtain it is to use ES6 `import * as`
  * syntax. You may also pass a single function.
  *
  * @param {Function} dispatch The `dispatch` function available on your Redux
  * store.
  *
  * @returns {Function|Object} The object mimicking the original object, but with
  * every action creator wrapped into the `dispatch` call. If you passed a
  * function as `actionCreators`, the return value will also be a single
  * function.
  */
  function $b81ba44106f6eb2cb6cdf2fb6c2cbde5$export$bindActionCreators(actionCreators, dispatch) {
    if (typeof actionCreators === 'function') {
      return $b81ba44106f6eb2cb6cdf2fb6c2cbde5$var$bindActionCreator(actionCreators, dispatch);
    }
    if (typeof actionCreators !== 'object' || actionCreators === null) {
      throw new Error("production" === "production" ? $b81ba44106f6eb2cb6cdf2fb6c2cbde5$var$formatProdErrorMessage(16) : "bindActionCreators expected an object or a function, but instead received: '" + $b81ba44106f6eb2cb6cdf2fb6c2cbde5$var$kindOf(actionCreators) + "'. " + "Did you write \"import ActionCreators from\" instead of \"import * as ActionCreators from\"?");
    }
    var boundActionCreators = {};
    for (var key in actionCreators) {
      var actionCreator = actionCreators[key];
      if (typeof actionCreator === 'function') {
        boundActionCreators[key] = $b81ba44106f6eb2cb6cdf2fb6c2cbde5$var$bindActionCreator(actionCreator, dispatch);
      }
    }
    return boundActionCreators;
  }
  /**
  * Composes single-argument functions from right to left. The rightmost
  * function can take multiple arguments as it provides the signature for
  * the resulting composite function.
  *
  * @param {...Function} funcs The functions to compose.
  * @returns {Function} A function obtained by composing the argument functions
  * from right to left. For example, compose(f, g, h) is identical to doing
  * (...args) => f(g(h(...args))).
  */
  function $b81ba44106f6eb2cb6cdf2fb6c2cbde5$export$compose() {
    for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
      funcs[_key] = arguments[_key];
    }
    if (funcs.length === 0) {
      return function (arg) {
        return arg;
      };
    }
    if (funcs.length === 1) {
      return funcs[0];
    }
    return funcs.reduce(function (a, b) {
      return function () {
        return a(b.apply(void 0, arguments));
      };
    });
  }
  /**
  * Creates a store enhancer that applies middleware to the dispatch method
  * of the Redux store. This is handy for a variety of tasks, such as expressing
  * asynchronous actions in a concise manner, or logging every action payload.
  *
  * See `redux-thunk` package as an example of the Redux middleware.
  *
  * Because middleware is potentially asynchronous, this should be the first
  * store enhancer in the composition chain.
  *
  * Note that each middleware will be given the `dispatch` and `getState` functions
  * as named arguments.
  *
  * @param {...Function} middlewares The middleware chain to be applied.
  * @returns {Function} A store enhancer applying the middleware.
  */
  function $b81ba44106f6eb2cb6cdf2fb6c2cbde5$export$applyMiddleware() {
    for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) {
      middlewares[_key] = arguments[_key];
    }
    return function (createStore) {
      return function () {
        var store = createStore.apply(void 0, arguments);
        var _dispatch = function dispatch() {
          throw new Error("production" === "production" ? $b81ba44106f6eb2cb6cdf2fb6c2cbde5$var$formatProdErrorMessage(15) : 'Dispatching while constructing your middleware is not allowed. ' + 'Other middleware would not be applied to this dispatch.');
        };
        var middlewareAPI = {
          getState: store.getState,
          dispatch: function dispatch() {
            return _dispatch.apply(void 0, arguments);
          }
        };
        var chain = middlewares.map(function (middleware) {
          return middleware(middlewareAPI);
        });
        _dispatch = $b81ba44106f6eb2cb6cdf2fb6c2cbde5$export$compose.apply(void 0, chain)(store.dispatch);
        return $9d5e466193a723c69a03553ae8fa7fa6$export$default($9d5e466193a723c69a03553ae8fa7fa6$export$default({}, store), {}, {
          dispatch: _dispatch
        });
      };
    };
  }
  /*
  * This is a dummy function to check if the function name has been altered by minification.
  * If the function has been minified and NODE_ENV !== 'production', warn the user.
  */
  function $b81ba44106f6eb2cb6cdf2fb6c2cbde5$var$isCrushed() {}
  if ("production" !== 'production' && typeof $b81ba44106f6eb2cb6cdf2fb6c2cbde5$var$isCrushed.name === 'string' && $b81ba44106f6eb2cb6cdf2fb6c2cbde5$var$isCrushed.name !== 'isCrushed') {
    $b81ba44106f6eb2cb6cdf2fb6c2cbde5$var$warning('You are currently using minified code outside of NODE_ENV === "production". ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or setting mode to production in webpack (https://webpack.js.org/concepts/mode/) ' + 'to ensure you have the correct code for your production build.');
  }
  $parcel$export($b81ba44106f6eb2cb6cdf2fb6c2cbde5$exports, "createStore", function () {
    return $b81ba44106f6eb2cb6cdf2fb6c2cbde5$export$createStore;
  });
  $parcel$export($b81ba44106f6eb2cb6cdf2fb6c2cbde5$exports, "compose", function () {
    return $b81ba44106f6eb2cb6cdf2fb6c2cbde5$export$compose;
  });
  $parcel$export($b81ba44106f6eb2cb6cdf2fb6c2cbde5$exports, "combineReducers", function () {
    return $b81ba44106f6eb2cb6cdf2fb6c2cbde5$export$combineReducers;
  });
  $parcel$export($b81ba44106f6eb2cb6cdf2fb6c2cbde5$exports, "applyMiddleware", function () {
    return $b81ba44106f6eb2cb6cdf2fb6c2cbde5$export$applyMiddleware;
  });
  $parcel$exportWildcard($a5a79905d7f29b6c9078769d5e01bfa0$exports, $b81ba44106f6eb2cb6cdf2fb6c2cbde5$exports);
  function $f3aae510e7453dfbef7e11fad90c7908$var$n(n) {
    for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), e = 1; e < t; e++) r[e - 1] = arguments[e];
    if ("production" !== "production") {
      var i = $f3aae510e7453dfbef7e11fad90c7908$var$Y[n], o = i ? "function" == typeof i ? i.apply(null, r) : i : "unknown error nr: " + n;
      throw Error("[Immer] " + o);
    }
    throw Error("[Immer] minified error nr: " + n + (r.length ? " " + r.map(function (n) {
      return "'" + n + "'";
    }).join(",") : "") + ". Find the full error at: https://bit.ly/3cXEKWf");
  }
  function $f3aae510e7453dfbef7e11fad90c7908$export$isDraft(n) {
    return !!n && !!n[$f3aae510e7453dfbef7e11fad90c7908$var$Q];
  }
  function $f3aae510e7453dfbef7e11fad90c7908$export$isDraftable(n) {
    return !!n && ((function (n) {
      if (!n || "object" != typeof n) return !1;
      var t = Object.getPrototypeOf(n);
      if (null === t) return !0;
      var r = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
      return r === Object || "function" == typeof r && Function.toString.call(r) === $f3aae510e7453dfbef7e11fad90c7908$var$Z;
    })(n) || Array.isArray(n) || !!n[$f3aae510e7453dfbef7e11fad90c7908$export$immerable] || !!n.constructor[$f3aae510e7453dfbef7e11fad90c7908$export$immerable] || $f3aae510e7453dfbef7e11fad90c7908$var$s(n) || $f3aae510e7453dfbef7e11fad90c7908$var$v(n));
  }
  function $f3aae510e7453dfbef7e11fad90c7908$export$original(r) {
    return ($f3aae510e7453dfbef7e11fad90c7908$export$isDraft(r) || $f3aae510e7453dfbef7e11fad90c7908$var$n(23, r), r[$f3aae510e7453dfbef7e11fad90c7908$var$Q].t);
  }
  function $f3aae510e7453dfbef7e11fad90c7908$var$i(n, t, r) {
    (void 0 === r && (r = !1), 0 === $f3aae510e7453dfbef7e11fad90c7908$var$o(n) ? (r ? Object.keys : $f3aae510e7453dfbef7e11fad90c7908$var$nn)(n).forEach(function (e) {
      r && "symbol" == typeof e || t(e, n[e], n);
    }) : n.forEach(function (r, e) {
      return t(e, r, n);
    }));
  }
  function $f3aae510e7453dfbef7e11fad90c7908$var$o(n) {
    var t = n[$f3aae510e7453dfbef7e11fad90c7908$var$Q];
    return t ? t.i > 3 ? t.i - 4 : t.i : Array.isArray(n) ? 1 : $f3aae510e7453dfbef7e11fad90c7908$var$s(n) ? 2 : $f3aae510e7453dfbef7e11fad90c7908$var$v(n) ? 3 : 0;
  }
  function $f3aae510e7453dfbef7e11fad90c7908$var$u(n, t) {
    return 2 === $f3aae510e7453dfbef7e11fad90c7908$var$o(n) ? n.has(t) : Object.prototype.hasOwnProperty.call(n, t);
  }
  function $f3aae510e7453dfbef7e11fad90c7908$var$a(n, t) {
    return 2 === $f3aae510e7453dfbef7e11fad90c7908$var$o(n) ? n.get(t) : n[t];
  }
  function $f3aae510e7453dfbef7e11fad90c7908$var$f(n, t, r) {
    var e = $f3aae510e7453dfbef7e11fad90c7908$var$o(n);
    2 === e ? n.set(t, r) : 3 === e ? (n.delete(t), n.add(r)) : n[t] = r;
  }
  function $f3aae510e7453dfbef7e11fad90c7908$var$c(n, t) {
    return n === t ? 0 !== n || 1 / n == 1 / t : n != n && t != t;
  }
  function $f3aae510e7453dfbef7e11fad90c7908$var$s(n) {
    return $f3aae510e7453dfbef7e11fad90c7908$var$X && n instanceof Map;
  }
  function $f3aae510e7453dfbef7e11fad90c7908$var$v(n) {
    return $f3aae510e7453dfbef7e11fad90c7908$var$q && n instanceof Set;
  }
  function $f3aae510e7453dfbef7e11fad90c7908$var$p(n) {
    return n.o || n.t;
  }
  function $f3aae510e7453dfbef7e11fad90c7908$var$l(n) {
    if (Array.isArray(n)) return Array.prototype.slice.call(n);
    var t = $f3aae510e7453dfbef7e11fad90c7908$var$tn(n);
    delete t[$f3aae510e7453dfbef7e11fad90c7908$var$Q];
    for (var r = $f3aae510e7453dfbef7e11fad90c7908$var$nn(t), e = 0; e < r.length; e++) {
      var i = r[e], o = t[i];
      (!1 === o.writable && (o.writable = !0, o.configurable = !0), (o.get || o.set) && (t[i] = {
        configurable: !0,
        writable: !0,
        enumerable: o.enumerable,
        value: n[i]
      }));
    }
    return Object.create(Object.getPrototypeOf(n), t);
  }
  function $f3aae510e7453dfbef7e11fad90c7908$export$freeze(n, e) {
    return (void 0 === e && (e = !1), $f3aae510e7453dfbef7e11fad90c7908$var$y(n) || $f3aae510e7453dfbef7e11fad90c7908$export$isDraft(n) || !$f3aae510e7453dfbef7e11fad90c7908$export$isDraftable(n) ? n : ($f3aae510e7453dfbef7e11fad90c7908$var$o(n) > 1 && (n.set = n.add = n.clear = n.delete = $f3aae510e7453dfbef7e11fad90c7908$var$h), Object.freeze(n), e && $f3aae510e7453dfbef7e11fad90c7908$var$i(n, function (n, t) {
      return $f3aae510e7453dfbef7e11fad90c7908$export$freeze(t, !0);
    }, !0), n));
  }
  function $f3aae510e7453dfbef7e11fad90c7908$var$h() {
    $f3aae510e7453dfbef7e11fad90c7908$var$n(2);
  }
  function $f3aae510e7453dfbef7e11fad90c7908$var$y(n) {
    return null == n || "object" != typeof n || Object.isFrozen(n);
  }
  function $f3aae510e7453dfbef7e11fad90c7908$var$b(t) {
    var r = $f3aae510e7453dfbef7e11fad90c7908$var$rn[t];
    return (r || $f3aae510e7453dfbef7e11fad90c7908$var$n(18, t), r);
  }
  function $f3aae510e7453dfbef7e11fad90c7908$var$m(n, t) {
    $f3aae510e7453dfbef7e11fad90c7908$var$rn[n] || ($f3aae510e7453dfbef7e11fad90c7908$var$rn[n] = t);
  }
  function $f3aae510e7453dfbef7e11fad90c7908$var$_() {
    return ("production" === "production" || $f3aae510e7453dfbef7e11fad90c7908$var$U || $f3aae510e7453dfbef7e11fad90c7908$var$n(0), $f3aae510e7453dfbef7e11fad90c7908$var$U);
  }
  function $f3aae510e7453dfbef7e11fad90c7908$var$j(n, t) {
    t && ($f3aae510e7453dfbef7e11fad90c7908$var$b("Patches"), n.u = [], n.s = [], n.v = t);
  }
  function $f3aae510e7453dfbef7e11fad90c7908$var$O(n) {
    ($f3aae510e7453dfbef7e11fad90c7908$var$g(n), n.p.forEach($f3aae510e7453dfbef7e11fad90c7908$var$S), n.p = null);
  }
  function $f3aae510e7453dfbef7e11fad90c7908$var$g(n) {
    n === $f3aae510e7453dfbef7e11fad90c7908$var$U && ($f3aae510e7453dfbef7e11fad90c7908$var$U = n.l);
  }
  function $f3aae510e7453dfbef7e11fad90c7908$var$w(n) {
    return $f3aae510e7453dfbef7e11fad90c7908$var$U = {
      p: [],
      l: $f3aae510e7453dfbef7e11fad90c7908$var$U,
      h: n,
      m: !0,
      _: 0
    };
  }
  function $f3aae510e7453dfbef7e11fad90c7908$var$S(n) {
    var t = n[$f3aae510e7453dfbef7e11fad90c7908$var$Q];
    0 === t.i || 1 === t.i ? t.j() : t.O = !0;
  }
  function $f3aae510e7453dfbef7e11fad90c7908$var$P(t, e) {
    e._ = e.p.length;
    var i = e.p[0], o = void 0 !== t && t !== i;
    return (e.h.g || $f3aae510e7453dfbef7e11fad90c7908$var$b("ES5").S(e, t, o), o ? (i[$f3aae510e7453dfbef7e11fad90c7908$var$Q].P && ($f3aae510e7453dfbef7e11fad90c7908$var$O(e), $f3aae510e7453dfbef7e11fad90c7908$var$n(4)), $f3aae510e7453dfbef7e11fad90c7908$export$isDraftable(t) && (t = $f3aae510e7453dfbef7e11fad90c7908$var$M(e, t), e.l || $f3aae510e7453dfbef7e11fad90c7908$var$x(e, t)), e.u && $f3aae510e7453dfbef7e11fad90c7908$var$b("Patches").M(i[$f3aae510e7453dfbef7e11fad90c7908$var$Q], t, e.u, e.s)) : t = $f3aae510e7453dfbef7e11fad90c7908$var$M(e, i, []), $f3aae510e7453dfbef7e11fad90c7908$var$O(e), e.u && e.v(e.u, e.s), t !== $f3aae510e7453dfbef7e11fad90c7908$export$nothing ? t : void 0);
  }
  function $f3aae510e7453dfbef7e11fad90c7908$var$M(n, t, r) {
    if ($f3aae510e7453dfbef7e11fad90c7908$var$y(t)) return t;
    var e = t[$f3aae510e7453dfbef7e11fad90c7908$var$Q];
    if (!e) return ($f3aae510e7453dfbef7e11fad90c7908$var$i(t, function (i, o) {
      return $f3aae510e7453dfbef7e11fad90c7908$var$A(n, e, t, i, o, r);
    }, !0), t);
    if (e.A !== n) return t;
    if (!e.P) return ($f3aae510e7453dfbef7e11fad90c7908$var$x(n, e.t, !0), e.t);
    if (!e.I) {
      (e.I = !0, e.A._--);
      var o = 4 === e.i || 5 === e.i ? e.o = $f3aae510e7453dfbef7e11fad90c7908$var$l(e.k) : e.o;
      ($f3aae510e7453dfbef7e11fad90c7908$var$i(3 === e.i ? new Set(o) : o, function (t, i) {
        return $f3aae510e7453dfbef7e11fad90c7908$var$A(n, e, o, t, i, r);
      }), $f3aae510e7453dfbef7e11fad90c7908$var$x(n, o, !1), r && n.u && $f3aae510e7453dfbef7e11fad90c7908$var$b("Patches").R(e, r, n.u, n.s));
    }
    return e.o;
  }
  function $f3aae510e7453dfbef7e11fad90c7908$var$A(e, i, o, a, c, s) {
    if (("production" !== "production" && c === o && $f3aae510e7453dfbef7e11fad90c7908$var$n(5), $f3aae510e7453dfbef7e11fad90c7908$export$isDraft(c))) {
      var v = $f3aae510e7453dfbef7e11fad90c7908$var$M(e, c, s && i && 3 !== i.i && !$f3aae510e7453dfbef7e11fad90c7908$var$u(i.D, a) ? s.concat(a) : void 0);
      if (($f3aae510e7453dfbef7e11fad90c7908$var$f(o, a, v), !$f3aae510e7453dfbef7e11fad90c7908$export$isDraft(v))) return;
      e.m = !1;
    }
    if ($f3aae510e7453dfbef7e11fad90c7908$export$isDraftable(c) && !$f3aae510e7453dfbef7e11fad90c7908$var$y(c)) {
      if (!e.h.F && e._ < 1) return;
      ($f3aae510e7453dfbef7e11fad90c7908$var$M(e, c), i && i.A.l || $f3aae510e7453dfbef7e11fad90c7908$var$x(e, c));
    }
  }
  function $f3aae510e7453dfbef7e11fad90c7908$var$x(n, t, r) {
    (void 0 === r && (r = !1), n.h.F && n.m && $f3aae510e7453dfbef7e11fad90c7908$export$freeze(t, r));
  }
  function $f3aae510e7453dfbef7e11fad90c7908$var$z(n, t) {
    var r = n[$f3aae510e7453dfbef7e11fad90c7908$var$Q];
    return (r ? $f3aae510e7453dfbef7e11fad90c7908$var$p(r) : n)[t];
  }
  function $f3aae510e7453dfbef7e11fad90c7908$var$I(n, t) {
    if ((t in n)) for (var r = Object.getPrototypeOf(n); r; ) {
      var e = Object.getOwnPropertyDescriptor(r, t);
      if (e) return e;
      r = Object.getPrototypeOf(r);
    }
  }
  function $f3aae510e7453dfbef7e11fad90c7908$var$k(n) {
    n.P || (n.P = !0, n.l && $f3aae510e7453dfbef7e11fad90c7908$var$k(n.l));
  }
  function $f3aae510e7453dfbef7e11fad90c7908$var$E(n) {
    n.o || (n.o = $f3aae510e7453dfbef7e11fad90c7908$var$l(n.t));
  }
  function $f3aae510e7453dfbef7e11fad90c7908$var$R(n, t, r) {
    var e = $f3aae510e7453dfbef7e11fad90c7908$var$s(t) ? $f3aae510e7453dfbef7e11fad90c7908$var$b("MapSet").N(t, r) : $f3aae510e7453dfbef7e11fad90c7908$var$v(t) ? $f3aae510e7453dfbef7e11fad90c7908$var$b("MapSet").T(t, r) : n.g ? (function (n, t) {
      var r = Array.isArray(n), e = {
        i: r ? 1 : 0,
        A: t ? t.A : $f3aae510e7453dfbef7e11fad90c7908$var$_(),
        P: !1,
        I: !1,
        D: {},
        l: t,
        t: n,
        k: null,
        o: null,
        j: null,
        C: !1
      }, i = e, o = $f3aae510e7453dfbef7e11fad90c7908$var$en;
      r && (i = [e], o = $f3aae510e7453dfbef7e11fad90c7908$var$on);
      var u = Proxy.revocable(i, o), a = u.revoke, f = u.proxy;
      return (e.k = f, e.j = a, f);
    })(t, r) : $f3aae510e7453dfbef7e11fad90c7908$var$b("ES5").J(t, r);
    return ((r ? r.A : $f3aae510e7453dfbef7e11fad90c7908$var$_()).p.push(e), e);
  }
  function $f3aae510e7453dfbef7e11fad90c7908$export$current(e) {
    return ($f3aae510e7453dfbef7e11fad90c7908$export$isDraft(e) || $f3aae510e7453dfbef7e11fad90c7908$var$n(22, e), (function n(t) {
      if (!$f3aae510e7453dfbef7e11fad90c7908$export$isDraftable(t)) return t;
      var e, u = t[$f3aae510e7453dfbef7e11fad90c7908$var$Q], c = $f3aae510e7453dfbef7e11fad90c7908$var$o(t);
      if (u) {
        if (!u.P && (u.i < 4 || !$f3aae510e7453dfbef7e11fad90c7908$var$b("ES5").K(u))) return u.t;
        (u.I = !0, e = $f3aae510e7453dfbef7e11fad90c7908$var$F(t, c), u.I = !1);
      } else e = $f3aae510e7453dfbef7e11fad90c7908$var$F(t, c);
      return ($f3aae510e7453dfbef7e11fad90c7908$var$i(e, function (t, r) {
        u && $f3aae510e7453dfbef7e11fad90c7908$var$a(u.t, t) === r || $f3aae510e7453dfbef7e11fad90c7908$var$f(e, t, n(r));
      }), 3 === c ? new Set(e) : e);
    })(e));
  }
  function $f3aae510e7453dfbef7e11fad90c7908$var$F(n, t) {
    switch (t) {
      case 2:
        return new Map(n);
      case 3:
        return Array.from(n);
    }
    return $f3aae510e7453dfbef7e11fad90c7908$var$l(n);
  }
  function $f3aae510e7453dfbef7e11fad90c7908$export$enableES5() {
    function r(n, t) {
      var r = s[n];
      return (r ? r.enumerable = t : s[n] = r = {
        configurable: !0,
        enumerable: t,
        get: function () {
          var t = this[$f3aae510e7453dfbef7e11fad90c7908$var$Q];
          return ("production" !== "production" && f(t), $f3aae510e7453dfbef7e11fad90c7908$var$en.get(t, n));
        },
        set: function (t) {
          var r = this[$f3aae510e7453dfbef7e11fad90c7908$var$Q];
          ("production" !== "production" && f(r), $f3aae510e7453dfbef7e11fad90c7908$var$en.set(r, n, t));
        }
      }, r);
    }
    function e(n) {
      for (var t = n.length - 1; t >= 0; t--) {
        var r = n[t][$f3aae510e7453dfbef7e11fad90c7908$var$Q];
        if (!r.P) switch (r.i) {
          case 5:
            a(r) && $f3aae510e7453dfbef7e11fad90c7908$var$k(r);
            break;
          case 4:
            o(r) && $f3aae510e7453dfbef7e11fad90c7908$var$k(r);
        }
      }
    }
    function o(n) {
      for (var t = n.t, r = n.k, e = $f3aae510e7453dfbef7e11fad90c7908$var$nn(r), i = e.length - 1; i >= 0; i--) {
        var o = e[i];
        if (o !== $f3aae510e7453dfbef7e11fad90c7908$var$Q) {
          var a = t[o];
          if (void 0 === a && !$f3aae510e7453dfbef7e11fad90c7908$var$u(t, o)) return !0;
          var f = r[o], s = f && f[$f3aae510e7453dfbef7e11fad90c7908$var$Q];
          if (s ? s.t !== a : !$f3aae510e7453dfbef7e11fad90c7908$var$c(f, a)) return !0;
        }
      }
      var v = !!t[$f3aae510e7453dfbef7e11fad90c7908$var$Q];
      return e.length !== $f3aae510e7453dfbef7e11fad90c7908$var$nn(t).length + (v ? 0 : 1);
    }
    function a(n) {
      var t = n.k;
      if (t.length !== n.t.length) return !0;
      var r = Object.getOwnPropertyDescriptor(t, t.length - 1);
      return !(!r || r.get);
    }
    function f(t) {
      t.O && $f3aae510e7453dfbef7e11fad90c7908$var$n(3, JSON.stringify($f3aae510e7453dfbef7e11fad90c7908$var$p(t)));
    }
    var s = {};
    $f3aae510e7453dfbef7e11fad90c7908$var$m("ES5", {
      J: function (n, t) {
        var e = Array.isArray(n), i = (function (n, t) {
          if (n) {
            for (var e = Array(t.length), i = 0; i < t.length; i++) Object.defineProperty(e, "" + i, r(i, !0));
            return e;
          }
          var o = $f3aae510e7453dfbef7e11fad90c7908$var$tn(t);
          delete o[$f3aae510e7453dfbef7e11fad90c7908$var$Q];
          for (var u = $f3aae510e7453dfbef7e11fad90c7908$var$nn(o), a = 0; a < u.length; a++) {
            var f = u[a];
            o[f] = r(f, n || !!o[f].enumerable);
          }
          return Object.create(Object.getPrototypeOf(t), o);
        })(e, n), o = {
          i: e ? 5 : 4,
          A: t ? t.A : $f3aae510e7453dfbef7e11fad90c7908$var$_(),
          P: !1,
          I: !1,
          D: {},
          l: t,
          t: n,
          k: i,
          o: null,
          O: !1,
          C: !1
        };
        return (Object.defineProperty(i, $f3aae510e7453dfbef7e11fad90c7908$var$Q, {
          value: o,
          writable: !0
        }), i);
      },
      S: function (n, r, o) {
        o ? $f3aae510e7453dfbef7e11fad90c7908$export$isDraft(r) && r[$f3aae510e7453dfbef7e11fad90c7908$var$Q].A === n && e(n.p) : (n.u && (function n(t) {
          if (t && "object" == typeof t) {
            var r = t[$f3aae510e7453dfbef7e11fad90c7908$var$Q];
            if (r) {
              var e = r.t, o = r.k, f = r.D, c = r.i;
              if (4 === c) ($f3aae510e7453dfbef7e11fad90c7908$var$i(o, function (t) {
                t !== $f3aae510e7453dfbef7e11fad90c7908$var$Q && (void 0 !== e[t] || $f3aae510e7453dfbef7e11fad90c7908$var$u(e, t) ? f[t] || n(o[t]) : (f[t] = !0, $f3aae510e7453dfbef7e11fad90c7908$var$k(r)));
              }), $f3aae510e7453dfbef7e11fad90c7908$var$i(e, function (n) {
                void 0 !== o[n] || $f3aae510e7453dfbef7e11fad90c7908$var$u(o, n) || (f[n] = !1, $f3aae510e7453dfbef7e11fad90c7908$var$k(r));
              })); else if (5 === c) {
                if ((a(r) && ($f3aae510e7453dfbef7e11fad90c7908$var$k(r), f.length = !0), o.length < e.length)) for (var s = o.length; s < e.length; s++) f[s] = !1; else for (var v = e.length; v < o.length; v++) f[v] = !0;
                for (var p = Math.min(o.length, e.length), l = 0; l < p; l++) void 0 === f[l] && n(o[l]);
              }
            }
          }
        })(n.p[0]), e(n.p));
      },
      K: function (n) {
        return 4 === n.i ? o(n) : a(n);
      }
    });
  }
  function $f3aae510e7453dfbef7e11fad90c7908$export$enablePatches() {
    function e(n) {
      if (!$f3aae510e7453dfbef7e11fad90c7908$export$isDraftable(n)) return n;
      if (Array.isArray(n)) return n.map(e);
      if ($f3aae510e7453dfbef7e11fad90c7908$var$s(n)) return new Map(Array.from(n.entries()).map(function (n) {
        return [n[0], e(n[1])];
      }));
      if ($f3aae510e7453dfbef7e11fad90c7908$var$v(n)) return new Set(Array.from(n).map(e));
      var t = Object.create(Object.getPrototypeOf(n));
      for (var i in n) t[i] = e(n[i]);
      return ($f3aae510e7453dfbef7e11fad90c7908$var$u(n, $f3aae510e7453dfbef7e11fad90c7908$export$immerable) && (t[$f3aae510e7453dfbef7e11fad90c7908$export$immerable] = n[$f3aae510e7453dfbef7e11fad90c7908$export$immerable]), t);
    }
    function f(n) {
      return $f3aae510e7453dfbef7e11fad90c7908$export$isDraft(n) ? e(n) : n;
    }
    var c = "add";
    $f3aae510e7453dfbef7e11fad90c7908$var$m("Patches", {
      $: function (t, r) {
        return (r.forEach(function (r) {
          for (var i = r.path, u = r.op, f = t, s = 0; s < i.length - 1; s++) {
            var v = $f3aae510e7453dfbef7e11fad90c7908$var$o(f), p = i[s];
            (0 !== v && 1 !== v || "__proto__" !== p && "constructor" !== p || $f3aae510e7453dfbef7e11fad90c7908$var$n(24), "function" == typeof f && "prototype" === p && $f3aae510e7453dfbef7e11fad90c7908$var$n(24), "object" != typeof (f = $f3aae510e7453dfbef7e11fad90c7908$var$a(f, p)) && $f3aae510e7453dfbef7e11fad90c7908$var$n(15, i.join("/")));
          }
          var l = $f3aae510e7453dfbef7e11fad90c7908$var$o(f), d = e(r.value), h = i[i.length - 1];
          switch (u) {
            case "replace":
              switch (l) {
                case 2:
                  return f.set(h, d);
                case 3:
                  $f3aae510e7453dfbef7e11fad90c7908$var$n(16);
                default:
                  return f[h] = d;
              }
            case c:
              switch (l) {
                case 1:
                  return f.splice(h, 0, d);
                case 2:
                  return f.set(h, d);
                case 3:
                  return f.add(d);
                default:
                  return f[h] = d;
              }
            case "remove":
              switch (l) {
                case 1:
                  return f.splice(h, 1);
                case 2:
                  return f.delete(h);
                case 3:
                  return f.delete(r.value);
                default:
                  return delete f[h];
              }
            default:
              $f3aae510e7453dfbef7e11fad90c7908$var$n(17, u);
          }
        }), t);
      },
      R: function (n, t, r, e) {
        switch (n.i) {
          case 0:
          case 4:
          case 2:
            return (function (n, t, r, e) {
              var o = n.t, s = n.o;
              $f3aae510e7453dfbef7e11fad90c7908$var$i(n.D, function (n, i) {
                var v = $f3aae510e7453dfbef7e11fad90c7908$var$a(o, n), p = $f3aae510e7453dfbef7e11fad90c7908$var$a(s, n), l = i ? $f3aae510e7453dfbef7e11fad90c7908$var$u(o, n) ? "replace" : c : "remove";
                if (v !== p || "replace" !== l) {
                  var d = t.concat(n);
                  (r.push("remove" === l ? {
                    op: l,
                    path: d
                  } : {
                    op: l,
                    path: d,
                    value: p
                  }), e.push(l === c ? {
                    op: "remove",
                    path: d
                  } : "remove" === l ? {
                    op: c,
                    path: d,
                    value: f(v)
                  } : {
                    op: "replace",
                    path: d,
                    value: f(v)
                  }));
                }
              });
            })(n, t, r, e);
          case 5:
          case 1:
            return (function (n, t, r, e) {
              var i = n.t, o = n.D, u = n.o;
              if (u.length < i.length) {
                var a = [u, i];
                (i = a[0], u = a[1]);
                var s = [e, r];
                (r = s[0], e = s[1]);
              }
              for (var v = 0; v < i.length; v++) if (o[v] && u[v] !== i[v]) {
                var p = t.concat([v]);
                (r.push({
                  op: "replace",
                  path: p,
                  value: f(u[v])
                }), e.push({
                  op: "replace",
                  path: p,
                  value: f(i[v])
                }));
              }
              for (var l = i.length; l < u.length; l++) {
                var d = t.concat([l]);
                r.push({
                  op: c,
                  path: d,
                  value: f(u[l])
                });
              }
              i.length < u.length && e.push({
                op: "replace",
                path: t.concat(["length"]),
                value: i.length
              });
            })(n, t, r, e);
          case 3:
            return (function (n, t, r, e) {
              var i = n.t, o = n.o, u = 0;
              (i.forEach(function (n) {
                if (!o.has(n)) {
                  var i = t.concat([u]);
                  (r.push({
                    op: "remove",
                    path: i,
                    value: n
                  }), e.unshift({
                    op: c,
                    path: i,
                    value: n
                  }));
                }
                u++;
              }), u = 0, o.forEach(function (n) {
                if (!i.has(n)) {
                  var o = t.concat([u]);
                  (r.push({
                    op: c,
                    path: o,
                    value: n
                  }), e.unshift({
                    op: "remove",
                    path: o,
                    value: n
                  }));
                }
                u++;
              }));
            })(n, t, r, e);
        }
      },
      M: function (n, t, r, e) {
        (r.push({
          op: "replace",
          path: [],
          value: t
        }), e.push({
          op: "replace",
          path: [],
          value: n.t
        }));
      }
    });
  }
  function $f3aae510e7453dfbef7e11fad90c7908$export$enableMapSet() {
    function t(n, t) {
      function r() {
        this.constructor = n;
      }
      (a(n, t), n.prototype = (r.prototype = t.prototype, new r()));
    }
    function e(n) {
      n.o || (n.D = new Map(), n.o = new Map(n.t));
    }
    function o(n) {
      n.o || (n.o = new Set(), n.t.forEach(function (t) {
        if ($f3aae510e7453dfbef7e11fad90c7908$export$isDraftable(t)) {
          var e = $f3aae510e7453dfbef7e11fad90c7908$var$R(n.A.h, t, n);
          (n.p.set(t, e), n.o.add(e));
        } else n.o.add(t);
      }));
    }
    function u(t) {
      t.O && $f3aae510e7453dfbef7e11fad90c7908$var$n(3, JSON.stringify($f3aae510e7453dfbef7e11fad90c7908$var$p(t)));
    }
    var a = function (n, t) {
      return (a = Object.setPrototypeOf || ({
        __proto__: []
      }) instanceof Array && (function (n, t) {
        n.__proto__ = t;
      }) || (function (n, t) {
        for (var r in t) t.hasOwnProperty(r) && (n[r] = t[r]);
      }))(n, t);
    }, f = (function () {
      function n(n, t) {
        return (this[$f3aae510e7453dfbef7e11fad90c7908$var$Q] = {
          i: 2,
          l: t,
          A: t ? t.A : $f3aae510e7453dfbef7e11fad90c7908$var$_(),
          P: !1,
          I: !1,
          o: void 0,
          D: void 0,
          t: n,
          k: this,
          C: !1,
          O: !1
        }, this);
      }
      t(n, Map);
      var o = n.prototype;
      return (Object.defineProperty(o, "size", {
        get: function () {
          return $f3aae510e7453dfbef7e11fad90c7908$var$p(this[$f3aae510e7453dfbef7e11fad90c7908$var$Q]).size;
        }
      }), o.has = function (n) {
        return $f3aae510e7453dfbef7e11fad90c7908$var$p(this[$f3aae510e7453dfbef7e11fad90c7908$var$Q]).has(n);
      }, o.set = function (n, t) {
        var r = this[$f3aae510e7453dfbef7e11fad90c7908$var$Q];
        return (u(r), $f3aae510e7453dfbef7e11fad90c7908$var$p(r).has(n) && $f3aae510e7453dfbef7e11fad90c7908$var$p(r).get(n) === t || (e(r), $f3aae510e7453dfbef7e11fad90c7908$var$k(r), r.D.set(n, !0), r.o.set(n, t), r.D.set(n, !0)), this);
      }, o.delete = function (n) {
        if (!this.has(n)) return !1;
        var t = this[$f3aae510e7453dfbef7e11fad90c7908$var$Q];
        return (u(t), e(t), $f3aae510e7453dfbef7e11fad90c7908$var$k(t), t.D.set(n, !1), t.o.delete(n), !0);
      }, o.clear = function () {
        var n = this[$f3aae510e7453dfbef7e11fad90c7908$var$Q];
        (u(n), $f3aae510e7453dfbef7e11fad90c7908$var$p(n).size && (e(n), $f3aae510e7453dfbef7e11fad90c7908$var$k(n), n.D = new Map(), $f3aae510e7453dfbef7e11fad90c7908$var$i(n.t, function (t) {
          n.D.set(t, !1);
        }), n.o.clear()));
      }, o.forEach = function (n, t) {
        var r = this;
        $f3aae510e7453dfbef7e11fad90c7908$var$p(this[$f3aae510e7453dfbef7e11fad90c7908$var$Q]).forEach(function (e, i) {
          n.call(t, r.get(i), i, r);
        });
      }, o.get = function (n) {
        var t = this[$f3aae510e7453dfbef7e11fad90c7908$var$Q];
        u(t);
        var i = $f3aae510e7453dfbef7e11fad90c7908$var$p(t).get(n);
        if (t.I || !$f3aae510e7453dfbef7e11fad90c7908$export$isDraftable(i)) return i;
        if (i !== t.t.get(n)) return i;
        var o = $f3aae510e7453dfbef7e11fad90c7908$var$R(t.A.h, i, t);
        return (e(t), t.o.set(n, o), o);
      }, o.keys = function () {
        return $f3aae510e7453dfbef7e11fad90c7908$var$p(this[$f3aae510e7453dfbef7e11fad90c7908$var$Q]).keys();
      }, o.values = function () {
        var n, t = this, r = this.keys();
        return ((n = {})[$f3aae510e7453dfbef7e11fad90c7908$var$V] = function () {
          return t.values();
        }, n.next = function () {
          var n = r.next();
          return n.done ? n : {
            done: !1,
            value: t.get(n.value)
          };
        }, n);
      }, o.entries = function () {
        var n, t = this, r = this.keys();
        return ((n = {})[$f3aae510e7453dfbef7e11fad90c7908$var$V] = function () {
          return t.entries();
        }, n.next = function () {
          var n = r.next();
          if (n.done) return n;
          var e = t.get(n.value);
          return {
            done: !1,
            value: [n.value, e]
          };
        }, n);
      }, o[$f3aae510e7453dfbef7e11fad90c7908$var$V] = function () {
        return this.entries();
      }, n);
    })(), c = (function () {
      function n(n, t) {
        return (this[$f3aae510e7453dfbef7e11fad90c7908$var$Q] = {
          i: 3,
          l: t,
          A: t ? t.A : $f3aae510e7453dfbef7e11fad90c7908$var$_(),
          P: !1,
          I: !1,
          o: void 0,
          t: n,
          k: this,
          p: new Map(),
          O: !1,
          C: !1
        }, this);
      }
      t(n, Set);
      var r = n.prototype;
      return (Object.defineProperty(r, "size", {
        get: function () {
          return $f3aae510e7453dfbef7e11fad90c7908$var$p(this[$f3aae510e7453dfbef7e11fad90c7908$var$Q]).size;
        }
      }), r.has = function (n) {
        var t = this[$f3aae510e7453dfbef7e11fad90c7908$var$Q];
        return (u(t), t.o ? !!t.o.has(n) || !(!t.p.has(n) || !t.o.has(t.p.get(n))) : t.t.has(n));
      }, r.add = function (n) {
        var t = this[$f3aae510e7453dfbef7e11fad90c7908$var$Q];
        return (u(t), this.has(n) || (o(t), $f3aae510e7453dfbef7e11fad90c7908$var$k(t), t.o.add(n)), this);
      }, r.delete = function (n) {
        if (!this.has(n)) return !1;
        var t = this[$f3aae510e7453dfbef7e11fad90c7908$var$Q];
        return (u(t), o(t), $f3aae510e7453dfbef7e11fad90c7908$var$k(t), t.o.delete(n) || !!t.p.has(n) && t.o.delete(t.p.get(n)));
      }, r.clear = function () {
        var n = this[$f3aae510e7453dfbef7e11fad90c7908$var$Q];
        (u(n), $f3aae510e7453dfbef7e11fad90c7908$var$p(n).size && (o(n), $f3aae510e7453dfbef7e11fad90c7908$var$k(n), n.o.clear()));
      }, r.values = function () {
        var n = this[$f3aae510e7453dfbef7e11fad90c7908$var$Q];
        return (u(n), o(n), n.o.values());
      }, r.entries = function () {
        var n = this[$f3aae510e7453dfbef7e11fad90c7908$var$Q];
        return (u(n), o(n), n.o.entries());
      }, r.keys = function () {
        return this.values();
      }, r[$f3aae510e7453dfbef7e11fad90c7908$var$V] = function () {
        return this.values();
      }, r.forEach = function (n, t) {
        for (var r = this.values(), e = r.next(); !e.done; ) (n.call(t, e.value, e.value, this), e = r.next());
      }, n);
    })();
    $f3aae510e7453dfbef7e11fad90c7908$var$m("MapSet", {
      N: function (n, t) {
        return new f(n, t);
      },
      T: function (n, t) {
        return new c(n, t);
      }
    });
  }
  function $f3aae510e7453dfbef7e11fad90c7908$export$enableAllPlugins() {
    ($f3aae510e7453dfbef7e11fad90c7908$export$enableES5(), $f3aae510e7453dfbef7e11fad90c7908$export$enableMapSet(), $f3aae510e7453dfbef7e11fad90c7908$export$enablePatches());
  }
  function $f3aae510e7453dfbef7e11fad90c7908$export$castDraft(n) {
    return n;
  }
  function $f3aae510e7453dfbef7e11fad90c7908$export$castImmutable(n) {
    return n;
  }
  var $f3aae510e7453dfbef7e11fad90c7908$var$G, $f3aae510e7453dfbef7e11fad90c7908$var$U, $f3aae510e7453dfbef7e11fad90c7908$var$W = "undefined" != typeof Symbol && "symbol" == typeof Symbol("x"), $f3aae510e7453dfbef7e11fad90c7908$var$X = "undefined" != typeof Map, $f3aae510e7453dfbef7e11fad90c7908$var$q = "undefined" != typeof Set, $f3aae510e7453dfbef7e11fad90c7908$var$B = "undefined" != typeof Proxy && void 0 !== Proxy.revocable && "undefined" != typeof Reflect, $f3aae510e7453dfbef7e11fad90c7908$export$nothing = $f3aae510e7453dfbef7e11fad90c7908$var$W ? Symbol.for("immer-nothing") : (($f3aae510e7453dfbef7e11fad90c7908$var$G = {})["immer-nothing"] = !0, $f3aae510e7453dfbef7e11fad90c7908$var$G), $f3aae510e7453dfbef7e11fad90c7908$export$immerable = $f3aae510e7453dfbef7e11fad90c7908$var$W ? Symbol.for("immer-draftable") : "__$immer_draftable", $f3aae510e7453dfbef7e11fad90c7908$var$Q = $f3aae510e7453dfbef7e11fad90c7908$var$W ? Symbol.for("immer-state") : "__$immer_state", $f3aae510e7453dfbef7e11fad90c7908$var$V = "undefined" != typeof Symbol && Symbol.iterator || "@@iterator", $f3aae510e7453dfbef7e11fad90c7908$var$Y = {
    0: "Illegal state",
    1: "Immer drafts cannot have computed properties",
    2: "This object has been frozen and should not be mutated",
    3: function (n) {
      return "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + n;
    },
    4: "An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",
    5: "Immer forbids circular references",
    6: "The first or second argument to `produce` must be a function",
    7: "The third argument to `produce` must be a function or undefined",
    8: "First argument to `createDraft` must be a plain object, an array, or an immerable object",
    9: "First argument to `finishDraft` must be a draft returned by `createDraft`",
    10: "The given draft is already finalized",
    11: "Object.defineProperty() cannot be used on an Immer draft",
    12: "Object.setPrototypeOf() cannot be used on an Immer draft",
    13: "Immer only supports deleting array indices",
    14: "Immer only supports setting array indices and the 'length' property",
    15: function (n) {
      return "Cannot apply patch, path doesn't resolve: " + n;
    },
    16: 'Sets cannot have "replace" patches.',
    17: function (n) {
      return "Unsupported patch operation: " + n;
    },
    18: function (n) {
      return "The plugin for '" + n + "' has not been loaded into Immer. To enable the plugin, import and call `enable" + n + "()` when initializing your application.";
    },
    20: "Cannot use proxies if Proxy, Proxy.revocable or Reflect are not available",
    21: function (n) {
      return "produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '" + n + "'";
    },
    22: function (n) {
      return "'current' expects a draft, got: " + n;
    },
    23: function (n) {
      return "'original' expects a draft, got: " + n;
    },
    24: "Patching reserved attributes like __proto__, prototype and constructor is not allowed"
  }, $f3aae510e7453dfbef7e11fad90c7908$var$Z = "" + Object.prototype.constructor, $f3aae510e7453dfbef7e11fad90c7908$var$nn = "undefined" != typeof Reflect && Reflect.ownKeys ? Reflect.ownKeys : void 0 !== Object.getOwnPropertySymbols ? function (n) {
    return Object.getOwnPropertyNames(n).concat(Object.getOwnPropertySymbols(n));
  } : Object.getOwnPropertyNames, $f3aae510e7453dfbef7e11fad90c7908$var$tn = Object.getOwnPropertyDescriptors || (function (n) {
    var t = {};
    return ($f3aae510e7453dfbef7e11fad90c7908$var$nn(n).forEach(function (r) {
      t[r] = Object.getOwnPropertyDescriptor(n, r);
    }), t);
  }), $f3aae510e7453dfbef7e11fad90c7908$var$rn = {}, $f3aae510e7453dfbef7e11fad90c7908$var$en = {
    get: function (n, t) {
      if (t === $f3aae510e7453dfbef7e11fad90c7908$var$Q) return n;
      var e = $f3aae510e7453dfbef7e11fad90c7908$var$p(n);
      if (!$f3aae510e7453dfbef7e11fad90c7908$var$u(e, t)) return (function (n, t, r) {
        var e, i = $f3aae510e7453dfbef7e11fad90c7908$var$I(t, r);
        return i ? ("value" in i) ? i.value : null === (e = i.get) || void 0 === e ? void 0 : e.call(n.k) : void 0;
      })(n, e, t);
      var i = e[t];
      return n.I || !$f3aae510e7453dfbef7e11fad90c7908$export$isDraftable(i) ? i : i === $f3aae510e7453dfbef7e11fad90c7908$var$z(n.t, t) ? ($f3aae510e7453dfbef7e11fad90c7908$var$E(n), n.o[t] = $f3aae510e7453dfbef7e11fad90c7908$var$R(n.A.h, i, n)) : i;
    },
    has: function (n, t) {
      return (t in $f3aae510e7453dfbef7e11fad90c7908$var$p(n));
    },
    ownKeys: function (n) {
      return Reflect.ownKeys($f3aae510e7453dfbef7e11fad90c7908$var$p(n));
    },
    set: function (n, t, r) {
      var e = $f3aae510e7453dfbef7e11fad90c7908$var$I($f3aae510e7453dfbef7e11fad90c7908$var$p(n), t);
      if (null == e ? void 0 : e.set) return (e.set.call(n.k, r), !0);
      if (!n.P) {
        var i = $f3aae510e7453dfbef7e11fad90c7908$var$z($f3aae510e7453dfbef7e11fad90c7908$var$p(n), t), o = null == i ? void 0 : i[$f3aae510e7453dfbef7e11fad90c7908$var$Q];
        if (o && o.t === r) return (n.o[t] = r, n.D[t] = !1, !0);
        if ($f3aae510e7453dfbef7e11fad90c7908$var$c(r, i) && (void 0 !== r || $f3aae510e7453dfbef7e11fad90c7908$var$u(n.t, t))) return !0;
        ($f3aae510e7453dfbef7e11fad90c7908$var$E(n), $f3aae510e7453dfbef7e11fad90c7908$var$k(n));
      }
      return n.o[t] === r && "number" != typeof r || (n.o[t] = r, n.D[t] = !0, !0);
    },
    deleteProperty: function (n, t) {
      return (void 0 !== $f3aae510e7453dfbef7e11fad90c7908$var$z(n.t, t) || (t in n.t) ? (n.D[t] = !1, $f3aae510e7453dfbef7e11fad90c7908$var$E(n), $f3aae510e7453dfbef7e11fad90c7908$var$k(n)) : delete n.D[t], n.o && delete n.o[t], !0);
    },
    getOwnPropertyDescriptor: function (n, t) {
      var r = $f3aae510e7453dfbef7e11fad90c7908$var$p(n), e = Reflect.getOwnPropertyDescriptor(r, t);
      return e ? {
        writable: !0,
        configurable: 1 !== n.i || "length" !== t,
        enumerable: e.enumerable,
        value: r[t]
      } : e;
    },
    defineProperty: function () {
      $f3aae510e7453dfbef7e11fad90c7908$var$n(11);
    },
    getPrototypeOf: function (n) {
      return Object.getPrototypeOf(n.t);
    },
    setPrototypeOf: function () {
      $f3aae510e7453dfbef7e11fad90c7908$var$n(12);
    }
  }, $f3aae510e7453dfbef7e11fad90c7908$var$on = {};
  ($f3aae510e7453dfbef7e11fad90c7908$var$i($f3aae510e7453dfbef7e11fad90c7908$var$en, function (n, t) {
    $f3aae510e7453dfbef7e11fad90c7908$var$on[n] = function () {
      return (arguments[0] = arguments[0][0], t.apply(this, arguments));
    };
  }), $f3aae510e7453dfbef7e11fad90c7908$var$on.deleteProperty = function (t, r) {
    return ("production" !== "production" && isNaN(parseInt(r)) && $f3aae510e7453dfbef7e11fad90c7908$var$n(13), $f3aae510e7453dfbef7e11fad90c7908$var$en.deleteProperty.call(this, t[0], r));
  }, $f3aae510e7453dfbef7e11fad90c7908$var$on.set = function (t, r, e) {
    return ("production" !== "production" && "length" !== r && isNaN(parseInt(r)) && $f3aae510e7453dfbef7e11fad90c7908$var$n(14), $f3aae510e7453dfbef7e11fad90c7908$var$en.set.call(this, t[0], r, e, t[0]));
  });
  var $f3aae510e7453dfbef7e11fad90c7908$export$Immer = (function () {
    function e(t) {
      var e = this;
      (this.g = $f3aae510e7453dfbef7e11fad90c7908$var$B, this.F = !0, this.produce = function (t, i, o) {
        if ("function" == typeof t && "function" != typeof i) {
          var u = i;
          i = t;
          var a = e;
          return function (n) {
            var t = this;
            void 0 === n && (n = u);
            for (var r = arguments.length, e = Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++) e[o - 1] = arguments[o];
            return a.produce(n, function (n) {
              var r;
              return (r = i).call.apply(r, [t, n].concat(e));
            });
          };
        }
        var f;
        if (("function" != typeof i && $f3aae510e7453dfbef7e11fad90c7908$var$n(6), void 0 !== o && "function" != typeof o && $f3aae510e7453dfbef7e11fad90c7908$var$n(7), $f3aae510e7453dfbef7e11fad90c7908$export$isDraftable(t))) {
          var c = $f3aae510e7453dfbef7e11fad90c7908$var$w(e), s = $f3aae510e7453dfbef7e11fad90c7908$var$R(e, t, void 0), v = !0;
          try {
            (f = i(s), v = !1);
          } finally {
            v ? $f3aae510e7453dfbef7e11fad90c7908$var$O(c) : $f3aae510e7453dfbef7e11fad90c7908$var$g(c);
          }
          return "undefined" != typeof Promise && f instanceof Promise ? f.then(function (n) {
            return ($f3aae510e7453dfbef7e11fad90c7908$var$j(c, o), $f3aae510e7453dfbef7e11fad90c7908$var$P(n, c));
          }, function (n) {
            throw ($f3aae510e7453dfbef7e11fad90c7908$var$O(c), n);
          }) : ($f3aae510e7453dfbef7e11fad90c7908$var$j(c, o), $f3aae510e7453dfbef7e11fad90c7908$var$P(f, c));
        }
        if (!t || "object" != typeof t) {
          if ((f = i(t)) === $f3aae510e7453dfbef7e11fad90c7908$export$nothing) return;
          return (void 0 === f && (f = t), e.F && $f3aae510e7453dfbef7e11fad90c7908$export$freeze(f, !0), f);
        }
        $f3aae510e7453dfbef7e11fad90c7908$var$n(21, t);
      }, this.produceWithPatches = function (n, t) {
        return "function" == typeof n ? function (t) {
          for (var r = arguments.length, i = Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++) i[o - 1] = arguments[o];
          return e.produceWithPatches(t, function (t) {
            return n.apply(void 0, [t].concat(i));
          });
        } : [e.produce(n, t, function (n, t) {
          (r = n, i = t);
        }), r, i];
        var r, i;
      }, "boolean" == typeof (null == t ? void 0 : t.useProxies) && this.setUseProxies(t.useProxies), "boolean" == typeof (null == t ? void 0 : t.autoFreeze) && this.setAutoFreeze(t.autoFreeze));
    }
    var i = e.prototype;
    return (i.createDraft = function (e) {
      ($f3aae510e7453dfbef7e11fad90c7908$export$isDraftable(e) || $f3aae510e7453dfbef7e11fad90c7908$var$n(8), $f3aae510e7453dfbef7e11fad90c7908$export$isDraft(e) && (e = $f3aae510e7453dfbef7e11fad90c7908$export$current(e)));
      var i = $f3aae510e7453dfbef7e11fad90c7908$var$w(this), o = $f3aae510e7453dfbef7e11fad90c7908$var$R(this, e, void 0);
      return (o[$f3aae510e7453dfbef7e11fad90c7908$var$Q].C = !0, $f3aae510e7453dfbef7e11fad90c7908$var$g(i), o);
    }, i.finishDraft = function (t, r) {
      var e = t && t[$f3aae510e7453dfbef7e11fad90c7908$var$Q];
      "production" !== "production" && (e && e.C || $f3aae510e7453dfbef7e11fad90c7908$var$n(9), e.I && $f3aae510e7453dfbef7e11fad90c7908$var$n(10));
      var i = e.A;
      return ($f3aae510e7453dfbef7e11fad90c7908$var$j(i, r), $f3aae510e7453dfbef7e11fad90c7908$var$P(void 0, i));
    }, i.setAutoFreeze = function (n) {
      this.F = n;
    }, i.setUseProxies = function (t) {
      (t && !$f3aae510e7453dfbef7e11fad90c7908$var$B && $f3aae510e7453dfbef7e11fad90c7908$var$n(20), this.g = t);
    }, i.applyPatches = function (n, r) {
      var e;
      for (e = r.length - 1; e >= 0; e--) {
        var i = r[e];
        if (0 === i.path.length && "replace" === i.op) {
          n = i.value;
          break;
        }
      }
      var o = $f3aae510e7453dfbef7e11fad90c7908$var$b("Patches").$;
      return $f3aae510e7453dfbef7e11fad90c7908$export$isDraft(n) ? o(n, r) : this.produce(n, function (n) {
        return o(n, r.slice(e + 1));
      });
    }, e);
  })(), $f3aae510e7453dfbef7e11fad90c7908$var$an = new $f3aae510e7453dfbef7e11fad90c7908$export$Immer(), $f3aae510e7453dfbef7e11fad90c7908$export$default = $f3aae510e7453dfbef7e11fad90c7908$var$an.produce, $f3aae510e7453dfbef7e11fad90c7908$export$produceWithPatches = $f3aae510e7453dfbef7e11fad90c7908$var$an.produceWithPatches.bind($f3aae510e7453dfbef7e11fad90c7908$var$an), $f3aae510e7453dfbef7e11fad90c7908$export$setAutoFreeze = $f3aae510e7453dfbef7e11fad90c7908$var$an.setAutoFreeze.bind($f3aae510e7453dfbef7e11fad90c7908$var$an), $f3aae510e7453dfbef7e11fad90c7908$export$setUseProxies = $f3aae510e7453dfbef7e11fad90c7908$var$an.setUseProxies.bind($f3aae510e7453dfbef7e11fad90c7908$var$an), $f3aae510e7453dfbef7e11fad90c7908$export$applyPatches = $f3aae510e7453dfbef7e11fad90c7908$var$an.applyPatches.bind($f3aae510e7453dfbef7e11fad90c7908$var$an), $f3aae510e7453dfbef7e11fad90c7908$export$createDraft = $f3aae510e7453dfbef7e11fad90c7908$var$an.createDraft.bind($f3aae510e7453dfbef7e11fad90c7908$var$an), $f3aae510e7453dfbef7e11fad90c7908$export$finishDraft = $f3aae510e7453dfbef7e11fad90c7908$var$an.finishDraft.bind($f3aae510e7453dfbef7e11fad90c7908$var$an);
  function $7bae397c766e976de0fcb749081e316c$var$defaultEqualityCheck(a, b) {
    return a === b;
  }
  function $7bae397c766e976de0fcb749081e316c$var$areArgumentsShallowlyEqual(equalityCheck, prev, next) {
    if (prev === null || next === null || prev.length !== next.length) {
      return false;
    }
    // Do this in a for loop (and not a `forEach` or an `every`) so we can determine equality as fast as possible.
    var length = prev.length;
    for (var i = 0; i < length; i++) {
      if (!equalityCheck(prev[i], next[i])) {
        return false;
      }
    }
    return true;
  }
  function $7bae397c766e976de0fcb749081e316c$export$defaultMemoize(func) {
    var equalityCheck = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : $7bae397c766e976de0fcb749081e316c$var$defaultEqualityCheck;
    var lastArgs = null;
    var lastResult = null;
    // we reference arguments instead of spreading them for performance reasons
    return function () {
      if (!$7bae397c766e976de0fcb749081e316c$var$areArgumentsShallowlyEqual(equalityCheck, lastArgs, arguments)) {
        // apply arguments instead of spreading for performance.
        lastResult = func.apply(null, arguments);
      }
      lastArgs = arguments;
      return lastResult;
    };
  }
  function $7bae397c766e976de0fcb749081e316c$var$getDependencies(funcs) {
    var dependencies = Array.isArray(funcs[0]) ? funcs[0] : funcs;
    if (!dependencies.every(function (dep) {
      return typeof dep === 'function';
    })) {
      var dependencyTypes = dependencies.map(function (dep) {
        return typeof dep;
      }).join(', ');
      throw new Error('Selector creators expect all input-selectors to be functions, ' + ('instead received the following types: [' + dependencyTypes + ']'));
    }
    return dependencies;
  }
  function $7bae397c766e976de0fcb749081e316c$export$createSelectorCreator(memoize) {
    for (var _len = arguments.length, memoizeOptions = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      memoizeOptions[_key - 1] = arguments[_key];
    }
    return function () {
      for (var _len2 = arguments.length, funcs = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        funcs[_key2] = arguments[_key2];
      }
      var recomputations = 0;
      var resultFunc = funcs.pop();
      var dependencies = $7bae397c766e976de0fcb749081e316c$var$getDependencies(funcs);
      var memoizedResultFunc = memoize.apply(undefined, [function () {
        recomputations++;
        // apply arguments instead of spreading for performance.
        return resultFunc.apply(null, arguments);
      }].concat(memoizeOptions));
      // If a selector is called with the exact same arguments we don't need to traverse our dependencies again.
      var selector = memoize(function () {
        var params = [];
        var length = dependencies.length;
        for (var i = 0; i < length; i++) {
          // apply arguments instead of spreading and mutate a local list of params for performance.
          params.push(dependencies[i].apply(null, arguments));
        }
        // apply arguments instead of spreading for performance.
        return memoizedResultFunc.apply(null, params);
      });
      selector.resultFunc = resultFunc;
      selector.dependencies = dependencies;
      selector.recomputations = function () {
        return recomputations;
      };
      selector.resetRecomputations = function () {
        return recomputations = 0;
      };
      return selector;
    };
  }
  var $7bae397c766e976de0fcb749081e316c$export$createSelector = $7bae397c766e976de0fcb749081e316c$export$createSelectorCreator($7bae397c766e976de0fcb749081e316c$export$defaultMemoize);
  function $6f9188ca296e526c31602b784a256f1e$var$createThunkMiddleware(extraArgument) {
    return function (_ref) {
      var dispatch = _ref.dispatch, getState = _ref.getState;
      return function (next) {
        return function (action) {
          if (typeof action === 'function') {
            return action(dispatch, getState, extraArgument);
          }
          return next(action);
        };
      };
    };
  }
  var $6f9188ca296e526c31602b784a256f1e$export$default = $6f9188ca296e526c31602b784a256f1e$var$createThunkMiddleware();
  $6f9188ca296e526c31602b784a256f1e$export$default.withExtraArgument = $6f9188ca296e526c31602b784a256f1e$var$createThunkMiddleware;
  var $a5a79905d7f29b6c9078769d5e01bfa0$var$__extends = undefined && undefined.__extends || (function () {
    var extendStatics = function (d, b) {
      extendStatics = Object.setPrototypeOf || ({
        __proto__: []
      }) instanceof Array && (function (d, b) {
        d.__proto__ = b;
      }) || (function (d, b) {
        for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      });
      return extendStatics(d, b);
    };
    return function (d, b) {
      if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
  })();
  var $a5a79905d7f29b6c9078769d5e01bfa0$var$__generator = undefined && undefined.__generator || (function (thisArg, body) {
    var _ = {
      label: 0,
      sent: function () {
        if (t[0] & 1) throw t[1];
        return t[1];
      },
      trys: [],
      ops: []
    }, f, y, t, g;
    return (g = {
      next: verb(0),
      "throw": verb(1),
      "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
      return this;
    }), g);
    function verb(n) {
      return function (v) {
        return step([n, v]);
      };
    }
    function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (_) try {
        if ((f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)) return t;
        if ((y = 0, t)) op = [op[0] & 2, t.value];
        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;
          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };
          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;
          case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;
          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }
            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            if (t[2]) _.ops.pop();
            _.trys.pop();
            continue;
        }
        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
      if (op[0] & 5) throw op[1];
      return {
        value: op[0] ? op[1] : void 0,
        done: true
      };
    }
  });
  var $a5a79905d7f29b6c9078769d5e01bfa0$var$__spreadArray = undefined && undefined.__spreadArray || (function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; (i++, j++)) to[j] = from[i];
    return to;
  });
  var $a5a79905d7f29b6c9078769d5e01bfa0$var$__defProp = Object.defineProperty;
  var $a5a79905d7f29b6c9078769d5e01bfa0$var$__hasOwnProp = Object.prototype.hasOwnProperty;
  var $a5a79905d7f29b6c9078769d5e01bfa0$var$__getOwnPropSymbols = Object.getOwnPropertySymbols;
  var $a5a79905d7f29b6c9078769d5e01bfa0$var$__propIsEnum = Object.prototype.propertyIsEnumerable;
  var $a5a79905d7f29b6c9078769d5e01bfa0$var$__defNormalProp = function (obj, key, value) {
    return (key in obj) ? $a5a79905d7f29b6c9078769d5e01bfa0$var$__defProp(obj, key, {
      enumerable: true,
      configurable: true,
      writable: true,
      value: value
    }) : obj[key] = value;
  };
  var $a5a79905d7f29b6c9078769d5e01bfa0$var$__objSpread = function (a, b) {
    for (var prop in b || (b = {})) if ($a5a79905d7f29b6c9078769d5e01bfa0$var$__hasOwnProp.call(b, prop)) $a5a79905d7f29b6c9078769d5e01bfa0$var$__defNormalProp(a, prop, b[prop]);
    if ($a5a79905d7f29b6c9078769d5e01bfa0$var$__getOwnPropSymbols) for (var _i = 0, _b = $a5a79905d7f29b6c9078769d5e01bfa0$var$__getOwnPropSymbols(b); _i < _b.length; _i++) {
      var prop = _b[_i];
      if ($a5a79905d7f29b6c9078769d5e01bfa0$var$__propIsEnum.call(b, prop)) $a5a79905d7f29b6c9078769d5e01bfa0$var$__defNormalProp(a, prop, b[prop]);
    }
    return a;
  };
  var $a5a79905d7f29b6c9078769d5e01bfa0$var$__async = function (__this, __arguments, generator) {
    return new Promise(function (resolve, reject) {
      var fulfilled = function (value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      };
      var rejected = function (value) {
        try {
          step(generator.throw(value));
        } catch (e) {
          reject(e);
        }
      };
      var step = function (x) {
        return x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
      };
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };
  var $a5a79905d7f29b6c9078769d5e01bfa0$export$createDraftSafeSelector = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    var selector = $7bae397c766e976de0fcb749081e316c$export$createSelector.apply(void 0, args);
    var wrappedSelector = function (value) {
      var rest = [];
      for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
      }
      return selector.apply(void 0, $a5a79905d7f29b6c9078769d5e01bfa0$var$__spreadArray([$f3aae510e7453dfbef7e11fad90c7908$export$isDraft(value) ? $f3aae510e7453dfbef7e11fad90c7908$export$current(value) : value], rest));
    };
    return wrappedSelector;
  };
  var $a5a79905d7f29b6c9078769d5e01bfa0$var$composeWithDevTools = typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function () {
    if (arguments.length === 0) return void 0;
    if (typeof arguments[0] === "object") return $b81ba44106f6eb2cb6cdf2fb6c2cbde5$export$compose;
    return $b81ba44106f6eb2cb6cdf2fb6c2cbde5$export$compose.apply(null, arguments);
  };
  var $a5a79905d7f29b6c9078769d5e01bfa0$var$devToolsEnhancer = typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__ : function () {
    return function (noop) {
      return noop;
    };
  };
  // src/isPlainObject.ts
  function $a5a79905d7f29b6c9078769d5e01bfa0$export$isPlainObject(value) {
    if (typeof value !== "object" || value === null) return false;
    var proto = value;
    while (Object.getPrototypeOf(proto) !== null) {
      proto = Object.getPrototypeOf(proto);
    }
    return Object.getPrototypeOf(value) === proto;
  }
  // src/utils.ts
  function $a5a79905d7f29b6c9078769d5e01bfa0$var$getTimeMeasureUtils(maxDelay, fnName) {
    var elapsed = 0;
    return {
      measureTime: function (fn) {
        var started = Date.now();
        try {
          return fn();
        } finally {
          var finished = Date.now();
          elapsed += finished - started;
        }
      },
      warnIfExceeded: function () {
        if (elapsed > maxDelay) {
          console.warn(fnName + " took " + elapsed + "ms, which is more than the warning threshold of " + maxDelay + "ms. \nIf your state or actions are very large, you may want to disable the middleware as it might cause too much of a slowdown in development mode. See https://redux-toolkit.js.org/api/getDefaultMiddleware for instructions.\nIt is disabled in production builds, so you don't need to worry about that.");
        }
      }
    };
  }
  var $a5a79905d7f29b6c9078769d5e01bfa0$export$MiddlewareArray = /** @class*/
  (function (_super) {
    $a5a79905d7f29b6c9078769d5e01bfa0$var$__extends(MiddlewareArray, _super);
    function MiddlewareArray() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      var _this = _super.apply(this, args) || this;
      Object.setPrototypeOf(_this, MiddlewareArray.prototype);
      return _this;
    }
    Object.defineProperty(MiddlewareArray, Symbol.species, {
      get: function () {
        return MiddlewareArray;
      },
      enumerable: false,
      configurable: true
    });
    MiddlewareArray.prototype.concat = function () {
      var arr = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        arr[_i] = arguments[_i];
      }
      return _super.prototype.concat.apply(this, arr);
    };
    MiddlewareArray.prototype.prepend = function () {
      var arr = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        arr[_i] = arguments[_i];
      }
      if (arr.length === 1 && Array.isArray(arr[0])) {
        return new (MiddlewareArray.bind.apply(MiddlewareArray, $a5a79905d7f29b6c9078769d5e01bfa0$var$__spreadArray([void 0], arr[0].concat(this))))();
      }
      return new (MiddlewareArray.bind.apply(MiddlewareArray, $a5a79905d7f29b6c9078769d5e01bfa0$var$__spreadArray([void 0], arr.concat(this))))();
    };
    return MiddlewareArray;
  })(Array);
  // src/immutableStateInvariantMiddleware.ts
  var $a5a79905d7f29b6c9078769d5e01bfa0$var$isProduction = "production" === "production";
  var $a5a79905d7f29b6c9078769d5e01bfa0$var$prefix = "Invariant failed";
  function $a5a79905d7f29b6c9078769d5e01bfa0$var$invariant(condition, message) {
    if (condition) {
      return;
    }
    if ($a5a79905d7f29b6c9078769d5e01bfa0$var$isProduction) {
      throw new Error($a5a79905d7f29b6c9078769d5e01bfa0$var$prefix);
    }
    throw new Error($a5a79905d7f29b6c9078769d5e01bfa0$var$prefix + ": " + (message || ""));
  }
  function $a5a79905d7f29b6c9078769d5e01bfa0$var$stringify(obj, serializer, indent, decycler) {
    return JSON.stringify(obj, $a5a79905d7f29b6c9078769d5e01bfa0$var$getSerialize(serializer, decycler), indent);
  }
  function $a5a79905d7f29b6c9078769d5e01bfa0$var$getSerialize(serializer, decycler) {
    var stack = [], keys = [];
    if (!decycler) decycler = function (_, value) {
      if (stack[0] === value) return "[Circular ~]";
      return "[Circular ~." + keys.slice(0, stack.indexOf(value)).join(".") + "]";
    };
    return function (key, value) {
      if (stack.length > 0) {
        var thisPos = stack.indexOf(this);
        ~thisPos ? stack.splice(thisPos + 1) : stack.push(this);
        ~thisPos ? keys.splice(thisPos, Infinity, key) : keys.push(key);
        if (~stack.indexOf(value)) value = decycler.call(this, key, value);
      } else stack.push(value);
      return serializer == null ? value : serializer.call(this, key, value);
    };
  }
  function $a5a79905d7f29b6c9078769d5e01bfa0$export$isImmutableDefault(value) {
    return typeof value !== "object" || value === null || typeof value === "undefined" || Object.isFrozen(value);
  }
  function $a5a79905d7f29b6c9078769d5e01bfa0$var$trackForMutations(isImmutable, ignorePaths, obj) {
    var trackedProperties = $a5a79905d7f29b6c9078769d5e01bfa0$var$trackProperties(isImmutable, ignorePaths, obj);
    return {
      detectMutations: function () {
        return $a5a79905d7f29b6c9078769d5e01bfa0$var$detectMutations(isImmutable, ignorePaths, trackedProperties, obj);
      }
    };
  }
  function $a5a79905d7f29b6c9078769d5e01bfa0$var$trackProperties(isImmutable, ignorePaths, obj, path) {
    if (ignorePaths === void 0) {
      ignorePaths = [];
    }
    if (path === void 0) {
      path = "";
    }
    var tracked = {
      value: obj
    };
    if (!isImmutable(obj)) {
      tracked.children = {};
      for (var key in obj) {
        var childPath = path ? path + "." + key : key;
        if (ignorePaths.length && ignorePaths.indexOf(childPath) !== -1) {
          continue;
        }
        tracked.children[key] = $a5a79905d7f29b6c9078769d5e01bfa0$var$trackProperties(isImmutable, ignorePaths, obj[key], childPath);
      }
    }
    return tracked;
  }
  function $a5a79905d7f29b6c9078769d5e01bfa0$var$detectMutations(isImmutable, ignorePaths, trackedProperty, obj, sameParentRef, path) {
    if (ignorePaths === void 0) {
      ignorePaths = [];
    }
    if (sameParentRef === void 0) {
      sameParentRef = false;
    }
    if (path === void 0) {
      path = "";
    }
    var prevObj = trackedProperty ? trackedProperty.value : void 0;
    var sameRef = prevObj === obj;
    if (sameParentRef && !sameRef && !Number.isNaN(obj)) {
      return {
        wasMutated: true,
        path: path
      };
    }
    if (isImmutable(prevObj) || isImmutable(obj)) {
      return {
        wasMutated: false
      };
    }
    var keysToDetect = {};
    for (var key in trackedProperty.children) {
      keysToDetect[key] = true;
    }
    for (var key in obj) {
      keysToDetect[key] = true;
    }
    for (var key in keysToDetect) {
      var childPath = path ? path + "." + key : key;
      if (ignorePaths.length && ignorePaths.indexOf(childPath) !== -1) {
        continue;
      }
      var result = $a5a79905d7f29b6c9078769d5e01bfa0$var$detectMutations(isImmutable, ignorePaths, trackedProperty.children[key], obj[key], sameRef, childPath);
      if (result.wasMutated) {
        return result;
      }
    }
    return {
      wasMutated: false
    };
  }
  function $a5a79905d7f29b6c9078769d5e01bfa0$export$createImmutableStateInvariantMiddleware(options) {
    if (options === void 0) {
      options = {};
    }
    if ("production" === "production") {
      return function () {
        return function (next) {
          return function (action) {
            return next(action);
          };
        };
      };
    }
    var _b = options.isImmutable, isImmutable = _b === void 0 ? $a5a79905d7f29b6c9078769d5e01bfa0$export$isImmutableDefault : _b, ignoredPaths = options.ignoredPaths, _c = options.warnAfter, warnAfter = _c === void 0 ? 32 : _c, ignore = options.ignore;
    ignoredPaths = ignoredPaths || ignore;
    var track = $a5a79905d7f29b6c9078769d5e01bfa0$var$trackForMutations.bind(null, isImmutable, ignoredPaths);
    return function (_b) {
      var getState = _b.getState;
      var state = getState();
      var tracker = track(state);
      var result;
      return function (next) {
        return function (action) {
          var measureUtils = $a5a79905d7f29b6c9078769d5e01bfa0$var$getTimeMeasureUtils(warnAfter, "ImmutableStateInvariantMiddleware");
          measureUtils.measureTime(function () {
            state = getState();
            result = tracker.detectMutations();
            tracker = track(state);
            $a5a79905d7f29b6c9078769d5e01bfa0$var$invariant(!result.wasMutated, "A state mutation was detected between dispatches, in the path '" + (result.path || "") + "'.  This may cause incorrect behavior. (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)");
          });
          var dispatchedAction = next(action);
          measureUtils.measureTime(function () {
            state = getState();
            result = tracker.detectMutations();
            tracker = track(state);
            result.wasMutated && $a5a79905d7f29b6c9078769d5e01bfa0$var$invariant(!result.wasMutated, "A state mutation was detected inside a dispatch, in the path: " + (result.path || "") + ". Take a look at the reducer(s) handling the action " + $a5a79905d7f29b6c9078769d5e01bfa0$var$stringify(action) + ". (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)");
          });
          measureUtils.warnIfExceeded();
          return dispatchedAction;
        };
      };
    };
  }
  // src/serializableStateInvariantMiddleware.ts
  function $a5a79905d7f29b6c9078769d5e01bfa0$export$isPlain(val) {
    var type = typeof val;
    return type === "undefined" || val === null || type === "string" || type === "boolean" || type === "number" || Array.isArray(val) || $a5a79905d7f29b6c9078769d5e01bfa0$export$isPlainObject(val);
  }
  function $a5a79905d7f29b6c9078769d5e01bfa0$export$findNonSerializableValue(value, path, isSerializable, getEntries, ignoredPaths) {
    if (path === void 0) {
      path = "";
    }
    if (isSerializable === void 0) {
      isSerializable = $a5a79905d7f29b6c9078769d5e01bfa0$export$isPlain;
    }
    if (ignoredPaths === void 0) {
      ignoredPaths = [];
    }
    var foundNestedSerializable;
    if (!isSerializable(value)) {
      return {
        keyPath: path || "<root>",
        value: value
      };
    }
    if (typeof value !== "object" || value === null) {
      return false;
    }
    var entries = getEntries != null ? getEntries(value) : Object.entries(value);
    var hasIgnoredPaths = ignoredPaths.length > 0;
    for (var _i = 0, entries_1 = entries; _i < entries_1.length; _i++) {
      var _b = entries_1[_i], key = _b[0], nestedValue = _b[1];
      var nestedPath = path ? path + "." + key : key;
      if (hasIgnoredPaths && ignoredPaths.indexOf(nestedPath) >= 0) {
        continue;
      }
      if (!isSerializable(nestedValue)) {
        return {
          keyPath: nestedPath,
          value: nestedValue
        };
      }
      if (typeof nestedValue === "object") {
        foundNestedSerializable = $a5a79905d7f29b6c9078769d5e01bfa0$export$findNonSerializableValue(nestedValue, nestedPath, isSerializable, getEntries, ignoredPaths);
        if (foundNestedSerializable) {
          return foundNestedSerializable;
        }
      }
    }
    return false;
  }
  function $a5a79905d7f29b6c9078769d5e01bfa0$export$createSerializableStateInvariantMiddleware(options) {
    if (options === void 0) {
      options = {};
    }
    if ("production" === "production") {
      return function () {
        return function (next) {
          return function (action) {
            return next(action);
          };
        };
      };
    }
    var _b = options.isSerializable, isSerializable = _b === void 0 ? $a5a79905d7f29b6c9078769d5e01bfa0$export$isPlain : _b, getEntries = options.getEntries, _c = options.ignoredActions, ignoredActions = _c === void 0 ? [] : _c, _d = options.ignoredActionPaths, ignoredActionPaths = _d === void 0 ? ["meta.arg", "meta.baseQueryMeta"] : _d, _e = options.ignoredPaths, ignoredPaths = _e === void 0 ? [] : _e, _f = options.warnAfter, warnAfter = _f === void 0 ? 32 : _f, _g = options.ignoreState, ignoreState = _g === void 0 ? false : _g;
    return function (storeAPI) {
      return function (next) {
        return function (action) {
          if (ignoredActions.length && ignoredActions.indexOf(action.type) !== -1) {
            return next(action);
          }
          var measureUtils = $a5a79905d7f29b6c9078769d5e01bfa0$var$getTimeMeasureUtils(warnAfter, "SerializableStateInvariantMiddleware");
          measureUtils.measureTime(function () {
            var foundActionNonSerializableValue = $a5a79905d7f29b6c9078769d5e01bfa0$export$findNonSerializableValue(action, "", isSerializable, getEntries, ignoredActionPaths);
            if (foundActionNonSerializableValue) {
              var keyPath = foundActionNonSerializableValue.keyPath, value = foundActionNonSerializableValue.value;
              console.error("A non-serializable value was detected in an action, in the path: `" + keyPath + "`. Value:", value, "\nTake a look at the logic that dispatched this action: ", action, "\n(See https://redux.js.org/faq/actions#why-should-type-be-a-string-or-at-least-serializable-why-should-my-action-types-be-constants)", "\n(To allow non-serializable values see: https://redux-toolkit.js.org/usage/usage-guide#working-with-non-serializable-data)");
            }
          });
          var result = next(action);
          if (!ignoreState) {
            measureUtils.measureTime(function () {
              var state = storeAPI.getState();
              var foundStateNonSerializableValue = $a5a79905d7f29b6c9078769d5e01bfa0$export$findNonSerializableValue(state, "", isSerializable, getEntries, ignoredPaths);
              if (foundStateNonSerializableValue) {
                var keyPath = foundStateNonSerializableValue.keyPath, value = foundStateNonSerializableValue.value;
                console.error("A non-serializable value was detected in the state, in the path: `" + keyPath + "`. Value:", value, "\nTake a look at the reducer(s) handling this action type: " + action.type + ".\n(See https://redux.js.org/faq/organizing-state#can-i-put-functions-promises-or-other-non-serializable-items-in-my-store-state)");
              }
            });
            measureUtils.warnIfExceeded();
          }
          return result;
        };
      };
    };
  }
  // src/getDefaultMiddleware.ts
  function $a5a79905d7f29b6c9078769d5e01bfa0$var$isBoolean(x) {
    return typeof x === "boolean";
  }
  function $a5a79905d7f29b6c9078769d5e01bfa0$var$curryGetDefaultMiddleware() {
    return function curriedGetDefaultMiddleware(options) {
      return $a5a79905d7f29b6c9078769d5e01bfa0$export$getDefaultMiddleware(options);
    };
  }
  function $a5a79905d7f29b6c9078769d5e01bfa0$export$getDefaultMiddleware(options) {
    if (options === void 0) {
      options = {};
    }
    var _b = options.thunk, thunk = _b === void 0 ? true : _b, _c = options.immutableCheck, immutableCheck = _c === void 0 ? true : _c, _d = options.serializableCheck, serializableCheck = _d === void 0 ? true : _d;
    var middlewareArray = new $a5a79905d7f29b6c9078769d5e01bfa0$export$MiddlewareArray();
    if (thunk) {
      if ($a5a79905d7f29b6c9078769d5e01bfa0$var$isBoolean(thunk)) {
        middlewareArray.push($6f9188ca296e526c31602b784a256f1e$export$default);
      } else {
        middlewareArray.push($6f9188ca296e526c31602b784a256f1e$export$default.withExtraArgument(thunk.extraArgument));
      }
    }
    if ("production" !== "production") {
      if (immutableCheck) {
        var immutableOptions = {};
        if (!$a5a79905d7f29b6c9078769d5e01bfa0$var$isBoolean(immutableCheck)) {
          immutableOptions = immutableCheck;
        }
        middlewareArray.unshift($a5a79905d7f29b6c9078769d5e01bfa0$export$createImmutableStateInvariantMiddleware(immutableOptions));
      }
      if (serializableCheck) {
        var serializableOptions = {};
        if (!$a5a79905d7f29b6c9078769d5e01bfa0$var$isBoolean(serializableCheck)) {
          serializableOptions = serializableCheck;
        }
        middlewareArray.push($a5a79905d7f29b6c9078769d5e01bfa0$export$createSerializableStateInvariantMiddleware(serializableOptions));
      }
    }
    return middlewareArray;
  }
  // src/configureStore.ts
  var $a5a79905d7f29b6c9078769d5e01bfa0$var$IS_PRODUCTION = "production" === "production";
  function $a5a79905d7f29b6c9078769d5e01bfa0$export$configureStore(options) {
    var curriedGetDefaultMiddleware = $a5a79905d7f29b6c9078769d5e01bfa0$var$curryGetDefaultMiddleware();
    var _b = options || ({}), _c = _b.reducer, reducer = _c === void 0 ? void 0 : _c, _d = _b.middleware, middleware = _d === void 0 ? curriedGetDefaultMiddleware() : _d, _e = _b.devTools, devTools = _e === void 0 ? true : _e, _f = _b.preloadedState, preloadedState = _f === void 0 ? void 0 : _f, _g = _b.enhancers, enhancers = _g === void 0 ? void 0 : _g;
    var rootReducer;
    if (typeof reducer === "function") {
      rootReducer = reducer;
    } else if ($a5a79905d7f29b6c9078769d5e01bfa0$export$isPlainObject(reducer)) {
      rootReducer = $b81ba44106f6eb2cb6cdf2fb6c2cbde5$export$combineReducers(reducer);
    } else {
      throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');
    }
    var finalMiddleware = middleware;
    if (typeof finalMiddleware === "function") {
      finalMiddleware = finalMiddleware(curriedGetDefaultMiddleware);
      if (!$a5a79905d7f29b6c9078769d5e01bfa0$var$IS_PRODUCTION && !Array.isArray(finalMiddleware)) {
        throw new Error("when using a middleware builder function, an array of middleware must be returned");
      }
    }
    if (!$a5a79905d7f29b6c9078769d5e01bfa0$var$IS_PRODUCTION && finalMiddleware.some(function (item) {
      return typeof item !== "function";
    })) {
      throw new Error("each middleware provided to configureStore must be a function");
    }
    var middlewareEnhancer = $b81ba44106f6eb2cb6cdf2fb6c2cbde5$export$applyMiddleware.apply(void 0, finalMiddleware);
    var finalCompose = $b81ba44106f6eb2cb6cdf2fb6c2cbde5$export$compose;
    if (devTools) {
      finalCompose = $a5a79905d7f29b6c9078769d5e01bfa0$var$composeWithDevTools($a5a79905d7f29b6c9078769d5e01bfa0$var$__objSpread({
        trace: !$a5a79905d7f29b6c9078769d5e01bfa0$var$IS_PRODUCTION
      }, typeof devTools === "object" && devTools));
    }
    var storeEnhancers = [middlewareEnhancer];
    if (Array.isArray(enhancers)) {
      storeEnhancers = $a5a79905d7f29b6c9078769d5e01bfa0$var$__spreadArray([middlewareEnhancer], enhancers);
    } else if (typeof enhancers === "function") {
      storeEnhancers = enhancers(storeEnhancers);
    }
    var composedEnhancer = finalCompose.apply(void 0, storeEnhancers);
    return $b81ba44106f6eb2cb6cdf2fb6c2cbde5$export$createStore(rootReducer, preloadedState, composedEnhancer);
  }
  // src/createAction.ts
  function $a5a79905d7f29b6c9078769d5e01bfa0$export$createAction(type, prepareAction) {
    function actionCreator() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      if (prepareAction) {
        var prepared = prepareAction.apply(void 0, args);
        if (!prepared) {
          throw new Error("prepareAction did not return an object");
        }
        return $a5a79905d7f29b6c9078769d5e01bfa0$var$__objSpread($a5a79905d7f29b6c9078769d5e01bfa0$var$__objSpread({
          type: type,
          payload: prepared.payload
        }, ("meta" in prepared) && ({
          meta: prepared.meta
        })), ("error" in prepared) && ({
          error: prepared.error
        }));
      }
      return {
        type: type,
        payload: args[0]
      };
    }
    actionCreator.toString = function () {
      return "" + type;
    };
    actionCreator.type = type;
    actionCreator.match = function (action) {
      return action.type === type;
    };
    return actionCreator;
  }
  function $a5a79905d7f29b6c9078769d5e01bfa0$var$isFSA(action) {
    return $a5a79905d7f29b6c9078769d5e01bfa0$export$isPlainObject(action) && typeof action.type === "string" && Object.keys(action).every($a5a79905d7f29b6c9078769d5e01bfa0$var$isValidKey);
  }
  function $a5a79905d7f29b6c9078769d5e01bfa0$var$isValidKey(key) {
    return ["type", "payload", "error", "meta"].indexOf(key) > -1;
  }
  function $a5a79905d7f29b6c9078769d5e01bfa0$export$getType(actionCreator) {
    return "" + actionCreator;
  }
  // src/mapBuilders.ts
  function $a5a79905d7f29b6c9078769d5e01bfa0$var$executeReducerBuilderCallback(builderCallback) {
    var actionsMap = {};
    var actionMatchers = [];
    var defaultCaseReducer;
    var builder = {
      addCase: function (typeOrActionCreator, reducer) {
        if ("production" !== "production") {
          if (actionMatchers.length > 0) {
            throw new Error("`builder.addCase` should only be called before calling `builder.addMatcher`");
          }
          if (defaultCaseReducer) {
            throw new Error("`builder.addCase` should only be called before calling `builder.addDefaultCase`");
          }
        }
        var type = typeof typeOrActionCreator === "string" ? typeOrActionCreator : typeOrActionCreator.type;
        if ((type in actionsMap)) {
          throw new Error("addCase cannot be called with two reducers for the same action type");
        }
        actionsMap[type] = reducer;
        return builder;
      },
      addMatcher: function (matcher, reducer) {
        if ("production" !== "production") {
          if (defaultCaseReducer) {
            throw new Error("`builder.addMatcher` should only be called before calling `builder.addDefaultCase`");
          }
        }
        actionMatchers.push({
          matcher: matcher,
          reducer: reducer
        });
        return builder;
      },
      addDefaultCase: function (reducer) {
        if ("production" !== "production") {
          if (defaultCaseReducer) {
            throw new Error("`builder.addDefaultCase` can only be called once");
          }
        }
        defaultCaseReducer = reducer;
        return builder;
      }
    };
    builderCallback(builder);
    return [actionsMap, actionMatchers, defaultCaseReducer];
  }
  // src/createReducer.ts
  function $a5a79905d7f29b6c9078769d5e01bfa0$export$createReducer(initialState, mapOrBuilderCallback, actionMatchers, defaultCaseReducer) {
    if (actionMatchers === void 0) {
      actionMatchers = [];
    }
    $f3aae510e7453dfbef7e11fad90c7908$export$enableES5();
    var _b = typeof mapOrBuilderCallback === "function" ? $a5a79905d7f29b6c9078769d5e01bfa0$var$executeReducerBuilderCallback(mapOrBuilderCallback) : [mapOrBuilderCallback, actionMatchers, defaultCaseReducer], actionsMap = _b[0], finalActionMatchers = _b[1], finalDefaultCaseReducer = _b[2];
    var frozenInitialState = $f3aae510e7453dfbef7e11fad90c7908$export$default(initialState, function () {});
    return function (state, action) {
      if (state === void 0) {
        state = frozenInitialState;
      }
      var caseReducers = $a5a79905d7f29b6c9078769d5e01bfa0$var$__spreadArray([actionsMap[action.type]], finalActionMatchers.filter(function (_b) {
        var matcher = _b.matcher;
        return matcher(action);
      }).map(function (_b) {
        var reducer = _b.reducer;
        return reducer;
      }));
      if (caseReducers.filter(function (cr) {
        return !!cr;
      }).length === 0) {
        caseReducers = [finalDefaultCaseReducer];
      }
      return caseReducers.reduce(function (previousState, caseReducer) {
        if (caseReducer) {
          if ($f3aae510e7453dfbef7e11fad90c7908$export$isDraft(previousState)) {
            var draft = previousState;
            var result = caseReducer(draft, action);
            if (typeof result === "undefined") {
              return previousState;
            }
            return result;
          } else if (!$f3aae510e7453dfbef7e11fad90c7908$export$isDraftable(previousState)) {
            var result = caseReducer(previousState, action);
            if (typeof result === "undefined") {
              if (previousState === null) {
                return previousState;
              }
              throw Error("A case reducer on a non-draftable value must not return undefined");
            }
            return result;
          } else {
            return $f3aae510e7453dfbef7e11fad90c7908$export$default(previousState, function (draft) {
              return caseReducer(draft, action);
            });
          }
        }
        return previousState;
      }, state);
    };
  }
  // src/createSlice.ts
  function $a5a79905d7f29b6c9078769d5e01bfa0$var$getType2(slice, actionKey) {
    return slice + "/" + actionKey;
  }
  function $a5a79905d7f29b6c9078769d5e01bfa0$export$createSlice(options) {
    var name = options.name, initialState = options.initialState;
    if (!name) {
      throw new Error("`name` is a required option for createSlice");
    }
    var reducers = options.reducers || ({});
    var _b = typeof options.extraReducers === "function" ? $a5a79905d7f29b6c9078769d5e01bfa0$var$executeReducerBuilderCallback(options.extraReducers) : [options.extraReducers], _c = _b[0], extraReducers = _c === void 0 ? {} : _c, _d = _b[1], actionMatchers = _d === void 0 ? [] : _d, _e = _b[2], defaultCaseReducer = _e === void 0 ? void 0 : _e;
    var reducerNames = Object.keys(reducers);
    var sliceCaseReducersByName = {};
    var sliceCaseReducersByType = {};
    var actionCreators = {};
    reducerNames.forEach(function (reducerName) {
      var maybeReducerWithPrepare = reducers[reducerName];
      var type = $a5a79905d7f29b6c9078769d5e01bfa0$var$getType2(name, reducerName);
      var caseReducer;
      var prepareCallback;
      if (("reducer" in maybeReducerWithPrepare)) {
        caseReducer = maybeReducerWithPrepare.reducer;
        prepareCallback = maybeReducerWithPrepare.prepare;
      } else {
        caseReducer = maybeReducerWithPrepare;
      }
      sliceCaseReducersByName[reducerName] = caseReducer;
      sliceCaseReducersByType[type] = caseReducer;
      actionCreators[reducerName] = prepareCallback ? $a5a79905d7f29b6c9078769d5e01bfa0$export$createAction(type, prepareCallback) : $a5a79905d7f29b6c9078769d5e01bfa0$export$createAction(type);
    });
    var finalCaseReducers = $a5a79905d7f29b6c9078769d5e01bfa0$var$__objSpread($a5a79905d7f29b6c9078769d5e01bfa0$var$__objSpread({}, extraReducers), sliceCaseReducersByType);
    var reducer = $a5a79905d7f29b6c9078769d5e01bfa0$export$createReducer(initialState, finalCaseReducers, actionMatchers, defaultCaseReducer);
    return {
      name: name,
      reducer: reducer,
      actions: actionCreators,
      caseReducers: sliceCaseReducersByName
    };
  }
  // src/entities/entity_state.ts
  function $a5a79905d7f29b6c9078769d5e01bfa0$var$getInitialEntityState() {
    return {
      ids: [],
      entities: {}
    };
  }
  function $a5a79905d7f29b6c9078769d5e01bfa0$var$createInitialStateFactory() {
    function getInitialState(additionalState) {
      if (additionalState === void 0) {
        additionalState = {};
      }
      return Object.assign($a5a79905d7f29b6c9078769d5e01bfa0$var$getInitialEntityState(), additionalState);
    }
    return {
      getInitialState: getInitialState
    };
  }
  // src/entities/state_selectors.ts
  function $a5a79905d7f29b6c9078769d5e01bfa0$var$createSelectorsFactory() {
    function getSelectors(selectState) {
      var selectIds = function (state) {
        return state.ids;
      };
      var selectEntities = function (state) {
        return state.entities;
      };
      var selectAll = $a5a79905d7f29b6c9078769d5e01bfa0$export$createDraftSafeSelector(selectIds, selectEntities, function (ids, entities) {
        return ids.map(function (id) {
          return entities[id];
        });
      });
      var selectId = function (_, id) {
        return id;
      };
      var selectById = function (entities, id) {
        return entities[id];
      };
      var selectTotal = $a5a79905d7f29b6c9078769d5e01bfa0$export$createDraftSafeSelector(selectIds, function (ids) {
        return ids.length;
      });
      if (!selectState) {
        return {
          selectIds: selectIds,
          selectEntities: selectEntities,
          selectAll: selectAll,
          selectTotal: selectTotal,
          selectById: $a5a79905d7f29b6c9078769d5e01bfa0$export$createDraftSafeSelector(selectEntities, selectId, selectById)
        };
      }
      var selectGlobalizedEntities = $a5a79905d7f29b6c9078769d5e01bfa0$export$createDraftSafeSelector(selectState, selectEntities);
      return {
        selectIds: $a5a79905d7f29b6c9078769d5e01bfa0$export$createDraftSafeSelector(selectState, selectIds),
        selectEntities: selectGlobalizedEntities,
        selectAll: $a5a79905d7f29b6c9078769d5e01bfa0$export$createDraftSafeSelector(selectState, selectAll),
        selectTotal: $a5a79905d7f29b6c9078769d5e01bfa0$export$createDraftSafeSelector(selectState, selectTotal),
        selectById: $a5a79905d7f29b6c9078769d5e01bfa0$export$createDraftSafeSelector(selectGlobalizedEntities, selectId, selectById)
      };
    }
    return {
      getSelectors: getSelectors
    };
  }
  function $a5a79905d7f29b6c9078769d5e01bfa0$var$createSingleArgumentStateOperator(mutator) {
    var operator = $a5a79905d7f29b6c9078769d5e01bfa0$var$createStateOperator(function (_, state) {
      return mutator(state);
    });
    return function operation(state) {
      return operator(state, void 0);
    };
  }
  function $a5a79905d7f29b6c9078769d5e01bfa0$var$createStateOperator(mutator) {
    return function operation(state, arg) {
      function isPayloadActionArgument(arg2) {
        return $a5a79905d7f29b6c9078769d5e01bfa0$var$isFSA(arg2);
      }
      var runMutator = function (draft) {
        if (isPayloadActionArgument(arg)) {
          mutator(arg.payload, draft);
        } else {
          mutator(arg, draft);
        }
      };
      if ($f3aae510e7453dfbef7e11fad90c7908$export$isDraft(state)) {
        runMutator(state);
        return state;
      } else {
        return $f3aae510e7453dfbef7e11fad90c7908$export$default(state, runMutator);
      }
    };
  }
  // src/entities/utils.ts
  function $a5a79905d7f29b6c9078769d5e01bfa0$var$selectIdValue(entity, selectId) {
    var key = selectId(entity);
    if ("production" !== "production" && key === void 0) {
      console.warn("The entity passed to the `selectId` implementation returned undefined.", "You should probably provide your own `selectId` implementation.", "The entity that was passed:", entity, "The `selectId` implementation:", selectId.toString());
    }
    return key;
  }
  function $a5a79905d7f29b6c9078769d5e01bfa0$var$ensureEntitiesArray(entities) {
    if (!Array.isArray(entities)) {
      entities = Object.values(entities);
    }
    return entities;
  }
  function $a5a79905d7f29b6c9078769d5e01bfa0$var$splitAddedUpdatedEntities(newEntities, selectId, state) {
    newEntities = $a5a79905d7f29b6c9078769d5e01bfa0$var$ensureEntitiesArray(newEntities);
    var added = [];
    var updated = [];
    for (var _i = 0, newEntities_1 = newEntities; _i < newEntities_1.length; _i++) {
      var entity = newEntities_1[_i];
      var id = $a5a79905d7f29b6c9078769d5e01bfa0$var$selectIdValue(entity, selectId);
      if ((id in state.entities)) {
        updated.push({
          id: id,
          changes: entity
        });
      } else {
        added.push(entity);
      }
    }
    return [added, updated];
  }
  // src/entities/unsorted_state_adapter.ts
  function $a5a79905d7f29b6c9078769d5e01bfa0$var$createUnsortedStateAdapter(selectId) {
    function addOneMutably(entity, state) {
      var key = $a5a79905d7f29b6c9078769d5e01bfa0$var$selectIdValue(entity, selectId);
      if ((key in state.entities)) {
        return;
      }
      state.ids.push(key);
      state.entities[key] = entity;
    }
    function addManyMutably(newEntities, state) {
      newEntities = $a5a79905d7f29b6c9078769d5e01bfa0$var$ensureEntitiesArray(newEntities);
      for (var _i = 0, newEntities_2 = newEntities; _i < newEntities_2.length; _i++) {
        var entity = newEntities_2[_i];
        addOneMutably(entity, state);
      }
    }
    function setOneMutably(entity, state) {
      var key = $a5a79905d7f29b6c9078769d5e01bfa0$var$selectIdValue(entity, selectId);
      if (!((key in state.entities))) {
        state.ids.push(key);
      }
      state.entities[key] = entity;
    }
    function setManyMutably(newEntities, state) {
      newEntities = $a5a79905d7f29b6c9078769d5e01bfa0$var$ensureEntitiesArray(newEntities);
      for (var _i = 0, newEntities_3 = newEntities; _i < newEntities_3.length; _i++) {
        var entity = newEntities_3[_i];
        setOneMutably(entity, state);
      }
    }
    function setAllMutably(newEntities, state) {
      newEntities = $a5a79905d7f29b6c9078769d5e01bfa0$var$ensureEntitiesArray(newEntities);
      state.ids = [];
      state.entities = {};
      addManyMutably(newEntities, state);
    }
    function removeOneMutably(key, state) {
      return removeManyMutably([key], state);
    }
    function removeManyMutably(keys, state) {
      var didMutate = false;
      keys.forEach(function (key) {
        if ((key in state.entities)) {
          delete state.entities[key];
          didMutate = true;
        }
      });
      if (didMutate) {
        state.ids = state.ids.filter(function (id) {
          return (id in state.entities);
        });
      }
    }
    function removeAllMutably(state) {
      Object.assign(state, {
        ids: [],
        entities: {}
      });
    }
    function takeNewKey(keys, update, state) {
      var original2 = state.entities[update.id];
      var updated = Object.assign({}, original2, update.changes);
      var newKey = $a5a79905d7f29b6c9078769d5e01bfa0$var$selectIdValue(updated, selectId);
      var hasNewKey = newKey !== update.id;
      if (hasNewKey) {
        keys[update.id] = newKey;
        delete state.entities[update.id];
      }
      state.entities[newKey] = updated;
      return hasNewKey;
    }
    function updateOneMutably(update, state) {
      return updateManyMutably([update], state);
    }
    function updateManyMutably(updates, state) {
      var newKeys = {};
      var updatesPerEntity = {};
      updates.forEach(function (update) {
        if ((update.id in state.entities)) {
          updatesPerEntity[update.id] = {
            id: update.id,
            changes: $a5a79905d7f29b6c9078769d5e01bfa0$var$__objSpread($a5a79905d7f29b6c9078769d5e01bfa0$var$__objSpread({}, updatesPerEntity[update.id] ? updatesPerEntity[update.id].changes : null), update.changes)
          };
        }
      });
      updates = Object.values(updatesPerEntity);
      var didMutateEntities = updates.length > 0;
      if (didMutateEntities) {
        var didMutateIds = updates.filter(function (update) {
          return takeNewKey(newKeys, update, state);
        }).length > 0;
        if (didMutateIds) {
          state.ids = state.ids.map(function (id) {
            return newKeys[id] || id;
          });
        }
      }
    }
    function upsertOneMutably(entity, state) {
      return upsertManyMutably([entity], state);
    }
    function upsertManyMutably(newEntities, state) {
      var _b = $a5a79905d7f29b6c9078769d5e01bfa0$var$splitAddedUpdatedEntities(newEntities, selectId, state), added = _b[0], updated = _b[1];
      updateManyMutably(updated, state);
      addManyMutably(added, state);
    }
    return {
      removeAll: $a5a79905d7f29b6c9078769d5e01bfa0$var$createSingleArgumentStateOperator(removeAllMutably),
      addOne: $a5a79905d7f29b6c9078769d5e01bfa0$var$createStateOperator(addOneMutably),
      addMany: $a5a79905d7f29b6c9078769d5e01bfa0$var$createStateOperator(addManyMutably),
      setOne: $a5a79905d7f29b6c9078769d5e01bfa0$var$createStateOperator(setOneMutably),
      setMany: $a5a79905d7f29b6c9078769d5e01bfa0$var$createStateOperator(setManyMutably),
      setAll: $a5a79905d7f29b6c9078769d5e01bfa0$var$createStateOperator(setAllMutably),
      updateOne: $a5a79905d7f29b6c9078769d5e01bfa0$var$createStateOperator(updateOneMutably),
      updateMany: $a5a79905d7f29b6c9078769d5e01bfa0$var$createStateOperator(updateManyMutably),
      upsertOne: $a5a79905d7f29b6c9078769d5e01bfa0$var$createStateOperator(upsertOneMutably),
      upsertMany: $a5a79905d7f29b6c9078769d5e01bfa0$var$createStateOperator(upsertManyMutably),
      removeOne: $a5a79905d7f29b6c9078769d5e01bfa0$var$createStateOperator(removeOneMutably),
      removeMany: $a5a79905d7f29b6c9078769d5e01bfa0$var$createStateOperator(removeManyMutably)
    };
  }
  // src/entities/sorted_state_adapter.ts
  function $a5a79905d7f29b6c9078769d5e01bfa0$var$createSortedStateAdapter(selectId, sort) {
    var _b = $a5a79905d7f29b6c9078769d5e01bfa0$var$createUnsortedStateAdapter(selectId), removeOne = _b.removeOne, removeMany = _b.removeMany, removeAll = _b.removeAll;
    function addOneMutably(entity, state) {
      return addManyMutably([entity], state);
    }
    function addManyMutably(newEntities, state) {
      newEntities = $a5a79905d7f29b6c9078769d5e01bfa0$var$ensureEntitiesArray(newEntities);
      var models = newEntities.filter(function (model) {
        return !(($a5a79905d7f29b6c9078769d5e01bfa0$var$selectIdValue(model, selectId) in state.entities));
      });
      if (models.length !== 0) {
        merge(models, state);
      }
    }
    function setOneMutably(entity, state) {
      return setManyMutably([entity], state);
    }
    function setManyMutably(newEntities, state) {
      newEntities = $a5a79905d7f29b6c9078769d5e01bfa0$var$ensureEntitiesArray(newEntities);
      if (newEntities.length !== 0) {
        merge(newEntities, state);
      }
    }
    function setAllMutably(newEntities, state) {
      newEntities = $a5a79905d7f29b6c9078769d5e01bfa0$var$ensureEntitiesArray(newEntities);
      state.entities = {};
      state.ids = [];
      addManyMutably(newEntities, state);
    }
    function updateOneMutably(update, state) {
      return updateManyMutably([update], state);
    }
    function takeUpdatedModel(models, update, state) {
      if (!((update.id in state.entities))) {
        return false;
      }
      var original2 = state.entities[update.id];
      var updated = Object.assign({}, original2, update.changes);
      var newKey = $a5a79905d7f29b6c9078769d5e01bfa0$var$selectIdValue(updated, selectId);
      delete state.entities[update.id];
      models.push(updated);
      return newKey !== update.id;
    }
    function updateManyMutably(updates, state) {
      var models = [];
      updates.forEach(function (update) {
        return takeUpdatedModel(models, update, state);
      });
      if (models.length !== 0) {
        merge(models, state);
      }
    }
    function upsertOneMutably(entity, state) {
      return upsertManyMutably([entity], state);
    }
    function upsertManyMutably(newEntities, state) {
      var _b = $a5a79905d7f29b6c9078769d5e01bfa0$var$splitAddedUpdatedEntities(newEntities, selectId, state), added = _b[0], updated = _b[1];
      updateManyMutably(updated, state);
      addManyMutably(added, state);
    }
    function areArraysEqual(a, b) {
      if (a.length !== b.length) {
        return false;
      }
      for (var i = 0; i < a.length && i < b.length; i++) {
        if (a[i] === b[i]) {
          continue;
        }
        return false;
      }
      return true;
    }
    function merge(models, state) {
      models.forEach(function (model) {
        state.entities[selectId(model)] = model;
      });
      var allEntities = Object.values(state.entities);
      allEntities.sort(sort);
      var newSortedIds = allEntities.map(selectId);
      var ids = state.ids;
      if (!areArraysEqual(ids, newSortedIds)) {
        state.ids = newSortedIds;
      }
    }
    return {
      removeOne: removeOne,
      removeMany: removeMany,
      removeAll: removeAll,
      addOne: $a5a79905d7f29b6c9078769d5e01bfa0$var$createStateOperator(addOneMutably),
      updateOne: $a5a79905d7f29b6c9078769d5e01bfa0$var$createStateOperator(updateOneMutably),
      upsertOne: $a5a79905d7f29b6c9078769d5e01bfa0$var$createStateOperator(upsertOneMutably),
      setOne: $a5a79905d7f29b6c9078769d5e01bfa0$var$createStateOperator(setOneMutably),
      setMany: $a5a79905d7f29b6c9078769d5e01bfa0$var$createStateOperator(setManyMutably),
      setAll: $a5a79905d7f29b6c9078769d5e01bfa0$var$createStateOperator(setAllMutably),
      addMany: $a5a79905d7f29b6c9078769d5e01bfa0$var$createStateOperator(addManyMutably),
      updateMany: $a5a79905d7f29b6c9078769d5e01bfa0$var$createStateOperator(updateManyMutably),
      upsertMany: $a5a79905d7f29b6c9078769d5e01bfa0$var$createStateOperator(upsertManyMutably)
    };
  }
  // src/entities/create_adapter.ts
  function $a5a79905d7f29b6c9078769d5e01bfa0$export$createEntityAdapter(options) {
    if (options === void 0) {
      options = {};
    }
    var _b = $a5a79905d7f29b6c9078769d5e01bfa0$var$__objSpread({
      sortComparer: false,
      selectId: function (instance) {
        return instance.id;
      }
    }, options), selectId = _b.selectId, sortComparer = _b.sortComparer;
    var stateFactory = $a5a79905d7f29b6c9078769d5e01bfa0$var$createInitialStateFactory();
    var selectorsFactory = $a5a79905d7f29b6c9078769d5e01bfa0$var$createSelectorsFactory();
    var stateAdapter = sortComparer ? $a5a79905d7f29b6c9078769d5e01bfa0$var$createSortedStateAdapter(selectId, sortComparer) : $a5a79905d7f29b6c9078769d5e01bfa0$var$createUnsortedStateAdapter(selectId);
    return $a5a79905d7f29b6c9078769d5e01bfa0$var$__objSpread($a5a79905d7f29b6c9078769d5e01bfa0$var$__objSpread($a5a79905d7f29b6c9078769d5e01bfa0$var$__objSpread({
      selectId: selectId,
      sortComparer: sortComparer
    }, stateFactory), selectorsFactory), stateAdapter);
  }
  // src/nanoid.ts
  var $a5a79905d7f29b6c9078769d5e01bfa0$var$urlAlphabet = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW";
  var $a5a79905d7f29b6c9078769d5e01bfa0$export$nanoid = function (size) {
    if (size === void 0) {
      size = 21;
    }
    var id = "";
    var i = size;
    while (i--) {
      id += $a5a79905d7f29b6c9078769d5e01bfa0$var$urlAlphabet[Math.random() * 64 | 0];
    }
    return id;
  };
  // src/createAsyncThunk.ts
  var $a5a79905d7f29b6c9078769d5e01bfa0$var$commonProperties = ["name", "message", "stack", "code"];
  var $a5a79905d7f29b6c9078769d5e01bfa0$var$RejectWithValue = /** @class*/
  (function () {
    function RejectWithValue(payload, meta) {
      this.payload = payload;
      this.meta = meta;
    }
    return RejectWithValue;
  })();
  var $a5a79905d7f29b6c9078769d5e01bfa0$var$FulfillWithMeta = /** @class*/
  (function () {
    function FulfillWithMeta(payload, meta) {
      this.payload = payload;
      this.meta = meta;
    }
    return FulfillWithMeta;
  })();
  var $a5a79905d7f29b6c9078769d5e01bfa0$export$miniSerializeError = function (value) {
    if (typeof value === "object" && value !== null) {
      var simpleError = {};
      for (var _i = 0, commonProperties_1 = $a5a79905d7f29b6c9078769d5e01bfa0$var$commonProperties; _i < commonProperties_1.length; _i++) {
        var property = commonProperties_1[_i];
        if (typeof value[property] === "string") {
          simpleError[property] = value[property];
        }
      }
      return simpleError;
    }
    return {
      message: String(value)
    };
  };
  function $a5a79905d7f29b6c9078769d5e01bfa0$export$createAsyncThunk(typePrefix, payloadCreator, options) {
    var fulfilled = $a5a79905d7f29b6c9078769d5e01bfa0$export$createAction(typePrefix + "/fulfilled", function (payload, requestId, arg, meta) {
      return {
        payload: payload,
        meta: $a5a79905d7f29b6c9078769d5e01bfa0$var$__objSpread($a5a79905d7f29b6c9078769d5e01bfa0$var$__objSpread({}, meta || ({})), {
          arg: arg,
          requestId: requestId,
          requestStatus: "fulfilled"
        })
      };
    });
    var pending = $a5a79905d7f29b6c9078769d5e01bfa0$export$createAction(typePrefix + "/pending", function (requestId, arg, meta) {
      return {
        payload: void 0,
        meta: $a5a79905d7f29b6c9078769d5e01bfa0$var$__objSpread($a5a79905d7f29b6c9078769d5e01bfa0$var$__objSpread({}, meta || ({})), {
          arg: arg,
          requestId: requestId,
          requestStatus: "pending"
        })
      };
    });
    var rejected = $a5a79905d7f29b6c9078769d5e01bfa0$export$createAction(typePrefix + "/rejected", function (error, requestId, arg, payload, meta) {
      return {
        payload: payload,
        error: (options && options.serializeError || $a5a79905d7f29b6c9078769d5e01bfa0$export$miniSerializeError)(error || "Rejected"),
        meta: $a5a79905d7f29b6c9078769d5e01bfa0$var$__objSpread($a5a79905d7f29b6c9078769d5e01bfa0$var$__objSpread({}, meta || ({})), {
          arg: arg,
          requestId: requestId,
          rejectedWithValue: !!payload,
          requestStatus: "rejected",
          aborted: (error == null ? void 0 : error.name) === "AbortError",
          condition: (error == null ? void 0 : error.name) === "ConditionError"
        })
      };
    });
    var displayedWarning = false;
    var AC = typeof AbortController !== "undefined" ? AbortController : /** @class*/
    (function () {
      function class_1() {
        this.signal = {
          aborted: false,
          addEventListener: function () {},
          dispatchEvent: function () {
            return false;
          },
          onabort: function () {},
          removeEventListener: function () {}
        };
      }
      class_1.prototype.abort = function () {
        if ("production" !== "production") {
          if (!displayedWarning) {
            displayedWarning = true;
            console.info("This platform does not implement AbortController. \nIf you want to use the AbortController to react to `abort` events, please consider importing a polyfill like 'abortcontroller-polyfill/dist/abortcontroller-polyfill-only'.");
          }
        }
      };
      return class_1;
    })();
    function actionCreator(arg) {
      return function (dispatch, getState, extra) {
        var _a;
        var requestId = ((_a = options == null ? void 0 : options.idGenerator) != null ? _a : $a5a79905d7f29b6c9078769d5e01bfa0$export$nanoid)();
        var abortController = new AC();
        var abortReason;
        var abortedPromise = new Promise(function (_, reject) {
          return abortController.signal.addEventListener("abort", function () {
            return reject({
              name: "AbortError",
              message: abortReason || "Aborted"
            });
          });
        });
        var started = false;
        function abort(reason) {
          if (started) {
            abortReason = reason;
            abortController.abort();
          }
        }
        var promise = (function () {
          return $a5a79905d7f29b6c9078769d5e01bfa0$var$__async(this, null, function () {
            var _a2, finalAction, err_1, skipDispatch;
            return $a5a79905d7f29b6c9078769d5e01bfa0$var$__generator(this, function (_b) {
              switch (_b.label) {
                case 0:
                  _b.trys.push([0, 2, , 3]);
                  if (options && options.condition && options.condition(arg, {
                    getState: getState,
                    extra: extra
                  }) === false) {
                    throw {
                      name: "ConditionError",
                      message: "Aborted due to condition callback returning false."
                    };
                  }
                  started = true;
                  dispatch(pending(requestId, arg, (_a2 = options == null ? void 0 : options.getPendingMeta) == null ? void 0 : _a2.call(options, {
                    requestId: requestId,
                    arg: arg
                  }, {
                    getState: getState,
                    extra: extra
                  })));
                  return [4, /*yield*/
                  Promise.race([abortedPromise, Promise.resolve(payloadCreator(arg, {
                    dispatch: dispatch,
                    getState: getState,
                    extra: extra,
                    requestId: requestId,
                    signal: abortController.signal,
                    rejectWithValue: function (value, meta) {
                      return new $a5a79905d7f29b6c9078769d5e01bfa0$var$RejectWithValue(value, meta);
                    },
                    fulfillWithValue: function (value, meta) {
                      return new $a5a79905d7f29b6c9078769d5e01bfa0$var$FulfillWithMeta(value, meta);
                    }
                  })).then(function (result) {
                    if (result instanceof $a5a79905d7f29b6c9078769d5e01bfa0$var$RejectWithValue) {
                      throw result;
                    }
                    if (result instanceof $a5a79905d7f29b6c9078769d5e01bfa0$var$FulfillWithMeta) {
                      return fulfilled(result.payload, requestId, arg, result.meta);
                    }
                    return fulfilled(result, requestId, arg);
                  })])];
                case 1:
                  finalAction = _b.sent();
                  return [3, /*break*/
                  3];
                case 2:
                  err_1 = _b.sent();
                  finalAction = err_1 instanceof $a5a79905d7f29b6c9078769d5e01bfa0$var$RejectWithValue ? rejected(null, requestId, arg, err_1.payload, err_1.meta) : rejected(err_1, requestId, arg);
                  return [3, /*break*/
                  3];
                case 3:
                  skipDispatch = options && !options.dispatchConditionRejection && rejected.match(finalAction) && finalAction.meta.condition;
                  if (!skipDispatch) {
                    dispatch(finalAction);
                  }
                  return [2, /*return*/
                  finalAction];
              }
            });
          });
        })();
        return Object.assign(promise, {
          abort: abort,
          requestId: requestId,
          arg: arg,
          unwrap: function () {
            return promise.then($a5a79905d7f29b6c9078769d5e01bfa0$export$unwrapResult);
          }
        });
      };
    }
    return Object.assign(actionCreator, {
      pending: pending,
      rejected: rejected,
      fulfilled: fulfilled,
      typePrefix: typePrefix
    });
  }
  function $a5a79905d7f29b6c9078769d5e01bfa0$export$unwrapResult(action) {
    if (action.meta && action.meta.rejectedWithValue) {
      throw action.payload;
    }
    if (action.error) {
      throw action.error;
    }
    return action.payload;
  }
  // src/tsHelpers.ts
  var $a5a79905d7f29b6c9078769d5e01bfa0$var$hasMatchFunction = function (v) {
    return v && typeof v.match === "function";
  };
  // src/matchers.ts
  var $a5a79905d7f29b6c9078769d5e01bfa0$var$matches = function (matcher, action) {
    if ($a5a79905d7f29b6c9078769d5e01bfa0$var$hasMatchFunction(matcher)) {
      return matcher.match(action);
    } else {
      return matcher(action);
    }
  };
  function $a5a79905d7f29b6c9078769d5e01bfa0$export$isAnyOf() {
    var matchers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      matchers[_i] = arguments[_i];
    }
    return function (action) {
      return matchers.some(function (matcher) {
        return $a5a79905d7f29b6c9078769d5e01bfa0$var$matches(matcher, action);
      });
    };
  }
  function $a5a79905d7f29b6c9078769d5e01bfa0$export$isAllOf() {
    var matchers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      matchers[_i] = arguments[_i];
    }
    return function (action) {
      return matchers.every(function (matcher) {
        return $a5a79905d7f29b6c9078769d5e01bfa0$var$matches(matcher, action);
      });
    };
  }
  function $a5a79905d7f29b6c9078769d5e01bfa0$var$hasExpectedRequestMetadata(action, validStatus) {
    if (!action || !action.meta) return false;
    var hasValidRequestId = typeof action.meta.requestId === "string";
    var hasValidRequestStatus = validStatus.indexOf(action.meta.requestStatus) > -1;
    return hasValidRequestId && hasValidRequestStatus;
  }
  function $a5a79905d7f29b6c9078769d5e01bfa0$var$isAsyncThunkArray(a) {
    return typeof a[0] === "function" && ("pending" in a[0]) && ("fulfilled" in a[0]) && ("rejected" in a[0]);
  }
  function $a5a79905d7f29b6c9078769d5e01bfa0$export$isPending() {
    var asyncThunks = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      asyncThunks[_i] = arguments[_i];
    }
    if (asyncThunks.length === 0) {
      return function (action) {
        return $a5a79905d7f29b6c9078769d5e01bfa0$var$hasExpectedRequestMetadata(action, ["pending"]);
      };
    }
    if (!$a5a79905d7f29b6c9078769d5e01bfa0$var$isAsyncThunkArray(asyncThunks)) {
      return $a5a79905d7f29b6c9078769d5e01bfa0$export$isPending()(asyncThunks[0]);
    }
    return function (action) {
      var matchers = asyncThunks.map(function (asyncThunk) {
        return asyncThunk.pending;
      });
      var combinedMatcher = $a5a79905d7f29b6c9078769d5e01bfa0$export$isAnyOf.apply(void 0, matchers);
      return combinedMatcher(action);
    };
  }
  function $a5a79905d7f29b6c9078769d5e01bfa0$export$isRejected() {
    var asyncThunks = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      asyncThunks[_i] = arguments[_i];
    }
    if (asyncThunks.length === 0) {
      return function (action) {
        return $a5a79905d7f29b6c9078769d5e01bfa0$var$hasExpectedRequestMetadata(action, ["rejected"]);
      };
    }
    if (!$a5a79905d7f29b6c9078769d5e01bfa0$var$isAsyncThunkArray(asyncThunks)) {
      return $a5a79905d7f29b6c9078769d5e01bfa0$export$isRejected()(asyncThunks[0]);
    }
    return function (action) {
      var matchers = asyncThunks.map(function (asyncThunk) {
        return asyncThunk.rejected;
      });
      var combinedMatcher = $a5a79905d7f29b6c9078769d5e01bfa0$export$isAnyOf.apply(void 0, matchers);
      return combinedMatcher(action);
    };
  }
  function $a5a79905d7f29b6c9078769d5e01bfa0$export$isRejectedWithValue() {
    var asyncThunks = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      asyncThunks[_i] = arguments[_i];
    }
    var hasFlag = function (action) {
      return action && action.meta && action.meta.rejectedWithValue;
    };
    if (asyncThunks.length === 0) {
      return function (action) {
        var combinedMatcher = $a5a79905d7f29b6c9078769d5e01bfa0$export$isAllOf($a5a79905d7f29b6c9078769d5e01bfa0$export$isRejected.apply(void 0, asyncThunks), hasFlag);
        return combinedMatcher(action);
      };
    }
    if (!$a5a79905d7f29b6c9078769d5e01bfa0$var$isAsyncThunkArray(asyncThunks)) {
      return $a5a79905d7f29b6c9078769d5e01bfa0$export$isRejectedWithValue()(asyncThunks[0]);
    }
    return function (action) {
      var combinedMatcher = $a5a79905d7f29b6c9078769d5e01bfa0$export$isAllOf($a5a79905d7f29b6c9078769d5e01bfa0$export$isRejected.apply(void 0, asyncThunks), hasFlag);
      return combinedMatcher(action);
    };
  }
  function $a5a79905d7f29b6c9078769d5e01bfa0$export$isFulfilled() {
    var asyncThunks = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      asyncThunks[_i] = arguments[_i];
    }
    if (asyncThunks.length === 0) {
      return function (action) {
        return $a5a79905d7f29b6c9078769d5e01bfa0$var$hasExpectedRequestMetadata(action, ["fulfilled"]);
      };
    }
    if (!$a5a79905d7f29b6c9078769d5e01bfa0$var$isAsyncThunkArray(asyncThunks)) {
      return $a5a79905d7f29b6c9078769d5e01bfa0$export$isFulfilled()(asyncThunks[0]);
    }
    return function (action) {
      var matchers = asyncThunks.map(function (asyncThunk) {
        return asyncThunk.fulfilled;
      });
      var combinedMatcher = $a5a79905d7f29b6c9078769d5e01bfa0$export$isAnyOf.apply(void 0, matchers);
      return combinedMatcher(action);
    };
  }
  function $a5a79905d7f29b6c9078769d5e01bfa0$export$isAsyncThunkAction() {
    var asyncThunks = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      asyncThunks[_i] = arguments[_i];
    }
    if (asyncThunks.length === 0) {
      return function (action) {
        return $a5a79905d7f29b6c9078769d5e01bfa0$var$hasExpectedRequestMetadata(action, ["pending", "fulfilled", "rejected"]);
      };
    }
    if (!$a5a79905d7f29b6c9078769d5e01bfa0$var$isAsyncThunkArray(asyncThunks)) {
      return $a5a79905d7f29b6c9078769d5e01bfa0$export$isAsyncThunkAction()(asyncThunks[0]);
    }
    return function (action) {
      var matchers = [];
      for (var _i = 0, asyncThunks_1 = asyncThunks; _i < asyncThunks_1.length; _i++) {
        var asyncThunk = asyncThunks_1[_i];
        matchers.push(asyncThunk.pending, asyncThunk.rejected, asyncThunk.fulfilled);
      }
      var combinedMatcher = $a5a79905d7f29b6c9078769d5e01bfa0$export$isAnyOf.apply(void 0, matchers);
      return combinedMatcher(action);
    };
  }
  $parcel$export($a5a79905d7f29b6c9078769d5e01bfa0$exports, "createSlice", function () {
    return $a5a79905d7f29b6c9078769d5e01bfa0$export$createSlice;
  });
  $parcel$export($a5a79905d7f29b6c9078769d5e01bfa0$exports, "configureStore", function () {
    return $a5a79905d7f29b6c9078769d5e01bfa0$export$configureStore;
  });
  // ASSET: node_modules/@parcel/runtime-js/lib/JSRuntime.js
  var $05429b931e0851c076a95f3dc2c40c24$exports = {};
  // ASSET: node_modules/@parcel/runtime-js/lib/bundle-url.js
  var $634f916bc30b7d6650877f3f4b6a8b3a$exports, $634f916bc30b7d6650877f3f4b6a8b3a$var$bundleURL, $634f916bc30b7d6650877f3f4b6a8b3a$export$getBundleURL, $634f916bc30b7d6650877f3f4b6a8b3a$export$getOrigin, $634f916bc30b7d6650877f3f4b6a8b3a$executed = false;
  function $634f916bc30b7d6650877f3f4b6a8b3a$var$getBundleURLCached() {
    if (!$634f916bc30b7d6650877f3f4b6a8b3a$var$bundleURL) {
      $634f916bc30b7d6650877f3f4b6a8b3a$var$bundleURL = $634f916bc30b7d6650877f3f4b6a8b3a$var$getBundleURL();
    }
    return $634f916bc30b7d6650877f3f4b6a8b3a$var$bundleURL;
  }
  function $634f916bc30b7d6650877f3f4b6a8b3a$var$getBundleURL() {
    try {
      throw new Error();
    } catch (err) {
      var matches = ('' + err.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);
      if (matches) {
        return $634f916bc30b7d6650877f3f4b6a8b3a$var$getBaseURL(matches[0]);
      }
    }
    return '/';
  }
  function $634f916bc30b7d6650877f3f4b6a8b3a$var$getBaseURL(url) {
    return ('' + url).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/';
  }
  // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
  function $634f916bc30b7d6650877f3f4b6a8b3a$var$getOrigin(url) {
    let matches = ('' + url).match(/(https?|file|ftp):\/\/[^/]+/);
    if (!matches) {
      throw new Error('Origin not found');
    }
    return matches[0];
  }
  function $634f916bc30b7d6650877f3f4b6a8b3a$exec() {
    $634f916bc30b7d6650877f3f4b6a8b3a$exports = {};
    $634f916bc30b7d6650877f3f4b6a8b3a$var$bundleURL = null;
    $634f916bc30b7d6650877f3f4b6a8b3a$export$getBundleURL = $634f916bc30b7d6650877f3f4b6a8b3a$var$getBundleURLCached;
    $634f916bc30b7d6650877f3f4b6a8b3a$exports.getBundleURL = $634f916bc30b7d6650877f3f4b6a8b3a$export$getBundleURL;
    $634f916bc30b7d6650877f3f4b6a8b3a$export$getOrigin = $634f916bc30b7d6650877f3f4b6a8b3a$var$getOrigin;
    $634f916bc30b7d6650877f3f4b6a8b3a$exports.getOrigin = $634f916bc30b7d6650877f3f4b6a8b3a$export$getOrigin;
  }
  function $634f916bc30b7d6650877f3f4b6a8b3a$init() {
    if (!$634f916bc30b7d6650877f3f4b6a8b3a$executed) {
      $634f916bc30b7d6650877f3f4b6a8b3a$executed = true;
      $634f916bc30b7d6650877f3f4b6a8b3a$exec();
    }
    return $634f916bc30b7d6650877f3f4b6a8b3a$exports;
  }
  // ASSET: node_modules/@parcel/runtime-js/lib/relative-path.js
  var $824bc590bf0a3702ac7bd27152cb0639$exports, $824bc590bf0a3702ac7bd27152cb0639$var$resolve, $824bc590bf0a3702ac7bd27152cb0639$export$_dirname, $824bc590bf0a3702ac7bd27152cb0639$export$_relative, $824bc590bf0a3702ac7bd27152cb0639$executed = false;
  function $824bc590bf0a3702ac7bd27152cb0639$var$dirname(_filePath) {
    if (_filePath === '') {
      return '.';
    }
    var filePath = _filePath[_filePath.length - 1] === '/' ? _filePath.slice(0, _filePath.length - 1) : _filePath;
    var slashIndex = filePath.lastIndexOf('/');
    return slashIndex === -1 ? '.' : filePath.slice(0, slashIndex);
  }
  function $824bc590bf0a3702ac7bd27152cb0639$var$relative(from, to) {
    if (from === to) {
      return '';
    }
    var fromParts = from.split('/');
    if (fromParts[0] === '.') {
      fromParts.shift();
    }
    var toParts = to.split('/');
    if (toParts[0] === '.') {
      toParts.shift();
    }
    // Find where path segments diverge.
    var i;
    var divergeIndex;
    for (i = 0; (i < toParts.length || i < fromParts.length) && divergeIndex == null; i++) {
      if (fromParts[i] !== toParts[i]) {
        divergeIndex = i;
      }
    }
    // If there are segments from "from" beyond the point of divergence,
    // return back up the path to that point using "..".
    var parts = [];
    for (i = 0; i < fromParts.length - divergeIndex; i++) {
      parts.push('..');
    }
    // If there are segments from "to" beyond the point of divergence,
    // continue using the remaining segments.
    if (toParts.length > divergeIndex) {
      parts.push.apply(parts, toParts.slice(divergeIndex));
    }
    return parts.join('/');
  }
  function $824bc590bf0a3702ac7bd27152cb0639$exec() {
    $824bc590bf0a3702ac7bd27152cb0639$exports = {};
    $824bc590bf0a3702ac7bd27152cb0639$var$resolve = $7d806a7a603c235ec027b73d847f4d95$export$resolve;
    $824bc590bf0a3702ac7bd27152cb0639$exports = function (fromId, toId) {
      return $824bc590bf0a3702ac7bd27152cb0639$var$relative($824bc590bf0a3702ac7bd27152cb0639$var$dirname($824bc590bf0a3702ac7bd27152cb0639$var$resolve(fromId)), $824bc590bf0a3702ac7bd27152cb0639$var$resolve(toId));
    };
    $824bc590bf0a3702ac7bd27152cb0639$export$_dirname = $824bc590bf0a3702ac7bd27152cb0639$var$dirname;
    $824bc590bf0a3702ac7bd27152cb0639$exports._dirname = $824bc590bf0a3702ac7bd27152cb0639$export$_dirname;
    $824bc590bf0a3702ac7bd27152cb0639$export$_relative = $824bc590bf0a3702ac7bd27152cb0639$var$relative;
    $824bc590bf0a3702ac7bd27152cb0639$exports._relative = $824bc590bf0a3702ac7bd27152cb0639$export$_relative;
  }
  function $824bc590bf0a3702ac7bd27152cb0639$init() {
    if (!$824bc590bf0a3702ac7bd27152cb0639$executed) {
      $824bc590bf0a3702ac7bd27152cb0639$executed = true;
      $824bc590bf0a3702ac7bd27152cb0639$exec();
    }
    return $824bc590bf0a3702ac7bd27152cb0639$exports;
  }
  $05429b931e0851c076a95f3dc2c40c24$exports = $634f916bc30b7d6650877f3f4b6a8b3a$init().getBundleURL() + $824bc590bf0a3702ac7bd27152cb0639$init()("2aO6o", "inPCI");
  var $05429b931e0851c076a95f3dc2c40c24$$interop$default = /*@__PURE__*/$parcel$interopDefault($05429b931e0851c076a95f3dc2c40c24$exports);
  var $5a3b28105c0ee01e6a48fa93335877fd$export$default = JSON.stringify({
    defaultData: $05429b931e0851c076a95f3dc2c40c24$$interop$default,
    tracks: [{
      tooltips: 0.01,
      mark: "point",
      layout: "linear",
      x: {
        attribute: "x",
        type: "quantitative",
        domain: [-10, 10],
        axis: "bottom",
        scale: "linear"
      },
      y: {
        attribute: "y",
        type: "quantitative",
        domain: [-10, 10],
        axis: "left",
        scale: "linear"
      },
      color: {
        attribute: "sample",
        type: "categorical",
        cardinality: 32,
        colorScheme: "interpolateRainbow"
      },
      opacity: {
        value: 0.05
      }
    }]
  }, null, 2);
  const $139b79e5ff209336f4025f9472954faf$var$controlsSlice = $a5a79905d7f29b6c9078769d5e01bfa0$exports.createSlice({
    name: "webglControls",
    initialState: {
      tool: "pan",
      schema: $5a3b28105c0ee01e6a48fa93335877fd$export$default,
      lockedX: false,
      lockedY: false
    },
    reducers: {
      setSchema: function (state, action) {
        state.schema = action.payload;
      },
      setTool: function (state, action) {
        state.tool = action.payload;
      },
      setScroll: function (state, action) {
        if (action.payload.axis === "x") {
          state.lockedX = action.payload.checked;
        } else if (action.payload.axis === "y") {
          state.lockedY = action.payload.checked;
        }
      }
    }
  });
  const {setSchema: $139b79e5ff209336f4025f9472954faf$export$setSchema, setTool: $139b79e5ff209336f4025f9472954faf$export$setTool, setScroll: $139b79e5ff209336f4025f9472954faf$export$setScroll} = $139b79e5ff209336f4025f9472954faf$var$controlsSlice.actions;
  var $139b79e5ff209336f4025f9472954faf$export$default = $139b79e5ff209336f4025f9472954faf$var$controlsSlice.reducer;
  // ASSET: node_modules/@parcel/runtime-js/lib/JSRuntime.js
  var $df282eba898e0e889073ebd022fefed9$exports = {};
  $df282eba898e0e889073ebd022fefed9$exports = $634f916bc30b7d6650877f3f4b6a8b3a$init().getBundleURL() + $824bc590bf0a3702ac7bd27152cb0639$init()("2aO6o", "5AQt2");
  var $df282eba898e0e889073ebd022fefed9$$interop$default = /*@__PURE__*/$parcel$interopDefault($df282eba898e0e889073ebd022fefed9$exports);
  var $a9e3c2f2aaebe10b8305f7e3352f7046$export$default = JSON.stringify({
    defaultData: $df282eba898e0e889073ebd022fefed9$$interop$default,
    tracks: [{
      tooltips: 1,
      mark: "area",
      layout: "linear",
      x: {
        attribute: "day",
        type: "quantitative",
        domain: [1, 10],
        axis: "bottom"
      },
      y: {
        attribute: "price",
        type: "quantitative",
        domain: [0, 40],
        axis: "left",
        scale: "linear"
      },
      color: {
        value: "red"
      },
      shape: {
        value: "circle"
      }
    }]
  }, null, 2);
  // ASSET: node_modules/@parcel/runtime-js/lib/JSRuntime.js
  var $0966204d340c6493e3c0d589d8804aa3$exports = {};
  $0966204d340c6493e3c0d589d8804aa3$exports = $634f916bc30b7d6650877f3f4b6a8b3a$init().getBundleURL() + $824bc590bf0a3702ac7bd27152cb0639$init()("2aO6o", "W43K1");
  var $0966204d340c6493e3c0d589d8804aa3$$interop$default = /*@__PURE__*/$parcel$interopDefault($0966204d340c6493e3c0d589d8804aa3$exports);
  var $31d08680e4d940d79f9d502e4d97edec$export$default = JSON.stringify({
    tracks: [{
      data: $df282eba898e0e889073ebd022fefed9$$interop$default,
      tooltips: 1,
      mark: "line",
      layout: "linear",
      x: {
        attribute: "day",
        type: "quantitative",
        domain: [1, 10],
        axis: "bottom"
      },
      y: {
        attribute: "price",
        type: "quantitative",
        domain: [0, 40],
        axis: "left",
        scale: "linear"
      },
      color: {
        value: "red"
      },
      shape: {
        value: "circle"
      }
    }, {
      data: $0966204d340c6493e3c0d589d8804aa3$$interop$default,
      tooltips: 1,
      mark: "line",
      layout: "linear",
      x: {
        attribute: "day",
        type: "quantitative",
        domain: [1, 10],
        axis: "bottom"
      },
      y: {
        attribute: "price",
        type: "quantitative",
        domain: [0, 40],
        axis: "left",
        scale: "linear"
      },
      color: {
        value: "green"
      },
      shape: {
        value: "diamond"
      }
    }]
  }, null, 2);
  var $c2d4747f98db7cca7d38b57ec4886cff$export$default = JSON.stringify({
    defaultData: $df282eba898e0e889073ebd022fefed9$$interop$default,
    tracks: [{
      tooltips: 1,
      mark: "line",
      layout: "linear",
      x: {
        attribute: "day",
        type: "quantitative",
        domain: [1, 10],
        axis: "bottom"
      },
      y: {
        attribute: "price",
        type: "quantitative",
        domain: [0, 40],
        axis: "left",
        scale: "linear"
      },
      color: {
        value: "red"
      },
      shape: {
        value: "circle"
      }
    }]
  }, null, 2);
  var $06294e840446056ad074ad50bb09449b$export$default = JSON.stringify({
    tracks: [{
      order: 1,
      data: $df282eba898e0e889073ebd022fefed9$$interop$default,
      tooltips: 1,
      mark: "area",
      layout: "linear",
      x: {
        attribute: "day",
        type: "quantitative",
        domain: [1, 10],
        axis: "bottom"
      },
      y: {
        attribute: "price",
        type: "quantitative",
        domain: [0, 40],
        axis: "left",
        scale: "linear"
      },
      color: {
        value: "red"
      },
      shape: {
        value: "circle"
      }
    }, {
      order: 2,
      data: $0966204d340c6493e3c0d589d8804aa3$$interop$default,
      tooltips: 1,
      mark: "area",
      layout: "linear",
      x: {
        attribute: "day",
        type: "quantitative",
        domain: [1, 10],
        axis: "bottom"
      },
      y: {
        attribute: "price",
        type: "quantitative",
        domain: [0, 40],
        axis: "left",
        scale: "linear"
      },
      color: {
        value: "green"
      },
      shape: {
        value: "diamond"
      }
    }]
  }, null, 2);
  // ASSET: node_modules/@parcel/runtime-js/lib/JSRuntime.js
  var $4ebe4b0d71af6f636de836cf32fbe13e$exports = {};
  $4ebe4b0d71af6f636de836cf32fbe13e$exports = $634f916bc30b7d6650877f3f4b6a8b3a$init().getBundleURL() + $824bc590bf0a3702ac7bd27152cb0639$init()("2aO6o", "68hza");
  var $4ebe4b0d71af6f636de836cf32fbe13e$$interop$default = /*@__PURE__*/$parcel$interopDefault($4ebe4b0d71af6f636de836cf32fbe13e$exports);
  var $0f98a365f816c6c3b2771c04be944e48$export$default = JSON.stringify({
    defaultData: $4ebe4b0d71af6f636de836cf32fbe13e$$interop$default,
    tracks: [{
      tooltips: 1,
      mark: "tick",
      layout: "linear",
      x: {
        attribute: "time",
        type: "quantitative",
        domain: [0, 10],
        axis: "top"
      },
      y: {
        attribute: "sample",
        type: "categorical",
        cardinality: 3,
        axis: "left"
      },
      color: {
        attribute: "strength",
        type: "quantitative",
        domain: [0, 1],
        colorScheme: "interpolateCool"
      },
      height: {
        value: 10
      }
    }]
  }, null, 2);
  // ASSET: node_modules/@parcel/runtime-js/lib/JSRuntime.js
  var $8b3efa6c57a63b41bcdaf6541b273229$exports = {};
  $8b3efa6c57a63b41bcdaf6541b273229$exports = $634f916bc30b7d6650877f3f4b6a8b3a$init().getBundleURL() + $824bc590bf0a3702ac7bd27152cb0639$init()("2aO6o", "5zI6Y");
  var $8b3efa6c57a63b41bcdaf6541b273229$$interop$default = /*@__PURE__*/$parcel$interopDefault($8b3efa6c57a63b41bcdaf6541b273229$exports);
  var $0a467d28eddc87ce2373b436ddee85da$export$default = JSON.stringify({
    defaultData: $8b3efa6c57a63b41bcdaf6541b273229$$interop$default,
    tracks: [{
      tooltips: 0.01,
      mark: "point",
      layout: "linear",
      x: {
        attribute: "x",
        type: "quantitative",
        domain: [-10, 10],
        axis: "bottom",
        scale: "linear"
      },
      y: {
        attribute: "y",
        type: "quantitative",
        domain: [-10, 10],
        axis: "left",
        scale: "linear"
      },
      color: {
        attribute: "sample",
        type: "categorical",
        cardinality: 32,
        colorScheme: "interpolateRainbow"
      },
      opacity: {
        value: 0.05
      }
    }]
  }, null, 2);
  // ASSET: node_modules/@parcel/runtime-js/lib/JSRuntime.js
  var $7c9202d0108707a15e9b799437b0f8ca$exports = {};
  $7c9202d0108707a15e9b799437b0f8ca$exports = $634f916bc30b7d6650877f3f4b6a8b3a$init().getBundleURL() + $824bc590bf0a3702ac7bd27152cb0639$init()("2aO6o", "xDcCF");
  var $7c9202d0108707a15e9b799437b0f8ca$$interop$default = /*@__PURE__*/$parcel$interopDefault($7c9202d0108707a15e9b799437b0f8ca$exports);
  var $6a6d3a42af9f635efef082120917a460$export$default = JSON.stringify({
    defaultData: $7c9202d0108707a15e9b799437b0f8ca$$interop$default,
    tracks: [{
      tooltips: 0.01,
      mark: "point",
      layout: "linear",
      x: {
        attribute: "x",
        type: "quantitative",
        domain: [-10, 10],
        axis: "bottom",
        scale: "linear"
      },
      y: {
        attribute: "y",
        type: "quantitative",
        domain: [-10, 10],
        axis: "left",
        scale: "linear"
      },
      color: {
        attribute: "sample",
        type: "categorical",
        cardinality: 32,
        colorScheme: "interpolateRainbow"
      },
      opacity: {
        value: 0.05
      }
    }]
  }, null, 2);
  var $9460168384434553e5edaf730410268d$export$default = JSON.stringify({
    defaultData: ["day,price", "1,10", "2,22", "3,35"],
    tracks: [{
      tooltips: 1,
      mark: "line",
      layout: "linear",
      x: {
        attribute: "day",
        type: "quantitative",
        domain: [1, 10],
        axis: "bottom"
      },
      y: {
        attribute: "price",
        type: "quantitative",
        domain: [0, 40],
        axis: "left",
        scale: "linear"
      },
      color: {
        value: "red"
      },
      shape: {
        value: "circle"
      }
    }]
  }, null, 2);
  var $dedc15b93015bb1fb7511bf51cff2788$export$default = JSON.stringify({
    tracks: [{
      order: 1,
      data: ["day,price", "1,5", "2,15", "3,30"],
      tooltips: 1,
      mark: "area",
      layout: "linear",
      x: {
        attribute: "day",
        type: "quantitative",
        domain: [1, 10],
        axis: "bottom"
      },
      y: {
        attribute: "price",
        type: "quantitative",
        domain: [0, 40],
        axis: "left",
        scale: "linear"
      },
      color: {
        value: "red"
      },
      shape: {
        value: "circle"
      }
    }, {
      order: 2,
      data: ["day,price", "1,15", "2,25", "3,40"],
      tooltips: 1,
      mark: "area",
      layout: "linear",
      x: {
        attribute: "day",
        type: "quantitative",
        domain: [1, 10],
        axis: "bottom"
      },
      y: {
        attribute: "price",
        type: "quantitative",
        domain: [0, 40],
        axis: "left",
        scale: "linear"
      },
      color: {
        value: "green"
      },
      shape: {
        value: "diamond"
      }
    }]
  }, null, 2);
  var $0f8fe932d8b95379a1c5e72a71c87dd3$export$default = JSON.stringify({
    defaultData: ["day,price", "1,10", "2,22", "3,35", "4,20"],
    tracks: [{
      tooltips: 1,
      mark: "point",
      layout: "linear",
      x: {
        attribute: "day",
        type: "quantitative",
        domain: [0, 5],
        axis: "bottom"
      },
      y: {
        attribute: "price",
        type: "quantitative",
        domain: [0, 40],
        axis: "left",
        scale: "linear"
      },
      color: {
        value: "red"
      },
      shape: {
        value: "circle"
      }
    }]
  }, null, 2);
  const $e344a3a5e663d2f509e434b39ac40926$var$buildGrid = cellsPerRow => {
    const toReturn = [];
    for (let i = 0; i < cellsPerRow; i++) {
      for (let j = 0; j < cellsPerRow; j++) {
        toReturn.push(`${i / cellsPerRow},${j / cellsPerRow}`);
      }
    }
    return toReturn;
  };
  var $e344a3a5e663d2f509e434b39ac40926$export$default = JSON.stringify({
    defaultData: ["x,y"].concat($e344a3a5e663d2f509e434b39ac40926$var$buildGrid(5)),
    tracks: [{
      tooltips: 1,
      mark: "point",
      x: {
        attribute: "x",
        type: "quantitative",
        domain: [0, 1]
      },
      y: {
        attribute: "y",
        type: "quantitative",
        domain: [0, 1]
      },
      size: {
        value: 5
      }
    }]
  }, null, 2);
  // ASSET: node_modules/@parcel/runtime-js/lib/JSRuntime.js
  var $a849e1ad706408dab39aa942681c7f64$exports = {};
  $a849e1ad706408dab39aa942681c7f64$exports = $634f916bc30b7d6650877f3f4b6a8b3a$init().getBundleURL() + $824bc590bf0a3702ac7bd27152cb0639$init()("2aO6o", "1Ls68");
  var $a849e1ad706408dab39aa942681c7f64$$interop$default = /*@__PURE__*/$parcel$interopDefault($a849e1ad706408dab39aa942681c7f64$exports);
  var $d4eb447e3830ce64d9d9844a053aa807$export$default = JSON.stringify({
    defaultData: $a849e1ad706408dab39aa942681c7f64$$interop$default,
    tracks: [{
      tooltips: 1,
      mark: "rect",
      x: {
        attribute: "sample",
        type: "categorical",
        cardinality: 4,
        axis: "bottom",
        scale: "linear"
      },
      y: {
        attribute: "subject",
        type: "categorical",
        cardinality: 4,
        axis: "left",
        scale: "linear"
      },
      color: {
        attribute: "strength",
        type: "quantitative",
        domain: [0, 1],
        colorScheme: "interpolateReds"
      },
      width: {
        value: 200 / 4
      },
      height: {
        value: 200 / 4
      }
    }]
  }, null, 2);
  var $39b829b66c49ff9e9c7cba8890167cf4$export$default = JSON.stringify({
    defaultData: ["x,y,type", "1,10,a", "2,-10,b", "3,5,c", "4,15,b", "5,-15,a", "6,-1,c", "7,1,b", "8,15,c"],
    tracks: [{
      tooltips: 1,
      mark: "rect",
      layout: "linear",
      x: {
        attribute: "x",
        type: "quantitative",
        domain: [0, 10],
        axis: "bottom"
      },
      y: {
        value: 0,
        axis: "left",
        scale: "linear"
      },
      color: {
        attribute: "type",
        type: "categorical",
        cardinality: 3
      },
      width: {
        value: 10
      },
      height: {
        attribute: "y",
        type: "quantitative",
        domain: [-20, 20],
        minHeight: -100,
        maxHeight: 100
      }
    }]
  }, null, 2);
  var $cde15cc1ee7acd4e487e6e2bdd4c7e09$export$default = JSON.stringify({
    defaultData: ["x,y,type", "1,10,a", "2,-10,b", "3,5,c", "4,15,b", "5,-15,a", "6,-1,c", "7,1,b", "8,15,c"],
    tracks: [{
      tooltips: 1,
      mark: "rect",
      layout: "linear",
      x: {
        value: 0,
        axis: "bottom"
      },
      y: {
        attribute: "x",
        type: "quantitative",
        domain: [0, 10],
        axis: "left"
      },
      color: {
        attribute: "type",
        type: "categorical",
        cardinality: 3
      },
      height: {
        value: 10
      },
      width: {
        attribute: "y",
        type: "quantitative",
        domain: [-20, 20],
        minWidth: -100,
        maxWidth: 100
      }
    }]
  }, null, 2);
  const $9e70f4d5b36c39388b117fee7d542725$var$exampleMap = new Map([["area-chart", $a9e3c2f2aaebe10b8305f7e3352f7046$export$default], ["double-line-plot", $31d08680e4d940d79f9d502e4d97edec$export$default], ["line-plot", $c2d4747f98db7cca7d38b57ec4886cff$export$default], ["stacked-area-chart", $06294e840446056ad074ad50bb09449b$export$default], ["tick-chart", $0f98a365f816c6c3b2771c04be944e48$export$default], ["tsne", $0a467d28eddc87ce2373b436ddee85da$export$default], ["tsne-10", $5a3b28105c0ee01e6a48fa93335877fd$export$default], ["tsne-100", $6a6d3a42af9f635efef082120917a460$export$default], ["inline-data", $9460168384434553e5edaf730410268d$export$default], ["double-inline-data", $dedc15b93015bb1fb7511bf51cff2788$export$default], ["tiny-scatter", $0f8fe932d8b95379a1c5e72a71c87dd3$export$default], ["scatter-grid", $e344a3a5e663d2f509e434b39ac40926$export$default], ["heatmap", $d4eb447e3830ce64d9d9844a053aa807$export$default], ["signed-bar-chart", $39b829b66c49ff9e9c7cba8890167cf4$export$default], ["vertical-signed-bar-chart", $cde15cc1ee7acd4e487e6e2bdd4c7e09$export$default]]);
  class $9e70f4d5b36c39388b117fee7d542725$export$default {
    /**
    * A class meant to handle changing options on the scatter plot
    * @param {Function} dispatch method from store to dispatch redux actions
    */
    constructor(dispatch) {
      this.dispatch = dispatch;
      this.mouseAction = "pan";
      this.schema = "csv10";
    }
    /**
    * Initializes the tool bar by adding event listeners
    */
    init() {
      document.getElementById("lock-x").addEventListener("change", event => {
        this.dispatch($139b79e5ff209336f4025f9472954faf$export$setScroll({
          axis: "x",
          checked: event.target.checked
        }));
      });
      document.getElementById("lock-y").addEventListener("change", event => {
        this.dispatch($139b79e5ff209336f4025f9472954faf$export$setScroll({
          axis: "y",
          checked: event.target.checked
        }));
      });
      document.getElementById("schema-select").value = this.schema;
      this.dispatch($139b79e5ff209336f4025f9472954faf$export$setSchema($9e70f4d5b36c39388b117fee7d542725$var$exampleMap.get(this.schema)));
      document.getElementById("schema-select").addEventListener("change", event => {
        this.schema = event.target.value;
        this.dispatch($139b79e5ff209336f4025f9472954faf$export$setSchema($9e70f4d5b36c39388b117fee7d542725$var$exampleMap.get(this.schema)));
      });
      this.prevIcon = null;
      // force only 1 icon to have selected class
      document.querySelectorAll(".controls img").forEach(icon => {
        icon.addEventListener("click", () => {
          // useless hack to save lines of code
          if (this.prevIcon) {
            this.prevIcon.classList.remove("selected");
          }
          this.mouseAction = icon.alt.substring(0, icon.alt.indexOf(" "));
          this.dispatch($139b79e5ff209336f4025f9472954faf$export$setTool(this.mouseAction));
          icon.classList.add("selected");
          this.prevIcon = icon;
        });
      });
    }
    /**
    * Sets the display for the current selection window in the toolbar
    *
    * @param {Array} currentXRange array of length 2 with current X range
    * @param {Array} currentYRange array of length 2 with current Y range
    */
    updateSelectionWindowDisplay(currentXRange, currentYRange) {
      // This may slow down the rendering since it needs to call the DOM before animating, may need to remove for true benchmark
      document.querySelector(".selection-window").textContent = `[${currentXRange[0].toFixed(4)}, ${currentXRange[1].toFixed(4)}] x [${currentYRange[0].toFixed(4)}, ${currentYRange[1].toFixed(4)}]`;
    }
    /**
    * Maps selection box values to schema paths.
    *
    * @param {String} schema name from selection box
    * @returns path to schema
    */
    determineSchemaPath(schema) {
      switch (schema) {
        case "tsne":
          return csv1;
        case "tsne-10":
          return csv10;
        case "tsne-100":
          return csv100;
        default:
          console.error(`Did not recognize schema: ${schema}`);
      }
    }
  }
  // ASSET: node_modules/@parcel/runtime-js/lib/get-worker-url.js
  var $1066a859165bb0eb99d326939ca5e6fc$exports, $1066a859165bb0eb99d326939ca5e6fc$executed = false;
  function $1066a859165bb0eb99d326939ca5e6fc$exec() {
    $1066a859165bb0eb99d326939ca5e6fc$exports = {};
    /*global self, Blob*/
    $634f916bc30b7d6650877f3f4b6a8b3a$init();
    $1066a859165bb0eb99d326939ca5e6fc$exports = function (relativePath) {
      var workerUrl = $634f916bc30b7d6650877f3f4b6a8b3a$init().getBundleURL() + relativePath;
      if ($634f916bc30b7d6650877f3f4b6a8b3a$init().getOrigin(workerUrl) === self.location.origin) {
        // If the worker bundle's url is on the same origin as the document,
        // use the worker bundle's own url.
        return workerUrl;
      } else {
        // Otherwise, create a blob URL which loads the worker bundle with `importScripts`.
        return URL.createObjectURL(new Blob(['importScripts(' + JSON.stringify(workerUrl) + ');']));
      }
    };
  }
  function $1066a859165bb0eb99d326939ca5e6fc$init() {
    if (!$1066a859165bb0eb99d326939ca5e6fc$executed) {
      $1066a859165bb0eb99d326939ca5e6fc$executed = true;
      $1066a859165bb0eb99d326939ca5e6fc$exec();
    }
    return $1066a859165bb0eb99d326939ca5e6fc$exports;
  }
  // ASSET: node_modules/@parcel/runtime-js/lib/JSRuntime.js
  var $e2a27ccf5a10c3f4307fd317dc99f3cf$exports, $e2a27ccf5a10c3f4307fd317dc99f3cf$executed = false;
  function $e2a27ccf5a10c3f4307fd317dc99f3cf$exec() {
    $e2a27ccf5a10c3f4307fd317dc99f3cf$exports = {};
    $e2a27ccf5a10c3f4307fd317dc99f3cf$exports = $1066a859165bb0eb99d326939ca5e6fc$init()($824bc590bf0a3702ac7bd27152cb0639$init()("2aO6o", "1Utg0"));
  }
  function $e2a27ccf5a10c3f4307fd317dc99f3cf$init() {
    if (!$e2a27ccf5a10c3f4307fd317dc99f3cf$executed) {
      $e2a27ccf5a10c3f4307fd317dc99f3cf$executed = true;
      $e2a27ccf5a10c3f4307fd317dc99f3cf$exec();
    }
    return $e2a27ccf5a10c3f4307fd317dc99f3cf$exports;
  }
  // ASSET: node_modules/@parcel/runtime-js/lib/JSRuntime.js
  var $19de698c7ff95be5ef3defeb95d369f8$exports, $19de698c7ff95be5ef3defeb95d369f8$executed = false;
  function $19de698c7ff95be5ef3defeb95d369f8$exec() {
    $19de698c7ff95be5ef3defeb95d369f8$exports = {};
    $19de698c7ff95be5ef3defeb95d369f8$exports = $1066a859165bb0eb99d326939ca5e6fc$init()($824bc590bf0a3702ac7bd27152cb0639$init()("2aO6o", "1S3Hi"));
  }
  function $19de698c7ff95be5ef3defeb95d369f8$init() {
    if (!$19de698c7ff95be5ef3defeb95d369f8$executed) {
      $19de698c7ff95be5ef3defeb95d369f8$executed = true;
      $19de698c7ff95be5ef3defeb95d369f8$exec();
    }
    return $19de698c7ff95be5ef3defeb95d369f8$exports;
  }
  /*!
  * FPSMeter 0.3.1 - 9th May 2013
  * https://github.com/Darsain/fpsmeter
  *
  * Licensed under the MIT license.
  * http://opensource.org/licenses/MIT
  */
  ;
  (function (w, undefined) {
    /**
    * Create a new element.
    *
    * @param  {String} name Element type name.
    *
    * @return {Element}
    */
    function newEl(name) {
      return document.createElement(name);
    }
    /**
    * Apply theme CSS properties to element.
    *
    * @param  {Element} element DOM element.
    * @param  {Object}  theme   Theme object.
    *
    * @return {Element}
    */
    function applyTheme(element, theme) {
      for (var name in theme) {
        try {
          element.style[name] = theme[name];
        } catch (e) {}
      }
      return element;
    }
    /**
    * Return type of the value.
    *
    * @param  {Mixed} value
    *
    * @return {String}
    */
    function type(value) {
      if (value == null) {
        return String(value);
      }
      if (typeof value === 'object' || typeof value === 'function') {
        return Object.prototype.toString.call(value).match(/\s([a-z]+)/i)[1].toLowerCase() || 'object';
      }
      return typeof value;
    }
    /**
    * Check whether the value is in an array.
    *
    * @param  {Mixed} value
    * @param  {Array} array
    *
    * @return {Integer} Array index or -1 when not found.
    */
    function inArray(value, array) {
      if (type(array) !== 'array') {
        return -1;
      }
      if (array.indexOf) {
        return array.indexOf(value);
      }
      for (var i = 0, l = array.length; i < l; i++) {
        if (array[i] === value) {
          return i;
        }
      }
      return -1;
    }
    /**
    * Poor man's deep object extend.
    *
    * Example:
    *   extend({}, defaults, options);
    *
    * @return {Void}
    */
    function extend() {
      var args = arguments;
      for (var key in args[1]) {
        if (args[1].hasOwnProperty(key)) {
          switch (type(args[1][key])) {
            case 'object':
              args[0][key] = extend({}, args[0][key], args[1][key]);
              break;
            case 'array':
              args[0][key] = args[1][key].slice(0);
              break;
            default:
              args[0][key] = args[1][key];
          }
        }
      }
      return args.length > 2 ? extend.apply(null, [args[0]].concat(Array.prototype.slice.call(args, 2))) : args[0];
    }
    /**
    * Convert HSL color to HEX string.
    *
    * @param  {Array} hsl Array with [hue, saturation, lightness].
    *
    * @return {Array} Array with [red, green, blue].
    */
    function hslToHex(h, s, l) {
      var r, g, b;
      var v, min, sv, sextant, fract, vsf;
      if (l <= 0.5) {
        v = l * (1 + s);
      } else {
        v = l + s - l * s;
      }
      if (v === 0) {
        return '#000';
      } else {
        min = 2 * l - v;
        sv = (v - min) / v;
        h = 6 * h;
        sextant = Math.floor(h);
        fract = h - sextant;
        vsf = v * sv * fract;
        if (sextant === 0 || sextant === 6) {
          r = v;
          g = min + vsf;
          b = min;
        } else if (sextant === 1) {
          r = v - vsf;
          g = v;
          b = min;
        } else if (sextant === 2) {
          r = min;
          g = v;
          b = min + vsf;
        } else if (sextant === 3) {
          r = min;
          g = v - vsf;
          b = v;
        } else if (sextant === 4) {
          r = min + vsf;
          g = min;
          b = v;
        } else {
          r = v;
          g = min;
          b = v - vsf;
        }
        return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
      }
    }
    /**
    * Helper function for hslToHex.
    */
    function componentToHex(c) {
      c = Math.round(c * 255).toString(16);
      return c.length === 1 ? '0' + c : c;
    }
    /**
    * Manage element event listeners.
    *
    * @param  {Node}     element
    * @param  {Event}    eventName
    * @param  {Function} handler
    * @param  {Bool}     remove
    *
    * @return {Void}
    */
    function listener(element, eventName, handler, remove) {
      if (element.addEventListener) {
        element[remove ? 'removeEventListener' : 'addEventListener'](eventName, handler, false);
      } else if (element.attachEvent) {
        element[remove ? 'detachEvent' : 'attachEvent']('on' + eventName, handler);
      }
    }
    // Preferred timing funtion
    var getTime;
    (function () {
      var perf = w.performance;
      if (perf && (perf.now || perf.webkitNow)) {
        var perfNow = perf.now ? 'now' : 'webkitNow';
        getTime = perf[perfNow].bind(perf);
      } else {
        getTime = function () {
          return +new Date();
        };
      }
    })();
    // Local WindowAnimationTiming interface polyfill
    var cAF = w.cancelAnimationFrame || w.cancelRequestAnimationFrame;
    var rAF = w.requestAnimationFrame;
    (function () {
      var vendors = ['moz', 'webkit', 'o'];
      var lastTime = 0;
      // For a more accurate WindowAnimationTiming interface implementation, ditch the native
      // requestAnimationFrame when cancelAnimationFrame is not present (older versions of Firefox)
      for (var i = 0, l = vendors.length; i < l && !cAF; ++i) {
        cAF = w[vendors[i] + 'CancelAnimationFrame'] || w[vendors[i] + 'CancelRequestAnimationFrame'];
        rAF = cAF && w[vendors[i] + 'RequestAnimationFrame'];
      }
      if (!cAF) {
        rAF = function (callback) {
          var currTime = getTime();
          var timeToCall = Math.max(0, 16 - (currTime - lastTime));
          lastTime = currTime + timeToCall;
          return w.setTimeout(function () {
            callback(currTime + timeToCall);
          }, timeToCall);
        };
        cAF = function (id) {
          clearTimeout(id);
        };
      }
    })();
    // Property name for assigning element text content
    var textProp = type(document.createElement('div').textContent) === 'string' ? 'textContent' : 'innerText';
    /**
    * FPSMeter class.
    *
    * @param {Element} anchor  Element to append the meter to. Default is document.body.
    * @param {Object}  options Object with options.
    */
    function FPSMeter(anchor, options) {
      // Optional arguments
      if (type(anchor) === 'object' && anchor.nodeType === undefined) {
        options = anchor;
        anchor = document.body;
      }
      if (!anchor) {
        anchor = document.body;
      }
      // Private properties
      var self = this;
      var o = extend({}, FPSMeter.defaults, options || ({}));
      var el = {};
      var cols = [];
      var theme, heatmaps;
      var heatDepth = 100;
      var heating = [];
      var thisFrameTime = 0;
      var frameTime = o.threshold;
      var frameStart = 0;
      var lastLoop = getTime() - frameTime;
      var time;
      var fpsHistory = [];
      var durationHistory = [];
      var frameID, renderID;
      var showFps = o.show === 'fps';
      var graphHeight, count, i, j;
      // Exposed properties
      self.options = o;
      self.fps = 0;
      self.duration = 0;
      self.isPaused = 0;
      /**
      * Tick start for measuring the actual rendering duration.
      *
      * @return {Void}
      */
      self.tickStart = function () {
        frameStart = getTime();
      };
      /**
      * FPS tick.
      *
      * @return {Void}
      */
      self.tick = function () {
        time = getTime();
        thisFrameTime = time - lastLoop;
        frameTime += (thisFrameTime - frameTime) / o.smoothing;
        self.fps = 1000 / frameTime;
        self.duration = frameStart < lastLoop ? frameTime : time - frameStart;
        lastLoop = time;
      };
      /**
      * Pause display rendering.
      *
      * @return {Object} FPSMeter instance.
      */
      self.pause = function () {
        if (frameID) {
          self.isPaused = 1;
          clearTimeout(frameID);
          cAF(frameID);
          cAF(renderID);
          frameID = renderID = 0;
        }
        return self;
      };
      /**
      * Resume display rendering.
      *
      * @return {Object} FPSMeter instance.
      */
      self.resume = function () {
        if (!frameID) {
          self.isPaused = 0;
          requestRender();
        }
        return self;
      };
      /**
      * Update options.
      *
      * @param {String} name  Option name.
      * @param {Mixed}  value New value.
      *
      * @return {Object} FPSMeter instance.
      */
      self.set = function (name, value) {
        o[name] = value;
        showFps = o.show === 'fps';
        // Rebuild or reposition elements when specific option has been updated
        if (inArray(name, rebuilders) !== -1) {
          createMeter();
        }
        if (inArray(name, repositioners) !== -1) {
          positionMeter();
        }
        return self;
      };
      /**
      * Change meter into rendering duration mode.
      *
      * @return {Object} FPSMeter instance.
      */
      self.showDuration = function () {
        self.set('show', 'ms');
        return self;
      };
      /**
      * Change meter into FPS mode.
      *
      * @return {Object} FPSMeter instance.
      */
      self.showFps = function () {
        self.set('show', 'fps');
        return self;
      };
      /**
      * Toggles between show: 'fps' and show: 'duration'.
      *
      * @return {Object} FPSMeter instance.
      */
      self.toggle = function () {
        self.set('show', showFps ? 'ms' : 'fps');
        return self;
      };
      /**
      * Hide the FPSMeter. Also pauses the rendering.
      *
      * @return {Object} FPSMeter instance.
      */
      self.hide = function () {
        self.pause();
        el.container.style.display = 'none';
        return self;
      };
      /**
      * Show the FPSMeter. Also resumes the rendering.
      *
      * @return {Object} FPSMeter instance.
      */
      self.show = function () {
        self.resume();
        el.container.style.display = 'block';
        return self;
      };
      /**
      * Check the current FPS and save it in history.
      *
      * @return {Void}
      */
      function historyTick() {
        for (i = o.history; i--; ) {
          fpsHistory[i] = i === 0 ? self.fps : fpsHistory[i - 1];
          durationHistory[i] = i === 0 ? self.duration : durationHistory[i - 1];
        }
      }
      /**
      * Returns heat hex color based on values passed.
      *
      * @param  {Integer} heatmap
      * @param  {Integer} value
      * @param  {Integer} min
      * @param  {Integer} max
      *
      * @return {Integer}
      */
      function getHeat(heatmap, value, min, max) {
        return heatmaps[0 | heatmap][Math.round(Math.min((value - min) / (max - min) * heatDepth, heatDepth))];
      }
      /**
      * Update counter number and legend.
      *
      * @return {Void}
      */
      function updateCounter() {
        // Update legend only when changed
        if (el.legend.fps !== showFps) {
          el.legend.fps = showFps;
          el.legend[textProp] = showFps ? 'FPS' : 'ms';
        }
        // Update counter with a nicely formated & readable number
        count = showFps ? self.fps : self.duration;
        el.count[textProp] = count > 999 ? '999+' : count.toFixed(count > 99 ? 0 : o.decimals);
      }
      /**
      * Render current FPS state.
      *
      * @return {Void}
      */
      function render() {
        time = getTime();
        // If renderer stopped reporting, do a simulated drop to 0 fps
        if (lastLoop < time - o.threshold) {
          self.fps -= self.fps / Math.max(1, o.smoothing * 60 / o.interval);
          self.duration = 1000 / self.fps;
        }
        historyTick();
        updateCounter();
        // Apply heat to elements
        if (o.heat) {
          if (heating.length) {
            for (i = heating.length; i--; ) {
              heating[i].el.style[theme[heating[i].name].heatOn] = showFps ? getHeat(theme[heating[i].name].heatmap, self.fps, 0, o.maxFps) : getHeat(theme[heating[i].name].heatmap, self.duration, o.threshold, 0);
            }
          }
          if (el.graph && theme.column.heatOn) {
            for (i = cols.length; i--; ) {
              cols[i].style[theme.column.heatOn] = showFps ? getHeat(theme.column.heatmap, fpsHistory[i], 0, o.maxFps) : getHeat(theme.column.heatmap, durationHistory[i], o.threshold, 0);
            }
          }
        }
        // Update graph columns height
        if (el.graph) {
          for (j = 0; j < o.history; j++) {
            cols[j].style.height = (showFps ? fpsHistory[j] ? Math.round(graphHeight / o.maxFps * Math.min(fpsHistory[j], o.maxFps)) : 0 : durationHistory[j] ? Math.round(graphHeight / o.threshold * Math.min(durationHistory[j], o.threshold)) : 0) + 'px';
          }
        }
      }
      /**
      * Request rendering loop.
      *
      * @return {Int} Animation frame index.
      */
      function requestRender() {
        if (o.interval < 20) {
          frameID = rAF(requestRender);
          render();
        } else {
          frameID = setTimeout(requestRender, o.interval);
          renderID = rAF(render);
        }
      }
      /**
      * Meter events handler.
      *
      * @return {Void}
      */
      function eventHandler(event) {
        event = event || window.event;
        if (event.preventDefault) {
          event.preventDefault();
          event.stopPropagation();
        } else {
          event.returnValue = false;
          event.cancelBubble = true;
        }
        self.toggle();
      }
      /**
      * Destroys the current FPSMeter instance.
      *
      * @return {Void}
      */
      self.destroy = function () {
        // Stop rendering
        self.pause();
        // Remove elements
        removeMeter();
        // Stop listening
        self.tick = self.tickStart = function () {};
      };
      /**
      * Remove meter element.
      *
      * @return {Void}
      */
      function removeMeter() {
        // Unbind listeners
        if (o.toggleOn) {
          listener(el.container, o.toggleOn, eventHandler, 1);
        }
        // Detach element
        anchor.removeChild(el.container);
      }
      /**
      * Sets the theme, and generates heatmaps when needed.
      */
      function setTheme() {
        theme = FPSMeter.theme[o.theme];
        // Generate heatmaps
        heatmaps = theme.compiledHeatmaps || [];
        if (!heatmaps.length && theme.heatmaps.length) {
          for (j = 0; j < theme.heatmaps.length; j++) {
            heatmaps[j] = [];
            for (i = 0; i <= heatDepth; i++) {
              heatmaps[j][i] = hslToHex(0.33 / heatDepth * i, theme.heatmaps[j].saturation, theme.heatmaps[j].lightness);
            }
          }
          theme.compiledHeatmaps = heatmaps;
        }
      }
      /**
      * Creates and attaches the meter element.
      *
      * @return {Void}
      */
      function createMeter() {
        // Remove old meter if present
        if (el.container) {
          removeMeter();
        }
        // Set theme
        setTheme();
        // Create elements
        el.container = applyTheme(newEl('div'), theme.container);
        el.count = el.container.appendChild(applyTheme(newEl('div'), theme.count));
        el.legend = el.container.appendChild(applyTheme(newEl('div'), theme.legend));
        el.graph = o.graph ? el.container.appendChild(applyTheme(newEl('div'), theme.graph)) : 0;
        // Add elements to heating array
        heating.length = 0;
        for (var key in el) {
          if (el[key] && theme[key].heatOn) {
            heating.push({
              name: key,
              el: el[key]
            });
          }
        }
        // Graph
        cols.length = 0;
        if (el.graph) {
          // Create graph
          el.graph.style.width = o.history * theme.column.width + (o.history - 1) * theme.column.spacing + 'px';
          // Add columns
          for (i = 0; i < o.history; i++) {
            cols[i] = el.graph.appendChild(applyTheme(newEl('div'), theme.column));
            cols[i].style.position = 'absolute';
            cols[i].style.bottom = 0;
            cols[i].style.right = i * theme.column.width + i * theme.column.spacing + 'px';
            cols[i].style.width = theme.column.width + 'px';
            cols[i].style.height = '0px';
          }
        }
        // Set the initial state
        positionMeter();
        updateCounter();
        // Append container to anchor
        anchor.appendChild(el.container);
        // Retrieve graph height after it was appended to DOM
        if (el.graph) {
          graphHeight = el.graph.clientHeight;
        }
        // Add event listeners
        if (o.toggleOn) {
          if (o.toggleOn === 'click') {
            el.container.style.cursor = 'pointer';
          }
          listener(el.container, o.toggleOn, eventHandler);
        }
      }
      /**
      * Positions the meter based on options.
      *
      * @return {Void}
      */
      function positionMeter() {
        applyTheme(el.container, o);
      }
      /**
      * Construct.
      */
      (function () {
        // Create meter element
        createMeter();
        // Start rendering
        requestRender();
      })();
    }
    // Expose the extend function
    FPSMeter.extend = extend;
    // Expose the FPSMeter class
    window.FPSMeter = FPSMeter;
    // Default options
    FPSMeter.defaults = {
      interval: 100,
      // Update interval in milliseconds.
      smoothing: 10,
      // Spike smoothing strength. 1 means no smoothing.
      show: 'fps',
      // Whether to show 'fps', or 'ms' = frame duration in milliseconds.
      toggleOn: 'click',
      // Toggle between show 'fps' and 'ms' on this event.
      decimals: 1,
      // Number of decimals in FPS number. 1 = 59.9, 2 = 59.94, ...
      maxFps: 60,
      // Max expected FPS value.
      threshold: 100,
      // Minimal tick reporting interval in milliseconds.
      // Meter position
      position: 'absolute',
      // Meter position.
      zIndex: 10,
      // Meter Z index.
      left: '5px',
      // Meter left offset.
      top: '5px',
      // Meter top offset.
      right: 'auto',
      // Meter right offset.
      bottom: 'auto',
      // Meter bottom offset.
      margin: '0 0 0 0',
      // Meter margin. Helps with centering the counter when left: 50%;
      // Theme
      theme: 'dark',
      // Meter theme. Build in: 'dark', 'light', 'transparent', 'colorful'.
      heat: 0,
      // Allow themes to use coloring by FPS heat. 0 FPS = red, maxFps = green.
      // Graph
      graph: 0,
      // Whether to show history graph.
      history: 20
    };
    // Option names that trigger FPSMeter rebuild or reposition when modified
    var rebuilders = ['toggleOn', 'theme', 'heat', 'graph', 'history'];
    var repositioners = ['position', 'zIndex', 'left', 'top', 'right', 'bottom', 'margin'];
  })(window);
  ;
  (function (w, FPSMeter, undefined) {
    // Themes object
    FPSMeter.theme = {};
    // Base theme with layout, no colors
    var base = FPSMeter.theme.base = {
      heatmaps: [],
      container: {
        // Settings
        heatOn: null,
        heatmap: null,
        // Styles
        padding: '5px',
        minWidth: '95px',
        height: '30px',
        lineHeight: '30px',
        textAlign: 'right',
        textShadow: 'none'
      },
      count: {
        // Settings
        heatOn: null,
        heatmap: null,
        // Styles
        position: 'absolute',
        top: 0,
        right: 0,
        padding: '5px 10px',
        height: '30px',
        fontSize: '24px',
        fontFamily: 'Consolas, Andale Mono, monospace',
        zIndex: 2
      },
      legend: {
        // Settings
        heatOn: null,
        heatmap: null,
        // Styles
        position: 'absolute',
        top: 0,
        left: 0,
        padding: '5px 10px',
        height: '30px',
        fontSize: '12px',
        lineHeight: '32px',
        fontFamily: 'sans-serif',
        textAlign: 'left',
        zIndex: 2
      },
      graph: {
        // Settings
        heatOn: null,
        heatmap: null,
        // Styles
        position: 'relative',
        boxSizing: 'padding-box',
        MozBoxSizing: 'padding-box',
        height: '100%',
        zIndex: 1
      },
      column: {
        // Settings
        width: 4,
        spacing: 1,
        heatOn: null,
        heatmap: null
      }
    };
    // Dark theme
    FPSMeter.theme.dark = FPSMeter.extend({}, base, {
      heatmaps: [{
        saturation: 0.8,
        lightness: 0.8
      }],
      container: {
        background: '#222',
        color: '#fff',
        border: '1px solid #1a1a1a',
        textShadow: '1px 1px 0 #222'
      },
      count: {
        heatOn: 'color'
      },
      column: {
        background: '#3f3f3f'
      }
    });
    // Light theme
    FPSMeter.theme.light = FPSMeter.extend({}, base, {
      heatmaps: [{
        saturation: 0.5,
        lightness: 0.5
      }],
      container: {
        color: '#666',
        background: '#fff',
        textShadow: '1px 1px 0 rgba(255,255,255,.5), -1px -1px 0 rgba(255,255,255,.5)',
        boxShadow: '0 0 0 1px rgba(0,0,0,.1)'
      },
      count: {
        heatOn: 'color'
      },
      column: {
        background: '#eaeaea'
      }
    });
    // Colorful theme
    FPSMeter.theme.colorful = FPSMeter.extend({}, base, {
      heatmaps: [{
        saturation: 0.5,
        lightness: 0.6
      }],
      container: {
        heatOn: 'backgroundColor',
        background: '#888',
        color: '#fff',
        textShadow: '1px 1px 0 rgba(0,0,0,.2)',
        boxShadow: '0 0 0 1px rgba(0,0,0,.1)'
      },
      column: {
        background: '#777',
        backgroundColor: 'rgba(0,0,0,.2)'
      }
    });
    // Transparent theme
    FPSMeter.theme.transparent = FPSMeter.extend({}, base, {
      heatmaps: [{
        saturation: 0.8,
        lightness: 0.5
      }],
      container: {
        padding: 0,
        color: '#fff',
        textShadow: '1px 1px 0 rgba(0,0,0,.5)'
      },
      count: {
        padding: '0 5px',
        height: '40px',
        lineHeight: '40px'
      },
      legend: {
        padding: '0 5px',
        height: '40px',
        lineHeight: '42px'
      },
      graph: {
        height: '40px'
      },
      column: {
        width: 5,
        background: '#999',
        heatOn: 'backgroundColor',
        opacity: 0.5
      }
    });
  })(window, FPSMeter);
  var $d62aa320cc500c815d2fd0c000e80e4d$export$default = function (constructor, factory, prototype) {
    constructor.prototype = factory.prototype = prototype;
    prototype.constructor = constructor;
  };
  function $d62aa320cc500c815d2fd0c000e80e4d$export$extend(parent, definition) {
    var prototype = Object.create(parent.prototype);
    for (var key in definition) prototype[key] = definition[key];
    return prototype;
  }
  function $af4ad10b60118211d1082e6b107c9493$export$Color() {}
  var $af4ad10b60118211d1082e6b107c9493$export$darker = 0.7;
  var $af4ad10b60118211d1082e6b107c9493$export$brighter = 1 / $af4ad10b60118211d1082e6b107c9493$export$darker;
  var $af4ad10b60118211d1082e6b107c9493$var$reI = "\\s*([+-]?\\d+)\\s*", $af4ad10b60118211d1082e6b107c9493$var$reN = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*", $af4ad10b60118211d1082e6b107c9493$var$reP = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*", $af4ad10b60118211d1082e6b107c9493$var$reHex = /^#([0-9a-f]{3,8})$/, $af4ad10b60118211d1082e6b107c9493$var$reRgbInteger = new RegExp("^rgb\\(" + [$af4ad10b60118211d1082e6b107c9493$var$reI, $af4ad10b60118211d1082e6b107c9493$var$reI, $af4ad10b60118211d1082e6b107c9493$var$reI] + "\\)$"), $af4ad10b60118211d1082e6b107c9493$var$reRgbPercent = new RegExp("^rgb\\(" + [$af4ad10b60118211d1082e6b107c9493$var$reP, $af4ad10b60118211d1082e6b107c9493$var$reP, $af4ad10b60118211d1082e6b107c9493$var$reP] + "\\)$"), $af4ad10b60118211d1082e6b107c9493$var$reRgbaInteger = new RegExp("^rgba\\(" + [$af4ad10b60118211d1082e6b107c9493$var$reI, $af4ad10b60118211d1082e6b107c9493$var$reI, $af4ad10b60118211d1082e6b107c9493$var$reI, $af4ad10b60118211d1082e6b107c9493$var$reN] + "\\)$"), $af4ad10b60118211d1082e6b107c9493$var$reRgbaPercent = new RegExp("^rgba\\(" + [$af4ad10b60118211d1082e6b107c9493$var$reP, $af4ad10b60118211d1082e6b107c9493$var$reP, $af4ad10b60118211d1082e6b107c9493$var$reP, $af4ad10b60118211d1082e6b107c9493$var$reN] + "\\)$"), $af4ad10b60118211d1082e6b107c9493$var$reHslPercent = new RegExp("^hsl\\(" + [$af4ad10b60118211d1082e6b107c9493$var$reN, $af4ad10b60118211d1082e6b107c9493$var$reP, $af4ad10b60118211d1082e6b107c9493$var$reP] + "\\)$"), $af4ad10b60118211d1082e6b107c9493$var$reHslaPercent = new RegExp("^hsla\\(" + [$af4ad10b60118211d1082e6b107c9493$var$reN, $af4ad10b60118211d1082e6b107c9493$var$reP, $af4ad10b60118211d1082e6b107c9493$var$reP, $af4ad10b60118211d1082e6b107c9493$var$reN] + "\\)$");
  var $af4ad10b60118211d1082e6b107c9493$var$named = {
    aliceblue: 0xf0f8ff,
    antiquewhite: 0xfaebd7,
    aqua: 0x00ffff,
    aquamarine: 0x7fffd4,
    azure: 0xf0ffff,
    beige: 0xf5f5dc,
    bisque: 0xffe4c4,
    black: 0x000000,
    blanchedalmond: 0xffebcd,
    blue: 0x0000ff,
    blueviolet: 0x8a2be2,
    brown: 0xa52a2a,
    burlywood: 0xdeb887,
    cadetblue: 0x5f9ea0,
    chartreuse: 0x7fff00,
    chocolate: 0xd2691e,
    coral: 0xff7f50,
    cornflowerblue: 0x6495ed,
    cornsilk: 0xfff8dc,
    crimson: 0xdc143c,
    cyan: 0x00ffff,
    darkblue: 0x00008b,
    darkcyan: 0x008b8b,
    darkgoldenrod: 0xb8860b,
    darkgray: 0xa9a9a9,
    darkgreen: 0x006400,
    darkgrey: 0xa9a9a9,
    darkkhaki: 0xbdb76b,
    darkmagenta: 0x8b008b,
    darkolivegreen: 0x556b2f,
    darkorange: 0xff8c00,
    darkorchid: 0x9932cc,
    darkred: 0x8b0000,
    darksalmon: 0xe9967a,
    darkseagreen: 0x8fbc8f,
    darkslateblue: 0x483d8b,
    darkslategray: 0x2f4f4f,
    darkslategrey: 0x2f4f4f,
    darkturquoise: 0x00ced1,
    darkviolet: 0x9400d3,
    deeppink: 0xff1493,
    deepskyblue: 0x00bfff,
    dimgray: 0x696969,
    dimgrey: 0x696969,
    dodgerblue: 0x1e90ff,
    firebrick: 0xb22222,
    floralwhite: 0xfffaf0,
    forestgreen: 0x228b22,
    fuchsia: 0xff00ff,
    gainsboro: 0xdcdcdc,
    ghostwhite: 0xf8f8ff,
    gold: 0xffd700,
    goldenrod: 0xdaa520,
    gray: 0x808080,
    green: 0x008000,
    greenyellow: 0xadff2f,
    grey: 0x808080,
    honeydew: 0xf0fff0,
    hotpink: 0xff69b4,
    indianred: 0xcd5c5c,
    indigo: 0x4b0082,
    ivory: 0xfffff0,
    khaki: 0xf0e68c,
    lavender: 0xe6e6fa,
    lavenderblush: 0xfff0f5,
    lawngreen: 0x7cfc00,
    lemonchiffon: 0xfffacd,
    lightblue: 0xadd8e6,
    lightcoral: 0xf08080,
    lightcyan: 0xe0ffff,
    lightgoldenrodyellow: 0xfafad2,
    lightgray: 0xd3d3d3,
    lightgreen: 0x90ee90,
    lightgrey: 0xd3d3d3,
    lightpink: 0xffb6c1,
    lightsalmon: 0xffa07a,
    lightseagreen: 0x20b2aa,
    lightskyblue: 0x87cefa,
    lightslategray: 0x778899,
    lightslategrey: 0x778899,
    lightsteelblue: 0xb0c4de,
    lightyellow: 0xffffe0,
    lime: 0x00ff00,
    limegreen: 0x32cd32,
    linen: 0xfaf0e6,
    magenta: 0xff00ff,
    maroon: 0x800000,
    mediumaquamarine: 0x66cdaa,
    mediumblue: 0x0000cd,
    mediumorchid: 0xba55d3,
    mediumpurple: 0x9370db,
    mediumseagreen: 0x3cb371,
    mediumslateblue: 0x7b68ee,
    mediumspringgreen: 0x00fa9a,
    mediumturquoise: 0x48d1cc,
    mediumvioletred: 0xc71585,
    midnightblue: 0x191970,
    mintcream: 0xf5fffa,
    mistyrose: 0xffe4e1,
    moccasin: 0xffe4b5,
    navajowhite: 0xffdead,
    navy: 0x000080,
    oldlace: 0xfdf5e6,
    olive: 0x808000,
    olivedrab: 0x6b8e23,
    orange: 0xffa500,
    orangered: 0xff4500,
    orchid: 0xda70d6,
    palegoldenrod: 0xeee8aa,
    palegreen: 0x98fb98,
    paleturquoise: 0xafeeee,
    palevioletred: 0xdb7093,
    papayawhip: 0xffefd5,
    peachpuff: 0xffdab9,
    peru: 0xcd853f,
    pink: 0xffc0cb,
    plum: 0xdda0dd,
    powderblue: 0xb0e0e6,
    purple: 0x800080,
    rebeccapurple: 0x663399,
    red: 0xff0000,
    rosybrown: 0xbc8f8f,
    royalblue: 0x4169e1,
    saddlebrown: 0x8b4513,
    salmon: 0xfa8072,
    sandybrown: 0xf4a460,
    seagreen: 0x2e8b57,
    seashell: 0xfff5ee,
    sienna: 0xa0522d,
    silver: 0xc0c0c0,
    skyblue: 0x87ceeb,
    slateblue: 0x6a5acd,
    slategray: 0x708090,
    slategrey: 0x708090,
    snow: 0xfffafa,
    springgreen: 0x00ff7f,
    steelblue: 0x4682b4,
    tan: 0xd2b48c,
    teal: 0x008080,
    thistle: 0xd8bfd8,
    tomato: 0xff6347,
    turquoise: 0x40e0d0,
    violet: 0xee82ee,
    wheat: 0xf5deb3,
    white: 0xffffff,
    whitesmoke: 0xf5f5f5,
    yellow: 0xffff00,
    yellowgreen: 0x9acd32
  };
  $d62aa320cc500c815d2fd0c000e80e4d$export$default($af4ad10b60118211d1082e6b107c9493$export$Color, $af4ad10b60118211d1082e6b107c9493$export$default, {
    copy: function (channels) {
      return Object.assign(new this.constructor(), this, channels);
    },
    displayable: function () {
      return this.rgb().displayable();
    },
    hex: $af4ad10b60118211d1082e6b107c9493$var$color_formatHex,
    // Deprecated! Use color.formatHex.
    formatHex: $af4ad10b60118211d1082e6b107c9493$var$color_formatHex,
    formatHsl: $af4ad10b60118211d1082e6b107c9493$var$color_formatHsl,
    formatRgb: $af4ad10b60118211d1082e6b107c9493$var$color_formatRgb,
    toString: $af4ad10b60118211d1082e6b107c9493$var$color_formatRgb
  });
  function $af4ad10b60118211d1082e6b107c9493$var$color_formatHex() {
    return this.rgb().formatHex();
  }
  function $af4ad10b60118211d1082e6b107c9493$var$color_formatHsl() {
    return $af4ad10b60118211d1082e6b107c9493$export$hslConvert(this).formatHsl();
  }
  function $af4ad10b60118211d1082e6b107c9493$var$color_formatRgb() {
    return this.rgb().formatRgb();
  }
  function $af4ad10b60118211d1082e6b107c9493$export$default(format) {
    var m, l;
    format = (format + "").trim().toLowerCase();
    return (m = $af4ad10b60118211d1082e6b107c9493$var$reHex.exec(format)) ? (l = m[1].length, m = parseInt(m[1], 16), l === 6 ? $af4ad10b60118211d1082e6b107c9493$var$rgbn(m) : // #ff0000
    l === 3 ? new $af4ad10b60118211d1082e6b107c9493$export$Rgb(m >> 8 & 0xf | m >> 4 & 0xf0, m >> 4 & 0xf | m & 0xf0, (m & 0xf) << 4 | m & 0xf, 1) : // #f00
    l === 8 ? $af4ad10b60118211d1082e6b107c9493$var$rgba(m >> 24 & 0xff, m >> 16 & 0xff, m >> 8 & 0xff, (m & 0xff) / 0xff) : // #ff000000
    l === 4 ? $af4ad10b60118211d1082e6b107c9493$var$rgba(m >> 12 & 0xf | m >> 8 & 0xf0, m >> 8 & 0xf | m >> 4 & 0xf0, m >> 4 & 0xf | m & 0xf0, ((m & 0xf) << 4 | m & 0xf) / 0xff) : // #f000
    null) : // invalid hex
    (m = $af4ad10b60118211d1082e6b107c9493$var$reRgbInteger.exec(format)) ? new $af4ad10b60118211d1082e6b107c9493$export$Rgb(m[1], m[2], m[3], 1) : // rgb(255, 0, 0)
    (m = $af4ad10b60118211d1082e6b107c9493$var$reRgbPercent.exec(format)) ? new $af4ad10b60118211d1082e6b107c9493$export$Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) : // rgb(100%, 0%, 0%)
    (m = $af4ad10b60118211d1082e6b107c9493$var$reRgbaInteger.exec(format)) ? $af4ad10b60118211d1082e6b107c9493$var$rgba(m[1], m[2], m[3], m[4]) : // rgba(255, 0, 0, 1)
    (m = $af4ad10b60118211d1082e6b107c9493$var$reRgbaPercent.exec(format)) ? $af4ad10b60118211d1082e6b107c9493$var$rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) : // rgb(100%, 0%, 0%, 1)
    (m = $af4ad10b60118211d1082e6b107c9493$var$reHslPercent.exec(format)) ? $af4ad10b60118211d1082e6b107c9493$var$hsla(m[1], m[2] / 100, m[3] / 100, 1) : // hsl(120, 50%, 50%)
    (m = $af4ad10b60118211d1082e6b107c9493$var$reHslaPercent.exec(format)) ? $af4ad10b60118211d1082e6b107c9493$var$hsla(m[1], m[2] / 100, m[3] / 100, m[4]) : // hsla(120, 50%, 50%, 1)
    $af4ad10b60118211d1082e6b107c9493$var$named.hasOwnProperty(format) ? $af4ad10b60118211d1082e6b107c9493$var$rgbn($af4ad10b60118211d1082e6b107c9493$var$named[format]) : // eslint-disable-line no-prototype-builtins
    format === "transparent" ? new $af4ad10b60118211d1082e6b107c9493$export$Rgb(NaN, NaN, NaN, 0) : null;
  }
  function $af4ad10b60118211d1082e6b107c9493$var$rgbn(n) {
    return new $af4ad10b60118211d1082e6b107c9493$export$Rgb(n >> 16 & 0xff, n >> 8 & 0xff, n & 0xff, 1);
  }
  function $af4ad10b60118211d1082e6b107c9493$var$rgba(r, g, b, a) {
    if (a <= 0) r = g = b = NaN;
    return new $af4ad10b60118211d1082e6b107c9493$export$Rgb(r, g, b, a);
  }
  function $af4ad10b60118211d1082e6b107c9493$export$rgbConvert(o) {
    if (!(o instanceof $af4ad10b60118211d1082e6b107c9493$export$Color)) o = $af4ad10b60118211d1082e6b107c9493$export$default(o);
    if (!o) return new $af4ad10b60118211d1082e6b107c9493$export$Rgb();
    o = o.rgb();
    return new $af4ad10b60118211d1082e6b107c9493$export$Rgb(o.r, o.g, o.b, o.opacity);
  }
  function $af4ad10b60118211d1082e6b107c9493$export$rgb(r, g, b, opacity) {
    return arguments.length === 1 ? $af4ad10b60118211d1082e6b107c9493$export$rgbConvert(r) : new $af4ad10b60118211d1082e6b107c9493$export$Rgb(r, g, b, opacity == null ? 1 : opacity);
  }
  function $af4ad10b60118211d1082e6b107c9493$export$Rgb(r, g, b, opacity) {
    this.r = +r;
    this.g = +g;
    this.b = +b;
    this.opacity = +opacity;
  }
  $d62aa320cc500c815d2fd0c000e80e4d$export$default($af4ad10b60118211d1082e6b107c9493$export$Rgb, $af4ad10b60118211d1082e6b107c9493$export$rgb, $d62aa320cc500c815d2fd0c000e80e4d$export$extend($af4ad10b60118211d1082e6b107c9493$export$Color, {
    brighter: function (k) {
      k = k == null ? $af4ad10b60118211d1082e6b107c9493$export$brighter : Math.pow($af4ad10b60118211d1082e6b107c9493$export$brighter, k);
      return new $af4ad10b60118211d1082e6b107c9493$export$Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
    },
    darker: function (k) {
      k = k == null ? $af4ad10b60118211d1082e6b107c9493$export$darker : Math.pow($af4ad10b60118211d1082e6b107c9493$export$darker, k);
      return new $af4ad10b60118211d1082e6b107c9493$export$Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
    },
    rgb: function () {
      return this;
    },
    displayable: function () {
      return -0.5 <= this.r && this.r < 255.5 && (-0.5 <= this.g && this.g < 255.5) && (-0.5 <= this.b && this.b < 255.5) && (0 <= this.opacity && this.opacity <= 1);
    },
    hex: $af4ad10b60118211d1082e6b107c9493$var$rgb_formatHex,
    // Deprecated! Use color.formatHex.
    formatHex: $af4ad10b60118211d1082e6b107c9493$var$rgb_formatHex,
    formatRgb: $af4ad10b60118211d1082e6b107c9493$var$rgb_formatRgb,
    toString: $af4ad10b60118211d1082e6b107c9493$var$rgb_formatRgb
  }));
  function $af4ad10b60118211d1082e6b107c9493$var$rgb_formatHex() {
    return "#" + $af4ad10b60118211d1082e6b107c9493$var$hex(this.r) + $af4ad10b60118211d1082e6b107c9493$var$hex(this.g) + $af4ad10b60118211d1082e6b107c9493$var$hex(this.b);
  }
  function $af4ad10b60118211d1082e6b107c9493$var$rgb_formatRgb() {
    var a = this.opacity;
    a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
    return (a === 1 ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (a === 1 ? ")" : ", " + a + ")");
  }
  function $af4ad10b60118211d1082e6b107c9493$var$hex(value) {
    value = Math.max(0, Math.min(255, Math.round(value) || 0));
    return (value < 16 ? "0" : "") + value.toString(16);
  }
  function $af4ad10b60118211d1082e6b107c9493$var$hsla(h, s, l, a) {
    if (a <= 0) h = s = l = NaN; else if (l <= 0 || l >= 1) h = s = NaN; else if (s <= 0) h = NaN;
    return new $af4ad10b60118211d1082e6b107c9493$var$Hsl(h, s, l, a);
  }
  function $af4ad10b60118211d1082e6b107c9493$export$hslConvert(o) {
    if (o instanceof $af4ad10b60118211d1082e6b107c9493$var$Hsl) return new $af4ad10b60118211d1082e6b107c9493$var$Hsl(o.h, o.s, o.l, o.opacity);
    if (!(o instanceof $af4ad10b60118211d1082e6b107c9493$export$Color)) o = $af4ad10b60118211d1082e6b107c9493$export$default(o);
    if (!o) return new $af4ad10b60118211d1082e6b107c9493$var$Hsl();
    if (o instanceof $af4ad10b60118211d1082e6b107c9493$var$Hsl) return o;
    o = o.rgb();
    var r = o.r / 255, g = o.g / 255, b = o.b / 255, min = Math.min(r, g, b), max = Math.max(r, g, b), h = NaN, s = max - min, l = (max + min) / 2;
    if (s) {
      if (r === max) h = (g - b) / s + (g < b) * 6; else if (g === max) h = (b - r) / s + 2; else h = (r - g) / s + 4;
      s /= l < 0.5 ? max + min : 2 - max - min;
      h *= 60;
    } else {
      s = l > 0 && l < 1 ? 0 : h;
    }
    return new $af4ad10b60118211d1082e6b107c9493$var$Hsl(h, s, l, o.opacity);
  }
  function $af4ad10b60118211d1082e6b107c9493$export$hsl(h, s, l, opacity) {
    return arguments.length === 1 ? $af4ad10b60118211d1082e6b107c9493$export$hslConvert(h) : new $af4ad10b60118211d1082e6b107c9493$var$Hsl(h, s, l, opacity == null ? 1 : opacity);
  }
  function $af4ad10b60118211d1082e6b107c9493$var$Hsl(h, s, l, opacity) {
    this.h = +h;
    this.s = +s;
    this.l = +l;
    this.opacity = +opacity;
  }
  $d62aa320cc500c815d2fd0c000e80e4d$export$default($af4ad10b60118211d1082e6b107c9493$var$Hsl, $af4ad10b60118211d1082e6b107c9493$export$hsl, $d62aa320cc500c815d2fd0c000e80e4d$export$extend($af4ad10b60118211d1082e6b107c9493$export$Color, {
    brighter: function (k) {
      k = k == null ? $af4ad10b60118211d1082e6b107c9493$export$brighter : Math.pow($af4ad10b60118211d1082e6b107c9493$export$brighter, k);
      return new $af4ad10b60118211d1082e6b107c9493$var$Hsl(this.h, this.s, this.l * k, this.opacity);
    },
    darker: function (k) {
      k = k == null ? $af4ad10b60118211d1082e6b107c9493$export$darker : Math.pow($af4ad10b60118211d1082e6b107c9493$export$darker, k);
      return new $af4ad10b60118211d1082e6b107c9493$var$Hsl(this.h, this.s, this.l * k, this.opacity);
    },
    rgb: function () {
      var h = this.h % 360 + (this.h < 0) * 360, s = isNaN(h) || isNaN(this.s) ? 0 : this.s, l = this.l, m2 = l + (l < 0.5 ? l : 1 - l) * s, m1 = 2 * l - m2;
      return new $af4ad10b60118211d1082e6b107c9493$export$Rgb($af4ad10b60118211d1082e6b107c9493$var$hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2), $af4ad10b60118211d1082e6b107c9493$var$hsl2rgb(h, m1, m2), $af4ad10b60118211d1082e6b107c9493$var$hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2), this.opacity);
    },
    displayable: function () {
      return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && (0 <= this.l && this.l <= 1) && (0 <= this.opacity && this.opacity <= 1);
    },
    formatHsl: function () {
      var a = this.opacity;
      a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
      return (a === 1 ? "hsl(" : "hsla(") + (this.h || 0) + ", " + (this.s || 0) * 100 + "%, " + (this.l || 0) * 100 + "%" + (a === 1 ? ")" : ", " + a + ")");
    }
  }));
  /*From FvD 13.37, CSS Color Module Level 3*/
  function $af4ad10b60118211d1082e6b107c9493$var$hsl2rgb(h, m1, m2) {
    return (h < 60 ? m1 + (m2 - m1) * h / 60 : h < 180 ? m2 : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60 : m1) * 255;
  }
  const $c178fae7767ea8147bbb573141e780e5$export$radians = Math.PI / 180;
  const $c178fae7767ea8147bbb573141e780e5$export$degrees = 180 / Math.PI;
  var $79f190ed402495135fad2dd69bf11529$var$A = -0.14861, $79f190ed402495135fad2dd69bf11529$var$B = +1.78277, $79f190ed402495135fad2dd69bf11529$var$C = -0.29227, $79f190ed402495135fad2dd69bf11529$var$D = -0.90649, $79f190ed402495135fad2dd69bf11529$var$E = +1.97294, $79f190ed402495135fad2dd69bf11529$var$ED = $79f190ed402495135fad2dd69bf11529$var$E * $79f190ed402495135fad2dd69bf11529$var$D, $79f190ed402495135fad2dd69bf11529$var$EB = $79f190ed402495135fad2dd69bf11529$var$E * $79f190ed402495135fad2dd69bf11529$var$B, $79f190ed402495135fad2dd69bf11529$var$BC_DA = $79f190ed402495135fad2dd69bf11529$var$B * $79f190ed402495135fad2dd69bf11529$var$C - $79f190ed402495135fad2dd69bf11529$var$D * $79f190ed402495135fad2dd69bf11529$var$A;
  function $79f190ed402495135fad2dd69bf11529$var$cubehelixConvert(o) {
    if (o instanceof $79f190ed402495135fad2dd69bf11529$export$Cubehelix) return new $79f190ed402495135fad2dd69bf11529$export$Cubehelix(o.h, o.s, o.l, o.opacity);
    if (!(o instanceof $af4ad10b60118211d1082e6b107c9493$export$Rgb)) o = $af4ad10b60118211d1082e6b107c9493$export$rgbConvert(o);
    var r = o.r / 255, g = o.g / 255, b = o.b / 255, l = ($79f190ed402495135fad2dd69bf11529$var$BC_DA * b + $79f190ed402495135fad2dd69bf11529$var$ED * r - $79f190ed402495135fad2dd69bf11529$var$EB * g) / ($79f190ed402495135fad2dd69bf11529$var$BC_DA + $79f190ed402495135fad2dd69bf11529$var$ED - $79f190ed402495135fad2dd69bf11529$var$EB), bl = b - l, k = ($79f190ed402495135fad2dd69bf11529$var$E * (g - l) - $79f190ed402495135fad2dd69bf11529$var$C * bl) / $79f190ed402495135fad2dd69bf11529$var$D, s = Math.sqrt(k * k + bl * bl) / ($79f190ed402495135fad2dd69bf11529$var$E * l * (1 - l)), // NaN if l=0 or l=1
    h = s ? Math.atan2(k, bl) * $c178fae7767ea8147bbb573141e780e5$export$degrees - 120 : NaN;
    return new $79f190ed402495135fad2dd69bf11529$export$Cubehelix(h < 0 ? h + 360 : h, s, l, o.opacity);
  }
  function $79f190ed402495135fad2dd69bf11529$export$default(h, s, l, opacity) {
    return arguments.length === 1 ? $79f190ed402495135fad2dd69bf11529$var$cubehelixConvert(h) : new $79f190ed402495135fad2dd69bf11529$export$Cubehelix(h, s, l, opacity == null ? 1 : opacity);
  }
  function $79f190ed402495135fad2dd69bf11529$export$Cubehelix(h, s, l, opacity) {
    this.h = +h;
    this.s = +s;
    this.l = +l;
    this.opacity = +opacity;
  }
  $d62aa320cc500c815d2fd0c000e80e4d$export$default($79f190ed402495135fad2dd69bf11529$export$Cubehelix, $79f190ed402495135fad2dd69bf11529$export$default, $d62aa320cc500c815d2fd0c000e80e4d$export$extend($af4ad10b60118211d1082e6b107c9493$export$Color, {
    brighter: function (k) {
      k = k == null ? $af4ad10b60118211d1082e6b107c9493$export$brighter : Math.pow($af4ad10b60118211d1082e6b107c9493$export$brighter, k);
      return new $79f190ed402495135fad2dd69bf11529$export$Cubehelix(this.h, this.s, this.l * k, this.opacity);
    },
    darker: function (k) {
      k = k == null ? $af4ad10b60118211d1082e6b107c9493$export$darker : Math.pow($af4ad10b60118211d1082e6b107c9493$export$darker, k);
      return new $79f190ed402495135fad2dd69bf11529$export$Cubehelix(this.h, this.s, this.l * k, this.opacity);
    },
    rgb: function () {
      var h = isNaN(this.h) ? 0 : (this.h + 120) * $c178fae7767ea8147bbb573141e780e5$export$radians, l = +this.l, a = isNaN(this.s) ? 0 : this.s * l * (1 - l), cosh = Math.cos(h), sinh = Math.sin(h);
      return new $af4ad10b60118211d1082e6b107c9493$export$Rgb(255 * (l + a * ($79f190ed402495135fad2dd69bf11529$var$A * cosh + $79f190ed402495135fad2dd69bf11529$var$B * sinh)), 255 * (l + a * ($79f190ed402495135fad2dd69bf11529$var$C * cosh + $79f190ed402495135fad2dd69bf11529$var$D * sinh)), 255 * (l + a * ($79f190ed402495135fad2dd69bf11529$var$E * cosh)), this.opacity);
    }
  }));
  /**
  * Returns a linear scale to map elements in domain to elements in range.
  * @param {Array} domain array of length two containing minimum and maximum values
  * @param {Array} range array of length two containing minimum and maximum values
  * @returns linear scale mapping domain to range
  */
  function $794bbb298c1fc0cc3157526701549b8c$export$scale(domain, range) {
    const domainLength = domain[1] - domain[0];
    const rangeLength = range[1] - range[0];
    const slope = rangeLength / domainLength;
    const intercept = range[1] - slope * domain[1];
    return x => slope * x + intercept;
  }
  /**
  * Maps RGB values to integer for webgl buffer.
  *
  * @param {Integer} red value from 0 to 255
  * @param {Integer} green value from 0 to 255
  * @param {Integer} blue value from 0 to 255
  * @returns RGB hex value as integer
  */
  function $794bbb298c1fc0cc3157526701549b8c$export$rgbToHex(red, green, blue) {
    return red << 16 | green << 8 | blue << 0;
  }
  function $794bbb298c1fc0cc3157526701549b8c$export$rgbStringToHex(rgb) {
    const colorVals = rgb.substring(4, rgb.length - 1).split(",");
    return $794bbb298c1fc0cc3157526701549b8c$export$rgbToHex(...colorVals.map(asStr => parseInt(asStr)));
  }
  function $794bbb298c1fc0cc3157526701549b8c$export$colorSpecifierToHex(specifier) {
    if (!isNaN(specifier)) {
      // Specifier is already a hex value
      return Math.floor(specifier);
    }
    const asColor = $af4ad10b60118211d1082e6b107c9493$export$default(specifier);
    return $794bbb298c1fc0cc3157526701549b8c$export$rgbToHex(asColor.r, asColor.g, asColor.b);
  }
  function $794bbb298c1fc0cc3157526701549b8c$export$schemaViewport(schema) {
    let smallestX = Number.POSITIVE_INFINITY;
    let largestX = Number.NEGATIVE_INFINITY;
    let smallestY = Number.POSITIVE_INFINITY;
    let largestY = Number.NEGATIVE_INFINITY;
    schema.tracks.forEach(track => {
      let xDomain = track.x.domain;
      let yDomain = track.y.domain;
      if (xDomain) {
        smallestX = xDomain[0] < smallestX ? xDomain[0] : smallestX;
        largestX = xDomain[1] > largestX ? xDomain[1] : largestX;
      }
      if (yDomain) {
        smallestY = yDomain[0] < smallestY ? yDomain[0] : smallestY;
        largestY = yDomain[1] > largestY ? yDomain[1] : largestY;
      }
    });
    smallestX = smallestX === Number.POSITIVE_INFINITY ? -1 : smallestX;
    largestX = largestX === Number.NEGATIVE_INFINITY ? 1 : largestX;
    smallestY = smallestY === Number.POSITIVE_INFINITY ? -1 : smallestY;
    largestY = largestY === Number.NEGATIVE_INFINITY ? 1 : largestY;
    return [smallestX, largestX, smallestY, largestY];
  }
  class $ea9fc8a1b0a7e0be7497639e5ed20241$export$default {
    /**
    *
    * @param {HTMLElement} element meant to read mouse events, necessary since OffscreenCanvas cannot read DOM events
    * @param {Handler} handler that is using
    */
    constructor(element, handler) {
      this.element = element;
      this.element.style.position = "absolute";
      this.element.style.width = "100%";
      this.element.style.height = "100%";
      this.element.id = "mouse-reader";
      this.handler = handler;
      this._currentSelectionPoints = [];
      this.tool = "box";
      // Initializing elements to show user their current selection
      this._selectContainer = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      this._selectContainer.style.width = "100%";
      this._selectContainer.style.height = "100%";
      this._selectContainer.style.position = "absolute";
      this._selectContainer.style.zIndex = "1000";
      this._selectContainer.style.pointerEvents = "none";
      this._selectMarker = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
      this._selectMarker.setAttribute("fill", "rgba(124, 124, 247, 0.3)");
      this._selectMarker.setAttribute("stroke", "rgb(136, 128, 247)");
      this._selectMarker.setAttribute("stroke-width", 1);
      this._selectMarker.setAttribute("stroke-dasharray", "5,5");
    }
    /**
    * Set the viewport in the format mouseReader.viewport = [minX, maxX, minY, maxY].
    * Mostly used to make Scatterplot.setOptions simpler.
    */
    set viewport(toSet) {
      this.minX = toSet[0];
      this.maxX = toSet[1];
      this.minY = toSet[2];
      this.maxY = toSet[3];
      this.currentXRange = [this.minX, this.maxX];
      this.currentYRange = [this.minY, this.maxY];
      this._wheelDampenX = (this.maxX - this.minX) / 1000;
      this._wheelDampenY = (this.maxY - this.minY) / 1000;
      this._panDampenX = (this.maxX - this.minX) / 1000;
      this._panDampenY = (this.maxY - this.minY) / 1000;
    }
    /**
    * Init the mouse reader by adding its elements to DOM and adding event handlers
    */
    init() {
      this.width = this.element.clientWidth;
      this.height = this.element.clientHeight;
      this.element.appendChild(this._selectContainer);
      this._selectContainer.appendChild(this._selectMarker);
      this.element.addEventListener("wheel", this._onWheel.bind(this), false);
      let mouseDown = false;
      this.element.addEventListener("mousedown", event => {
        mouseDown = true;
        switch (this.tool) {
          case "pan":
            break;
          case "box":
          case "lasso":
            this._currentSelectionPoints = [...this._calculateViewportSpot(event.layerX, event.layerY)];
            break;
        }
      }, false);
      this.element.addEventListener("mousemove", event => {
        if (!mouseDown) {
          return;
        }
        switch (this.tool) {
          case "pan":
            this._onPan(event);
            break;
          case "box":
            this._currentSelectionPoints = this._currentSelectionPoints.slice(0, 2).concat(this._calculateViewportSpot(event.layerX, event.layerY));
            break;
          case "lasso":
            this._currentSelectionPoints.push(...this._calculateViewportSpot(event.layerX, event.layerY));
            break;
          case "tooltip":
            break;
        }
        this._updateSelectView();
      }, false);
      this.element.addEventListener("mouseup", event => {
        mouseDown = false;
        switch (this.tool) {
          case "pan":
            break;
          case "box":
            if (this._currentSelectionPoints.length !== 4) {
              this._currentSelectionPoints = [];
              return;
            }
            this._onSelect();
            break;
          case "lasso":
            if (this._currentSelectionPoints.length < 6) {
              this._currentSelectionPoints = [];
              this._updateSelectView();
              return;
            }
            this._onSelect();
            break;
        }
      });
      this.element.addEventListener("mouseleave", () => {
        switch (this.tool) {
          case "pan":
            // Ensures panning does not continue if user leaves canvas
            mouseDown = false;
            break;
          case "box":
            break;
          case "lasso":
            break;
          case "tooltip":
            break;
        }
      });
    }
    /**
    * Get current viewport info such as min/max bounds and current ranges
    *
    * @returns Current viewport information the mouse reader has calculated
    */
    getViewport() {
      return {
        minX: this.minX,
        maxX: this.maxX,
        minY: this.minY,
        maxY: this.maxY,
        xRange: this.currentXRange,
        yRange: this.currentYRange
      };
    }
    /**
    * Method to handle wheel events for zooming in and out of canvas
    *
    * @param {WheelEvent} event
    */
    _onWheel(event) {
      event.preventDefault();
      if (!this.lockedX) {
        const previousX = [...this.currentXRange];
        // ... to avoid aliasing
        this.currentXRange[0] -= event.wheelDelta * this._wheelDampenX;
        this.currentXRange[1] += event.wheelDelta * this._wheelDampenX;
        this.currentXRange[0] = Math.max(this.currentXRange[0], this.minX);
        this.currentXRange[1] = Math.min(this.currentXRange[1], this.maxX);
        if (!this._validateXRange()) {
          // Zoom in limit
          this.currentXRange = previousX;
        }
      }
      if (!this.lockedY) {
        const previousY = [...this.currentYRange];
        this.currentYRange[0] -= event.wheelDelta * this._wheelDampenY;
        this.currentYRange[1] += event.wheelDelta * this._wheelDampenY;
        this.currentYRange[0] = Math.max(this.currentYRange[0], this.minY);
        this.currentYRange[1] = Math.min(this.currentYRange[1], this.maxY);
        if (!this._validateYRange()) {
          // Zoom in limit
          this.currentYRange = previousY;
        }
      }
      this.handler.sendDrawerState(this.getViewport());
      this._updateSelectView();
    }
    /**
    * Method to handle a clicked mouse moving around canvas to pan around canvas.
    *
    * @param {MouseEvent} event from "mousemove" event
    */
    _onPan(event) {
      if (!this.lockedX) {
        const previousX = [...this.currentXRange];
        // ... to avoid aliasing
        this.currentXRange[0] -= event.movementX * this._panDampenX;
        this.currentXRange[1] -= event.movementX * this._panDampenX;
        this.currentXRange[0] = Math.max(this.currentXRange[0], this.minX);
        this.currentXRange[1] = Math.min(this.currentXRange[1], this.maxX);
        if (!this._validateXRange()) {
          this.currentXRange = previousX;
        }
      }
      if (!this.lockedY) {
        const previousY = [...this.currentYRange];
        this.currentYRange[0] += event.movementY * this._panDampenY;
        this.currentYRange[1] += event.movementY * this._panDampenY;
        this.currentYRange[0] = Math.max(this.currentYRange[0], this.minY);
        this.currentYRange[1] = Math.min(this.currentYRange[1], this.maxY);
        if (!this._validateYRange()) {
          this.currentYRange = previousY;
        }
      }
      this.handler.sendDrawerState(this.getViewport());
      this._updateSelectView();
    }
    /**
    * Checks if this.currentXRange is valid with first element less than second
    * and if viewport zoom is not above webgl max zoom.
    *
    * @return true if range is valid, false otherwise
    */
    _validateXRange() {
      return this.currentXRange[1] >= this.currentXRange[0];
    }
    /**
    * Checks if this.currentYRange is valid with first element less than second
    * and if viewport zoom is not above webgl max zoom.
    *
    * @return true if range is valid, false otherwise
    */
    _validateYRange() {
      return this.currentYRange[1] >= this.currentYRange[0];
    }
    /**
    * Updates user selection view if they have selected a box
    */
    _updateBoxSelectView() {
      if (this._currentSelectionPoints.length !== 4) {
        return;
      }
      const topLeftCorner = this._calculateViewportSpotInverse(this._currentSelectionPoints[0], this._currentSelectionPoints[1]);
      const bottomRightCorner = this._calculateViewportSpotInverse(this._currentSelectionPoints[2], this._currentSelectionPoints[3]);
      let pointAttr = `${topLeftCorner[0]},${topLeftCorner[1]} 
                     ${topLeftCorner[0]},${bottomRightCorner[1]}, 
                     ${bottomRightCorner[0]},${bottomRightCorner[1]}
                     ${bottomRightCorner[0]},${topLeftCorner[1]}
                     `;
      this._selectMarker.setAttribute("points", pointAttr);
    }
    /**
    * Updates the DOM component used to show user selection.
    * If user has only 2 selection points calls {@link MouseReader#_updateBoxSelectView}
    */
    _updateSelectView() {
      if (this._currentSelectionPoints.length === 4) {
        this._updateBoxSelectView();
        return;
      }
      if (this._currentSelectionPoints.length < 6) {
        this._selectMarker.setAttribute("points", "");
        return;
      }
      let pointAttr = "";
      for (let i = 0; i < this._currentSelectionPoints.length; i += 2) {
        const asCanvasPoint = this._calculateViewportSpotInverse(this._currentSelectionPoints[i], this._currentSelectionPoints[i + 1]);
        pointAttr += `${asCanvasPoint[0]}, ${asCanvasPoint[1]} `;
      }
      this._selectMarker.setAttribute("points", pointAttr);
    }
    /**
    * Executes when user has confirmed selection points (typically by releasing mouse)
    */
    _onSelect() {
      this.handler.selectPoints(this._currentSelectionPoints);
    }
    /**
    * Calculate the location on the real coordinate space a point on the canvas corresponds to.
    *
    * @param {Float} canvasX likely from event.layerX
    * @param {Float} canvasY likely from event.layerY
    * @returns viewport coordinate as array
    */
    _calculateViewportSpot(canvasX, canvasY) {
      const scaleX = $794bbb298c1fc0cc3157526701549b8c$export$scale([0, this.width], this.currentXRange);
      // Flipped for Y since canvas using typical graphics coordinates but GPU clipspace is typical cartesian coordinates
      const scaleY = $794bbb298c1fc0cc3157526701549b8c$export$scale([this.height, 0], this.currentYRange);
      return [scaleX(canvasX), scaleY(canvasY)];
    }
    /**
    * Calculate the location on the canvas a real coordniate corresponds to.
    *
    * @param {Float} viewportX x coordinate of data space
    * @param {Float} viewportY y coordniate of data space
    * @returns canvas coordindate as array
    */
    _calculateViewportSpotInverse(viewportX, viewportY) {
      const inverseScaleX = $794bbb298c1fc0cc3157526701549b8c$export$scale(this.currentXRange, [0, this.width]);
      // Flipped for Y since canvas using typical graphics coordinates but GPU clipspace is typical cartesian coordinates
      const inverseScaleY = $794bbb298c1fc0cc3157526701549b8c$export$scale(this.currentYRange, [this.height, 0]);
      return [inverseScaleX(viewportX), inverseScaleY(viewportY)];
    }
  }
  // ASSET: node_modules/jsonschema/lib/index.js
  var $0cb2a726714ab9e25f66a914aaf55a06$export$Validator;
  // ASSET: node_modules/jsonschema/lib/validator.js
  var $9cdb8ac535d7173eb5acc47d93433e56$exports = {};
  // ASSET: node_modules/@parcel/node-libs-browser/node_modules/punycode/punycode.js
  var $864e6a05bc46b64ca907230a1ad19082$exports = (function () {
    var exports = this;
    var module = {
      exports: this
    };
    var define;
    /*! https://mths.be/punycode v1.4.1 by @mathias*/
    ;
    (function (root) {
      /** Detect free variables*/
      var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;
      var freeModule = typeof module == 'object' && module && !module.nodeType && module;
      var freeGlobal = typeof $parcel$global == 'object' && $parcel$global;
      if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal || freeGlobal.self === freeGlobal) {
        root = freeGlobal;
      }
      /**
      * The `punycode` object.
      * @name punycode
      * @type Object
      */
      var punycode, /** Highest positive signed 32-bit float value*/
      maxInt = 2147483647, // aka. 0x7FFFFFFF or 2^31-1
      /** Bootstring parameters*/
      base = 36, tMin = 1, tMax = 26, skew = 38, damp = 700, initialBias = 72, initialN = 128, // 0x80
      delimiter = '-', // '\x2D'
      /** Regular expressions*/
      regexPunycode = /^xn--/, regexNonASCII = /[^\x20-\x7E]/, // unprintable ASCII chars + non-ASCII chars
      regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g, // RFC 3490 separators
      /** Error messages*/
      errors = {
        'overflow': 'Overflow: input needs wider integers to process',
        'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
        'invalid-input': 'Invalid input'
      }, /** Convenience shortcuts*/
      baseMinusTMin = base - tMin, floor = Math.floor, stringFromCharCode = String.fromCharCode, /** Temporary variable*/
      key;
      /*--------------------------------------------------------------------------*/
      /**
      * A generic error utility function.
      * @private
      * @param {String} type The error type.
      * @returns {Error} Throws a `RangeError` with the applicable error message.
      */
      function error(type) {
        throw new RangeError(errors[type]);
      }
      /**
      * A generic `Array#map` utility function.
      * @private
      * @param {Array} array The array to iterate over.
      * @param {Function} callback The function that gets called for every array
      * item.
      * @returns {Array} A new array of values returned by the callback function.
      */
      function map(array, fn) {
        var length = array.length;
        var result = [];
        while (length--) {
          result[length] = fn(array[length]);
        }
        return result;
      }
      /**
      * A simple `Array#map`-like wrapper to work with domain name strings or email
      * addresses.
      * @private
      * @param {String} domain The domain name or email address.
      * @param {Function} callback The function that gets called for every
      * character.
      * @returns {Array} A new string of characters returned by the callback
      * function.
      */
      function mapDomain(string, fn) {
        var parts = string.split('@');
        var result = '';
        if (parts.length > 1) {
          // In email addresses, only the domain name should be punycoded. Leave
          // the local part (i.e. everything up to `@`) intact.
          result = parts[0] + '@';
          string = parts[1];
        }
        // Avoid `split(regex)` for IE8 compatibility. See #17.
        string = string.replace(regexSeparators, '\x2E');
        var labels = string.split('.');
        var encoded = map(labels, fn).join('.');
        return result + encoded;
      }
      /**
      * Creates an array containing the numeric code points of each Unicode
      * character in the string. While JavaScript uses UCS-2 internally,
      * this function will convert a pair of surrogate halves (each of which
      * UCS-2 exposes as separate characters) into a single code point,
      * matching UTF-16.
      * @see `punycode.ucs2.encode`
      * @see <https://mathiasbynens.be/notes/javascript-encoding>
      * @memberOf punycode.ucs2
      * @name decode
      * @param {String} string The Unicode input string (UCS-2).
      * @returns {Array} The new array of code points.
      */
      function ucs2decode(string) {
        var output = [], counter = 0, length = string.length, value, extra;
        while (counter < length) {
          value = string.charCodeAt(counter++);
          if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
            // high surrogate, and there is a next character
            extra = string.charCodeAt(counter++);
            if ((extra & 0xFC00) == 0xDC00) {
              // low surrogate
              output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
            } else {
              // unmatched surrogate; only append this code unit, in case the next
              // code unit is the high surrogate of a surrogate pair
              output.push(value);
              counter--;
            }
          } else {
            output.push(value);
          }
        }
        return output;
      }
      /**
      * Creates a string based on an array of numeric code points.
      * @see `punycode.ucs2.decode`
      * @memberOf punycode.ucs2
      * @name encode
      * @param {Array} codePoints The array of numeric code points.
      * @returns {String} The new Unicode string (UCS-2).
      */
      function ucs2encode(array) {
        return map(array, function (value) {
          var output = '';
          if (value > 0xFFFF) {
            value -= 0x10000;
            output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
            value = 0xDC00 | value & 0x3FF;
          }
          output += stringFromCharCode(value);
          return output;
        }).join('');
      }
      /**
      * Converts a basic code point into a digit/integer.
      * @see `digitToBasic()`
      * @private
      * @param {Number} codePoint The basic numeric code point value.
      * @returns {Number} The numeric value of a basic code point (for use in
      * representing integers) in the range `0` to `base - 1`, or `base` if
      * the code point does not represent a value.
      */
      function basicToDigit(codePoint) {
        if (codePoint - 48 < 10) {
          return codePoint - 22;
        }
        if (codePoint - 65 < 26) {
          return codePoint - 65;
        }
        if (codePoint - 97 < 26) {
          return codePoint - 97;
        }
        return base;
      }
      /**
      * Converts a digit/integer into a basic code point.
      * @see `basicToDigit()`
      * @private
      * @param {Number} digit The numeric value of a basic code point.
      * @returns {Number} The basic code point whose value (when used for
      * representing integers) is `digit`, which needs to be in the range
      * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
      * used; else, the lowercase form is used. The behavior is undefined
      * if `flag` is non-zero and `digit` has no uppercase form.
      */
      function digitToBasic(digit, flag) {
        // 0..25 map to ASCII a..z or A..Z
        // 26..35 map to ASCII 0..9
        return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
      }
      /**
      * Bias adaptation function as per section 3.4 of RFC 3492.
      * https://tools.ietf.org/html/rfc3492#section-3.4
      * @private
      */
      function adapt(delta, numPoints, firstTime) {
        var k = 0;
        delta = firstTime ? floor(delta / damp) : delta >> 1;
        delta += floor(delta / numPoints);
        for (; /*no initialization*/
        delta > baseMinusTMin * tMax >> 1; k += base) {
          delta = floor(delta / baseMinusTMin);
        }
        return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
      }
      /**
      * Converts a Punycode string of ASCII-only symbols to a string of Unicode
      * symbols.
      * @memberOf punycode
      * @param {String} input The Punycode string of ASCII-only symbols.
      * @returns {String} The resulting string of Unicode symbols.
      */
      function decode(input) {
        // Don't use UCS-2
        var output = [], inputLength = input.length, out, i = 0, n = initialN, bias = initialBias, basic, j, index, oldi, w, k, digit, t, /** Cached calculation results*/
        baseMinusT;
        // Handle the basic code points: let `basic` be the number of input code
        // points before the last delimiter, or `0` if there is none, then copy
        // the first basic code points to the output.
        basic = input.lastIndexOf(delimiter);
        if (basic < 0) {
          basic = 0;
        }
        for (j = 0; j < basic; ++j) {
          // if it's not a basic code point
          if (input.charCodeAt(j) >= 0x80) {
            error('not-basic');
          }
          output.push(input.charCodeAt(j));
        }
        // Main decoding loop: start just after the last delimiter if any basic code
        // points were copied; start at the beginning otherwise.
        for (index = basic > 0 ? basic + 1 : 0; index < inputLength; ) /*no final expression*/
        {
          // `index` is the index of the next character to be consumed.
          // Decode a generalized variable-length integer into `delta`,
          // which gets added to `i`. The overflow checking is easier
          // if we increase `i` as we go, then subtract off its starting
          // value at the end to obtain `delta`.
          for ((oldi = i, w = 1, k = base); ; /*no condition*/
          k += base) {
            if (index >= inputLength) {
              error('invalid-input');
            }
            digit = basicToDigit(input.charCodeAt(index++));
            if (digit >= base || digit > floor((maxInt - i) / w)) {
              error('overflow');
            }
            i += digit * w;
            t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
            if (digit < t) {
              break;
            }
            baseMinusT = base - t;
            if (w > floor(maxInt / baseMinusT)) {
              error('overflow');
            }
            w *= baseMinusT;
          }
          out = output.length + 1;
          bias = adapt(i - oldi, out, oldi == 0);
          // `i` was supposed to wrap around from `out` to `0`,
          // incrementing `n` each time, so we'll fix that now:
          if (floor(i / out) > maxInt - n) {
            error('overflow');
          }
          n += floor(i / out);
          i %= out;
          // Insert `n` at position `i` of the output
          output.splice(i++, 0, n);
        }
        return ucs2encode(output);
      }
      /**
      * Converts a string of Unicode symbols (e.g. a domain name label) to a
      * Punycode string of ASCII-only symbols.
      * @memberOf punycode
      * @param {String} input The string of Unicode symbols.
      * @returns {String} The resulting Punycode string of ASCII-only symbols.
      */
      function encode(input) {
        var n, delta, handledCPCount, basicLength, bias, j, m, q, k, t, currentValue, output = [], /** `inputLength` will hold the number of code points in `input`.*/
        inputLength, /** Cached calculation results*/
        handledCPCountPlusOne, baseMinusT, qMinusT;
        // Convert the input in UCS-2 to Unicode
        input = ucs2decode(input);
        // Cache the length
        inputLength = input.length;
        // Initialize the state
        n = initialN;
        delta = 0;
        bias = initialBias;
        // Handle the basic code points
        for (j = 0; j < inputLength; ++j) {
          currentValue = input[j];
          if (currentValue < 0x80) {
            output.push(stringFromCharCode(currentValue));
          }
        }
        handledCPCount = basicLength = output.length;
        // `handledCPCount` is the number of code points that have been handled;
        // `basicLength` is the number of basic code points.
        // Finish the basic string - if it is not empty - with a delimiter
        if (basicLength) {
          output.push(delimiter);
        }
        // Main encoding loop:
        while (handledCPCount < inputLength) {
          // All non-basic code points < n have been handled already. Find the next
          // larger one:
          for ((m = maxInt, j = 0); j < inputLength; ++j) {
            currentValue = input[j];
            if (currentValue >= n && currentValue < m) {
              m = currentValue;
            }
          }
          // Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
          // but guard against overflow
          handledCPCountPlusOne = handledCPCount + 1;
          if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
            error('overflow');
          }
          delta += (m - n) * handledCPCountPlusOne;
          n = m;
          for (j = 0; j < inputLength; ++j) {
            currentValue = input[j];
            if (currentValue < n && ++delta > maxInt) {
              error('overflow');
            }
            if (currentValue == n) {
              // Represent delta as a generalized variable-length integer
              for ((q = delta, k = base); ; /*no condition*/
              k += base) {
                t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
                if (q < t) {
                  break;
                }
                qMinusT = q - t;
                baseMinusT = base - t;
                output.push(stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0)));
                q = floor(qMinusT / baseMinusT);
              }
              output.push(stringFromCharCode(digitToBasic(q, 0)));
              bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
              delta = 0;
              ++handledCPCount;
            }
          }
          ++delta;
          ++n;
        }
        return output.join('');
      }
      /**
      * Converts a Punycode string representing a domain name or an email address
      * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
      * it doesn't matter if you call it on a string that has already been
      * converted to Unicode.
      * @memberOf punycode
      * @param {String} input The Punycoded domain name or email address to
      * convert to Unicode.
      * @returns {String} The Unicode representation of the given Punycode
      * string.
      */
      function toUnicode(input) {
        return mapDomain(input, function (string) {
          return regexPunycode.test(string) ? decode(string.slice(4).toLowerCase()) : string;
        });
      }
      /**
      * Converts a Unicode string representing a domain name or an email address to
      * Punycode. Only the non-ASCII parts of the domain name will be converted,
      * i.e. it doesn't matter if you call it with a domain that's already in
      * ASCII.
      * @memberOf punycode
      * @param {String} input The domain name or email address to convert, as a
      * Unicode string.
      * @returns {String} The Punycode representation of the given domain name or
      * email address.
      */
      function toASCII(input) {
        return mapDomain(input, function (string) {
          return regexNonASCII.test(string) ? 'xn--' + encode(string) : string;
        });
      }
      /*--------------------------------------------------------------------------*/
      /** Define the public API*/
      punycode = {
        /**
        * A string representing the current Punycode.js version number.
        * @memberOf punycode
        * @type String
        */
        'version': '1.4.1',
        /**
        * An object of methods to convert from JavaScript's internal character
        * representation (UCS-2) to Unicode code points, and back.
        * @see <https://mathiasbynens.be/notes/javascript-encoding>
        * @memberOf punycode
        * @type Object
        */
        'ucs2': {
          'decode': ucs2decode,
          'encode': ucs2encode
        },
        'decode': decode,
        'encode': encode,
        'toASCII': toASCII,
        'toUnicode': toUnicode
      };
      /** Expose `punycode`*/
      // Some AMD build optimizers, like r.js, check for specific condition patterns
      // like the following:
      if (typeof define == 'function' && typeof define.amd == 'object' && define.amd) {
        define('punycode', function () {
          return punycode;
        });
      } else if (freeExports && freeModule) {
        if (module.exports == freeExports) {
          // in Node.js, io.js, or RingoJS v0.8.0+
          freeModule.exports = punycode;
        } else {
          // in Narwhal or RingoJS v0.7.0-
          for (key in punycode) {
            punycode.hasOwnProperty(key) && (freeExports[key] = punycode[key]);
          }
        }
      } else {
        // in Rhino or a web browser
        root.punycode = punycode;
      }
    })(this);
    return module.exports;
  }).call({});
  // ASSET: node_modules/url/util.js
  var $fb6a21cc5c1e7677f11d39d63f817a4d$exports = {};
  $fb6a21cc5c1e7677f11d39d63f817a4d$exports = {
    isString: function (arg) {
      return typeof arg === 'string';
    },
    isObject: function (arg) {
      return typeof arg === 'object' && arg !== null;
    },
    isNull: function (arg) {
      return arg === null;
    },
    isNullOrUndefined: function (arg) {
      return arg == null;
    }
  };
  var $42c0ab72f3b39275783aaa4babb143cb$export$parse = $42c0ab72f3b39275783aaa4babb143cb$var$urlParse;
  var $42c0ab72f3b39275783aaa4babb143cb$export$resolve = $42c0ab72f3b39275783aaa4babb143cb$var$urlResolve;
  function $42c0ab72f3b39275783aaa4babb143cb$var$Url() {
    this.protocol = null;
    this.slashes = null;
    this.auth = null;
    this.host = null;
    this.port = null;
    this.hostname = null;
    this.hash = null;
    this.search = null;
    this.query = null;
    this.pathname = null;
    this.path = null;
    this.href = null;
  }
  var $42c0ab72f3b39275783aaa4babb143cb$var$protocolPattern = /^([a-z0-9.+-]+:)/i, $42c0ab72f3b39275783aaa4babb143cb$var$portPattern = /:[0-9]*$/, // Special case for a simple path URL
  $42c0ab72f3b39275783aaa4babb143cb$var$simplePathPattern = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/, // RFC 2396: characters reserved for delimiting URLs.
  // We actually just auto-escape these.
  $42c0ab72f3b39275783aaa4babb143cb$var$delims = ['<', '>', '"', '`', ' ', '\r', '\n', '\t'], // RFC 2396: characters not allowed for various reasons.
  $42c0ab72f3b39275783aaa4babb143cb$var$unwise = ['{', '}', '|', '\\', '^', '`'].concat($42c0ab72f3b39275783aaa4babb143cb$var$delims), // Allowed by RFCs, but cause of XSS attacks.  Always escape these.
  $42c0ab72f3b39275783aaa4babb143cb$var$autoEscape = ['\''].concat($42c0ab72f3b39275783aaa4babb143cb$var$unwise), // Characters that are never ever allowed in a hostname.
  // Note that any invalid chars are also handled, but these
  // are the ones that are *expected* to be seen, so we fast-path
  // them.
  $42c0ab72f3b39275783aaa4babb143cb$var$nonHostChars = ['%', '/', '?', ';', '#'].concat($42c0ab72f3b39275783aaa4babb143cb$var$autoEscape), $42c0ab72f3b39275783aaa4babb143cb$var$hostEndingChars = ['/', '?', '#'], $42c0ab72f3b39275783aaa4babb143cb$var$hostnameMaxLen = 255, $42c0ab72f3b39275783aaa4babb143cb$var$hostnamePartPattern = /^[+a-z0-9A-Z_-]{0,63}$/, $42c0ab72f3b39275783aaa4babb143cb$var$hostnamePartStart = /^([+a-z0-9A-Z_-]{0,63})(.*)$/, // protocols that can allow "unsafe" and "unwise" chars.
  $42c0ab72f3b39275783aaa4babb143cb$var$unsafeProtocol = {
    'javascript': true,
    'javascript:': true
  }, // protocols that never have a hostname.
  $42c0ab72f3b39275783aaa4babb143cb$var$hostlessProtocol = {
    'javascript': true,
    'javascript:': true
  }, // protocols that always contain a // bit.
  $42c0ab72f3b39275783aaa4babb143cb$var$slashedProtocol = {
    'http': true,
    'https': true,
    'ftp': true,
    'gopher': true,
    'file': true,
    'http:': true,
    'https:': true,
    'ftp:': true,
    'gopher:': true,
    'file:': true
  };
  // ASSET: node_modules/querystring-es3/index.js
  var $70e061cbbf2bffea2b54f2252d0f8e2c$export$parse, $70e061cbbf2bffea2b54f2252d0f8e2c$export$stringify;
  // ASSET: node_modules/querystring-es3/decode.js
  var $c56928b73ed3cf970544263e95eb1144$exports = {};
  // If obj.hasOwnProperty has been overridden, then calling
  // obj.hasOwnProperty(prop) will break.
  // See: https://github.com/joyent/node/issues/1707
  function $c56928b73ed3cf970544263e95eb1144$var$hasOwnProperty(obj, prop) {
    return Object.prototype.hasOwnProperty.call(obj, prop);
  }
  $c56928b73ed3cf970544263e95eb1144$exports = function (qs, sep, eq, options) {
    sep = sep || '&';
    eq = eq || '=';
    var obj = {};
    if (typeof qs !== 'string' || qs.length === 0) {
      return obj;
    }
    var regexp = /\+/g;
    qs = qs.split(sep);
    var maxKeys = 1000;
    if (options && typeof options.maxKeys === 'number') {
      maxKeys = options.maxKeys;
    }
    var len = qs.length;
    // maxKeys <= 0 means that we should not limit keys count
    if (maxKeys > 0 && len > maxKeys) {
      len = maxKeys;
    }
    for (var i = 0; i < len; ++i) {
      var x = qs[i].replace(regexp, '%20'), idx = x.indexOf(eq), kstr, vstr, k, v;
      if (idx >= 0) {
        kstr = x.substr(0, idx);
        vstr = x.substr(idx + 1);
      } else {
        kstr = x;
        vstr = '';
      }
      k = decodeURIComponent(kstr);
      v = decodeURIComponent(vstr);
      if (!$c56928b73ed3cf970544263e95eb1144$var$hasOwnProperty(obj, k)) {
        obj[k] = v;
      } else if ($c56928b73ed3cf970544263e95eb1144$var$isArray(obj[k])) {
        obj[k].push(v);
      } else {
        obj[k] = [obj[k], v];
      }
    }
    return obj;
  };
  var $c56928b73ed3cf970544263e95eb1144$var$isArray = Array.isArray || (function (xs) {
    return Object.prototype.toString.call(xs) === '[object Array]';
  });
  var $70e061cbbf2bffea2b54f2252d0f8e2c$export$decode = $70e061cbbf2bffea2b54f2252d0f8e2c$export$parse = $c56928b73ed3cf970544263e95eb1144$exports;
  // ASSET: node_modules/querystring-es3/encode.js
  var $4f80fb3d3483eb344e64557f56ed9a89$exports = {};
  var $4f80fb3d3483eb344e64557f56ed9a89$var$stringifyPrimitive = function (v) {
    switch (typeof v) {
      case 'string':
        return v;
      case 'boolean':
        return v ? 'true' : 'false';
      case 'number':
        return isFinite(v) ? v : '';
      default:
        return '';
    }
  };
  $4f80fb3d3483eb344e64557f56ed9a89$exports = function (obj, sep, eq, name) {
    sep = sep || '&';
    eq = eq || '=';
    if (obj === null) {
      obj = undefined;
    }
    if (typeof obj === 'object') {
      return $4f80fb3d3483eb344e64557f56ed9a89$var$map($4f80fb3d3483eb344e64557f56ed9a89$var$objectKeys(obj), function (k) {
        var ks = encodeURIComponent($4f80fb3d3483eb344e64557f56ed9a89$var$stringifyPrimitive(k)) + eq;
        if ($4f80fb3d3483eb344e64557f56ed9a89$var$isArray(obj[k])) {
          return $4f80fb3d3483eb344e64557f56ed9a89$var$map(obj[k], function (v) {
            return ks + encodeURIComponent($4f80fb3d3483eb344e64557f56ed9a89$var$stringifyPrimitive(v));
          }).join(sep);
        } else {
          return ks + encodeURIComponent($4f80fb3d3483eb344e64557f56ed9a89$var$stringifyPrimitive(obj[k]));
        }
      }).join(sep);
    }
    if (!name) return '';
    return encodeURIComponent($4f80fb3d3483eb344e64557f56ed9a89$var$stringifyPrimitive(name)) + eq + encodeURIComponent($4f80fb3d3483eb344e64557f56ed9a89$var$stringifyPrimitive(obj));
  };
  var $4f80fb3d3483eb344e64557f56ed9a89$var$isArray = Array.isArray || (function (xs) {
    return Object.prototype.toString.call(xs) === '[object Array]';
  });
  function $4f80fb3d3483eb344e64557f56ed9a89$var$map(xs, f) {
    if (xs.map) return xs.map(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
      res.push(f(xs[i], i));
    }
    return res;
  }
  var $4f80fb3d3483eb344e64557f56ed9a89$var$objectKeys = Object.keys || (function (obj) {
    var res = [];
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
    }
    return res;
  });
  var $70e061cbbf2bffea2b54f2252d0f8e2c$export$encode = $70e061cbbf2bffea2b54f2252d0f8e2c$export$stringify = $4f80fb3d3483eb344e64557f56ed9a89$exports;
  function $42c0ab72f3b39275783aaa4babb143cb$var$urlParse(url, parseQueryString, slashesDenoteHost) {
    if (url && $fb6a21cc5c1e7677f11d39d63f817a4d$exports.isObject(url) && url instanceof $42c0ab72f3b39275783aaa4babb143cb$var$Url) return url;
    var u = new $42c0ab72f3b39275783aaa4babb143cb$var$Url();
    u.parse(url, parseQueryString, slashesDenoteHost);
    return u;
  }
  $42c0ab72f3b39275783aaa4babb143cb$var$Url.prototype.parse = function (url, parseQueryString, slashesDenoteHost) {
    if (!$fb6a21cc5c1e7677f11d39d63f817a4d$exports.isString(url)) {
      throw new TypeError("Parameter 'url' must be a string, not " + typeof url);
    }
    // Copy chrome, IE, opera backslash-handling behavior.
    // Back slashes before the query string get converted to forward slashes
    // See: https://code.google.com/p/chromium/issues/detail?id=25916
    var queryIndex = url.indexOf('?'), splitter = queryIndex !== -1 && queryIndex < url.indexOf('#') ? '?' : '#', uSplit = url.split(splitter), slashRegex = /\\/g;
    uSplit[0] = uSplit[0].replace(slashRegex, '/');
    url = uSplit.join(splitter);
    var rest = url;
    // trim before proceeding.
    // This is to support parse stuff like "  http://foo.com  \n"
    rest = rest.trim();
    if (!slashesDenoteHost && url.split('#').length === 1) {
      // Try fast path regexp
      var simplePath = $42c0ab72f3b39275783aaa4babb143cb$var$simplePathPattern.exec(rest);
      if (simplePath) {
        this.path = rest;
        this.href = rest;
        this.pathname = simplePath[1];
        if (simplePath[2]) {
          this.search = simplePath[2];
          if (parseQueryString) {
            this.query = $70e061cbbf2bffea2b54f2252d0f8e2c$export$parse(this.search.substr(1));
          } else {
            this.query = this.search.substr(1);
          }
        } else if (parseQueryString) {
          this.search = '';
          this.query = {};
        }
        return this;
      }
    }
    var proto = $42c0ab72f3b39275783aaa4babb143cb$var$protocolPattern.exec(rest);
    if (proto) {
      proto = proto[0];
      var lowerProto = proto.toLowerCase();
      this.protocol = lowerProto;
      rest = rest.substr(proto.length);
    }
    // figure out if it's got a host
    // user@server is *always* interpreted as a hostname, and url
    // resolution will treat //foo/bar as host=foo,path=bar because that's
    // how the browser resolves relative URLs.
    if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
      var slashes = rest.substr(0, 2) === '//';
      if (slashes && !(proto && $42c0ab72f3b39275783aaa4babb143cb$var$hostlessProtocol[proto])) {
        rest = rest.substr(2);
        this.slashes = true;
      }
    }
    if (!$42c0ab72f3b39275783aaa4babb143cb$var$hostlessProtocol[proto] && (slashes || proto && !$42c0ab72f3b39275783aaa4babb143cb$var$slashedProtocol[proto])) {
      // there's a hostname.
      // the first instance of /, ?, ;, or # ends the host.
      // 
      // If there is an @ in the hostname, then non-host chars *are* allowed
      // to the left of the last @ sign, unless some host-ending character
      // comes *before* the @-sign.
      // URLs are obnoxious.
      // 
      // ex:
      // http://a@b@c/ => user:a@b host:c
      // http://a@b?@c => user:a host:c path:/?@c
      // v0.12 TODO(isaacs): This is not quite how Chrome does things.
      // Review our test case against browsers more comprehensively.
      // find the first instance of any hostEndingChars
      var hostEnd = -1;
      for (var i = 0; i < $42c0ab72f3b39275783aaa4babb143cb$var$hostEndingChars.length; i++) {
        var hec = rest.indexOf($42c0ab72f3b39275783aaa4babb143cb$var$hostEndingChars[i]);
        if (hec !== -1 && (hostEnd === -1 || hec < hostEnd)) hostEnd = hec;
      }
      // at this point, either we have an explicit point where the
      // auth portion cannot go past, or the last @ char is the decider.
      var auth, atSign;
      if (hostEnd === -1) {
        // atSign can be anywhere.
        atSign = rest.lastIndexOf('@');
      } else {
        // atSign must be in auth portion.
        // http://a@b/c@d => host:b auth:a path:/c@d
        atSign = rest.lastIndexOf('@', hostEnd);
      }
      // Now we have a portion which is definitely the auth.
      // Pull that off.
      if (atSign !== -1) {
        auth = rest.slice(0, atSign);
        rest = rest.slice(atSign + 1);
        this.auth = decodeURIComponent(auth);
      }
      // the host is the remaining to the left of the first non-host char
      hostEnd = -1;
      for (var i = 0; i < $42c0ab72f3b39275783aaa4babb143cb$var$nonHostChars.length; i++) {
        var hec = rest.indexOf($42c0ab72f3b39275783aaa4babb143cb$var$nonHostChars[i]);
        if (hec !== -1 && (hostEnd === -1 || hec < hostEnd)) hostEnd = hec;
      }
      // if we still have not hit it, then the entire thing is a host.
      if (hostEnd === -1) hostEnd = rest.length;
      this.host = rest.slice(0, hostEnd);
      rest = rest.slice(hostEnd);
      // pull out port.
      this.parseHost();
      // we've indicated that there is a hostname,
      // so even if it's empty, it has to be present.
      this.hostname = this.hostname || '';
      // if hostname begins with [ and ends with ]
      // assume that it's an IPv6 address.
      var ipv6Hostname = this.hostname[0] === '[' && this.hostname[this.hostname.length - 1] === ']';
      // validate a little.
      if (!ipv6Hostname) {
        var hostparts = this.hostname.split(/\./);
        for (var i = 0, l = hostparts.length; i < l; i++) {
          var part = hostparts[i];
          if (!part) continue;
          if (!part.match($42c0ab72f3b39275783aaa4babb143cb$var$hostnamePartPattern)) {
            var newpart = '';
            for (var j = 0, k = part.length; j < k; j++) {
              if (part.charCodeAt(j) > 127) {
                // we replace non-ASCII char with a temporary placeholder
                // we need this to make sure size of hostname is not
                // broken by replacing non-ASCII by nothing
                newpart += 'x';
              } else {
                newpart += part[j];
              }
            }
            // we test again with ASCII char only
            if (!newpart.match($42c0ab72f3b39275783aaa4babb143cb$var$hostnamePartPattern)) {
              var validParts = hostparts.slice(0, i);
              var notHost = hostparts.slice(i + 1);
              var bit = part.match($42c0ab72f3b39275783aaa4babb143cb$var$hostnamePartStart);
              if (bit) {
                validParts.push(bit[1]);
                notHost.unshift(bit[2]);
              }
              if (notHost.length) {
                rest = '/' + notHost.join('.') + rest;
              }
              this.hostname = validParts.join('.');
              break;
            }
          }
        }
      }
      if (this.hostname.length > $42c0ab72f3b39275783aaa4babb143cb$var$hostnameMaxLen) {
        this.hostname = '';
      } else {
        // hostnames are always lower case.
        this.hostname = this.hostname.toLowerCase();
      }
      if (!ipv6Hostname) {
        // IDNA Support: Returns a punycoded representation of "domain".
        // It only converts parts of the domain name that
        // have non-ASCII characters, i.e. it doesn't matter if
        // you call it with a domain that already is ASCII-only.
        this.hostname = $864e6a05bc46b64ca907230a1ad19082$exports.toASCII(this.hostname);
      }
      var p = this.port ? ':' + this.port : '';
      var h = this.hostname || '';
      this.host = h + p;
      this.href += this.host;
      // strip [ and ] from the hostname
      // the host field still retains them, though
      if (ipv6Hostname) {
        this.hostname = this.hostname.substr(1, this.hostname.length - 2);
        if (rest[0] !== '/') {
          rest = '/' + rest;
        }
      }
    }
    // now rest is set to the post-host stuff.
    // chop off any delim chars.
    if (!$42c0ab72f3b39275783aaa4babb143cb$var$unsafeProtocol[lowerProto]) {
      // First, make 100% sure that any "autoEscape" chars get
      // escaped, even if encodeURIComponent doesn't think they
      // need to be.
      for (var i = 0, l = $42c0ab72f3b39275783aaa4babb143cb$var$autoEscape.length; i < l; i++) {
        var ae = $42c0ab72f3b39275783aaa4babb143cb$var$autoEscape[i];
        if (rest.indexOf(ae) === -1) continue;
        var esc = encodeURIComponent(ae);
        if (esc === ae) {
          esc = escape(ae);
        }
        rest = rest.split(ae).join(esc);
      }
    }
    // chop off from the tail first.
    var hash = rest.indexOf('#');
    if (hash !== -1) {
      // got a fragment string.
      this.hash = rest.substr(hash);
      rest = rest.slice(0, hash);
    }
    var qm = rest.indexOf('?');
    if (qm !== -1) {
      this.search = rest.substr(qm);
      this.query = rest.substr(qm + 1);
      if (parseQueryString) {
        this.query = $70e061cbbf2bffea2b54f2252d0f8e2c$export$parse(this.query);
      }
      rest = rest.slice(0, qm);
    } else if (parseQueryString) {
      // no query string, but parseQueryString still requested
      this.search = '';
      this.query = {};
    }
    if (rest) this.pathname = rest;
    if ($42c0ab72f3b39275783aaa4babb143cb$var$slashedProtocol[lowerProto] && this.hostname && !this.pathname) {
      this.pathname = '/';
    }
    // to support http.request
    if (this.pathname || this.search) {
      var p = this.pathname || '';
      var s = this.search || '';
      this.path = p + s;
    }
    // finally, reconstruct the href based on what has been validated.
    this.href = this.format();
    return this;
  };
  // format a parsed object into a url string
  function $42c0ab72f3b39275783aaa4babb143cb$var$urlFormat(obj) {
    // ensure it's an object, and not a string url.
    // If it's an obj, this is a no-op.
    // this way, you can call url_format() on strings
    // to clean up potentially wonky urls.
    if ($fb6a21cc5c1e7677f11d39d63f817a4d$exports.isString(obj)) obj = $42c0ab72f3b39275783aaa4babb143cb$var$urlParse(obj);
    if (!(obj instanceof $42c0ab72f3b39275783aaa4babb143cb$var$Url)) return $42c0ab72f3b39275783aaa4babb143cb$var$Url.prototype.format.call(obj);
    return obj.format();
  }
  $42c0ab72f3b39275783aaa4babb143cb$var$Url.prototype.format = function () {
    var auth = this.auth || '';
    if (auth) {
      auth = encodeURIComponent(auth);
      auth = auth.replace(/%3A/i, ':');
      auth += '@';
    }
    var protocol = this.protocol || '', pathname = this.pathname || '', hash = this.hash || '', host = false, query = '';
    if (this.host) {
      host = auth + this.host;
    } else if (this.hostname) {
      host = auth + (this.hostname.indexOf(':') === -1 ? this.hostname : '[' + this.hostname + ']');
      if (this.port) {
        host += ':' + this.port;
      }
    }
    if (this.query && $fb6a21cc5c1e7677f11d39d63f817a4d$exports.isObject(this.query) && Object.keys(this.query).length) {
      query = $70e061cbbf2bffea2b54f2252d0f8e2c$export$stringify(this.query);
    }
    var search = this.search || query && '?' + query || '';
    if (protocol && protocol.substr(-1) !== ':') protocol += ':';
    // only the slashedProtocols get the //.  Not mailto:, xmpp:, etc.
    // unless they had them to begin with.
    if (this.slashes || (!protocol || $42c0ab72f3b39275783aaa4babb143cb$var$slashedProtocol[protocol]) && host !== false) {
      host = '//' + (host || '');
      if (pathname && pathname.charAt(0) !== '/') pathname = '/' + pathname;
    } else if (!host) {
      host = '';
    }
    if (hash && hash.charAt(0) !== '#') hash = '#' + hash;
    if (search && search.charAt(0) !== '?') search = '?' + search;
    pathname = pathname.replace(/[?#]/g, function (match) {
      return encodeURIComponent(match);
    });
    search = search.replace('#', '%23');
    return protocol + host + pathname + search + hash;
  };
  function $42c0ab72f3b39275783aaa4babb143cb$var$urlResolve(source, relative) {
    return $42c0ab72f3b39275783aaa4babb143cb$var$urlParse(source, false, true).resolve(relative);
  }
  $42c0ab72f3b39275783aaa4babb143cb$var$Url.prototype.resolve = function (relative) {
    return this.resolveObject($42c0ab72f3b39275783aaa4babb143cb$var$urlParse(relative, false, true)).format();
  };
  function $42c0ab72f3b39275783aaa4babb143cb$var$urlResolveObject(source, relative) {
    if (!source) return relative;
    return $42c0ab72f3b39275783aaa4babb143cb$var$urlParse(source, false, true).resolveObject(relative);
  }
  $42c0ab72f3b39275783aaa4babb143cb$var$Url.prototype.resolveObject = function (relative) {
    if ($fb6a21cc5c1e7677f11d39d63f817a4d$exports.isString(relative)) {
      var rel = new $42c0ab72f3b39275783aaa4babb143cb$var$Url();
      rel.parse(relative, false, true);
      relative = rel;
    }
    var result = new $42c0ab72f3b39275783aaa4babb143cb$var$Url();
    var tkeys = Object.keys(this);
    for (var tk = 0; tk < tkeys.length; tk++) {
      var tkey = tkeys[tk];
      result[tkey] = this[tkey];
    }
    // hash is always overridden, no matter what.
    // even href="" will remove it.
    result.hash = relative.hash;
    // if the relative url is empty, then there's nothing left to do here.
    if (relative.href === '') {
      result.href = result.format();
      return result;
    }
    // hrefs like //foo/bar always cut to the protocol.
    if (relative.slashes && !relative.protocol) {
      // take everything except the protocol from relative
      var rkeys = Object.keys(relative);
      for (var rk = 0; rk < rkeys.length; rk++) {
        var rkey = rkeys[rk];
        if (rkey !== 'protocol') result[rkey] = relative[rkey];
      }
      // urlParse appends trailing / to urls like http://www.example.com
      if ($42c0ab72f3b39275783aaa4babb143cb$var$slashedProtocol[result.protocol] && result.hostname && !result.pathname) {
        result.path = result.pathname = '/';
      }
      result.href = result.format();
      return result;
    }
    if (relative.protocol && relative.protocol !== result.protocol) {
      // if it's a known url protocol, then changing
      // the protocol does weird things
      // first, if it's not file:, then we MUST have a host,
      // and if there was a path
      // to begin with, then we MUST have a path.
      // if it is file:, then the host is dropped,
      // because that's known to be hostless.
      // anything else is assumed to be absolute.
      if (!$42c0ab72f3b39275783aaa4babb143cb$var$slashedProtocol[relative.protocol]) {
        var keys = Object.keys(relative);
        for (var v = 0; v < keys.length; v++) {
          var k = keys[v];
          result[k] = relative[k];
        }
        result.href = result.format();
        return result;
      }
      result.protocol = relative.protocol;
      if (!relative.host && !$42c0ab72f3b39275783aaa4babb143cb$var$hostlessProtocol[relative.protocol]) {
        var relPath = (relative.pathname || '').split('/');
        while (relPath.length && !(relative.host = relPath.shift())) ;
        if (!relative.host) relative.host = '';
        if (!relative.hostname) relative.hostname = '';
        if (relPath[0] !== '') relPath.unshift('');
        if (relPath.length < 2) relPath.unshift('');
        result.pathname = relPath.join('/');
      } else {
        result.pathname = relative.pathname;
      }
      result.search = relative.search;
      result.query = relative.query;
      result.host = relative.host || '';
      result.auth = relative.auth;
      result.hostname = relative.hostname || relative.host;
      result.port = relative.port;
      // to support http.request
      if (result.pathname || result.search) {
        var p = result.pathname || '';
        var s = result.search || '';
        result.path = p + s;
      }
      result.slashes = result.slashes || relative.slashes;
      result.href = result.format();
      return result;
    }
    var isSourceAbs = result.pathname && result.pathname.charAt(0) === '/', isRelAbs = relative.host || relative.pathname && relative.pathname.charAt(0) === '/', mustEndAbs = isRelAbs || isSourceAbs || result.host && relative.pathname, removeAllDots = mustEndAbs, srcPath = result.pathname && result.pathname.split('/') || [], relPath = relative.pathname && relative.pathname.split('/') || [], psychotic = result.protocol && !$42c0ab72f3b39275783aaa4babb143cb$var$slashedProtocol[result.protocol];
    // if the url is a non-slashed url, then relative
    // links like ../.. should be able
    // to crawl up to the hostname, as well.  This is strange.
    // result.protocol has already been set by now.
    // Later on, put the first path part into the host field.
    if (psychotic) {
      result.hostname = '';
      result.port = null;
      if (result.host) {
        if (srcPath[0] === '') srcPath[0] = result.host; else srcPath.unshift(result.host);
      }
      result.host = '';
      if (relative.protocol) {
        relative.hostname = null;
        relative.port = null;
        if (relative.host) {
          if (relPath[0] === '') relPath[0] = relative.host; else relPath.unshift(relative.host);
        }
        relative.host = null;
      }
      mustEndAbs = mustEndAbs && (relPath[0] === '' || srcPath[0] === '');
    }
    if (isRelAbs) {
      // it's absolute.
      result.host = relative.host || relative.host === '' ? relative.host : result.host;
      result.hostname = relative.hostname || relative.hostname === '' ? relative.hostname : result.hostname;
      result.search = relative.search;
      result.query = relative.query;
      srcPath = relPath;
    } else if (relPath.length) {
      // it's relative
      // throw away the existing file, and take the new path instead.
      if (!srcPath) srcPath = [];
      srcPath.pop();
      srcPath = srcPath.concat(relPath);
      result.search = relative.search;
      result.query = relative.query;
    } else if (!$fb6a21cc5c1e7677f11d39d63f817a4d$exports.isNullOrUndefined(relative.search)) {
      // just pull out the search.
      // like href='?foo'.
      // Put this after the other two cases because it simplifies the booleans
      if (psychotic) {
        result.hostname = result.host = srcPath.shift();
        // occationaly the auth can get stuck only in host
        // this especially happens in cases like
        // url.resolveObject('mailto:local1@domain1', 'local2@domain2')
        var authInHost = result.host && result.host.indexOf('@') > 0 ? result.host.split('@') : false;
        if (authInHost) {
          result.auth = authInHost.shift();
          result.host = result.hostname = authInHost.shift();
        }
      }
      result.search = relative.search;
      result.query = relative.query;
      // to support http.request
      if (!$fb6a21cc5c1e7677f11d39d63f817a4d$exports.isNull(result.pathname) || !$fb6a21cc5c1e7677f11d39d63f817a4d$exports.isNull(result.search)) {
        result.path = (result.pathname ? result.pathname : '') + (result.search ? result.search : '');
      }
      result.href = result.format();
      return result;
    }
    if (!srcPath.length) {
      // no path at all.  easy.
      // we've already handled the other stuff above.
      result.pathname = null;
      // to support http.request
      if (result.search) {
        result.path = '/' + result.search;
      } else {
        result.path = null;
      }
      result.href = result.format();
      return result;
    }
    // if a url ENDs in . or .., then it must get a trailing slash.
    // however, if it ends in anything else non-slashy,
    // then it must NOT get a trailing slash.
    var last = srcPath.slice(-1)[0];
    var hasTrailingSlash = (result.host || relative.host || srcPath.length > 1) && (last === '.' || last === '..') || last === '';
    // strip single dots, resolve double dots to parent dir
    // if the path tries to go above the root, `up` ends up > 0
    var up = 0;
    for (var i = srcPath.length; i >= 0; i--) {
      last = srcPath[i];
      if (last === '.') {
        srcPath.splice(i, 1);
      } else if (last === '..') {
        srcPath.splice(i, 1);
        up++;
      } else if (up) {
        srcPath.splice(i, 1);
        up--;
      }
    }
    // if the path is allowed to go above the root, restore leading ..s
    if (!mustEndAbs && !removeAllDots) {
      for (; up--; up) {
        srcPath.unshift('..');
      }
    }
    if (mustEndAbs && srcPath[0] !== '' && (!srcPath[0] || srcPath[0].charAt(0) !== '/')) {
      srcPath.unshift('');
    }
    if (hasTrailingSlash && srcPath.join('/').substr(-1) !== '/') {
      srcPath.push('');
    }
    var isAbsolute = srcPath[0] === '' || srcPath[0] && srcPath[0].charAt(0) === '/';
    // put the host back
    if (psychotic) {
      result.hostname = result.host = isAbsolute ? '' : srcPath.length ? srcPath.shift() : '';
      // occationaly the auth can get stuck only in host
      // this especially happens in cases like
      // url.resolveObject('mailto:local1@domain1', 'local2@domain2')
      var authInHost = result.host && result.host.indexOf('@') > 0 ? result.host.split('@') : false;
      if (authInHost) {
        result.auth = authInHost.shift();
        result.host = result.hostname = authInHost.shift();
      }
    }
    mustEndAbs = mustEndAbs || result.host && srcPath.length;
    if (mustEndAbs && !isAbsolute) {
      srcPath.unshift('');
    }
    if (!srcPath.length) {
      result.pathname = null;
      result.path = null;
    } else {
      result.pathname = srcPath.join('/');
    }
    // to support request.http
    if (!$fb6a21cc5c1e7677f11d39d63f817a4d$exports.isNull(result.pathname) || !$fb6a21cc5c1e7677f11d39d63f817a4d$exports.isNull(result.search)) {
      result.path = (result.pathname ? result.pathname : '') + (result.search ? result.search : '');
    }
    result.auth = relative.auth || result.auth;
    result.slashes = result.slashes || relative.slashes;
    result.href = result.format();
    return result;
  };
  $42c0ab72f3b39275783aaa4babb143cb$var$Url.prototype.parseHost = function () {
    var host = this.host;
    var port = $42c0ab72f3b39275783aaa4babb143cb$var$portPattern.exec(host);
    if (port) {
      port = port[0];
      if (port !== ':') {
        this.port = port.substr(1);
      }
      host = host.substr(0, host.length - port.length);
    }
    if (host) this.hostname = host;
  };
  // ASSET: node_modules/jsonschema/lib/attribute.js
  var $bfd17381112b94a0814e07dd5040defb$exports = {};
  // ASSET: node_modules/jsonschema/lib/helpers.js
  var $ce4eec71ec4285d39f33d14254969864$export$ValidationError, $ce4eec71ec4285d39f33d14254969864$export$ValidatorResult, $ce4eec71ec4285d39f33d14254969864$export$SchemaError, $ce4eec71ec4285d39f33d14254969864$export$SchemaContext, $ce4eec71ec4285d39f33d14254969864$export$FORMAT_REGEXPS, $ce4eec71ec4285d39f33d14254969864$export$makeSuffix;
  var $ce4eec71ec4285d39f33d14254969864$var$ValidationError = $ce4eec71ec4285d39f33d14254969864$export$ValidationError = function ValidationError(message, instance, schema, path, name, argument) {
    if (Array.isArray(path)) {
      this.path = path;
      this.property = path.reduce(function (sum, item) {
        return sum + $ce4eec71ec4285d39f33d14254969864$var$makeSuffix(item);
      }, 'instance');
    } else if (path !== undefined) {
      this.property = path;
    }
    if (message) {
      this.message = message;
    }
    if (schema) {
      var id = schema.$id || schema.id;
      this.schema = id || schema;
    }
    if (instance !== undefined) {
      this.instance = instance;
    }
    this.name = name;
    this.argument = argument;
    this.stack = this.toString();
  };
  $ce4eec71ec4285d39f33d14254969864$var$ValidationError.prototype.toString = function toString() {
    return this.property + ' ' + this.message;
  };
  var $ce4eec71ec4285d39f33d14254969864$var$ValidatorResult = $ce4eec71ec4285d39f33d14254969864$export$ValidatorResult = function ValidatorResult(instance, schema, options, ctx) {
    this.instance = instance;
    this.schema = schema;
    this.options = options;
    this.path = ctx.path;
    this.propertyPath = ctx.propertyPath;
    this.errors = [];
    this.throwError = options && options.throwError;
    this.throwFirst = options && options.throwFirst;
    this.throwAll = options && options.throwAll;
    this.disableFormat = options && options.disableFormat === true;
  };
  $ce4eec71ec4285d39f33d14254969864$var$ValidatorResult.prototype.addError = function addError(detail) {
    var err;
    if (typeof detail == 'string') {
      err = new $ce4eec71ec4285d39f33d14254969864$var$ValidationError(detail, this.instance, this.schema, this.path);
    } else {
      if (!detail) throw new Error('Missing error detail');
      if (!detail.message) throw new Error('Missing error message');
      if (!detail.name) throw new Error('Missing validator type');
      err = new $ce4eec71ec4285d39f33d14254969864$var$ValidationError(detail.message, this.instance, this.schema, this.path, detail.name, detail.argument);
    }
    this.errors.push(err);
    if (this.throwFirst) {
      throw new $ce4eec71ec4285d39f33d14254969864$var$ValidatorResultError(this);
    } else if (this.throwError) {
      throw err;
    }
    return err;
  };
  $ce4eec71ec4285d39f33d14254969864$var$ValidatorResult.prototype.importErrors = function importErrors(res) {
    if (typeof res == 'string' || res && res.validatorType) {
      this.addError(res);
    } else if (res && res.errors) {
      Array.prototype.push.apply(this.errors, res.errors);
    }
  };
  function $ce4eec71ec4285d39f33d14254969864$var$stringizer(v, i) {
    return i + ': ' + v.toString() + '\n';
  }
  $ce4eec71ec4285d39f33d14254969864$var$ValidatorResult.prototype.toString = function toString(res) {
    return this.errors.map($ce4eec71ec4285d39f33d14254969864$var$stringizer).join('');
  };
  Object.defineProperty($ce4eec71ec4285d39f33d14254969864$var$ValidatorResult.prototype, "valid", {
    get: function () {
      return !this.errors.length;
    }
  });
  var $ce4eec71ec4285d39f33d14254969864$export$ValidatorResultError = $ce4eec71ec4285d39f33d14254969864$var$ValidatorResultError;
  function $ce4eec71ec4285d39f33d14254969864$var$ValidatorResultError(result) {
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, $ce4eec71ec4285d39f33d14254969864$var$ValidatorResultError);
    }
    this.instance = result.instance;
    this.schema = result.schema;
    this.options = result.options;
    this.errors = result.errors;
  }
  $ce4eec71ec4285d39f33d14254969864$var$ValidatorResultError.prototype = new Error();
  $ce4eec71ec4285d39f33d14254969864$var$ValidatorResultError.prototype.constructor = $ce4eec71ec4285d39f33d14254969864$var$ValidatorResultError;
  $ce4eec71ec4285d39f33d14254969864$var$ValidatorResultError.prototype.name = "Validation Error";
  /**
  * Describes a problem with a Schema which prevents validation of an instance
  * @name SchemaError
  * @constructor
  */
  var $ce4eec71ec4285d39f33d14254969864$var$SchemaError = $ce4eec71ec4285d39f33d14254969864$export$SchemaError = function SchemaError(msg, schema) {
    this.message = msg;
    this.schema = schema;
    Error.call(this, msg);
    Error.captureStackTrace(this, SchemaError);
  };
  $ce4eec71ec4285d39f33d14254969864$var$SchemaError.prototype = Object.create(Error.prototype, {
    constructor: {
      value: $ce4eec71ec4285d39f33d14254969864$var$SchemaError,
      enumerable: false
    },
    name: {
      value: 'SchemaError',
      enumerable: false
    }
  });
  var $ce4eec71ec4285d39f33d14254969864$var$SchemaContext = $ce4eec71ec4285d39f33d14254969864$export$SchemaContext = function SchemaContext(schema, options, path, base, schemas) {
    this.schema = schema;
    this.options = options;
    if (Array.isArray(path)) {
      this.path = path;
      this.propertyPath = path.reduce(function (sum, item) {
        return sum + $ce4eec71ec4285d39f33d14254969864$var$makeSuffix(item);
      }, 'instance');
    } else {
      this.propertyPath = path;
    }
    this.base = base;
    this.schemas = schemas;
  };
  $ce4eec71ec4285d39f33d14254969864$var$SchemaContext.prototype.resolve = function resolve(target) {
    return $42c0ab72f3b39275783aaa4babb143cb$export$resolve(this.base, target);
  };
  $ce4eec71ec4285d39f33d14254969864$var$SchemaContext.prototype.makeChild = function makeChild(schema, propertyName) {
    var path = propertyName === undefined ? this.path : this.path.concat([propertyName]);
    var id = schema.$id || schema.id;
    var base = $42c0ab72f3b39275783aaa4babb143cb$export$resolve(this.base, id || '');
    var ctx = new $ce4eec71ec4285d39f33d14254969864$var$SchemaContext(schema, this.options, path, base, Object.create(this.schemas));
    if (id && !ctx.schemas[base]) {
      ctx.schemas[base] = schema;
    }
    return ctx;
  };
  var $ce4eec71ec4285d39f33d14254969864$var$FORMAT_REGEXPS = $ce4eec71ec4285d39f33d14254969864$export$FORMAT_REGEXPS = {
    'date-time': /^\d{4}-(?:0[0-9]{1}|1[0-2]{1})-(3[01]|0[1-9]|[12][0-9])[tT ](2[0-4]|[01][0-9]):([0-5][0-9]):(60|[0-5][0-9])(\.\d+)?([zZ]|[+-]([0-5][0-9]):(60|[0-5][0-9]))$/,
    'date': /^\d{4}-(?:0[0-9]{1}|1[0-2]{1})-(3[01]|0[1-9]|[12][0-9])$/,
    'time': /^(2[0-4]|[01][0-9]):([0-5][0-9]):(60|[0-5][0-9])$/,
    'email': /^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/,
    'ip-address': /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,
    'ipv6': /^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/,
    // TODO: A more accurate regular expression for "uri" goes:
    // [A-Za-z][+\-.0-9A-Za-z]*:((/(/((%[0-9A-Fa-f]{2}|[!$&-.0-9;=A-Z_a-z~])+|(\[(([Vv][0-9A-Fa-f]+\.[!$&-.0-;=A-Z_a-z~]+)?|[.0-:A-Fa-f]+)\])?)(:\d*)?)?)?#(%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~])*|(/(/((%[0-9A-Fa-f]{2}|[!$&-.0-9;=A-Z_a-z~])+|(\[(([Vv][0-9A-Fa-f]+\.[!$&-.0-;=A-Z_a-z~]+)?|[.0-:A-Fa-f]+)\])?)(:\d*)?[/?]|[!$&-.0-;=?-Z_a-z~])|/?%[0-9A-Fa-f]{2}|[!$&-.0-;=?-Z_a-z~])(%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~])*(#(%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~])*)?|/(/((%[0-9A-Fa-f]{2}|[!$&-.0-9;=A-Z_a-z~])+(:\d*)?|(\[(([Vv][0-9A-Fa-f]+\.[!$&-.0-;=A-Z_a-z~]+)?|[.0-:A-Fa-f]+)\])?:\d*|\[(([Vv][0-9A-Fa-f]+\.[!$&-.0-;=A-Z_a-z~]+)?|[.0-:A-Fa-f]+)\])?)?)?
    'uri': /^[a-zA-Z][a-zA-Z0-9+-.]*:[^\s]*$/,
    'uri-reference': /^(((([A-Za-z][+\-.0-9A-Za-z]*(:%[0-9A-Fa-f]{2}|:[!$&-.0-;=?-Z_a-z~]|[/?])|\?)(%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~])*|([A-Za-z][+\-.0-9A-Za-z]*:?)?)|([A-Za-z][+\-.0-9A-Za-z]*:)?\/((%[0-9A-Fa-f]{2}|\/((%[0-9A-Fa-f]{2}|[!$&-.0-9;=A-Z_a-z~])+|(\[(([Vv][0-9A-Fa-f]+\.[!$&-.0-;=A-Z_a-z~]+)?|[.0-:A-Fa-f]+)\])?)(:\d*)?[/?]|[!$&-.0-;=?-Z_a-z~])(%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~])*|(\/((%[0-9A-Fa-f]{2}|[!$&-.0-9;=A-Z_a-z~])+|(\[(([Vv][0-9A-Fa-f]+\.[!$&-.0-;=A-Z_a-z~]+)?|[.0-:A-Fa-f]+)\])?)(:\d*)?)?))#(%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~])*|(([A-Za-z][+\-.0-9A-Za-z]*)?%[0-9A-Fa-f]{2}|[!$&-.0-9;=@_~]|[A-Za-z][+\-.0-9A-Za-z]*[!$&-*,;=@_~])(%[0-9A-Fa-f]{2}|[!$&-.0-9;=@-Z_a-z~])*((([/?](%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~])*)?#|[/?])(%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~])*)?|([A-Za-z][+\-.0-9A-Za-z]*(:%[0-9A-Fa-f]{2}|:[!$&-.0-;=?-Z_a-z~]|[/?])|\?)(%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~])*|([A-Za-z][+\-.0-9A-Za-z]*:)?\/((%[0-9A-Fa-f]{2}|\/((%[0-9A-Fa-f]{2}|[!$&-.0-9;=A-Z_a-z~])+|(\[(([Vv][0-9A-Fa-f]+\.[!$&-.0-;=A-Z_a-z~]+)?|[.0-:A-Fa-f]+)\])?)(:\d*)?[/?]|[!$&-.0-;=?-Z_a-z~])(%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~])*|\/((%[0-9A-Fa-f]{2}|[!$&-.0-9;=A-Z_a-z~])+(:\d*)?|(\[(([Vv][0-9A-Fa-f]+\.[!$&-.0-;=A-Z_a-z~]+)?|[.0-:A-Fa-f]+)\])?:\d*|\[(([Vv][0-9A-Fa-f]+\.[!$&-.0-;=A-Z_a-z~]+)?|[.0-:A-Fa-f]+)\])?)?|[A-Za-z][+\-.0-9A-Za-z]*:?)?$/,
    'color': /^(#?([0-9A-Fa-f]{3}){1,2}\b|aqua|black|blue|fuchsia|gray|green|lime|maroon|navy|olive|orange|purple|red|silver|teal|white|yellow|(rgb\(\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*,\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*,\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*\))|(rgb\(\s*(\d?\d%|100%)+\s*,\s*(\d?\d%|100%)+\s*,\s*(\d?\d%|100%)+\s*\)))$/,
    // hostname regex from: http://stackoverflow.com/a/1420225/5628
    'hostname': /^(?=.{1,255}$)[0-9A-Za-z](?:(?:[0-9A-Za-z]|-){0,61}[0-9A-Za-z])?(?:\.[0-9A-Za-z](?:(?:[0-9A-Za-z]|-){0,61}[0-9A-Za-z])?)*\.?$/,
    'host-name': /^(?=.{1,255}$)[0-9A-Za-z](?:(?:[0-9A-Za-z]|-){0,61}[0-9A-Za-z])?(?:\.[0-9A-Za-z](?:(?:[0-9A-Za-z]|-){0,61}[0-9A-Za-z])?)*\.?$/,
    'alpha': /^[a-zA-Z]+$/,
    'alphanumeric': /^[a-zA-Z0-9]+$/,
    'utc-millisec': function (input) {
      return typeof input === 'string' && parseFloat(input) === parseInt(input, 10) && !isNaN(input);
    },
    'regex': function (input) {
      var result = true;
      try {
        new RegExp(input);
      } catch (e) {
        result = false;
      }
      return result;
    },
    'style': /\s*(.+?):\s*([^;]+);?/,
    'phone': /^\+(?:[0-9] ?){6,14}[0-9]$/
  };
  $ce4eec71ec4285d39f33d14254969864$var$FORMAT_REGEXPS.regexp = $ce4eec71ec4285d39f33d14254969864$var$FORMAT_REGEXPS.regex;
  $ce4eec71ec4285d39f33d14254969864$var$FORMAT_REGEXPS.pattern = $ce4eec71ec4285d39f33d14254969864$var$FORMAT_REGEXPS.regex;
  $ce4eec71ec4285d39f33d14254969864$var$FORMAT_REGEXPS.ipv4 = $ce4eec71ec4285d39f33d14254969864$var$FORMAT_REGEXPS['ip-address'];
  var $ce4eec71ec4285d39f33d14254969864$export$isFormat = function isFormat(input, format, validator) {
    if (typeof input === 'string' && $ce4eec71ec4285d39f33d14254969864$var$FORMAT_REGEXPS[format] !== undefined) {
      if ($ce4eec71ec4285d39f33d14254969864$var$FORMAT_REGEXPS[format] instanceof RegExp) {
        return $ce4eec71ec4285d39f33d14254969864$var$FORMAT_REGEXPS[format].test(input);
      }
      if (typeof $ce4eec71ec4285d39f33d14254969864$var$FORMAT_REGEXPS[format] === 'function') {
        return $ce4eec71ec4285d39f33d14254969864$var$FORMAT_REGEXPS[format](input);
      }
    } else if (validator && validator.customFormats && typeof validator.customFormats[format] === 'function') {
      return validator.customFormats[format](input);
    }
    return true;
  };
  var $ce4eec71ec4285d39f33d14254969864$var$makeSuffix = $ce4eec71ec4285d39f33d14254969864$export$makeSuffix = function makeSuffix(key) {
    key = key.toString();
    // This function could be capable of outputting valid a ECMAScript string, but the
    // resulting code for testing which form to use would be tens of thousands of characters long
    // That means this will use the name form for some illegal forms
    if (!key.match(/[.\s\[\]]/) && !key.match(/^[\d]/)) {
      return '.' + key;
    }
    if (key.match(/^\d+$/)) {
      return '[' + key + ']';
    }
    return '[' + JSON.stringify(key) + ']';
  };
  var $ce4eec71ec4285d39f33d14254969864$export$deepCompareStrict = function deepCompareStrict(a, b) {
    if (typeof a !== typeof b) {
      return false;
    }
    if (Array.isArray(a)) {
      if (!Array.isArray(b)) {
        return false;
      }
      if (a.length !== b.length) {
        return false;
      }
      return a.every(function (v, i) {
        return deepCompareStrict(a[i], b[i]);
      });
    }
    if (typeof a === 'object') {
      if (!a || !b) {
        return a === b;
      }
      var aKeys = Object.keys(a);
      var bKeys = Object.keys(b);
      if (aKeys.length !== bKeys.length) {
        return false;
      }
      return aKeys.every(function (v) {
        return deepCompareStrict(a[v], b[v]);
      });
    }
    return a === b;
  };
  function $ce4eec71ec4285d39f33d14254969864$var$deepMerger(target, dst, e, i) {
    if (typeof e === 'object') {
      dst[i] = $ce4eec71ec4285d39f33d14254969864$var$deepMerge(target[i], e);
    } else {
      if (target.indexOf(e) === -1) {
        dst.push(e);
      }
    }
  }
  function $ce4eec71ec4285d39f33d14254969864$var$copyist(src, dst, key) {
    dst[key] = src[key];
  }
  function $ce4eec71ec4285d39f33d14254969864$var$copyistWithDeepMerge(target, src, dst, key) {
    if (typeof src[key] !== 'object' || !src[key]) {
      dst[key] = src[key];
    } else {
      if (!target[key]) {
        dst[key] = src[key];
      } else {
        dst[key] = $ce4eec71ec4285d39f33d14254969864$var$deepMerge(target[key], src[key]);
      }
    }
  }
  function $ce4eec71ec4285d39f33d14254969864$var$deepMerge(target, src) {
    var array = Array.isArray(src);
    var dst = array && [] || ({});
    if (array) {
      target = target || [];
      dst = dst.concat(target);
      src.forEach($ce4eec71ec4285d39f33d14254969864$var$deepMerger.bind(null, target, dst));
    } else {
      if (target && typeof target === 'object') {
        Object.keys(target).forEach($ce4eec71ec4285d39f33d14254969864$var$copyist.bind(null, target, dst));
      }
      Object.keys(src).forEach($ce4eec71ec4285d39f33d14254969864$var$copyistWithDeepMerge.bind(null, target, src, dst));
    }
    return dst;
  }
  var $ce4eec71ec4285d39f33d14254969864$export$deepMerge = $ce4eec71ec4285d39f33d14254969864$var$deepMerge;
  var $ce4eec71ec4285d39f33d14254969864$export$objectGetPath = function objectGetPath(o, s) {
    var parts = s.split('/').slice(1);
    var k;
    while (typeof (k = parts.shift()) == 'string') {
      var n = decodeURIComponent(k.replace(/~0/, '~').replace(/~1/g, '/'));
      if (!((n in o))) return;
      o = o[n];
    }
    return o;
  };
  function $ce4eec71ec4285d39f33d14254969864$var$pathEncoder(v) {
    return '/' + encodeURIComponent(v).replace(/~/g, '%7E');
  }
  var $ce4eec71ec4285d39f33d14254969864$export$getDecimalPlaces = function getDecimalPlaces(number) {
    var decimalPlaces = 0;
    if (isNaN(number)) return decimalPlaces;
    if (typeof number !== 'number') {
      number = Number(number);
    }
    var parts = number.toString().split('e');
    if (parts.length === 2) {
      if (parts[1][0] !== '-') {
        return decimalPlaces;
      } else {
        decimalPlaces = Number(parts[1].slice(1));
      }
    }
    var decimalParts = parts[0].split('.');
    if (decimalParts.length === 2) {
      decimalPlaces += decimalParts[1].length;
    }
    return decimalPlaces;
  };
  var $ce4eec71ec4285d39f33d14254969864$export$isSchema = function isSchema(val) {
    return typeof val === 'object' && val || typeof val === 'boolean';
  };
  /** @type ValidatorResult*/
  var $bfd17381112b94a0814e07dd5040defb$var$ValidatorResult = $ce4eec71ec4285d39f33d14254969864$export$ValidatorResult;
  /** @type SchemaError*/
  var $bfd17381112b94a0814e07dd5040defb$var$SchemaError = $ce4eec71ec4285d39f33d14254969864$export$SchemaError;
  var $bfd17381112b94a0814e07dd5040defb$var$attribute = {};
  $bfd17381112b94a0814e07dd5040defb$var$attribute.ignoreProperties = {
    // informative properties
    'id': true,
    'default': true,
    'description': true,
    'title': true,
    // arguments to other properties
    'additionalItems': true,
    'then': true,
    'else': true,
    // special-handled properties
    '$schema': true,
    '$ref': true,
    'extends': true
  };
  /**
  * @name validators
  */
  var $bfd17381112b94a0814e07dd5040defb$var$validators = $bfd17381112b94a0814e07dd5040defb$var$attribute.validators = {};
  /**
  * Validates whether the instance if of a certain type
  * @param instance
  * @param schema
  * @param options
  * @param ctx
  * @return {ValidatorResult|null}
  */
  $bfd17381112b94a0814e07dd5040defb$var$validators.type = function validateType(instance, schema, options, ctx) {
    // Ignore undefined instances
    if (instance === undefined) {
      return null;
    }
    var result = new $bfd17381112b94a0814e07dd5040defb$var$ValidatorResult(instance, schema, options, ctx);
    var types = Array.isArray(schema.type) ? schema.type : [schema.type];
    if (!types.some(this.testType.bind(this, instance, schema, options, ctx))) {
      var list = types.map(function (v) {
        if (!v) return;
        var id = v.$id || v.id;
        return id ? '<' + id + '>' : v + '';
      });
      result.addError({
        name: 'type',
        argument: list,
        message: "is not of a type(s) " + list
      });
    }
    return result;
  };
  function $bfd17381112b94a0814e07dd5040defb$var$testSchemaNoThrow(instance, options, ctx, callback, schema) {
    var throwError = options.throwError;
    var throwAll = options.throwAll;
    options.throwError = false;
    options.throwAll = false;
    var res = this.validateSchema(instance, schema, options, ctx);
    options.throwError = throwError;
    options.throwAll = throwAll;
    if (!res.valid && callback instanceof Function) {
      callback(res);
    }
    return res.valid;
  }
  /**
  * Validates whether the instance matches some of the given schemas
  * @param instance
  * @param schema
  * @param options
  * @param ctx
  * @return {ValidatorResult|null}
  */
  $bfd17381112b94a0814e07dd5040defb$var$validators.anyOf = function validateAnyOf(instance, schema, options, ctx) {
    // Ignore undefined instances
    if (instance === undefined) {
      return null;
    }
    var result = new $bfd17381112b94a0814e07dd5040defb$var$ValidatorResult(instance, schema, options, ctx);
    var inner = new $bfd17381112b94a0814e07dd5040defb$var$ValidatorResult(instance, schema, options, ctx);
    if (!Array.isArray(schema.anyOf)) {
      throw new $bfd17381112b94a0814e07dd5040defb$var$SchemaError("anyOf must be an array");
    }
    if (!schema.anyOf.some($bfd17381112b94a0814e07dd5040defb$var$testSchemaNoThrow.bind(this, instance, options, ctx, function (res) {
      inner.importErrors(res);
    }))) {
      var list = schema.anyOf.map(function (v, i) {
        var id = v.$id || v.id;
        if (id) return '<' + id + '>';
        return v.title && JSON.stringify(v.title) || v['$ref'] && '<' + v['$ref'] + '>' || '[subschema ' + i + ']';
      });
      if (options.nestedErrors) {
        result.importErrors(inner);
      }
      result.addError({
        name: 'anyOf',
        argument: list,
        message: "is not any of " + list.join(',')
      });
    }
    return result;
  };
  /**
  * Validates whether the instance matches every given schema
  * @param instance
  * @param schema
  * @param options
  * @param ctx
  * @return {String|null}
  */
  $bfd17381112b94a0814e07dd5040defb$var$validators.allOf = function validateAllOf(instance, schema, options, ctx) {
    // Ignore undefined instances
    if (instance === undefined) {
      return null;
    }
    if (!Array.isArray(schema.allOf)) {
      throw new $bfd17381112b94a0814e07dd5040defb$var$SchemaError("allOf must be an array");
    }
    var result = new $bfd17381112b94a0814e07dd5040defb$var$ValidatorResult(instance, schema, options, ctx);
    var self = this;
    schema.allOf.forEach(function (v, i) {
      var valid = self.validateSchema(instance, v, options, ctx);
      if (!valid.valid) {
        var id = v.$id || v.id;
        var msg = id || v.title && JSON.stringify(v.title) || v['$ref'] && '<' + v['$ref'] + '>' || '[subschema ' + i + ']';
        result.addError({
          name: 'allOf',
          argument: {
            id: msg,
            length: valid.errors.length,
            valid: valid
          },
          message: 'does not match allOf schema ' + msg + ' with ' + valid.errors.length + ' error[s]:'
        });
        result.importErrors(valid);
      }
    });
    return result;
  };
  /**
  * Validates whether the instance matches exactly one of the given schemas
  * @param instance
  * @param schema
  * @param options
  * @param ctx
  * @return {String|null}
  */
  $bfd17381112b94a0814e07dd5040defb$var$validators.oneOf = function validateOneOf(instance, schema, options, ctx) {
    // Ignore undefined instances
    if (instance === undefined) {
      return null;
    }
    if (!Array.isArray(schema.oneOf)) {
      throw new $bfd17381112b94a0814e07dd5040defb$var$SchemaError("oneOf must be an array");
    }
    var result = new $bfd17381112b94a0814e07dd5040defb$var$ValidatorResult(instance, schema, options, ctx);
    var inner = new $bfd17381112b94a0814e07dd5040defb$var$ValidatorResult(instance, schema, options, ctx);
    var count = schema.oneOf.filter($bfd17381112b94a0814e07dd5040defb$var$testSchemaNoThrow.bind(this, instance, options, ctx, function (res) {
      inner.importErrors(res);
    })).length;
    var list = schema.oneOf.map(function (v, i) {
      var id = v.$id || v.id;
      return id || v.title && JSON.stringify(v.title) || v['$ref'] && '<' + v['$ref'] + '>' || '[subschema ' + i + ']';
    });
    if (count !== 1) {
      if (options.nestedErrors) {
        result.importErrors(inner);
      }
      result.addError({
        name: 'oneOf',
        argument: list,
        message: "is not exactly one from " + list.join(',')
      });
    }
    return result;
  };
  /**
  * Validates "then" or "else" depending on the result of validating "if"
  * @param instance
  * @param schema
  * @param options
  * @param ctx
  * @return {String|null}
  */
  $bfd17381112b94a0814e07dd5040defb$var$validators.if = function validateIf(instance, schema, options, ctx) {
    // Ignore undefined instances
    if (instance === undefined) return null;
    if (!$ce4eec71ec4285d39f33d14254969864$export$isSchema(schema.if)) throw new Error('Expected "if" keyword to be a schema');
    var ifValid = $bfd17381112b94a0814e07dd5040defb$var$testSchemaNoThrow.call(this, instance, options, ctx, null, schema.if);
    var result = new $bfd17381112b94a0814e07dd5040defb$var$ValidatorResult(instance, schema, options, ctx);
    var res;
    if (ifValid) {
      if (schema.then === undefined) return;
      if (!$ce4eec71ec4285d39f33d14254969864$export$isSchema(schema.then)) throw new Error('Expected "then" keyword to be a schema');
      res = this.validateSchema(instance, schema.then, options, ctx.makeChild(schema.then));
      result.importErrors(res);
    } else {
      if (schema.else === undefined) return;
      if (!$ce4eec71ec4285d39f33d14254969864$export$isSchema(schema.else)) throw new Error('Expected "else" keyword to be a schema');
      res = this.validateSchema(instance, schema.else, options, ctx.makeChild(schema.else));
      result.importErrors(res);
    }
    return result;
  };
  function $bfd17381112b94a0814e07dd5040defb$var$getEnumerableProperty(object, key) {
    // Determine if `key` shows up in `for(var key in object)`
    // First test Object.hasOwnProperty.call as an optimization: that guarantees it does
    if (Object.hasOwnProperty.call(object, key)) return object[key];
    // Test `key in object` as an optimization; false means it won't
    if (!((key in object))) return;
    while (object = Object.getPrototypeOf(object)) {
      if (Object.propertyIsEnumerable.call(object, key)) return object[key];
    }
  }
  /**
  * Validates propertyNames
  * @param instance
  * @param schema
  * @param options
  * @param ctx
  * @return {String|null|ValidatorResult}
  */
  $bfd17381112b94a0814e07dd5040defb$var$validators.propertyNames = function validatePropertyNames(instance, schema, options, ctx) {
    if (!this.types.object(instance)) return;
    var result = new $bfd17381112b94a0814e07dd5040defb$var$ValidatorResult(instance, schema, options, ctx);
    var subschema = schema.propertyNames !== undefined ? schema.propertyNames : {};
    if (!$ce4eec71ec4285d39f33d14254969864$export$isSchema(subschema)) throw new $bfd17381112b94a0814e07dd5040defb$var$SchemaError('Expected "propertyNames" to be a schema (object or boolean)');
    for (var property in instance) {
      if ($bfd17381112b94a0814e07dd5040defb$var$getEnumerableProperty(instance, property) !== undefined) {
        var res = this.validateSchema(property, subschema, options, ctx.makeChild(subschema));
        result.importErrors(res);
      }
    }
    return result;
  };
  /**
  * Validates properties
  * @param instance
  * @param schema
  * @param options
  * @param ctx
  * @return {String|null|ValidatorResult}
  */
  $bfd17381112b94a0814e07dd5040defb$var$validators.properties = function validateProperties(instance, schema, options, ctx) {
    if (!this.types.object(instance)) return;
    var result = new $bfd17381112b94a0814e07dd5040defb$var$ValidatorResult(instance, schema, options, ctx);
    var properties = schema.properties || ({});
    for (var property in properties) {
      var subschema = properties[property];
      if (subschema === undefined) {
        continue;
      } else if (subschema === null) {
        throw new $bfd17381112b94a0814e07dd5040defb$var$SchemaError('Unexpected null, expected schema in "properties"');
      }
      if (typeof options.preValidateProperty == 'function') {
        options.preValidateProperty(instance, property, subschema, options, ctx);
      }
      var prop = $bfd17381112b94a0814e07dd5040defb$var$getEnumerableProperty(instance, property);
      var res = this.validateSchema(prop, subschema, options, ctx.makeChild(subschema, property));
      if (res.instance !== result.instance[property]) result.instance[property] = res.instance;
      result.importErrors(res);
    }
    return result;
  };
  /**
  * Test a specific property within in instance against the additionalProperties schema attribute
  * This ignores properties with definitions in the properties schema attribute, but no other attributes.
  * If too many more types of property-existence tests pop up they may need their own class of tests (like `type` has)
  * @private
  * @return {boolean}
  */
  function $bfd17381112b94a0814e07dd5040defb$var$testAdditionalProperty(instance, schema, options, ctx, property, result) {
    if (!this.types.object(instance)) return;
    if (schema.properties && schema.properties[property] !== undefined) {
      return;
    }
    if (schema.additionalProperties === false) {
      result.addError({
        name: 'additionalProperties',
        argument: property,
        message: "is not allowed to have the additional property " + JSON.stringify(property)
      });
    } else {
      var additionalProperties = schema.additionalProperties || ({});
      if (typeof options.preValidateProperty == 'function') {
        options.preValidateProperty(instance, property, additionalProperties, options, ctx);
      }
      var res = this.validateSchema(instance[property], additionalProperties, options, ctx.makeChild(additionalProperties, property));
      if (res.instance !== result.instance[property]) result.instance[property] = res.instance;
      result.importErrors(res);
    }
  }
  /**
  * Validates patternProperties
  * @param instance
  * @param schema
  * @param options
  * @param ctx
  * @return {String|null|ValidatorResult}
  */
  $bfd17381112b94a0814e07dd5040defb$var$validators.patternProperties = function validatePatternProperties(instance, schema, options, ctx) {
    if (!this.types.object(instance)) return;
    var result = new $bfd17381112b94a0814e07dd5040defb$var$ValidatorResult(instance, schema, options, ctx);
    var patternProperties = schema.patternProperties || ({});
    for (var property in instance) {
      var test = true;
      for (var pattern in patternProperties) {
        var subschema = patternProperties[pattern];
        if (subschema === undefined) {
          continue;
        } else if (subschema === null) {
          throw new $bfd17381112b94a0814e07dd5040defb$var$SchemaError('Unexpected null, expected schema in "patternProperties"');
        }
        try {
          var regexp = new RegExp(pattern, 'u');
        } catch (_e) {
          // In the event the stricter handling causes an error, fall back on the forgiving handling
          // DEPRECATED
          regexp = new RegExp(pattern);
        }
        if (!regexp.test(property)) {
          continue;
        }
        test = false;
        if (typeof options.preValidateProperty == 'function') {
          options.preValidateProperty(instance, property, subschema, options, ctx);
        }
        var res = this.validateSchema(instance[property], subschema, options, ctx.makeChild(subschema, property));
        if (res.instance !== result.instance[property]) result.instance[property] = res.instance;
        result.importErrors(res);
      }
      if (test) {
        $bfd17381112b94a0814e07dd5040defb$var$testAdditionalProperty.call(this, instance, schema, options, ctx, property, result);
      }
    }
    return result;
  };
  /**
  * Validates additionalProperties
  * @param instance
  * @param schema
  * @param options
  * @param ctx
  * @return {String|null|ValidatorResult}
  */
  $bfd17381112b94a0814e07dd5040defb$var$validators.additionalProperties = function validateAdditionalProperties(instance, schema, options, ctx) {
    if (!this.types.object(instance)) return;
    // if patternProperties is defined then we'll test when that one is called instead
    if (schema.patternProperties) {
      return null;
    }
    var result = new $bfd17381112b94a0814e07dd5040defb$var$ValidatorResult(instance, schema, options, ctx);
    for (var property in instance) {
      $bfd17381112b94a0814e07dd5040defb$var$testAdditionalProperty.call(this, instance, schema, options, ctx, property, result);
    }
    return result;
  };
  /**
  * Validates whether the instance value is at least of a certain length, when the instance value is a string.
  * @param instance
  * @param schema
  * @return {String|null}
  */
  $bfd17381112b94a0814e07dd5040defb$var$validators.minProperties = function validateMinProperties(instance, schema, options, ctx) {
    if (!this.types.object(instance)) return;
    var result = new $bfd17381112b94a0814e07dd5040defb$var$ValidatorResult(instance, schema, options, ctx);
    var keys = Object.keys(instance);
    if (!(keys.length >= schema.minProperties)) {
      result.addError({
        name: 'minProperties',
        argument: schema.minProperties,
        message: "does not meet minimum property length of " + schema.minProperties
      });
    }
    return result;
  };
  /**
  * Validates whether the instance value is at most of a certain length, when the instance value is a string.
  * @param instance
  * @param schema
  * @return {String|null}
  */
  $bfd17381112b94a0814e07dd5040defb$var$validators.maxProperties = function validateMaxProperties(instance, schema, options, ctx) {
    if (!this.types.object(instance)) return;
    var result = new $bfd17381112b94a0814e07dd5040defb$var$ValidatorResult(instance, schema, options, ctx);
    var keys = Object.keys(instance);
    if (!(keys.length <= schema.maxProperties)) {
      result.addError({
        name: 'maxProperties',
        argument: schema.maxProperties,
        message: "does not meet maximum property length of " + schema.maxProperties
      });
    }
    return result;
  };
  /**
  * Validates items when instance is an array
  * @param instance
  * @param schema
  * @param options
  * @param ctx
  * @return {String|null|ValidatorResult}
  */
  $bfd17381112b94a0814e07dd5040defb$var$validators.items = function validateItems(instance, schema, options, ctx) {
    var self = this;
    if (!this.types.array(instance)) return;
    if (!schema.items) return;
    var result = new $bfd17381112b94a0814e07dd5040defb$var$ValidatorResult(instance, schema, options, ctx);
    instance.every(function (value, i) {
      var items = Array.isArray(schema.items) ? schema.items[i] || schema.additionalItems : schema.items;
      if (items === undefined) {
        return true;
      }
      if (items === false) {
        result.addError({
          name: 'items',
          message: "additionalItems not permitted"
        });
        return false;
      }
      var res = self.validateSchema(value, items, options, ctx.makeChild(items, i));
      if (res.instance !== result.instance[i]) result.instance[i] = res.instance;
      result.importErrors(res);
      return true;
    });
    return result;
  };
  /**
  * Validates minimum and exclusiveMinimum when the type of the instance value is a number.
  * @param instance
  * @param schema
  * @return {String|null}
  */
  $bfd17381112b94a0814e07dd5040defb$var$validators.minimum = function validateMinimum(instance, schema, options, ctx) {
    if (!this.types.number(instance)) return;
    var result = new $bfd17381112b94a0814e07dd5040defb$var$ValidatorResult(instance, schema, options, ctx);
    if (schema.exclusiveMinimum && schema.exclusiveMinimum === true) {
      if (!(instance > schema.minimum)) {
        result.addError({
          name: 'minimum',
          argument: schema.minimum,
          message: "must be greater than " + schema.minimum
        });
      }
    } else {
      if (!(instance >= schema.minimum)) {
        result.addError({
          name: 'minimum',
          argument: schema.minimum,
          message: "must be greater than or equal to " + schema.minimum
        });
      }
    }
    return result;
  };
  /**
  * Validates maximum and exclusiveMaximum when the type of the instance value is a number.
  * @param instance
  * @param schema
  * @return {String|null}
  */
  $bfd17381112b94a0814e07dd5040defb$var$validators.maximum = function validateMaximum(instance, schema, options, ctx) {
    if (!this.types.number(instance)) return;
    var result = new $bfd17381112b94a0814e07dd5040defb$var$ValidatorResult(instance, schema, options, ctx);
    if (schema.exclusiveMaximum && schema.exclusiveMaximum === true) {
      if (!(instance < schema.maximum)) {
        result.addError({
          name: 'maximum',
          argument: schema.maximum,
          message: "must be less than " + schema.maximum
        });
      }
    } else {
      if (!(instance <= schema.maximum)) {
        result.addError({
          name: 'maximum',
          argument: schema.maximum,
          message: "must be less than or equal to " + schema.maximum
        });
      }
    }
    return result;
  };
  /**
  * Validates the number form of exclusiveMinimum when the type of the instance value is a number.
  * @param instance
  * @param schema
  * @return {String|null}
  */
  $bfd17381112b94a0814e07dd5040defb$var$validators.exclusiveMinimum = function validateExclusiveMinimum(instance, schema, options, ctx) {
    // Support the boolean form of exclusiveMinimum, which is handled by the "minimum" keyword.
    if (typeof schema.exclusiveMaximum === 'boolean') return;
    if (!this.types.number(instance)) return;
    var result = new $bfd17381112b94a0814e07dd5040defb$var$ValidatorResult(instance, schema, options, ctx);
    var valid = instance > schema.exclusiveMinimum;
    if (!valid) {
      result.addError({
        name: 'exclusiveMinimum',
        argument: schema.exclusiveMinimum,
        message: "must be strictly greater than " + schema.exclusiveMinimum
      });
    }
    return result;
  };
  /**
  * Validates the number form of exclusiveMaximum when the type of the instance value is a number.
  * @param instance
  * @param schema
  * @return {String|null}
  */
  $bfd17381112b94a0814e07dd5040defb$var$validators.exclusiveMaximum = function validateExclusiveMaximum(instance, schema, options, ctx) {
    // Support the boolean form of exclusiveMaximum, which is handled by the "maximum" keyword.
    if (typeof schema.exclusiveMaximum === 'boolean') return;
    if (!this.types.number(instance)) return;
    var result = new $bfd17381112b94a0814e07dd5040defb$var$ValidatorResult(instance, schema, options, ctx);
    var valid = instance < schema.exclusiveMaximum;
    if (!valid) {
      result.addError({
        name: 'exclusiveMaximum',
        argument: schema.exclusiveMaximum,
        message: "must be strictly less than " + schema.exclusiveMaximum
      });
    }
    return result;
  };
  /**
  * Perform validation for multipleOf and divisibleBy, which are essentially the same.
  * @param instance
  * @param schema
  * @param validationType
  * @param errorMessage
  * @returns {String|null}
  */
  var $bfd17381112b94a0814e07dd5040defb$var$validateMultipleOfOrDivisbleBy = function validateMultipleOfOrDivisbleBy(instance, schema, options, ctx, validationType, errorMessage) {
    if (!this.types.number(instance)) return;
    var validationArgument = schema[validationType];
    if (validationArgument == 0) {
      throw new $bfd17381112b94a0814e07dd5040defb$var$SchemaError(validationType + " cannot be zero");
    }
    var result = new $bfd17381112b94a0814e07dd5040defb$var$ValidatorResult(instance, schema, options, ctx);
    var instanceDecimals = $ce4eec71ec4285d39f33d14254969864$export$getDecimalPlaces(instance);
    var divisorDecimals = $ce4eec71ec4285d39f33d14254969864$export$getDecimalPlaces(validationArgument);
    var maxDecimals = Math.max(instanceDecimals, divisorDecimals);
    var multiplier = Math.pow(10, maxDecimals);
    if (Math.round(instance * multiplier) % Math.round(validationArgument * multiplier) !== 0) {
      result.addError({
        name: validationType,
        argument: validationArgument,
        message: errorMessage + JSON.stringify(validationArgument)
      });
    }
    return result;
  };
  /**
  * Validates divisibleBy when the type of the instance value is a number.
  * @param instance
  * @param schema
  * @return {String|null}
  */
  $bfd17381112b94a0814e07dd5040defb$var$validators.multipleOf = function validateMultipleOf(instance, schema, options, ctx) {
    return $bfd17381112b94a0814e07dd5040defb$var$validateMultipleOfOrDivisbleBy.call(this, instance, schema, options, ctx, "multipleOf", "is not a multiple of (divisible by) ");
  };
  /**
  * Validates multipleOf when the type of the instance value is a number.
  * @param instance
  * @param schema
  * @return {String|null}
  */
  $bfd17381112b94a0814e07dd5040defb$var$validators.divisibleBy = function validateDivisibleBy(instance, schema, options, ctx) {
    return $bfd17381112b94a0814e07dd5040defb$var$validateMultipleOfOrDivisbleBy.call(this, instance, schema, options, ctx, "divisibleBy", "is not divisible by (multiple of) ");
  };
  /**
  * Validates whether the instance value is present.
  * @param instance
  * @param schema
  * @return {String|null}
  */
  $bfd17381112b94a0814e07dd5040defb$var$validators.required = function validateRequired(instance, schema, options, ctx) {
    var result = new $bfd17381112b94a0814e07dd5040defb$var$ValidatorResult(instance, schema, options, ctx);
    if (instance === undefined && schema.required === true) {
      // A boolean form is implemented for reverse-compatibility with schemas written against older drafts
      result.addError({
        name: 'required',
        message: "is required"
      });
    } else if (this.types.object(instance) && Array.isArray(schema.required)) {
      schema.required.forEach(function (n) {
        if ($bfd17381112b94a0814e07dd5040defb$var$getEnumerableProperty(instance, n) === undefined) {
          result.addError({
            name: 'required',
            argument: n,
            message: "requires property " + JSON.stringify(n)
          });
        }
      });
    }
    return result;
  };
  /**
  * Validates whether the instance value matches the regular expression, when the instance value is a string.
  * @param instance
  * @param schema
  * @return {String|null}
  */
  $bfd17381112b94a0814e07dd5040defb$var$validators.pattern = function validatePattern(instance, schema, options, ctx) {
    if (!this.types.string(instance)) return;
    var result = new $bfd17381112b94a0814e07dd5040defb$var$ValidatorResult(instance, schema, options, ctx);
    var pattern = schema.pattern;
    try {
      var regexp = new RegExp(pattern, 'u');
    } catch (_e) {
      // In the event the stricter handling causes an error, fall back on the forgiving handling
      // DEPRECATED
      regexp = new RegExp(pattern);
    }
    if (!instance.match(regexp)) {
      result.addError({
        name: 'pattern',
        argument: schema.pattern,
        message: "does not match pattern " + JSON.stringify(schema.pattern.toString())
      });
    }
    return result;
  };
  /**
  * Validates whether the instance value is of a certain defined format or a custom
  * format.
  * The following formats are supported for string types:
  *   - date-time
  *   - date
  *   - time
  *   - ip-address
  *   - ipv6
  *   - uri
  *   - color
  *   - host-name
  *   - alpha
  *   - alpha-numeric
  *   - utc-millisec
  * @param instance
  * @param schema
  * @param [options]
  * @param [ctx]
  * @return {String|null}
  */
  $bfd17381112b94a0814e07dd5040defb$var$validators.format = function validateFormat(instance, schema, options, ctx) {
    if (instance === undefined) return;
    var result = new $bfd17381112b94a0814e07dd5040defb$var$ValidatorResult(instance, schema, options, ctx);
    if (!result.disableFormat && !$ce4eec71ec4285d39f33d14254969864$export$isFormat(instance, schema.format, this)) {
      result.addError({
        name: 'format',
        argument: schema.format,
        message: "does not conform to the " + JSON.stringify(schema.format) + " format"
      });
    }
    return result;
  };
  /**
  * Validates whether the instance value is at least of a certain length, when the instance value is a string.
  * @param instance
  * @param schema
  * @return {String|null}
  */
  $bfd17381112b94a0814e07dd5040defb$var$validators.minLength = function validateMinLength(instance, schema, options, ctx) {
    if (!this.types.string(instance)) return;
    var result = new $bfd17381112b94a0814e07dd5040defb$var$ValidatorResult(instance, schema, options, ctx);
    var hsp = instance.match(/[\uDC00-\uDFFF]/g);
    var length = instance.length - (hsp ? hsp.length : 0);
    if (!(length >= schema.minLength)) {
      result.addError({
        name: 'minLength',
        argument: schema.minLength,
        message: "does not meet minimum length of " + schema.minLength
      });
    }
    return result;
  };
  /**
  * Validates whether the instance value is at most of a certain length, when the instance value is a string.
  * @param instance
  * @param schema
  * @return {String|null}
  */
  $bfd17381112b94a0814e07dd5040defb$var$validators.maxLength = function validateMaxLength(instance, schema, options, ctx) {
    if (!this.types.string(instance)) return;
    var result = new $bfd17381112b94a0814e07dd5040defb$var$ValidatorResult(instance, schema, options, ctx);
    // TODO if this was already computed in "minLength", use that value instead of re-computing
    var hsp = instance.match(/[\uDC00-\uDFFF]/g);
    var length = instance.length - (hsp ? hsp.length : 0);
    if (!(length <= schema.maxLength)) {
      result.addError({
        name: 'maxLength',
        argument: schema.maxLength,
        message: "does not meet maximum length of " + schema.maxLength
      });
    }
    return result;
  };
  /**
  * Validates whether instance contains at least a minimum number of items, when the instance is an Array.
  * @param instance
  * @param schema
  * @return {String|null}
  */
  $bfd17381112b94a0814e07dd5040defb$var$validators.minItems = function validateMinItems(instance, schema, options, ctx) {
    if (!this.types.array(instance)) return;
    var result = new $bfd17381112b94a0814e07dd5040defb$var$ValidatorResult(instance, schema, options, ctx);
    if (!(instance.length >= schema.minItems)) {
      result.addError({
        name: 'minItems',
        argument: schema.minItems,
        message: "does not meet minimum length of " + schema.minItems
      });
    }
    return result;
  };
  /**
  * Validates whether instance contains no more than a maximum number of items, when the instance is an Array.
  * @param instance
  * @param schema
  * @return {String|null}
  */
  $bfd17381112b94a0814e07dd5040defb$var$validators.maxItems = function validateMaxItems(instance, schema, options, ctx) {
    if (!this.types.array(instance)) return;
    var result = new $bfd17381112b94a0814e07dd5040defb$var$ValidatorResult(instance, schema, options, ctx);
    if (!(instance.length <= schema.maxItems)) {
      result.addError({
        name: 'maxItems',
        argument: schema.maxItems,
        message: "does not meet maximum length of " + schema.maxItems
      });
    }
    return result;
  };
  /**
  * Deep compares arrays for duplicates
  * @param v
  * @param i
  * @param a
  * @private
  * @return {boolean}
  */
  function $bfd17381112b94a0814e07dd5040defb$var$testArrays(v, i, a) {
    var j, len = a.length;
    for ((j = i + 1, len); j < len; j++) {
      if ($ce4eec71ec4285d39f33d14254969864$export$deepCompareStrict(v, a[j])) {
        return false;
      }
    }
    return true;
  }
  /**
  * Validates whether there are no duplicates, when the instance is an Array.
  * @param instance
  * @return {String|null}
  */
  $bfd17381112b94a0814e07dd5040defb$var$validators.uniqueItems = function validateUniqueItems(instance, schema, options, ctx) {
    if (schema.uniqueItems !== true) return;
    if (!this.types.array(instance)) return;
    var result = new $bfd17381112b94a0814e07dd5040defb$var$ValidatorResult(instance, schema, options, ctx);
    if (!instance.every($bfd17381112b94a0814e07dd5040defb$var$testArrays)) {
      result.addError({
        name: 'uniqueItems',
        message: "contains duplicate item"
      });
    }
    return result;
  };
  /**
  * Validate for the presence of dependency properties, if the instance is an object.
  * @param instance
  * @param schema
  * @param options
  * @param ctx
  * @return {null|ValidatorResult}
  */
  $bfd17381112b94a0814e07dd5040defb$var$validators.dependencies = function validateDependencies(instance, schema, options, ctx) {
    if (!this.types.object(instance)) return;
    var result = new $bfd17381112b94a0814e07dd5040defb$var$ValidatorResult(instance, schema, options, ctx);
    for (var property in schema.dependencies) {
      if (instance[property] === undefined) {
        continue;
      }
      var dep = schema.dependencies[property];
      var childContext = ctx.makeChild(dep, property);
      if (typeof dep == 'string') {
        dep = [dep];
      }
      if (Array.isArray(dep)) {
        dep.forEach(function (prop) {
          if (instance[prop] === undefined) {
            result.addError({
              // FIXME there's two different "dependencies" errors here with slightly different outputs
              // Can we make these the same? Or should we create different error types?
              name: 'dependencies',
              argument: childContext.propertyPath,
              message: "property " + prop + " not found, required by " + childContext.propertyPath
            });
          }
        });
      } else {
        var res = this.validateSchema(instance, dep, options, childContext);
        if (result.instance !== res.instance) result.instance = res.instance;
        if (res && res.errors.length) {
          result.addError({
            name: 'dependencies',
            argument: childContext.propertyPath,
            message: "does not meet dependency required by " + childContext.propertyPath
          });
          result.importErrors(res);
        }
      }
    }
    return result;
  };
  /**
  * Validates whether the instance value is one of the enumerated values.
  *
  * @param instance
  * @param schema
  * @return {ValidatorResult|null}
  */
  $bfd17381112b94a0814e07dd5040defb$var$validators['enum'] = function validateEnum(instance, schema, options, ctx) {
    if (instance === undefined) {
      return null;
    }
    if (!Array.isArray(schema['enum'])) {
      throw new $bfd17381112b94a0814e07dd5040defb$var$SchemaError("enum expects an array", schema);
    }
    var result = new $bfd17381112b94a0814e07dd5040defb$var$ValidatorResult(instance, schema, options, ctx);
    if (!schema['enum'].some($ce4eec71ec4285d39f33d14254969864$export$deepCompareStrict.bind(null, instance))) {
      result.addError({
        name: 'enum',
        argument: schema['enum'],
        message: "is not one of enum values: " + schema['enum'].map(String).join(',')
      });
    }
    return result;
  };
  /**
  * Validates whether the instance exactly matches a given value
  *
  * @param instance
  * @param schema
  * @return {ValidatorResult|null}
  */
  $bfd17381112b94a0814e07dd5040defb$var$validators['const'] = function validateEnum(instance, schema, options, ctx) {
    if (instance === undefined) {
      return null;
    }
    var result = new $bfd17381112b94a0814e07dd5040defb$var$ValidatorResult(instance, schema, options, ctx);
    if (!$ce4eec71ec4285d39f33d14254969864$export$deepCompareStrict(schema['const'], instance)) {
      result.addError({
        name: 'const',
        argument: schema['const'],
        message: "does not exactly match expected constant: " + schema['const']
      });
    }
    return result;
  };
  /**
  * Validates whether the instance if of a prohibited type.
  * @param instance
  * @param schema
  * @param options
  * @param ctx
  * @return {null|ValidatorResult}
  */
  $bfd17381112b94a0814e07dd5040defb$var$validators.not = $bfd17381112b94a0814e07dd5040defb$var$validators.disallow = function validateNot(instance, schema, options, ctx) {
    var self = this;
    if (instance === undefined) return null;
    var result = new $bfd17381112b94a0814e07dd5040defb$var$ValidatorResult(instance, schema, options, ctx);
    var notTypes = schema.not || schema.disallow;
    if (!notTypes) return null;
    if (!Array.isArray(notTypes)) notTypes = [notTypes];
    notTypes.forEach(function (type) {
      if (self.testType(instance, schema, options, ctx, type)) {
        var id = type && (type.$id || type.id);
        var schemaId = id || type;
        result.addError({
          name: 'not',
          argument: schemaId,
          message: "is of prohibited type " + schemaId
        });
      }
    });
    return result;
  };
  $bfd17381112b94a0814e07dd5040defb$exports = $bfd17381112b94a0814e07dd5040defb$var$attribute;
  var $88344eb976b27020930887e01ad42def$export$SchemaScanResult = $88344eb976b27020930887e01ad42def$var$SchemaScanResult;
  function $88344eb976b27020930887e01ad42def$var$SchemaScanResult(found, ref) {
    this.id = found;
    this.ref = ref;
  }
  var $88344eb976b27020930887e01ad42def$export$scan = function scan(base, schema) {
    function scanSchema(baseuri, schema) {
      if (!schema || typeof schema != 'object') return;
      // Mark all referenced schemas so we can tell later which schemas are referred to, but never defined
      if (schema.$ref) {
        var resolvedUri = $42c0ab72f3b39275783aaa4babb143cb$export$resolve(baseuri, schema.$ref);
        ref[resolvedUri] = ref[resolvedUri] ? ref[resolvedUri] + 1 : 0;
        return;
      }
      var id = schema.$id || schema.id;
      var ourBase = id ? $42c0ab72f3b39275783aaa4babb143cb$export$resolve(baseuri, id) : baseuri;
      if (ourBase) {
        // If there's no fragment, append an empty one
        if (ourBase.indexOf('#') < 0) ourBase += '#';
        if (found[ourBase]) {
          if (!$ce4eec71ec4285d39f33d14254969864$export$deepCompareStrict(found[ourBase], schema)) {
            throw new Error('Schema <' + ourBase + '> already exists with different definition');
          }
          return found[ourBase];
        }
        found[ourBase] = schema;
        // strip trailing fragment
        if (ourBase[ourBase.length - 1] == '#') {
          found[ourBase.substring(0, ourBase.length - 1)] = schema;
        }
      }
      scanArray(ourBase + '/items', Array.isArray(schema.items) ? schema.items : [schema.items]);
      scanArray(ourBase + '/extends', Array.isArray(schema.extends) ? schema.extends : [schema.extends]);
      scanSchema(ourBase + '/additionalItems', schema.additionalItems);
      scanObject(ourBase + '/properties', schema.properties);
      scanSchema(ourBase + '/additionalProperties', schema.additionalProperties);
      scanObject(ourBase + '/definitions', schema.definitions);
      scanObject(ourBase + '/patternProperties', schema.patternProperties);
      scanObject(ourBase + '/dependencies', schema.dependencies);
      scanArray(ourBase + '/disallow', schema.disallow);
      scanArray(ourBase + '/allOf', schema.allOf);
      scanArray(ourBase + '/anyOf', schema.anyOf);
      scanArray(ourBase + '/oneOf', schema.oneOf);
      scanSchema(ourBase + '/not', schema.not);
    }
    function scanArray(baseuri, schemas) {
      if (!Array.isArray(schemas)) return;
      for (var i = 0; i < schemas.length; i++) {
        scanSchema(baseuri + '/' + i, schemas[i]);
      }
    }
    function scanObject(baseuri, schemas) {
      if (!schemas || typeof schemas != 'object') return;
      for (var p in schemas) {
        scanSchema(baseuri + '/' + p, schemas[p]);
      }
    }
    var found = {};
    var ref = {};
    scanSchema(base, schema);
    return new $88344eb976b27020930887e01ad42def$var$SchemaScanResult(found, ref);
  };
  var $9cdb8ac535d7173eb5acc47d93433e56$var$scanSchema = $88344eb976b27020930887e01ad42def$export$scan;
  var $9cdb8ac535d7173eb5acc47d93433e56$var$ValidatorResult = $ce4eec71ec4285d39f33d14254969864$export$ValidatorResult;
  var $9cdb8ac535d7173eb5acc47d93433e56$var$ValidatorResultError = $ce4eec71ec4285d39f33d14254969864$export$ValidatorResultError;
  var $9cdb8ac535d7173eb5acc47d93433e56$var$SchemaError = $ce4eec71ec4285d39f33d14254969864$export$SchemaError;
  var $9cdb8ac535d7173eb5acc47d93433e56$var$SchemaContext = $ce4eec71ec4285d39f33d14254969864$export$SchemaContext;
  // var anonymousBase = 'vnd.jsonschema:///';
  var $9cdb8ac535d7173eb5acc47d93433e56$var$anonymousBase = '/';
  /**
  * Creates a new Validator object
  * @name Validator
  * @constructor
  */
  var $9cdb8ac535d7173eb5acc47d93433e56$var$Validator = function Validator() {
    // Allow a validator instance to override global custom formats or to have their
    // own custom formats.
    this.customFormats = Object.create(Validator.prototype.customFormats);
    this.schemas = {};
    this.unresolvedRefs = [];
    // Use Object.create to make this extensible without Validator instances stepping on each other's toes.
    this.types = Object.create($9cdb8ac535d7173eb5acc47d93433e56$var$types);
    this.attributes = Object.create($bfd17381112b94a0814e07dd5040defb$exports.validators);
  };
  // Allow formats to be registered globally.
  $9cdb8ac535d7173eb5acc47d93433e56$var$Validator.prototype.customFormats = {};
  // Hint at the presence of a property
  $9cdb8ac535d7173eb5acc47d93433e56$var$Validator.prototype.schemas = null;
  $9cdb8ac535d7173eb5acc47d93433e56$var$Validator.prototype.types = null;
  $9cdb8ac535d7173eb5acc47d93433e56$var$Validator.prototype.attributes = null;
  $9cdb8ac535d7173eb5acc47d93433e56$var$Validator.prototype.unresolvedRefs = null;
  /**
  * Adds a schema with a certain urn to the Validator instance.
  * @param schema
  * @param urn
  * @return {Object}
  */
  $9cdb8ac535d7173eb5acc47d93433e56$var$Validator.prototype.addSchema = function addSchema(schema, base) {
    var self = this;
    if (!schema) {
      return null;
    }
    var scan = $9cdb8ac535d7173eb5acc47d93433e56$var$scanSchema(base || $9cdb8ac535d7173eb5acc47d93433e56$var$anonymousBase, schema);
    var ourUri = base || schema.$id || schema.id;
    for (var uri in scan.id) {
      this.schemas[uri] = scan.id[uri];
    }
    for (var uri in scan.ref) {
      // If this schema is already defined, it will be filtered out by the next step
      this.unresolvedRefs.push(uri);
    }
    // Remove newly defined schemas from unresolvedRefs
    this.unresolvedRefs = this.unresolvedRefs.filter(function (uri) {
      return typeof self.schemas[uri] === 'undefined';
    });
    return this.schemas[ourUri];
  };
  $9cdb8ac535d7173eb5acc47d93433e56$var$Validator.prototype.addSubSchemaArray = function addSubSchemaArray(baseuri, schemas) {
    if (!Array.isArray(schemas)) return;
    for (var i = 0; i < schemas.length; i++) {
      this.addSubSchema(baseuri, schemas[i]);
    }
  };
  $9cdb8ac535d7173eb5acc47d93433e56$var$Validator.prototype.addSubSchemaObject = function addSubSchemaArray(baseuri, schemas) {
    if (!schemas || typeof schemas != 'object') return;
    for (var p in schemas) {
      this.addSubSchema(baseuri, schemas[p]);
    }
  };
  /**
  * Sets all the schemas of the Validator instance.
  * @param schemas
  */
  $9cdb8ac535d7173eb5acc47d93433e56$var$Validator.prototype.setSchemas = function setSchemas(schemas) {
    this.schemas = schemas;
  };
  /**
  * Returns the schema of a certain urn
  * @param urn
  */
  $9cdb8ac535d7173eb5acc47d93433e56$var$Validator.prototype.getSchema = function getSchema(urn) {
    return this.schemas[urn];
  };
  /**
  * Validates instance against the provided schema
  * @param instance
  * @param schema
  * @param [options]
  * @param [ctx]
  * @return {Array}
  */
  $9cdb8ac535d7173eb5acc47d93433e56$var$Validator.prototype.validate = function validate(instance, schema, options, ctx) {
    if (typeof schema !== 'boolean' && typeof schema !== 'object' || schema === null) {
      throw new $9cdb8ac535d7173eb5acc47d93433e56$var$SchemaError('Expected `schema` to be an object or boolean');
    }
    if (!options) {
      options = {};
    }
    // This section indexes subschemas in the provided schema, so they don't need to be added with Validator#addSchema
    // This will work so long as the function at uri.resolve() will resolve a relative URI to a relative URI
    var id = schema.$id || schema.id;
    var base = $42c0ab72f3b39275783aaa4babb143cb$export$resolve(options.base || $9cdb8ac535d7173eb5acc47d93433e56$var$anonymousBase, id || '');
    if (!ctx) {
      ctx = new $9cdb8ac535d7173eb5acc47d93433e56$var$SchemaContext(schema, options, [], base, Object.create(this.schemas));
      if (!ctx.schemas[base]) {
        ctx.schemas[base] = schema;
      }
      var found = $9cdb8ac535d7173eb5acc47d93433e56$var$scanSchema(base, schema);
      for (var n in found.id) {
        var sch = found.id[n];
        ctx.schemas[n] = sch;
      }
    }
    if (options.required && instance === undefined) {
      var result = new $9cdb8ac535d7173eb5acc47d93433e56$var$ValidatorResult(instance, schema, options, ctx);
      result.addError('is required, but is undefined');
      return result;
    }
    var result = this.validateSchema(instance, schema, options, ctx);
    if (!result) {
      throw new Error('Result undefined');
    } else if (options.throwAll && result.errors.length) {
      throw new $9cdb8ac535d7173eb5acc47d93433e56$var$ValidatorResultError(result);
    }
    return result;
  };
  /**
  * @param Object schema
  * @return mixed schema uri or false
  */
  function $9cdb8ac535d7173eb5acc47d93433e56$var$shouldResolve(schema) {
    var ref = typeof schema === 'string' ? schema : schema.$ref;
    if (typeof ref == 'string') return ref;
    return false;
  }
  /**
  * Validates an instance against the schema (the actual work horse)
  * @param instance
  * @param schema
  * @param options
  * @param ctx
  * @private
  * @return {ValidatorResult}
  */
  $9cdb8ac535d7173eb5acc47d93433e56$var$Validator.prototype.validateSchema = function validateSchema(instance, schema, options, ctx) {
    var result = new $9cdb8ac535d7173eb5acc47d93433e56$var$ValidatorResult(instance, schema, options, ctx);
    // Support for the true/false schemas
    if (typeof schema === 'boolean') {
      if (schema === true) {
        // `true` is always valid
        schema = {};
      } else if (schema === false) {
        // `false` is always invalid
        schema = {
          type: []
        };
      }
    } else if (!schema) {
      // This might be a string
      throw new Error("schema is undefined");
    }
    if (schema['extends']) {
      if (Array.isArray(schema['extends'])) {
        var schemaobj = {
          schema: schema,
          ctx: ctx
        };
        schema['extends'].forEach(this.schemaTraverser.bind(this, schemaobj));
        schema = schemaobj.schema;
        schemaobj.schema = null;
        schemaobj.ctx = null;
        schemaobj = null;
      } else {
        schema = $ce4eec71ec4285d39f33d14254969864$export$deepMerge(schema, this.superResolve(schema['extends'], ctx));
      }
    }
    // If passed a string argument, load that schema URI
    var switchSchema = $9cdb8ac535d7173eb5acc47d93433e56$var$shouldResolve(schema);
    if (switchSchema) {
      var resolved = this.resolve(schema, switchSchema, ctx);
      var subctx = new $9cdb8ac535d7173eb5acc47d93433e56$var$SchemaContext(resolved.subschema, options, ctx.path, resolved.switchSchema, ctx.schemas);
      return this.validateSchema(instance, resolved.subschema, options, subctx);
    }
    var skipAttributes = options && options.skipAttributes || [];
    // Validate each schema attribute against the instance
    for (var key in schema) {
      if (!$bfd17381112b94a0814e07dd5040defb$exports.ignoreProperties[key] && skipAttributes.indexOf(key) < 0) {
        var validatorErr = null;
        var validator = this.attributes[key];
        if (validator) {
          validatorErr = validator.call(this, instance, schema, options, ctx);
        } else if (options.allowUnknownAttributes === false) {
          // This represents an error with the schema itself, not an invalid instance
          throw new $9cdb8ac535d7173eb5acc47d93433e56$var$SchemaError("Unsupported attribute: " + key, schema);
        }
        if (validatorErr) {
          result.importErrors(validatorErr);
        }
      }
    }
    if (typeof options.rewrite == 'function') {
      var value = options.rewrite.call(this, instance, schema, options, ctx);
      result.instance = value;
    }
    return result;
  };
  /**
  * @private
  * @param Object schema
  * @param SchemaContext ctx
  * @returns Object schema or resolved schema
  */
  $9cdb8ac535d7173eb5acc47d93433e56$var$Validator.prototype.schemaTraverser = function schemaTraverser(schemaobj, s) {
    schemaobj.schema = $ce4eec71ec4285d39f33d14254969864$export$deepMerge(schemaobj.schema, this.superResolve(s, schemaobj.ctx));
  };
  /**
  * @private
  * @param Object schema
  * @param SchemaContext ctx
  * @returns Object schema or resolved schema
  */
  $9cdb8ac535d7173eb5acc47d93433e56$var$Validator.prototype.superResolve = function superResolve(schema, ctx) {
    var ref = $9cdb8ac535d7173eb5acc47d93433e56$var$shouldResolve(schema);
    if (ref) {
      return this.resolve(schema, ref, ctx).subschema;
    }
    return schema;
  };
  /**
  * @private
  * @param Object schema
  * @param Object switchSchema
  * @param SchemaContext ctx
  * @return Object resolved schemas {subschema:String, switchSchema: String}
  * @throws SchemaError
  */
  $9cdb8ac535d7173eb5acc47d93433e56$var$Validator.prototype.resolve = function resolve(schema, switchSchema, ctx) {
    switchSchema = ctx.resolve(switchSchema);
    // First see if the schema exists under the provided URI
    if (ctx.schemas[switchSchema]) {
      return {
        subschema: ctx.schemas[switchSchema],
        switchSchema: switchSchema
      };
    }
    // Else try walking the property pointer
    var parsed = $42c0ab72f3b39275783aaa4babb143cb$export$parse(switchSchema);
    var fragment = parsed && parsed.hash;
    var document = fragment && fragment.length && switchSchema.substr(0, switchSchema.length - fragment.length);
    if (!document || !ctx.schemas[document]) {
      throw new $9cdb8ac535d7173eb5acc47d93433e56$var$SchemaError("no such schema <" + switchSchema + ">", schema);
    }
    var subschema = $ce4eec71ec4285d39f33d14254969864$export$objectGetPath(ctx.schemas[document], fragment.substr(1));
    if (subschema === undefined) {
      throw new $9cdb8ac535d7173eb5acc47d93433e56$var$SchemaError("no such schema " + fragment + " located in <" + document + ">", schema);
    }
    return {
      subschema: subschema,
      switchSchema: switchSchema
    };
  };
  /**
  * Tests whether the instance if of a certain type.
  * @private
  * @param instance
  * @param schema
  * @param options
  * @param ctx
  * @param type
  * @return {boolean}
  */
  $9cdb8ac535d7173eb5acc47d93433e56$var$Validator.prototype.testType = function validateType(instance, schema, options, ctx, type) {
    if (type === undefined) {
      return;
    } else if (type === null) {
      throw new $9cdb8ac535d7173eb5acc47d93433e56$var$SchemaError('Unexpected null in "type" keyword');
    }
    if (typeof this.types[type] == 'function') {
      return this.types[type].call(this, instance);
    }
    if (type && typeof type == 'object') {
      var res = this.validateSchema(instance, type, options, ctx);
      return res === undefined || !(res && res.errors.length);
    }
    // Undefined or properties not on the list are acceptable, same as not being defined
    return true;
  };
  var $9cdb8ac535d7173eb5acc47d93433e56$var$types = $9cdb8ac535d7173eb5acc47d93433e56$var$Validator.prototype.types = {};
  $9cdb8ac535d7173eb5acc47d93433e56$var$types.string = function testString(instance) {
    return typeof instance == 'string';
  };
  $9cdb8ac535d7173eb5acc47d93433e56$var$types.number = function testNumber(instance) {
    // isFinite returns false for NaN, Infinity, and -Infinity
    return typeof instance == 'number' && isFinite(instance);
  };
  $9cdb8ac535d7173eb5acc47d93433e56$var$types.integer = function testInteger(instance) {
    return typeof instance == 'number' && instance % 1 === 0;
  };
  $9cdb8ac535d7173eb5acc47d93433e56$var$types.boolean = function testBoolean(instance) {
    return typeof instance == 'boolean';
  };
  $9cdb8ac535d7173eb5acc47d93433e56$var$types.array = function testArray(instance) {
    return Array.isArray(instance);
  };
  $9cdb8ac535d7173eb5acc47d93433e56$var$types['null'] = function testNull(instance) {
    return instance === null;
  };
  $9cdb8ac535d7173eb5acc47d93433e56$var$types.date = function testDate(instance) {
    return instance instanceof Date;
  };
  $9cdb8ac535d7173eb5acc47d93433e56$var$types.any = function testAny(instance) {
    return true;
  };
  $9cdb8ac535d7173eb5acc47d93433e56$var$types.object = function testObject(instance) {
    // TODO: fix this - see #15
    return instance && typeof instance === 'object' && !Array.isArray(instance) && !(instance instanceof Date);
  };
  $9cdb8ac535d7173eb5acc47d93433e56$exports = $9cdb8ac535d7173eb5acc47d93433e56$var$Validator;
  var $0cb2a726714ab9e25f66a914aaf55a06$var$Validator = $0cb2a726714ab9e25f66a914aaf55a06$export$Validator = $9cdb8ac535d7173eb5acc47d93433e56$exports;
  var $0cb2a726714ab9e25f66a914aaf55a06$export$ValidatorResult = $ce4eec71ec4285d39f33d14254969864$export$ValidatorResult;
  var $0cb2a726714ab9e25f66a914aaf55a06$export$ValidatorResultError = $ce4eec71ec4285d39f33d14254969864$export$ValidatorResultError;
  var $0cb2a726714ab9e25f66a914aaf55a06$export$ValidationError = $ce4eec71ec4285d39f33d14254969864$export$ValidationError;
  var $0cb2a726714ab9e25f66a914aaf55a06$export$SchemaError = $ce4eec71ec4285d39f33d14254969864$export$SchemaError;
  var $0cb2a726714ab9e25f66a914aaf55a06$export$SchemaScanResult = $88344eb976b27020930887e01ad42def$export$SchemaScanResult;
  var $0cb2a726714ab9e25f66a914aaf55a06$export$scan = $88344eb976b27020930887e01ad42def$export$scan;
  const $c8f06cc078f97a945737a566c0b1ac42$export$visualization = {
    schema: "https://json-schema.org/draft/2020-12/schema",
    id: "/visualization",
    title: "Visualization",
    description: "A webgl visualization",
    type: "object",
    required: ["tracks"],
    properties: {
      tracks: {
        type: "array",
        items: {
          $ref: "/track"
        }
      },
      background: {
        type: ["string", "number"]
      },
      defaultData: {
        type: ["string", "array"],
        items: {
          type: "string",
          pattern: ","
        }
      }
    },
    allOf: [{
      // Require tracks to have data defined if there is no default data
      if: {
        not: {
          required: ["defaultData"]
        }
      },
      then: {
        properties: {
          tracks: {
            items: {
              required: ["data"]
            }
          }
        }
      },
      else: {}
    }]
  };
  const $c8f06cc078f97a945737a566c0b1ac42$export$track = {
    schema: "https://json-schema.org/draft/2020-12/schema",
    id: "/track",
    title: "Track",
    description: "A track to visualize",
    type: "object",
    required: ["mark", "x", "y"],
    properties: {
      data: {
        type: ["string", "array"],
        items: {
          type: "string",
          pattern: ","
        }
      },
      mark: {
        enum: ["point", "line", "area", "rect", "tick"]
      },
      tooltips: {
        type: "number",
        minimum: 0,
        maximum: 1
      },
      x: {
        type: "object",
        properties: {
          scale: {
            enum: ["linear", "log", "sqrt"]
          },
          axis: {
            enum: ["bottom", "top"]
          }
        },
        allOf: [{
          $ref: "/channel"
        }]
      },
      y: {
        type: "object",
        properties: {
          scale: {
            enum: ["linear", "log", "sqrt"]
          },
          axis: {
            enum: ["left", "right"]
          }
        },
        allOf: [{
          $ref: "/channel"
        }]
      },
      color: {
        type: "object",
        properties: {
          colorScheme: {
            type: "string"
          }
        },
        allOf: [{
          $ref: "/channel"
        }]
      },
      size: {
        type: "object",
        properties: {
          maxSize: {
            type: "number"
          },
          minSize: {
            type: "number"
          },
          value: {
            type: "number"
          }
        },
        allOf: [{
          $ref: "/channel"
        }]
      },
      width: {
        type: "object",
        properties: {
          maxWidth: {
            type: "number"
          },
          minWidth: {
            type: "number"
          },
          value: {
            type: "number"
          }
        },
        allOf: [{
          $ref: "/channel"
        }]
      },
      height: {
        type: "object",
        properties: {
          maxHeight: {
            type: "number"
          },
          minHeight: {
            type: "number"
          },
          value: {
            type: "number"
          }
        },
        allOf: [{
          $ref: "/channel"
        }]
      },
      opacity: {
        type: "object",
        properties: {
          minOpacity: {
            type: "number",
            minimum: 0,
            exclusiveMaximum: 1
          },
          value: {
            type: "number"
          }
        },
        allOf: [{
          $ref: "/channel"
        }]
      },
      shape: {
        type: "object",
        properties: {
          value: {
            enum: ["dot", "circle", "diamond", "triangle"]
          }
        },
        allOf: [{
          $ref: "/channel"
        }]
      }
    }
  };
  const $c8f06cc078f97a945737a566c0b1ac42$export$channel = {
    schema: "https://json-schema.org/draft/2020-12/schema",
    id: "/channel",
    title: "Channel",
    description: "A channel of a visualization",
    type: "object",
    properties: {
      type: {
        enum: ["quantitative", "categorical", "genomic"]
      },
      attribute: {
        type: "string"
      },
      value: {
        type: ["string", "number", "boolean"]
      },
      domain: {
        type: "array",
        items: [{
          type: "number"
        }, {
          type: "number"
        }]
      },
      cardinality: {
        type: "integer"
      }
    },
    anyOf: [{
      if: {
        properties: {
          value: {
            type: "null"
          }
        }
      },
      then: {
        // value is not defined, therefore an attribute is required
        required: ["attribute"],
        oneOf: [{
          properties: {
            type: {
              const: "quantitative"
            }
          },
          required: ["domain"],
          not: {
            required: ["cardinality", "value"]
          }
        }, {
          properties: {
            type: {
              const: "categorical"
            }
          },
          required: ["cardinality"],
          not: {
            required: ["domain", "value"]
          }
        }]
      },
      else: {
        // value is defined, cannot coexist with other base attributes
        allOf: [{
          not: {
            required: ["attribute"]
          }
        }, {
          not: {
            required: ["type"]
          }
        }, {
          not: {
            required: ["domain"]
          }
        }, {
          not: {
            required: ["cardinality"]
          }
        }]
      }
    }]
  };
  const $c8f06cc078f97a945737a566c0b1ac42$var$v = new $0cb2a726714ab9e25f66a914aaf55a06$export$Validator();
  $c8f06cc078f97a945737a566c0b1ac42$var$v.addSchema($c8f06cc078f97a945737a566c0b1ac42$export$channel, "/channel");
  $c8f06cc078f97a945737a566c0b1ac42$var$v.addSchema($c8f06cc078f97a945737a566c0b1ac42$export$track, "/track");
  const $c8f06cc078f97a945737a566c0b1ac42$export$default = json => {
    const validation = $c8f06cc078f97a945737a566c0b1ac42$var$v.validate(json, $c8f06cc078f97a945737a566c0b1ac42$export$visualization);
    if (!validation.valid) {
      console.error(validation.errors);
    }
    return validation.valid;
  };
  class $b24d98818d6efd81d9f858dfc1cbed2a$export$default {
    POSSIBLE_MOUSE_READER_OPTIONS = Object.freeze(["lockedX", "lockedY", "tool", "viewport", "currentXRange", "currentYRange"]);
    /**
    * A class meant to display a visualization based off a given schema using webgl.
    *
    * @param {HTMLElement} container <div> or other container element meant to contain the scatterplot and its components
    */
    constructor(container) {
      this.container = container;
      this.mouseReader = new $ea9fc8a1b0a7e0be7497639e5ed20241$export$default(document.createElement("div"), this);
      this.parent = document.createElement("div");
      this.parent.style.position = "relative";
      this.parent.style.width = "100%";
      this.parent.style.height = "100%";
      this.canvas = document.createElement("canvas");
    }
    setCanvasSize(width, height) {
      this.webglWorker.postMessage({
        type: "resize",
        width,
        height
      });
      this.mouseReader.width = width;
      this.mouseReader.height = height;
      this.sendDrawerState(this.mouseReader.getViewport());
    }
    addToDom() {
      this.container.appendChild(this.parent);
      this.width = this.parent.clientWidth;
      this.height = this.parent.clientHeight;
      this.canvas.width = this.width;
      this.canvas.height = this.height;
      this.canvas.style.position = "absolute";
      this.initFpsmeter();
      this.parent.appendChild(this.canvas);
      this.parent.appendChild(this.mouseReader.element);
      const offscreenCanvas = this.canvas.transferControlToOffscreen();
      this.webglWorker = new Worker($e2a27ccf5a10c3f4307fd317dc99f3cf$init());
      this.webglWorker.postMessage({
        type: "init",
        canvas: offscreenCanvas
      }, [offscreenCanvas]);
      // Allow OffScreenWebGLDrawer to tick FPS meter
      this.webglWorker.onmessage = e => {
        if (e.data.type === "tick") {
          this.meter.tick();
        }
      };
      this.dataWorkerStream = [];
      this.dataWorker = new Worker($19de698c7ff95be5ef3defeb95d369f8$init());
      this.dataWorker.onmessage = message => {
        this.dataWorkerStream.push(message);
        console.log(this.dataWorkerStream);
      };
      // Needs to be called at the end of addToDOM so mouseReader has correct dimensions to work with
      this.mouseReader.init();
    }
    setViewOptions(options) {
      for (const option of this.POSSIBLE_MOUSE_READER_OPTIONS) {
        if ((option in options)) {
          this.mouseReader[option] = options[option];
        }
      }
    }
    setSchema(schema) {
      if (!$c8f06cc078f97a945737a566c0b1ac42$export$default(schema)) {
        return;
      }
      this.mouseReader.viewport = $794bbb298c1fc0cc3157526701549b8c$export$schemaViewport(schema);
      this.sendDrawerState(this.mouseReader.getViewport());
      this.webglWorker.postMessage({
        type: "schema",
        schema
      });
      this.dataWorker.postMessage({
        type: "init",
        schema
      });
    }
    /**
    * Send the viewport to the drawer.
    *
    * @param {Object} viewport likely from this.mouseReader.getViewport()
    */
    sendDrawerState(viewport) {
      this.webglWorker.postMessage({
        type: "viewport",
        ...viewport
      });
    }
    /**
    * Calls render in the drawer.
    */
    forceDrawerRender() {
      this.webglWorker.postMessage({
        type: "render",
        ...this.mouseReader.getViewport()
      });
    }
    buildDataProcessor(data, options) {
      this.dataWorker.postMessage({
        type: "init",
        data,
        options
      });
    }
    /**
    * Utility method to have data worker call {@link DataProcessor#selectBox} or
    * {@link DataProcessor#selectLasso}.
    *
    * Does not return, posts result to this.dataWorkerStream.
    * @param {Array} points array in format [x1,y1,x2,y2,x3,y3,...]
    */
    selectPoints(points) {
      if (points.length === 4) {
        this.dataWorker.postMessage({
          type: "selectBox",
          points
        });
      } else if (points.length >= 6) {
        this.dataWorker.postMessage({
          type: "selectLasso",
          points
        });
      }
    }
    /**
    * Utility method to have data worker call {@link DataProcessor#getClosestPoint}.
    * Does not return, posts result to this.dataWorkerStream.
    *
    * @param {Array} point to get closest point to
    */
    getClosestPoint(point) {
      this.dataWorker.postMessage({
        type: "getClosestPoint",
        point
      });
    }
    /**
    * Initializes the FPS meter.
    */
    initFpsmeter() {
      this.meter = new window.FPSMeter(document.querySelector("footer"), {
        graph: 1,
        heat: 1,
        theme: "light",
        history: 25,
        top: "-20px",
        left: `${this.width}px`,
        transform: "translateX(-100%)"
      });
    }
  }
  const $61d0faa07b02e6c31f5661014f46b7d4$export$default = $a5a79905d7f29b6c9078769d5e01bfa0$exports.configureStore({
    reducer: $139b79e5ff209336f4025f9472954faf$export$default
  });
  let $61d0faa07b02e6c31f5661014f46b7d4$var$previousValues = {};
  /**
  * This utility method is meant to check if a part of the state in the global
  * store has changed since it was last called. It is useful in a store subscription
  * for updating components. Typically this would be done automatically by
  * react-redux or something else, but we do it ourselves. The main purpose is to
  * keep the redux pattern of only calling dispatch throughout the application,
  * and calling getState inside subscriptions only.
  *
  * @param {String} key of the state from the store
  * @returns null if value at key has not changed, the new value otherwise
  */
  const $61d0faa07b02e6c31f5661014f46b7d4$export$getIfChanged = key => {
    const currValue = $61d0faa07b02e6c31f5661014f46b7d4$export$default.getState()[key];
    if ((key in $61d0faa07b02e6c31f5661014f46b7d4$var$previousValues)) {
      if ($61d0faa07b02e6c31f5661014f46b7d4$var$previousValues[key] === currValue) {
        return null;
      } else {
        $61d0faa07b02e6c31f5661014f46b7d4$var$previousValues[key] = currValue;
      }
      return $61d0faa07b02e6c31f5661014f46b7d4$export$default.getState()[key];
    } else {
      $61d0faa07b02e6c31f5661014f46b7d4$var$previousValues[key] = currValue;
    }
  };
  class $a10a209bf484f978a78f5f9c319d2eaf$var$App {
    /*
    The App class is meant to emulate an app that may use the webgl visualization as a component
    */
    constructor() {
      const container = document.querySelector(".content");
      this.visualization = new $b24d98818d6efd81d9f858dfc1cbed2a$export$default(container);
      this.visualization.addToDom();
      this.store = $61d0faa07b02e6c31f5661014f46b7d4$export$default;
      this.store.subscribe(this.subscription.bind(this));
      const toolbar = new $9e70f4d5b36c39388b117fee7d542725$export$default(this.store.dispatch);
      toolbar.init();
      document.getElementById("refresh-schema").onclick = this.onSchemaSubmit.bind(this);
      window.addEventListener("resize", this.onWindowResize.bind(this));
    }
    /**
    * The webgl visualization components are meant to leave application
    * state up to the developers, and this subscription is an example of
    * using redux to update the plot.
    */
    subscription() {
      const currState = this.store.getState();
      const schema = $61d0faa07b02e6c31f5661014f46b7d4$export$getIfChanged("schema");
      if (schema) {
        document.getElementById("schema-editor").value = schema;
      }
      this.visualization.setViewOptions({
        ...currState
      });
    }
    onSchemaSubmit() {
      const schemaAsString = document.getElementById("schema-editor").value;
      const schema = JSON.parse(schemaAsString);
      this.visualization.setSchema(schema);
    }
    onWindowResize() {
      this.visualization.setCanvasSize(this.visualization.parent.clientWidth, this.visualization.parent.clientHeight);
    }
  }
  document.addEventListener("DOMContentLoaded", () => {
    window.app = new $a10a209bf484f978a78f5f9c319d2eaf$var$App();
  });
})();

//# sourceMappingURL=index.7b80ae4b.js.map