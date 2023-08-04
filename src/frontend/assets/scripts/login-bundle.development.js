var AdminBro = (function (React, reactRedux, reactRouterDom, reactI18next, i18n, styled, reactRouter, designSystem, axios, flat, redux) {
	'use strict';

	function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

	var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
	var i18n__default = /*#__PURE__*/_interopDefaultLegacy(i18n);
	var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);
	var axios__default = /*#__PURE__*/_interopDefaultLegacy(axios);

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function getDefaultExportFromCjs (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	function createCommonjsModule(fn, basedir, module) {
		return module = {
			path: basedir,
			exports: {},
			require: function (path, base) {
				return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
			}
		}, fn(module, module.exports), module.exports;
	}

	function commonjsRequire () {
		throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
	}

	var runtime_1 = createCommonjsModule(function (module) {
	/**
	 * Copyright (c) 2014-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	var runtime = (function (exports) {

	  var Op = Object.prototype;
	  var hasOwn = Op.hasOwnProperty;
	  var undefined$1; // More compressible than void 0.
	  var $Symbol = typeof Symbol === "function" ? Symbol : {};
	  var iteratorSymbol = $Symbol.iterator || "@@iterator";
	  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
	  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

	  function define(obj, key, value) {
	    Object.defineProperty(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	    return obj[key];
	  }
	  try {
	    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
	    define({}, "");
	  } catch (err) {
	    define = function(obj, key, value) {
	      return obj[key] = value;
	    };
	  }

	  function wrap(innerFn, outerFn, self, tryLocsList) {
	    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
	    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
	    var generator = Object.create(protoGenerator.prototype);
	    var context = new Context(tryLocsList || []);

	    // The ._invoke method unifies the implementations of the .next,
	    // .throw, and .return methods.
	    generator._invoke = makeInvokeMethod(innerFn, self, context);

	    return generator;
	  }
	  exports.wrap = wrap;

	  // Try/catch helper to minimize deoptimizations. Returns a completion
	  // record like context.tryEntries[i].completion. This interface could
	  // have been (and was previously) designed to take a closure to be
	  // invoked without arguments, but in all the cases we care about we
	  // already have an existing method we want to call, so there's no need
	  // to create a new function object. We can even get away with assuming
	  // the method takes exactly one argument, since that happens to be true
	  // in every case, so we don't have to touch the arguments object. The
	  // only additional allocation required is the completion record, which
	  // has a stable shape and so hopefully should be cheap to allocate.
	  function tryCatch(fn, obj, arg) {
	    try {
	      return { type: "normal", arg: fn.call(obj, arg) };
	    } catch (err) {
	      return { type: "throw", arg: err };
	    }
	  }

	  var GenStateSuspendedStart = "suspendedStart";
	  var GenStateSuspendedYield = "suspendedYield";
	  var GenStateExecuting = "executing";
	  var GenStateCompleted = "completed";

	  // Returning this object from the innerFn has the same effect as
	  // breaking out of the dispatch switch statement.
	  var ContinueSentinel = {};

	  // Dummy constructor functions that we use as the .constructor and
	  // .constructor.prototype properties for functions that return Generator
	  // objects. For full spec compliance, you may wish to configure your
	  // minifier not to mangle the names of these two functions.
	  function Generator() {}
	  function GeneratorFunction() {}
	  function GeneratorFunctionPrototype() {}

	  // This is a polyfill for %IteratorPrototype% for environments that
	  // don't natively support it.
	  var IteratorPrototype = {};
	  IteratorPrototype[iteratorSymbol] = function () {
	    return this;
	  };

	  var getProto = Object.getPrototypeOf;
	  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
	  if (NativeIteratorPrototype &&
	      NativeIteratorPrototype !== Op &&
	      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
	    // This environment has a native %IteratorPrototype%; use it instead
	    // of the polyfill.
	    IteratorPrototype = NativeIteratorPrototype;
	  }

	  var Gp = GeneratorFunctionPrototype.prototype =
	    Generator.prototype = Object.create(IteratorPrototype);
	  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
	  GeneratorFunctionPrototype.constructor = GeneratorFunction;
	  GeneratorFunction.displayName = define(
	    GeneratorFunctionPrototype,
	    toStringTagSymbol,
	    "GeneratorFunction"
	  );

	  // Helper for defining the .next, .throw, and .return methods of the
	  // Iterator interface in terms of a single ._invoke method.
	  function defineIteratorMethods(prototype) {
	    ["next", "throw", "return"].forEach(function(method) {
	      define(prototype, method, function(arg) {
	        return this._invoke(method, arg);
	      });
	    });
	  }

	  exports.isGeneratorFunction = function(genFun) {
	    var ctor = typeof genFun === "function" && genFun.constructor;
	    return ctor
	      ? ctor === GeneratorFunction ||
	        // For the native GeneratorFunction constructor, the best we can
	        // do is to check its .name property.
	        (ctor.displayName || ctor.name) === "GeneratorFunction"
	      : false;
	  };

	  exports.mark = function(genFun) {
	    if (Object.setPrototypeOf) {
	      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
	    } else {
	      genFun.__proto__ = GeneratorFunctionPrototype;
	      define(genFun, toStringTagSymbol, "GeneratorFunction");
	    }
	    genFun.prototype = Object.create(Gp);
	    return genFun;
	  };

	  // Within the body of any async function, `await x` is transformed to
	  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
	  // `hasOwn.call(value, "__await")` to determine if the yielded value is
	  // meant to be awaited.
	  exports.awrap = function(arg) {
	    return { __await: arg };
	  };

	  function AsyncIterator(generator, PromiseImpl) {
	    function invoke(method, arg, resolve, reject) {
	      var record = tryCatch(generator[method], generator, arg);
	      if (record.type === "throw") {
	        reject(record.arg);
	      } else {
	        var result = record.arg;
	        var value = result.value;
	        if (value &&
	            typeof value === "object" &&
	            hasOwn.call(value, "__await")) {
	          return PromiseImpl.resolve(value.__await).then(function(value) {
	            invoke("next", value, resolve, reject);
	          }, function(err) {
	            invoke("throw", err, resolve, reject);
	          });
	        }

	        return PromiseImpl.resolve(value).then(function(unwrapped) {
	          // When a yielded Promise is resolved, its final value becomes
	          // the .value of the Promise<{value,done}> result for the
	          // current iteration.
	          result.value = unwrapped;
	          resolve(result);
	        }, function(error) {
	          // If a rejected Promise was yielded, throw the rejection back
	          // into the async generator function so it can be handled there.
	          return invoke("throw", error, resolve, reject);
	        });
	      }
	    }

	    var previousPromise;

	    function enqueue(method, arg) {
	      function callInvokeWithMethodAndArg() {
	        return new PromiseImpl(function(resolve, reject) {
	          invoke(method, arg, resolve, reject);
	        });
	      }

	      return previousPromise =
	        // If enqueue has been called before, then we want to wait until
	        // all previous Promises have been resolved before calling invoke,
	        // so that results are always delivered in the correct order. If
	        // enqueue has not been called before, then it is important to
	        // call invoke immediately, without waiting on a callback to fire,
	        // so that the async generator function has the opportunity to do
	        // any necessary setup in a predictable way. This predictability
	        // is why the Promise constructor synchronously invokes its
	        // executor callback, and why async functions synchronously
	        // execute code before the first await. Since we implement simple
	        // async functions in terms of async generators, it is especially
	        // important to get this right, even though it requires care.
	        previousPromise ? previousPromise.then(
	          callInvokeWithMethodAndArg,
	          // Avoid propagating failures to Promises returned by later
	          // invocations of the iterator.
	          callInvokeWithMethodAndArg
	        ) : callInvokeWithMethodAndArg();
	    }

	    // Define the unified helper method that is used to implement .next,
	    // .throw, and .return (see defineIteratorMethods).
	    this._invoke = enqueue;
	  }

	  defineIteratorMethods(AsyncIterator.prototype);
	  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
	    return this;
	  };
	  exports.AsyncIterator = AsyncIterator;

	  // Note that simple async functions are implemented on top of
	  // AsyncIterator objects; they just return a Promise for the value of
	  // the final result produced by the iterator.
	  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
	    if (PromiseImpl === void 0) PromiseImpl = Promise;

	    var iter = new AsyncIterator(
	      wrap(innerFn, outerFn, self, tryLocsList),
	      PromiseImpl
	    );

	    return exports.isGeneratorFunction(outerFn)
	      ? iter // If outerFn is a generator, return the full iterator.
	      : iter.next().then(function(result) {
	          return result.done ? result.value : iter.next();
	        });
	  };

	  function makeInvokeMethod(innerFn, self, context) {
	    var state = GenStateSuspendedStart;

	    return function invoke(method, arg) {
	      if (state === GenStateExecuting) {
	        throw new Error("Generator is already running");
	      }

	      if (state === GenStateCompleted) {
	        if (method === "throw") {
	          throw arg;
	        }

	        // Be forgiving, per 25.3.3.3.3 of the spec:
	        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
	        return doneResult();
	      }

	      context.method = method;
	      context.arg = arg;

	      while (true) {
	        var delegate = context.delegate;
	        if (delegate) {
	          var delegateResult = maybeInvokeDelegate(delegate, context);
	          if (delegateResult) {
	            if (delegateResult === ContinueSentinel) continue;
	            return delegateResult;
	          }
	        }

	        if (context.method === "next") {
	          // Setting context._sent for legacy support of Babel's
	          // function.sent implementation.
	          context.sent = context._sent = context.arg;

	        } else if (context.method === "throw") {
	          if (state === GenStateSuspendedStart) {
	            state = GenStateCompleted;
	            throw context.arg;
	          }

	          context.dispatchException(context.arg);

	        } else if (context.method === "return") {
	          context.abrupt("return", context.arg);
	        }

	        state = GenStateExecuting;

	        var record = tryCatch(innerFn, self, context);
	        if (record.type === "normal") {
	          // If an exception is thrown from innerFn, we leave state ===
	          // GenStateExecuting and loop back for another invocation.
	          state = context.done
	            ? GenStateCompleted
	            : GenStateSuspendedYield;

	          if (record.arg === ContinueSentinel) {
	            continue;
	          }

	          return {
	            value: record.arg,
	            done: context.done
	          };

	        } else if (record.type === "throw") {
	          state = GenStateCompleted;
	          // Dispatch the exception by looping back around to the
	          // context.dispatchException(context.arg) call above.
	          context.method = "throw";
	          context.arg = record.arg;
	        }
	      }
	    };
	  }

	  // Call delegate.iterator[context.method](context.arg) and handle the
	  // result, either by returning a { value, done } result from the
	  // delegate iterator, or by modifying context.method and context.arg,
	  // setting context.delegate to null, and returning the ContinueSentinel.
	  function maybeInvokeDelegate(delegate, context) {
	    var method = delegate.iterator[context.method];
	    if (method === undefined$1) {
	      // A .throw or .return when the delegate iterator has no .throw
	      // method always terminates the yield* loop.
	      context.delegate = null;

	      if (context.method === "throw") {
	        // Note: ["return"] must be used for ES3 parsing compatibility.
	        if (delegate.iterator["return"]) {
	          // If the delegate iterator has a return method, give it a
	          // chance to clean up.
	          context.method = "return";
	          context.arg = undefined$1;
	          maybeInvokeDelegate(delegate, context);

	          if (context.method === "throw") {
	            // If maybeInvokeDelegate(context) changed context.method from
	            // "return" to "throw", let that override the TypeError below.
	            return ContinueSentinel;
	          }
	        }

	        context.method = "throw";
	        context.arg = new TypeError(
	          "The iterator does not provide a 'throw' method");
	      }

	      return ContinueSentinel;
	    }

	    var record = tryCatch(method, delegate.iterator, context.arg);

	    if (record.type === "throw") {
	      context.method = "throw";
	      context.arg = record.arg;
	      context.delegate = null;
	      return ContinueSentinel;
	    }

	    var info = record.arg;

	    if (! info) {
	      context.method = "throw";
	      context.arg = new TypeError("iterator result is not an object");
	      context.delegate = null;
	      return ContinueSentinel;
	    }

	    if (info.done) {
	      // Assign the result of the finished delegate to the temporary
	      // variable specified by delegate.resultName (see delegateYield).
	      context[delegate.resultName] = info.value;

	      // Resume execution at the desired location (see delegateYield).
	      context.next = delegate.nextLoc;

	      // If context.method was "throw" but the delegate handled the
	      // exception, let the outer generator proceed normally. If
	      // context.method was "next", forget context.arg since it has been
	      // "consumed" by the delegate iterator. If context.method was
	      // "return", allow the original .return call to continue in the
	      // outer generator.
	      if (context.method !== "return") {
	        context.method = "next";
	        context.arg = undefined$1;
	      }

	    } else {
	      // Re-yield the result returned by the delegate method.
	      return info;
	    }

	    // The delegate iterator is finished, so forget it and continue with
	    // the outer generator.
	    context.delegate = null;
	    return ContinueSentinel;
	  }

	  // Define Generator.prototype.{next,throw,return} in terms of the
	  // unified ._invoke helper method.
	  defineIteratorMethods(Gp);

	  define(Gp, toStringTagSymbol, "Generator");

	  // A Generator should always return itself as the iterator object when the
	  // @@iterator function is called on it. Some browsers' implementations of the
	  // iterator prototype chain incorrectly implement this, causing the Generator
	  // object to not be returned from this call. This ensures that doesn't happen.
	  // See https://github.com/facebook/regenerator/issues/274 for more details.
	  Gp[iteratorSymbol] = function() {
	    return this;
	  };

	  Gp.toString = function() {
	    return "[object Generator]";
	  };

	  function pushTryEntry(locs) {
	    var entry = { tryLoc: locs[0] };

	    if (1 in locs) {
	      entry.catchLoc = locs[1];
	    }

	    if (2 in locs) {
	      entry.finallyLoc = locs[2];
	      entry.afterLoc = locs[3];
	    }

	    this.tryEntries.push(entry);
	  }

	  function resetTryEntry(entry) {
	    var record = entry.completion || {};
	    record.type = "normal";
	    delete record.arg;
	    entry.completion = record;
	  }

	  function Context(tryLocsList) {
	    // The root entry object (effectively a try statement without a catch
	    // or a finally block) gives us a place to store values thrown from
	    // locations where there is no enclosing try statement.
	    this.tryEntries = [{ tryLoc: "root" }];
	    tryLocsList.forEach(pushTryEntry, this);
	    this.reset(true);
	  }

	  exports.keys = function(object) {
	    var keys = [];
	    for (var key in object) {
	      keys.push(key);
	    }
	    keys.reverse();

	    // Rather than returning an object with a next method, we keep
	    // things simple and return the next function itself.
	    return function next() {
	      while (keys.length) {
	        var key = keys.pop();
	        if (key in object) {
	          next.value = key;
	          next.done = false;
	          return next;
	        }
	      }

	      // To avoid creating an additional object, we just hang the .value
	      // and .done properties off the next function object itself. This
	      // also ensures that the minifier will not anonymize the function.
	      next.done = true;
	      return next;
	    };
	  };

	  function values(iterable) {
	    if (iterable) {
	      var iteratorMethod = iterable[iteratorSymbol];
	      if (iteratorMethod) {
	        return iteratorMethod.call(iterable);
	      }

	      if (typeof iterable.next === "function") {
	        return iterable;
	      }

	      if (!isNaN(iterable.length)) {
	        var i = -1, next = function next() {
	          while (++i < iterable.length) {
	            if (hasOwn.call(iterable, i)) {
	              next.value = iterable[i];
	              next.done = false;
	              return next;
	            }
	          }

	          next.value = undefined$1;
	          next.done = true;

	          return next;
	        };

	        return next.next = next;
	      }
	    }

	    // Return an iterator with no values.
	    return { next: doneResult };
	  }
	  exports.values = values;

	  function doneResult() {
	    return { value: undefined$1, done: true };
	  }

	  Context.prototype = {
	    constructor: Context,

	    reset: function(skipTempReset) {
	      this.prev = 0;
	      this.next = 0;
	      // Resetting context._sent for legacy support of Babel's
	      // function.sent implementation.
	      this.sent = this._sent = undefined$1;
	      this.done = false;
	      this.delegate = null;

	      this.method = "next";
	      this.arg = undefined$1;

	      this.tryEntries.forEach(resetTryEntry);

	      if (!skipTempReset) {
	        for (var name in this) {
	          // Not sure about the optimal order of these conditions:
	          if (name.charAt(0) === "t" &&
	              hasOwn.call(this, name) &&
	              !isNaN(+name.slice(1))) {
	            this[name] = undefined$1;
	          }
	        }
	      }
	    },

	    stop: function() {
	      this.done = true;

	      var rootEntry = this.tryEntries[0];
	      var rootRecord = rootEntry.completion;
	      if (rootRecord.type === "throw") {
	        throw rootRecord.arg;
	      }

	      return this.rval;
	    },

	    dispatchException: function(exception) {
	      if (this.done) {
	        throw exception;
	      }

	      var context = this;
	      function handle(loc, caught) {
	        record.type = "throw";
	        record.arg = exception;
	        context.next = loc;

	        if (caught) {
	          // If the dispatched exception was caught by a catch block,
	          // then let that catch block handle the exception normally.
	          context.method = "next";
	          context.arg = undefined$1;
	        }

	        return !! caught;
	      }

	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        var record = entry.completion;

	        if (entry.tryLoc === "root") {
	          // Exception thrown outside of any try block that could handle
	          // it, so set the completion value of the entire function to
	          // throw the exception.
	          return handle("end");
	        }

	        if (entry.tryLoc <= this.prev) {
	          var hasCatch = hasOwn.call(entry, "catchLoc");
	          var hasFinally = hasOwn.call(entry, "finallyLoc");

	          if (hasCatch && hasFinally) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            } else if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }

	          } else if (hasCatch) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            }

	          } else if (hasFinally) {
	            if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }

	          } else {
	            throw new Error("try statement without catch or finally");
	          }
	        }
	      }
	    },

	    abrupt: function(type, arg) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc <= this.prev &&
	            hasOwn.call(entry, "finallyLoc") &&
	            this.prev < entry.finallyLoc) {
	          var finallyEntry = entry;
	          break;
	        }
	      }

	      if (finallyEntry &&
	          (type === "break" ||
	           type === "continue") &&
	          finallyEntry.tryLoc <= arg &&
	          arg <= finallyEntry.finallyLoc) {
	        // Ignore the finally entry if control is not jumping to a
	        // location outside the try/catch block.
	        finallyEntry = null;
	      }

	      var record = finallyEntry ? finallyEntry.completion : {};
	      record.type = type;
	      record.arg = arg;

	      if (finallyEntry) {
	        this.method = "next";
	        this.next = finallyEntry.finallyLoc;
	        return ContinueSentinel;
	      }

	      return this.complete(record);
	    },

	    complete: function(record, afterLoc) {
	      if (record.type === "throw") {
	        throw record.arg;
	      }

	      if (record.type === "break" ||
	          record.type === "continue") {
	        this.next = record.arg;
	      } else if (record.type === "return") {
	        this.rval = this.arg = record.arg;
	        this.method = "return";
	        this.next = "end";
	      } else if (record.type === "normal" && afterLoc) {
	        this.next = afterLoc;
	      }

	      return ContinueSentinel;
	    },

	    finish: function(finallyLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.finallyLoc === finallyLoc) {
	          this.complete(entry.completion, entry.afterLoc);
	          resetTryEntry(entry);
	          return ContinueSentinel;
	        }
	      }
	    },

	    "catch": function(tryLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc === tryLoc) {
	          var record = entry.completion;
	          if (record.type === "throw") {
	            var thrown = record.arg;
	            resetTryEntry(entry);
	          }
	          return thrown;
	        }
	      }

	      // The context.catch method must only be called with a location
	      // argument that corresponds to a known catch block.
	      throw new Error("illegal catch attempt");
	    },

	    delegateYield: function(iterable, resultName, nextLoc) {
	      this.delegate = {
	        iterator: values(iterable),
	        resultName: resultName,
	        nextLoc: nextLoc
	      };

	      if (this.method === "next") {
	        // Deliberately forget the last sent value so that we don't
	        // accidentally pass it on to the delegate.
	        this.arg = undefined$1;
	      }

	      return ContinueSentinel;
	    }
	  };

	  // Regardless of whether this script is executing as a CommonJS module
	  // or not, return the runtime object so that we can declare the variable
	  // regeneratorRuntime in the outer scope, which allows this module to be
	  // injected easily by `bin/regenerator --include-runtime script.js`.
	  return exports;

	}(
	  // If this script is executing as a CommonJS module, use module.exports
	  // as the regeneratorRuntime namespace. Otherwise create a new empty
	  // object. Either way, the resulting object will be used to initialize
	  // the regeneratorRuntime variable at the top of this file.
	  module.exports 
	));

	try {
	  regeneratorRuntime = runtime;
	} catch (accidentalStrictMode) {
	  // This module should not be running in strict mode, so the above
	  // assignment should always work unless something is misconfigured. Just
	  // in case runtime.js accidentally runs in strict mode, we can escape
	  // strict mode using a global Function call. This could conceivably fail
	  // if a Content Security Policy forbids using Function, but in that case
	  // the proper solution is to fix the accidental strict mode problem. If
	  // you've misconfigured your bundler to force strict mode and applied a
	  // CSP to forbid Function, and you're not willing to fix either of those
	  // problems, please detail your unique predicament in a GitHub issue.
	  Function("r", "regeneratorRuntime = r")(runtime);
	}
	});

	var regenerator = runtime_1;

	let globalAny$1 = {};

	try {
	  globalAny$1 = window;
	} catch (error) {
	  if (error.message !== 'window is not defined') {
	    throw error;
	  } else {
	    globalAny$1 = {
	      isOnServer: true
	    };
	  }
	}
	/**
	 * Type of an [axios request]{@link https://github.com/axios/axios/blob/master/index.d.ts#L43}
	 *
	 * @typedef {object} AxiosRequestConfig
	 * @alias AxiosRequestConfig
	 * @memberof ApiClient
	 * @see https://github.com/axios/axios/blob/master/index.d.ts#L43
	 */


	const checkResponse = response => {
	  if (globalAny$1.isOnServer) {
	    return;
	  }

	  const loginUrl = [globalAny$1.location.origin, globalAny$1.REDUX_STATE.paths.loginPath].join(''); // if response has redirect to loginUrl

	  if (response.request.responseURL && response.request.responseURL.match(loginUrl)) {
	    // eslint-disable-next-line no-undef
	    alert('Your session expired. You will be redirected to login screen');
	    globalAny$1.location.assign(loginUrl);
	  }
	};
	/**
	 * Extends {@link AxiosRequestConfig}
	 *
	 * @alias ActionAPIParams
	 * @memberof ApiClient
	 * @property {any}   ...    any property supported by {@link AxiosRequestConfig}
	 */


	/**
	 * Client which access the admin API.
	 * Use it to fetch data from auto generated AdminBro API.
	 *
	 * In the backend it uses [axios](https://github.com/axios/axios) client
	 * library.
	 *
	 * Usage:
	 * ```javascript
	 * import { ApiClient } from 'admin-bro'
	 *
	 * const api = new ApiClient()
	 * // fetching all records
	 * api.resourceAction({ resourceId: 'Comments', actionName: 'list' }).then(results => {...})
	 * ```
	 * @see https://github.com/axios/axios
	 * @hideconstructor
	 */
	class ApiClient {
	  constructor() {
	    this.baseURL = ApiClient.getBaseUrl();
	    this.client = axios__default['default'].create({
	      baseURL: this.baseURL
	    });
	  }

	  static getBaseUrl() {
	    var _globalAny$REDUX_STAT;

	    if (globalAny$1.isOnServer) {
	      return '';
	    }

	    return [globalAny$1.location.origin, (_globalAny$REDUX_STAT = globalAny$1.REDUX_STATE) === null || _globalAny$REDUX_STAT === void 0 ? void 0 : _globalAny$REDUX_STAT.paths.rootPath].join('');
	  }
	  /**
	   * Search by query string for records in a given resource.
	   *
	   * @param   {Object}  options
	   * @param   {String}  options.resourceId  id of a {@link ResourceJSON}
	   * @param   {String}  options.query       query string
	   *
	   * @return  {Promise<SearchResponse>}
	   */


	  async searchRecords({
	    resourceId,
	    query
	  }) {
	    if (globalAny$1.isOnServer) {
	      return [];
	    }

	    const actionName = 'search';
	    const response = await this.resourceAction({
	      resourceId,
	      actionName,
	      query
	    });
	    checkResponse(response);
	    return response.data.records;
	  }
	  /**
	   * Invokes given resource {@link Action} on the backend.
	   *
	   * @param   {ResourceActionAPIParams}     options
	   * @return  {Promise<ActionResponse>}     response from an {@link Action}
	   */


	  async resourceAction(options) {
	    const {
	      resourceId,
	      actionName,
	      data,
	      query,
	      ...axiosParams
	    } = options;
	    let url = `/api/resources/${resourceId}/actions/${actionName}`;

	    if (query) {
	      const q = encodeURIComponent(query);
	      url = [url, q].join('/');
	    }

	    const response = await this.client.request({
	      url,
	      method: data ? 'POST' : 'GET',
	      ...axiosParams,
	      data
	    });
	    checkResponse(response);
	    return response;
	  }
	  /**
	   * Invokes given public resource {@link Action} on the backend.
	   *
	   * @param   {ResourceActionAPIParams}     options
	   * @return  {Promise<ActionResponse>}     response from an {@link Action}
	   */


	  async publicResourceAction(options) {
	    const {
	      resourceId,
	      actionName,
	      data,
	      query,
	      ...axiosParams
	    } = options;
	    let url = `/public/api/resources/${resourceId}/actions/${actionName}`;

	    if (query) {
	      const q = encodeURIComponent(query);
	      url = [url, q].join('/');
	    }

	    const response = await this.client.request({
	      url,
	      method: data ? 'POST' : 'GET',
	      ...axiosParams,
	      data
	    });
	    return response;
	  }
	  /**
	   * Invokes given record {@link Action} on the backend.
	   *
	   * @param   {RecordActionAPIParams} options
	   * @return  {Promise<RecordActionResponse>}            response from an {@link Action}
	   */


	  async recordAction(options) {
	    const {
	      resourceId,
	      recordId,
	      actionName,
	      data,
	      ...axiosParams
	    } = options;
	    const response = await this.client.request({
	      url: `/api/resources/${resourceId}/records/${recordId}/${actionName}`,
	      method: data ? 'POST' : 'GET',
	      ...axiosParams,
	      data
	    });
	    checkResponse(response);
	    return response;
	  }
	  /**
	   * Invokes given bulk {@link Action} on the backend.
	   *
	   * @param   {BulkActionAPIParams} options
	   * @return  {Promise<BulkActionResponse>}            response from an {@link Action}
	   */


	  async bulkAction(options) {
	    const {
	      resourceId,
	      recordIds,
	      actionName,
	      data,
	      ...axiosParams
	    } = options;
	    const params = new URLSearchParams();
	    params.set('recordIds', (recordIds || []).join(','));
	    const response = await this.client.request({
	      url: `/api/resources/${resourceId}/bulk/${actionName}`,
	      method: data ? 'POST' : 'GET',
	      ...axiosParams,
	      data,
	      params
	    });
	    checkResponse(response);
	    return response;
	  }
	  /**
	   * Invokes dashboard handler.
	   *
	   * @param   {AxiosRequestConfig}       options
	   * @return  {Promise<AxiosResponse<any>>} response from the handler function defined in
	   *                                     {@link AdminBroOptions#dashboard}
	   */


	  async getDashboard(options = {}) {
	    const response = await this.client.get('/api/dashboard', options);
	    checkResponse(response);
	    return response;
	  }
	  /**
	   * Invokes handler function of given page and returns its response.
	   *
	   * @param   {GetPageAPIParams}                options
	   * @return  {Promise<AxiosResponse<any>>}     response from the handler of given page
	   *                                            defined in {@link AdminBroOptions#pages}
	   */


	  async getPage(options) {
	    const {
	      pageName,
	      ...axiosParams
	    } = options;
	    const response = await this.client.request({
	      url: `/api/pages/${pageName}`,
	      ...axiosParams
	    });
	    checkResponse(response);
	    return response;
	  }

	}

	const ADD_NOTICE = 'ADD_NOTICE';

	/**
	 * A specialized version of `_.reduce` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {*} [accumulator] The initial value.
	 * @param {boolean} [initAccum] Specify using the first element of `array` as
	 *  the initial value.
	 * @returns {*} Returns the accumulated value.
	 */
	function arrayReduce(array, iteratee, accumulator, initAccum) {
	  var index = -1,
	      length = array == null ? 0 : array.length;

	  if (initAccum && length) {
	    accumulator = array[++index];
	  }
	  while (++index < length) {
	    accumulator = iteratee(accumulator, array[index], index, array);
	  }
	  return accumulator;
	}

	var _arrayReduce = arrayReduce;

	/**
	 * The base implementation of `_.propertyOf` without support for deep paths.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Function} Returns the new accessor function.
	 */
	function basePropertyOf(object) {
	  return function(key) {
	    return object == null ? undefined : object[key];
	  };
	}

	var _basePropertyOf = basePropertyOf;

	/** Used to map Latin Unicode letters to basic Latin letters. */
	var deburredLetters = {
	  // Latin-1 Supplement block.
	  '\xc0': 'A',  '\xc1': 'A', '\xc2': 'A', '\xc3': 'A', '\xc4': 'A', '\xc5': 'A',
	  '\xe0': 'a',  '\xe1': 'a', '\xe2': 'a', '\xe3': 'a', '\xe4': 'a', '\xe5': 'a',
	  '\xc7': 'C',  '\xe7': 'c',
	  '\xd0': 'D',  '\xf0': 'd',
	  '\xc8': 'E',  '\xc9': 'E', '\xca': 'E', '\xcb': 'E',
	  '\xe8': 'e',  '\xe9': 'e', '\xea': 'e', '\xeb': 'e',
	  '\xcc': 'I',  '\xcd': 'I', '\xce': 'I', '\xcf': 'I',
	  '\xec': 'i',  '\xed': 'i', '\xee': 'i', '\xef': 'i',
	  '\xd1': 'N',  '\xf1': 'n',
	  '\xd2': 'O',  '\xd3': 'O', '\xd4': 'O', '\xd5': 'O', '\xd6': 'O', '\xd8': 'O',
	  '\xf2': 'o',  '\xf3': 'o', '\xf4': 'o', '\xf5': 'o', '\xf6': 'o', '\xf8': 'o',
	  '\xd9': 'U',  '\xda': 'U', '\xdb': 'U', '\xdc': 'U',
	  '\xf9': 'u',  '\xfa': 'u', '\xfb': 'u', '\xfc': 'u',
	  '\xdd': 'Y',  '\xfd': 'y', '\xff': 'y',
	  '\xc6': 'Ae', '\xe6': 'ae',
	  '\xde': 'Th', '\xfe': 'th',
	  '\xdf': 'ss',
	  // Latin Extended-A block.
	  '\u0100': 'A',  '\u0102': 'A', '\u0104': 'A',
	  '\u0101': 'a',  '\u0103': 'a', '\u0105': 'a',
	  '\u0106': 'C',  '\u0108': 'C', '\u010a': 'C', '\u010c': 'C',
	  '\u0107': 'c',  '\u0109': 'c', '\u010b': 'c', '\u010d': 'c',
	  '\u010e': 'D',  '\u0110': 'D', '\u010f': 'd', '\u0111': 'd',
	  '\u0112': 'E',  '\u0114': 'E', '\u0116': 'E', '\u0118': 'E', '\u011a': 'E',
	  '\u0113': 'e',  '\u0115': 'e', '\u0117': 'e', '\u0119': 'e', '\u011b': 'e',
	  '\u011c': 'G',  '\u011e': 'G', '\u0120': 'G', '\u0122': 'G',
	  '\u011d': 'g',  '\u011f': 'g', '\u0121': 'g', '\u0123': 'g',
	  '\u0124': 'H',  '\u0126': 'H', '\u0125': 'h', '\u0127': 'h',
	  '\u0128': 'I',  '\u012a': 'I', '\u012c': 'I', '\u012e': 'I', '\u0130': 'I',
	  '\u0129': 'i',  '\u012b': 'i', '\u012d': 'i', '\u012f': 'i', '\u0131': 'i',
	  '\u0134': 'J',  '\u0135': 'j',
	  '\u0136': 'K',  '\u0137': 'k', '\u0138': 'k',
	  '\u0139': 'L',  '\u013b': 'L', '\u013d': 'L', '\u013f': 'L', '\u0141': 'L',
	  '\u013a': 'l',  '\u013c': 'l', '\u013e': 'l', '\u0140': 'l', '\u0142': 'l',
	  '\u0143': 'N',  '\u0145': 'N', '\u0147': 'N', '\u014a': 'N',
	  '\u0144': 'n',  '\u0146': 'n', '\u0148': 'n', '\u014b': 'n',
	  '\u014c': 'O',  '\u014e': 'O', '\u0150': 'O',
	  '\u014d': 'o',  '\u014f': 'o', '\u0151': 'o',
	  '\u0154': 'R',  '\u0156': 'R', '\u0158': 'R',
	  '\u0155': 'r',  '\u0157': 'r', '\u0159': 'r',
	  '\u015a': 'S',  '\u015c': 'S', '\u015e': 'S', '\u0160': 'S',
	  '\u015b': 's',  '\u015d': 's', '\u015f': 's', '\u0161': 's',
	  '\u0162': 'T',  '\u0164': 'T', '\u0166': 'T',
	  '\u0163': 't',  '\u0165': 't', '\u0167': 't',
	  '\u0168': 'U',  '\u016a': 'U', '\u016c': 'U', '\u016e': 'U', '\u0170': 'U', '\u0172': 'U',
	  '\u0169': 'u',  '\u016b': 'u', '\u016d': 'u', '\u016f': 'u', '\u0171': 'u', '\u0173': 'u',
	  '\u0174': 'W',  '\u0175': 'w',
	  '\u0176': 'Y',  '\u0177': 'y', '\u0178': 'Y',
	  '\u0179': 'Z',  '\u017b': 'Z', '\u017d': 'Z',
	  '\u017a': 'z',  '\u017c': 'z', '\u017e': 'z',
	  '\u0132': 'IJ', '\u0133': 'ij',
	  '\u0152': 'Oe', '\u0153': 'oe',
	  '\u0149': "'n", '\u017f': 's'
	};

	/**
	 * Used by `_.deburr` to convert Latin-1 Supplement and Latin Extended-A
	 * letters to basic Latin letters.
	 *
	 * @private
	 * @param {string} letter The matched letter to deburr.
	 * @returns {string} Returns the deburred letter.
	 */
	var deburrLetter = _basePropertyOf(deburredLetters);

	var _deburrLetter = deburrLetter;

	/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

	var _freeGlobal = freeGlobal;

	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

	/** Used as a reference to the global object. */
	var root = _freeGlobal || freeSelf || Function('return this')();

	var _root = root;

	/** Built-in value references. */
	var Symbol$1 = _root.Symbol;

	var _Symbol = Symbol$1;

	/**
	 * A specialized version of `_.map` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the new mapped array.
	 */
	function arrayMap(array, iteratee) {
	  var index = -1,
	      length = array == null ? 0 : array.length,
	      result = Array(length);

	  while (++index < length) {
	    result[index] = iteratee(array[index], index, array);
	  }
	  return result;
	}

	var _arrayMap = arrayMap;

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;

	var isArray_1 = isArray;

	/** Used for built-in method references. */
	var objectProto$1 = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto$1.hasOwnProperty;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString$1 = objectProto$1.toString;

	/** Built-in value references. */
	var symToStringTag$1 = _Symbol ? _Symbol.toStringTag : undefined;

	/**
	 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the raw `toStringTag`.
	 */
	function getRawTag(value) {
	  var isOwn = hasOwnProperty.call(value, symToStringTag$1),
	      tag = value[symToStringTag$1];

	  try {
	    value[symToStringTag$1] = undefined;
	    var unmasked = true;
	  } catch (e) {}

	  var result = nativeObjectToString$1.call(value);
	  if (unmasked) {
	    if (isOwn) {
	      value[symToStringTag$1] = tag;
	    } else {
	      delete value[symToStringTag$1];
	    }
	  }
	  return result;
	}

	var _getRawTag = getRawTag;

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;

	/**
	 * Converts `value` to a string using `Object.prototype.toString`.
	 *
	 * @private
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 */
	function objectToString(value) {
	  return nativeObjectToString.call(value);
	}

	var _objectToString = objectToString;

	/** `Object#toString` result references. */
	var nullTag = '[object Null]',
	    undefinedTag = '[object Undefined]';

	/** Built-in value references. */
	var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

	/**
	 * The base implementation of `getTag` without fallbacks for buggy environments.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag(value) {
	  if (value == null) {
	    return value === undefined ? undefinedTag : nullTag;
	  }
	  return (symToStringTag && symToStringTag in Object(value))
	    ? _getRawTag(value)
	    : _objectToString(value);
	}

	var _baseGetTag = baseGetTag;

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return value != null && typeof value == 'object';
	}

	var isObjectLike_1 = isObjectLike;

	/** `Object#toString` result references. */
	var symbolTag = '[object Symbol]';

	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol(value) {
	  return typeof value == 'symbol' ||
	    (isObjectLike_1(value) && _baseGetTag(value) == symbolTag);
	}

	var isSymbol_1 = isSymbol;

	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;

	/** Used to convert symbols to primitives and strings. */
	var symbolProto = _Symbol ? _Symbol.prototype : undefined,
	    symbolToString = symbolProto ? symbolProto.toString : undefined;

	/**
	 * The base implementation of `_.toString` which doesn't convert nullish
	 * values to empty strings.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 */
	function baseToString(value) {
	  // Exit early for strings to avoid a performance hit in some environments.
	  if (typeof value == 'string') {
	    return value;
	  }
	  if (isArray_1(value)) {
	    // Recursively convert values (susceptible to call stack limits).
	    return _arrayMap(value, baseToString) + '';
	  }
	  if (isSymbol_1(value)) {
	    return symbolToString ? symbolToString.call(value) : '';
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	}

	var _baseToString = baseToString;

	/**
	 * Converts `value` to a string. An empty string is returned for `null`
	 * and `undefined` values. The sign of `-0` is preserved.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 * @example
	 *
	 * _.toString(null);
	 * // => ''
	 *
	 * _.toString(-0);
	 * // => '-0'
	 *
	 * _.toString([1, 2, 3]);
	 * // => '1,2,3'
	 */
	function toString(value) {
	  return value == null ? '' : _baseToString(value);
	}

	var toString_1 = toString;

	/** Used to match Latin Unicode letters (excluding mathematical operators). */
	var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;

	/** Used to compose unicode character classes. */
	var rsComboMarksRange$3 = '\\u0300-\\u036f',
	    reComboHalfMarksRange$3 = '\\ufe20-\\ufe2f',
	    rsComboSymbolsRange$3 = '\\u20d0-\\u20ff',
	    rsComboRange$3 = rsComboMarksRange$3 + reComboHalfMarksRange$3 + rsComboSymbolsRange$3;

	/** Used to compose unicode capture groups. */
	var rsCombo$2 = '[' + rsComboRange$3 + ']';

	/**
	 * Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) and
	 * [combining diacritical marks for symbols](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols).
	 */
	var reComboMark = RegExp(rsCombo$2, 'g');

	/**
	 * Deburrs `string` by converting
	 * [Latin-1 Supplement](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
	 * and [Latin Extended-A](https://en.wikipedia.org/wiki/Latin_Extended-A)
	 * letters to basic Latin letters and removing
	 * [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category String
	 * @param {string} [string=''] The string to deburr.
	 * @returns {string} Returns the deburred string.
	 * @example
	 *
	 * _.deburr('déjà vu');
	 * // => 'deja vu'
	 */
	function deburr(string) {
	  string = toString_1(string);
	  return string && string.replace(reLatin, _deburrLetter).replace(reComboMark, '');
	}

	var deburr_1 = deburr;

	/** Used to match words composed of alphanumeric characters. */
	var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;

	/**
	 * Splits an ASCII `string` into an array of its words.
	 *
	 * @private
	 * @param {string} The string to inspect.
	 * @returns {Array} Returns the words of `string`.
	 */
	function asciiWords(string) {
	  return string.match(reAsciiWord) || [];
	}

	var _asciiWords = asciiWords;

	/** Used to detect strings that need a more robust regexp to match words. */
	var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;

	/**
	 * Checks if `string` contains a word composed of Unicode symbols.
	 *
	 * @private
	 * @param {string} string The string to inspect.
	 * @returns {boolean} Returns `true` if a word is found, else `false`.
	 */
	function hasUnicodeWord(string) {
	  return reHasUnicodeWord.test(string);
	}

	var _hasUnicodeWord = hasUnicodeWord;

	/** Used to compose unicode character classes. */
	var rsAstralRange$2 = '\\ud800-\\udfff',
	    rsComboMarksRange$2 = '\\u0300-\\u036f',
	    reComboHalfMarksRange$2 = '\\ufe20-\\ufe2f',
	    rsComboSymbolsRange$2 = '\\u20d0-\\u20ff',
	    rsComboRange$2 = rsComboMarksRange$2 + reComboHalfMarksRange$2 + rsComboSymbolsRange$2,
	    rsDingbatRange = '\\u2700-\\u27bf',
	    rsLowerRange = 'a-z\\xdf-\\xf6\\xf8-\\xff',
	    rsMathOpRange = '\\xac\\xb1\\xd7\\xf7',
	    rsNonCharRange = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',
	    rsPunctuationRange = '\\u2000-\\u206f',
	    rsSpaceRange = ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
	    rsUpperRange = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
	    rsVarRange$2 = '\\ufe0e\\ufe0f',
	    rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;

	/** Used to compose unicode capture groups. */
	var rsApos$1 = "['\u2019]",
	    rsBreak = '[' + rsBreakRange + ']',
	    rsCombo$1 = '[' + rsComboRange$2 + ']',
	    rsDigits = '\\d+',
	    rsDingbat = '[' + rsDingbatRange + ']',
	    rsLower = '[' + rsLowerRange + ']',
	    rsMisc = '[^' + rsAstralRange$2 + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + ']',
	    rsFitz$1 = '\\ud83c[\\udffb-\\udfff]',
	    rsModifier$1 = '(?:' + rsCombo$1 + '|' + rsFitz$1 + ')',
	    rsNonAstral$1 = '[^' + rsAstralRange$2 + ']',
	    rsRegional$1 = '(?:\\ud83c[\\udde6-\\uddff]){2}',
	    rsSurrPair$1 = '[\\ud800-\\udbff][\\udc00-\\udfff]',
	    rsUpper = '[' + rsUpperRange + ']',
	    rsZWJ$2 = '\\u200d';

	/** Used to compose unicode regexes. */
	var rsMiscLower = '(?:' + rsLower + '|' + rsMisc + ')',
	    rsMiscUpper = '(?:' + rsUpper + '|' + rsMisc + ')',
	    rsOptContrLower = '(?:' + rsApos$1 + '(?:d|ll|m|re|s|t|ve))?',
	    rsOptContrUpper = '(?:' + rsApos$1 + '(?:D|LL|M|RE|S|T|VE))?',
	    reOptMod$1 = rsModifier$1 + '?',
	    rsOptVar$1 = '[' + rsVarRange$2 + ']?',
	    rsOptJoin$1 = '(?:' + rsZWJ$2 + '(?:' + [rsNonAstral$1, rsRegional$1, rsSurrPair$1].join('|') + ')' + rsOptVar$1 + reOptMod$1 + ')*',
	    rsOrdLower = '\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])',
	    rsOrdUpper = '\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])',
	    rsSeq$1 = rsOptVar$1 + reOptMod$1 + rsOptJoin$1,
	    rsEmoji = '(?:' + [rsDingbat, rsRegional$1, rsSurrPair$1].join('|') + ')' + rsSeq$1;

	/** Used to match complex or compound words. */
	var reUnicodeWord = RegExp([
	  rsUpper + '?' + rsLower + '+' + rsOptContrLower + '(?=' + [rsBreak, rsUpper, '$'].join('|') + ')',
	  rsMiscUpper + '+' + rsOptContrUpper + '(?=' + [rsBreak, rsUpper + rsMiscLower, '$'].join('|') + ')',
	  rsUpper + '?' + rsMiscLower + '+' + rsOptContrLower,
	  rsUpper + '+' + rsOptContrUpper,
	  rsOrdUpper,
	  rsOrdLower,
	  rsDigits,
	  rsEmoji
	].join('|'), 'g');

	/**
	 * Splits a Unicode `string` into an array of its words.
	 *
	 * @private
	 * @param {string} The string to inspect.
	 * @returns {Array} Returns the words of `string`.
	 */
	function unicodeWords(string) {
	  return string.match(reUnicodeWord) || [];
	}

	var _unicodeWords = unicodeWords;

	/**
	 * Splits `string` into an array of its words.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category String
	 * @param {string} [string=''] The string to inspect.
	 * @param {RegExp|string} [pattern] The pattern to match words.
	 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	 * @returns {Array} Returns the words of `string`.
	 * @example
	 *
	 * _.words('fred, barney, & pebbles');
	 * // => ['fred', 'barney', 'pebbles']
	 *
	 * _.words('fred, barney, & pebbles', /[^, ]+/g);
	 * // => ['fred', 'barney', '&', 'pebbles']
	 */
	function words(string, pattern, guard) {
	  string = toString_1(string);
	  pattern = guard ? undefined : pattern;

	  if (pattern === undefined) {
	    return _hasUnicodeWord(string) ? _unicodeWords(string) : _asciiWords(string);
	  }
	  return string.match(pattern) || [];
	}

	var words_1 = words;

	/** Used to compose unicode capture groups. */
	var rsApos = "['\u2019]";

	/** Used to match apostrophes. */
	var reApos = RegExp(rsApos, 'g');

	/**
	 * Creates a function like `_.camelCase`.
	 *
	 * @private
	 * @param {Function} callback The function to combine each word.
	 * @returns {Function} Returns the new compounder function.
	 */
	function createCompounder(callback) {
	  return function(string) {
	    return _arrayReduce(words_1(deburr_1(string).replace(reApos, '')), callback, '');
	  };
	}

	var _createCompounder = createCompounder;

	/**
	 * The base implementation of `_.slice` without an iteratee call guard.
	 *
	 * @private
	 * @param {Array} array The array to slice.
	 * @param {number} [start=0] The start position.
	 * @param {number} [end=array.length] The end position.
	 * @returns {Array} Returns the slice of `array`.
	 */
	function baseSlice(array, start, end) {
	  var index = -1,
	      length = array.length;

	  if (start < 0) {
	    start = -start > length ? 0 : (length + start);
	  }
	  end = end > length ? length : end;
	  if (end < 0) {
	    end += length;
	  }
	  length = start > end ? 0 : ((end - start) >>> 0);
	  start >>>= 0;

	  var result = Array(length);
	  while (++index < length) {
	    result[index] = array[index + start];
	  }
	  return result;
	}

	var _baseSlice = baseSlice;

	/**
	 * Casts `array` to a slice if it's needed.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {number} start The start position.
	 * @param {number} [end=array.length] The end position.
	 * @returns {Array} Returns the cast slice.
	 */
	function castSlice(array, start, end) {
	  var length = array.length;
	  end = end === undefined ? length : end;
	  return (!start && end >= length) ? array : _baseSlice(array, start, end);
	}

	var _castSlice = castSlice;

	/** Used to compose unicode character classes. */
	var rsAstralRange$1 = '\\ud800-\\udfff',
	    rsComboMarksRange$1 = '\\u0300-\\u036f',
	    reComboHalfMarksRange$1 = '\\ufe20-\\ufe2f',
	    rsComboSymbolsRange$1 = '\\u20d0-\\u20ff',
	    rsComboRange$1 = rsComboMarksRange$1 + reComboHalfMarksRange$1 + rsComboSymbolsRange$1,
	    rsVarRange$1 = '\\ufe0e\\ufe0f';

	/** Used to compose unicode capture groups. */
	var rsZWJ$1 = '\\u200d';

	/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
	var reHasUnicode = RegExp('[' + rsZWJ$1 + rsAstralRange$1  + rsComboRange$1 + rsVarRange$1 + ']');

	/**
	 * Checks if `string` contains Unicode symbols.
	 *
	 * @private
	 * @param {string} string The string to inspect.
	 * @returns {boolean} Returns `true` if a symbol is found, else `false`.
	 */
	function hasUnicode(string) {
	  return reHasUnicode.test(string);
	}

	var _hasUnicode = hasUnicode;

	/**
	 * Converts an ASCII `string` to an array.
	 *
	 * @private
	 * @param {string} string The string to convert.
	 * @returns {Array} Returns the converted array.
	 */
	function asciiToArray(string) {
	  return string.split('');
	}

	var _asciiToArray = asciiToArray;

	/** Used to compose unicode character classes. */
	var rsAstralRange = '\\ud800-\\udfff',
	    rsComboMarksRange = '\\u0300-\\u036f',
	    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
	    rsComboSymbolsRange = '\\u20d0-\\u20ff',
	    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
	    rsVarRange = '\\ufe0e\\ufe0f';

	/** Used to compose unicode capture groups. */
	var rsAstral = '[' + rsAstralRange + ']',
	    rsCombo = '[' + rsComboRange + ']',
	    rsFitz = '\\ud83c[\\udffb-\\udfff]',
	    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
	    rsNonAstral = '[^' + rsAstralRange + ']',
	    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
	    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
	    rsZWJ = '\\u200d';

	/** Used to compose unicode regexes. */
	var reOptMod = rsModifier + '?',
	    rsOptVar = '[' + rsVarRange + ']?',
	    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
	    rsSeq = rsOptVar + reOptMod + rsOptJoin,
	    rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

	/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
	var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

	/**
	 * Converts a Unicode `string` to an array.
	 *
	 * @private
	 * @param {string} string The string to convert.
	 * @returns {Array} Returns the converted array.
	 */
	function unicodeToArray(string) {
	  return string.match(reUnicode) || [];
	}

	var _unicodeToArray = unicodeToArray;

	/**
	 * Converts `string` to an array.
	 *
	 * @private
	 * @param {string} string The string to convert.
	 * @returns {Array} Returns the converted array.
	 */
	function stringToArray(string) {
	  return _hasUnicode(string)
	    ? _unicodeToArray(string)
	    : _asciiToArray(string);
	}

	var _stringToArray = stringToArray;

	/**
	 * Creates a function like `_.lowerFirst`.
	 *
	 * @private
	 * @param {string} methodName The name of the `String` case method to use.
	 * @returns {Function} Returns the new case function.
	 */
	function createCaseFirst(methodName) {
	  return function(string) {
	    string = toString_1(string);

	    var strSymbols = _hasUnicode(string)
	      ? _stringToArray(string)
	      : undefined;

	    var chr = strSymbols
	      ? strSymbols[0]
	      : string.charAt(0);

	    var trailing = strSymbols
	      ? _castSlice(strSymbols, 1).join('')
	      : string.slice(1);

	    return chr[methodName]() + trailing;
	  };
	}

	var _createCaseFirst = createCaseFirst;

	/**
	 * Converts the first character of `string` to upper case.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category String
	 * @param {string} [string=''] The string to convert.
	 * @returns {string} Returns the converted string.
	 * @example
	 *
	 * _.upperFirst('fred');
	 * // => 'Fred'
	 *
	 * _.upperFirst('FRED');
	 * // => 'FRED'
	 */
	var upperFirst = _createCaseFirst('toUpperCase');

	var upperFirst_1 = upperFirst;

	/**
	 * Converts `string` to
	 * [start case](https://en.wikipedia.org/wiki/Letter_case#Stylistic_or_specialised_usage).
	 *
	 * @static
	 * @memberOf _
	 * @since 3.1.0
	 * @category String
	 * @param {string} [string=''] The string to convert.
	 * @returns {string} Returns the start cased string.
	 * @example
	 *
	 * _.startCase('--foo-bar--');
	 * // => 'Foo Bar'
	 *
	 * _.startCase('fooBar');
	 * // => 'Foo Bar'
	 *
	 * _.startCase('__FOO_BAR__');
	 * // => 'FOO BAR'
	 */
	var startCase = _createCompounder(function(result, word, index) {
	  return result + (index ? ' ' : '') + upperFirst_1(word);
	});

	var startCase_1 = startCase;

	/**
	 * @memberof TranslateFunctions
	 * @alias TranslateFunction
	 */

	const formatName = name => name.split('.').join('&#46;');

	const translate = (i18n, key, name, resourceId, options) => {
	  const realOptions = (typeof resourceId === 'string' ? options : resourceId) || {};
	  const formattedName = formatName(name);
	  let keys = [`${key}.${formattedName}`];

	  if (resourceId) {
	    keys = [`resources.${resourceId}.${key}.${formattedName}`, ...keys];
	  }

	  if (i18n.exists(keys)) {
	    return i18n.t(keys, realOptions);
	  }

	  return realOptions.defaultValue ?? startCase_1(name);
	};

	const createFunctions = i18n => {
	  const translateAction = (actionName, resourceId, options) => translate(i18n, 'actions', actionName, resourceId, options);

	  const translateButton = (buttonLabel, resourceId, options) => translate(i18n, 'buttons', buttonLabel, resourceId, options);

	  const translateLabel = (label, resourceId, options) => translate(i18n, 'labels', label, resourceId, options);

	  const translateProperty = (propertyName, resourceId, options) => translate(i18n, 'properties', propertyName, resourceId, options);

	  const translateMessage = (messageName, resourceId, options) => translate(i18n, 'messages', messageName, resourceId, options);

	  return {
	    translateAction,
	    ta: translateAction,
	    translateButton,
	    tb: translateButton,
	    translateLabel,
	    tl: translateLabel,
	    translateProperty,
	    tp: translateProperty,
	    translateMessage,
	    tm: translateMessage,
	    t: i18n.t,
	    translate: i18n.t
	  };
	};

	new ApiClient();

	let globalAny = {};

	try {
	  globalAny = window;
	} catch (error) {
	  if (error.message !== 'window is not defined') {
	    throw error;
	  }
	}
	/**
	 * Base Params for a any function
	 * @alias ActionParams
	 * @memberof ViewHelpers
	 */


	const runDate = new Date();
	/**
	 * Collection of helper methods available in the views
	 */

	class ViewHelpers {
	  constructor({
	    options
	  } = {}) {
	    let opts = ViewHelpers.getPaths(options);
	    opts = opts || {
	      rootPath: '/admin'
	    }; // when ViewHelpers are used on the frontend, paths are taken from global Redux State

	    this.options = opts;
	  }

	  static getPaths(options) {
	    var _globalAny$REDUX_STAT;

	    return options || ((_globalAny$REDUX_STAT = globalAny.REDUX_STATE) === null || _globalAny$REDUX_STAT === void 0 ? void 0 : _globalAny$REDUX_STAT.paths);
	  }
	  /**
	   * To each related path adds rootPath passed by the user, as well as a query string
	   * @private
	   * @param  {Array<string>} [paths]      list of parts of the url
	   * @return {string}       path
	   * @return {query}        [search=''] query string which can be fetch
	   *                                    from `location.search`
	   */


	  urlBuilder(paths = [], search = '') {
	    const separator = '/';
	    const replace = new RegExp(`${separator}{1,}`, 'g');
	    let {
	      rootPath
	    } = this.options;

	    if (!rootPath.startsWith(separator)) {
	      rootPath = `${separator}${rootPath}`;
	    }

	    const parts = [rootPath, ...paths];
	    return `${parts.join(separator).replace(replace, separator)}${search}`;
	  }
	  /**
	   * Returns login URL
	   * @return {string}
	   */


	  loginUrl() {
	    return this.options.loginPath;
	  }
	  /**
	   * Returns signup URL
	   * @return {string}
	   */


	  signupUrl() {
	    return this.options.signupPath;
	  }
	  /**
	   * Returns forgot password URL
	   * @return {string}
	   */


	  forgotPasswordUrl() {
	    return this.options.forgotPasswordPath;
	  }
	  /**
	   * Returns change password URL
	   * @return {string}
	   */


	  changePasswordUrl() {
	    return this.options.changePasswordPath;
	  }
	  /**
	   * Returns logout URL
	   * @return {string}
	   */


	  logoutUrl() {
	    return this.options.logoutPath;
	  }
	  /**
	   * Returns impersonate URL
	   * @return {string}
	   */


	  impersonateUrl() {
	    return this.options.impersonatePath;
	  }
	  /**
	   * Returns impersonate logout URL
	   * @return {string}
	   */


	  impersonateLogoutUrl() {
	    return this.options.impersonateLogoutPath;
	  }
	  /**
	   * Returns URL for the dashboard
	   * @return {string}
	   */


	  dashboardUrl() {
	    return this.options.rootPath;
	  }
	  /**
	   * Returns URL for given page name
	   * @param {string} pageName       page name which is a unique key specified in
	   *                                {@link AdminBroOptions}
	   * @return {string}
	   */


	  pageUrl(pageName) {
	    return this.urlBuilder(['pages', pageName]);
	  }
	  /**
	   * Returns URL for given page name
	   * @param {string} pageName       page name which is a unique key specified in
	   *                                {@link AdminBroOptions}
	   * @return {string}
	   */


	  publicPageUrl(pageName) {
	    return this.urlBuilder(['public', pageName]);
	  }
	  /**
	   * Returns url for a `edit` action in given Resource. Uses {@link recordActionUrl}
	   *
	   * @param {string} resourceId  id to the resource
	   * @param {string} recordId    id to the record
	   * @param {string} [search]        optional query string
	   */


	  editUrl(resourceId, recordId, search) {
	    return this.recordActionUrl({
	      resourceId,
	      recordId,
	      actionName: 'edit',
	      search
	    });
	  }
	  /**
	   * Returns url for a `show` action in given Resource. Uses {@link recordActionUrl}
	   *
	   * @param {string} resourceId  id to the resource
	   * @param {string} recordId    id to the record
	   * @param {string} [search]        optional query string
	   */


	  showUrl(resourceId, recordId, search) {
	    return this.recordActionUrl({
	      resourceId,
	      recordId,
	      actionName: 'show',
	      search
	    });
	  }
	  /**
	   * Returns url for a `delete` action in given Resource. Uses {@link recordActionUrl}
	   *
	   * @param {string} resourceId  id to the resource
	   * @param {string} recordId    id to the record
	   * @param {string} [search]        optional query string
	   */


	  deleteUrl(resourceId, recordId, search) {
	    return this.recordActionUrl({
	      resourceId,
	      recordId,
	      actionName: 'delete',
	      search
	    });
	  }
	  /**
	   * Returns url for a `new` action in given Resource. Uses {@link resourceActionUrl}
	   *
	   * @param {string} resourceId  id to the resource
	   * @param {string} [search]        optional query string
	   */


	  newUrl(resourceId, search) {
	    return this.resourceActionUrl({
	      resourceId,
	      actionName: 'new',
	      search
	    });
	  }
	  /**
	   * Returns url for a `new` action in given Resource. Uses {@link resourceActionUrl}
	   *
	   * @param {string} resourceId  id to the resource
	   * @param {string} [search]        optional query string
	   */


	  listUrl(resourceId, search) {
	    return this.resourceActionUrl({
	      resourceId,
	      actionName: 'list',
	      search
	    });
	  }
	  /**
	   * Returns url for a `bulkDelete` action in given Resource. Uses {@link bulkActionUrl}
	   *
	   * @param {string} resourceId  id to the resource
	   * @param {Array<string>} recordIds   separated by comma records
	   * @param {string} [search]        optional query string
	   */


	  bulkDeleteUrl(resourceId, recordIds, search) {
	    return this.bulkActionUrl({
	      resourceId,
	      recordIds,
	      actionName: 'bulkDelete',
	      search
	    });
	  }
	  /**
	   * Returns resourceAction url
	   *
	   * @param   {ResourceActionParams}  options
	   * @param   {string}  options.resourceId
	   * @param   {string}  options.actionName
	   * @param   {string}  [options.search]        optional query string
	   *
	   * @return  {string}
	   */


	  resourceActionUrl({
	    resourceId,
	    actionName,
	    search
	  }) {
	    return this.urlBuilder(['resources', resourceId, 'actions', actionName], search);
	  }

	  resourceUrl({
	    resourceId,
	    search
	  }) {
	    return this.urlBuilder(['resources', resourceId], search);
	  }
	  /**
	   * Returns recordAction url
	   *
	   * @param   {RecordActionParams}  options
	   * @param   {string}  options.resourceId
	   * @param   {string}  options.recordId
	   * @param   {string}  options.actionName
	   *
	   * @return  {string}
	   */


	  recordActionUrl({
	    resourceId,
	    recordId,
	    actionName,
	    search
	  }) {
	    return this.urlBuilder(['resources', resourceId, 'records', recordId, actionName], search);
	  }
	  /**
	   * Returns bulkAction url
	   *
	   * @param   {BulkActionParams}  options
	   * @param   {string}  options.resourceId
	   * @param   {Array<string>}  [options.recordIds]
	   * @param   {string}  options.actionName
	   *
	   * @return  {string}
	   */


	  bulkActionUrl({
	    resourceId,
	    recordIds,
	    actionName,
	    search
	  }) {
	    const url = this.urlBuilder(['resources', resourceId, 'bulk', actionName]);

	    if (recordIds && recordIds.length) {
	      const query = new URLSearchParams(search);
	      query.set('recordIds', recordIds.join(','));
	      return `${url}?${query.toString()}`;
	    }

	    return `${url}${search || ''}`;
	  }
	  /**
	   * Returns absolute path to a given asset.
	   * @private
	   *
	   * @param  {string} asset
	   * @return {string}
	   */


	  assetPath(asset) {
	    if (this.options.assetsCDN) {
	      const url = new URL(asset, this.options.assetsCDN).href; // adding timestamp to the href invalidates the CDN cache

	      return `${url}?date=${runDate.getTime()}`;
	    }

	    return this.urlBuilder(['frontend', 'assets', asset]);
	  }

	}

	new ViewHelpers();

	new ApiClient();

	const SESSION_INITIALIZE = 'SESSION_INITIALIZE';

	/**
	 * Extends {@link TranslateFunctions}. Apart from that it also returns all the properties
	 * defined below.
	 *
	 * ```javascript
	 * import { useTranslation } from 'admin-bro'
	 *
	 * const MyComponent = () => {
	 *   const { translateButton } = useTranslation()
	 *
	 *   return (
	 *     <Box>
	 *       <Button variant="primary" onClick={...}>{translateButton('save')}<Button>
	 *     </Box>
	 *   )
	 * }
	 * ```
	 *
	 * @memberof useTranslation
	 * @alias UseTranslationResponse
	 *
	 * @property {TranslateFunction} ... All functions defined in {@link TranslateFunctions}
	 */

	/**
	 * @classdesc
	 * Extends the useTranslation hook from react-i18next library.
	 *
	 * Returns all the {@link TranslateFunctions} + methods returned by the original
	 * useTranslation method from react-i18next like: `i18n` instance and `ready` flag.
	 *
	 * @class
	 * @subcategory Hooks
	 * @bundle
	 * @hideconstructor
	 * @returns {UseTranslationResponse}
	 */
	const useTranslation = () => {
	  // eslint-disable-next-line no-shadow
	  const {
	    i18n,
	    ...rest
	  } = reactI18next.useTranslation();
	  const translateFunctions = createFunctions(i18n);
	  return { ...rest,
	    i18n,
	    ...translateFunctions
	  };
	};

	new ApiClient();

	var _extends_1 = createCommonjsModule(function (module) {
	function _extends() {
	  module.exports = _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	      var source = arguments[i];

	      for (var key in source) {
	        if (Object.prototype.hasOwnProperty.call(source, key)) {
	          target[key] = source[key];
	        }
	      }
	    }

	    return target;
	  };

	  module.exports["default"] = module.exports, module.exports.__esModule = true;
	  return _extends.apply(this, arguments);
	}

	module.exports = _extends;
	module.exports["default"] = module.exports, module.exports.__esModule = true;
	});

	var _extends = /*@__PURE__*/getDefaultExportFromCjs(_extends_1);

	/**
	 * @private
	 *
	 * @classdesc
	 * Overrides one of the component form AdminBro core when user pass its name to
	 * {@link AdminBro.bundle} method.
	 *
	 * If case of being overridden, component receives additional prop: `OriginalComponent`
	 *
	 * @example
	 * AdminBro.bundle('./path/to/component', 'SidebarFooter', true)
	 */
	function allowOverride(OriginalComponent, name, keepOriginal) {
	  // ssr
	  if (typeof window === 'undefined') {
	    return OriginalComponent;
	  }

	  const WrapperComponent = props => {
	    let globalAny = window;
	    globalAny = window;
	    let Component = OriginalComponent;

	    if (globalAny.AdminBro && globalAny.AdminBro.UserComponents && globalAny.AdminBro.UserComponents[name]) {
	      Component = globalAny.AdminBro.UserComponents[name];
	      return keepOriginal ? /*#__PURE__*/React__default['default'].createElement(Component, _extends({}, props, {
	        OriginalComponent: OriginalComponent
	      })) : /*#__PURE__*/React__default['default'].createElement(Component, props);
	    }

	    return /*#__PURE__*/React__default['default'].createElement(Component, props);
	  };

	  return WrapperComponent;
	}

	const Wrapper$3 = styled__default['default'](designSystem.Box).withConfig({
	  displayName: "login__Wrapper",
	  componentId: "sc-8h2m0l-0"
	})(["align-items:center;justify-content:center;flex-direction:column;height:100%;"]);
	const StyledLogo$3 = styled__default['default'].img.withConfig({
	  displayName: "login__StyledLogo",
	  componentId: "sc-8h2m0l-1"
	})(["max-width:200px;margin:", " 0;"], designSystem.themeGet('space', 'md'));

	const LoginOriginal = props => {
	  const {
	    action,
	    message
	  } = props;
	  const {
	    translateLabel,
	    translateButton,
	    translateProperty,
	    translateMessage
	  } = useTranslation();
	  const branding = reactRedux.useSelector(state => state.branding);
	  return /*#__PURE__*/React__default['default'].createElement(Wrapper$3, {
	    flex: true,
	    variant: "grey"
	  }, /*#__PURE__*/React__default['default'].createElement(designSystem.Box, {
	    bg: "white",
	    height: "440px",
	    flex: true,
	    boxShadow: "login",
	    width: [1, 2 / 3, 'auto']
	  }, /*#__PURE__*/React__default['default'].createElement(designSystem.Box, {
	    bg: "primary100",
	    color: "white",
	    p: "x3",
	    width: "380px",
	    flexGrow: 0,
	    display: ['none', 'none', 'block'],
	    position: "relative"
	  }, /*#__PURE__*/React__default['default'].createElement(designSystem.H2, {
	    fontWeight: "lighter"
	  }, translateLabel('loginWelcome')), /*#__PURE__*/React__default['default'].createElement(designSystem.Text, {
	    fontWeight: "lighter",
	    mt: "default"
	  }, translateMessage('loginWelcome')), /*#__PURE__*/React__default['default'].createElement(designSystem.Text, {
	    textAlign: "center",
	    p: "xxl"
	  }, /*#__PURE__*/React__default['default'].createElement(designSystem.Box, {
	    display: "inline",
	    mr: "default"
	  }, /*#__PURE__*/React__default['default'].createElement(designSystem.Illustration, {
	    variant: "Planet",
	    width: 82,
	    height: 91
	  })), /*#__PURE__*/React__default['default'].createElement(designSystem.Box, {
	    display: "inline"
	  }, /*#__PURE__*/React__default['default'].createElement(designSystem.Illustration, {
	    variant: "Astronaut",
	    width: 82,
	    height: 91
	  })), /*#__PURE__*/React__default['default'].createElement(designSystem.Box, {
	    display: "inline",
	    position: "relative",
	    top: "-20px"
	  }, /*#__PURE__*/React__default['default'].createElement(designSystem.Illustration, {
	    variant: "FlagInCog",
	    width: 82,
	    height: 91
	  })))), /*#__PURE__*/React__default['default'].createElement(designSystem.Box, {
	    as: "form",
	    action: action,
	    method: "POST",
	    p: "x3",
	    flexGrow: 1,
	    width: ['100%', '100%', '480px']
	  }, /*#__PURE__*/React__default['default'].createElement(designSystem.H5, {
	    marginBottom: "xxl"
	  }, branding.logo ? /*#__PURE__*/React__default['default'].createElement(StyledLogo$3, {
	    src: branding.logo,
	    alt: branding.companyName
	  }) : branding.companyName), message && /*#__PURE__*/React__default['default'].createElement(designSystem.MessageBox, {
	    my: "lg",
	    message: message.split(' ').length > 1 ? message : translateMessage(message),
	    variant: "danger"
	  }), /*#__PURE__*/React__default['default'].createElement(designSystem.FormGroup, null, /*#__PURE__*/React__default['default'].createElement(designSystem.Label, {
	    required: true
	  }, translateProperty('email')), /*#__PURE__*/React__default['default'].createElement(designSystem.Input, {
	    name: "email",
	    placeholder: translateProperty('email')
	  })), /*#__PURE__*/React__default['default'].createElement(designSystem.FormGroup, null, /*#__PURE__*/React__default['default'].createElement(designSystem.Label, {
	    required: true
	  }, translateProperty('password')), /*#__PURE__*/React__default['default'].createElement(designSystem.Input, {
	    type: "password",
	    name: "password",
	    placeholder: translateProperty('password'),
	    autoComplete: "new-password"
	  })), /*#__PURE__*/React__default['default'].createElement(designSystem.Text, {
	    mt: "xl",
	    textAlign: "center"
	  }, /*#__PURE__*/React__default['default'].createElement(designSystem.Button, {
	    variant: "primary"
	  }, translateButton('login'))))), branding.softwareBrothers ? /*#__PURE__*/React__default['default'].createElement(designSystem.Box, {
	    mt: "xxl"
	  }, /*#__PURE__*/React__default['default'].createElement(designSystem.SoftwareBrothers, null)) : null);
	};

	const Login = allowOverride(LoginOriginal, 'Login');

	const Wrapper$2 = styled__default['default'](designSystem.Box).withConfig({
	  displayName: "forgot-password__Wrapper",
	  componentId: "w4phas-0"
	})(["align-items:center;justify-content:center;flex-direction:column;height:100%;"]);
	const StyledLogo$2 = styled__default['default'].img.withConfig({
	  displayName: "forgot-password__StyledLogo",
	  componentId: "w4phas-1"
	})(["max-width:200px;margin:", " 0;"], designSystem.themeGet('space', 'md'));

	const ForgotPasswordOriginal = props => {
	  const {
	    action
	  } = props;
	  const {
	    translateLabel,
	    translateMessage
	  } = useTranslation();
	  const branding = reactRedux.useSelector(state => state.branding);
	  return /*#__PURE__*/React__default['default'].createElement(Wrapper$2, {
	    flex: true,
	    variant: "grey"
	  }, /*#__PURE__*/React__default['default'].createElement(designSystem.Box, {
	    bg: "white",
	    height: "440px",
	    flex: true,
	    boxShadow: "login",
	    width: [1, 2 / 3, 'auto']
	  }, /*#__PURE__*/React__default['default'].createElement(designSystem.Box, {
	    bg: "primary100",
	    color: "white",
	    p: "x3",
	    width: "380px",
	    flexGrow: 0,
	    display: ['none', 'none', 'block'],
	    position: "relative"
	  }, /*#__PURE__*/React__default['default'].createElement(designSystem.H2, {
	    fontWeight: "lighter"
	  }, translateLabel('loginWelcome')), /*#__PURE__*/React__default['default'].createElement(designSystem.Text, {
	    fontWeight: "lighter",
	    mt: "default"
	  }, translateMessage('loginWelcome')), /*#__PURE__*/React__default['default'].createElement(designSystem.Text, {
	    textAlign: "center",
	    p: "xxl"
	  }, /*#__PURE__*/React__default['default'].createElement(designSystem.Box, {
	    display: "inline",
	    mr: "default"
	  }, /*#__PURE__*/React__default['default'].createElement(designSystem.Illustration, {
	    variant: "Planet",
	    width: 82,
	    height: 91
	  })), /*#__PURE__*/React__default['default'].createElement(designSystem.Box, {
	    display: "inline"
	  }, /*#__PURE__*/React__default['default'].createElement(designSystem.Illustration, {
	    variant: "Astronaut",
	    width: 82,
	    height: 91
	  })), /*#__PURE__*/React__default['default'].createElement(designSystem.Box, {
	    display: "inline",
	    position: "relative",
	    top: "-20px"
	  }, /*#__PURE__*/React__default['default'].createElement(designSystem.Illustration, {
	    variant: "FlagInCog",
	    width: 82,
	    height: 91
	  })))), /*#__PURE__*/React__default['default'].createElement(designSystem.Box, {
	    as: "form",
	    action: action,
	    method: "POST",
	    p: "x3",
	    flexGrow: 1,
	    width: ['100%', '100%', '480px']
	  }, /*#__PURE__*/React__default['default'].createElement(designSystem.H5, {
	    marginBottom: "xxl"
	  }, branding.logo ? /*#__PURE__*/React__default['default'].createElement(StyledLogo$2, {
	    src: branding.logo,
	    alt: branding.companyName
	  }) : branding.companyName), /*#__PURE__*/React__default['default'].createElement(designSystem.Text, {
	    mt: "xl",
	    textAlign: "center"
	  }, "Forgot password not implemented yet."))), branding.softwareBrothers ? /*#__PURE__*/React__default['default'].createElement(designSystem.Box, {
	    mt: "xxl"
	  }, /*#__PURE__*/React__default['default'].createElement(designSystem.SoftwareBrothers, null)) : null);
	};

	const ForgotPassword = allowOverride(ForgotPasswordOriginal, 'ForgotPassword');

	const Wrapper$1 = styled__default['default'](designSystem.Box).withConfig({
	  displayName: "change-password__Wrapper",
	  componentId: "sc-23muzi-0"
	})(["align-items:center;justify-content:center;flex-direction:column;height:100%;"]);
	const StyledLogo$1 = styled__default['default'].img.withConfig({
	  displayName: "change-password__StyledLogo",
	  componentId: "sc-23muzi-1"
	})(["max-width:200px;margin:", " 0;"], designSystem.themeGet('space', 'md'));

	const ChangePasswordOriginal = props => {
	  const {
	    action
	  } = props;
	  const {
	    translateLabel,
	    translateMessage
	  } = useTranslation();
	  const branding = reactRedux.useSelector(state => state.branding);
	  return /*#__PURE__*/React__default['default'].createElement(Wrapper$1, {
	    flex: true,
	    variant: "grey"
	  }, /*#__PURE__*/React__default['default'].createElement(designSystem.Box, {
	    bg: "white",
	    height: "440px",
	    flex: true,
	    boxShadow: "login",
	    width: [1, 2 / 3, 'auto']
	  }, /*#__PURE__*/React__default['default'].createElement(designSystem.Box, {
	    bg: "primary100",
	    color: "white",
	    p: "x3",
	    width: "380px",
	    flexGrow: 0,
	    display: ['none', 'none', 'block'],
	    position: "relative"
	  }, /*#__PURE__*/React__default['default'].createElement(designSystem.H2, {
	    fontWeight: "lighter"
	  }, translateLabel('loginWelcome')), /*#__PURE__*/React__default['default'].createElement(designSystem.Text, {
	    fontWeight: "lighter",
	    mt: "default"
	  }, translateMessage('loginWelcome')), /*#__PURE__*/React__default['default'].createElement(designSystem.Text, {
	    textAlign: "center",
	    p: "xxl"
	  }, /*#__PURE__*/React__default['default'].createElement(designSystem.Box, {
	    display: "inline",
	    mr: "default"
	  }, /*#__PURE__*/React__default['default'].createElement(designSystem.Illustration, {
	    variant: "Planet",
	    width: 82,
	    height: 91
	  })), /*#__PURE__*/React__default['default'].createElement(designSystem.Box, {
	    display: "inline"
	  }, /*#__PURE__*/React__default['default'].createElement(designSystem.Illustration, {
	    variant: "Astronaut",
	    width: 82,
	    height: 91
	  })), /*#__PURE__*/React__default['default'].createElement(designSystem.Box, {
	    display: "inline",
	    position: "relative",
	    top: "-20px"
	  }, /*#__PURE__*/React__default['default'].createElement(designSystem.Illustration, {
	    variant: "FlagInCog",
	    width: 82,
	    height: 91
	  })))), /*#__PURE__*/React__default['default'].createElement(designSystem.Box, {
	    as: "form",
	    action: action,
	    method: "POST",
	    p: "x3",
	    flexGrow: 1,
	    width: ['100%', '100%', '480px']
	  }, /*#__PURE__*/React__default['default'].createElement(designSystem.H5, {
	    marginBottom: "xxl"
	  }, branding.logo ? /*#__PURE__*/React__default['default'].createElement(StyledLogo$1, {
	    src: branding.logo,
	    alt: branding.companyName
	  }) : branding.companyName), /*#__PURE__*/React__default['default'].createElement(designSystem.Text, {
	    mt: "xl",
	    textAlign: "center"
	  }, "Change password not implemented yet."))), branding.softwareBrothers ? /*#__PURE__*/React__default['default'].createElement(designSystem.Box, {
	    mt: "xxl"
	  }, /*#__PURE__*/React__default['default'].createElement(designSystem.SoftwareBrothers, null)) : null);
	};

	const ChangePassword = allowOverride(ChangePasswordOriginal, 'ChangePassword');

	const Wrapper = styled__default['default'](designSystem.Box).withConfig({
	  displayName: "signup__Wrapper",
	  componentId: "eu1rs5-0"
	})(["align-items:center;justify-content:center;flex-direction:column;height:100%;"]);
	const StyledLogo = styled__default['default'].img.withConfig({
	  displayName: "signup__StyledLogo",
	  componentId: "eu1rs5-1"
	})(["max-width:200px;margin:", " 0;"], designSystem.themeGet('space', 'md'));

	const SignupOriginal = props => {
	  const {
	    action
	  } = props;
	  const {
	    translateLabel,
	    translateMessage
	  } = useTranslation();
	  const branding = reactRedux.useSelector(state => state.branding);
	  return /*#__PURE__*/React__default['default'].createElement(Wrapper, {
	    flex: true,
	    variant: "grey"
	  }, /*#__PURE__*/React__default['default'].createElement(designSystem.Box, {
	    bg: "white",
	    height: "440px",
	    flex: true,
	    boxShadow: "login",
	    width: [1, 2 / 3, 'auto']
	  }, /*#__PURE__*/React__default['default'].createElement(designSystem.Box, {
	    bg: "primary100",
	    color: "white",
	    p: "x3",
	    width: "380px",
	    flexGrow: 0,
	    display: ['none', 'none', 'block'],
	    position: "relative"
	  }, /*#__PURE__*/React__default['default'].createElement(designSystem.H2, {
	    fontWeight: "lighter"
	  }, translateLabel('loginWelcome')), /*#__PURE__*/React__default['default'].createElement(designSystem.Text, {
	    fontWeight: "lighter",
	    mt: "default"
	  }, translateMessage('loginWelcome')), /*#__PURE__*/React__default['default'].createElement(designSystem.Text, {
	    textAlign: "center",
	    p: "xxl"
	  }, /*#__PURE__*/React__default['default'].createElement(designSystem.Box, {
	    display: "inline",
	    mr: "default"
	  }, /*#__PURE__*/React__default['default'].createElement(designSystem.Illustration, {
	    variant: "Planet",
	    width: 82,
	    height: 91
	  })), /*#__PURE__*/React__default['default'].createElement(designSystem.Box, {
	    display: "inline"
	  }, /*#__PURE__*/React__default['default'].createElement(designSystem.Illustration, {
	    variant: "Astronaut",
	    width: 82,
	    height: 91
	  })), /*#__PURE__*/React__default['default'].createElement(designSystem.Box, {
	    display: "inline",
	    position: "relative",
	    top: "-20px"
	  }, /*#__PURE__*/React__default['default'].createElement(designSystem.Illustration, {
	    variant: "FlagInCog",
	    width: 82,
	    height: 91
	  })))), /*#__PURE__*/React__default['default'].createElement(designSystem.Box, {
	    as: "form",
	    action: action,
	    method: "POST",
	    p: "x3",
	    flexGrow: 1,
	    width: ['100%', '100%', '480px']
	  }, /*#__PURE__*/React__default['default'].createElement(designSystem.H5, {
	    marginBottom: "xxl"
	  }, branding.logo ? /*#__PURE__*/React__default['default'].createElement(StyledLogo, {
	    src: branding.logo,
	    alt: branding.companyName
	  }) : branding.companyName), /*#__PURE__*/React__default['default'].createElement(designSystem.Text, {
	    mt: "xl",
	    textAlign: "center"
	  }, "Signup not implemented yet."))), branding.softwareBrothers ? /*#__PURE__*/React__default['default'].createElement(designSystem.Box, {
	    mt: "xxl"
	  }, /*#__PURE__*/React__default['default'].createElement(designSystem.SoftwareBrothers, null)) : null);
	};

	const Signup = allowOverride(SignupOriginal, 'Signup');

	const GlobalStyle = styled.createGlobalStyle`
  html, body, #app {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }
`;

	const LoginApp = props => {
	  const h = new ViewHelpers();
	  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(GlobalStyle, null), /*#__PURE__*/React__default['default'].createElement(reactRouter.Switch, null, /*#__PURE__*/React__default['default'].createElement(reactRouter.Route, {
	    path: h.forgotPasswordUrl()
	  }, /*#__PURE__*/React__default['default'].createElement(ForgotPassword, props)), /*#__PURE__*/React__default['default'].createElement(reactRouter.Route, {
	    path: h.changePasswordUrl()
	  }, /*#__PURE__*/React__default['default'].createElement(ChangePassword, props)), /*#__PURE__*/React__default['default'].createElement(reactRouter.Route, {
	    path: h.signupUrl()
	  }, /*#__PURE__*/React__default['default'].createElement(Signup, props)), /*#__PURE__*/React__default['default'].createElement(reactRouter.Route, null, /*#__PURE__*/React__default['default'].createElement(Login, props))));
	};

	const DROP_NOTICE = 'DROP_NOTICE';

	const ASSETS_INITIALIZE = 'ASSETS_INITIALIZE';

	const BRANDING_INITIALIZE = 'BRANDING_INITIALIZE';

	const DASHBOARD_INITIALIZE = 'DASHBOARD_INITIALIZE';

	const LOCALE_INITIALIZE = 'LOCALE_INITIALIZE';

	const PAGES_INITIALIZE = 'PAGES_INITIALIZE';

	const PATHS_INITIALIZE = 'PATHS_INITIALIZE';

	const RESOURCES_INITIALIZE = 'RESOURCES_INITIALIZE';

	const VERSIONS_INITIALIZE = 'VERSIONS_INITIALIZE';

	const SET_NOTICE_PROGRESS = 'SET_NOTICE_PROGRESS';

	const DEFAULT_PATHS = {
	  rootPath: '/admin',
	  logoutPath: '/admin/logout',
	  impersonatePath: '/admin/impersonate',
	  impersonateLogoutPath: '/admin/impersonate/logout',
	  loginPath: '/admin/login',
	  signupPath: '/admin/signup',
	  forgotPasswordPath: '/admin/forgot-password',
	  changePasswordPath: '/admin/change-password',
	};

	/* eslint-disable @typescript-eslint/explicit-function-return-type */

	const resourcesReducer = (state = [], action) => {
	  switch (action.type) {
	    case RESOURCES_INITIALIZE:
	      return action.data;

	    default:
	      return state;
	  }
	};

	const pagesReducer = (state = [], action) => {
	  switch (action.type) {
	    case PAGES_INITIALIZE:
	      return action.data;

	    default:
	      return state;
	  }
	};

	const localesReducer = (state = {
	  language: 'en',
	  translations: {}
	}, action) => {
	  switch (action.type) {
	    case LOCALE_INITIALIZE:
	      return action.data;

	    default:
	      return state;
	  }
	};

	const brandingReducer = (state = {}, action) => {
	  switch (action.type) {
	    case BRANDING_INITIALIZE:
	      return action.data;

	    default:
	      return state;
	  }
	};

	const assetsReducer = (state = {}, action) => {
	  switch (action.type) {
	    case ASSETS_INITIALIZE:
	      return action.data;

	    default:
	      return state;
	  }
	};

	const pathsReducer = (state = DEFAULT_PATHS, action) => {
	  switch (action.type) {
	    case PATHS_INITIALIZE:
	      return action.data;

	    default:
	      return state;
	  }
	};

	const dashboardReducer = (state = {}, action) => {
	  switch (action.type) {
	    case DASHBOARD_INITIALIZE:
	      return action.data;

	    default:
	      return state;
	  }
	};

	const sessionReducer = (state = null, action) => {
	  switch (action.type) {
	    case SESSION_INITIALIZE:
	      return action.data;

	    default:
	      return state;
	  }
	};

	const versionsReducer = (state = {}, action) => {
	  switch (action.type) {
	    case VERSIONS_INITIALIZE:
	      return {
	        admin: action.data.admin,
	        app: action.data.app
	      };

	    default:
	      return state;
	  }
	};

	const noticesReducer = (state = [], action) => {
	  switch (action.type) {
	    case ADD_NOTICE:
	      {
	        const notices = [action.data];
	        return notices;
	      }

	    case DROP_NOTICE:
	      {
	        return state.filter(notice => notice.id !== action.data.noticeId);
	      }

	    case SET_NOTICE_PROGRESS:
	      {
	        return state.map(notice => ({ ...notice,
	          progress: notice.id === action.data.noticeId ? action.data.progress : notice.progress
	        }));
	      }

	    default:
	      return state;
	  }
	};

	const reducer = redux.combineReducers({
	  resources: resourcesReducer,
	  branding: brandingReducer,
	  assets: assetsReducer,
	  paths: pathsReducer,
	  session: sessionReducer,
	  dashboard: dashboardReducer,
	  notices: noticesReducer,
	  versions: versionsReducer,
	  pages: pagesReducer,
	  locale: localesReducer
	});
	var createStore = ((initialState = {}) => redux.createStore(reducer, initialState));

	const env = {
	  NODE_ENV: "development" 
	};
	const store = createStore(window.REDUX_STATE);
	const theme = window.THEME;
	const login = window.LOGIN;
	const {
	  locale
	} = window.REDUX_STATE;
	i18n__default['default'].use(reactI18next.initReactI18next).init({
	  resources: {
	    [locale.language]: {
	      translation: locale.translations
	    }
	  },
	  lng: locale.language,
	  interpolation: {
	    escapeValue: false
	  }
	});
	const Application = /*#__PURE__*/React__default['default'].createElement(reactRedux.Provider, {
	  store: store
	}, /*#__PURE__*/React__default['default'].createElement(reactI18next.I18nextProvider, {
	  i18n: i18n__default['default']
	}, /*#__PURE__*/React__default['default'].createElement(styled.ThemeProvider, {
	  theme: theme
	}, /*#__PURE__*/React__default['default'].createElement(reactRouterDom.BrowserRouter, null, /*#__PURE__*/React__default['default'].createElement(LoginApp, {
	  action: login.action,
	  message: login.errorMessage
	}))))); // eslint-disable-next-line no-undef

	window.regeneratorRuntime = regenerator;
	var bundleLoginEntry = {
	  Application,
	  // Review It
	  ApiClient,
	  ViewHelpers,
	  UserComponents: {},
	  env
	};

	return bundleLoginEntry;

}(React, ReactRedux, ReactRouterDOM, ReactI18Next, i18n, styled, ReactRouter, AdminBroDesignSystem, axios, flat, Redux));
