var AdminBro = (function (React, reactRedux, reactRouterDom, styled, reactI18next, i18n, DesignSystem, reactRouter, axios, flat$1, redux, require$$4, Select, Select$1) {
	'use strict';

	function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

	function _interopNamespace(e) {
		if (e && e.__esModule) return e;
		var n = Object.create(null);
		if (e) {
			Object.keys(e).forEach(function (k) {
				if (k !== 'default') {
					var d = Object.getOwnPropertyDescriptor(e, k);
					Object.defineProperty(n, k, d.get ? d : {
						enumerable: true,
						get: function () {
							return e[k];
						}
					});
				}
			});
		}
		n['default'] = e;
		return Object.freeze(n);
	}

	var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
	var reactRedux__default = /*#__PURE__*/_interopDefaultLegacy(reactRedux);
	var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);
	var i18n__default = /*#__PURE__*/_interopDefaultLegacy(i18n);
	var DesignSystem__namespace = /*#__PURE__*/_interopNamespace(DesignSystem);
	var axios__default = /*#__PURE__*/_interopDefaultLegacy(axios);
	var flat__namespace = /*#__PURE__*/_interopNamespace(flat$1);
	var redux__default = /*#__PURE__*/_interopDefaultLegacy(redux);
	var require$$4__default = /*#__PURE__*/_interopDefaultLegacy(require$$4);
	var Select__default = /*#__PURE__*/_interopDefaultLegacy(Select);
	var Select__default$1 = /*#__PURE__*/_interopDefaultLegacy(Select$1);

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

	let globalAny$2 = {};

	try {
	  globalAny$2 = window;
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

	    return options || ((_globalAny$REDUX_STAT = globalAny$2.REDUX_STATE) === null || _globalAny$REDUX_STAT === void 0 ? void 0 : _globalAny$REDUX_STAT.paths);
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

	const StyledLogo = styled__default['default'](reactRouterDom.Link).withConfig({
	  displayName: "sidebar-branding__StyledLogo",
	  componentId: "sc-1ozeetj-0"
	})(["text-align:center;display:flex;align-content:center;justify-content:center;flex-shrink:0;padding:", " ", " ", ";text-decoration:none;& > h1{text-decoration:none;font-weight:", ";font-size:", ";color:", ";font-size:", ";line-height:", ";}& > img{max-width:170px;}&:hover h1{color:", ";}"], DesignSystem.themeGet('space', 'lg'), DesignSystem.themeGet('space', 'xxl'), DesignSystem.themeGet('space', 'xxl'), DesignSystem.themeGet('fontWeights', 'bolder'), DesignSystem.themeGet('fontWeights', 'bolder'), DesignSystem.themeGet('colors', 'grey80'), DesignSystem.themeGet('fontSizes', 'xl'), DesignSystem.themeGet('lineHeights', 'xl'), DesignSystem.themeGet('colors', 'primary100'));
	const h$4 = new ViewHelpers();

	const SidebarBranding = props => {
	  const {
	    branding
	  } = props;
	  const {
	    logo,
	    companyName
	  } = branding;
	  return /*#__PURE__*/React__default['default'].createElement(StyledLogo, {
	    className: DesignSystem.cssClass('Logo'),
	    to: h$4.dashboardUrl()
	  }, logo ? /*#__PURE__*/React__default['default'].createElement("img", {
	    src: logo,
	    alt: companyName
	  }) : /*#__PURE__*/React__default['default'].createElement("h1", null, companyName));
	};

	var SidebarBranding$1 = allowOverride(SidebarBranding, 'SidebarBranding');

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

	const h$3 = new ViewHelpers();

	const SidebarPages = props => {
	  const {
	    pages
	  } = props;
	  const {
	    translateLabel
	  } = useTranslation();
	  const location = reactRouter.useLocation();
	  const history = reactRouter.useHistory();

	  if (!pages || !pages.length) {
	    return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null);
	  }

	  const isActive = page => !!location.pathname.match(`/pages/${page.name}`);

	  const elements = pages.map(page => ({
	    id: page.name,
	    label: page.name,
	    isSelected: isActive(page),
	    icon: page.icon,
	    href: h$3.pageUrl(page.name),
	    onClick: (event, element) => {
	      event.preventDefault();

	      if (element.href) {
	        history.push(element.href);
	      }
	    }
	  }));
	  return /*#__PURE__*/React__default['default'].createElement(DesignSystem.Navigation, {
	    label: translateLabel('pages'),
	    elements: elements
	  });
	};

	const SidebarFooter = () => /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	  mt: "lg"
	}, /*#__PURE__*/React__default['default'].createElement(DesignSystem.SoftwareBrothers, null));

	var SidebarFooter$1 = allowOverride(SidebarFooter, 'SidebarFooter');

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

	const FORM_VALUE_NULL = '__FORM_VALUE_NULL__';
	const FORM_VALUE_EMPTY_OBJECT = '__FORM_VALUE_EMPTY_OBJECT__';
	const FORM_VALUE_EMPTY_ARRAY = '__FORM_VALUE_EMPTY_ARRAY__';

	const isObjectOrArray = value => typeof value === 'object' && value.constructor !== File && !(value instanceof Date);
	/**
	 * Changes RecordJSON that it can be send as a FormData to the backend.
	 *
	 * FormData is required because we are sending files via the wire. But it has limitations.
	 * Namely it can only transport files and strings. That is why we have to convert some
	 * standard types like NULL to constants so they can be property converted back by the backend.
	 * And thus properly handled.
	 *
	 * @private
	 * @param   {RecordJSON}  record
	 * @return  {FormData}
	 */


	function paramsToFormData(params) {
	  const formData = new FormData(); // Assume that params are flatted

	  Object.entries(params).forEach(([key, value]) => {
	    // {@link updateRecord} does not change empty objects "{}" - so in order to prevent having
	    // them changed to "[object Object]" we have to set them to empty strings.
	    if (value === null) {
	      return formData.set(key, FORM_VALUE_NULL);
	    } // File objects has to go through because they are handled by FormData


	    if (isObjectOrArray(value)) {
	      if (Array.isArray(value)) {
	        return formData.set(key, FORM_VALUE_EMPTY_ARRAY);
	      }

	      return formData.set(key, FORM_VALUE_EMPTY_OBJECT);
	    } // Rest goes as a standard value


	    return formData.set(key, value);
	  });
	  return formData;
	}

	const ADD_NOTICE = 'ADD_NOTICE';
	const addNotice = (data = {
	  message: ''
	}) => ({
	  type: ADD_NOTICE,
	  data: {
	    message: data.message,
	    id: Math.random().toString(36).substr(2, 9),
	    type: data.type || 'success',
	    progress: 0
	  }
	});

	/**
	 * @classdesc
	 * Hook which allows you to add notice message to the app.
	 *
	 * ```javascript
	 * import { useNotice, Button } from 'admin-bro'
	 *
	 * const myComponent = () => {
	 *   const sendNotice = useNotice()
	 *   render (
	 *     <Button onClick={() => sendNotice({ message: 'I am awesome' })}>I am awesome</Button>
	 *   )
	 * }
	 * ```
	 *
	 * @class
	 * @subcategory Hooks
	 * @bundle
	 * @hideconstructor
	 */
	const useNotice = () => {
	  const dispatch = reactRedux.useDispatch();
	  return notice => dispatch(addNotice(notice));
	};

	/**
	 * Handlers of all [Actions]{@link Action} of type `record` returns record.
	 * Depending on a place and response we have to merge what was returned
	 * to the actual state. It is done in following places:
	 * - {@link useRecord} hook
	 * - {@link RecordInList} component
	 * - {@link RecordAction} component
	 *
	 * @private
	 */
	const mergeRecordResponse = (record, response) => ({ // we start from the response because it can have different recordActions or bulkActions
	  ...(response.record || record),
	  // records has to be reset every time because so that user wont
	  // see old errors which are not relevant anymore
	  errors: response.record.errors,
	  populated: { ...record.populated,
	    ...response.record.populated
	  },
	  params: { ...record.params,
	    ...response.record.params
	  }
	});

	const DELIMITER = '.';

	// this is the regex used to find all existing properties starting with a key
	const propertyKeyRegex = (propertyPath, options) => {
	  const delimiter = new RegExp(`\\${DELIMITER}`, 'g');
	  const escapedDelimiter = `\\${DELIMITER}`; // but for `nested.1.property.0` it will produce `nested(\.|\.\d+\.)1(\.|\.\d+\.)property.0`
	  // and this is intentional because user can give an one index in property path for with deeply
	  // nested arrays

	  const escapedDelimiterOrIndex = `(${escapedDelimiter}|${escapedDelimiter}\\d+${escapedDelimiter})`;
	  const path = options !== null && options !== void 0 && options.includeAllSiblings ? propertyPath.replace(delimiter, escapedDelimiterOrIndex) : propertyPath.replace(delimiter, escapedDelimiter);
	  return new RegExp(`^${path}($|${escapedDelimiter})`, '');
	};

	/**
	 * @load ./select-params.doc.md
	 * @memberof module:flat
	 * @param {FlattenParams} params
	 * @param {string | Array<string>} properties
	 * @param {GetOptions} [options]
	 * @returns {FlattenParams}
	 */
	const selectParams = (params, properties, options) => {
	  const propertyArray = Array.isArray(properties) ? properties : [properties];
	  const selected = propertyArray.filter(propertyPath => !!propertyPath).reduce((globalMemo, propertyPath) => {
	    const regex = propertyKeyRegex(propertyPath, options);
	    const filtered = Object.keys(params) // filter all keys which starts with property path
	    .filter(key => key.match(regex)).reduce((memo, key) => {
	      memo[key] = params[key];
	      return memo;
	    }, {});
	    return { ...globalMemo,
	      ...filtered
	    };
	  }, {});
	  return selected;
	};

	/**
	 * @load ./filter-out-params.doc.md
	 * @memberof module:flat
	 * @param {FlattenParams} params
	 * @param {string | Array<string>} properties
	 * @returns {FlattenParams}
	 */
	const filterOutParams = (params, properties) => {
	  const propertyArray = Array.isArray(properties) ? properties : [properties];
	  return propertyArray.filter(propertyPath => !!propertyPath).reduce((globalFiltered, propertyPath) => {
	    const regex = propertyKeyRegex(propertyPath);
	    return Object.keys(globalFiltered).filter(key => !key.match(regex)).reduce((memo, key) => {
	      memo[key] = params[key];
	      return memo;
	    }, {});
	  }, params);
	};

	/**
	 * @memberof module:flat
	 * @alias PathToPartsOptions
	 */

	/**
	 * @load ./path-to-parts.doc.md
	 * @param   {string}              propertyPath
	 * @param   {PathToPartsOptions}  options
	 * @returns  {PathParts}
	 *
	 * @memberof module:flat
	 * @alias pathToParts
	 */
	const pathToParts = (propertyPath, options = {}) => {
	  let allParts = propertyPath.split('.');

	  if (options.skipArrayIndexes) {
	    // eslint-disable-next-line no-restricted-globals
	    allParts = allParts.filter(part => isNaN(+part));
	  }

	  return allParts.reduce((memo, part) => {
	    if (memo.length) {
	      return [...memo, [memo[memo.length - 1], part].join('.')];
	    }

	    return [part];
	  }, []);
	};

	const isObject = value => {
	  // Node environment
	  if (typeof File === 'undefined') {
	    return typeof value === 'object' && value !== null;
	  } // Window environment


	  return typeof value === 'object' && !(value instanceof File) && value !== null;
	};
	/**
	 * @load ./set.doc.md
	 * @memberof module:flat
	 * @param {FlattenParams} params
	 * @param {string} propertyPath
	 * @param {any} [value]       if not give function will only try to remove old keys
	 * @returns {FlattenParams}
	 */


	const set = (params = {}, propertyPath, value) => {
	  const regex = propertyKeyRegex(propertyPath); // remove all existing keys

	  const paramsCopy = Object.keys(params).filter(key => !key.match(regex)).reduce((memo, key) => {
	    memo[key] = params[key];
	    return memo;
	  }, {});

	  if (typeof value !== 'undefined') {
	    if (isObject(value) && !(value instanceof Date)) {
	      const flattened = flat$1.flatten(value);

	      if (Object.keys(flattened).length) {
	        Object.keys(flattened).forEach(key => {
	          paramsCopy[`${propertyPath}${DELIMITER}${key}`] = flattened[key];
	        });
	      } else if (Array.isArray(value)) {
	        paramsCopy[propertyPath] = [];
	      } else {
	        paramsCopy[propertyPath] = {};
	      }
	    } else {
	      paramsCopy[propertyPath] = value;
	    } // when user gave { "nested.value": "something" } and had "nested" set to `null`, then
	    // nested should be removed


	    const parts = pathToParts(propertyPath).slice(0, -1);

	    if (parts.length) {
	      return Object.keys(paramsCopy).filter(key => !parts.includes(key)).reduce((memo, key) => {
	        memo[key] = paramsCopy[key];
	        return memo;
	      }, {});
	    }
	  }

	  return paramsCopy;
	};

	const TEMP_HOLDING_KEY = 'TEMP_HOLDING_KEY';
	/**
	 * @load ./get.doc.md
	 * @memberof module:flat
	 * @param {FlattenParams}   params      flatten params from which property has to be taken
	 * @param {string}          [propertyPath]  name of the property
	 * @param {GetOptions}      options     options
	 * @returns {any}                       when property key exists directly it returns what is inside,
	 *                                      otherwise it tries to find any nested objects and returns
	 *                                      them
	 */

	const get = (params = {}, propertyPath, options) => {
	  if (!propertyPath) {
	    return flat$1.unflatten(params);
	  } // when object has this key - simply return it
	  // we cannot rely on typeof params[propertyPath !== 'undefined' because params can actually be
	  // undefined and in such case if would pass and function would return [undefined]


	  if (Object.keys(params).find(key => key === propertyPath)) {
	    return params[propertyPath];
	  }

	  const regex = propertyKeyRegex(propertyPath, options);
	  const selectedParams = selectParams(params, propertyPath, options);
	  const nestedProperties = Object.keys(selectedParams).reduce((memo, key, index) => {
	    let newKey = key.replace(regex, `${TEMP_HOLDING_KEY}${DELIMITER}`); // when user wants to take allSiblings we have to fix the indexes so nested items from
	    // different siblings don't overlap
	    //
	    // Example for key `nested.1.el`:
	    //  'nested.0.el.0.value': 'val0.0',
	    //  'nested.0.el.1.value': 'val0.1',
	    //  'nested.1.el.0.value': 'val1',
	    //  'nested.1.el.1.value': 'val2',
	    //
	    // has to be changed to:
	    //  'TEMP_HOLDING_KEY.0.value': 'val0.0',
	    //  'TEMP_HOLDING_KEY.1.value': 'val0.1',
	    //  'TEMP_HOLDING_KEY.2.value': 'val1',
	    //  'TEMP_HOLDING_KEY.3.value': 'val2',

	    if (options !== null && options !== void 0 && options.includeAllSiblings) {
	      newKey = newKey.replace(new RegExp(`${TEMP_HOLDING_KEY}\\${DELIMITER}(\\d*)`), `${TEMP_HOLDING_KEY}${DELIMITER}${index}`);
	    }

	    memo[newKey] = selectedParams[key];
	    return memo;
	  }, {});

	  if (Object.keys(nestedProperties).length) {
	    return flat$1.unflatten(nestedProperties)[TEMP_HOLDING_KEY];
	  }

	  return undefined;
	};

	/**
	 * Merges params together and returns flatten result
	 *
	 * @param {any} params
	 * @param {Array<any>} ...mergeParams
	 * @returns {FlattenParams}
	 * @memberof module:flat
	 */

	const merge = (params = {}, ...mergeParams) => {
	  const flattenParams = flat$1.flatten(params); // reverse because we merge from right

	  return mergeParams.reverse().reduce((globalMemo, mergeParam) => Object.keys(mergeParam).reduce((memo, key) => set(memo, key, mergeParam[key]), globalMemo), flattenParams);
	};

	/**
	 * @load ./remove-path.doc.md
	 * @memberof module:flat
	 * @param {FlattenParams} params
	 * @param {...string} properties
	 * @returns {FlattenParams}
	 */

	const removePath = (params, path) => {
	  // by default simply filter out elements from the object
	  let filtered = filterOutParams(params, path); // reverse means that we iterate from the closes parent

	  const parentPaths = pathToParts(path).reverse(); // but if one of the parent is an array

	  parentPaths.find((parentPath, parentIndex) => {
	    const parent = get(params, parentPath);

	    if (Array.isArray(parent)) {
	      // previous element is stringified index like 'property.1'
	      const previousPaths = parentPaths[parentIndex - 1].split(DELIMITER); // so this is the index: 1

	      const previousPathIndex = previousPaths[previousPaths.length - 1];
	      parent.splice(+previousPathIndex, 1);
	      filtered = set(params, parentPath, parent); // this works just for the firstly found array item, because in case of removing the last one
	      // it leaves `[]` as a value.

	      return true;
	    }

	    return false;
	  });
	  return filtered;
	};

	/**
	 * @module flat
	 * @name flat
	 * @new in version 3.3
	 * @load ./flat.doc.md
	 */
	const flat = {
	  /**
	   * Raw `flatten` function exported from original {@link https://www.npmjs.com/package/flat flat}
	   * package.
	   */
	  flatten: flat$1.flatten,

	  /**
	   * Raw `unflatten` function exported from original {@link https://www.npmjs.com/package/flat flat}
	   * package.
	   */
	  unflatten: flat$1.unflatten,
	  set,
	  get,
	  selectParams,
	  filterOutParams,
	  removePath,
	  DELIMITER,
	  pathToParts,
	  merge
	};

	/**
	 * HOF returning a function which takes a record and returns an updated record.
	 * This way we can pass this to setState in react, which takes old state
	 * (in our case previousRecord) as an argument.
	 *
	 * Function is used when to the {@link OnPropertyChange} callback, user passes
	 * key (property name) and the value (followed by an optional selectedRecord).
	 *
	 * The responsibility of the function is to:
	 * - clear old values under passed key: so when user passes property === `some.key`
	 *   function removes `some.key.1`, `some.key.2` etc
	 * - sets new value under the passed key for primitive types
	 * - in case of objects - it flattens them first and then sets all the resulted values
	 *   under the path provided in the property argument
	 * - it fills value in RecordJSON#populated when selectedRecord is given
	 * - finally it invalidates populated for given property
	 *
	 *
	 * @param {string}      property        property that must be updated, supports nesting
	 *                                      with dots
	 * @param {any}         value           value that must be set, undefined or null if
	 *                                      deleting, will be flattened
	 * @param {RecordJSON}  selectedRecord  if value is reference ID, this must be a record
	 *                                      it's referencing to
	 * @private
	 */
	const updateRecord = (property, value, selectedRecord) => previousRecord => {
	  let populatedModified = false;
	  const populatedCopy = { ...previousRecord.populated
	  };
	  const paramsCopy = flat.set(previousRecord.params, property, value);

	  if (property in populatedCopy) {
	    delete populatedCopy[property];
	    populatedModified = true;
	  }

	  if (selectedRecord) {
	    populatedCopy[property] = selectedRecord;
	    populatedModified = true;
	  }

	  return { ...previousRecord,
	    params: paramsCopy,
	    populated: populatedModified ? populatedCopy : previousRecord.populated
	  };
	};

	const isEntireRecordGiven = (propertyOrRecord, value) => !!(typeof value === 'undefined' && // user can pass property and omit value. This makes sense when
	// third argument of the function (selectedRecord) is passed to onChange
	// callback
	!(typeof propertyOrRecord === 'string') && // we assume that only params has to be given
	propertyOrRecord.params);

	const filterRecordParams = function (record, options = {}) {
	  if (options.includeParams && record) {
	    return { ...record,
	      params: flat.selectParams(record.params || {}, options.includeParams)
	    };
	  }

	  return record;
	};
	const isPropertyPermitted = (propertyName, options = {}) => {
	  const {
	    includeParams
	  } = options;

	  if (includeParams) {
	    const parts = flat.pathToParts(propertyName, {
	      skipArrayIndexes: true
	    });
	    return parts.some(part => includeParams.includes(part));
	  }

	  return true;
	};

	const api$4 = new ApiClient();
	/**
	 * @load ./use-record.doc.md
	 * @subcategory Hooks
	 * @class
	 * @hideconstructor
	 * @bundle
	 * @param {RecordJSON} [initialRecord],
	 * @param {string} resourceId
	 * @param {UseRecordOptions} [options]
	 * @return {UseRecordResult}
	 */

	const useRecord = (initialRecord, resourceId, options) => {
	  // setting up state
	  const [loading, setLoading] = React.useState(false);
	  const [isSynced, setIsSynced] = React.useState(true);
	  const [progress, setProgress] = React.useState(0);
	  const filteredRecord = initialRecord ? filterRecordParams(initialRecord, options) : null;
	  const [record, setRecord] = React.useState({ ...filteredRecord,
	    params: (filteredRecord === null || filteredRecord === void 0 ? void 0 : filteredRecord.params) ?? {},
	    errors: (initialRecord === null || initialRecord === void 0 ? void 0 : initialRecord.errors) ?? {},
	    populated: (initialRecord === null || initialRecord === void 0 ? void 0 : initialRecord.populated) ?? {}
	  }); // it keeps the same format as useState function which can take either value or function

	  const setFilteredRecord = React.useCallback(value => {
	    const newRecord = value instanceof Function ? value(record) : value;
	    setRecord(filterRecordParams(newRecord, options));
	  }, [options, record]);
	  const onNotice = useNotice();
	  const handleChange = React.useCallback((propertyOrRecord, value, incomingRecord) => {
	    if (isEntireRecordGiven(propertyOrRecord, value)) {
	      setFilteredRecord(propertyOrRecord);
	    } else if (isPropertyPermitted(propertyOrRecord, options)) {
	      setRecord(updateRecord(propertyOrRecord, value, incomingRecord));
	    } else {
	      // eslint-disable-next-line no-console
	      console.warn([`You are trying to set property: "${propertyOrRecord}" which`, 'is not permitted. Take a look at `useRecord(..., { includeParams: [...]})`'].join('\n'));
	    }

	    setIsSynced(false);
	  }, [setRecord, options]);
	  const handleSubmit = React.useCallback((customParams = {}, submitOptions) => {
	    setLoading(true);
	    const mergedParams = flat.merge(record.params, customParams);
	    const formData = paramsToFormData(mergedParams);
	    const params = {
	      resourceId,
	      onUploadProgress: e => setProgress(Math.round(e.loaded * 100 / e.total)),
	      data: formData,
	      headers: {
	        'Content-Type': 'multipart/form-data'
	      }
	    };
	    const promise = record.id ? api$4.recordAction({ ...params,
	      actionName: 'edit',
	      recordId: record.id
	    }) : api$4.resourceAction({ ...params,
	      actionName: 'new'
	    });
	    promise.then(response => {
	      if (response.data.notice) {
	        onNotice(response.data.notice);
	      }

	      if ((submitOptions === null || submitOptions === void 0 ? void 0 : submitOptions.updateOnSave) !== false) {
	        setFilteredRecord(prev => mergeRecordResponse(prev, response.data));
	      }

	      setProgress(0);
	      setLoading(false);
	      setIsSynced(true);
	    }).catch(() => {
	      onNotice({
	        message: 'There was an error updating record, Check out console to see more information.',
	        type: 'error'
	      });
	      setProgress(0);
	      setLoading(false);
	    });
	    return promise;
	  }, [record, resourceId, setLoading, setProgress, setRecord]);
	  return {
	    record,
	    handleChange,
	    submit: handleSubmit,
	    loading,
	    progress,
	    setRecord: setFilteredRecord,
	    isSynced
	  };
	};

	const actionHasComponent = action => typeof action.component !== 'undefined' && action.component === false;

	const h$2 = new ViewHelpers();
	const actionHref = (action, params) => {
	  const actionName = action.name;

	  if (!action.component && !action.hasHandler) {
	    return null;
	  }

	  const hrefMap = {
	    record: () => h$2.recordActionUrl({ ...params,
	      actionName
	    }),
	    resource: () => h$2.resourceActionUrl({
	      resourceId: params.resourceId,
	      actionName
	    }),
	    bulk: () => h$2.bulkActionUrl({ ...params,
	      actionName
	    })
	  };

	  if (hrefMap[action.actionType]) {
	    return hrefMap[action.actionType]();
	  }

	  throw new Error('"actionType" should be either record, resource or bulk');
	};

	const api$3 = new ApiClient();
	function callActionApi(action, params, search) {
	  let promise;
	  const {
	    recordId,
	    recordIds,
	    resourceId
	  } = params;

	  switch (action.actionType) {
	    case 'record':
	      if (!recordId) {
	        throw new Error('You have to specify "recordId" for record action');
	      }

	      promise = api$3.recordAction({
	        resourceId,
	        actionName: action.name,
	        recordId,
	        search
	      });
	      break;

	    case 'resource':
	      promise = api$3.resourceAction({
	        resourceId,
	        actionName: action.name
	      });
	      break;

	    case 'bulk':
	      if (!recordIds) {
	        throw new Error('You have to specify "recordIds" for bulk action');
	      }

	      promise = api$3.bulkAction({
	        resourceId,
	        actionName: action.name,
	        recordIds,
	        search
	      });
	      break;

	    default:
	      throw new Error('"actionType" should be either record, resource or bulk');
	  }

	  return promise;
	}

	/* eslint-disable arrow-parens */
	const buildActionCallApiTrigger = options => {
	  const {
	    action,
	    params,
	    actionResponseHandler,
	    search
	  } = options;

	  const callApi = () => {
	    const promise = callActionApi(action, params, search);
	    promise.then(actionResponseHandler).catch(error => {
	      throw error;
	    });
	    return promise;
	  };

	  return callApi;
	};

	const buildActionTestId = action => `action-${action.name}`;

	/* eslint-disable no-restricted-globals */

	const buildActionClickHandler = options => {
	  const {
	    action,
	    params,
	    actionResponseHandler,
	    push
	  } = options;

	  const handleActionClick = event => {
	    event.preventDefault();
	    event.stopPropagation();
	    const href = actionHref(action, params);
	    const callApi = buildActionCallApiTrigger({
	      params,
	      action,
	      actionResponseHandler
	    });

	    if (action.guard && !confirm(action.guard)) {
	      return;
	    }

	    if (actionHasComponent(action)) {
	      callApi();
	    } else if (href) {
	      push(href, {
	        previousPage: window.location.href
	      });
	    }
	  };

	  return handleActionClick;
	};

	const isBulkAction = (params, action) => 'recordIds' in params && action.actionType === 'bulk';

	const isResourceAction = (params, action) => 'recordIds' in params && action.actionType === 'resource';

	const isRecordAction = (params, action) => 'recordId' in params && action.actionType === 'record';

	var Interfaces = /*#__PURE__*/Object.freeze({
		__proto__: null,
		actionHasComponent: actionHasComponent,
		actionHref: actionHref,
		buildActionCallApiTrigger: buildActionCallApiTrigger,
		buildActionTestId: buildActionTestId,
		buildActionClickHandler: buildActionClickHandler,
		callActionApi: callActionApi,
		isBulkAction: isBulkAction,
		isResourceAction: isResourceAction,
		isRecordAction: isRecordAction
	});

	const REFRESH_KEY = 'refresh';
	const IGNORE_PARAMS_KEY = 'ignore_params';
	/**
	 * Adds refresh=true to the url, which in turn should cause list to reload.
	 *
	 * @param {string} url      url to which function should add `refresh`
	 * @param {string} [search] optional search query which should be updated,
	 *                          if not given function will use window.location.search
	 * @private
	 */

	const appendForceRefresh = (url, search) => {
	  const searchParamsIdx = url.lastIndexOf('?');
	  const urlSearchParams = searchParamsIdx !== -1 ? url.substring(searchParamsIdx + 1) : null;
	  const oldParams = new URLSearchParams(search ?? urlSearchParams ?? window.location.search ?? '');
	  const shouldIgnoreOldParams = new URLSearchParams(urlSearchParams || '').get(IGNORE_PARAMS_KEY) === 'true';
	  const newParams = shouldIgnoreOldParams ? new URLSearchParams('') : new URLSearchParams(oldParams.toString());
	  newParams.set(REFRESH_KEY, 'true');
	  const newUrl = searchParamsIdx !== -1 ? url.substring(0, searchParamsIdx) : url;
	  return `${newUrl}?${newParams.toString()}`;
	};
	const hasForceRefresh = search => {
	  const params = new URLSearchParams(search);
	  return !!params.get(REFRESH_KEY);
	};
	const removeForceRefresh = search => {
	  const params = new URLSearchParams(search);

	  if (params.get(REFRESH_KEY)) {
	    params.delete(REFRESH_KEY);
	  }

	  return params.toString();
	};

	/* eslint-disable @typescript-eslint/explicit-function-return-type */
	const useActionResponseHandler = onActionCall => {
	  const location = reactRouter.useLocation();
	  const history = reactRouter.useHistory();
	  const addNotice = useNotice();
	  return response => {
	    const {
	      data
	    } = response;

	    if (data.notice) {
	      addNotice(data.notice);
	    }

	    if (data.redirectUrl && location.pathname !== data.redirectUrl) {
	      const appended = appendForceRefresh(data.redirectUrl);
	      history.push(appended);
	    }

	    if (onActionCall) {
	      onActionCall(data);
	    }
	  };
	};

	/**
	 * @load ./use-action.doc.md
	 * @subcategory Hooks
	 *
	 * @param {ActionJSON}   action      action object
	 * @param {ActionParams} params
	 * @param {ActionCallCallback} onActionCall - callback triggered when action is performed
	 * @return {UseActionResult}
	 * @new In version 3.3
	 * @class
	 * @hideconstructor
	 */

	function useAction(action, params, onActionCall) {
	  const history = reactRouter.useHistory();
	  const actionResponseHandler = useActionResponseHandler(onActionCall);
	  const href = actionHref(action, params);
	  const callApi = buildActionCallApiTrigger({
	    action,
	    params,
	    actionResponseHandler
	  });
	  const handleClick = buildActionClickHandler({
	    action,
	    params,
	    actionResponseHandler,
	    push: history.push
	  });
	  return {
	    href,
	    callApi,
	    handleClick
	  };
	}

	const SESSION_INITIALIZE = 'SESSION_INITIALIZE';
	const setCurrentAdmin = (data = null) => ({
	  type: SESSION_INITIALIZE,
	  data
	});

	/**
	 * @classdesc
	 * Hook which allows you to get and set currentAdmin
	 *
	 * ### Usage
	 *
	 * ```javascript
	 * import { useCurrentAdmin } from 'admin-bro'
	 *
	 * const myComponent = () => {
	 *   const [currentAdmin, setCurrentAdmin] = useCurrentAdmin()
	 *   // ...
	 * }
	 * ```
	 *
	 * @class
	 * @subcategory Hooks
	 * @bundle
	 * @returns {UseCurrentAdminResponse}
	 * @hideconstructor
	 */
	function useCurrentAdmin() {
	  const currentAdmin = reactRedux.useSelector(state => state.session);
	  const dispatch = reactRedux.useDispatch();
	  return [currentAdmin, admin => dispatch(setCurrentAdmin(admin))];
	}
	/**
	 * Result of the {@link useCurrentAdmin}.
	 * It is a tuple containing value and the setter
	 *
	 * @typedef {Array} UseCurrentAdminResponse
	 * @memberof useCurrentAdmin
	 * @alias UseCurrentAdminResponse
	 * @property {CurrentAdmin | null} [0]    current admin
	 * @property {React.Dispatch<React.SetStateAction<CurrentAdmin>>} [1]    value setter compatible
	 *                                                                       with react useState
	 */

	/* eslint-disable no-console */

	/**
	 * @load ./use-local-storage.doc.md
	 * @subcategory Hooks
	 * @class
	 * @see https://usehooks.com/useLocalStorage
	 *
	 * @param {string} key          key under which hook will store the data
	 * @param {T}      initialValue    value which will be stringified and stored
	 * @return {UseLocalStorageResult<T>}
	 * @new In version 3.3
	 * @bundle
	 * @type {Function}
	 */
	function useLocalStorage(key, initialValue) {
	  // State to store our value
	  // Pass initial state function to useState so logic is only executed once
	  const [storedValue, setStoredValue] = React.useState(() => {
	    try {
	      // Get from local storage by key
	      const item = window.localStorage.getItem(key); // Parse stored json or if none return initialValue

	      return item ? JSON.parse(item) : initialValue;
	    } catch (error) {
	      // If error also return initialValue
	      console.log(error);
	      return initialValue;
	    }
	  }); // Return a wrapped version of useState's setter function that ...
	  // ... persists the new value to localStorage.

	  const setValue = value => {
	    try {
	      // Allow value to be a function so we have same API as useState
	      const valueToStore = value instanceof Function ? value(storedValue) : value; // Save state

	      setStoredValue(valueToStore); // Save to local storage

	      window.localStorage.setItem(key, JSON.stringify(valueToStore));
	    } catch (error) {
	      // A more advanced implementation would handle the error case
	      console.log(error);
	    }
	  };

	  return [storedValue, setValue];
	}

	const isSelected = (href, location) => {
	  const regExp = new RegExp(`${href}($|/)`);
	  return !!location.pathname.match(regExp);
	};

	function useNavigationResources(resources) {
	  const [openElements, setOpenElements] = useLocalStorage('sidebarElements', {});
	  const history = reactRouter.useHistory();
	  const location = reactRouter.useLocation();
	  const enrichResource = React.useMemo(() => (resource, icon) => ({
	    href: resource.href || undefined,
	    icon,
	    isSelected: isSelected(resource.href, location),
	    label: resource.name,
	    id: resource.id,
	    onClick: event => {
	      if (resource.href) {
	        event.preventDefault();
	        history.push(resource.href);
	      }
	    }
	  }), [location, history]); // grouping resources into parents

	  const map = resources.filter(res => res.href) // first filter out resource which are not visible
	  .reduce((memo, resource) => {
	    var _resource$navigation, _resource$navigation3;

	    // in case resource has the same name as parent we namespace it wit "resource-""
	    const key = ((_resource$navigation = resource.navigation) === null || _resource$navigation === void 0 ? void 0 : _resource$navigation.name) || ['resource', resource.name].join('-');

	    if (!resource.navigation || resource.navigation.name === null) {
	      var _resource$navigation2;

	      memo[key] = enrichResource(resource, (_resource$navigation2 = resource.navigation) === null || _resource$navigation2 === void 0 ? void 0 : _resource$navigation2.icon);
	    } else if (memo[key] && memo[key].elements && (_resource$navigation3 = resource.navigation) !== null && _resource$navigation3 !== void 0 && _resource$navigation3.name) {
	      memo[key].elements.push(enrichResource(resource));
	    } else {
	      var _resource$navigation4, _resource$navigation5;

	      memo[key] = {
	        elements: [enrichResource(resource)],
	        label: (_resource$navigation4 = resource.navigation) === null || _resource$navigation4 === void 0 ? void 0 : _resource$navigation4.name,
	        icon: (_resource$navigation5 = resource.navigation) === null || _resource$navigation5 === void 0 ? void 0 : _resource$navigation5.icon,
	        onClick: () => setOpenElements({ ...openElements,
	          [key]: !openElements[key]
	        }),
	        isOpen: !!openElements[key]
	      };
	    }

	    return memo;
	  }, {});
	  return Object.values(map);
	}

	const api$2 = new ApiClient();
	/**
	 * @load ./use-records.doc.md
	 * @subcategory Hooks
	 * @class
	 * @hideconstructor
	 *
	 * @param {string} resourceId      id of a resource for which you want to fetch records
	 * @return {UseRecordsResult}
	 * @new In version 3.3
	 * @bundle
	 * @type {Function}
	 */

	function useRecords(resourceId) {
	  const [records, setRecords] = React.useState([]);
	  const [loading, setLoading] = React.useState(false);
	  const [perPage, setPerPage] = React.useState(10);
	  const [page, setPage] = React.useState(1);
	  const [total, setTotal] = React.useState(0);
	  const [direction, setDirection] = React.useState('asc');
	  const [sortBy, setSortBy] = React.useState();
	  const location = reactRouter.useLocation();
	  const history = reactRouter.useHistory();
	  const addNotice = useNotice();
	  const {
	    translateMessage
	  } = useTranslation();
	  const onNotice = useNotice();

	  const fetchData = () => {
	    setLoading(true);
	    const query = new URLSearchParams(location.search);
	    const promise = api$2.resourceAction({
	      actionName: 'list',
	      resourceId,
	      params: query
	    });
	    promise.then(response => {
	      const listActionResponse = response.data;

	      if (listActionResponse.notice) {
	        onNotice(listActionResponse.notice);
	      }

	      if (listActionResponse.redirectUrl) {
	        history.push(listActionResponse.redirectUrl);
	        return;
	      }

	      setRecords(listActionResponse.records);
	      setPage(listActionResponse.meta.page);
	      setPerPage(listActionResponse.meta.perPage);
	      setTotal(listActionResponse.meta.total);
	      setDirection(listActionResponse.meta.direction);
	      setSortBy(listActionResponse.meta.sortBy);
	      setLoading(false);
	    }).catch(() => {
	      addNotice({
	        message: translateMessage('errorFetchingRecords', resourceId),
	        type: 'error'
	      });
	    });
	    return promise;
	  };

	  React.useEffect(() => {
	    if (hasForceRefresh(location.search)) {
	      history.replace([location.pathname, removeForceRefresh(location.search).toString()].join('?'));
	    } else {
	      fetchData();
	    }
	  }, [resourceId, location.search]);
	  return {
	    records,
	    loading,
	    page,
	    total,
	    direction,
	    sortBy,
	    perPage,
	    fetchData
	  };
	}

	/**
	 * @load ./use-selected-records.doc.md
	 * @subcategory Hooks
	 * @class
	 * @hideconstructor
	 * @param {Array<RecordJSON>} records     List of records on which you can perform `select` action
	 * @return {UseSelectedRecordsResult}
	 * @new In version 3.3
	 * @bundle
	 * @type {Function}
	 */
	function useSelectedRecords(records) {
	  const [selectedRecords, setSelectedRecords] = React.useState([]);

	  const handleSelect = record => {
	    const selectedIndex = selectedRecords.findIndex(selected => selected.id === record.id);

	    if (selectedIndex < 0) {
	      setSelectedRecords([...selectedRecords, record]);
	    } else {
	      const newSelectedRecords = [...selectedRecords];
	      newSelectedRecords.splice(selectedIndex, 1);
	      setSelectedRecords(newSelectedRecords);
	    }
	  };

	  const handleSelectAll = () => {
	    const missing = records.filter(record => !selectedRecords.find(selected => selected.id === record.id) && record.bulkActions.length);

	    if (missing.length) {
	      setSelectedRecords([...selectedRecords, ...missing]);
	    } else {
	      const newSelectedRecords = selectedRecords.filter(selected => !records.find(record => record.id === selected.id));
	      setSelectedRecords(newSelectedRecords);
	    }
	  };

	  return {
	    handleSelect,
	    handleSelectAll,
	    selectedRecords,
	    setSelectedRecords
	  };
	}

	/**
	 * @load ./use-resource.doc.md
	 * @subcategory Hooks
	 * @class
	 * @hideconstructor
	 * @new in version 3.3
	 * @bundle
	 * @param {string} resourceId    Id of a resource you want to get
	 */
	const useResource = resourceId => {
	  const resources = reactRedux.useSelector(state => state.resources);
	  const foundResource = resources.find(resource => resource.id === resourceId);
	  return foundResource;
	};

	var Hooks = /*#__PURE__*/Object.freeze({
		__proto__: null,
		useRecord: useRecord,
		isEntireRecordGiven: isEntireRecordGiven,
		mergeRecordResponse: mergeRecordResponse,
		FORM_VALUE_NULL: FORM_VALUE_NULL,
		FORM_VALUE_EMPTY_OBJECT: FORM_VALUE_EMPTY_OBJECT,
		FORM_VALUE_EMPTY_ARRAY: FORM_VALUE_EMPTY_ARRAY,
		paramsToFormData: paramsToFormData,
		updateRecord: updateRecord,
		useAction: useAction,
		useActionResponseHandler: useActionResponseHandler,
		useCurrentAdmin: useCurrentAdmin,
		useLocalStorage: useLocalStorage,
		useNavigationResources: useNavigationResources,
		useNotice: useNotice,
		useRecords: useRecords,
		useSelectedRecords: useSelectedRecords,
		useTranslation: useTranslation,
		useResource: useResource
	});

	/**
	 * @alias SidebarResourceSectionProps
	 * @memberof SidebarResourceSection
	 */

	/**
	 * Groups resources by sections and renders the list in {@link Sidebar}
	 *
	 * ### Usage
	 *
	 * ```
	 * import { SidebarResourceSection } from 'admin-bro`
	 * ```
	 *
	 * @component
	 * @subcategory Application
	 * @name SidebarResourceSection
	 */
	const SidebarResourceSectionOriginal = ({
	  resources
	}) => {
	  const elements = useNavigationResources(resources);
	  const {
	    translateLabel
	  } = useTranslation();
	  return /*#__PURE__*/React__default['default'].createElement(DesignSystem.Navigation, {
	    label: translateLabel('navigation'),
	    elements: elements
	  });
	}; // Rollup cannot handle type exports well - that is why we need to do this hack with
	// exporting default and named SidebarResourceSection


	const SidebarResourceSection = allowOverride(SidebarResourceSectionOriginal, 'SidebarResourceSection');

	const StyledSidebar = styled__default['default'](DesignSystem.Box).withConfig({
	  displayName: "sidebar__StyledSidebar",
	  componentId: "z5zut0-0"
	})(["transition:left 0.3s;top:0;bottom:0;flex-shrink:0;overflow-y:auto;&.hidden{left:-", ";}&.visible{left:0;}"], DesignSystem.themeGet('sizes', 'sidebarWidth'));
	StyledSidebar.defaultProps = {
	  position: ['absolute', 'absolute', 'absolute', 'absolute', 'inherit'],
	  width: 'sidebarWidth',
	  borderRight: 'default',
	  display: 'flex',
	  flexDirection: 'column',
	  zIndex: 50,
	  bg: 'white'
	};

	const SidebarOriginal = props => {
	  const {
	    isVisible
	  } = props;
	  const [branding, resources, pages] = reactRedux.useSelector(state => [state.branding, state.resources, state.pages]);
	  return /*#__PURE__*/React__default['default'].createElement(StyledSidebar, {
	    className: isVisible ? 'visible' : 'hidden'
	  }, /*#__PURE__*/React__default['default'].createElement(SidebarBranding$1, {
	    branding: branding
	  }), /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	    flexGrow: 1,
	    className: DesignSystem.cssClass('Resources')
	  }, /*#__PURE__*/React__default['default'].createElement(SidebarResourceSection, {
	    resources: resources
	  })), /*#__PURE__*/React__default['default'].createElement(SidebarPages, {
	    pages: pages
	  }), (branding === null || branding === void 0 ? void 0 : branding.softwareBrothers) && /*#__PURE__*/React__default['default'].createElement(SidebarFooter$1, null));
	};

	const Sidebar = allowOverride(SidebarOriginal, 'Sidebar');

	const LoggedIn = props => {
	  const {
	    session,
	    paths
	  } = props;
	  const {
	    translateButton
	  } = useTranslation();
	  const dropActions = [{
	    label: translateButton('logout'),
	    onClick: event => {
	      event.preventDefault();
	      window.location.href = paths.logoutPath;
	    },
	    icon: 'Logout'
	  }];
	  return /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	    flexShrink: 0
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.CurrentUserNav, {
	    name: session.email,
	    title: session.title,
	    avatarUrl: session.avatarUrl,
	    dropActions: dropActions
	  }));
	};

	const OverridableLoggedIn = allowOverride(LoggedIn, 'LoggedIn');

	const VersionItem = styled__default['default'](DesignSystem.Text).withConfig({
	  displayName: "version__VersionItem",
	  componentId: "rgspw3-0"
	})(["padding:12px 24px 12px 0;"]);
	VersionItem.defaultProps = {
	  display: ['none', 'block'],
	  color: 'grey100'
	};
	const Version = props => {
	  const {
	    versions
	  } = props;
	  const {
	    admin,
	    app
	  } = versions;
	  const {
	    translateLabel
	  } = useTranslation();
	  return /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	    flex: true,
	    flexGrow: 1,
	    py: "default",
	    px: "xxl",
	    className: DesignSystem.cssClass('Version')
	  }, admin && /*#__PURE__*/React__default['default'].createElement(VersionItem, null, translateLabel('adminVersion', {
	    version: admin
	  })), app && /*#__PURE__*/React__default['default'].createElement(VersionItem, null, translateLabel('appVersion', {
	    version: app
	  })));
	};

	const NavBar = styled__default['default'](DesignSystem.Box).withConfig({
	  displayName: "top-bar__NavBar",
	  componentId: "sc-1qk1nql-0"
	})(["height:", ";border-bottom:", ";background:", ";display:flex;flex-direction:row;flex-shrink:0;"], ({
	  theme
	}) => theme.sizes.navbarHeight, DesignSystem.themeGet('borders', 'default'), ({
	  theme
	}) => theme.colors.white);
	NavBar.defaultProps = {
	  className: DesignSystem.cssClass('NavBar')
	};
	const TopBarOriginal = props => {
	  const {
	    toggleSidebar
	  } = props;
	  const [session, paths, versions] = reactRedux.useSelector(state => [state.session, state.paths, state.versions]);
	  return /*#__PURE__*/React__default['default'].createElement(NavBar, null, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	    py: "lg",
	    px: ['default', 'lg'],
	    onClick: toggleSidebar,
	    display: ['block', 'block', 'block', 'block', 'none'],
	    style: {
	      cursor: 'pointer'
	    }
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Icon, {
	    icon: "Menu",
	    size: 32,
	    color: "grey100"
	  })), /*#__PURE__*/React__default['default'].createElement(Version, {
	    versions: versions
	  }), session && session.email ? /*#__PURE__*/React__default['default'].createElement(OverridableLoggedIn, {
	    session: session,
	    paths: paths
	  }) : '');
	};
	const Topbar = allowOverride(TopBarOriginal, 'Topbar');

	const DROP_NOTICE = 'DROP_NOTICE';
	const dropNotice = noticeId => ({
	  type: 'DROP_NOTICE',
	  data: {
	    noticeId
	  }
	});

	const SET_NOTICE_PROGRESS = 'SET_NOTICE_PROGRESS';
	const setNoticeProgress = data => ({
	  type: SET_NOTICE_PROGRESS,
	  data
	});

	const TIME_TO_DISAPPEAR = 3;
	const MessageBox = allowOverride(DesignSystem.MessageBox, 'MessageBox', true);
	class NoticeElement extends React__default['default'].Component {
	  constructor(props) {
	    super(props);
	    const {
	      notice
	    } = props;
	    this.timer = null;
	    this.state = {
	      progress: notice.progress || 0
	    };
	  }

	  componentDidMount() {
	    const {
	      drop,
	      notice,
	      notifyProgress
	    } = this.props;
	    this.timer = setInterval(() => {
	      this.setState(state => {
	        const progress = state.progress + 100 / TIME_TO_DISAPPEAR;
	        notifyProgress({
	          noticeId: notice.id,
	          progress
	        });
	        return {
	          progress
	        };
	      });
	    }, 1000);
	    setTimeout(() => {
	      if (this.timer) {
	        clearInterval(this.timer);
	      }

	      drop();
	    }, 1000 * (TIME_TO_DISAPPEAR + 1));
	  }

	  componentWillUnmount() {
	    if (this.timer) {
	      clearInterval(this.timer);
	    }
	  }

	  render() {
	    const {
	      notice,
	      drop
	    } = this.props;
	    return /*#__PURE__*/React__default['default'].createElement(MessageBox, {
	      style: {
	        minWidth: '480px'
	      },
	      message: notice.message,
	      variant: notice.type === 'success' ? 'success' : 'danger',
	      onCloseClick: drop
	    });
	  }

	}

	const NoticeBox = props => {
	  const {
	    drop,
	    notices,
	    notifyProgress
	  } = props;
	  const notice = notices.length ? notices[notices.length - 1] : null;

	  if (notice) {
	    return /*#__PURE__*/React__default['default'].createElement("div", {
	      "data-testid": "notice-wrapper"
	    }, /*#__PURE__*/React__default['default'].createElement(NoticeElement, {
	      key: notice.id,
	      notice: notice,
	      drop: () => drop(notice.id),
	      notifyProgress: notifyProgress
	    }));
	  }

	  return /*#__PURE__*/React__default['default'].createElement("div", null);
	};

	const mapStateToProps$4 = state => ({
	  notices: state.notices
	});

	const mapDispatchToProps$1 = dispatch => ({
	  drop: noticeId => dispatch(dropNotice(noticeId)),
	  notifyProgress: ({
	    noticeId,
	    progress
	  }) => dispatch(setNoticeProgress({
	    noticeId,
	    progress
	  }))
	});

	const ConnectedNoticeBox = reactRedux.connect(mapStateToProps$4, mapDispatchToProps$1)(NoticeBox);

	const pageHeaderHeight = 284;
	const pageHeaderPaddingY = 74;
	const pageHeaderPaddingX = 250;
	const DashboardHeader = () => {
	  const {
	    translateMessage
	  } = useTranslation();
	  return /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	    position: "relative",
	    overflow: "hidden"
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	    position: "absolute",
	    top: 50,
	    left: -10,
	    opacity: [0.2, 0.4, 1],
	    animate: true
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Illustration, {
	    variant: "Rocket"
	  })), /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	    position: "absolute",
	    top: -70,
	    right: -15,
	    opacity: [0.2, 0.4, 1],
	    animate: true
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Illustration, {
	    variant: "Moon"
	  })), /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	    bg: "grey100",
	    height: pageHeaderHeight,
	    py: pageHeaderPaddingY,
	    px: ['default', 'lg', pageHeaderPaddingX]
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Text, {
	    textAlign: "center",
	    color: "white"
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.H2, null, translateMessage('welcomeOnBoard_title')), /*#__PURE__*/React__default['default'].createElement(DesignSystem.Text, {
	    opacity: 0.8
	  }, translateMessage('welcomeOnBoard_subtitle')))));
	};

	const boxes = ({
	  translateMessage
	}) => [{
	  variant: 'Planet',
	  title: translateMessage('addingResources_title'),
	  subtitle: translateMessage('addingResources_subtitle'),
	  href: 'https://adminbro.com/tutorial-passing-resources.html'
	}, {
	  variant: 'DocumentCheck',
	  title: translateMessage('customizeResources_title'),
	  subtitle: translateMessage('customizeResources_subtitle'),
	  href: 'https://adminbro.com/tutorial-customizing-resources.html'
	}, {
	  variant: 'DocumentSearch',
	  title: translateMessage('customizeActions_title'),
	  subtitle: translateMessage('customizeActions_subtitle'),
	  href: 'https://adminbro.com/tutorial-actions.html'
	}, {
	  variant: 'FlagInCog',
	  title: translateMessage('writeOwnComponents_title'),
	  subtitle: translateMessage('writeOwnComponents_subtitle'),
	  href: 'https://adminbro.com/tutorial-writing-react-components.html'
	}, {
	  variant: 'Folders',
	  title: translateMessage('customDashboard_title'),
	  subtitle: translateMessage('customDashboard_subtitle'),
	  href: 'https://adminbro.com/tutorial-custom-dashboard.html'
	}, {
	  variant: 'Astronaut',
	  title: translateMessage('roleBasedAccess_title'),
	  subtitle: translateMessage('roleBasedAccess_subtitle'),
	  href: 'https://adminbro.com/tutorial-rbac.html'
	}];

	const Card = styled__default['default'](DesignSystem.Box).withConfig({
	  displayName: "default-dashboard__Card",
	  componentId: "y6jxa9-0"
	})(["display:", ";color:", ";text-decoration:none;border:1px solid transparent;&:hover{border:1px solid ", ";box-shadow:", ";}"], ({
	  flex
	}) => flex ? 'flex' : 'block', ({
	  theme
	}) => theme.colors.grey100, ({
	  theme
	}) => theme.colors.primary100, ({
	  theme
	}) => theme.shadows.cardHover);
	Card.defaultProps = {
	  variant: 'white',
	  boxShadow: 'card'
	};
	const Dashboard$2 = () => {
	  const {
	    translateMessage,
	    translateButton
	  } = useTranslation();
	  return /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, null, /*#__PURE__*/React__default['default'].createElement(DashboardHeader, null), /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	    mt: ['xl', 'xl', '-100px'],
	    mb: "xl",
	    mx: [0, 0, 0, 'auto'],
	    px: ['default', 'lg', 'xxl', '0'],
	    position: "relative",
	    flex: true,
	    flexDirection: "row",
	    flexWrap: "wrap",
	    width: [1, 1, 1, 1024]
	  }, boxes({
	    translateMessage
	  }).map((box, index) =>
	  /*#__PURE__*/
	  // eslint-disable-next-line react/no-array-index-key
	  React__default['default'].createElement(DesignSystem.Box, {
	    key: index,
	    width: [1, 1 / 2, 1 / 2, 1 / 3],
	    p: "lg"
	  }, /*#__PURE__*/React__default['default'].createElement(Card, {
	    as: "a",
	    href: box.href
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Text, {
	    textAlign: "center"
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Illustration, {
	    variant: box.variant,
	    width: 100,
	    height: 70
	  }), /*#__PURE__*/React__default['default'].createElement(DesignSystem.H5, {
	    mt: "lg"
	  }, box.title), /*#__PURE__*/React__default['default'].createElement(DesignSystem.Text, null, box.subtitle))))), /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	    width: [1, 1, 1 / 2],
	    p: "lg"
	  }, /*#__PURE__*/React__default['default'].createElement(Card, {
	    as: "a",
	    flex: true,
	    href: "https://join.slack.com/t/adminbro/shared_invite/zt-djsqxxpz-_YCS8UMtQ9Ade6DPuLR7Zw"
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	    flexShrink: 0
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Illustration, {
	    variant: "SlackLogo"
	  })), /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	    ml: "xl"
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.H4, null, translateMessage('community_title')), /*#__PURE__*/React__default['default'].createElement(DesignSystem.Text, null, translateMessage('community_subtitle'))))), /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	    width: [1, 1, 1 / 2],
	    p: "lg"
	  }, /*#__PURE__*/React__default['default'].createElement(Card, {
	    as: "a",
	    flex: true,
	    href: "https://github.com/SoftwareBrothers/admin-bro/issues"
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	    flexShrink: 0
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Illustration, {
	    variant: "GithubLogo"
	  })), /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	    ml: "xl"
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.H4, null, translateMessage('foundBug_title')), /*#__PURE__*/React__default['default'].createElement(DesignSystem.Text, null, translateMessage('foundBug_subtitle'))))), /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	    variant: "white",
	    boxShadow: "card",
	    width: 1,
	    m: "lg"
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Text, {
	    textAlign: "center"
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Illustration, {
	    variant: "SoftwareBrothersLogo"
	  }), /*#__PURE__*/React__default['default'].createElement(DesignSystem.H4, null, translateMessage('needMoreSolutions_title')), /*#__PURE__*/React__default['default'].createElement(DesignSystem.Text, null, translateMessage('needMoreSolutions_subtitle')), /*#__PURE__*/React__default['default'].createElement(DesignSystem.Text, {
	    mt: "xxl"
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Button, {
	    as: "a",
	    variant: "primary",
	    href: "https://softwarebrothers.co/services"
	  }, translateButton('contactUs')))))));
	};

	const ErrorMessage = ({
	  error
	}) => {
	  const {
	    translateMessage
	  } = useTranslation();
	  return /*#__PURE__*/React__default['default'].createElement(DesignSystem.MessageBox, {
	    m: "xxl",
	    variant: "danger",
	    message: "Javascript Error"
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Text, null, error.toString()), /*#__PURE__*/React__default['default'].createElement(DesignSystem.Text, {
	    mt: "default"
	  }, translateMessage('seeConsoleForMore')));
	};

	class ErrorBoundary extends React__default['default'].Component {
	  constructor(props) {
	    super(props);
	    this.state = {
	      error: null
	    };
	  }

	  componentDidCatch(error) {
	    this.setState({
	      error
	    });
	  }

	  render() {
	    const {
	      children
	    } = this.props;
	    const {
	      error
	    } = this.state;

	    if (error !== null) {
	      return /*#__PURE__*/React__default['default'].createElement(ErrorMessage, {
	        error: error
	      });
	    }

	    return children || null;
	  }

	}

	class Dashboard extends React__default['default'].Component {
	  constructor(props) {
	    super(props);
	    this.state = {
	      isClient: false
	    };
	  }

	  componentDidMount() {
	    this.setState({
	      isClient: true
	    });
	  }

	  render() {
	    const {
	      dashboard
	    } = this.props;
	    const {
	      isClient
	    } = this.state;
	    let Component;

	    if (dashboard && dashboard.component && isClient && AdminBro.UserComponents[dashboard.component]) {
	      Component = AdminBro.UserComponents[dashboard.component];
	    } else {
	      Component = Dashboard$2;
	    }

	    return /*#__PURE__*/React__default['default'].createElement(ErrorBoundary, null, /*#__PURE__*/React__default['default'].createElement(Component, null));
	  }

	}

	const mapStateToProps$3 = state => ({
	  dashboard: state.dashboard
	});

	var Dashboard$1 = reactRedux.connect(mapStateToProps$3)(Dashboard);

	var setPrototypeOf = createCommonjsModule(function (module) {
	function _setPrototypeOf(o, p) {
	  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
	    o.__proto__ = p;
	    return o;
	  };

	  module.exports["default"] = module.exports, module.exports.__esModule = true;
	  return _setPrototypeOf(o, p);
	}

	module.exports = _setPrototypeOf;
	module.exports["default"] = module.exports, module.exports.__esModule = true;
	});

	var inheritsLoose = createCommonjsModule(function (module) {
	function _inheritsLoose(subClass, superClass) {
	  subClass.prototype = Object.create(superClass.prototype);
	  subClass.prototype.constructor = subClass;
	  setPrototypeOf(subClass, superClass);
	}

	module.exports = _inheritsLoose;
	module.exports["default"] = module.exports, module.exports.__esModule = true;
	});

	var useMemoOne_cjs = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, '__esModule', { value: true });



	function areInputsEqual(newInputs, lastInputs) {
	  if (newInputs.length !== lastInputs.length) {
	    return false;
	  }

	  for (var i = 0; i < newInputs.length; i++) {
	    if (newInputs[i] !== lastInputs[i]) {
	      return false;
	    }
	  }

	  return true;
	}

	function useMemoOne(getResult, inputs) {
	  var initial = React__default['default'].useState(function () {
	    return {
	      inputs: inputs,
	      result: getResult()
	    };
	  })[0];
	  var isFirstRun = React__default['default'].useRef(true);
	  var committed = React__default['default'].useRef(initial);
	  var useCache = isFirstRun.current || Boolean(inputs && committed.current.inputs && areInputsEqual(inputs, committed.current.inputs));
	  var cache = useCache ? committed.current : {
	    inputs: inputs,
	    result: getResult()
	  };
	  React__default['default'].useEffect(function () {
	    isFirstRun.current = false;
	    committed.current = cache;
	  }, [cache]);
	  return cache.result;
	}
	function useCallbackOne(callback, inputs) {
	  return useMemoOne(function () {
	    return callback;
	  }, inputs);
	}
	var useMemo = useMemoOne;
	var useCallback = useCallbackOne;

	exports.useCallback = useCallback;
	exports.useCallbackOne = useCallbackOne;
	exports.useMemo = useMemo;
	exports.useMemoOne = useMemoOne;
	});

	var tinyInvariant_cjs = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", { value: true });
	var prefix = 'Invariant failed';
	function invariant(condition, message) {
	    if (condition) {
	        return;
	    }
	    throw new Error(prefix + ": " + (message || ''));
	}
	exports.default = invariant;
	});

	var cssBoxModel_cjs = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, '__esModule', { value: true });

	function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

	var invariant = _interopDefault(tinyInvariant_cjs);

	var getRect = function getRect(_ref) {
	  var top = _ref.top,
	      right = _ref.right,
	      bottom = _ref.bottom,
	      left = _ref.left;
	  var width = right - left;
	  var height = bottom - top;
	  var rect = {
	    top: top,
	    right: right,
	    bottom: bottom,
	    left: left,
	    width: width,
	    height: height,
	    x: left,
	    y: top,
	    center: {
	      x: (right + left) / 2,
	      y: (bottom + top) / 2
	    }
	  };
	  return rect;
	};
	var expand = function expand(target, expandBy) {
	  return {
	    top: target.top - expandBy.top,
	    left: target.left - expandBy.left,
	    bottom: target.bottom + expandBy.bottom,
	    right: target.right + expandBy.right
	  };
	};
	var shrink = function shrink(target, shrinkBy) {
	  return {
	    top: target.top + shrinkBy.top,
	    left: target.left + shrinkBy.left,
	    bottom: target.bottom - shrinkBy.bottom,
	    right: target.right - shrinkBy.right
	  };
	};

	var shift = function shift(target, shiftBy) {
	  return {
	    top: target.top + shiftBy.y,
	    left: target.left + shiftBy.x,
	    bottom: target.bottom + shiftBy.y,
	    right: target.right + shiftBy.x
	  };
	};

	var noSpacing = {
	  top: 0,
	  right: 0,
	  bottom: 0,
	  left: 0
	};
	var createBox = function createBox(_ref2) {
	  var borderBox = _ref2.borderBox,
	      _ref2$margin = _ref2.margin,
	      margin = _ref2$margin === void 0 ? noSpacing : _ref2$margin,
	      _ref2$border = _ref2.border,
	      border = _ref2$border === void 0 ? noSpacing : _ref2$border,
	      _ref2$padding = _ref2.padding,
	      padding = _ref2$padding === void 0 ? noSpacing : _ref2$padding;
	  var marginBox = getRect(expand(borderBox, margin));
	  var paddingBox = getRect(shrink(borderBox, border));
	  var contentBox = getRect(shrink(paddingBox, padding));
	  return {
	    marginBox: marginBox,
	    borderBox: getRect(borderBox),
	    paddingBox: paddingBox,
	    contentBox: contentBox,
	    margin: margin,
	    border: border,
	    padding: padding
	  };
	};

	var parse = function parse(raw) {
	  var value = raw.slice(0, -2);
	  var suffix = raw.slice(-2);

	  if (suffix !== 'px') {
	    return 0;
	  }

	  var result = Number(value);
	  !!isNaN(result) ? invariant(false, "Could not parse value [raw: " + raw + ", without suffix: " + value + "]")  : void 0;
	  return result;
	};

	var getWindowScroll = function getWindowScroll() {
	  return {
	    x: window.pageXOffset,
	    y: window.pageYOffset
	  };
	};

	var offset = function offset(original, change) {
	  var borderBox = original.borderBox,
	      border = original.border,
	      margin = original.margin,
	      padding = original.padding;
	  var shifted = shift(borderBox, change);
	  return createBox({
	    borderBox: shifted,
	    border: border,
	    margin: margin,
	    padding: padding
	  });
	};
	var withScroll = function withScroll(original, scroll) {
	  if (scroll === void 0) {
	    scroll = getWindowScroll();
	  }

	  return offset(original, scroll);
	};
	var calculateBox = function calculateBox(borderBox, styles) {
	  var margin = {
	    top: parse(styles.marginTop),
	    right: parse(styles.marginRight),
	    bottom: parse(styles.marginBottom),
	    left: parse(styles.marginLeft)
	  };
	  var padding = {
	    top: parse(styles.paddingTop),
	    right: parse(styles.paddingRight),
	    bottom: parse(styles.paddingBottom),
	    left: parse(styles.paddingLeft)
	  };
	  var border = {
	    top: parse(styles.borderTopWidth),
	    right: parse(styles.borderRightWidth),
	    bottom: parse(styles.borderBottomWidth),
	    left: parse(styles.borderLeftWidth)
	  };
	  return createBox({
	    borderBox: borderBox,
	    margin: margin,
	    padding: padding,
	    border: border
	  });
	};
	var getBox = function getBox(el) {
	  var borderBox = el.getBoundingClientRect();
	  var styles = window.getComputedStyle(el);
	  return calculateBox(borderBox, styles);
	};

	exports.calculateBox = calculateBox;
	exports.createBox = createBox;
	exports.expand = expand;
	exports.getBox = getBox;
	exports.getRect = getRect;
	exports.offset = offset;
	exports.shrink = shrink;
	exports.withScroll = withScroll;
	});

	var safeIsNaN = Number.isNaN ||
	    function ponyfill(value) {
	        return typeof value === 'number' && value !== value;
	    };
	function isEqual(first, second) {
	    if (first === second) {
	        return true;
	    }
	    if (safeIsNaN(first) && safeIsNaN(second)) {
	        return true;
	    }
	    return false;
	}
	function areInputsEqual(newInputs, lastInputs) {
	    if (newInputs.length !== lastInputs.length) {
	        return false;
	    }
	    for (var i = 0; i < newInputs.length; i++) {
	        if (!isEqual(newInputs[i], lastInputs[i])) {
	            return false;
	        }
	    }
	    return true;
	}

	function memoizeOne(resultFn, isEqual) {
	    if (isEqual === void 0) { isEqual = areInputsEqual; }
	    var lastThis;
	    var lastArgs = [];
	    var lastResult;
	    var calledOnce = false;
	    function memoized() {
	        var newArgs = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            newArgs[_i] = arguments[_i];
	        }
	        if (calledOnce && lastThis === this && isEqual(newArgs, lastArgs)) {
	            return lastResult;
	        }
	        lastResult = resultFn.apply(this, newArgs);
	        calledOnce = true;
	        lastThis = this;
	        lastArgs = newArgs;
	        return lastResult;
	    }
	    return memoized;
	}

	var memoizeOne_cjs = memoizeOne;

	var rafSchd = function rafSchd(fn) {
	  var lastArgs = [];
	  var frameId = null;

	  var wrapperFn = function wrapperFn() {
	    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    lastArgs = args;

	    if (frameId) {
	      return;
	    }

	    frameId = requestAnimationFrame(function () {
	      frameId = null;
	      fn.apply(void 0, lastArgs);
	    });
	  };

	  wrapperFn.cancel = function () {
	    if (!frameId) {
	      return;
	    }

	    cancelAnimationFrame(frameId);
	    frameId = null;
	  };

	  return wrapperFn;
	};

	var rafSchd_cjs = rafSchd;

	var reactBeautifulDnd_cjs = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, '__esModule', { value: true });

	function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }


	var React__default$1 = _interopDefault(React__default['default']);
	var _inheritsLoose = _interopDefault(inheritsLoose);
	var _extends = _interopDefault(_extends_1);




	var memoizeOne = _interopDefault(memoizeOne_cjs);
	var rafSchd = _interopDefault(rafSchd_cjs);
	var ReactDOM = _interopDefault(require$$4__default['default']);
	var spacesAndTabs = /[ \t]{2,}/g;
	var lineStartWithSpaces = /^[ \t]*/gm;

	var clean = function clean(value) {
	  return value.replace(spacesAndTabs, ' ').replace(lineStartWithSpaces, '').trim();
	};

	var getDevMessage = function getDevMessage(message) {
	  return clean("\n  %creact-beautiful-dnd\n\n  %c" + clean(message) + "\n\n  %c\uD83D\uDC77\u200D This is a development only message. It will be removed in production builds.\n");
	};

	var getFormattedMessage = function getFormattedMessage(message) {
	  return [getDevMessage(message), 'color: #00C584; font-size: 1.2em; font-weight: bold;', 'line-height: 1.5', 'color: #723874;'];
	};
	var isDisabledFlag = '__react-beautiful-dnd-disable-dev-warnings';
	function log(type, message) {
	  var _console;

	  if (typeof window !== 'undefined' && window[isDisabledFlag]) {
	    return;
	  }

	  (_console = console)[type].apply(_console, getFormattedMessage(message));
	}
	var warning = log.bind(null, 'warn');
	var error = log.bind(null, 'error');

	function noop() {}

	function getOptions(shared, fromBinding) {
	  return _extends({}, shared, {}, fromBinding);
	}

	function bindEvents(el, bindings, sharedOptions) {
	  var unbindings = bindings.map(function (binding) {
	    var options = getOptions(sharedOptions, binding.options);
	    el.addEventListener(binding.eventName, binding.fn, options);
	    return function unbind() {
	      el.removeEventListener(binding.eventName, binding.fn, options);
	    };
	  });
	  return function unbindAll() {
	    unbindings.forEach(function (unbind) {
	      unbind();
	    });
	  };
	}
	var prefix = 'Invariant failed';
	function RbdInvariant(message) {
	  this.message = message;
	}

	RbdInvariant.prototype.toString = function toString() {
	  return this.message;
	};

	function invariant(condition, message) {
	  if (condition) {
	    return;
	  }

	  {
	    throw new RbdInvariant(prefix + ": " + (message || ''));
	  }
	}

	var ErrorBoundary = function (_React$Component) {
	  _inheritsLoose(ErrorBoundary, _React$Component);

	  function ErrorBoundary() {
	    var _this;

	    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
	    _this.callbacks = null;
	    _this.unbind = noop;

	    _this.onWindowError = function (event) {
	      var callbacks = _this.getCallbacks();

	      if (callbacks.isDragging()) {
	        callbacks.tryAbort();
	        warning("\n        An error was caught by our window 'error' event listener while a drag was occurring.\n        The active drag has been aborted.\n      ") ;
	      }

	      var err = event.error;

	      if (err instanceof RbdInvariant) {
	        event.preventDefault();

	        {
	          error(err.message);
	        }
	      }
	    };

	    _this.getCallbacks = function () {
	      if (!_this.callbacks) {
	        throw new Error('Unable to find AppCallbacks in <ErrorBoundary/>');
	      }

	      return _this.callbacks;
	    };

	    _this.setCallbacks = function (callbacks) {
	      _this.callbacks = callbacks;
	    };

	    return _this;
	  }

	  var _proto = ErrorBoundary.prototype;

	  _proto.componentDidMount = function componentDidMount() {
	    this.unbind = bindEvents(window, [{
	      eventName: 'error',
	      fn: this.onWindowError
	    }]);
	  };

	  _proto.componentDidCatch = function componentDidCatch(err) {
	    if (err instanceof RbdInvariant) {
	      {
	        error(err.message);
	      }

	      this.setState({});
	      return;
	    }

	    throw err;
	  };

	  _proto.componentWillUnmount = function componentWillUnmount() {
	    this.unbind();
	  };

	  _proto.render = function render() {
	    return this.props.children(this.setCallbacks);
	  };

	  return ErrorBoundary;
	}(React__default$1.Component);

	var dragHandleUsageInstructions = "\n  Press space bar to start a drag.\n  When dragging you can use the arrow keys to move the item around and escape to cancel.\n  Some screen readers may require you to be in focus mode or to use your pass through key\n";

	var position = function position(index) {
	  return index + 1;
	};

	var onDragStart = function onDragStart(start) {
	  return "\n  You have lifted an item in position " + position(start.source.index) + "\n";
	};

	var withLocation = function withLocation(source, destination) {
	  var isInHomeList = source.droppableId === destination.droppableId;
	  var startPosition = position(source.index);
	  var endPosition = position(destination.index);

	  if (isInHomeList) {
	    return "\n      You have moved the item from position " + startPosition + "\n      to position " + endPosition + "\n    ";
	  }

	  return "\n    You have moved the item from position " + startPosition + "\n    in list " + source.droppableId + "\n    to list " + destination.droppableId + "\n    in position " + endPosition + "\n  ";
	};

	var withCombine = function withCombine(id, source, combine) {
	  var inHomeList = source.droppableId === combine.droppableId;

	  if (inHomeList) {
	    return "\n      The item " + id + "\n      has been combined with " + combine.draggableId;
	  }

	  return "\n      The item " + id + "\n      in list " + source.droppableId + "\n      has been combined with " + combine.draggableId + "\n      in list " + combine.droppableId + "\n    ";
	};

	var onDragUpdate = function onDragUpdate(update) {
	  var location = update.destination;

	  if (location) {
	    return withLocation(update.source, location);
	  }

	  var combine = update.combine;

	  if (combine) {
	    return withCombine(update.draggableId, update.source, combine);
	  }

	  return 'You are over an area that cannot be dropped on';
	};

	var returnedToStart = function returnedToStart(source) {
	  return "\n  The item has returned to its starting position\n  of " + position(source.index) + "\n";
	};

	var onDragEnd = function onDragEnd(result) {
	  if (result.reason === 'CANCEL') {
	    return "\n      Movement cancelled.\n      " + returnedToStart(result.source) + "\n    ";
	  }

	  var location = result.destination;
	  var combine = result.combine;

	  if (location) {
	    return "\n      You have dropped the item.\n      " + withLocation(result.source, location) + "\n    ";
	  }

	  if (combine) {
	    return "\n      You have dropped the item.\n      " + withCombine(result.draggableId, result.source, combine) + "\n    ";
	  }

	  return "\n    The item has been dropped while not over a drop area.\n    " + returnedToStart(result.source) + "\n  ";
	};

	var preset = {
	  dragHandleUsageInstructions: dragHandleUsageInstructions,
	  onDragStart: onDragStart,
	  onDragUpdate: onDragUpdate,
	  onDragEnd: onDragEnd
	};

	var origin = {
	  x: 0,
	  y: 0
	};
	var add = function add(point1, point2) {
	  return {
	    x: point1.x + point2.x,
	    y: point1.y + point2.y
	  };
	};
	var subtract = function subtract(point1, point2) {
	  return {
	    x: point1.x - point2.x,
	    y: point1.y - point2.y
	  };
	};
	var isEqual = function isEqual(point1, point2) {
	  return point1.x === point2.x && point1.y === point2.y;
	};
	var negate = function negate(point) {
	  return {
	    x: point.x !== 0 ? -point.x : 0,
	    y: point.y !== 0 ? -point.y : 0
	  };
	};
	var patch = function patch(line, value, otherValue) {
	  var _ref;

	  if (otherValue === void 0) {
	    otherValue = 0;
	  }

	  return _ref = {}, _ref[line] = value, _ref[line === 'x' ? 'y' : 'x'] = otherValue, _ref;
	};
	var distance = function distance(point1, point2) {
	  return Math.sqrt(Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2));
	};
	var closest = function closest(target, points) {
	  return Math.min.apply(Math, points.map(function (point) {
	    return distance(target, point);
	  }));
	};
	var apply = function apply(fn) {
	  return function (point) {
	    return {
	      x: fn(point.x),
	      y: fn(point.y)
	    };
	  };
	};

	var executeClip = (function (frame, subject) {
	  var result = cssBoxModel_cjs.getRect({
	    top: Math.max(subject.top, frame.top),
	    right: Math.min(subject.right, frame.right),
	    bottom: Math.min(subject.bottom, frame.bottom),
	    left: Math.max(subject.left, frame.left)
	  });

	  if (result.width <= 0 || result.height <= 0) {
	    return null;
	  }

	  return result;
	});

	var offsetByPosition = function offsetByPosition(spacing, point) {
	  return {
	    top: spacing.top + point.y,
	    left: spacing.left + point.x,
	    bottom: spacing.bottom + point.y,
	    right: spacing.right + point.x
	  };
	};
	var getCorners = function getCorners(spacing) {
	  return [{
	    x: spacing.left,
	    y: spacing.top
	  }, {
	    x: spacing.right,
	    y: spacing.top
	  }, {
	    x: spacing.left,
	    y: spacing.bottom
	  }, {
	    x: spacing.right,
	    y: spacing.bottom
	  }];
	};
	var noSpacing = {
	  top: 0,
	  right: 0,
	  bottom: 0,
	  left: 0
	};

	var scroll = function scroll(target, frame) {
	  if (!frame) {
	    return target;
	  }

	  return offsetByPosition(target, frame.scroll.diff.displacement);
	};

	var increase = function increase(target, axis, withPlaceholder) {
	  if (withPlaceholder && withPlaceholder.increasedBy) {
	    var _extends2;

	    return _extends({}, target, (_extends2 = {}, _extends2[axis.end] = target[axis.end] + withPlaceholder.increasedBy[axis.line], _extends2));
	  }

	  return target;
	};

	var clip = function clip(target, frame) {
	  if (frame && frame.shouldClipSubject) {
	    return executeClip(frame.pageMarginBox, target);
	  }

	  return cssBoxModel_cjs.getRect(target);
	};

	var getSubject = (function (_ref) {
	  var page = _ref.page,
	      withPlaceholder = _ref.withPlaceholder,
	      axis = _ref.axis,
	      frame = _ref.frame;
	  var scrolled = scroll(page.marginBox, frame);
	  var increased = increase(scrolled, axis, withPlaceholder);
	  var clipped = clip(increased, frame);
	  return {
	    page: page,
	    withPlaceholder: withPlaceholder,
	    active: clipped
	  };
	});

	var scrollDroppable = (function (droppable, newScroll) {
	  !droppable.frame ? invariant(false)  : void 0;
	  var scrollable = droppable.frame;
	  var scrollDiff = subtract(newScroll, scrollable.scroll.initial);
	  var scrollDisplacement = negate(scrollDiff);

	  var frame = _extends({}, scrollable, {
	    scroll: {
	      initial: scrollable.scroll.initial,
	      current: newScroll,
	      diff: {
	        value: scrollDiff,
	        displacement: scrollDisplacement
	      },
	      max: scrollable.scroll.max
	    }
	  });

	  var subject = getSubject({
	    page: droppable.subject.page,
	    withPlaceholder: droppable.subject.withPlaceholder,
	    axis: droppable.axis,
	    frame: frame
	  });

	  var result = _extends({}, droppable, {
	    frame: frame,
	    subject: subject
	  });

	  return result;
	});

	function isInteger(value) {
	  if (Number.isInteger) {
	    return Number.isInteger(value);
	  }

	  return typeof value === 'number' && isFinite(value) && Math.floor(value) === value;
	}
	function values(map) {
	  if (Object.values) {
	    return Object.values(map);
	  }

	  return Object.keys(map).map(function (key) {
	    return map[key];
	  });
	}
	function findIndex(list, predicate) {
	  if (list.findIndex) {
	    return list.findIndex(predicate);
	  }

	  for (var i = 0; i < list.length; i++) {
	    if (predicate(list[i])) {
	      return i;
	    }
	  }

	  return -1;
	}
	function find(list, predicate) {
	  if (list.find) {
	    return list.find(predicate);
	  }

	  var index = findIndex(list, predicate);

	  if (index !== -1) {
	    return list[index];
	  }

	  return undefined;
	}
	function toArray(list) {
	  return Array.prototype.slice.call(list);
	}

	var toDroppableMap = memoizeOne(function (droppables) {
	  return droppables.reduce(function (previous, current) {
	    previous[current.descriptor.id] = current;
	    return previous;
	  }, {});
	});
	var toDraggableMap = memoizeOne(function (draggables) {
	  return draggables.reduce(function (previous, current) {
	    previous[current.descriptor.id] = current;
	    return previous;
	  }, {});
	});
	var toDroppableList = memoizeOne(function (droppables) {
	  return values(droppables);
	});
	var toDraggableList = memoizeOne(function (draggables) {
	  return values(draggables);
	});

	var getDraggablesInsideDroppable = memoizeOne(function (droppableId, draggables) {
	  var result = toDraggableList(draggables).filter(function (draggable) {
	    return droppableId === draggable.descriptor.droppableId;
	  }).sort(function (a, b) {
	    return a.descriptor.index - b.descriptor.index;
	  });
	  return result;
	});

	function tryGetDestination(impact) {
	  if (impact.at && impact.at.type === 'REORDER') {
	    return impact.at.destination;
	  }

	  return null;
	}
	function tryGetCombine(impact) {
	  if (impact.at && impact.at.type === 'COMBINE') {
	    return impact.at.combine;
	  }

	  return null;
	}

	var removeDraggableFromList = memoizeOne(function (remove, list) {
	  return list.filter(function (item) {
	    return item.descriptor.id !== remove.descriptor.id;
	  });
	});

	var moveToNextCombine = (function (_ref) {
	  var isMovingForward = _ref.isMovingForward,
	      draggable = _ref.draggable,
	      destination = _ref.destination,
	      insideDestination = _ref.insideDestination,
	      previousImpact = _ref.previousImpact;

	  if (!destination.isCombineEnabled) {
	    return null;
	  }

	  var location = tryGetDestination(previousImpact);

	  if (!location) {
	    return null;
	  }

	  function getImpact(target) {
	    var at = {
	      type: 'COMBINE',
	      combine: {
	        draggableId: target,
	        droppableId: destination.descriptor.id
	      }
	    };
	    return _extends({}, previousImpact, {
	      at: at
	    });
	  }

	  var all = previousImpact.displaced.all;
	  var closestId = all.length ? all[0] : null;

	  if (isMovingForward) {
	    return closestId ? getImpact(closestId) : null;
	  }

	  var withoutDraggable = removeDraggableFromList(draggable, insideDestination);

	  if (!closestId) {
	    if (!withoutDraggable.length) {
	      return null;
	    }

	    var last = withoutDraggable[withoutDraggable.length - 1];
	    return getImpact(last.descriptor.id);
	  }

	  var indexOfClosest = findIndex(withoutDraggable, function (d) {
	    return d.descriptor.id === closestId;
	  });
	  !(indexOfClosest !== -1) ? invariant(false, 'Could not find displaced item in set')  : void 0;
	  var proposedIndex = indexOfClosest - 1;

	  if (proposedIndex < 0) {
	    return null;
	  }

	  var before = withoutDraggable[proposedIndex];
	  return getImpact(before.descriptor.id);
	});

	var isHomeOf = (function (draggable, destination) {
	  return draggable.descriptor.droppableId === destination.descriptor.id;
	});

	var noDisplacedBy = {
	  point: origin,
	  value: 0
	};
	var emptyGroups = {
	  invisible: {},
	  visible: {},
	  all: []
	};
	var noImpact = {
	  displaced: emptyGroups,
	  displacedBy: noDisplacedBy,
	  at: null
	};

	var isWithin = (function (lowerBound, upperBound) {
	  return function (value) {
	    return lowerBound <= value && value <= upperBound;
	  };
	});

	var isPartiallyVisibleThroughFrame = (function (frame) {
	  var isWithinVertical = isWithin(frame.top, frame.bottom);
	  var isWithinHorizontal = isWithin(frame.left, frame.right);
	  return function (subject) {
	    var isContained = isWithinVertical(subject.top) && isWithinVertical(subject.bottom) && isWithinHorizontal(subject.left) && isWithinHorizontal(subject.right);

	    if (isContained) {
	      return true;
	    }

	    var isPartiallyVisibleVertically = isWithinVertical(subject.top) || isWithinVertical(subject.bottom);
	    var isPartiallyVisibleHorizontally = isWithinHorizontal(subject.left) || isWithinHorizontal(subject.right);
	    var isPartiallyContained = isPartiallyVisibleVertically && isPartiallyVisibleHorizontally;

	    if (isPartiallyContained) {
	      return true;
	    }

	    var isBiggerVertically = subject.top < frame.top && subject.bottom > frame.bottom;
	    var isBiggerHorizontally = subject.left < frame.left && subject.right > frame.right;
	    var isTargetBiggerThanFrame = isBiggerVertically && isBiggerHorizontally;

	    if (isTargetBiggerThanFrame) {
	      return true;
	    }

	    var isTargetBiggerOnOneAxis = isBiggerVertically && isPartiallyVisibleHorizontally || isBiggerHorizontally && isPartiallyVisibleVertically;
	    return isTargetBiggerOnOneAxis;
	  };
	});

	var isTotallyVisibleThroughFrame = (function (frame) {
	  var isWithinVertical = isWithin(frame.top, frame.bottom);
	  var isWithinHorizontal = isWithin(frame.left, frame.right);
	  return function (subject) {
	    var isContained = isWithinVertical(subject.top) && isWithinVertical(subject.bottom) && isWithinHorizontal(subject.left) && isWithinHorizontal(subject.right);
	    return isContained;
	  };
	});

	var vertical = {
	  direction: 'vertical',
	  line: 'y',
	  crossAxisLine: 'x',
	  start: 'top',
	  end: 'bottom',
	  size: 'height',
	  crossAxisStart: 'left',
	  crossAxisEnd: 'right',
	  crossAxisSize: 'width'
	};
	var horizontal = {
	  direction: 'horizontal',
	  line: 'x',
	  crossAxisLine: 'y',
	  start: 'left',
	  end: 'right',
	  size: 'width',
	  crossAxisStart: 'top',
	  crossAxisEnd: 'bottom',
	  crossAxisSize: 'height'
	};

	var isTotallyVisibleThroughFrameOnAxis = (function (axis) {
	  return function (frame) {
	    var isWithinVertical = isWithin(frame.top, frame.bottom);
	    var isWithinHorizontal = isWithin(frame.left, frame.right);
	    return function (subject) {
	      if (axis === vertical) {
	        return isWithinVertical(subject.top) && isWithinVertical(subject.bottom);
	      }

	      return isWithinHorizontal(subject.left) && isWithinHorizontal(subject.right);
	    };
	  };
	});

	var getDroppableDisplaced = function getDroppableDisplaced(target, destination) {
	  var displacement = destination.frame ? destination.frame.scroll.diff.displacement : origin;
	  return offsetByPosition(target, displacement);
	};

	var isVisibleInDroppable = function isVisibleInDroppable(target, destination, isVisibleThroughFrameFn) {
	  if (!destination.subject.active) {
	    return false;
	  }

	  return isVisibleThroughFrameFn(destination.subject.active)(target);
	};

	var isVisibleInViewport = function isVisibleInViewport(target, viewport, isVisibleThroughFrameFn) {
	  return isVisibleThroughFrameFn(viewport)(target);
	};

	var isVisible = function isVisible(_ref) {
	  var toBeDisplaced = _ref.target,
	      destination = _ref.destination,
	      viewport = _ref.viewport,
	      withDroppableDisplacement = _ref.withDroppableDisplacement,
	      isVisibleThroughFrameFn = _ref.isVisibleThroughFrameFn;
	  var displacedTarget = withDroppableDisplacement ? getDroppableDisplaced(toBeDisplaced, destination) : toBeDisplaced;
	  return isVisibleInDroppable(displacedTarget, destination, isVisibleThroughFrameFn) && isVisibleInViewport(displacedTarget, viewport, isVisibleThroughFrameFn);
	};

	var isPartiallyVisible = function isPartiallyVisible(args) {
	  return isVisible(_extends({}, args, {
	    isVisibleThroughFrameFn: isPartiallyVisibleThroughFrame
	  }));
	};
	var isTotallyVisible = function isTotallyVisible(args) {
	  return isVisible(_extends({}, args, {
	    isVisibleThroughFrameFn: isTotallyVisibleThroughFrame
	  }));
	};
	var isTotallyVisibleOnAxis = function isTotallyVisibleOnAxis(args) {
	  return isVisible(_extends({}, args, {
	    isVisibleThroughFrameFn: isTotallyVisibleThroughFrameOnAxis(args.destination.axis)
	  }));
	};

	var getShouldAnimate = function getShouldAnimate(id, last, forceShouldAnimate) {
	  if (typeof forceShouldAnimate === 'boolean') {
	    return forceShouldAnimate;
	  }

	  if (!last) {
	    return true;
	  }

	  var invisible = last.invisible,
	      visible = last.visible;

	  if (invisible[id]) {
	    return false;
	  }

	  var previous = visible[id];
	  return previous ? previous.shouldAnimate : true;
	};

	function getTarget(draggable, displacedBy) {
	  var marginBox = draggable.page.marginBox;
	  var expandBy = {
	    top: displacedBy.point.y,
	    right: 0,
	    bottom: 0,
	    left: displacedBy.point.x
	  };
	  return cssBoxModel_cjs.getRect(cssBoxModel_cjs.expand(marginBox, expandBy));
	}

	function getDisplacementGroups(_ref) {
	  var afterDragging = _ref.afterDragging,
	      destination = _ref.destination,
	      displacedBy = _ref.displacedBy,
	      viewport = _ref.viewport,
	      forceShouldAnimate = _ref.forceShouldAnimate,
	      last = _ref.last;
	  return afterDragging.reduce(function process(groups, draggable) {
	    var target = getTarget(draggable, displacedBy);
	    var id = draggable.descriptor.id;
	    groups.all.push(id);
	    var isVisible = isPartiallyVisible({
	      target: target,
	      destination: destination,
	      viewport: viewport,
	      withDroppableDisplacement: true
	    });

	    if (!isVisible) {
	      groups.invisible[draggable.descriptor.id] = true;
	      return groups;
	    }

	    var shouldAnimate = getShouldAnimate(id, last, forceShouldAnimate);
	    var displacement = {
	      draggableId: id,
	      shouldAnimate: shouldAnimate
	    };
	    groups.visible[id] = displacement;
	    return groups;
	  }, {
	    all: [],
	    visible: {},
	    invisible: {}
	  });
	}

	function getIndexOfLastItem(draggables, options) {
	  if (!draggables.length) {
	    return 0;
	  }

	  var indexOfLastItem = draggables[draggables.length - 1].descriptor.index;
	  return options.inHomeList ? indexOfLastItem : indexOfLastItem + 1;
	}

	function goAtEnd(_ref) {
	  var insideDestination = _ref.insideDestination,
	      inHomeList = _ref.inHomeList,
	      displacedBy = _ref.displacedBy,
	      destination = _ref.destination;
	  var newIndex = getIndexOfLastItem(insideDestination, {
	    inHomeList: inHomeList
	  });
	  return {
	    displaced: emptyGroups,
	    displacedBy: displacedBy,
	    at: {
	      type: 'REORDER',
	      destination: {
	        droppableId: destination.descriptor.id,
	        index: newIndex
	      }
	    }
	  };
	}

	function calculateReorderImpact(_ref2) {
	  var draggable = _ref2.draggable,
	      insideDestination = _ref2.insideDestination,
	      destination = _ref2.destination,
	      viewport = _ref2.viewport,
	      displacedBy = _ref2.displacedBy,
	      last = _ref2.last,
	      index = _ref2.index,
	      forceShouldAnimate = _ref2.forceShouldAnimate;
	  var inHomeList = isHomeOf(draggable, destination);

	  if (index == null) {
	    return goAtEnd({
	      insideDestination: insideDestination,
	      inHomeList: inHomeList,
	      displacedBy: displacedBy,
	      destination: destination
	    });
	  }

	  var match = find(insideDestination, function (item) {
	    return item.descriptor.index === index;
	  });

	  if (!match) {
	    return goAtEnd({
	      insideDestination: insideDestination,
	      inHomeList: inHomeList,
	      displacedBy: displacedBy,
	      destination: destination
	    });
	  }

	  var withoutDragging = removeDraggableFromList(draggable, insideDestination);
	  var sliceFrom = insideDestination.indexOf(match);
	  var impacted = withoutDragging.slice(sliceFrom);
	  var displaced = getDisplacementGroups({
	    afterDragging: impacted,
	    destination: destination,
	    displacedBy: displacedBy,
	    last: last,
	    viewport: viewport.frame,
	    forceShouldAnimate: forceShouldAnimate
	  });
	  return {
	    displaced: displaced,
	    displacedBy: displacedBy,
	    at: {
	      type: 'REORDER',
	      destination: {
	        droppableId: destination.descriptor.id,
	        index: index
	      }
	    }
	  };
	}

	function didStartAfterCritical(draggableId, afterCritical) {
	  return Boolean(afterCritical.effected[draggableId]);
	}

	var fromCombine = (function (_ref) {
	  var isMovingForward = _ref.isMovingForward,
	      destination = _ref.destination,
	      draggables = _ref.draggables,
	      combine = _ref.combine,
	      afterCritical = _ref.afterCritical;

	  if (!destination.isCombineEnabled) {
	    return null;
	  }

	  var combineId = combine.draggableId;
	  var combineWith = draggables[combineId];
	  var combineWithIndex = combineWith.descriptor.index;
	  var didCombineWithStartAfterCritical = didStartAfterCritical(combineId, afterCritical);

	  if (didCombineWithStartAfterCritical) {
	    if (isMovingForward) {
	      return combineWithIndex;
	    }

	    return combineWithIndex - 1;
	  }

	  if (isMovingForward) {
	    return combineWithIndex + 1;
	  }

	  return combineWithIndex;
	});

	var fromReorder = (function (_ref) {
	  var isMovingForward = _ref.isMovingForward,
	      isInHomeList = _ref.isInHomeList,
	      insideDestination = _ref.insideDestination,
	      location = _ref.location;

	  if (!insideDestination.length) {
	    return null;
	  }

	  var currentIndex = location.index;
	  var proposedIndex = isMovingForward ? currentIndex + 1 : currentIndex - 1;
	  var firstIndex = insideDestination[0].descriptor.index;
	  var lastIndex = insideDestination[insideDestination.length - 1].descriptor.index;
	  var upperBound = isInHomeList ? lastIndex : lastIndex + 1;

	  if (proposedIndex < firstIndex) {
	    return null;
	  }

	  if (proposedIndex > upperBound) {
	    return null;
	  }

	  return proposedIndex;
	});

	var moveToNextIndex = (function (_ref) {
	  var isMovingForward = _ref.isMovingForward,
	      isInHomeList = _ref.isInHomeList,
	      draggable = _ref.draggable,
	      draggables = _ref.draggables,
	      destination = _ref.destination,
	      insideDestination = _ref.insideDestination,
	      previousImpact = _ref.previousImpact,
	      viewport = _ref.viewport,
	      afterCritical = _ref.afterCritical;
	  var wasAt = previousImpact.at;
	  !wasAt ? invariant(false, 'Cannot move in direction without previous impact location')  : void 0;

	  if (wasAt.type === 'REORDER') {
	    var _newIndex = fromReorder({
	      isMovingForward: isMovingForward,
	      isInHomeList: isInHomeList,
	      location: wasAt.destination,
	      insideDestination: insideDestination
	    });

	    if (_newIndex == null) {
	      return null;
	    }

	    return calculateReorderImpact({
	      draggable: draggable,
	      insideDestination: insideDestination,
	      destination: destination,
	      viewport: viewport,
	      last: previousImpact.displaced,
	      displacedBy: previousImpact.displacedBy,
	      index: _newIndex
	    });
	  }

	  var newIndex = fromCombine({
	    isMovingForward: isMovingForward,
	    destination: destination,
	    displaced: previousImpact.displaced,
	    draggables: draggables,
	    combine: wasAt.combine,
	    afterCritical: afterCritical
	  });

	  if (newIndex == null) {
	    return null;
	  }

	  return calculateReorderImpact({
	    draggable: draggable,
	    insideDestination: insideDestination,
	    destination: destination,
	    viewport: viewport,
	    last: previousImpact.displaced,
	    displacedBy: previousImpact.displacedBy,
	    index: newIndex
	  });
	});

	var getCombinedItemDisplacement = (function (_ref) {
	  var displaced = _ref.displaced,
	      afterCritical = _ref.afterCritical,
	      combineWith = _ref.combineWith,
	      displacedBy = _ref.displacedBy;
	  var isDisplaced = Boolean(displaced.visible[combineWith] || displaced.invisible[combineWith]);

	  if (didStartAfterCritical(combineWith, afterCritical)) {
	    return isDisplaced ? origin : negate(displacedBy.point);
	  }

	  return isDisplaced ? displacedBy.point : origin;
	});

	var whenCombining = (function (_ref) {
	  var afterCritical = _ref.afterCritical,
	      impact = _ref.impact,
	      draggables = _ref.draggables;
	  var combine = tryGetCombine(impact);
	  !combine ? invariant(false)  : void 0;
	  var combineWith = combine.draggableId;
	  var center = draggables[combineWith].page.borderBox.center;
	  var displaceBy = getCombinedItemDisplacement({
	    displaced: impact.displaced,
	    afterCritical: afterCritical,
	    combineWith: combineWith,
	    displacedBy: impact.displacedBy
	  });
	  return add(center, displaceBy);
	});

	var distanceFromStartToBorderBoxCenter = function distanceFromStartToBorderBoxCenter(axis, box) {
	  return box.margin[axis.start] + box.borderBox[axis.size] / 2;
	};

	var distanceFromEndToBorderBoxCenter = function distanceFromEndToBorderBoxCenter(axis, box) {
	  return box.margin[axis.end] + box.borderBox[axis.size] / 2;
	};

	var getCrossAxisBorderBoxCenter = function getCrossAxisBorderBoxCenter(axis, target, isMoving) {
	  return target[axis.crossAxisStart] + isMoving.margin[axis.crossAxisStart] + isMoving.borderBox[axis.crossAxisSize] / 2;
	};

	var goAfter = function goAfter(_ref) {
	  var axis = _ref.axis,
	      moveRelativeTo = _ref.moveRelativeTo,
	      isMoving = _ref.isMoving;
	  return patch(axis.line, moveRelativeTo.marginBox[axis.end] + distanceFromStartToBorderBoxCenter(axis, isMoving), getCrossAxisBorderBoxCenter(axis, moveRelativeTo.marginBox, isMoving));
	};
	var goBefore = function goBefore(_ref2) {
	  var axis = _ref2.axis,
	      moveRelativeTo = _ref2.moveRelativeTo,
	      isMoving = _ref2.isMoving;
	  return patch(axis.line, moveRelativeTo.marginBox[axis.start] - distanceFromEndToBorderBoxCenter(axis, isMoving), getCrossAxisBorderBoxCenter(axis, moveRelativeTo.marginBox, isMoving));
	};
	var goIntoStart = function goIntoStart(_ref3) {
	  var axis = _ref3.axis,
	      moveInto = _ref3.moveInto,
	      isMoving = _ref3.isMoving;
	  return patch(axis.line, moveInto.contentBox[axis.start] + distanceFromStartToBorderBoxCenter(axis, isMoving), getCrossAxisBorderBoxCenter(axis, moveInto.contentBox, isMoving));
	};

	var whenReordering = (function (_ref) {
	  var impact = _ref.impact,
	      draggable = _ref.draggable,
	      draggables = _ref.draggables,
	      droppable = _ref.droppable,
	      afterCritical = _ref.afterCritical;
	  var insideDestination = getDraggablesInsideDroppable(droppable.descriptor.id, draggables);
	  var draggablePage = draggable.page;
	  var axis = droppable.axis;

	  if (!insideDestination.length) {
	    return goIntoStart({
	      axis: axis,
	      moveInto: droppable.page,
	      isMoving: draggablePage
	    });
	  }

	  var displaced = impact.displaced,
	      displacedBy = impact.displacedBy;
	  var closestAfter = displaced.all[0];

	  if (closestAfter) {
	    var closest = draggables[closestAfter];

	    if (didStartAfterCritical(closestAfter, afterCritical)) {
	      return goBefore({
	        axis: axis,
	        moveRelativeTo: closest.page,
	        isMoving: draggablePage
	      });
	    }

	    var withDisplacement = cssBoxModel_cjs.offset(closest.page, displacedBy.point);
	    return goBefore({
	      axis: axis,
	      moveRelativeTo: withDisplacement,
	      isMoving: draggablePage
	    });
	  }

	  var last = insideDestination[insideDestination.length - 1];

	  if (last.descriptor.id === draggable.descriptor.id) {
	    return draggablePage.borderBox.center;
	  }

	  if (didStartAfterCritical(last.descriptor.id, afterCritical)) {
	    var page = cssBoxModel_cjs.offset(last.page, negate(afterCritical.displacedBy.point));
	    return goAfter({
	      axis: axis,
	      moveRelativeTo: page,
	      isMoving: draggablePage
	    });
	  }

	  return goAfter({
	    axis: axis,
	    moveRelativeTo: last.page,
	    isMoving: draggablePage
	  });
	});

	var withDroppableDisplacement = (function (droppable, point) {
	  var frame = droppable.frame;

	  if (!frame) {
	    return point;
	  }

	  return add(point, frame.scroll.diff.displacement);
	});

	var getResultWithoutDroppableDisplacement = function getResultWithoutDroppableDisplacement(_ref) {
	  var impact = _ref.impact,
	      draggable = _ref.draggable,
	      droppable = _ref.droppable,
	      draggables = _ref.draggables,
	      afterCritical = _ref.afterCritical;
	  var original = draggable.page.borderBox.center;
	  var at = impact.at;

	  if (!droppable) {
	    return original;
	  }

	  if (!at) {
	    return original;
	  }

	  if (at.type === 'REORDER') {
	    return whenReordering({
	      impact: impact,
	      draggable: draggable,
	      draggables: draggables,
	      droppable: droppable,
	      afterCritical: afterCritical
	    });
	  }

	  return whenCombining({
	    impact: impact,
	    draggables: draggables,
	    afterCritical: afterCritical
	  });
	};

	var getPageBorderBoxCenterFromImpact = (function (args) {
	  var withoutDisplacement = getResultWithoutDroppableDisplacement(args);
	  var droppable = args.droppable;
	  var withDisplacement = droppable ? withDroppableDisplacement(droppable, withoutDisplacement) : withoutDisplacement;
	  return withDisplacement;
	});

	var scrollViewport = (function (viewport, newScroll) {
	  var diff = subtract(newScroll, viewport.scroll.initial);
	  var displacement = negate(diff);
	  var frame = cssBoxModel_cjs.getRect({
	    top: newScroll.y,
	    bottom: newScroll.y + viewport.frame.height,
	    left: newScroll.x,
	    right: newScroll.x + viewport.frame.width
	  });
	  var updated = {
	    frame: frame,
	    scroll: {
	      initial: viewport.scroll.initial,
	      max: viewport.scroll.max,
	      current: newScroll,
	      diff: {
	        value: diff,
	        displacement: displacement
	      }
	    }
	  };
	  return updated;
	});

	function getDraggables(ids, draggables) {
	  return ids.map(function (id) {
	    return draggables[id];
	  });
	}

	function tryGetVisible(id, groups) {
	  for (var i = 0; i < groups.length; i++) {
	    var displacement = groups[i].visible[id];

	    if (displacement) {
	      return displacement;
	    }
	  }

	  return null;
	}

	var speculativelyIncrease = (function (_ref) {
	  var impact = _ref.impact,
	      viewport = _ref.viewport,
	      destination = _ref.destination,
	      draggables = _ref.draggables,
	      maxScrollChange = _ref.maxScrollChange;
	  var scrolledViewport = scrollViewport(viewport, add(viewport.scroll.current, maxScrollChange));
	  var scrolledDroppable = destination.frame ? scrollDroppable(destination, add(destination.frame.scroll.current, maxScrollChange)) : destination;
	  var last = impact.displaced;
	  var withViewportScroll = getDisplacementGroups({
	    afterDragging: getDraggables(last.all, draggables),
	    destination: destination,
	    displacedBy: impact.displacedBy,
	    viewport: scrolledViewport.frame,
	    last: last,
	    forceShouldAnimate: false
	  });
	  var withDroppableScroll = getDisplacementGroups({
	    afterDragging: getDraggables(last.all, draggables),
	    destination: scrolledDroppable,
	    displacedBy: impact.displacedBy,
	    viewport: viewport.frame,
	    last: last,
	    forceShouldAnimate: false
	  });
	  var invisible = {};
	  var visible = {};
	  var groups = [last, withViewportScroll, withDroppableScroll];
	  last.all.forEach(function (id) {
	    var displacement = tryGetVisible(id, groups);

	    if (displacement) {
	      visible[id] = displacement;
	      return;
	    }

	    invisible[id] = true;
	  });

	  var newImpact = _extends({}, impact, {
	    displaced: {
	      all: last.all,
	      invisible: invisible,
	      visible: visible
	    }
	  });

	  return newImpact;
	});

	var withViewportDisplacement = (function (viewport, point) {
	  return add(viewport.scroll.diff.displacement, point);
	});

	var getClientFromPageBorderBoxCenter = (function (_ref) {
	  var pageBorderBoxCenter = _ref.pageBorderBoxCenter,
	      draggable = _ref.draggable,
	      viewport = _ref.viewport;
	  var withoutPageScrollChange = withViewportDisplacement(viewport, pageBorderBoxCenter);
	  var offset = subtract(withoutPageScrollChange, draggable.page.borderBox.center);
	  return add(draggable.client.borderBox.center, offset);
	});

	var isTotallyVisibleInNewLocation = (function (_ref) {
	  var draggable = _ref.draggable,
	      destination = _ref.destination,
	      newPageBorderBoxCenter = _ref.newPageBorderBoxCenter,
	      viewport = _ref.viewport,
	      withDroppableDisplacement = _ref.withDroppableDisplacement,
	      _ref$onlyOnMainAxis = _ref.onlyOnMainAxis,
	      onlyOnMainAxis = _ref$onlyOnMainAxis === void 0 ? false : _ref$onlyOnMainAxis;
	  var changeNeeded = subtract(newPageBorderBoxCenter, draggable.page.borderBox.center);
	  var shifted = offsetByPosition(draggable.page.borderBox, changeNeeded);
	  var args = {
	    target: shifted,
	    destination: destination,
	    withDroppableDisplacement: withDroppableDisplacement,
	    viewport: viewport
	  };
	  return onlyOnMainAxis ? isTotallyVisibleOnAxis(args) : isTotallyVisible(args);
	});

	var moveToNextPlace = (function (_ref) {
	  var isMovingForward = _ref.isMovingForward,
	      draggable = _ref.draggable,
	      destination = _ref.destination,
	      draggables = _ref.draggables,
	      previousImpact = _ref.previousImpact,
	      viewport = _ref.viewport,
	      previousPageBorderBoxCenter = _ref.previousPageBorderBoxCenter,
	      previousClientSelection = _ref.previousClientSelection,
	      afterCritical = _ref.afterCritical;

	  if (!destination.isEnabled) {
	    return null;
	  }

	  var insideDestination = getDraggablesInsideDroppable(destination.descriptor.id, draggables);
	  var isInHomeList = isHomeOf(draggable, destination);
	  var impact = moveToNextCombine({
	    isMovingForward: isMovingForward,
	    draggable: draggable,
	    destination: destination,
	    insideDestination: insideDestination,
	    previousImpact: previousImpact
	  }) || moveToNextIndex({
	    isMovingForward: isMovingForward,
	    isInHomeList: isInHomeList,
	    draggable: draggable,
	    draggables: draggables,
	    destination: destination,
	    insideDestination: insideDestination,
	    previousImpact: previousImpact,
	    viewport: viewport,
	    afterCritical: afterCritical
	  });

	  if (!impact) {
	    return null;
	  }

	  var pageBorderBoxCenter = getPageBorderBoxCenterFromImpact({
	    impact: impact,
	    draggable: draggable,
	    droppable: destination,
	    draggables: draggables,
	    afterCritical: afterCritical
	  });
	  var isVisibleInNewLocation = isTotallyVisibleInNewLocation({
	    draggable: draggable,
	    destination: destination,
	    newPageBorderBoxCenter: pageBorderBoxCenter,
	    viewport: viewport.frame,
	    withDroppableDisplacement: false,
	    onlyOnMainAxis: true
	  });

	  if (isVisibleInNewLocation) {
	    var clientSelection = getClientFromPageBorderBoxCenter({
	      pageBorderBoxCenter: pageBorderBoxCenter,
	      draggable: draggable,
	      viewport: viewport
	    });
	    return {
	      clientSelection: clientSelection,
	      impact: impact,
	      scrollJumpRequest: null
	    };
	  }

	  var distance = subtract(pageBorderBoxCenter, previousPageBorderBoxCenter);
	  var cautious = speculativelyIncrease({
	    impact: impact,
	    viewport: viewport,
	    destination: destination,
	    draggables: draggables,
	    maxScrollChange: distance
	  });
	  return {
	    clientSelection: previousClientSelection,
	    impact: cautious,
	    scrollJumpRequest: distance
	  };
	});

	var getKnownActive = function getKnownActive(droppable) {
	  var rect = droppable.subject.active;
	  !rect ? invariant(false, 'Cannot get clipped area from droppable')  : void 0;
	  return rect;
	};

	var getBestCrossAxisDroppable = (function (_ref) {
	  var isMovingForward = _ref.isMovingForward,
	      pageBorderBoxCenter = _ref.pageBorderBoxCenter,
	      source = _ref.source,
	      droppables = _ref.droppables,
	      viewport = _ref.viewport;
	  var active = source.subject.active;

	  if (!active) {
	    return null;
	  }

	  var axis = source.axis;
	  var isBetweenSourceClipped = isWithin(active[axis.start], active[axis.end]);
	  var candidates = toDroppableList(droppables).filter(function (droppable) {
	    return droppable !== source;
	  }).filter(function (droppable) {
	    return droppable.isEnabled;
	  }).filter(function (droppable) {
	    return Boolean(droppable.subject.active);
	  }).filter(function (droppable) {
	    return isPartiallyVisibleThroughFrame(viewport.frame)(getKnownActive(droppable));
	  }).filter(function (droppable) {
	    var activeOfTarget = getKnownActive(droppable);

	    if (isMovingForward) {
	      return active[axis.crossAxisEnd] < activeOfTarget[axis.crossAxisEnd];
	    }

	    return activeOfTarget[axis.crossAxisStart] < active[axis.crossAxisStart];
	  }).filter(function (droppable) {
	    var activeOfTarget = getKnownActive(droppable);
	    var isBetweenDestinationClipped = isWithin(activeOfTarget[axis.start], activeOfTarget[axis.end]);
	    return isBetweenSourceClipped(activeOfTarget[axis.start]) || isBetweenSourceClipped(activeOfTarget[axis.end]) || isBetweenDestinationClipped(active[axis.start]) || isBetweenDestinationClipped(active[axis.end]);
	  }).sort(function (a, b) {
	    var first = getKnownActive(a)[axis.crossAxisStart];
	    var second = getKnownActive(b)[axis.crossAxisStart];

	    if (isMovingForward) {
	      return first - second;
	    }

	    return second - first;
	  }).filter(function (droppable, index, array) {
	    return getKnownActive(droppable)[axis.crossAxisStart] === getKnownActive(array[0])[axis.crossAxisStart];
	  });

	  if (!candidates.length) {
	    return null;
	  }

	  if (candidates.length === 1) {
	    return candidates[0];
	  }

	  var contains = candidates.filter(function (droppable) {
	    var isWithinDroppable = isWithin(getKnownActive(droppable)[axis.start], getKnownActive(droppable)[axis.end]);
	    return isWithinDroppable(pageBorderBoxCenter[axis.line]);
	  });

	  if (contains.length === 1) {
	    return contains[0];
	  }

	  if (contains.length > 1) {
	    return contains.sort(function (a, b) {
	      return getKnownActive(a)[axis.start] - getKnownActive(b)[axis.start];
	    })[0];
	  }

	  return candidates.sort(function (a, b) {
	    var first = closest(pageBorderBoxCenter, getCorners(getKnownActive(a)));
	    var second = closest(pageBorderBoxCenter, getCorners(getKnownActive(b)));

	    if (first !== second) {
	      return first - second;
	    }

	    return getKnownActive(a)[axis.start] - getKnownActive(b)[axis.start];
	  })[0];
	});

	var getCurrentPageBorderBoxCenter = function getCurrentPageBorderBoxCenter(draggable, afterCritical) {
	  var original = draggable.page.borderBox.center;
	  return didStartAfterCritical(draggable.descriptor.id, afterCritical) ? subtract(original, afterCritical.displacedBy.point) : original;
	};
	var getCurrentPageBorderBox = function getCurrentPageBorderBox(draggable, afterCritical) {
	  var original = draggable.page.borderBox;
	  return didStartAfterCritical(draggable.descriptor.id, afterCritical) ? offsetByPosition(original, negate(afterCritical.displacedBy.point)) : original;
	};

	var getClosestDraggable = (function (_ref) {
	  var pageBorderBoxCenter = _ref.pageBorderBoxCenter,
	      viewport = _ref.viewport,
	      destination = _ref.destination,
	      insideDestination = _ref.insideDestination,
	      afterCritical = _ref.afterCritical;
	  var sorted = insideDestination.filter(function (draggable) {
	    return isTotallyVisible({
	      target: getCurrentPageBorderBox(draggable, afterCritical),
	      destination: destination,
	      viewport: viewport.frame,
	      withDroppableDisplacement: true
	    });
	  }).sort(function (a, b) {
	    var distanceToA = distance(pageBorderBoxCenter, withDroppableDisplacement(destination, getCurrentPageBorderBoxCenter(a, afterCritical)));
	    var distanceToB = distance(pageBorderBoxCenter, withDroppableDisplacement(destination, getCurrentPageBorderBoxCenter(b, afterCritical)));

	    if (distanceToA < distanceToB) {
	      return -1;
	    }

	    if (distanceToB < distanceToA) {
	      return 1;
	    }

	    return a.descriptor.index - b.descriptor.index;
	  });
	  return sorted[0] || null;
	});

	var getDisplacedBy = memoizeOne(function getDisplacedBy(axis, displaceBy) {
	  var displacement = displaceBy[axis.line];
	  return {
	    value: displacement,
	    point: patch(axis.line, displacement)
	  };
	});

	var getRequiredGrowthForPlaceholder = function getRequiredGrowthForPlaceholder(droppable, placeholderSize, draggables) {
	  var axis = droppable.axis;

	  if (droppable.descriptor.mode === 'virtual') {
	    return patch(axis.line, placeholderSize[axis.line]);
	  }

	  var availableSpace = droppable.subject.page.contentBox[axis.size];
	  var insideDroppable = getDraggablesInsideDroppable(droppable.descriptor.id, draggables);
	  var spaceUsed = insideDroppable.reduce(function (sum, dimension) {
	    return sum + dimension.client.marginBox[axis.size];
	  }, 0);
	  var requiredSpace = spaceUsed + placeholderSize[axis.line];
	  var needsToGrowBy = requiredSpace - availableSpace;

	  if (needsToGrowBy <= 0) {
	    return null;
	  }

	  return patch(axis.line, needsToGrowBy);
	};

	var withMaxScroll = function withMaxScroll(frame, max) {
	  return _extends({}, frame, {
	    scroll: _extends({}, frame.scroll, {
	      max: max
	    })
	  });
	};

	var addPlaceholder = function addPlaceholder(droppable, draggable, draggables) {
	  var frame = droppable.frame;
	  !!isHomeOf(draggable, droppable) ? invariant(false, 'Should not add placeholder space to home list')  : void 0;
	  !!droppable.subject.withPlaceholder ? invariant(false, 'Cannot add placeholder size to a subject when it already has one')  : void 0;
	  var placeholderSize = getDisplacedBy(droppable.axis, draggable.displaceBy).point;
	  var requiredGrowth = getRequiredGrowthForPlaceholder(droppable, placeholderSize, draggables);
	  var added = {
	    placeholderSize: placeholderSize,
	    increasedBy: requiredGrowth,
	    oldFrameMaxScroll: droppable.frame ? droppable.frame.scroll.max : null
	  };

	  if (!frame) {
	    var _subject = getSubject({
	      page: droppable.subject.page,
	      withPlaceholder: added,
	      axis: droppable.axis,
	      frame: droppable.frame
	    });

	    return _extends({}, droppable, {
	      subject: _subject
	    });
	  }

	  var maxScroll = requiredGrowth ? add(frame.scroll.max, requiredGrowth) : frame.scroll.max;
	  var newFrame = withMaxScroll(frame, maxScroll);
	  var subject = getSubject({
	    page: droppable.subject.page,
	    withPlaceholder: added,
	    axis: droppable.axis,
	    frame: newFrame
	  });
	  return _extends({}, droppable, {
	    subject: subject,
	    frame: newFrame
	  });
	};
	var removePlaceholder = function removePlaceholder(droppable) {
	  var added = droppable.subject.withPlaceholder;
	  !added ? invariant(false, 'Cannot remove placeholder form subject when there was none')  : void 0;
	  var frame = droppable.frame;

	  if (!frame) {
	    var _subject2 = getSubject({
	      page: droppable.subject.page,
	      axis: droppable.axis,
	      frame: null,
	      withPlaceholder: null
	    });

	    return _extends({}, droppable, {
	      subject: _subject2
	    });
	  }

	  var oldMaxScroll = added.oldFrameMaxScroll;
	  !oldMaxScroll ? invariant(false, 'Expected droppable with frame to have old max frame scroll when removing placeholder')  : void 0;
	  var newFrame = withMaxScroll(frame, oldMaxScroll);
	  var subject = getSubject({
	    page: droppable.subject.page,
	    axis: droppable.axis,
	    frame: newFrame,
	    withPlaceholder: null
	  });
	  return _extends({}, droppable, {
	    subject: subject,
	    frame: newFrame
	  });
	};

	var moveToNewDroppable = (function (_ref) {
	  var previousPageBorderBoxCenter = _ref.previousPageBorderBoxCenter,
	      moveRelativeTo = _ref.moveRelativeTo,
	      insideDestination = _ref.insideDestination,
	      draggable = _ref.draggable,
	      draggables = _ref.draggables,
	      destination = _ref.destination,
	      viewport = _ref.viewport,
	      afterCritical = _ref.afterCritical;

	  if (!moveRelativeTo) {
	    if (insideDestination.length) {
	      return null;
	    }

	    var proposed = {
	      displaced: emptyGroups,
	      displacedBy: noDisplacedBy,
	      at: {
	        type: 'REORDER',
	        destination: {
	          droppableId: destination.descriptor.id,
	          index: 0
	        }
	      }
	    };
	    var proposedPageBorderBoxCenter = getPageBorderBoxCenterFromImpact({
	      impact: proposed,
	      draggable: draggable,
	      droppable: destination,
	      draggables: draggables,
	      afterCritical: afterCritical
	    });
	    var withPlaceholder = isHomeOf(draggable, destination) ? destination : addPlaceholder(destination, draggable, draggables);
	    var isVisibleInNewLocation = isTotallyVisibleInNewLocation({
	      draggable: draggable,
	      destination: withPlaceholder,
	      newPageBorderBoxCenter: proposedPageBorderBoxCenter,
	      viewport: viewport.frame,
	      withDroppableDisplacement: false,
	      onlyOnMainAxis: true
	    });
	    return isVisibleInNewLocation ? proposed : null;
	  }

	  var isGoingBeforeTarget = Boolean(previousPageBorderBoxCenter[destination.axis.line] <= moveRelativeTo.page.borderBox.center[destination.axis.line]);

	  var proposedIndex = function () {
	    var relativeTo = moveRelativeTo.descriptor.index;

	    if (moveRelativeTo.descriptor.id === draggable.descriptor.id) {
	      return relativeTo;
	    }

	    if (isGoingBeforeTarget) {
	      return relativeTo;
	    }

	    return relativeTo + 1;
	  }();

	  var displacedBy = getDisplacedBy(destination.axis, draggable.displaceBy);
	  return calculateReorderImpact({
	    draggable: draggable,
	    insideDestination: insideDestination,
	    destination: destination,
	    viewport: viewport,
	    displacedBy: displacedBy,
	    last: emptyGroups,
	    index: proposedIndex
	  });
	});

	var moveCrossAxis = (function (_ref) {
	  var isMovingForward = _ref.isMovingForward,
	      previousPageBorderBoxCenter = _ref.previousPageBorderBoxCenter,
	      draggable = _ref.draggable,
	      isOver = _ref.isOver,
	      draggables = _ref.draggables,
	      droppables = _ref.droppables,
	      viewport = _ref.viewport,
	      afterCritical = _ref.afterCritical;
	  var destination = getBestCrossAxisDroppable({
	    isMovingForward: isMovingForward,
	    pageBorderBoxCenter: previousPageBorderBoxCenter,
	    source: isOver,
	    droppables: droppables,
	    viewport: viewport
	  });

	  if (!destination) {
	    return null;
	  }

	  var insideDestination = getDraggablesInsideDroppable(destination.descriptor.id, draggables);
	  var moveRelativeTo = getClosestDraggable({
	    pageBorderBoxCenter: previousPageBorderBoxCenter,
	    viewport: viewport,
	    destination: destination,
	    insideDestination: insideDestination,
	    afterCritical: afterCritical
	  });
	  var impact = moveToNewDroppable({
	    previousPageBorderBoxCenter: previousPageBorderBoxCenter,
	    destination: destination,
	    draggable: draggable,
	    draggables: draggables,
	    moveRelativeTo: moveRelativeTo,
	    insideDestination: insideDestination,
	    viewport: viewport,
	    afterCritical: afterCritical
	  });

	  if (!impact) {
	    return null;
	  }

	  var pageBorderBoxCenter = getPageBorderBoxCenterFromImpact({
	    impact: impact,
	    draggable: draggable,
	    droppable: destination,
	    draggables: draggables,
	    afterCritical: afterCritical
	  });
	  var clientSelection = getClientFromPageBorderBoxCenter({
	    pageBorderBoxCenter: pageBorderBoxCenter,
	    draggable: draggable,
	    viewport: viewport
	  });
	  return {
	    clientSelection: clientSelection,
	    impact: impact,
	    scrollJumpRequest: null
	  };
	});

	var whatIsDraggedOver = (function (impact) {
	  var at = impact.at;

	  if (!at) {
	    return null;
	  }

	  if (at.type === 'REORDER') {
	    return at.destination.droppableId;
	  }

	  return at.combine.droppableId;
	});

	var getDroppableOver = function getDroppableOver(impact, droppables) {
	  var id = whatIsDraggedOver(impact);
	  return id ? droppables[id] : null;
	};

	var moveInDirection = (function (_ref) {
	  var state = _ref.state,
	      type = _ref.type;
	  var isActuallyOver = getDroppableOver(state.impact, state.dimensions.droppables);
	  var isMainAxisMovementAllowed = Boolean(isActuallyOver);
	  var home = state.dimensions.droppables[state.critical.droppable.id];
	  var isOver = isActuallyOver || home;
	  var direction = isOver.axis.direction;
	  var isMovingOnMainAxis = direction === 'vertical' && (type === 'MOVE_UP' || type === 'MOVE_DOWN') || direction === 'horizontal' && (type === 'MOVE_LEFT' || type === 'MOVE_RIGHT');

	  if (isMovingOnMainAxis && !isMainAxisMovementAllowed) {
	    return null;
	  }

	  var isMovingForward = type === 'MOVE_DOWN' || type === 'MOVE_RIGHT';
	  var draggable = state.dimensions.draggables[state.critical.draggable.id];
	  var previousPageBorderBoxCenter = state.current.page.borderBoxCenter;
	  var _state$dimensions = state.dimensions,
	      draggables = _state$dimensions.draggables,
	      droppables = _state$dimensions.droppables;
	  return isMovingOnMainAxis ? moveToNextPlace({
	    isMovingForward: isMovingForward,
	    previousPageBorderBoxCenter: previousPageBorderBoxCenter,
	    draggable: draggable,
	    destination: isOver,
	    draggables: draggables,
	    viewport: state.viewport,
	    previousClientSelection: state.current.client.selection,
	    previousImpact: state.impact,
	    afterCritical: state.afterCritical
	  }) : moveCrossAxis({
	    isMovingForward: isMovingForward,
	    previousPageBorderBoxCenter: previousPageBorderBoxCenter,
	    draggable: draggable,
	    isOver: isOver,
	    draggables: draggables,
	    droppables: droppables,
	    viewport: state.viewport,
	    afterCritical: state.afterCritical
	  });
	});

	function isMovementAllowed(state) {
	  return state.phase === 'DRAGGING' || state.phase === 'COLLECTING';
	}

	function isPositionInFrame(frame) {
	  var isWithinVertical = isWithin(frame.top, frame.bottom);
	  var isWithinHorizontal = isWithin(frame.left, frame.right);
	  return function run(point) {
	    return isWithinVertical(point.y) && isWithinHorizontal(point.x);
	  };
	}

	function getHasOverlap(first, second) {
	  return first.left < second.right && first.right > second.left && first.top < second.bottom && first.bottom > second.top;
	}

	function getFurthestAway(_ref) {
	  var pageBorderBox = _ref.pageBorderBox,
	      draggable = _ref.draggable,
	      candidates = _ref.candidates;
	  var startCenter = draggable.page.borderBox.center;
	  var sorted = candidates.map(function (candidate) {
	    var axis = candidate.axis;
	    var target = patch(candidate.axis.line, pageBorderBox.center[axis.line], candidate.page.borderBox.center[axis.crossAxisLine]);
	    return {
	      id: candidate.descriptor.id,
	      distance: distance(startCenter, target)
	    };
	  }).sort(function (a, b) {
	    return b.distance - a.distance;
	  });
	  return sorted[0] ? sorted[0].id : null;
	}

	function getDroppableOver$1(_ref2) {
	  var pageBorderBox = _ref2.pageBorderBox,
	      draggable = _ref2.draggable,
	      droppables = _ref2.droppables;
	  var candidates = toDroppableList(droppables).filter(function (item) {
	    if (!item.isEnabled) {
	      return false;
	    }

	    var active = item.subject.active;

	    if (!active) {
	      return false;
	    }

	    if (!getHasOverlap(pageBorderBox, active)) {
	      return false;
	    }

	    if (isPositionInFrame(active)(pageBorderBox.center)) {
	      return true;
	    }

	    var axis = item.axis;
	    var childCenter = active.center[axis.crossAxisLine];
	    var crossAxisStart = pageBorderBox[axis.crossAxisStart];
	    var crossAxisEnd = pageBorderBox[axis.crossAxisEnd];
	    var isContained = isWithin(active[axis.crossAxisStart], active[axis.crossAxisEnd]);
	    var isStartContained = isContained(crossAxisStart);
	    var isEndContained = isContained(crossAxisEnd);

	    if (!isStartContained && !isEndContained) {
	      return true;
	    }

	    if (isStartContained) {
	      return crossAxisStart < childCenter;
	    }

	    return crossAxisEnd > childCenter;
	  });

	  if (!candidates.length) {
	    return null;
	  }

	  if (candidates.length === 1) {
	    return candidates[0].descriptor.id;
	  }

	  return getFurthestAway({
	    pageBorderBox: pageBorderBox,
	    draggable: draggable,
	    candidates: candidates
	  });
	}

	var offsetRectByPosition = function offsetRectByPosition(rect, point) {
	  return cssBoxModel_cjs.getRect(offsetByPosition(rect, point));
	};

	var withDroppableScroll = (function (droppable, area) {
	  var frame = droppable.frame;

	  if (!frame) {
	    return area;
	  }

	  return offsetRectByPosition(area, frame.scroll.diff.value);
	});

	function getIsDisplaced(_ref) {
	  var displaced = _ref.displaced,
	      id = _ref.id;
	  return Boolean(displaced.visible[id] || displaced.invisible[id]);
	}

	function atIndex(_ref) {
	  var draggable = _ref.draggable,
	      closest = _ref.closest,
	      inHomeList = _ref.inHomeList;

	  if (!closest) {
	    return null;
	  }

	  if (!inHomeList) {
	    return closest.descriptor.index;
	  }

	  if (closest.descriptor.index > draggable.descriptor.index) {
	    return closest.descriptor.index - 1;
	  }

	  return closest.descriptor.index;
	}

	var getReorderImpact = (function (_ref2) {
	  var targetRect = _ref2.pageBorderBoxWithDroppableScroll,
	      draggable = _ref2.draggable,
	      destination = _ref2.destination,
	      insideDestination = _ref2.insideDestination,
	      last = _ref2.last,
	      viewport = _ref2.viewport,
	      afterCritical = _ref2.afterCritical;
	  var axis = destination.axis;
	  var displacedBy = getDisplacedBy(destination.axis, draggable.displaceBy);
	  var displacement = displacedBy.value;
	  var targetStart = targetRect[axis.start];
	  var targetEnd = targetRect[axis.end];
	  var withoutDragging = removeDraggableFromList(draggable, insideDestination);
	  var closest = find(withoutDragging, function (child) {
	    var id = child.descriptor.id;
	    var childCenter = child.page.borderBox.center[axis.line];
	    var didStartAfterCritical$1 = didStartAfterCritical(id, afterCritical);
	    var isDisplaced = getIsDisplaced({
	      displaced: last,
	      id: id
	    });

	    if (didStartAfterCritical$1) {
	      if (isDisplaced) {
	        return targetEnd <= childCenter;
	      }

	      return targetStart < childCenter - displacement;
	    }

	    if (isDisplaced) {
	      return targetEnd <= childCenter + displacement;
	    }

	    return targetStart < childCenter;
	  });
	  var newIndex = atIndex({
	    draggable: draggable,
	    closest: closest,
	    inHomeList: isHomeOf(draggable, destination)
	  });
	  return calculateReorderImpact({
	    draggable: draggable,
	    insideDestination: insideDestination,
	    destination: destination,
	    viewport: viewport,
	    last: last,
	    displacedBy: displacedBy,
	    index: newIndex
	  });
	});

	var combineThresholdDivisor = 4;
	var getCombineImpact = (function (_ref) {
	  var draggable = _ref.draggable,
	      targetRect = _ref.pageBorderBoxWithDroppableScroll,
	      previousImpact = _ref.previousImpact,
	      destination = _ref.destination,
	      insideDestination = _ref.insideDestination,
	      afterCritical = _ref.afterCritical;

	  if (!destination.isCombineEnabled) {
	    return null;
	  }

	  var axis = destination.axis;
	  var displacedBy = getDisplacedBy(destination.axis, draggable.displaceBy);
	  var displacement = displacedBy.value;
	  var targetStart = targetRect[axis.start];
	  var targetEnd = targetRect[axis.end];
	  var withoutDragging = removeDraggableFromList(draggable, insideDestination);
	  var combineWith = find(withoutDragging, function (child) {
	    var id = child.descriptor.id;
	    var childRect = child.page.borderBox;
	    var childSize = childRect[axis.size];
	    var threshold = childSize / combineThresholdDivisor;
	    var didStartAfterCritical$1 = didStartAfterCritical(id, afterCritical);
	    var isDisplaced = getIsDisplaced({
	      displaced: previousImpact.displaced,
	      id: id
	    });

	    if (didStartAfterCritical$1) {
	      if (isDisplaced) {
	        return targetEnd > childRect[axis.start] + threshold && targetEnd < childRect[axis.end] - threshold;
	      }

	      return targetStart > childRect[axis.start] - displacement + threshold && targetStart < childRect[axis.end] - displacement - threshold;
	    }

	    if (isDisplaced) {
	      return targetEnd > childRect[axis.start] + displacement + threshold && targetEnd < childRect[axis.end] + displacement - threshold;
	    }

	    return targetStart > childRect[axis.start] + threshold && targetStart < childRect[axis.end] - threshold;
	  });

	  if (!combineWith) {
	    return null;
	  }

	  var impact = {
	    displacedBy: displacedBy,
	    displaced: previousImpact.displaced,
	    at: {
	      type: 'COMBINE',
	      combine: {
	        draggableId: combineWith.descriptor.id,
	        droppableId: destination.descriptor.id
	      }
	    }
	  };
	  return impact;
	});

	var getDragImpact = (function (_ref) {
	  var pageOffset = _ref.pageOffset,
	      draggable = _ref.draggable,
	      draggables = _ref.draggables,
	      droppables = _ref.droppables,
	      previousImpact = _ref.previousImpact,
	      viewport = _ref.viewport,
	      afterCritical = _ref.afterCritical;
	  var pageBorderBox = offsetRectByPosition(draggable.page.borderBox, pageOffset);
	  var destinationId = getDroppableOver$1({
	    pageBorderBox: pageBorderBox,
	    draggable: draggable,
	    droppables: droppables
	  });

	  if (!destinationId) {
	    return noImpact;
	  }

	  var destination = droppables[destinationId];
	  var insideDestination = getDraggablesInsideDroppable(destination.descriptor.id, draggables);
	  var pageBorderBoxWithDroppableScroll = withDroppableScroll(destination, pageBorderBox);
	  return getCombineImpact({
	    pageBorderBoxWithDroppableScroll: pageBorderBoxWithDroppableScroll,
	    draggable: draggable,
	    previousImpact: previousImpact,
	    destination: destination,
	    insideDestination: insideDestination,
	    afterCritical: afterCritical
	  }) || getReorderImpact({
	    pageBorderBoxWithDroppableScroll: pageBorderBoxWithDroppableScroll,
	    draggable: draggable,
	    destination: destination,
	    insideDestination: insideDestination,
	    last: previousImpact.displaced,
	    viewport: viewport,
	    afterCritical: afterCritical
	  });
	});

	var patchDroppableMap = (function (droppables, updated) {
	  var _extends2;

	  return _extends({}, droppables, (_extends2 = {}, _extends2[updated.descriptor.id] = updated, _extends2));
	});

	var clearUnusedPlaceholder = function clearUnusedPlaceholder(_ref) {
	  var previousImpact = _ref.previousImpact,
	      impact = _ref.impact,
	      droppables = _ref.droppables;
	  var last = whatIsDraggedOver(previousImpact);
	  var now = whatIsDraggedOver(impact);

	  if (!last) {
	    return droppables;
	  }

	  if (last === now) {
	    return droppables;
	  }

	  var lastDroppable = droppables[last];

	  if (!lastDroppable.subject.withPlaceholder) {
	    return droppables;
	  }

	  var updated = removePlaceholder(lastDroppable);
	  return patchDroppableMap(droppables, updated);
	};

	var recomputePlaceholders = (function (_ref2) {
	  var draggable = _ref2.draggable,
	      draggables = _ref2.draggables,
	      droppables = _ref2.droppables,
	      previousImpact = _ref2.previousImpact,
	      impact = _ref2.impact;
	  var cleaned = clearUnusedPlaceholder({
	    previousImpact: previousImpact,
	    impact: impact,
	    droppables: droppables
	  });
	  var isOver = whatIsDraggedOver(impact);

	  if (!isOver) {
	    return cleaned;
	  }

	  var droppable = droppables[isOver];

	  if (isHomeOf(draggable, droppable)) {
	    return cleaned;
	  }

	  if (droppable.subject.withPlaceholder) {
	    return cleaned;
	  }

	  var patched = addPlaceholder(droppable, draggable, draggables);
	  return patchDroppableMap(cleaned, patched);
	});

	var update = (function (_ref) {
	  var state = _ref.state,
	      forcedClientSelection = _ref.clientSelection,
	      forcedDimensions = _ref.dimensions,
	      forcedViewport = _ref.viewport,
	      forcedImpact = _ref.impact,
	      scrollJumpRequest = _ref.scrollJumpRequest;
	  var viewport = forcedViewport || state.viewport;
	  var dimensions = forcedDimensions || state.dimensions;
	  var clientSelection = forcedClientSelection || state.current.client.selection;
	  var offset = subtract(clientSelection, state.initial.client.selection);
	  var client = {
	    offset: offset,
	    selection: clientSelection,
	    borderBoxCenter: add(state.initial.client.borderBoxCenter, offset)
	  };
	  var page = {
	    selection: add(client.selection, viewport.scroll.current),
	    borderBoxCenter: add(client.borderBoxCenter, viewport.scroll.current),
	    offset: add(client.offset, viewport.scroll.diff.value)
	  };
	  var current = {
	    client: client,
	    page: page
	  };

	  if (state.phase === 'COLLECTING') {
	    return _extends({
	      phase: 'COLLECTING'
	    }, state, {
	      dimensions: dimensions,
	      viewport: viewport,
	      current: current
	    });
	  }

	  var draggable = dimensions.draggables[state.critical.draggable.id];
	  var newImpact = forcedImpact || getDragImpact({
	    pageOffset: page.offset,
	    draggable: draggable,
	    draggables: dimensions.draggables,
	    droppables: dimensions.droppables,
	    previousImpact: state.impact,
	    viewport: viewport,
	    afterCritical: state.afterCritical
	  });
	  var withUpdatedPlaceholders = recomputePlaceholders({
	    draggable: draggable,
	    impact: newImpact,
	    previousImpact: state.impact,
	    draggables: dimensions.draggables,
	    droppables: dimensions.droppables
	  });

	  var result = _extends({}, state, {
	    current: current,
	    dimensions: {
	      draggables: dimensions.draggables,
	      droppables: withUpdatedPlaceholders
	    },
	    impact: newImpact,
	    viewport: viewport,
	    scrollJumpRequest: scrollJumpRequest || null,
	    forceShouldAnimate: scrollJumpRequest ? false : null
	  });

	  return result;
	});

	function getDraggables$1(ids, draggables) {
	  return ids.map(function (id) {
	    return draggables[id];
	  });
	}

	var recompute = (function (_ref) {
	  var impact = _ref.impact,
	      viewport = _ref.viewport,
	      draggables = _ref.draggables,
	      destination = _ref.destination,
	      forceShouldAnimate = _ref.forceShouldAnimate;
	  var last = impact.displaced;
	  var afterDragging = getDraggables$1(last.all, draggables);
	  var displaced = getDisplacementGroups({
	    afterDragging: afterDragging,
	    destination: destination,
	    displacedBy: impact.displacedBy,
	    viewport: viewport.frame,
	    forceShouldAnimate: forceShouldAnimate,
	    last: last
	  });
	  return _extends({}, impact, {
	    displaced: displaced
	  });
	});

	var getClientBorderBoxCenter = (function (_ref) {
	  var impact = _ref.impact,
	      draggable = _ref.draggable,
	      droppable = _ref.droppable,
	      draggables = _ref.draggables,
	      viewport = _ref.viewport,
	      afterCritical = _ref.afterCritical;
	  var pageBorderBoxCenter = getPageBorderBoxCenterFromImpact({
	    impact: impact,
	    draggable: draggable,
	    draggables: draggables,
	    droppable: droppable,
	    afterCritical: afterCritical
	  });
	  return getClientFromPageBorderBoxCenter({
	    pageBorderBoxCenter: pageBorderBoxCenter,
	    draggable: draggable,
	    viewport: viewport
	  });
	});

	var refreshSnap = (function (_ref) {
	  var state = _ref.state,
	      forcedDimensions = _ref.dimensions,
	      forcedViewport = _ref.viewport;
	  !(state.movementMode === 'SNAP') ? invariant(false)  : void 0;
	  var needsVisibilityCheck = state.impact;
	  var viewport = forcedViewport || state.viewport;
	  var dimensions = forcedDimensions || state.dimensions;
	  var draggables = dimensions.draggables,
	      droppables = dimensions.droppables;
	  var draggable = draggables[state.critical.draggable.id];
	  var isOver = whatIsDraggedOver(needsVisibilityCheck);
	  !isOver ? invariant(false, 'Must be over a destination in SNAP movement mode')  : void 0;
	  var destination = droppables[isOver];
	  var impact = recompute({
	    impact: needsVisibilityCheck,
	    viewport: viewport,
	    destination: destination,
	    draggables: draggables
	  });
	  var clientSelection = getClientBorderBoxCenter({
	    impact: impact,
	    draggable: draggable,
	    droppable: destination,
	    draggables: draggables,
	    viewport: viewport,
	    afterCritical: state.afterCritical
	  });
	  return update({
	    impact: impact,
	    clientSelection: clientSelection,
	    state: state,
	    dimensions: dimensions,
	    viewport: viewport
	  });
	});

	var getHomeLocation = (function (descriptor) {
	  return {
	    index: descriptor.index,
	    droppableId: descriptor.droppableId
	  };
	});

	var getLiftEffect = (function (_ref) {
	  var draggable = _ref.draggable,
	      home = _ref.home,
	      draggables = _ref.draggables,
	      viewport = _ref.viewport;
	  var displacedBy = getDisplacedBy(home.axis, draggable.displaceBy);
	  var insideHome = getDraggablesInsideDroppable(home.descriptor.id, draggables);
	  var rawIndex = insideHome.indexOf(draggable);
	  !(rawIndex !== -1) ? invariant(false, 'Expected draggable to be inside home list')  : void 0;
	  var afterDragging = insideHome.slice(rawIndex + 1);
	  var effected = afterDragging.reduce(function (previous, item) {
	    previous[item.descriptor.id] = true;
	    return previous;
	  }, {});
	  var afterCritical = {
	    inVirtualList: home.descriptor.mode === 'virtual',
	    displacedBy: displacedBy,
	    effected: effected
	  };
	  var displaced = getDisplacementGroups({
	    afterDragging: afterDragging,
	    destination: home,
	    displacedBy: displacedBy,
	    last: null,
	    viewport: viewport.frame,
	    forceShouldAnimate: false
	  });
	  var impact = {
	    displaced: displaced,
	    displacedBy: displacedBy,
	    at: {
	      type: 'REORDER',
	      destination: getHomeLocation(draggable.descriptor)
	    }
	  };
	  return {
	    impact: impact,
	    afterCritical: afterCritical
	  };
	});

	var patchDimensionMap = (function (dimensions, updated) {
	  return {
	    draggables: dimensions.draggables,
	    droppables: patchDroppableMap(dimensions.droppables, updated)
	  };
	});

	var offsetDraggable = (function (_ref) {
	  var draggable = _ref.draggable,
	      offset = _ref.offset,
	      initialWindowScroll = _ref.initialWindowScroll;
	  var client = cssBoxModel_cjs.offset(draggable.client, offset);
	  var page = cssBoxModel_cjs.withScroll(client, initialWindowScroll);

	  var moved = _extends({}, draggable, {
	    placeholder: _extends({}, draggable.placeholder, {
	      client: client
	    }),
	    client: client,
	    page: page
	  });

	  return moved;
	});

	var getFrame = (function (droppable) {
	  var frame = droppable.frame;
	  !frame ? invariant(false, 'Expected Droppable to have a frame')  : void 0;
	  return frame;
	});

	var adjustAdditionsForScrollChanges = (function (_ref) {
	  var additions = _ref.additions,
	      updatedDroppables = _ref.updatedDroppables,
	      viewport = _ref.viewport;
	  var windowScrollChange = viewport.scroll.diff.value;
	  return additions.map(function (draggable) {
	    var droppableId = draggable.descriptor.droppableId;
	    var modified = updatedDroppables[droppableId];
	    var frame = getFrame(modified);
	    var droppableScrollChange = frame.scroll.diff.value;
	    var totalChange = add(windowScrollChange, droppableScrollChange);
	    var moved = offsetDraggable({
	      draggable: draggable,
	      offset: totalChange,
	      initialWindowScroll: viewport.scroll.initial
	    });
	    return moved;
	  });
	});

	var publishWhileDraggingInVirtual = (function (_ref) {
	  var state = _ref.state,
	      published = _ref.published;
	  var withScrollChange = published.modified.map(function (update) {
	    var existing = state.dimensions.droppables[update.droppableId];
	    var scrolled = scrollDroppable(existing, update.scroll);
	    return scrolled;
	  });

	  var droppables = _extends({}, state.dimensions.droppables, {}, toDroppableMap(withScrollChange));

	  var updatedAdditions = toDraggableMap(adjustAdditionsForScrollChanges({
	    additions: published.additions,
	    updatedDroppables: droppables,
	    viewport: state.viewport
	  }));

	  var draggables = _extends({}, state.dimensions.draggables, {}, updatedAdditions);

	  published.removals.forEach(function (id) {
	    delete draggables[id];
	  });
	  var dimensions = {
	    droppables: droppables,
	    draggables: draggables
	  };
	  var wasOverId = whatIsDraggedOver(state.impact);
	  var wasOver = wasOverId ? dimensions.droppables[wasOverId] : null;
	  var draggable = dimensions.draggables[state.critical.draggable.id];
	  var home = dimensions.droppables[state.critical.droppable.id];

	  var _getLiftEffect = getLiftEffect({
	    draggable: draggable,
	    home: home,
	    draggables: draggables,
	    viewport: state.viewport
	  }),
	      onLiftImpact = _getLiftEffect.impact,
	      afterCritical = _getLiftEffect.afterCritical;

	  var previousImpact = wasOver && wasOver.isCombineEnabled ? state.impact : onLiftImpact;
	  var impact = getDragImpact({
	    pageOffset: state.current.page.offset,
	    draggable: dimensions.draggables[state.critical.draggable.id],
	    draggables: dimensions.draggables,
	    droppables: dimensions.droppables,
	    previousImpact: previousImpact,
	    viewport: state.viewport,
	    afterCritical: afterCritical
	  });

	  var draggingState = _extends({
	    phase: 'DRAGGING'
	  }, state, {
	    phase: 'DRAGGING',
	    impact: impact,
	    onLiftImpact: onLiftImpact,
	    dimensions: dimensions,
	    afterCritical: afterCritical,
	    forceShouldAnimate: false
	  });

	  if (state.phase === 'COLLECTING') {
	    return draggingState;
	  }

	  var dropPending = _extends({
	    phase: 'DROP_PENDING'
	  }, draggingState, {
	    phase: 'DROP_PENDING',
	    reason: state.reason,
	    isWaiting: false
	  });

	  return dropPending;
	});

	var isSnapping = function isSnapping(state) {
	  return state.movementMode === 'SNAP';
	};

	var postDroppableChange = function postDroppableChange(state, updated, isEnabledChanging) {
	  var dimensions = patchDimensionMap(state.dimensions, updated);

	  if (!isSnapping(state) || isEnabledChanging) {
	    return update({
	      state: state,
	      dimensions: dimensions
	    });
	  }

	  return refreshSnap({
	    state: state,
	    dimensions: dimensions
	  });
	};

	function removeScrollJumpRequest(state) {
	  if (state.isDragging && state.movementMode === 'SNAP') {
	    return _extends({
	      phase: 'DRAGGING'
	    }, state, {
	      scrollJumpRequest: null
	    });
	  }

	  return state;
	}

	var idle = {
	  phase: 'IDLE',
	  completed: null,
	  shouldFlush: false
	};
	var reducer = (function (state, action) {
	  if (state === void 0) {
	    state = idle;
	  }

	  if (action.type === 'FLUSH') {
	    return _extends({}, idle, {
	      shouldFlush: true
	    });
	  }

	  if (action.type === 'INITIAL_PUBLISH') {
	    !(state.phase === 'IDLE') ? invariant(false, 'INITIAL_PUBLISH must come after a IDLE phase')  : void 0;
	    var _action$payload = action.payload,
	        critical = _action$payload.critical,
	        clientSelection = _action$payload.clientSelection,
	        viewport = _action$payload.viewport,
	        dimensions = _action$payload.dimensions,
	        movementMode = _action$payload.movementMode;
	    var draggable = dimensions.draggables[critical.draggable.id];
	    var home = dimensions.droppables[critical.droppable.id];
	    var client = {
	      selection: clientSelection,
	      borderBoxCenter: draggable.client.borderBox.center,
	      offset: origin
	    };
	    var initial = {
	      client: client,
	      page: {
	        selection: add(client.selection, viewport.scroll.initial),
	        borderBoxCenter: add(client.selection, viewport.scroll.initial),
	        offset: add(client.selection, viewport.scroll.diff.value)
	      }
	    };
	    var isWindowScrollAllowed = toDroppableList(dimensions.droppables).every(function (item) {
	      return !item.isFixedOnPage;
	    });

	    var _getLiftEffect = getLiftEffect({
	      draggable: draggable,
	      home: home,
	      draggables: dimensions.draggables,
	      viewport: viewport
	    }),
	        impact = _getLiftEffect.impact,
	        afterCritical = _getLiftEffect.afterCritical;

	    var result = {
	      phase: 'DRAGGING',
	      isDragging: true,
	      critical: critical,
	      movementMode: movementMode,
	      dimensions: dimensions,
	      initial: initial,
	      current: initial,
	      isWindowScrollAllowed: isWindowScrollAllowed,
	      impact: impact,
	      afterCritical: afterCritical,
	      onLiftImpact: impact,
	      viewport: viewport,
	      scrollJumpRequest: null,
	      forceShouldAnimate: null
	    };
	    return result;
	  }

	  if (action.type === 'COLLECTION_STARTING') {
	    if (state.phase === 'COLLECTING' || state.phase === 'DROP_PENDING') {
	      return state;
	    }

	    !(state.phase === 'DRAGGING') ? invariant(false, "Collection cannot start from phase " + state.phase)  : void 0;

	    var _result = _extends({
	      phase: 'COLLECTING'
	    }, state, {
	      phase: 'COLLECTING'
	    });

	    return _result;
	  }

	  if (action.type === 'PUBLISH_WHILE_DRAGGING') {
	    !(state.phase === 'COLLECTING' || state.phase === 'DROP_PENDING') ? invariant(false, "Unexpected " + action.type + " received in phase " + state.phase)  : void 0;
	    return publishWhileDraggingInVirtual({
	      state: state,
	      published: action.payload
	    });
	  }

	  if (action.type === 'MOVE') {
	    if (state.phase === 'DROP_PENDING') {
	      return state;
	    }

	    !isMovementAllowed(state) ? invariant(false, action.type + " not permitted in phase " + state.phase)  : void 0;
	    var _clientSelection = action.payload.client;

	    if (isEqual(_clientSelection, state.current.client.selection)) {
	      return state;
	    }

	    return update({
	      state: state,
	      clientSelection: _clientSelection,
	      impact: isSnapping(state) ? state.impact : null
	    });
	  }

	  if (action.type === 'UPDATE_DROPPABLE_SCROLL') {
	    if (state.phase === 'DROP_PENDING') {
	      return removeScrollJumpRequest(state);
	    }

	    if (state.phase === 'COLLECTING') {
	      return removeScrollJumpRequest(state);
	    }

	    !isMovementAllowed(state) ? invariant(false, action.type + " not permitted in phase " + state.phase)  : void 0;
	    var _action$payload2 = action.payload,
	        id = _action$payload2.id,
	        newScroll = _action$payload2.newScroll;
	    var target = state.dimensions.droppables[id];

	    if (!target) {
	      return state;
	    }

	    var scrolled = scrollDroppable(target, newScroll);
	    return postDroppableChange(state, scrolled, false);
	  }

	  if (action.type === 'UPDATE_DROPPABLE_IS_ENABLED') {
	    if (state.phase === 'DROP_PENDING') {
	      return state;
	    }

	    !isMovementAllowed(state) ? invariant(false, "Attempting to move in an unsupported phase " + state.phase)  : void 0;
	    var _action$payload3 = action.payload,
	        _id = _action$payload3.id,
	        isEnabled = _action$payload3.isEnabled;
	    var _target = state.dimensions.droppables[_id];
	    !_target ? invariant(false, "Cannot find Droppable[id: " + _id + "] to toggle its enabled state")  : void 0;
	    !(_target.isEnabled !== isEnabled) ? invariant(false, "Trying to set droppable isEnabled to " + String(isEnabled) + "\n      but it is already " + String(_target.isEnabled))  : void 0;

	    var updated = _extends({}, _target, {
	      isEnabled: isEnabled
	    });

	    return postDroppableChange(state, updated, true);
	  }

	  if (action.type === 'UPDATE_DROPPABLE_IS_COMBINE_ENABLED') {
	    if (state.phase === 'DROP_PENDING') {
	      return state;
	    }

	    !isMovementAllowed(state) ? invariant(false, "Attempting to move in an unsupported phase " + state.phase)  : void 0;
	    var _action$payload4 = action.payload,
	        _id2 = _action$payload4.id,
	        isCombineEnabled = _action$payload4.isCombineEnabled;
	    var _target2 = state.dimensions.droppables[_id2];
	    !_target2 ? invariant(false, "Cannot find Droppable[id: " + _id2 + "] to toggle its isCombineEnabled state")  : void 0;
	    !(_target2.isCombineEnabled !== isCombineEnabled) ? invariant(false, "Trying to set droppable isCombineEnabled to " + String(isCombineEnabled) + "\n      but it is already " + String(_target2.isCombineEnabled))  : void 0;

	    var _updated = _extends({}, _target2, {
	      isCombineEnabled: isCombineEnabled
	    });

	    return postDroppableChange(state, _updated, true);
	  }

	  if (action.type === 'MOVE_BY_WINDOW_SCROLL') {
	    if (state.phase === 'DROP_PENDING' || state.phase === 'DROP_ANIMATING') {
	      return state;
	    }

	    !isMovementAllowed(state) ? invariant(false, "Cannot move by window in phase " + state.phase)  : void 0;
	    !state.isWindowScrollAllowed ? invariant(false, 'Window scrolling is currently not supported for fixed lists')  : void 0;
	    var _newScroll = action.payload.newScroll;

	    if (isEqual(state.viewport.scroll.current, _newScroll)) {
	      return removeScrollJumpRequest(state);
	    }

	    var _viewport = scrollViewport(state.viewport, _newScroll);

	    if (isSnapping(state)) {
	      return refreshSnap({
	        state: state,
	        viewport: _viewport
	      });
	    }

	    return update({
	      state: state,
	      viewport: _viewport
	    });
	  }

	  if (action.type === 'UPDATE_VIEWPORT_MAX_SCROLL') {
	    if (!isMovementAllowed(state)) {
	      return state;
	    }

	    var maxScroll = action.payload.maxScroll;

	    if (isEqual(maxScroll, state.viewport.scroll.max)) {
	      return state;
	    }

	    var withMaxScroll = _extends({}, state.viewport, {
	      scroll: _extends({}, state.viewport.scroll, {
	        max: maxScroll
	      })
	    });

	    return _extends({
	      phase: 'DRAGGING'
	    }, state, {
	      viewport: withMaxScroll
	    });
	  }

	  if (action.type === 'MOVE_UP' || action.type === 'MOVE_DOWN' || action.type === 'MOVE_LEFT' || action.type === 'MOVE_RIGHT') {
	    if (state.phase === 'COLLECTING' || state.phase === 'DROP_PENDING') {
	      return state;
	    }

	    !(state.phase === 'DRAGGING') ? invariant(false, action.type + " received while not in DRAGGING phase")  : void 0;

	    var _result2 = moveInDirection({
	      state: state,
	      type: action.type
	    });

	    if (!_result2) {
	      return state;
	    }

	    return update({
	      state: state,
	      impact: _result2.impact,
	      clientSelection: _result2.clientSelection,
	      scrollJumpRequest: _result2.scrollJumpRequest
	    });
	  }

	  if (action.type === 'DROP_PENDING') {
	    var reason = action.payload.reason;
	    !(state.phase === 'COLLECTING') ? invariant(false, 'Can only move into the DROP_PENDING phase from the COLLECTING phase')  : void 0;

	    var newState = _extends({
	      phase: 'DROP_PENDING'
	    }, state, {
	      phase: 'DROP_PENDING',
	      isWaiting: true,
	      reason: reason
	    });

	    return newState;
	  }

	  if (action.type === 'DROP_ANIMATE') {
	    var _action$payload5 = action.payload,
	        completed = _action$payload5.completed,
	        dropDuration = _action$payload5.dropDuration,
	        newHomeClientOffset = _action$payload5.newHomeClientOffset;
	    !(state.phase === 'DRAGGING' || state.phase === 'DROP_PENDING') ? invariant(false, "Cannot animate drop from phase " + state.phase)  : void 0;
	    var _result3 = {
	      phase: 'DROP_ANIMATING',
	      completed: completed,
	      dropDuration: dropDuration,
	      newHomeClientOffset: newHomeClientOffset,
	      dimensions: state.dimensions
	    };
	    return _result3;
	  }

	  if (action.type === 'DROP_COMPLETE') {
	    var _completed = action.payload.completed;
	    return {
	      phase: 'IDLE',
	      completed: _completed,
	      shouldFlush: false
	    };
	  }

	  return state;
	});

	var beforeInitialCapture = function beforeInitialCapture(args) {
	  return {
	    type: 'BEFORE_INITIAL_CAPTURE',
	    payload: args
	  };
	};
	var lift = function lift(args) {
	  return {
	    type: 'LIFT',
	    payload: args
	  };
	};
	var initialPublish = function initialPublish(args) {
	  return {
	    type: 'INITIAL_PUBLISH',
	    payload: args
	  };
	};
	var publishWhileDragging = function publishWhileDragging(args) {
	  return {
	    type: 'PUBLISH_WHILE_DRAGGING',
	    payload: args
	  };
	};
	var collectionStarting = function collectionStarting() {
	  return {
	    type: 'COLLECTION_STARTING',
	    payload: null
	  };
	};
	var updateDroppableScroll = function updateDroppableScroll(args) {
	  return {
	    type: 'UPDATE_DROPPABLE_SCROLL',
	    payload: args
	  };
	};
	var updateDroppableIsEnabled = function updateDroppableIsEnabled(args) {
	  return {
	    type: 'UPDATE_DROPPABLE_IS_ENABLED',
	    payload: args
	  };
	};
	var updateDroppableIsCombineEnabled = function updateDroppableIsCombineEnabled(args) {
	  return {
	    type: 'UPDATE_DROPPABLE_IS_COMBINE_ENABLED',
	    payload: args
	  };
	};
	var move = function move(args) {
	  return {
	    type: 'MOVE',
	    payload: args
	  };
	};
	var moveByWindowScroll = function moveByWindowScroll(args) {
	  return {
	    type: 'MOVE_BY_WINDOW_SCROLL',
	    payload: args
	  };
	};
	var updateViewportMaxScroll = function updateViewportMaxScroll(args) {
	  return {
	    type: 'UPDATE_VIEWPORT_MAX_SCROLL',
	    payload: args
	  };
	};
	var moveUp = function moveUp() {
	  return {
	    type: 'MOVE_UP',
	    payload: null
	  };
	};
	var moveDown = function moveDown() {
	  return {
	    type: 'MOVE_DOWN',
	    payload: null
	  };
	};
	var moveRight = function moveRight() {
	  return {
	    type: 'MOVE_RIGHT',
	    payload: null
	  };
	};
	var moveLeft = function moveLeft() {
	  return {
	    type: 'MOVE_LEFT',
	    payload: null
	  };
	};
	var flush = function flush() {
	  return {
	    type: 'FLUSH',
	    payload: null
	  };
	};
	var animateDrop = function animateDrop(args) {
	  return {
	    type: 'DROP_ANIMATE',
	    payload: args
	  };
	};
	var completeDrop = function completeDrop(args) {
	  return {
	    type: 'DROP_COMPLETE',
	    payload: args
	  };
	};
	var drop = function drop(args) {
	  return {
	    type: 'DROP',
	    payload: args
	  };
	};
	var dropPending = function dropPending(args) {
	  return {
	    type: 'DROP_PENDING',
	    payload: args
	  };
	};
	var dropAnimationFinished = function dropAnimationFinished() {
	  return {
	    type: 'DROP_ANIMATION_FINISHED',
	    payload: null
	  };
	};

	function checkIndexes(insideDestination) {
	  if (insideDestination.length <= 1) {
	    return;
	  }

	  var indexes = insideDestination.map(function (d) {
	    return d.descriptor.index;
	  });
	  var errors = {};

	  for (var i = 1; i < indexes.length; i++) {
	    var current = indexes[i];
	    var previous = indexes[i - 1];

	    if (current !== previous + 1) {
	      errors[current] = true;
	    }
	  }

	  if (!Object.keys(errors).length) {
	    return;
	  }

	  var formatted = indexes.map(function (index) {
	    var hasError = Boolean(errors[index]);
	    return hasError ? "[\uD83D\uDD25" + index + "]" : "" + index;
	  }).join(', ');
	  warning("\n    Detected non-consecutive <Draggable /> indexes.\n\n    (This can cause unexpected bugs)\n\n    " + formatted + "\n  ") ;
	}

	function validateDimensions(critical, dimensions) {
	  {
	    var insideDestination = getDraggablesInsideDroppable(critical.droppable.id, dimensions.draggables);
	    checkIndexes(insideDestination);
	  }
	}

	var lift$1 = (function (marshal) {
	  return function (_ref) {
	    var getState = _ref.getState,
	        dispatch = _ref.dispatch;
	    return function (next) {
	      return function (action) {
	        if (action.type !== 'LIFT') {
	          next(action);
	          return;
	        }

	        var _action$payload = action.payload,
	            id = _action$payload.id,
	            clientSelection = _action$payload.clientSelection,
	            movementMode = _action$payload.movementMode;
	        var initial = getState();

	        if (initial.phase === 'DROP_ANIMATING') {
	          dispatch(completeDrop({
	            completed: initial.completed
	          }));
	        }

	        !(getState().phase === 'IDLE') ? invariant(false, 'Unexpected phase to start a drag')  : void 0;
	        dispatch(flush());
	        dispatch(beforeInitialCapture({
	          draggableId: id,
	          movementMode: movementMode
	        }));
	        var scrollOptions = {
	          shouldPublishImmediately: movementMode === 'SNAP'
	        };
	        var request = {
	          draggableId: id,
	          scrollOptions: scrollOptions
	        };

	        var _marshal$startPublish = marshal.startPublishing(request),
	            critical = _marshal$startPublish.critical,
	            dimensions = _marshal$startPublish.dimensions,
	            viewport = _marshal$startPublish.viewport;

	        validateDimensions(critical, dimensions);
	        dispatch(initialPublish({
	          critical: critical,
	          dimensions: dimensions,
	          clientSelection: clientSelection,
	          movementMode: movementMode,
	          viewport: viewport
	        }));
	      };
	    };
	  };
	});

	var style = (function (marshal) {
	  return function () {
	    return function (next) {
	      return function (action) {
	        if (action.type === 'INITIAL_PUBLISH') {
	          marshal.dragging();
	        }

	        if (action.type === 'DROP_ANIMATE') {
	          marshal.dropping(action.payload.completed.result.reason);
	        }

	        if (action.type === 'FLUSH' || action.type === 'DROP_COMPLETE') {
	          marshal.resting();
	        }

	        next(action);
	      };
	    };
	  };
	});

	var curves = {
	  outOfTheWay: 'cubic-bezier(0.2, 0, 0, 1)',
	  drop: 'cubic-bezier(.2,1,.1,1)'
	};
	var combine = {
	  opacity: {
	    drop: 0,
	    combining: 0.7
	  },
	  scale: {
	    drop: 0.75
	  }
	};
	var timings = {
	  outOfTheWay: 0.2,
	  minDropTime: 0.33,
	  maxDropTime: 0.55
	};
	var outOfTheWayTiming = timings.outOfTheWay + "s " + curves.outOfTheWay;
	var transitions = {
	  fluid: "opacity " + outOfTheWayTiming,
	  snap: "transform " + outOfTheWayTiming + ", opacity " + outOfTheWayTiming,
	  drop: function drop(duration) {
	    var timing = duration + "s " + curves.drop;
	    return "transform " + timing + ", opacity " + timing;
	  },
	  outOfTheWay: "transform " + outOfTheWayTiming,
	  placeholder: "height " + outOfTheWayTiming + ", width " + outOfTheWayTiming + ", margin " + outOfTheWayTiming
	};

	var moveTo = function moveTo(offset) {
	  return isEqual(offset, origin) ? null : "translate(" + offset.x + "px, " + offset.y + "px)";
	};

	var transforms = {
	  moveTo: moveTo,
	  drop: function drop(offset, isCombining) {
	    var translate = moveTo(offset);

	    if (!translate) {
	      return null;
	    }

	    if (!isCombining) {
	      return translate;
	    }

	    return translate + " scale(" + combine.scale.drop + ")";
	  }
	};

	var minDropTime = timings.minDropTime,
	    maxDropTime = timings.maxDropTime;
	var dropTimeRange = maxDropTime - minDropTime;
	var maxDropTimeAtDistance = 1500;
	var cancelDropModifier = 0.6;
	var getDropDuration = (function (_ref) {
	  var current = _ref.current,
	      destination = _ref.destination,
	      reason = _ref.reason;
	  var distance$1 = distance(current, destination);

	  if (distance$1 <= 0) {
	    return minDropTime;
	  }

	  if (distance$1 >= maxDropTimeAtDistance) {
	    return maxDropTime;
	  }

	  var percentage = distance$1 / maxDropTimeAtDistance;
	  var duration = minDropTime + dropTimeRange * percentage;
	  var withDuration = reason === 'CANCEL' ? duration * cancelDropModifier : duration;
	  return Number(withDuration.toFixed(2));
	});

	var getNewHomeClientOffset = (function (_ref) {
	  var impact = _ref.impact,
	      draggable = _ref.draggable,
	      dimensions = _ref.dimensions,
	      viewport = _ref.viewport,
	      afterCritical = _ref.afterCritical;
	  var draggables = dimensions.draggables,
	      droppables = dimensions.droppables;
	  var droppableId = whatIsDraggedOver(impact);
	  var destination = droppableId ? droppables[droppableId] : null;
	  var home = droppables[draggable.descriptor.droppableId];
	  var newClientCenter = getClientBorderBoxCenter({
	    impact: impact,
	    draggable: draggable,
	    draggables: draggables,
	    afterCritical: afterCritical,
	    droppable: destination || home,
	    viewport: viewport
	  });
	  var offset = subtract(newClientCenter, draggable.client.borderBox.center);
	  return offset;
	});

	var getDropImpact = (function (_ref) {
	  var draggables = _ref.draggables,
	      reason = _ref.reason,
	      lastImpact = _ref.lastImpact,
	      home = _ref.home,
	      viewport = _ref.viewport,
	      onLiftImpact = _ref.onLiftImpact;

	  if (!lastImpact.at || reason !== 'DROP') {
	    var recomputedHomeImpact = recompute({
	      draggables: draggables,
	      impact: onLiftImpact,
	      destination: home,
	      viewport: viewport,
	      forceShouldAnimate: true
	    });
	    return {
	      impact: recomputedHomeImpact,
	      didDropInsideDroppable: false
	    };
	  }

	  if (lastImpact.at.type === 'REORDER') {
	    return {
	      impact: lastImpact,
	      didDropInsideDroppable: true
	    };
	  }

	  var withoutMovement = _extends({}, lastImpact, {
	    displaced: emptyGroups
	  });

	  return {
	    impact: withoutMovement,
	    didDropInsideDroppable: true
	  };
	});

	var drop$1 = (function (_ref) {
	  var getState = _ref.getState,
	      dispatch = _ref.dispatch;
	  return function (next) {
	    return function (action) {
	      if (action.type !== 'DROP') {
	        next(action);
	        return;
	      }

	      var state = getState();
	      var reason = action.payload.reason;

	      if (state.phase === 'COLLECTING') {
	        dispatch(dropPending({
	          reason: reason
	        }));
	        return;
	      }

	      if (state.phase === 'IDLE') {
	        return;
	      }

	      var isWaitingForDrop = state.phase === 'DROP_PENDING' && state.isWaiting;
	      !!isWaitingForDrop ? invariant(false, 'A DROP action occurred while DROP_PENDING and still waiting')  : void 0;
	      !(state.phase === 'DRAGGING' || state.phase === 'DROP_PENDING') ? invariant(false, "Cannot drop in phase: " + state.phase)  : void 0;
	      var critical = state.critical;
	      var dimensions = state.dimensions;
	      var draggable = dimensions.draggables[state.critical.draggable.id];

	      var _getDropImpact = getDropImpact({
	        reason: reason,
	        lastImpact: state.impact,
	        afterCritical: state.afterCritical,
	        onLiftImpact: state.onLiftImpact,
	        home: state.dimensions.droppables[state.critical.droppable.id],
	        viewport: state.viewport,
	        draggables: state.dimensions.draggables
	      }),
	          impact = _getDropImpact.impact,
	          didDropInsideDroppable = _getDropImpact.didDropInsideDroppable;

	      var destination = didDropInsideDroppable ? tryGetDestination(impact) : null;
	      var combine = didDropInsideDroppable ? tryGetCombine(impact) : null;
	      var source = {
	        index: critical.draggable.index,
	        droppableId: critical.droppable.id
	      };
	      var result = {
	        draggableId: draggable.descriptor.id,
	        type: draggable.descriptor.type,
	        source: source,
	        reason: reason,
	        mode: state.movementMode,
	        destination: destination,
	        combine: combine
	      };
	      var newHomeClientOffset = getNewHomeClientOffset({
	        impact: impact,
	        draggable: draggable,
	        dimensions: dimensions,
	        viewport: state.viewport,
	        afterCritical: state.afterCritical
	      });
	      var completed = {
	        critical: state.critical,
	        afterCritical: state.afterCritical,
	        result: result,
	        impact: impact
	      };
	      var isAnimationRequired = !isEqual(state.current.client.offset, newHomeClientOffset) || Boolean(result.combine);

	      if (!isAnimationRequired) {
	        dispatch(completeDrop({
	          completed: completed
	        }));
	        return;
	      }

	      var dropDuration = getDropDuration({
	        current: state.current.client.offset,
	        destination: newHomeClientOffset,
	        reason: reason
	      });
	      var args = {
	        newHomeClientOffset: newHomeClientOffset,
	        dropDuration: dropDuration,
	        completed: completed
	      };
	      dispatch(animateDrop(args));
	    };
	  };
	});

	var getWindowScroll = (function () {
	  return {
	    x: window.pageXOffset,
	    y: window.pageYOffset
	  };
	});

	function getWindowScrollBinding(update) {
	  return {
	    eventName: 'scroll',
	    options: {
	      passive: true,
	      capture: false
	    },
	    fn: function fn(event) {
	      if (event.target !== window && event.target !== window.document) {
	        return;
	      }

	      update();
	    }
	  };
	}

	function getScrollListener(_ref) {
	  var onWindowScroll = _ref.onWindowScroll;

	  function updateScroll() {
	    onWindowScroll(getWindowScroll());
	  }

	  var scheduled = rafSchd(updateScroll);
	  var binding = getWindowScrollBinding(scheduled);
	  var unbind = noop;

	  function isActive() {
	    return unbind !== noop;
	  }

	  function start() {
	    !!isActive() ? invariant(false, 'Cannot start scroll listener when already active')  : void 0;
	    unbind = bindEvents(window, [binding]);
	  }

	  function stop() {
	    !isActive() ? invariant(false, 'Cannot stop scroll listener when not active')  : void 0;
	    scheduled.cancel();
	    unbind();
	    unbind = noop;
	  }

	  return {
	    start: start,
	    stop: stop,
	    isActive: isActive
	  };
	}

	var shouldEnd = function shouldEnd(action) {
	  return action.type === 'DROP_COMPLETE' || action.type === 'DROP_ANIMATE' || action.type === 'FLUSH';
	};

	var scrollListener = (function (store) {
	  var listener = getScrollListener({
	    onWindowScroll: function onWindowScroll(newScroll) {
	      store.dispatch(moveByWindowScroll({
	        newScroll: newScroll
	      }));
	    }
	  });
	  return function (next) {
	    return function (action) {
	      if (!listener.isActive() && action.type === 'INITIAL_PUBLISH') {
	        listener.start();
	      }

	      if (listener.isActive() && shouldEnd(action)) {
	        listener.stop();
	      }

	      next(action);
	    };
	  };
	});

	var getExpiringAnnounce = (function (announce) {
	  var wasCalled = false;
	  var isExpired = false;
	  var timeoutId = setTimeout(function () {
	    isExpired = true;
	  });

	  var result = function result(message) {
	    if (wasCalled) {
	      warning('Announcement already made. Not making a second announcement') ;
	      return;
	    }

	    if (isExpired) {
	      warning("\n        Announcements cannot be made asynchronously.\n        Default message has already been announced.\n      ") ;
	      return;
	    }

	    wasCalled = true;
	    announce(message);
	    clearTimeout(timeoutId);
	  };

	  result.wasCalled = function () {
	    return wasCalled;
	  };

	  return result;
	});

	var getAsyncMarshal = (function () {
	  var entries = [];

	  var execute = function execute(timerId) {
	    var index = findIndex(entries, function (item) {
	      return item.timerId === timerId;
	    });
	    !(index !== -1) ? invariant(false, 'Could not find timer')  : void 0;

	    var _entries$splice = entries.splice(index, 1),
	        entry = _entries$splice[0];

	    entry.callback();
	  };

	  var add = function add(fn) {
	    var timerId = setTimeout(function () {
	      return execute(timerId);
	    });
	    var entry = {
	      timerId: timerId,
	      callback: fn
	    };
	    entries.push(entry);
	  };

	  var flush = function flush() {
	    if (!entries.length) {
	      return;
	    }

	    var shallow = [].concat(entries);
	    entries.length = 0;
	    shallow.forEach(function (entry) {
	      clearTimeout(entry.timerId);
	      entry.callback();
	    });
	  };

	  return {
	    add: add,
	    flush: flush
	  };
	});

	var areLocationsEqual = function areLocationsEqual(first, second) {
	  if (first == null && second == null) {
	    return true;
	  }

	  if (first == null || second == null) {
	    return false;
	  }

	  return first.droppableId === second.droppableId && first.index === second.index;
	};
	var isCombineEqual = function isCombineEqual(first, second) {
	  if (first == null && second == null) {
	    return true;
	  }

	  if (first == null || second == null) {
	    return false;
	  }

	  return first.draggableId === second.draggableId && first.droppableId === second.droppableId;
	};
	var isCriticalEqual = function isCriticalEqual(first, second) {
	  if (first === second) {
	    return true;
	  }

	  var isDraggableEqual = first.draggable.id === second.draggable.id && first.draggable.droppableId === second.draggable.droppableId && first.draggable.type === second.draggable.type && first.draggable.index === second.draggable.index;
	  var isDroppableEqual = first.droppable.id === second.droppable.id && first.droppable.type === second.droppable.type;
	  return isDraggableEqual && isDroppableEqual;
	};

	var withTimings = function withTimings(key, fn) {
	  fn();
	};

	var getDragStart = function getDragStart(critical, mode) {
	  return {
	    draggableId: critical.draggable.id,
	    type: critical.droppable.type,
	    source: {
	      droppableId: critical.droppable.id,
	      index: critical.draggable.index
	    },
	    mode: mode
	  };
	};

	var execute = function execute(responder, data, announce, getDefaultMessage) {
	  if (!responder) {
	    announce(getDefaultMessage(data));
	    return;
	  }

	  var willExpire = getExpiringAnnounce(announce);
	  var provided = {
	    announce: willExpire
	  };
	  responder(data, provided);

	  if (!willExpire.wasCalled()) {
	    announce(getDefaultMessage(data));
	  }
	};

	var getPublisher = (function (getResponders, announce) {
	  var asyncMarshal = getAsyncMarshal();
	  var dragging = null;

	  var beforeCapture = function beforeCapture(draggableId, mode) {
	    !!dragging ? invariant(false, 'Cannot fire onBeforeCapture as a drag start has already been published')  : void 0;
	    withTimings('onBeforeCapture', function () {
	      var fn = getResponders().onBeforeCapture;

	      if (fn) {
	        var before = {
	          draggableId: draggableId,
	          mode: mode
	        };
	        fn(before);
	      }
	    });
	  };

	  var beforeStart = function beforeStart(critical, mode) {
	    !!dragging ? invariant(false, 'Cannot fire onBeforeDragStart as a drag start has already been published')  : void 0;
	    withTimings('onBeforeDragStart', function () {
	      var fn = getResponders().onBeforeDragStart;

	      if (fn) {
	        fn(getDragStart(critical, mode));
	      }
	    });
	  };

	  var start = function start(critical, mode) {
	    !!dragging ? invariant(false, 'Cannot fire onBeforeDragStart as a drag start has already been published')  : void 0;
	    var data = getDragStart(critical, mode);
	    dragging = {
	      mode: mode,
	      lastCritical: critical,
	      lastLocation: data.source,
	      lastCombine: null
	    };
	    asyncMarshal.add(function () {
	      withTimings('onDragStart', function () {
	        return execute(getResponders().onDragStart, data, announce, preset.onDragStart);
	      });
	    });
	  };

	  var update = function update(critical, impact) {
	    var location = tryGetDestination(impact);
	    var combine = tryGetCombine(impact);
	    !dragging ? invariant(false, 'Cannot fire onDragMove when onDragStart has not been called')  : void 0;
	    var hasCriticalChanged = !isCriticalEqual(critical, dragging.lastCritical);

	    if (hasCriticalChanged) {
	      dragging.lastCritical = critical;
	    }

	    var hasLocationChanged = !areLocationsEqual(dragging.lastLocation, location);

	    if (hasLocationChanged) {
	      dragging.lastLocation = location;
	    }

	    var hasGroupingChanged = !isCombineEqual(dragging.lastCombine, combine);

	    if (hasGroupingChanged) {
	      dragging.lastCombine = combine;
	    }

	    if (!hasCriticalChanged && !hasLocationChanged && !hasGroupingChanged) {
	      return;
	    }

	    var data = _extends({}, getDragStart(critical, dragging.mode), {
	      combine: combine,
	      destination: location
	    });

	    asyncMarshal.add(function () {
	      withTimings('onDragUpdate', function () {
	        return execute(getResponders().onDragUpdate, data, announce, preset.onDragUpdate);
	      });
	    });
	  };

	  var flush = function flush() {
	    !dragging ? invariant(false, 'Can only flush responders while dragging')  : void 0;
	    asyncMarshal.flush();
	  };

	  var drop = function drop(result) {
	    !dragging ? invariant(false, 'Cannot fire onDragEnd when there is no matching onDragStart')  : void 0;
	    dragging = null;
	    withTimings('onDragEnd', function () {
	      return execute(getResponders().onDragEnd, result, announce, preset.onDragEnd);
	    });
	  };

	  var abort = function abort() {
	    if (!dragging) {
	      return;
	    }

	    var result = _extends({}, getDragStart(dragging.lastCritical, dragging.mode), {
	      combine: null,
	      destination: null,
	      reason: 'CANCEL'
	    });

	    drop(result);
	  };

	  return {
	    beforeCapture: beforeCapture,
	    beforeStart: beforeStart,
	    start: start,
	    update: update,
	    flush: flush,
	    drop: drop,
	    abort: abort
	  };
	});

	var responders = (function (getResponders, announce) {
	  var publisher = getPublisher(getResponders, announce);
	  return function (store) {
	    return function (next) {
	      return function (action) {
	        if (action.type === 'BEFORE_INITIAL_CAPTURE') {
	          publisher.beforeCapture(action.payload.draggableId, action.payload.movementMode);
	          return;
	        }

	        if (action.type === 'INITIAL_PUBLISH') {
	          var critical = action.payload.critical;
	          publisher.beforeStart(critical, action.payload.movementMode);
	          next(action);
	          publisher.start(critical, action.payload.movementMode);
	          return;
	        }

	        if (action.type === 'DROP_COMPLETE') {
	          var result = action.payload.completed.result;
	          publisher.flush();
	          next(action);
	          publisher.drop(result);
	          return;
	        }

	        next(action);

	        if (action.type === 'FLUSH') {
	          publisher.abort();
	          return;
	        }

	        var state = store.getState();

	        if (state.phase === 'DRAGGING') {
	          publisher.update(state.critical, state.impact);
	        }
	      };
	    };
	  };
	});

	var dropAnimationFinish = (function (store) {
	  return function (next) {
	    return function (action) {
	      if (action.type !== 'DROP_ANIMATION_FINISHED') {
	        next(action);
	        return;
	      }

	      var state = store.getState();
	      !(state.phase === 'DROP_ANIMATING') ? invariant(false, 'Cannot finish a drop animating when no drop is occurring')  : void 0;
	      store.dispatch(completeDrop({
	        completed: state.completed
	      }));
	    };
	  };
	});

	var dropAnimationFlushOnScroll = (function (store) {
	  var unbind = null;
	  var frameId = null;

	  function clear() {
	    if (frameId) {
	      cancelAnimationFrame(frameId);
	      frameId = null;
	    }

	    if (unbind) {
	      unbind();
	      unbind = null;
	    }
	  }

	  return function (next) {
	    return function (action) {
	      if (action.type === 'FLUSH' || action.type === 'DROP_COMPLETE' || action.type === 'DROP_ANIMATION_FINISHED') {
	        clear();
	      }

	      next(action);

	      if (action.type !== 'DROP_ANIMATE') {
	        return;
	      }

	      var binding = {
	        eventName: 'scroll',
	        options: {
	          capture: true,
	          passive: false,
	          once: true
	        },
	        fn: function flushDropAnimation() {
	          var state = store.getState();

	          if (state.phase === 'DROP_ANIMATING') {
	            store.dispatch(dropAnimationFinished());
	          }
	        }
	      };
	      frameId = requestAnimationFrame(function () {
	        frameId = null;
	        unbind = bindEvents(window, [binding]);
	      });
	    };
	  };
	});

	var dimensionMarshalStopper = (function (marshal) {
	  return function () {
	    return function (next) {
	      return function (action) {
	        if (action.type === 'DROP_COMPLETE' || action.type === 'FLUSH' || action.type === 'DROP_ANIMATE') {
	          marshal.stopPublishing();
	        }

	        next(action);
	      };
	    };
	  };
	});

	var focus = (function (marshal) {
	  var isWatching = false;
	  return function () {
	    return function (next) {
	      return function (action) {
	        if (action.type === 'INITIAL_PUBLISH') {
	          isWatching = true;
	          marshal.tryRecordFocus(action.payload.critical.draggable.id);
	          next(action);
	          marshal.tryRestoreFocusRecorded();
	          return;
	        }

	        next(action);

	        if (!isWatching) {
	          return;
	        }

	        if (action.type === 'FLUSH') {
	          isWatching = false;
	          marshal.tryRestoreFocusRecorded();
	          return;
	        }

	        if (action.type === 'DROP_COMPLETE') {
	          isWatching = false;
	          var result = action.payload.completed.result;

	          if (result.combine) {
	            marshal.tryShiftRecord(result.draggableId, result.combine.draggableId);
	          }

	          marshal.tryRestoreFocusRecorded();
	        }
	      };
	    };
	  };
	});

	var shouldStop = function shouldStop(action) {
	  return action.type === 'DROP_COMPLETE' || action.type === 'DROP_ANIMATE' || action.type === 'FLUSH';
	};

	var autoScroll = (function (autoScroller) {
	  return function (store) {
	    return function (next) {
	      return function (action) {
	        if (shouldStop(action)) {
	          autoScroller.stop();
	          next(action);
	          return;
	        }

	        if (action.type === 'INITIAL_PUBLISH') {
	          next(action);
	          var state = store.getState();
	          !(state.phase === 'DRAGGING') ? invariant(false, 'Expected phase to be DRAGGING after INITIAL_PUBLISH')  : void 0;
	          autoScroller.start(state);
	          return;
	        }

	        next(action);
	        autoScroller.scroll(store.getState());
	      };
	    };
	  };
	});

	var pendingDrop = (function (store) {
	  return function (next) {
	    return function (action) {
	      next(action);

	      if (action.type !== 'PUBLISH_WHILE_DRAGGING') {
	        return;
	      }

	      var postActionState = store.getState();

	      if (postActionState.phase !== 'DROP_PENDING') {
	        return;
	      }

	      if (postActionState.isWaiting) {
	        return;
	      }

	      store.dispatch(drop({
	        reason: postActionState.reason
	      }));
	    };
	  };
	});

	var composeEnhancers = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
	  name: 'react-beautiful-dnd'
	}) : redux__default['default'].compose;
	var createStore = (function (_ref) {
	  var dimensionMarshal = _ref.dimensionMarshal,
	      focusMarshal = _ref.focusMarshal,
	      styleMarshal = _ref.styleMarshal,
	      getResponders = _ref.getResponders,
	      announce = _ref.announce,
	      autoScroller = _ref.autoScroller;
	  return redux__default['default'].createStore(reducer, composeEnhancers(redux__default['default'].applyMiddleware(style(styleMarshal), dimensionMarshalStopper(dimensionMarshal), lift$1(dimensionMarshal), drop$1, dropAnimationFinish, dropAnimationFlushOnScroll, pendingDrop, autoScroll(autoScroller), scrollListener, focus(focusMarshal), responders(getResponders, announce))));
	});

	var clean$1 = function clean() {
	  return {
	    additions: {},
	    removals: {},
	    modified: {}
	  };
	};
	function createPublisher(_ref) {
	  var registry = _ref.registry,
	      callbacks = _ref.callbacks;
	  var staging = clean$1();
	  var frameId = null;

	  var collect = function collect() {
	    if (frameId) {
	      return;
	    }

	    callbacks.collectionStarting();
	    frameId = requestAnimationFrame(function () {
	      frameId = null;
	      var _staging = staging,
	          additions = _staging.additions,
	          removals = _staging.removals,
	          modified = _staging.modified;
	      var added = Object.keys(additions).map(function (id) {
	        return registry.draggable.getById(id).getDimension(origin);
	      }).sort(function (a, b) {
	        return a.descriptor.index - b.descriptor.index;
	      });
	      var updated = Object.keys(modified).map(function (id) {
	        var entry = registry.droppable.getById(id);
	        var scroll = entry.callbacks.getScrollWhileDragging();
	        return {
	          droppableId: id,
	          scroll: scroll
	        };
	      });
	      var result = {
	        additions: added,
	        removals: Object.keys(removals),
	        modified: updated
	      };
	      staging = clean$1();
	      callbacks.publish(result);
	    });
	  };

	  var add = function add(entry) {
	    var id = entry.descriptor.id;
	    staging.additions[id] = entry;
	    staging.modified[entry.descriptor.droppableId] = true;

	    if (staging.removals[id]) {
	      delete staging.removals[id];
	    }

	    collect();
	  };

	  var remove = function remove(entry) {
	    var descriptor = entry.descriptor;
	    staging.removals[descriptor.id] = true;
	    staging.modified[descriptor.droppableId] = true;

	    if (staging.additions[descriptor.id]) {
	      delete staging.additions[descriptor.id];
	    }

	    collect();
	  };

	  var stop = function stop() {
	    if (!frameId) {
	      return;
	    }

	    cancelAnimationFrame(frameId);
	    frameId = null;
	    staging = clean$1();
	  };

	  return {
	    add: add,
	    remove: remove,
	    stop: stop
	  };
	}

	var getMaxScroll = (function (_ref) {
	  var scrollHeight = _ref.scrollHeight,
	      scrollWidth = _ref.scrollWidth,
	      height = _ref.height,
	      width = _ref.width;
	  var maxScroll = subtract({
	    x: scrollWidth,
	    y: scrollHeight
	  }, {
	    x: width,
	    y: height
	  });
	  var adjustedMaxScroll = {
	    x: Math.max(0, maxScroll.x),
	    y: Math.max(0, maxScroll.y)
	  };
	  return adjustedMaxScroll;
	});

	var getDocumentElement = (function () {
	  var doc = document.documentElement;
	  !doc ? invariant(false, 'Cannot find document.documentElement')  : void 0;
	  return doc;
	});

	var getMaxWindowScroll = (function () {
	  var doc = getDocumentElement();
	  var maxScroll = getMaxScroll({
	    scrollHeight: doc.scrollHeight,
	    scrollWidth: doc.scrollWidth,
	    width: doc.clientWidth,
	    height: doc.clientHeight
	  });
	  return maxScroll;
	});

	var getViewport = (function () {
	  var scroll = getWindowScroll();
	  var maxScroll = getMaxWindowScroll();
	  var top = scroll.y;
	  var left = scroll.x;
	  var doc = getDocumentElement();
	  var width = doc.clientWidth;
	  var height = doc.clientHeight;
	  var right = left + width;
	  var bottom = top + height;
	  var frame = cssBoxModel_cjs.getRect({
	    top: top,
	    left: left,
	    right: right,
	    bottom: bottom
	  });
	  var viewport = {
	    frame: frame,
	    scroll: {
	      initial: scroll,
	      current: scroll,
	      max: maxScroll,
	      diff: {
	        value: origin,
	        displacement: origin
	      }
	    }
	  };
	  return viewport;
	});

	var getInitialPublish = (function (_ref) {
	  var critical = _ref.critical,
	      scrollOptions = _ref.scrollOptions,
	      registry = _ref.registry;
	  var viewport = getViewport();
	  var windowScroll = viewport.scroll.current;
	  var home = critical.droppable;
	  var droppables = registry.droppable.getAllByType(home.type).map(function (entry) {
	    return entry.callbacks.getDimensionAndWatchScroll(windowScroll, scrollOptions);
	  });
	  var draggables = registry.draggable.getAllByType(critical.draggable.type).map(function (entry) {
	    return entry.getDimension(windowScroll);
	  });
	  var dimensions = {
	    draggables: toDraggableMap(draggables),
	    droppables: toDroppableMap(droppables)
	  };
	  var result = {
	    dimensions: dimensions,
	    critical: critical,
	    viewport: viewport
	  };
	  return result;
	});

	function shouldPublishUpdate(registry, dragging, entry) {
	  if (entry.descriptor.id === dragging.id) {
	    return false;
	  }

	  if (entry.descriptor.type !== dragging.type) {
	    return false;
	  }

	  var home = registry.droppable.getById(entry.descriptor.droppableId);

	  if (home.descriptor.mode !== 'virtual') {
	    warning("\n      You are attempting to add or remove a Draggable [id: " + entry.descriptor.id + "]\n      while a drag is occurring. This is only supported for virtual lists.\n\n      See https://github.com/atlassian/react-beautiful-dnd/blob/master/docs/patterns/virtual-lists.md\n    ") ;
	    return false;
	  }

	  return true;
	}

	var createDimensionMarshal = (function (registry, callbacks) {
	  var collection = null;
	  var publisher = createPublisher({
	    callbacks: {
	      publish: callbacks.publishWhileDragging,
	      collectionStarting: callbacks.collectionStarting
	    },
	    registry: registry
	  });

	  var updateDroppableIsEnabled = function updateDroppableIsEnabled(id, isEnabled) {
	    !registry.droppable.exists(id) ? invariant(false, "Cannot update is enabled flag of Droppable " + id + " as it is not registered")  : void 0;

	    if (!collection) {
	      return;
	    }

	    callbacks.updateDroppableIsEnabled({
	      id: id,
	      isEnabled: isEnabled
	    });
	  };

	  var updateDroppableIsCombineEnabled = function updateDroppableIsCombineEnabled(id, isCombineEnabled) {
	    if (!collection) {
	      return;
	    }

	    !registry.droppable.exists(id) ? invariant(false, "Cannot update isCombineEnabled flag of Droppable " + id + " as it is not registered")  : void 0;
	    callbacks.updateDroppableIsCombineEnabled({
	      id: id,
	      isCombineEnabled: isCombineEnabled
	    });
	  };

	  var updateDroppableScroll = function updateDroppableScroll(id, newScroll) {
	    if (!collection) {
	      return;
	    }

	    !registry.droppable.exists(id) ? invariant(false, "Cannot update the scroll on Droppable " + id + " as it is not registered")  : void 0;
	    callbacks.updateDroppableScroll({
	      id: id,
	      newScroll: newScroll
	    });
	  };

	  var scrollDroppable = function scrollDroppable(id, change) {
	    if (!collection) {
	      return;
	    }

	    registry.droppable.getById(id).callbacks.scroll(change);
	  };

	  var stopPublishing = function stopPublishing() {
	    if (!collection) {
	      return;
	    }

	    publisher.stop();
	    var home = collection.critical.droppable;
	    registry.droppable.getAllByType(home.type).forEach(function (entry) {
	      return entry.callbacks.dragStopped();
	    });
	    collection.unsubscribe();
	    collection = null;
	  };

	  var subscriber = function subscriber(event) {
	    !collection ? invariant(false, 'Should only be subscribed when a collection is occurring')  : void 0;
	    var dragging = collection.critical.draggable;

	    if (event.type === 'ADDITION') {
	      if (shouldPublishUpdate(registry, dragging, event.value)) {
	        publisher.add(event.value);
	      }
	    }

	    if (event.type === 'REMOVAL') {
	      if (shouldPublishUpdate(registry, dragging, event.value)) {
	        publisher.remove(event.value);
	      }
	    }
	  };

	  var startPublishing = function startPublishing(request) {
	    !!collection ? invariant(false, 'Cannot start capturing critical dimensions as there is already a collection')  : void 0;
	    var entry = registry.draggable.getById(request.draggableId);
	    var home = registry.droppable.getById(entry.descriptor.droppableId);
	    var critical = {
	      draggable: entry.descriptor,
	      droppable: home.descriptor
	    };
	    var unsubscribe = registry.subscribe(subscriber);
	    collection = {
	      critical: critical,
	      unsubscribe: unsubscribe
	    };
	    return getInitialPublish({
	      critical: critical,
	      registry: registry,
	      scrollOptions: request.scrollOptions
	    });
	  };

	  var marshal = {
	    updateDroppableIsEnabled: updateDroppableIsEnabled,
	    updateDroppableIsCombineEnabled: updateDroppableIsCombineEnabled,
	    scrollDroppable: scrollDroppable,
	    updateDroppableScroll: updateDroppableScroll,
	    startPublishing: startPublishing,
	    stopPublishing: stopPublishing
	  };
	  return marshal;
	});

	var canStartDrag = (function (state, id) {
	  if (state.phase === 'IDLE') {
	    return true;
	  }

	  if (state.phase !== 'DROP_ANIMATING') {
	    return false;
	  }

	  if (state.completed.result.draggableId === id) {
	    return false;
	  }

	  return state.completed.result.reason === 'DROP';
	});

	var scrollWindow = (function (change) {
	  window.scrollBy(change.x, change.y);
	});

	var getScrollableDroppables = memoizeOne(function (droppables) {
	  return toDroppableList(droppables).filter(function (droppable) {
	    if (!droppable.isEnabled) {
	      return false;
	    }

	    if (!droppable.frame) {
	      return false;
	    }

	    return true;
	  });
	});

	var getScrollableDroppableOver = function getScrollableDroppableOver(target, droppables) {
	  var maybe = find(getScrollableDroppables(droppables), function (droppable) {
	    !droppable.frame ? invariant(false, 'Invalid result')  : void 0;
	    return isPositionInFrame(droppable.frame.pageMarginBox)(target);
	  });
	  return maybe;
	};

	var getBestScrollableDroppable = (function (_ref) {
	  var center = _ref.center,
	      destination = _ref.destination,
	      droppables = _ref.droppables;

	  if (destination) {
	    var _dimension = droppables[destination];

	    if (!_dimension.frame) {
	      return null;
	    }

	    return _dimension;
	  }

	  var dimension = getScrollableDroppableOver(center, droppables);
	  return dimension;
	});

	var config = {
	  startFromPercentage: 0.25,
	  maxScrollAtPercentage: 0.05,
	  maxPixelScroll: 28,
	  ease: function ease(percentage) {
	    return Math.pow(percentage, 2);
	  },
	  durationDampening: {
	    stopDampeningAt: 1200,
	    accelerateAt: 360
	  }
	};

	var getDistanceThresholds = (function (container, axis) {
	  var startScrollingFrom = container[axis.size] * config.startFromPercentage;
	  var maxScrollValueAt = container[axis.size] * config.maxScrollAtPercentage;
	  var thresholds = {
	    startScrollingFrom: startScrollingFrom,
	    maxScrollValueAt: maxScrollValueAt
	  };
	  return thresholds;
	});

	var getPercentage = (function (_ref) {
	  var startOfRange = _ref.startOfRange,
	      endOfRange = _ref.endOfRange,
	      current = _ref.current;
	  var range = endOfRange - startOfRange;

	  if (range === 0) {
	    warning("\n      Detected distance range of 0 in the fluid auto scroller\n      This is unexpected and would cause a divide by 0 issue.\n      Not allowing an auto scroll\n    ") ;
	    return 0;
	  }

	  var currentInRange = current - startOfRange;
	  var percentage = currentInRange / range;
	  return percentage;
	});

	var minScroll = 1;

	var getValueFromDistance = (function (distanceToEdge, thresholds) {
	  if (distanceToEdge > thresholds.startScrollingFrom) {
	    return 0;
	  }

	  if (distanceToEdge <= thresholds.maxScrollValueAt) {
	    return config.maxPixelScroll;
	  }

	  if (distanceToEdge === thresholds.startScrollingFrom) {
	    return minScroll;
	  }

	  var percentageFromMaxScrollValueAt = getPercentage({
	    startOfRange: thresholds.maxScrollValueAt,
	    endOfRange: thresholds.startScrollingFrom,
	    current: distanceToEdge
	  });
	  var percentageFromStartScrollingFrom = 1 - percentageFromMaxScrollValueAt;
	  var scroll = config.maxPixelScroll * config.ease(percentageFromStartScrollingFrom);
	  return Math.ceil(scroll);
	});

	var accelerateAt = config.durationDampening.accelerateAt;
	var stopAt = config.durationDampening.stopDampeningAt;
	var dampenValueByTime = (function (proposedScroll, dragStartTime) {
	  var startOfRange = dragStartTime;
	  var endOfRange = stopAt;
	  var now = Date.now();
	  var runTime = now - startOfRange;

	  if (runTime >= stopAt) {
	    return proposedScroll;
	  }

	  if (runTime < accelerateAt) {
	    return minScroll;
	  }

	  var betweenAccelerateAtAndStopAtPercentage = getPercentage({
	    startOfRange: accelerateAt,
	    endOfRange: endOfRange,
	    current: runTime
	  });
	  var scroll = proposedScroll * config.ease(betweenAccelerateAtAndStopAtPercentage);
	  return Math.ceil(scroll);
	});

	var getValue = (function (_ref) {
	  var distanceToEdge = _ref.distanceToEdge,
	      thresholds = _ref.thresholds,
	      dragStartTime = _ref.dragStartTime,
	      shouldUseTimeDampening = _ref.shouldUseTimeDampening;
	  var scroll = getValueFromDistance(distanceToEdge, thresholds);

	  if (scroll === 0) {
	    return 0;
	  }

	  if (!shouldUseTimeDampening) {
	    return scroll;
	  }

	  return Math.max(dampenValueByTime(scroll, dragStartTime), minScroll);
	});

	var getScrollOnAxis = (function (_ref) {
	  var container = _ref.container,
	      distanceToEdges = _ref.distanceToEdges,
	      dragStartTime = _ref.dragStartTime,
	      axis = _ref.axis,
	      shouldUseTimeDampening = _ref.shouldUseTimeDampening;
	  var thresholds = getDistanceThresholds(container, axis);
	  var isCloserToEnd = distanceToEdges[axis.end] < distanceToEdges[axis.start];

	  if (isCloserToEnd) {
	    return getValue({
	      distanceToEdge: distanceToEdges[axis.end],
	      thresholds: thresholds,
	      dragStartTime: dragStartTime,
	      shouldUseTimeDampening: shouldUseTimeDampening
	    });
	  }

	  return -1 * getValue({
	    distanceToEdge: distanceToEdges[axis.start],
	    thresholds: thresholds,
	    dragStartTime: dragStartTime,
	    shouldUseTimeDampening: shouldUseTimeDampening
	  });
	});

	var adjustForSizeLimits = (function (_ref) {
	  var container = _ref.container,
	      subject = _ref.subject,
	      proposedScroll = _ref.proposedScroll;
	  var isTooBigVertically = subject.height > container.height;
	  var isTooBigHorizontally = subject.width > container.width;

	  if (!isTooBigHorizontally && !isTooBigVertically) {
	    return proposedScroll;
	  }

	  if (isTooBigHorizontally && isTooBigVertically) {
	    return null;
	  }

	  return {
	    x: isTooBigHorizontally ? 0 : proposedScroll.x,
	    y: isTooBigVertically ? 0 : proposedScroll.y
	  };
	});

	var clean$2 = apply(function (value) {
	  return value === 0 ? 0 : value;
	});
	var getScroll = (function (_ref) {
	  var dragStartTime = _ref.dragStartTime,
	      container = _ref.container,
	      subject = _ref.subject,
	      center = _ref.center,
	      shouldUseTimeDampening = _ref.shouldUseTimeDampening;
	  var distanceToEdges = {
	    top: center.y - container.top,
	    right: container.right - center.x,
	    bottom: container.bottom - center.y,
	    left: center.x - container.left
	  };
	  var y = getScrollOnAxis({
	    container: container,
	    distanceToEdges: distanceToEdges,
	    dragStartTime: dragStartTime,
	    axis: vertical,
	    shouldUseTimeDampening: shouldUseTimeDampening
	  });
	  var x = getScrollOnAxis({
	    container: container,
	    distanceToEdges: distanceToEdges,
	    dragStartTime: dragStartTime,
	    axis: horizontal,
	    shouldUseTimeDampening: shouldUseTimeDampening
	  });
	  var required = clean$2({
	    x: x,
	    y: y
	  });

	  if (isEqual(required, origin)) {
	    return null;
	  }

	  var limited = adjustForSizeLimits({
	    container: container,
	    subject: subject,
	    proposedScroll: required
	  });

	  if (!limited) {
	    return null;
	  }

	  return isEqual(limited, origin) ? null : limited;
	});

	var smallestSigned = apply(function (value) {
	  if (value === 0) {
	    return 0;
	  }

	  return value > 0 ? 1 : -1;
	});
	var getOverlap = function () {
	  var getRemainder = function getRemainder(target, max) {
	    if (target < 0) {
	      return target;
	    }

	    if (target > max) {
	      return target - max;
	    }

	    return 0;
	  };

	  return function (_ref) {
	    var current = _ref.current,
	        max = _ref.max,
	        change = _ref.change;
	    var targetScroll = add(current, change);
	    var overlap = {
	      x: getRemainder(targetScroll.x, max.x),
	      y: getRemainder(targetScroll.y, max.y)
	    };

	    if (isEqual(overlap, origin)) {
	      return null;
	    }

	    return overlap;
	  };
	}();
	var canPartiallyScroll = function canPartiallyScroll(_ref2) {
	  var rawMax = _ref2.max,
	      current = _ref2.current,
	      change = _ref2.change;
	  var max = {
	    x: Math.max(current.x, rawMax.x),
	    y: Math.max(current.y, rawMax.y)
	  };
	  var smallestChange = smallestSigned(change);
	  var overlap = getOverlap({
	    max: max,
	    current: current,
	    change: smallestChange
	  });

	  if (!overlap) {
	    return true;
	  }

	  if (smallestChange.x !== 0 && overlap.x === 0) {
	    return true;
	  }

	  if (smallestChange.y !== 0 && overlap.y === 0) {
	    return true;
	  }

	  return false;
	};
	var canScrollWindow = function canScrollWindow(viewport, change) {
	  return canPartiallyScroll({
	    current: viewport.scroll.current,
	    max: viewport.scroll.max,
	    change: change
	  });
	};
	var getWindowOverlap = function getWindowOverlap(viewport, change) {
	  if (!canScrollWindow(viewport, change)) {
	    return null;
	  }

	  var max = viewport.scroll.max;
	  var current = viewport.scroll.current;
	  return getOverlap({
	    current: current,
	    max: max,
	    change: change
	  });
	};
	var canScrollDroppable = function canScrollDroppable(droppable, change) {
	  var frame = droppable.frame;

	  if (!frame) {
	    return false;
	  }

	  return canPartiallyScroll({
	    current: frame.scroll.current,
	    max: frame.scroll.max,
	    change: change
	  });
	};
	var getDroppableOverlap = function getDroppableOverlap(droppable, change) {
	  var frame = droppable.frame;

	  if (!frame) {
	    return null;
	  }

	  if (!canScrollDroppable(droppable, change)) {
	    return null;
	  }

	  return getOverlap({
	    current: frame.scroll.current,
	    max: frame.scroll.max,
	    change: change
	  });
	};

	var getWindowScrollChange = (function (_ref) {
	  var viewport = _ref.viewport,
	      subject = _ref.subject,
	      center = _ref.center,
	      dragStartTime = _ref.dragStartTime,
	      shouldUseTimeDampening = _ref.shouldUseTimeDampening;
	  var scroll = getScroll({
	    dragStartTime: dragStartTime,
	    container: viewport.frame,
	    subject: subject,
	    center: center,
	    shouldUseTimeDampening: shouldUseTimeDampening
	  });
	  return scroll && canScrollWindow(viewport, scroll) ? scroll : null;
	});

	var getDroppableScrollChange = (function (_ref) {
	  var droppable = _ref.droppable,
	      subject = _ref.subject,
	      center = _ref.center,
	      dragStartTime = _ref.dragStartTime,
	      shouldUseTimeDampening = _ref.shouldUseTimeDampening;
	  var frame = droppable.frame;

	  if (!frame) {
	    return null;
	  }

	  var scroll = getScroll({
	    dragStartTime: dragStartTime,
	    container: frame.pageMarginBox,
	    subject: subject,
	    center: center,
	    shouldUseTimeDampening: shouldUseTimeDampening
	  });
	  return scroll && canScrollDroppable(droppable, scroll) ? scroll : null;
	});

	var scroll$1 = (function (_ref) {
	  var state = _ref.state,
	      dragStartTime = _ref.dragStartTime,
	      shouldUseTimeDampening = _ref.shouldUseTimeDampening,
	      scrollWindow = _ref.scrollWindow,
	      scrollDroppable = _ref.scrollDroppable;
	  var center = state.current.page.borderBoxCenter;
	  var draggable = state.dimensions.draggables[state.critical.draggable.id];
	  var subject = draggable.page.marginBox;

	  if (state.isWindowScrollAllowed) {
	    var viewport = state.viewport;

	    var _change = getWindowScrollChange({
	      dragStartTime: dragStartTime,
	      viewport: viewport,
	      subject: subject,
	      center: center,
	      shouldUseTimeDampening: shouldUseTimeDampening
	    });

	    if (_change) {
	      scrollWindow(_change);
	      return;
	    }
	  }

	  var droppable = getBestScrollableDroppable({
	    center: center,
	    destination: whatIsDraggedOver(state.impact),
	    droppables: state.dimensions.droppables
	  });

	  if (!droppable) {
	    return;
	  }

	  var change = getDroppableScrollChange({
	    dragStartTime: dragStartTime,
	    droppable: droppable,
	    subject: subject,
	    center: center,
	    shouldUseTimeDampening: shouldUseTimeDampening
	  });

	  if (change) {
	    scrollDroppable(droppable.descriptor.id, change);
	  }
	});

	var createFluidScroller = (function (_ref) {
	  var scrollWindow = _ref.scrollWindow,
	      scrollDroppable = _ref.scrollDroppable;
	  var scheduleWindowScroll = rafSchd(scrollWindow);
	  var scheduleDroppableScroll = rafSchd(scrollDroppable);
	  var dragging = null;

	  var tryScroll = function tryScroll(state) {
	    !dragging ? invariant(false, 'Cannot fluid scroll if not dragging')  : void 0;
	    var _dragging = dragging,
	        shouldUseTimeDampening = _dragging.shouldUseTimeDampening,
	        dragStartTime = _dragging.dragStartTime;
	    scroll$1({
	      state: state,
	      scrollWindow: scheduleWindowScroll,
	      scrollDroppable: scheduleDroppableScroll,
	      dragStartTime: dragStartTime,
	      shouldUseTimeDampening: shouldUseTimeDampening
	    });
	  };

	  var start$1 = function start$1(state) {
	    !!dragging ? invariant(false, 'Cannot start auto scrolling when already started')  : void 0;
	    var dragStartTime = Date.now();
	    var wasScrollNeeded = false;

	    var fakeScrollCallback = function fakeScrollCallback() {
	      wasScrollNeeded = true;
	    };

	    scroll$1({
	      state: state,
	      dragStartTime: 0,
	      shouldUseTimeDampening: false,
	      scrollWindow: fakeScrollCallback,
	      scrollDroppable: fakeScrollCallback
	    });
	    dragging = {
	      dragStartTime: dragStartTime,
	      shouldUseTimeDampening: wasScrollNeeded
	    };

	    if (wasScrollNeeded) {
	      tryScroll(state);
	    }
	  };

	  var stop = function stop() {
	    if (!dragging) {
	      return;
	    }

	    scheduleWindowScroll.cancel();
	    scheduleDroppableScroll.cancel();
	    dragging = null;
	  };

	  return {
	    start: start$1,
	    stop: stop,
	    scroll: tryScroll
	  };
	});

	var createJumpScroller = (function (_ref) {
	  var move = _ref.move,
	      scrollDroppable = _ref.scrollDroppable,
	      scrollWindow = _ref.scrollWindow;

	  var moveByOffset = function moveByOffset(state, offset) {
	    var client = add(state.current.client.selection, offset);
	    move({
	      client: client
	    });
	  };

	  var scrollDroppableAsMuchAsItCan = function scrollDroppableAsMuchAsItCan(droppable, change) {
	    if (!canScrollDroppable(droppable, change)) {
	      return change;
	    }

	    var overlap = getDroppableOverlap(droppable, change);

	    if (!overlap) {
	      scrollDroppable(droppable.descriptor.id, change);
	      return null;
	    }

	    var whatTheDroppableCanScroll = subtract(change, overlap);
	    scrollDroppable(droppable.descriptor.id, whatTheDroppableCanScroll);
	    var remainder = subtract(change, whatTheDroppableCanScroll);
	    return remainder;
	  };

	  var scrollWindowAsMuchAsItCan = function scrollWindowAsMuchAsItCan(isWindowScrollAllowed, viewport, change) {
	    if (!isWindowScrollAllowed) {
	      return change;
	    }

	    if (!canScrollWindow(viewport, change)) {
	      return change;
	    }

	    var overlap = getWindowOverlap(viewport, change);

	    if (!overlap) {
	      scrollWindow(change);
	      return null;
	    }

	    var whatTheWindowCanScroll = subtract(change, overlap);
	    scrollWindow(whatTheWindowCanScroll);
	    var remainder = subtract(change, whatTheWindowCanScroll);
	    return remainder;
	  };

	  var jumpScroller = function jumpScroller(state) {
	    var request = state.scrollJumpRequest;

	    if (!request) {
	      return;
	    }

	    var destination = whatIsDraggedOver(state.impact);
	    !destination ? invariant(false, 'Cannot perform a jump scroll when there is no destination')  : void 0;
	    var droppableRemainder = scrollDroppableAsMuchAsItCan(state.dimensions.droppables[destination], request);

	    if (!droppableRemainder) {
	      return;
	    }

	    var viewport = state.viewport;
	    var windowRemainder = scrollWindowAsMuchAsItCan(state.isWindowScrollAllowed, viewport, droppableRemainder);

	    if (!windowRemainder) {
	      return;
	    }

	    moveByOffset(state, windowRemainder);
	  };

	  return jumpScroller;
	});

	var createAutoScroller = (function (_ref) {
	  var scrollDroppable = _ref.scrollDroppable,
	      scrollWindow = _ref.scrollWindow,
	      move = _ref.move;
	  var fluidScroller = createFluidScroller({
	    scrollWindow: scrollWindow,
	    scrollDroppable: scrollDroppable
	  });
	  var jumpScroll = createJumpScroller({
	    move: move,
	    scrollWindow: scrollWindow,
	    scrollDroppable: scrollDroppable
	  });

	  var scroll = function scroll(state) {
	    if (state.phase !== 'DRAGGING') {
	      return;
	    }

	    if (state.movementMode === 'FLUID') {
	      fluidScroller.scroll(state);
	      return;
	    }

	    if (!state.scrollJumpRequest) {
	      return;
	    }

	    jumpScroll(state);
	  };

	  var scroller = {
	    scroll: scroll,
	    start: fluidScroller.start,
	    stop: fluidScroller.stop
	  };
	  return scroller;
	});

	var prefix$1 = 'data-rbd';
	var dragHandle = function () {
	  var base = prefix$1 + "-drag-handle";
	  return {
	    base: base,
	    draggableId: base + "-draggable-id",
	    contextId: base + "-context-id"
	  };
	}();
	var draggable = function () {
	  var base = prefix$1 + "-draggable";
	  return {
	    base: base,
	    contextId: base + "-context-id",
	    id: base + "-id"
	  };
	}();
	var droppable = function () {
	  var base = prefix$1 + "-droppable";
	  return {
	    base: base,
	    contextId: base + "-context-id",
	    id: base + "-id"
	  };
	}();
	var scrollContainer = {
	  contextId: prefix$1 + "-scroll-container-context-id"
	};

	var makeGetSelector = function makeGetSelector(context) {
	  return function (attribute) {
	    return "[" + attribute + "=\"" + context + "\"]";
	  };
	};

	var getStyles = function getStyles(rules, property) {
	  return rules.map(function (rule) {
	    var value = rule.styles[property];

	    if (!value) {
	      return '';
	    }

	    return rule.selector + " { " + value + " }";
	  }).join(' ');
	};

	var noPointerEvents = 'pointer-events: none;';
	var getStyles$1 = (function (contextId) {
	  var getSelector = makeGetSelector(contextId);

	  var dragHandle$1 = function () {
	    var grabCursor = "\n      cursor: -webkit-grab;\n      cursor: grab;\n    ";
	    return {
	      selector: getSelector(dragHandle.contextId),
	      styles: {
	        always: "\n          -webkit-touch-callout: none;\n          -webkit-tap-highlight-color: rgba(0,0,0,0);\n          touch-action: manipulation;\n        ",
	        resting: grabCursor,
	        dragging: noPointerEvents,
	        dropAnimating: grabCursor
	      }
	    };
	  }();

	  var draggable$1 = function () {
	    var transition = "\n      transition: " + transitions.outOfTheWay + ";\n    ";
	    return {
	      selector: getSelector(draggable.contextId),
	      styles: {
	        dragging: transition,
	        dropAnimating: transition,
	        userCancel: transition
	      }
	    };
	  }();

	  var droppable$1 = {
	    selector: getSelector(droppable.contextId),
	    styles: {
	      always: "overflow-anchor: none;"
	    }
	  };
	  var body = {
	    selector: 'body',
	    styles: {
	      dragging: "\n        cursor: grabbing;\n        cursor: -webkit-grabbing;\n        user-select: none;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        overflow-anchor: none;\n      "
	    }
	  };
	  var rules = [draggable$1, dragHandle$1, droppable$1, body];
	  return {
	    always: getStyles(rules, 'always'),
	    resting: getStyles(rules, 'resting'),
	    dragging: getStyles(rules, 'dragging'),
	    dropAnimating: getStyles(rules, 'dropAnimating'),
	    userCancel: getStyles(rules, 'userCancel')
	  };
	});

	var useIsomorphicLayoutEffect = typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined' ? React__default['default'].useLayoutEffect : React__default['default'].useEffect;

	var getHead = function getHead() {
	  var head = document.querySelector('head');
	  !head ? invariant(false, 'Cannot find the head to append a style to')  : void 0;
	  return head;
	};

	var createStyleEl = function createStyleEl(nonce) {
	  var el = document.createElement('style');

	  if (nonce) {
	    el.setAttribute('nonce', nonce);
	  }

	  el.type = 'text/css';
	  return el;
	};

	function useStyleMarshal(contextId, nonce) {
	  var styles = useMemoOne_cjs.useMemo(function () {
	    return getStyles$1(contextId);
	  }, [contextId]);
	  var alwaysRef = React__default['default'].useRef(null);
	  var dynamicRef = React__default['default'].useRef(null);
	  var setDynamicStyle = useMemoOne_cjs.useCallback(memoizeOne(function (proposed) {
	    var el = dynamicRef.current;
	    !el ? invariant(false, 'Cannot set dynamic style element if it is not set')  : void 0;
	    el.textContent = proposed;
	  }), []);
	  var setAlwaysStyle = useMemoOne_cjs.useCallback(function (proposed) {
	    var el = alwaysRef.current;
	    !el ? invariant(false, 'Cannot set dynamic style element if it is not set')  : void 0;
	    el.textContent = proposed;
	  }, []);
	  useIsomorphicLayoutEffect(function () {
	    !(!alwaysRef.current && !dynamicRef.current) ? invariant(false, 'style elements already mounted')  : void 0;
	    var always = createStyleEl(nonce);
	    var dynamic = createStyleEl(nonce);
	    alwaysRef.current = always;
	    dynamicRef.current = dynamic;
	    always.setAttribute(prefix$1 + "-always", contextId);
	    dynamic.setAttribute(prefix$1 + "-dynamic", contextId);
	    getHead().appendChild(always);
	    getHead().appendChild(dynamic);
	    setAlwaysStyle(styles.always);
	    setDynamicStyle(styles.resting);
	    return function () {
	      var remove = function remove(ref) {
	        var current = ref.current;
	        !current ? invariant(false, 'Cannot unmount ref as it is not set')  : void 0;
	        getHead().removeChild(current);
	        ref.current = null;
	      };

	      remove(alwaysRef);
	      remove(dynamicRef);
	    };
	  }, [nonce, setAlwaysStyle, setDynamicStyle, styles.always, styles.resting, contextId]);
	  var dragging = useMemoOne_cjs.useCallback(function () {
	    return setDynamicStyle(styles.dragging);
	  }, [setDynamicStyle, styles.dragging]);
	  var dropping = useMemoOne_cjs.useCallback(function (reason) {
	    if (reason === 'DROP') {
	      setDynamicStyle(styles.dropAnimating);
	      return;
	    }

	    setDynamicStyle(styles.userCancel);
	  }, [setDynamicStyle, styles.dropAnimating, styles.userCancel]);
	  var resting = useMemoOne_cjs.useCallback(function () {
	    if (!dynamicRef.current) {
	      return;
	    }

	    setDynamicStyle(styles.resting);
	  }, [setDynamicStyle, styles.resting]);
	  var marshal = useMemoOne_cjs.useMemo(function () {
	    return {
	      dragging: dragging,
	      dropping: dropping,
	      resting: resting
	    };
	  }, [dragging, dropping, resting]);
	  return marshal;
	}

	var getWindowFromEl = (function (el) {
	  return el && el.ownerDocument ? el.ownerDocument.defaultView : window;
	});

	function isHtmlElement(el) {
	  return el instanceof getWindowFromEl(el).HTMLElement;
	}

	function findDragHandle(contextId, draggableId) {
	  var selector = "[" + dragHandle.contextId + "=\"" + contextId + "\"]";
	  var possible = toArray(document.querySelectorAll(selector));

	  if (!possible.length) {
	    warning("Unable to find any drag handles in the context \"" + contextId + "\"") ;
	    return null;
	  }

	  var handle = find(possible, function (el) {
	    return el.getAttribute(dragHandle.draggableId) === draggableId;
	  });

	  if (!handle) {
	    warning("Unable to find drag handle with id \"" + draggableId + "\" as no handle with a matching id was found") ;
	    return null;
	  }

	  if (!isHtmlElement(handle)) {
	    warning('drag handle needs to be a HTMLElement') ;
	    return null;
	  }

	  return handle;
	}

	function useFocusMarshal(contextId) {
	  var entriesRef = React__default['default'].useRef({});
	  var recordRef = React__default['default'].useRef(null);
	  var restoreFocusFrameRef = React__default['default'].useRef(null);
	  var isMountedRef = React__default['default'].useRef(false);
	  var register = useMemoOne_cjs.useCallback(function register(id, focus) {
	    var entry = {
	      id: id,
	      focus: focus
	    };
	    entriesRef.current[id] = entry;
	    return function unregister() {
	      var entries = entriesRef.current;
	      var current = entries[id];

	      if (current !== entry) {
	        delete entries[id];
	      }
	    };
	  }, []);
	  var tryGiveFocus = useMemoOne_cjs.useCallback(function tryGiveFocus(tryGiveFocusTo) {
	    var handle = findDragHandle(contextId, tryGiveFocusTo);

	    if (handle && handle !== document.activeElement) {
	      handle.focus();
	    }
	  }, [contextId]);
	  var tryShiftRecord = useMemoOne_cjs.useCallback(function tryShiftRecord(previous, redirectTo) {
	    if (recordRef.current === previous) {
	      recordRef.current = redirectTo;
	    }
	  }, []);
	  var tryRestoreFocusRecorded = useMemoOne_cjs.useCallback(function tryRestoreFocusRecorded() {
	    if (restoreFocusFrameRef.current) {
	      return;
	    }

	    if (!isMountedRef.current) {
	      return;
	    }

	    restoreFocusFrameRef.current = requestAnimationFrame(function () {
	      restoreFocusFrameRef.current = null;
	      var record = recordRef.current;

	      if (record) {
	        tryGiveFocus(record);
	      }
	    });
	  }, [tryGiveFocus]);
	  var tryRecordFocus = useMemoOne_cjs.useCallback(function tryRecordFocus(id) {
	    recordRef.current = null;
	    var focused = document.activeElement;

	    if (!focused) {
	      return;
	    }

	    if (focused.getAttribute(dragHandle.draggableId) !== id) {
	      return;
	    }

	    recordRef.current = id;
	  }, []);
	  useIsomorphicLayoutEffect(function () {
	    isMountedRef.current = true;
	    return function clearFrameOnUnmount() {
	      isMountedRef.current = false;
	      var frameId = restoreFocusFrameRef.current;

	      if (frameId) {
	        cancelAnimationFrame(frameId);
	      }
	    };
	  }, []);
	  var marshal = useMemoOne_cjs.useMemo(function () {
	    return {
	      register: register,
	      tryRecordFocus: tryRecordFocus,
	      tryRestoreFocusRecorded: tryRestoreFocusRecorded,
	      tryShiftRecord: tryShiftRecord
	    };
	  }, [register, tryRecordFocus, tryRestoreFocusRecorded, tryShiftRecord]);
	  return marshal;
	}

	function createRegistry() {
	  var entries = {
	    draggables: {},
	    droppables: {}
	  };
	  var subscribers = [];

	  function subscribe(cb) {
	    subscribers.push(cb);
	    return function unsubscribe() {
	      var index = subscribers.indexOf(cb);

	      if (index === -1) {
	        return;
	      }

	      subscribers.splice(index, 1);
	    };
	  }

	  function notify(event) {
	    if (subscribers.length) {
	      subscribers.forEach(function (cb) {
	        return cb(event);
	      });
	    }
	  }

	  function findDraggableById(id) {
	    return entries.draggables[id] || null;
	  }

	  function getDraggableById(id) {
	    var entry = findDraggableById(id);
	    !entry ? invariant(false, "Cannot find draggable entry with id [" + id + "]")  : void 0;
	    return entry;
	  }

	  var draggableAPI = {
	    register: function register(entry) {
	      entries.draggables[entry.descriptor.id] = entry;
	      notify({
	        type: 'ADDITION',
	        value: entry
	      });
	    },
	    update: function update(entry, last) {
	      var current = entries.draggables[last.descriptor.id];

	      if (!current) {
	        return;
	      }

	      if (current.uniqueId !== entry.uniqueId) {
	        return;
	      }

	      delete entries.draggables[last.descriptor.id];
	      entries.draggables[entry.descriptor.id] = entry;
	    },
	    unregister: function unregister(entry) {
	      var draggableId = entry.descriptor.id;
	      var current = findDraggableById(draggableId);

	      if (!current) {
	        return;
	      }

	      if (entry.uniqueId !== current.uniqueId) {
	        return;
	      }

	      delete entries.draggables[draggableId];
	      notify({
	        type: 'REMOVAL',
	        value: entry
	      });
	    },
	    getById: getDraggableById,
	    findById: findDraggableById,
	    exists: function exists(id) {
	      return Boolean(findDraggableById(id));
	    },
	    getAllByType: function getAllByType(type) {
	      return values(entries.draggables).filter(function (entry) {
	        return entry.descriptor.type === type;
	      });
	    }
	  };

	  function findDroppableById(id) {
	    return entries.droppables[id] || null;
	  }

	  function getDroppableById(id) {
	    var entry = findDroppableById(id);
	    !entry ? invariant(false, "Cannot find droppable entry with id [" + id + "]")  : void 0;
	    return entry;
	  }

	  var droppableAPI = {
	    register: function register(entry) {
	      entries.droppables[entry.descriptor.id] = entry;
	    },
	    unregister: function unregister(entry) {
	      var current = findDroppableById(entry.descriptor.id);

	      if (!current) {
	        return;
	      }

	      if (entry.uniqueId !== current.uniqueId) {
	        return;
	      }

	      delete entries.droppables[entry.descriptor.id];
	    },
	    getById: getDroppableById,
	    findById: findDroppableById,
	    exists: function exists(id) {
	      return Boolean(findDroppableById(id));
	    },
	    getAllByType: function getAllByType(type) {
	      return values(entries.droppables).filter(function (entry) {
	        return entry.descriptor.type === type;
	      });
	    }
	  };

	  function clean() {
	    entries.draggables = {};
	    entries.droppables = {};
	    subscribers.length = 0;
	  }

	  return {
	    draggable: draggableAPI,
	    droppable: droppableAPI,
	    subscribe: subscribe,
	    clean: clean
	  };
	}

	function useRegistry() {
	  var registry = useMemoOne_cjs.useMemo(createRegistry, []);
	  React__default['default'].useEffect(function () {
	    return function unmount() {
	      requestAnimationFrame(registry.clean);
	    };
	  }, [registry]);
	  return registry;
	}

	var StoreContext = React__default$1.createContext(null);

	var getBodyElement = (function () {
	  var body = document.body;
	  !body ? invariant(false, 'Cannot find document.body')  : void 0;
	  return body;
	});

	var visuallyHidden = {
	  position: 'absolute',
	  width: '1px',
	  height: '1px',
	  margin: '-1px',
	  border: '0',
	  padding: '0',
	  overflow: 'hidden',
	  clip: 'rect(0 0 0 0)',
	  'clip-path': 'inset(100%)'
	};

	var getId = function getId(contextId) {
	  return "rbd-announcement-" + contextId;
	};
	function useAnnouncer(contextId) {
	  var id = useMemoOne_cjs.useMemo(function () {
	    return getId(contextId);
	  }, [contextId]);
	  var ref = React__default['default'].useRef(null);
	  React__default['default'].useEffect(function setup() {
	    var el = document.createElement('div');
	    ref.current = el;
	    el.id = id;
	    el.setAttribute('aria-live', 'assertive');
	    el.setAttribute('aria-atomic', 'true');

	    _extends(el.style, visuallyHidden);

	    getBodyElement().appendChild(el);
	    return function cleanup() {
	      setTimeout(function remove() {
	        var body = getBodyElement();

	        if (body.contains(el)) {
	          body.removeChild(el);
	        }

	        if (el === ref.current) {
	          ref.current = null;
	        }
	      });
	    };
	  }, [id]);
	  var announce = useMemoOne_cjs.useCallback(function (message) {
	    var el = ref.current;

	    if (el) {
	      el.textContent = message;
	      return;
	    }

	    warning("\n      A screen reader message was trying to be announced but it was unable to do so.\n      This can occur if you unmount your <DragDropContext /> in your onDragEnd.\n      Consider calling provided.announce() before the unmount so that the instruction will\n      not be lost for users relying on a screen reader.\n\n      Message not passed to screen reader:\n\n      \"" + message + "\"\n    ") ;
	  }, []);
	  return announce;
	}

	var count = 0;
	var defaults = {
	  separator: '::'
	};
	function reset() {
	  count = 0;
	}
	function useUniqueId(prefix, options) {
	  if (options === void 0) {
	    options = defaults;
	  }

	  return useMemoOne_cjs.useMemo(function () {
	    return "" + prefix + options.separator + count++;
	  }, [options.separator, prefix]);
	}

	function getElementId(_ref) {
	  var contextId = _ref.contextId,
	      uniqueId = _ref.uniqueId;
	  return "rbd-hidden-text-" + contextId + "-" + uniqueId;
	}
	function useHiddenTextElement(_ref2) {
	  var contextId = _ref2.contextId,
	      text = _ref2.text;
	  var uniqueId = useUniqueId('hidden-text', {
	    separator: '-'
	  });
	  var id = useMemoOne_cjs.useMemo(function () {
	    return getElementId({
	      contextId: contextId,
	      uniqueId: uniqueId
	    });
	  }, [uniqueId, contextId]);
	  React__default['default'].useEffect(function mount() {
	    var el = document.createElement('div');
	    el.id = id;
	    el.textContent = text;
	    el.style.display = 'none';
	    getBodyElement().appendChild(el);
	    return function unmount() {
	      var body = getBodyElement();

	      if (body.contains(el)) {
	        body.removeChild(el);
	      }
	    };
	  }, [id, text]);
	  return id;
	}

	var AppContext = React__default$1.createContext(null);

	var peerDependencies = {
		react: "^16.8.5 || ^17.0.0",
		"react-dom": "^16.8.5 || ^17.0.0"
	};

	var semver = /(\d+)\.(\d+)\.(\d+)/;

	var getVersion = function getVersion(value) {
	  var result = semver.exec(value);
	  !(result != null) ? invariant(false, "Unable to parse React version " + value)  : void 0;
	  var major = Number(result[1]);
	  var minor = Number(result[2]);
	  var patch = Number(result[3]);
	  return {
	    major: major,
	    minor: minor,
	    patch: patch,
	    raw: value
	  };
	};

	var isSatisfied = function isSatisfied(expected, actual) {
	  if (actual.major > expected.major) {
	    return true;
	  }

	  if (actual.major < expected.major) {
	    return false;
	  }

	  if (actual.minor > expected.minor) {
	    return true;
	  }

	  if (actual.minor < expected.minor) {
	    return false;
	  }

	  return actual.patch >= expected.patch;
	};

	var checkReactVersion = (function (peerDepValue, actualValue) {
	  var peerDep = getVersion(peerDepValue);
	  var actual = getVersion(actualValue);

	  if (isSatisfied(peerDep, actual)) {
	    return;
	  }

	  warning("\n    React version: [" + actual.raw + "]\n    does not satisfy expected peer dependency version: [" + peerDep.raw + "]\n\n    This can result in run time bugs, and even fatal crashes\n  ") ;
	});

	var suffix = "\n  We expect a html5 doctype: <!doctype html>\n  This is to ensure consistent browser layout and measurement\n\n  More information: https://github.com/atlassian/react-beautiful-dnd/blob/master/docs/guides/doctype.md\n";
	var checkDoctype = (function (doc) {
	  var doctype = doc.doctype;

	  if (!doctype) {
	    warning("\n      No <!doctype html> found.\n\n      " + suffix + "\n    ") ;
	    return;
	  }

	  if (doctype.name.toLowerCase() !== 'html') {
	    warning("\n      Unexpected <!doctype> found: (" + doctype.name + ")\n\n      " + suffix + "\n    ") ;
	  }

	  if (doctype.publicId !== '') {
	    warning("\n      Unexpected <!doctype> publicId found: (" + doctype.publicId + ")\n      A html5 doctype does not have a publicId\n\n      " + suffix + "\n    ") ;
	  }
	});

	function useDev(useHook) {
	  {
	    useHook();
	  }
	}

	function useDevSetupWarning(fn, inputs) {
	  useDev(function () {
	    React__default['default'].useEffect(function () {
	      try {
	        fn();
	      } catch (e) {
	        error("\n          A setup problem was encountered.\n\n          > " + e.message + "\n        ");
	      }
	    }, inputs);
	  });
	}

	function useStartupValidation() {
	  useDevSetupWarning(function () {
	    checkReactVersion(peerDependencies.react, React__default$1.version);
	    checkDoctype(document);
	  }, []);
	}

	function usePrevious(current) {
	  var ref = React__default['default'].useRef(current);
	  React__default['default'].useEffect(function () {
	    ref.current = current;
	  });
	  return ref;
	}

	function create() {
	  var lock = null;

	  function isClaimed() {
	    return Boolean(lock);
	  }

	  function isActive(value) {
	    return value === lock;
	  }

	  function claim(abandon) {
	    !!lock ? invariant(false, 'Cannot claim lock as it is already claimed')  : void 0;
	    var newLock = {
	      abandon: abandon
	    };
	    lock = newLock;
	    return newLock;
	  }

	  function release() {
	    !lock ? invariant(false, 'Cannot release lock when there is no lock')  : void 0;
	    lock = null;
	  }

	  function tryAbandon() {
	    if (lock) {
	      lock.abandon();
	      release();
	    }
	  }

	  return {
	    isClaimed: isClaimed,
	    isActive: isActive,
	    claim: claim,
	    release: release,
	    tryAbandon: tryAbandon
	  };
	}

	var tab = 9;
	var enter = 13;
	var escape = 27;
	var space = 32;
	var pageUp = 33;
	var pageDown = 34;
	var end = 35;
	var home = 36;
	var arrowLeft = 37;
	var arrowUp = 38;
	var arrowRight = 39;
	var arrowDown = 40;

	var _preventedKeys;
	var preventedKeys = (_preventedKeys = {}, _preventedKeys[enter] = true, _preventedKeys[tab] = true, _preventedKeys);
	var preventStandardKeyEvents = (function (event) {
	  if (preventedKeys[event.keyCode]) {
	    event.preventDefault();
	  }
	});

	var supportedEventName = function () {
	  var base = 'visibilitychange';

	  if (typeof document === 'undefined') {
	    return base;
	  }

	  var candidates = [base, "ms" + base, "webkit" + base, "moz" + base, "o" + base];
	  var supported = find(candidates, function (eventName) {
	    return "on" + eventName in document;
	  });
	  return supported || base;
	}();

	var primaryButton = 0;
	var sloppyClickThreshold = 5;

	function isSloppyClickThresholdExceeded(original, current) {
	  return Math.abs(current.x - original.x) >= sloppyClickThreshold || Math.abs(current.y - original.y) >= sloppyClickThreshold;
	}

	var idle$1 = {
	  type: 'IDLE'
	};

	function getCaptureBindings(_ref) {
	  var cancel = _ref.cancel,
	      completed = _ref.completed,
	      getPhase = _ref.getPhase,
	      setPhase = _ref.setPhase;
	  return [{
	    eventName: 'mousemove',
	    fn: function fn(event) {
	      var button = event.button,
	          clientX = event.clientX,
	          clientY = event.clientY;

	      if (button !== primaryButton) {
	        return;
	      }

	      var point = {
	        x: clientX,
	        y: clientY
	      };
	      var phase = getPhase();

	      if (phase.type === 'DRAGGING') {
	        event.preventDefault();
	        phase.actions.move(point);
	        return;
	      }

	      !(phase.type === 'PENDING') ? invariant(false, 'Cannot be IDLE')  : void 0;
	      var pending = phase.point;

	      if (!isSloppyClickThresholdExceeded(pending, point)) {
	        return;
	      }

	      event.preventDefault();
	      var actions = phase.actions.fluidLift(point);
	      setPhase({
	        type: 'DRAGGING',
	        actions: actions
	      });
	    }
	  }, {
	    eventName: 'mouseup',
	    fn: function fn(event) {
	      var phase = getPhase();

	      if (phase.type !== 'DRAGGING') {
	        cancel();
	        return;
	      }

	      event.preventDefault();
	      phase.actions.drop({
	        shouldBlockNextClick: true
	      });
	      completed();
	    }
	  }, {
	    eventName: 'mousedown',
	    fn: function fn(event) {
	      if (getPhase().type === 'DRAGGING') {
	        event.preventDefault();
	      }

	      cancel();
	    }
	  }, {
	    eventName: 'keydown',
	    fn: function fn(event) {
	      var phase = getPhase();

	      if (phase.type === 'PENDING') {
	        cancel();
	        return;
	      }

	      if (event.keyCode === escape) {
	        event.preventDefault();
	        cancel();
	        return;
	      }

	      preventStandardKeyEvents(event);
	    }
	  }, {
	    eventName: 'resize',
	    fn: cancel
	  }, {
	    eventName: 'scroll',
	    options: {
	      passive: true,
	      capture: false
	    },
	    fn: function fn() {
	      if (getPhase().type === 'PENDING') {
	        cancel();
	      }
	    }
	  }, {
	    eventName: 'webkitmouseforcedown',
	    fn: function fn(event) {
	      var phase = getPhase();
	      !(phase.type !== 'IDLE') ? invariant(false, 'Unexpected phase')  : void 0;

	      if (phase.actions.shouldRespectForcePress()) {
	        cancel();
	        return;
	      }

	      event.preventDefault();
	    }
	  }, {
	    eventName: supportedEventName,
	    fn: cancel
	  }];
	}

	function useMouseSensor(api) {
	  var phaseRef = React__default['default'].useRef(idle$1);
	  var unbindEventsRef = React__default['default'].useRef(noop);
	  var startCaptureBinding = useMemoOne_cjs.useMemo(function () {
	    return {
	      eventName: 'mousedown',
	      fn: function onMouseDown(event) {
	        if (event.defaultPrevented) {
	          return;
	        }

	        if (event.button !== primaryButton) {
	          return;
	        }

	        if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) {
	          return;
	        }

	        var draggableId = api.findClosestDraggableId(event);

	        if (!draggableId) {
	          return;
	        }

	        var actions = api.tryGetLock(draggableId, stop, {
	          sourceEvent: event
	        });

	        if (!actions) {
	          return;
	        }

	        event.preventDefault();
	        var point = {
	          x: event.clientX,
	          y: event.clientY
	        };
	        unbindEventsRef.current();
	        startPendingDrag(actions, point);
	      }
	    };
	  }, [api]);
	  var preventForcePressBinding = useMemoOne_cjs.useMemo(function () {
	    return {
	      eventName: 'webkitmouseforcewillbegin',
	      fn: function fn(event) {
	        if (event.defaultPrevented) {
	          return;
	        }

	        var id = api.findClosestDraggableId(event);

	        if (!id) {
	          return;
	        }

	        var options = api.findOptionsForDraggable(id);

	        if (!options) {
	          return;
	        }

	        if (options.shouldRespectForcePress) {
	          return;
	        }

	        if (!api.canGetLock(id)) {
	          return;
	        }

	        event.preventDefault();
	      }
	    };
	  }, [api]);
	  var listenForCapture = useMemoOne_cjs.useCallback(function listenForCapture() {
	    var options = {
	      passive: false,
	      capture: true
	    };
	    unbindEventsRef.current = bindEvents(window, [preventForcePressBinding, startCaptureBinding], options);
	  }, [preventForcePressBinding, startCaptureBinding]);
	  var stop = useMemoOne_cjs.useCallback(function () {
	    var current = phaseRef.current;

	    if (current.type === 'IDLE') {
	      return;
	    }

	    phaseRef.current = idle$1;
	    unbindEventsRef.current();
	    listenForCapture();
	  }, [listenForCapture]);
	  var cancel = useMemoOne_cjs.useCallback(function () {
	    var phase = phaseRef.current;
	    stop();

	    if (phase.type === 'DRAGGING') {
	      phase.actions.cancel({
	        shouldBlockNextClick: true
	      });
	    }

	    if (phase.type === 'PENDING') {
	      phase.actions.abort();
	    }
	  }, [stop]);
	  var bindCapturingEvents = useMemoOne_cjs.useCallback(function bindCapturingEvents() {
	    var options = {
	      capture: true,
	      passive: false
	    };
	    var bindings = getCaptureBindings({
	      cancel: cancel,
	      completed: stop,
	      getPhase: function getPhase() {
	        return phaseRef.current;
	      },
	      setPhase: function setPhase(phase) {
	        phaseRef.current = phase;
	      }
	    });
	    unbindEventsRef.current = bindEvents(window, bindings, options);
	  }, [cancel, stop]);
	  var startPendingDrag = useMemoOne_cjs.useCallback(function startPendingDrag(actions, point) {
	    !(phaseRef.current.type === 'IDLE') ? invariant(false, 'Expected to move from IDLE to PENDING drag')  : void 0;
	    phaseRef.current = {
	      type: 'PENDING',
	      point: point,
	      actions: actions
	    };
	    bindCapturingEvents();
	  }, [bindCapturingEvents]);
	  useIsomorphicLayoutEffect(function mount() {
	    listenForCapture();
	    return function unmount() {
	      unbindEventsRef.current();
	    };
	  }, [listenForCapture]);
	}

	var _scrollJumpKeys;

	function noop$1() {}

	var scrollJumpKeys = (_scrollJumpKeys = {}, _scrollJumpKeys[pageDown] = true, _scrollJumpKeys[pageUp] = true, _scrollJumpKeys[home] = true, _scrollJumpKeys[end] = true, _scrollJumpKeys);

	function getDraggingBindings(actions, stop) {
	  function cancel() {
	    stop();
	    actions.cancel();
	  }

	  function drop() {
	    stop();
	    actions.drop();
	  }

	  return [{
	    eventName: 'keydown',
	    fn: function fn(event) {
	      if (event.keyCode === escape) {
	        event.preventDefault();
	        cancel();
	        return;
	      }

	      if (event.keyCode === space) {
	        event.preventDefault();
	        drop();
	        return;
	      }

	      if (event.keyCode === arrowDown) {
	        event.preventDefault();
	        actions.moveDown();
	        return;
	      }

	      if (event.keyCode === arrowUp) {
	        event.preventDefault();
	        actions.moveUp();
	        return;
	      }

	      if (event.keyCode === arrowRight) {
	        event.preventDefault();
	        actions.moveRight();
	        return;
	      }

	      if (event.keyCode === arrowLeft) {
	        event.preventDefault();
	        actions.moveLeft();
	        return;
	      }

	      if (scrollJumpKeys[event.keyCode]) {
	        event.preventDefault();
	        return;
	      }

	      preventStandardKeyEvents(event);
	    }
	  }, {
	    eventName: 'mousedown',
	    fn: cancel
	  }, {
	    eventName: 'mouseup',
	    fn: cancel
	  }, {
	    eventName: 'click',
	    fn: cancel
	  }, {
	    eventName: 'touchstart',
	    fn: cancel
	  }, {
	    eventName: 'resize',
	    fn: cancel
	  }, {
	    eventName: 'wheel',
	    fn: cancel,
	    options: {
	      passive: true
	    }
	  }, {
	    eventName: supportedEventName,
	    fn: cancel
	  }];
	}

	function useKeyboardSensor(api) {
	  var unbindEventsRef = React__default['default'].useRef(noop$1);
	  var startCaptureBinding = useMemoOne_cjs.useMemo(function () {
	    return {
	      eventName: 'keydown',
	      fn: function onKeyDown(event) {
	        if (event.defaultPrevented) {
	          return;
	        }

	        if (event.keyCode !== space) {
	          return;
	        }

	        var draggableId = api.findClosestDraggableId(event);

	        if (!draggableId) {
	          return;
	        }

	        var preDrag = api.tryGetLock(draggableId, stop, {
	          sourceEvent: event
	        });

	        if (!preDrag) {
	          return;
	        }

	        event.preventDefault();
	        var isCapturing = true;
	        var actions = preDrag.snapLift();
	        unbindEventsRef.current();

	        function stop() {
	          !isCapturing ? invariant(false, 'Cannot stop capturing a keyboard drag when not capturing')  : void 0;
	          isCapturing = false;
	          unbindEventsRef.current();
	          listenForCapture();
	        }

	        unbindEventsRef.current = bindEvents(window, getDraggingBindings(actions, stop), {
	          capture: true,
	          passive: false
	        });
	      }
	    };
	  }, [api]);
	  var listenForCapture = useMemoOne_cjs.useCallback(function tryStartCapture() {
	    var options = {
	      passive: false,
	      capture: true
	    };
	    unbindEventsRef.current = bindEvents(window, [startCaptureBinding], options);
	  }, [startCaptureBinding]);
	  useIsomorphicLayoutEffect(function mount() {
	    listenForCapture();
	    return function unmount() {
	      unbindEventsRef.current();
	    };
	  }, [listenForCapture]);
	}

	var idle$2 = {
	  type: 'IDLE'
	};
	var timeForLongPress = 120;
	var forcePressThreshold = 0.15;

	function getWindowBindings(_ref) {
	  var cancel = _ref.cancel,
	      getPhase = _ref.getPhase;
	  return [{
	    eventName: 'orientationchange',
	    fn: cancel
	  }, {
	    eventName: 'resize',
	    fn: cancel
	  }, {
	    eventName: 'contextmenu',
	    fn: function fn(event) {
	      event.preventDefault();
	    }
	  }, {
	    eventName: 'keydown',
	    fn: function fn(event) {
	      if (getPhase().type !== 'DRAGGING') {
	        cancel();
	        return;
	      }

	      if (event.keyCode === escape) {
	        event.preventDefault();
	      }

	      cancel();
	    }
	  }, {
	    eventName: supportedEventName,
	    fn: cancel
	  }];
	}

	function getHandleBindings(_ref2) {
	  var cancel = _ref2.cancel,
	      completed = _ref2.completed,
	      getPhase = _ref2.getPhase;
	  return [{
	    eventName: 'touchmove',
	    options: {
	      capture: false
	    },
	    fn: function fn(event) {
	      var phase = getPhase();

	      if (phase.type !== 'DRAGGING') {
	        cancel();
	        return;
	      }

	      phase.hasMoved = true;
	      var _event$touches$ = event.touches[0],
	          clientX = _event$touches$.clientX,
	          clientY = _event$touches$.clientY;
	      var point = {
	        x: clientX,
	        y: clientY
	      };
	      event.preventDefault();
	      phase.actions.move(point);
	    }
	  }, {
	    eventName: 'touchend',
	    fn: function fn(event) {
	      var phase = getPhase();

	      if (phase.type !== 'DRAGGING') {
	        cancel();
	        return;
	      }

	      event.preventDefault();
	      phase.actions.drop({
	        shouldBlockNextClick: true
	      });
	      completed();
	    }
	  }, {
	    eventName: 'touchcancel',
	    fn: function fn(event) {
	      if (getPhase().type !== 'DRAGGING') {
	        cancel();
	        return;
	      }

	      event.preventDefault();
	      cancel();
	    }
	  }, {
	    eventName: 'touchforcechange',
	    fn: function fn(event) {
	      var phase = getPhase();
	      !(phase.type !== 'IDLE') ? invariant(false)  : void 0;
	      var touch = event.touches[0];

	      if (!touch) {
	        return;
	      }

	      var isForcePress = touch.force >= forcePressThreshold;

	      if (!isForcePress) {
	        return;
	      }

	      var shouldRespect = phase.actions.shouldRespectForcePress();

	      if (phase.type === 'PENDING') {
	        if (shouldRespect) {
	          cancel();
	        }

	        return;
	      }

	      if (shouldRespect) {
	        if (phase.hasMoved) {
	          event.preventDefault();
	          return;
	        }

	        cancel();
	        return;
	      }

	      event.preventDefault();
	    }
	  }, {
	    eventName: supportedEventName,
	    fn: cancel
	  }];
	}

	function useTouchSensor(api) {
	  var phaseRef = React__default['default'].useRef(idle$2);
	  var unbindEventsRef = React__default['default'].useRef(noop);
	  var getPhase = useMemoOne_cjs.useCallback(function getPhase() {
	    return phaseRef.current;
	  }, []);
	  var setPhase = useMemoOne_cjs.useCallback(function setPhase(phase) {
	    phaseRef.current = phase;
	  }, []);
	  var startCaptureBinding = useMemoOne_cjs.useMemo(function () {
	    return {
	      eventName: 'touchstart',
	      fn: function onTouchStart(event) {
	        if (event.defaultPrevented) {
	          return;
	        }

	        var draggableId = api.findClosestDraggableId(event);

	        if (!draggableId) {
	          return;
	        }

	        var actions = api.tryGetLock(draggableId, stop, {
	          sourceEvent: event
	        });

	        if (!actions) {
	          return;
	        }

	        var touch = event.touches[0];
	        var clientX = touch.clientX,
	            clientY = touch.clientY;
	        var point = {
	          x: clientX,
	          y: clientY
	        };
	        unbindEventsRef.current();
	        startPendingDrag(actions, point);
	      }
	    };
	  }, [api]);
	  var listenForCapture = useMemoOne_cjs.useCallback(function listenForCapture() {
	    var options = {
	      capture: true,
	      passive: false
	    };
	    unbindEventsRef.current = bindEvents(window, [startCaptureBinding], options);
	  }, [startCaptureBinding]);
	  var stop = useMemoOne_cjs.useCallback(function () {
	    var current = phaseRef.current;

	    if (current.type === 'IDLE') {
	      return;
	    }

	    if (current.type === 'PENDING') {
	      clearTimeout(current.longPressTimerId);
	    }

	    setPhase(idle$2);
	    unbindEventsRef.current();
	    listenForCapture();
	  }, [listenForCapture, setPhase]);
	  var cancel = useMemoOne_cjs.useCallback(function () {
	    var phase = phaseRef.current;
	    stop();

	    if (phase.type === 'DRAGGING') {
	      phase.actions.cancel({
	        shouldBlockNextClick: true
	      });
	    }

	    if (phase.type === 'PENDING') {
	      phase.actions.abort();
	    }
	  }, [stop]);
	  var bindCapturingEvents = useMemoOne_cjs.useCallback(function bindCapturingEvents() {
	    var options = {
	      capture: true,
	      passive: false
	    };
	    var args = {
	      cancel: cancel,
	      completed: stop,
	      getPhase: getPhase
	    };
	    var unbindTarget = bindEvents(window, getHandleBindings(args), options);
	    var unbindWindow = bindEvents(window, getWindowBindings(args), options);

	    unbindEventsRef.current = function unbindAll() {
	      unbindTarget();
	      unbindWindow();
	    };
	  }, [cancel, getPhase, stop]);
	  var startDragging = useMemoOne_cjs.useCallback(function startDragging() {
	    var phase = getPhase();
	    !(phase.type === 'PENDING') ? invariant(false, "Cannot start dragging from phase " + phase.type)  : void 0;
	    var actions = phase.actions.fluidLift(phase.point);
	    setPhase({
	      type: 'DRAGGING',
	      actions: actions,
	      hasMoved: false
	    });
	  }, [getPhase, setPhase]);
	  var startPendingDrag = useMemoOne_cjs.useCallback(function startPendingDrag(actions, point) {
	    !(getPhase().type === 'IDLE') ? invariant(false, 'Expected to move from IDLE to PENDING drag')  : void 0;
	    var longPressTimerId = setTimeout(startDragging, timeForLongPress);
	    setPhase({
	      type: 'PENDING',
	      point: point,
	      actions: actions,
	      longPressTimerId: longPressTimerId
	    });
	    bindCapturingEvents();
	  }, [bindCapturingEvents, getPhase, setPhase, startDragging]);
	  useIsomorphicLayoutEffect(function mount() {
	    listenForCapture();
	    return function unmount() {
	      unbindEventsRef.current();
	      var phase = getPhase();

	      if (phase.type === 'PENDING') {
	        clearTimeout(phase.longPressTimerId);
	        setPhase(idle$2);
	      }
	    };
	  }, [getPhase, listenForCapture, setPhase]);
	  useIsomorphicLayoutEffect(function webkitHack() {
	    var unbind = bindEvents(window, [{
	      eventName: 'touchmove',
	      fn: function fn() {},
	      options: {
	        capture: false,
	        passive: false
	      }
	    }]);
	    return unbind;
	  }, []);
	}

	function useValidateSensorHooks(sensorHooks) {
	  useDev(function () {
	    var previousRef = usePrevious(sensorHooks);
	    useDevSetupWarning(function () {
	      !(previousRef.current.length === sensorHooks.length) ? "development" !== "production" ? invariant(false, 'Cannot change the amount of sensor hooks after mounting') : invariant(false) : void 0;
	    });
	  });
	}

	var interactiveTagNames = {
	  input: true,
	  button: true,
	  textarea: true,
	  select: true,
	  option: true,
	  optgroup: true,
	  video: true,
	  audio: true
	};

	function isAnInteractiveElement(parent, current) {
	  if (current == null) {
	    return false;
	  }

	  var hasAnInteractiveTag = Boolean(interactiveTagNames[current.tagName.toLowerCase()]);

	  if (hasAnInteractiveTag) {
	    return true;
	  }

	  var attribute = current.getAttribute('contenteditable');

	  if (attribute === 'true' || attribute === '') {
	    return true;
	  }

	  if (current === parent) {
	    return false;
	  }

	  return isAnInteractiveElement(parent, current.parentElement);
	}

	function isEventInInteractiveElement(draggable, event) {
	  var target = event.target;

	  if (!isHtmlElement(target)) {
	    return false;
	  }

	  return isAnInteractiveElement(draggable, target);
	}

	var getBorderBoxCenterPosition = (function (el) {
	  return cssBoxModel_cjs.getRect(el.getBoundingClientRect()).center;
	});

	function isElement(el) {
	  return el instanceof getWindowFromEl(el).Element;
	}

	var supportedMatchesName = function () {
	  var base = 'matches';

	  if (typeof document === 'undefined') {
	    return base;
	  }

	  var candidates = [base, 'msMatchesSelector', 'webkitMatchesSelector'];
	  var value = find(candidates, function (name) {
	    return name in Element.prototype;
	  });
	  return value || base;
	}();

	function closestPonyfill(el, selector) {
	  if (el == null) {
	    return null;
	  }

	  if (el[supportedMatchesName](selector)) {
	    return el;
	  }

	  return closestPonyfill(el.parentElement, selector);
	}

	function closest$1(el, selector) {
	  if (el.closest) {
	    return el.closest(selector);
	  }

	  return closestPonyfill(el, selector);
	}

	function getSelector(contextId) {
	  return "[" + dragHandle.contextId + "=\"" + contextId + "\"]";
	}

	function findClosestDragHandleFromEvent(contextId, event) {
	  var target = event.target;

	  if (!isElement(target)) {
	    warning('event.target must be a Element') ;
	    return null;
	  }

	  var selector = getSelector(contextId);
	  var handle = closest$1(target, selector);

	  if (!handle) {
	    return null;
	  }

	  if (!isHtmlElement(handle)) {
	    warning('drag handle must be a HTMLElement') ;
	    return null;
	  }

	  return handle;
	}

	function tryGetClosestDraggableIdFromEvent(contextId, event) {
	  var handle = findClosestDragHandleFromEvent(contextId, event);

	  if (!handle) {
	    return null;
	  }

	  return handle.getAttribute(dragHandle.draggableId);
	}

	function findDraggable(contextId, draggableId) {
	  var selector = "[" + draggable.contextId + "=\"" + contextId + "\"]";
	  var possible = toArray(document.querySelectorAll(selector));
	  var draggable$1 = find(possible, function (el) {
	    return el.getAttribute(draggable.id) === draggableId;
	  });

	  if (!draggable$1) {
	    return null;
	  }

	  if (!isHtmlElement(draggable$1)) {
	    warning('Draggable element is not a HTMLElement') ;
	    return null;
	  }

	  return draggable$1;
	}

	function preventDefault(event) {
	  event.preventDefault();
	}

	function _isActive(_ref) {
	  var expected = _ref.expected,
	      phase = _ref.phase,
	      isLockActive = _ref.isLockActive,
	      shouldWarn = _ref.shouldWarn;

	  if (!isLockActive()) {
	    if (shouldWarn) {
	      warning("\n        Cannot perform action.\n        The sensor no longer has an action lock.\n\n        Tips:\n\n        - Throw away your action handlers when forceStop() is called\n        - Check actions.isActive() if you really need to\n      ") ;
	    }

	    return false;
	  }

	  if (expected !== phase) {
	    if (shouldWarn) {
	      warning("\n        Cannot perform action.\n        The actions you used belong to an outdated phase\n\n        Current phase: " + expected + "\n        You called an action from outdated phase: " + phase + "\n\n        Tips:\n\n        - Do not use preDragActions actions after calling preDragActions.lift()\n      ") ;
	    }

	    return false;
	  }

	  return true;
	}

	function canStart(_ref2) {
	  var lockAPI = _ref2.lockAPI,
	      store = _ref2.store,
	      registry = _ref2.registry,
	      draggableId = _ref2.draggableId;

	  if (lockAPI.isClaimed()) {
	    return false;
	  }

	  var entry = registry.draggable.findById(draggableId);

	  if (!entry) {
	    warning("Unable to find draggable with id: " + draggableId) ;
	    return false;
	  }

	  if (!entry.options.isEnabled) {
	    return false;
	  }

	  if (!canStartDrag(store.getState(), draggableId)) {
	    return false;
	  }

	  return true;
	}

	function tryStart(_ref3) {
	  var lockAPI = _ref3.lockAPI,
	      contextId = _ref3.contextId,
	      store = _ref3.store,
	      registry = _ref3.registry,
	      draggableId = _ref3.draggableId,
	      forceSensorStop = _ref3.forceSensorStop,
	      sourceEvent = _ref3.sourceEvent;
	  var shouldStart = canStart({
	    lockAPI: lockAPI,
	    store: store,
	    registry: registry,
	    draggableId: draggableId
	  });

	  if (!shouldStart) {
	    return null;
	  }

	  var entry = registry.draggable.getById(draggableId);
	  var el = findDraggable(contextId, entry.descriptor.id);

	  if (!el) {
	    warning("Unable to find draggable element with id: " + draggableId) ;
	    return null;
	  }

	  if (sourceEvent && !entry.options.canDragInteractiveElements && isEventInInteractiveElement(el, sourceEvent)) {
	    return null;
	  }

	  var lock = lockAPI.claim(forceSensorStop || noop);
	  var phase = 'PRE_DRAG';

	  function getShouldRespectForcePress() {
	    return entry.options.shouldRespectForcePress;
	  }

	  function isLockActive() {
	    return lockAPI.isActive(lock);
	  }

	  function tryDispatch(expected, getAction) {
	    if (_isActive({
	      expected: expected,
	      phase: phase,
	      isLockActive: isLockActive,
	      shouldWarn: true
	    })) {
	      store.dispatch(getAction());
	    }
	  }

	  var tryDispatchWhenDragging = tryDispatch.bind(null, 'DRAGGING');

	  function lift$1(args) {
	    function completed() {
	      lockAPI.release();
	      phase = 'COMPLETED';
	    }

	    if (phase !== 'PRE_DRAG') {
	      completed();
	      !(phase === 'PRE_DRAG') ? invariant(false, "Cannot lift in phase " + phase)  : void 0;
	    }

	    store.dispatch(lift(args.liftActionArgs));
	    phase = 'DRAGGING';

	    function finish(reason, options) {
	      if (options === void 0) {
	        options = {
	          shouldBlockNextClick: false
	        };
	      }

	      args.cleanup();

	      if (options.shouldBlockNextClick) {
	        var unbind = bindEvents(window, [{
	          eventName: 'click',
	          fn: preventDefault,
	          options: {
	            once: true,
	            passive: false,
	            capture: true
	          }
	        }]);
	        setTimeout(unbind);
	      }

	      completed();
	      store.dispatch(drop({
	        reason: reason
	      }));
	    }

	    return _extends({
	      isActive: function isActive() {
	        return _isActive({
	          expected: 'DRAGGING',
	          phase: phase,
	          isLockActive: isLockActive,
	          shouldWarn: false
	        });
	      },
	      shouldRespectForcePress: getShouldRespectForcePress,
	      drop: function drop(options) {
	        return finish('DROP', options);
	      },
	      cancel: function cancel(options) {
	        return finish('CANCEL', options);
	      }
	    }, args.actions);
	  }

	  function fluidLift(clientSelection) {
	    var move$1 = rafSchd(function (client) {
	      tryDispatchWhenDragging(function () {
	        return move({
	          client: client
	        });
	      });
	    });
	    var api = lift$1({
	      liftActionArgs: {
	        id: draggableId,
	        clientSelection: clientSelection,
	        movementMode: 'FLUID'
	      },
	      cleanup: function cleanup() {
	        return move$1.cancel();
	      },
	      actions: {
	        move: move$1
	      }
	    });
	    return _extends({}, api, {
	      move: move$1
	    });
	  }

	  function snapLift() {
	    var actions = {
	      moveUp: function moveUp$1() {
	        return tryDispatchWhenDragging(moveUp);
	      },
	      moveRight: function moveRight$1() {
	        return tryDispatchWhenDragging(moveRight);
	      },
	      moveDown: function moveDown$1() {
	        return tryDispatchWhenDragging(moveDown);
	      },
	      moveLeft: function moveLeft$1() {
	        return tryDispatchWhenDragging(moveLeft);
	      }
	    };
	    return lift$1({
	      liftActionArgs: {
	        id: draggableId,
	        clientSelection: getBorderBoxCenterPosition(el),
	        movementMode: 'SNAP'
	      },
	      cleanup: noop,
	      actions: actions
	    });
	  }

	  function abortPreDrag() {
	    var shouldRelease = _isActive({
	      expected: 'PRE_DRAG',
	      phase: phase,
	      isLockActive: isLockActive,
	      shouldWarn: true
	    });

	    if (shouldRelease) {
	      lockAPI.release();
	    }
	  }

	  var preDrag = {
	    isActive: function isActive() {
	      return _isActive({
	        expected: 'PRE_DRAG',
	        phase: phase,
	        isLockActive: isLockActive,
	        shouldWarn: false
	      });
	    },
	    shouldRespectForcePress: getShouldRespectForcePress,
	    fluidLift: fluidLift,
	    snapLift: snapLift,
	    abort: abortPreDrag
	  };
	  return preDrag;
	}

	var defaultSensors = [useMouseSensor, useKeyboardSensor, useTouchSensor];
	function useSensorMarshal(_ref4) {
	  var contextId = _ref4.contextId,
	      store = _ref4.store,
	      registry = _ref4.registry,
	      customSensors = _ref4.customSensors,
	      enableDefaultSensors = _ref4.enableDefaultSensors;
	  var useSensors = [].concat(enableDefaultSensors ? defaultSensors : [], customSensors || []);
	  var lockAPI = React__default['default'].useState(function () {
	    return create();
	  })[0];
	  var tryAbandonLock = useMemoOne_cjs.useCallback(function tryAbandonLock(previous, current) {
	    if (previous.isDragging && !current.isDragging) {
	      lockAPI.tryAbandon();
	    }
	  }, [lockAPI]);
	  useIsomorphicLayoutEffect(function listenToStore() {
	    var previous = store.getState();
	    var unsubscribe = store.subscribe(function () {
	      var current = store.getState();
	      tryAbandonLock(previous, current);
	      previous = current;
	    });
	    return unsubscribe;
	  }, [lockAPI, store, tryAbandonLock]);
	  useIsomorphicLayoutEffect(function () {
	    return lockAPI.tryAbandon;
	  }, [lockAPI.tryAbandon]);
	  var canGetLock = useMemoOne_cjs.useCallback(function (draggableId) {
	    return canStart({
	      lockAPI: lockAPI,
	      registry: registry,
	      store: store,
	      draggableId: draggableId
	    });
	  }, [lockAPI, registry, store]);
	  var tryGetLock = useMemoOne_cjs.useCallback(function (draggableId, forceStop, options) {
	    return tryStart({
	      lockAPI: lockAPI,
	      registry: registry,
	      contextId: contextId,
	      store: store,
	      draggableId: draggableId,
	      forceSensorStop: forceStop,
	      sourceEvent: options && options.sourceEvent ? options.sourceEvent : null
	    });
	  }, [contextId, lockAPI, registry, store]);
	  var findClosestDraggableId = useMemoOne_cjs.useCallback(function (event) {
	    return tryGetClosestDraggableIdFromEvent(contextId, event);
	  }, [contextId]);
	  var findOptionsForDraggable = useMemoOne_cjs.useCallback(function (id) {
	    var entry = registry.draggable.findById(id);
	    return entry ? entry.options : null;
	  }, [registry.draggable]);
	  var tryReleaseLock = useMemoOne_cjs.useCallback(function tryReleaseLock() {
	    if (!lockAPI.isClaimed()) {
	      return;
	    }

	    lockAPI.tryAbandon();

	    if (store.getState().phase !== 'IDLE') {
	      store.dispatch(flush());
	    }
	  }, [lockAPI, store]);
	  var isLockClaimed = useMemoOne_cjs.useCallback(lockAPI.isClaimed, [lockAPI]);
	  var api = useMemoOne_cjs.useMemo(function () {
	    return {
	      canGetLock: canGetLock,
	      tryGetLock: tryGetLock,
	      findClosestDraggableId: findClosestDraggableId,
	      findOptionsForDraggable: findOptionsForDraggable,
	      tryReleaseLock: tryReleaseLock,
	      isLockClaimed: isLockClaimed
	    };
	  }, [canGetLock, tryGetLock, findClosestDraggableId, findOptionsForDraggable, tryReleaseLock, isLockClaimed]);
	  useValidateSensorHooks(useSensors);

	  for (var i = 0; i < useSensors.length; i++) {
	    useSensors[i](api);
	  }
	}

	var createResponders = function createResponders(props) {
	  return {
	    onBeforeCapture: props.onBeforeCapture,
	    onBeforeDragStart: props.onBeforeDragStart,
	    onDragStart: props.onDragStart,
	    onDragEnd: props.onDragEnd,
	    onDragUpdate: props.onDragUpdate
	  };
	};

	function getStore(lazyRef) {
	  !lazyRef.current ? invariant(false, 'Could not find store from lazy ref')  : void 0;
	  return lazyRef.current;
	}

	function App(props) {
	  var contextId = props.contextId,
	      setCallbacks = props.setCallbacks,
	      sensors = props.sensors,
	      nonce = props.nonce,
	      dragHandleUsageInstructions = props.dragHandleUsageInstructions;
	  var lazyStoreRef = React__default['default'].useRef(null);
	  useStartupValidation();
	  var lastPropsRef = usePrevious(props);
	  var getResponders = useMemoOne_cjs.useCallback(function () {
	    return createResponders(lastPropsRef.current);
	  }, [lastPropsRef]);
	  var announce = useAnnouncer(contextId);
	  var dragHandleUsageInstructionsId = useHiddenTextElement({
	    contextId: contextId,
	    text: dragHandleUsageInstructions
	  });
	  var styleMarshal = useStyleMarshal(contextId, nonce);
	  var lazyDispatch = useMemoOne_cjs.useCallback(function (action) {
	    getStore(lazyStoreRef).dispatch(action);
	  }, []);
	  var marshalCallbacks = useMemoOne_cjs.useMemo(function () {
	    return redux__default['default'].bindActionCreators({
	      publishWhileDragging: publishWhileDragging,
	      updateDroppableScroll: updateDroppableScroll,
	      updateDroppableIsEnabled: updateDroppableIsEnabled,
	      updateDroppableIsCombineEnabled: updateDroppableIsCombineEnabled,
	      collectionStarting: collectionStarting
	    }, lazyDispatch);
	  }, [lazyDispatch]);
	  var registry = useRegistry();
	  var dimensionMarshal = useMemoOne_cjs.useMemo(function () {
	    return createDimensionMarshal(registry, marshalCallbacks);
	  }, [registry, marshalCallbacks]);
	  var autoScroller = useMemoOne_cjs.useMemo(function () {
	    return createAutoScroller(_extends({
	      scrollWindow: scrollWindow,
	      scrollDroppable: dimensionMarshal.scrollDroppable
	    }, redux__default['default'].bindActionCreators({
	      move: move
	    }, lazyDispatch)));
	  }, [dimensionMarshal.scrollDroppable, lazyDispatch]);
	  var focusMarshal = useFocusMarshal(contextId);
	  var store = useMemoOne_cjs.useMemo(function () {
	    return createStore({
	      announce: announce,
	      autoScroller: autoScroller,
	      dimensionMarshal: dimensionMarshal,
	      focusMarshal: focusMarshal,
	      getResponders: getResponders,
	      styleMarshal: styleMarshal
	    });
	  }, [announce, autoScroller, dimensionMarshal, focusMarshal, getResponders, styleMarshal]);

	  {
	    if (lazyStoreRef.current && lazyStoreRef.current !== store) {
	      warning('unexpected store change') ;
	    }
	  }

	  lazyStoreRef.current = store;
	  var tryResetStore = useMemoOne_cjs.useCallback(function () {
	    var current = getStore(lazyStoreRef);
	    var state = current.getState();

	    if (state.phase !== 'IDLE') {
	      current.dispatch(flush());
	    }
	  }, []);
	  var isDragging = useMemoOne_cjs.useCallback(function () {
	    var state = getStore(lazyStoreRef).getState();
	    return state.isDragging || state.phase === 'DROP_ANIMATING';
	  }, []);
	  var appCallbacks = useMemoOne_cjs.useMemo(function () {
	    return {
	      isDragging: isDragging,
	      tryAbort: tryResetStore
	    };
	  }, [isDragging, tryResetStore]);
	  setCallbacks(appCallbacks);
	  var getCanLift = useMemoOne_cjs.useCallback(function (id) {
	    return canStartDrag(getStore(lazyStoreRef).getState(), id);
	  }, []);
	  var getIsMovementAllowed = useMemoOne_cjs.useCallback(function () {
	    return isMovementAllowed(getStore(lazyStoreRef).getState());
	  }, []);
	  var appContext = useMemoOne_cjs.useMemo(function () {
	    return {
	      marshal: dimensionMarshal,
	      focus: focusMarshal,
	      contextId: contextId,
	      canLift: getCanLift,
	      isMovementAllowed: getIsMovementAllowed,
	      dragHandleUsageInstructionsId: dragHandleUsageInstructionsId,
	      registry: registry
	    };
	  }, [contextId, dimensionMarshal, dragHandleUsageInstructionsId, focusMarshal, getCanLift, getIsMovementAllowed, registry]);
	  useSensorMarshal({
	    contextId: contextId,
	    store: store,
	    registry: registry,
	    customSensors: sensors,
	    enableDefaultSensors: props.enableDefaultSensors !== false
	  });
	  React__default['default'].useEffect(function () {
	    return tryResetStore;
	  }, [tryResetStore]);
	  return React__default$1.createElement(AppContext.Provider, {
	    value: appContext
	  }, React__default$1.createElement(reactRedux__default['default'].Provider, {
	    context: StoreContext,
	    store: store
	  }, props.children));
	}

	var count$1 = 0;
	function reset$1() {
	  count$1 = 0;
	}
	function useInstanceCount() {
	  return useMemoOne_cjs.useMemo(function () {
	    return "" + count$1++;
	  }, []);
	}

	function resetServerContext() {
	  reset$1();
	  reset();
	}
	function DragDropContext(props) {
	  var contextId = useInstanceCount();
	  var dragHandleUsageInstructions = props.dragHandleUsageInstructions || preset.dragHandleUsageInstructions;
	  return React__default$1.createElement(ErrorBoundary, null, function (setCallbacks) {
	    return React__default$1.createElement(App, {
	      nonce: props.nonce,
	      contextId: contextId,
	      setCallbacks: setCallbacks,
	      dragHandleUsageInstructions: dragHandleUsageInstructions,
	      enableDefaultSensors: props.enableDefaultSensors,
	      sensors: props.sensors,
	      onBeforeCapture: props.onBeforeCapture,
	      onBeforeDragStart: props.onBeforeDragStart,
	      onDragStart: props.onDragStart,
	      onDragUpdate: props.onDragUpdate,
	      onDragEnd: props.onDragEnd
	    }, props.children);
	  });
	}

	var isEqual$1 = function isEqual(base) {
	  return function (value) {
	    return base === value;
	  };
	};

	var isScroll = isEqual$1('scroll');
	var isAuto = isEqual$1('auto');
	var isVisible$1 = isEqual$1('visible');

	var isEither = function isEither(overflow, fn) {
	  return fn(overflow.overflowX) || fn(overflow.overflowY);
	};

	var isBoth = function isBoth(overflow, fn) {
	  return fn(overflow.overflowX) && fn(overflow.overflowY);
	};

	var isElementScrollable = function isElementScrollable(el) {
	  var style = window.getComputedStyle(el);
	  var overflow = {
	    overflowX: style.overflowX,
	    overflowY: style.overflowY
	  };
	  return isEither(overflow, isScroll) || isEither(overflow, isAuto);
	};

	var isBodyScrollable = function isBodyScrollable() {

	  var body = getBodyElement();
	  var html = document.documentElement;
	  !html ? invariant(false)  : void 0;

	  if (!isElementScrollable(body)) {
	    return false;
	  }

	  var htmlStyle = window.getComputedStyle(html);
	  var htmlOverflow = {
	    overflowX: htmlStyle.overflowX,
	    overflowY: htmlStyle.overflowY
	  };

	  if (isBoth(htmlOverflow, isVisible$1)) {
	    return false;
	  }

	  warning("\n    We have detected that your <body> element might be a scroll container.\n    We have found no reliable way of detecting whether the <body> element is a scroll container.\n    Under most circumstances a <body> scroll bar will be on the <html> element (document.documentElement)\n\n    Because we cannot determine if the <body> is a scroll container, and generally it is not one,\n    we will be treating the <body> as *not* a scroll container\n\n    More information: https://github.com/atlassian/react-beautiful-dnd/blob/master/docs/guides/how-we-detect-scroll-containers.md\n  ") ;
	  return false;
	};

	var getClosestScrollable = function getClosestScrollable(el) {
	  if (el == null) {
	    return null;
	  }

	  if (el === document.body) {
	    return isBodyScrollable() ? el : null;
	  }

	  if (el === document.documentElement) {
	    return null;
	  }

	  if (!isElementScrollable(el)) {
	    return getClosestScrollable(el.parentElement);
	  }

	  return el;
	};

	var checkForNestedScrollContainers = (function (scrollable) {
	  if (!scrollable) {
	    return;
	  }

	  var anotherScrollParent = getClosestScrollable(scrollable.parentElement);

	  if (!anotherScrollParent) {
	    return;
	  }

	  warning("\n    Droppable: unsupported nested scroll container detected.\n    A Droppable can only have one scroll parent (which can be itself)\n    Nested scroll containers are currently not supported.\n\n    We hope to support nested scroll containers soon: https://github.com/atlassian/react-beautiful-dnd/issues/131\n  ") ;
	});

	var getScroll$1 = (function (el) {
	  return {
	    x: el.scrollLeft,
	    y: el.scrollTop
	  };
	});

	var getIsFixed = function getIsFixed(el) {
	  if (!el) {
	    return false;
	  }

	  var style = window.getComputedStyle(el);

	  if (style.position === 'fixed') {
	    return true;
	  }

	  return getIsFixed(el.parentElement);
	};

	var getEnv = (function (start) {
	  var closestScrollable = getClosestScrollable(start);
	  var isFixedOnPage = getIsFixed(start);
	  return {
	    closestScrollable: closestScrollable,
	    isFixedOnPage: isFixedOnPage
	  };
	});

	var getDroppableDimension = (function (_ref) {
	  var descriptor = _ref.descriptor,
	      isEnabled = _ref.isEnabled,
	      isCombineEnabled = _ref.isCombineEnabled,
	      isFixedOnPage = _ref.isFixedOnPage,
	      direction = _ref.direction,
	      client = _ref.client,
	      page = _ref.page,
	      closest = _ref.closest;

	  var frame = function () {
	    if (!closest) {
	      return null;
	    }

	    var scrollSize = closest.scrollSize,
	        frameClient = closest.client;
	    var maxScroll = getMaxScroll({
	      scrollHeight: scrollSize.scrollHeight,
	      scrollWidth: scrollSize.scrollWidth,
	      height: frameClient.paddingBox.height,
	      width: frameClient.paddingBox.width
	    });
	    return {
	      pageMarginBox: closest.page.marginBox,
	      frameClient: frameClient,
	      scrollSize: scrollSize,
	      shouldClipSubject: closest.shouldClipSubject,
	      scroll: {
	        initial: closest.scroll,
	        current: closest.scroll,
	        max: maxScroll,
	        diff: {
	          value: origin,
	          displacement: origin
	        }
	      }
	    };
	  }();

	  var axis = direction === 'vertical' ? vertical : horizontal;
	  var subject = getSubject({
	    page: page,
	    withPlaceholder: null,
	    axis: axis,
	    frame: frame
	  });
	  var dimension = {
	    descriptor: descriptor,
	    isCombineEnabled: isCombineEnabled,
	    isFixedOnPage: isFixedOnPage,
	    axis: axis,
	    isEnabled: isEnabled,
	    client: client,
	    page: page,
	    frame: frame,
	    subject: subject
	  };
	  return dimension;
	});

	var getClient = function getClient(targetRef, closestScrollable) {
	  var base = cssBoxModel_cjs.getBox(targetRef);

	  if (!closestScrollable) {
	    return base;
	  }

	  if (targetRef !== closestScrollable) {
	    return base;
	  }

	  var top = base.paddingBox.top - closestScrollable.scrollTop;
	  var left = base.paddingBox.left - closestScrollable.scrollLeft;
	  var bottom = top + closestScrollable.scrollHeight;
	  var right = left + closestScrollable.scrollWidth;
	  var paddingBox = {
	    top: top,
	    right: right,
	    bottom: bottom,
	    left: left
	  };
	  var borderBox = cssBoxModel_cjs.expand(paddingBox, base.border);
	  var client = cssBoxModel_cjs.createBox({
	    borderBox: borderBox,
	    margin: base.margin,
	    border: base.border,
	    padding: base.padding
	  });
	  return client;
	};

	var getDimension = (function (_ref) {
	  var ref = _ref.ref,
	      descriptor = _ref.descriptor,
	      env = _ref.env,
	      windowScroll = _ref.windowScroll,
	      direction = _ref.direction,
	      isDropDisabled = _ref.isDropDisabled,
	      isCombineEnabled = _ref.isCombineEnabled,
	      shouldClipSubject = _ref.shouldClipSubject;
	  var closestScrollable = env.closestScrollable;
	  var client = getClient(ref, closestScrollable);
	  var page = cssBoxModel_cjs.withScroll(client, windowScroll);

	  var closest = function () {
	    if (!closestScrollable) {
	      return null;
	    }

	    var frameClient = cssBoxModel_cjs.getBox(closestScrollable);
	    var scrollSize = {
	      scrollHeight: closestScrollable.scrollHeight,
	      scrollWidth: closestScrollable.scrollWidth
	    };
	    return {
	      client: frameClient,
	      page: cssBoxModel_cjs.withScroll(frameClient, windowScroll),
	      scroll: getScroll$1(closestScrollable),
	      scrollSize: scrollSize,
	      shouldClipSubject: shouldClipSubject
	    };
	  }();

	  var dimension = getDroppableDimension({
	    descriptor: descriptor,
	    isEnabled: !isDropDisabled,
	    isCombineEnabled: isCombineEnabled,
	    isFixedOnPage: env.isFixedOnPage,
	    direction: direction,
	    client: client,
	    page: page,
	    closest: closest
	  });
	  return dimension;
	});

	var immediate = {
	  passive: false
	};
	var delayed = {
	  passive: true
	};
	var getListenerOptions = (function (options) {
	  return options.shouldPublishImmediately ? immediate : delayed;
	});

	function useRequiredContext(Context) {
	  var result = React__default['default'].useContext(Context);
	  !result ? invariant(false, 'Could not find required context')  : void 0;
	  return result;
	}

	var getClosestScrollableFromDrag = function getClosestScrollableFromDrag(dragging) {
	  return dragging && dragging.env.closestScrollable || null;
	};

	function useDroppablePublisher(args) {
	  var whileDraggingRef = React__default['default'].useRef(null);
	  var appContext = useRequiredContext(AppContext);
	  var uniqueId = useUniqueId('droppable');
	  var registry = appContext.registry,
	      marshal = appContext.marshal;
	  var previousRef = usePrevious(args);
	  var descriptor = useMemoOne_cjs.useMemo(function () {
	    return {
	      id: args.droppableId,
	      type: args.type,
	      mode: args.mode
	    };
	  }, [args.droppableId, args.mode, args.type]);
	  var publishedDescriptorRef = React__default['default'].useRef(descriptor);
	  var memoizedUpdateScroll = useMemoOne_cjs.useMemo(function () {
	    return memoizeOne(function (x, y) {
	      !whileDraggingRef.current ? invariant(false, 'Can only update scroll when dragging')  : void 0;
	      var scroll = {
	        x: x,
	        y: y
	      };
	      marshal.updateDroppableScroll(descriptor.id, scroll);
	    });
	  }, [descriptor.id, marshal]);
	  var getClosestScroll = useMemoOne_cjs.useCallback(function () {
	    var dragging = whileDraggingRef.current;

	    if (!dragging || !dragging.env.closestScrollable) {
	      return origin;
	    }

	    return getScroll$1(dragging.env.closestScrollable);
	  }, []);
	  var updateScroll = useMemoOne_cjs.useCallback(function () {
	    var scroll = getClosestScroll();
	    memoizedUpdateScroll(scroll.x, scroll.y);
	  }, [getClosestScroll, memoizedUpdateScroll]);
	  var scheduleScrollUpdate = useMemoOne_cjs.useMemo(function () {
	    return rafSchd(updateScroll);
	  }, [updateScroll]);
	  var onClosestScroll = useMemoOne_cjs.useCallback(function () {
	    var dragging = whileDraggingRef.current;
	    var closest = getClosestScrollableFromDrag(dragging);
	    !(dragging && closest) ? invariant(false, 'Could not find scroll options while scrolling')  : void 0;
	    var options = dragging.scrollOptions;

	    if (options.shouldPublishImmediately) {
	      updateScroll();
	      return;
	    }

	    scheduleScrollUpdate();
	  }, [scheduleScrollUpdate, updateScroll]);
	  var getDimensionAndWatchScroll = useMemoOne_cjs.useCallback(function (windowScroll, options) {
	    !!whileDraggingRef.current ? invariant(false, 'Cannot collect a droppable while a drag is occurring')  : void 0;
	    var previous = previousRef.current;
	    var ref = previous.getDroppableRef();
	    !ref ? invariant(false, 'Cannot collect without a droppable ref')  : void 0;
	    var env = getEnv(ref);
	    var dragging = {
	      ref: ref,
	      descriptor: descriptor,
	      env: env,
	      scrollOptions: options
	    };
	    whileDraggingRef.current = dragging;
	    var dimension = getDimension({
	      ref: ref,
	      descriptor: descriptor,
	      env: env,
	      windowScroll: windowScroll,
	      direction: previous.direction,
	      isDropDisabled: previous.isDropDisabled,
	      isCombineEnabled: previous.isCombineEnabled,
	      shouldClipSubject: !previous.ignoreContainerClipping
	    });
	    var scrollable = env.closestScrollable;

	    if (scrollable) {
	      scrollable.setAttribute(scrollContainer.contextId, appContext.contextId);
	      scrollable.addEventListener('scroll', onClosestScroll, getListenerOptions(dragging.scrollOptions));

	      {
	        checkForNestedScrollContainers(scrollable);
	      }
	    }

	    return dimension;
	  }, [appContext.contextId, descriptor, onClosestScroll, previousRef]);
	  var getScrollWhileDragging = useMemoOne_cjs.useCallback(function () {
	    var dragging = whileDraggingRef.current;
	    var closest = getClosestScrollableFromDrag(dragging);
	    !(dragging && closest) ? invariant(false, 'Can only recollect Droppable client for Droppables that have a scroll container')  : void 0;
	    return getScroll$1(closest);
	  }, []);
	  var dragStopped = useMemoOne_cjs.useCallback(function () {
	    var dragging = whileDraggingRef.current;
	    !dragging ? invariant(false, 'Cannot stop drag when no active drag')  : void 0;
	    var closest = getClosestScrollableFromDrag(dragging);
	    whileDraggingRef.current = null;

	    if (!closest) {
	      return;
	    }

	    scheduleScrollUpdate.cancel();
	    closest.removeAttribute(scrollContainer.contextId);
	    closest.removeEventListener('scroll', onClosestScroll, getListenerOptions(dragging.scrollOptions));
	  }, [onClosestScroll, scheduleScrollUpdate]);
	  var scroll = useMemoOne_cjs.useCallback(function (change) {
	    var dragging = whileDraggingRef.current;
	    !dragging ? invariant(false, 'Cannot scroll when there is no drag')  : void 0;
	    var closest = getClosestScrollableFromDrag(dragging);
	    !closest ? invariant(false, 'Cannot scroll a droppable with no closest scrollable')  : void 0;
	    closest.scrollTop += change.y;
	    closest.scrollLeft += change.x;
	  }, []);
	  var callbacks = useMemoOne_cjs.useMemo(function () {
	    return {
	      getDimensionAndWatchScroll: getDimensionAndWatchScroll,
	      getScrollWhileDragging: getScrollWhileDragging,
	      dragStopped: dragStopped,
	      scroll: scroll
	    };
	  }, [dragStopped, getDimensionAndWatchScroll, getScrollWhileDragging, scroll]);
	  var entry = useMemoOne_cjs.useMemo(function () {
	    return {
	      uniqueId: uniqueId,
	      descriptor: descriptor,
	      callbacks: callbacks
	    };
	  }, [callbacks, descriptor, uniqueId]);
	  useIsomorphicLayoutEffect(function () {
	    publishedDescriptorRef.current = entry.descriptor;
	    registry.droppable.register(entry);
	    return function () {
	      if (whileDraggingRef.current) {
	        warning('Unsupported: changing the droppableId or type of a Droppable during a drag') ;
	        dragStopped();
	      }

	      registry.droppable.unregister(entry);
	    };
	  }, [callbacks, descriptor, dragStopped, entry, marshal, registry.droppable]);
	  useIsomorphicLayoutEffect(function () {
	    if (!whileDraggingRef.current) {
	      return;
	    }

	    marshal.updateDroppableIsEnabled(publishedDescriptorRef.current.id, !args.isDropDisabled);
	  }, [args.isDropDisabled, marshal]);
	  useIsomorphicLayoutEffect(function () {
	    if (!whileDraggingRef.current) {
	      return;
	    }

	    marshal.updateDroppableIsCombineEnabled(publishedDescriptorRef.current.id, args.isCombineEnabled);
	  }, [args.isCombineEnabled, marshal]);
	}

	function noop$2() {}

	var empty = {
	  width: 0,
	  height: 0,
	  margin: noSpacing
	};

	var getSize = function getSize(_ref) {
	  var isAnimatingOpenOnMount = _ref.isAnimatingOpenOnMount,
	      placeholder = _ref.placeholder,
	      animate = _ref.animate;

	  if (isAnimatingOpenOnMount) {
	    return empty;
	  }

	  if (animate === 'close') {
	    return empty;
	  }

	  return {
	    height: placeholder.client.borderBox.height,
	    width: placeholder.client.borderBox.width,
	    margin: placeholder.client.margin
	  };
	};

	var getStyle = function getStyle(_ref2) {
	  var isAnimatingOpenOnMount = _ref2.isAnimatingOpenOnMount,
	      placeholder = _ref2.placeholder,
	      animate = _ref2.animate;
	  var size = getSize({
	    isAnimatingOpenOnMount: isAnimatingOpenOnMount,
	    placeholder: placeholder,
	    animate: animate
	  });
	  return {
	    display: placeholder.display,
	    boxSizing: 'border-box',
	    width: size.width,
	    height: size.height,
	    marginTop: size.margin.top,
	    marginRight: size.margin.right,
	    marginBottom: size.margin.bottom,
	    marginLeft: size.margin.left,
	    flexShrink: '0',
	    flexGrow: '0',
	    pointerEvents: 'none',
	    transition: animate !== 'none' ? transitions.placeholder : null
	  };
	};

	function Placeholder(props) {
	  var animateOpenTimerRef = React__default['default'].useRef(null);
	  var tryClearAnimateOpenTimer = useMemoOne_cjs.useCallback(function () {
	    if (!animateOpenTimerRef.current) {
	      return;
	    }

	    clearTimeout(animateOpenTimerRef.current);
	    animateOpenTimerRef.current = null;
	  }, []);
	  var animate = props.animate,
	      onTransitionEnd = props.onTransitionEnd,
	      onClose = props.onClose,
	      contextId = props.contextId;

	  var _useState = React__default['default'].useState(props.animate === 'open'),
	      isAnimatingOpenOnMount = _useState[0],
	      setIsAnimatingOpenOnMount = _useState[1];

	  React__default['default'].useEffect(function () {
	    if (!isAnimatingOpenOnMount) {
	      return noop$2;
	    }

	    if (animate !== 'open') {
	      tryClearAnimateOpenTimer();
	      setIsAnimatingOpenOnMount(false);
	      return noop$2;
	    }

	    if (animateOpenTimerRef.current) {
	      return noop$2;
	    }

	    animateOpenTimerRef.current = setTimeout(function () {
	      animateOpenTimerRef.current = null;
	      setIsAnimatingOpenOnMount(false);
	    });
	    return tryClearAnimateOpenTimer;
	  }, [animate, isAnimatingOpenOnMount, tryClearAnimateOpenTimer]);
	  var onSizeChangeEnd = useMemoOne_cjs.useCallback(function (event) {
	    if (event.propertyName !== 'height') {
	      return;
	    }

	    onTransitionEnd();

	    if (animate === 'close') {
	      onClose();
	    }
	  }, [animate, onClose, onTransitionEnd]);
	  var style = getStyle({
	    isAnimatingOpenOnMount: isAnimatingOpenOnMount,
	    animate: props.animate,
	    placeholder: props.placeholder
	  });
	  return React__default$1.createElement(props.placeholder.tagName, {
	    style: style,
	    'data-rbd-placeholder-context-id': contextId,
	    onTransitionEnd: onSizeChangeEnd,
	    ref: props.innerRef
	  });
	}

	var Placeholder$1 = React__default$1.memo(Placeholder);

	var DroppableContext = React__default$1.createContext(null);

	function checkIsValidInnerRef(el) {
	  !(el && isHtmlElement(el)) ? invariant(false, "\n    provided.innerRef has not been provided with a HTMLElement.\n\n    You can find a guide on using the innerRef callback functions at:\n    https://github.com/atlassian/react-beautiful-dnd/blob/master/docs/guides/using-inner-ref.md\n  ")  : void 0;
	}

	function isBoolean(value) {
	  return typeof value === 'boolean';
	}

	function runChecks(args, checks) {
	  checks.forEach(function (check) {
	    return check(args);
	  });
	}

	var shared = [function required(_ref) {
	  var props = _ref.props;
	  !props.droppableId ? invariant(false, 'A Droppable requires a droppableId prop')  : void 0;
	  !(typeof props.droppableId === 'string') ? invariant(false, "A Droppable requires a [string] droppableId. Provided: [" + typeof props.droppableId + "]")  : void 0;
	}, function _boolean(_ref2) {
	  var props = _ref2.props;
	  !isBoolean(props.isDropDisabled) ? invariant(false, 'isDropDisabled must be a boolean')  : void 0;
	  !isBoolean(props.isCombineEnabled) ? invariant(false, 'isCombineEnabled must be a boolean')  : void 0;
	  !isBoolean(props.ignoreContainerClipping) ? invariant(false, 'ignoreContainerClipping must be a boolean')  : void 0;
	}, function ref(_ref3) {
	  var getDroppableRef = _ref3.getDroppableRef;
	  checkIsValidInnerRef(getDroppableRef());
	}];
	var standard = [function placeholder(_ref4) {
	  var props = _ref4.props,
	      getPlaceholderRef = _ref4.getPlaceholderRef;

	  if (!props.placeholder) {
	    return;
	  }

	  var ref = getPlaceholderRef();

	  if (ref) {
	    return;
	  }

	  warning("\n      Droppable setup issue [droppableId: \"" + props.droppableId + "\"]:\n      DroppableProvided > placeholder could not be found.\n\n      Please be sure to add the {provided.placeholder} React Node as a child of your Droppable.\n      More information: https://github.com/atlassian/react-beautiful-dnd/blob/master/docs/api/droppable.md\n    ") ;
	}];
	var virtual = [function hasClone(_ref5) {
	  var props = _ref5.props;
	  !props.renderClone ? invariant(false, 'Must provide a clone render function (renderClone) for virtual lists')  : void 0;
	}, function hasNoPlaceholder(_ref6) {
	  var getPlaceholderRef = _ref6.getPlaceholderRef;
	  !!getPlaceholderRef() ? invariant(false, 'Expected virtual list to not have a placeholder')  : void 0;
	}];
	function useValidation(args) {
	  useDevSetupWarning(function () {
	    runChecks(args, shared);

	    if (args.props.mode === 'standard') {
	      runChecks(args, standard);
	    }

	    if (args.props.mode === 'virtual') {
	      runChecks(args, virtual);
	    }
	  });
	}

	var AnimateInOut = function (_React$PureComponent) {
	  _inheritsLoose(AnimateInOut, _React$PureComponent);

	  function AnimateInOut() {
	    var _this;

	    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    _this = _React$PureComponent.call.apply(_React$PureComponent, [this].concat(args)) || this;
	    _this.state = {
	      isVisible: Boolean(_this.props.on),
	      data: _this.props.on,
	      animate: _this.props.shouldAnimate && _this.props.on ? 'open' : 'none'
	    };

	    _this.onClose = function () {
	      if (_this.state.animate !== 'close') {
	        return;
	      }

	      _this.setState({
	        isVisible: false
	      });
	    };

	    return _this;
	  }

	  AnimateInOut.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
	    if (!props.shouldAnimate) {
	      return {
	        isVisible: Boolean(props.on),
	        data: props.on,
	        animate: 'none'
	      };
	    }

	    if (props.on) {
	      return {
	        isVisible: true,
	        data: props.on,
	        animate: 'open'
	      };
	    }

	    if (state.isVisible) {
	      return {
	        isVisible: true,
	        data: state.data,
	        animate: 'close'
	      };
	    }

	    return {
	      isVisible: false,
	      animate: 'close',
	      data: null
	    };
	  };

	  var _proto = AnimateInOut.prototype;

	  _proto.render = function render() {
	    if (!this.state.isVisible) {
	      return null;
	    }

	    var provided = {
	      onClose: this.onClose,
	      data: this.state.data,
	      animate: this.state.animate
	    };
	    return this.props.children(provided);
	  };

	  return AnimateInOut;
	}(React__default$1.PureComponent);

	var zIndexOptions = {
	  dragging: 5000,
	  dropAnimating: 4500
	};

	var getDraggingTransition = function getDraggingTransition(shouldAnimateDragMovement, dropping) {
	  if (dropping) {
	    return transitions.drop(dropping.duration);
	  }

	  if (shouldAnimateDragMovement) {
	    return transitions.snap;
	  }

	  return transitions.fluid;
	};

	var getDraggingOpacity = function getDraggingOpacity(isCombining, isDropAnimating) {
	  if (!isCombining) {
	    return null;
	  }

	  return isDropAnimating ? combine.opacity.drop : combine.opacity.combining;
	};

	var getShouldDraggingAnimate = function getShouldDraggingAnimate(dragging) {
	  if (dragging.forceShouldAnimate != null) {
	    return dragging.forceShouldAnimate;
	  }

	  return dragging.mode === 'SNAP';
	};

	function getDraggingStyle(dragging) {
	  var dimension = dragging.dimension;
	  var box = dimension.client;
	  var offset = dragging.offset,
	      combineWith = dragging.combineWith,
	      dropping = dragging.dropping;
	  var isCombining = Boolean(combineWith);
	  var shouldAnimate = getShouldDraggingAnimate(dragging);
	  var isDropAnimating = Boolean(dropping);
	  var transform = isDropAnimating ? transforms.drop(offset, isCombining) : transforms.moveTo(offset);
	  var style = {
	    position: 'fixed',
	    top: box.marginBox.top,
	    left: box.marginBox.left,
	    boxSizing: 'border-box',
	    width: box.borderBox.width,
	    height: box.borderBox.height,
	    transition: getDraggingTransition(shouldAnimate, dropping),
	    transform: transform,
	    opacity: getDraggingOpacity(isCombining, isDropAnimating),
	    zIndex: isDropAnimating ? zIndexOptions.dropAnimating : zIndexOptions.dragging,
	    pointerEvents: 'none'
	  };
	  return style;
	}

	function getSecondaryStyle(secondary) {
	  return {
	    transform: transforms.moveTo(secondary.offset),
	    transition: secondary.shouldAnimateDisplacement ? null : 'none'
	  };
	}

	function getStyle$1(mapped) {
	  return mapped.type === 'DRAGGING' ? getDraggingStyle(mapped) : getSecondaryStyle(mapped);
	}

	function getDimension$1(descriptor, el, windowScroll) {
	  if (windowScroll === void 0) {
	    windowScroll = origin;
	  }

	  var computedStyles = window.getComputedStyle(el);
	  var borderBox = el.getBoundingClientRect();
	  var client = cssBoxModel_cjs.calculateBox(borderBox, computedStyles);
	  var page = cssBoxModel_cjs.withScroll(client, windowScroll);
	  var placeholder = {
	    client: client,
	    tagName: el.tagName.toLowerCase(),
	    display: computedStyles.display
	  };
	  var displaceBy = {
	    x: client.marginBox.width,
	    y: client.marginBox.height
	  };
	  var dimension = {
	    descriptor: descriptor,
	    placeholder: placeholder,
	    displaceBy: displaceBy,
	    client: client,
	    page: page
	  };
	  return dimension;
	}

	function useDraggablePublisher(args) {
	  var uniqueId = useUniqueId('draggable');
	  var descriptor = args.descriptor,
	      registry = args.registry,
	      getDraggableRef = args.getDraggableRef,
	      canDragInteractiveElements = args.canDragInteractiveElements,
	      shouldRespectForcePress = args.shouldRespectForcePress,
	      isEnabled = args.isEnabled;
	  var options = useMemoOne_cjs.useMemo(function () {
	    return {
	      canDragInteractiveElements: canDragInteractiveElements,
	      shouldRespectForcePress: shouldRespectForcePress,
	      isEnabled: isEnabled
	    };
	  }, [canDragInteractiveElements, isEnabled, shouldRespectForcePress]);
	  var getDimension = useMemoOne_cjs.useCallback(function (windowScroll) {
	    var el = getDraggableRef();
	    !el ? invariant(false, 'Cannot get dimension when no ref is set')  : void 0;
	    return getDimension$1(descriptor, el, windowScroll);
	  }, [descriptor, getDraggableRef]);
	  var entry = useMemoOne_cjs.useMemo(function () {
	    return {
	      uniqueId: uniqueId,
	      descriptor: descriptor,
	      options: options,
	      getDimension: getDimension
	    };
	  }, [descriptor, getDimension, options, uniqueId]);
	  var publishedRef = React__default['default'].useRef(entry);
	  var isFirstPublishRef = React__default['default'].useRef(true);
	  useIsomorphicLayoutEffect(function () {
	    registry.draggable.register(publishedRef.current);
	    return function () {
	      return registry.draggable.unregister(publishedRef.current);
	    };
	  }, [registry.draggable]);
	  useIsomorphicLayoutEffect(function () {
	    if (isFirstPublishRef.current) {
	      isFirstPublishRef.current = false;
	      return;
	    }

	    var last = publishedRef.current;
	    publishedRef.current = entry;
	    registry.draggable.update(entry, last);
	  }, [entry, registry.draggable]);
	}

	function useValidation$1(props, contextId, getRef) {
	  useDevSetupWarning(function () {
	    function prefix(id) {
	      return "Draggable[id: " + id + "]: ";
	    }

	    var id = props.draggableId;
	    !id ? "development" !== "production" ? invariant(false, 'Draggable requires a draggableId') : invariant(false) : void 0;
	    !(typeof id === 'string') ? "development" !== "production" ? invariant(false, "Draggable requires a [string] draggableId.\n      Provided: [type: " + typeof id + "] (value: " + id + ")") : invariant(false) : void 0;
	    !isInteger(props.index) ? "development" !== "production" ? invariant(false, prefix(id) + " requires an integer index prop") : invariant(false) : void 0;

	    if (props.mapped.type === 'DRAGGING') {
	      return;
	    }

	    checkIsValidInnerRef(getRef());

	    if (props.isEnabled) {
	      !findDragHandle(contextId, id) ? "development" !== "production" ? invariant(false, prefix(id) + " Unable to find drag handle") : invariant(false) : void 0;
	    }
	  });
	}
	function useClonePropValidation(isClone) {
	  useDev(function () {
	    var initialRef = React__default['default'].useRef(isClone);
	    useDevSetupWarning(function () {
	      !(isClone === initialRef.current) ? "development" !== "production" ? invariant(false, 'Draggable isClone prop value changed during component life') : invariant(false) : void 0;
	    }, [isClone]);
	  });
	}

	function preventHtml5Dnd(event) {
	  event.preventDefault();
	}

	function Draggable(props) {
	  var ref = React__default['default'].useRef(null);
	  var setRef = useMemoOne_cjs.useCallback(function (el) {
	    ref.current = el;
	  }, []);
	  var getRef = useMemoOne_cjs.useCallback(function () {
	    return ref.current;
	  }, []);

	  var _useRequiredContext = useRequiredContext(AppContext),
	      contextId = _useRequiredContext.contextId,
	      dragHandleUsageInstructionsId = _useRequiredContext.dragHandleUsageInstructionsId,
	      registry = _useRequiredContext.registry;

	  var _useRequiredContext2 = useRequiredContext(DroppableContext),
	      type = _useRequiredContext2.type,
	      droppableId = _useRequiredContext2.droppableId;

	  var descriptor = useMemoOne_cjs.useMemo(function () {
	    return {
	      id: props.draggableId,
	      index: props.index,
	      type: type,
	      droppableId: droppableId
	    };
	  }, [props.draggableId, props.index, type, droppableId]);
	  var children = props.children,
	      draggableId = props.draggableId,
	      isEnabled = props.isEnabled,
	      shouldRespectForcePress = props.shouldRespectForcePress,
	      canDragInteractiveElements = props.canDragInteractiveElements,
	      isClone = props.isClone,
	      mapped = props.mapped,
	      dropAnimationFinishedAction = props.dropAnimationFinished;
	  useValidation$1(props, contextId, getRef);
	  useClonePropValidation(isClone);

	  if (!isClone) {
	    var forPublisher = useMemoOne_cjs.useMemo(function () {
	      return {
	        descriptor: descriptor,
	        registry: registry,
	        getDraggableRef: getRef,
	        canDragInteractiveElements: canDragInteractiveElements,
	        shouldRespectForcePress: shouldRespectForcePress,
	        isEnabled: isEnabled
	      };
	    }, [descriptor, registry, getRef, canDragInteractiveElements, shouldRespectForcePress, isEnabled]);
	    useDraggablePublisher(forPublisher);
	  }

	  var dragHandleProps = useMemoOne_cjs.useMemo(function () {
	    return isEnabled ? {
	      tabIndex: 0,
	      role: 'button',
	      'aria-describedby': dragHandleUsageInstructionsId,
	      'data-rbd-drag-handle-draggable-id': draggableId,
	      'data-rbd-drag-handle-context-id': contextId,
	      draggable: false,
	      onDragStart: preventHtml5Dnd
	    } : null;
	  }, [contextId, dragHandleUsageInstructionsId, draggableId, isEnabled]);
	  var onMoveEnd = useMemoOne_cjs.useCallback(function (event) {
	    if (mapped.type !== 'DRAGGING') {
	      return;
	    }

	    if (!mapped.dropping) {
	      return;
	    }

	    if (event.propertyName !== 'transform') {
	      return;
	    }

	    dropAnimationFinishedAction();
	  }, [dropAnimationFinishedAction, mapped]);
	  var provided = useMemoOne_cjs.useMemo(function () {
	    var style = getStyle$1(mapped);
	    var onTransitionEnd = mapped.type === 'DRAGGING' && mapped.dropping ? onMoveEnd : null;
	    var result = {
	      innerRef: setRef,
	      draggableProps: {
	        'data-rbd-draggable-context-id': contextId,
	        'data-rbd-draggable-id': draggableId,
	        style: style,
	        onTransitionEnd: onTransitionEnd
	      },
	      dragHandleProps: dragHandleProps
	    };
	    return result;
	  }, [contextId, dragHandleProps, draggableId, mapped, onMoveEnd, setRef]);
	  var rubric = useMemoOne_cjs.useMemo(function () {
	    return {
	      draggableId: descriptor.id,
	      type: descriptor.type,
	      source: {
	        index: descriptor.index,
	        droppableId: descriptor.droppableId
	      }
	    };
	  }, [descriptor.droppableId, descriptor.id, descriptor.index, descriptor.type]);
	  return children(provided, mapped.snapshot, rubric);
	}

	var isStrictEqual = (function (a, b) {
	  return a === b;
	});

	var whatIsDraggedOverFromResult = (function (result) {
	  var combine = result.combine,
	      destination = result.destination;

	  if (destination) {
	    return destination.droppableId;
	  }

	  if (combine) {
	    return combine.droppableId;
	  }

	  return null;
	});

	var getCombineWithFromResult = function getCombineWithFromResult(result) {
	  return result.combine ? result.combine.draggableId : null;
	};

	var getCombineWithFromImpact = function getCombineWithFromImpact(impact) {
	  return impact.at && impact.at.type === 'COMBINE' ? impact.at.combine.draggableId : null;
	};

	function getDraggableSelector() {
	  var memoizedOffset = memoizeOne(function (x, y) {
	    return {
	      x: x,
	      y: y
	    };
	  });
	  var getMemoizedSnapshot = memoizeOne(function (mode, isClone, draggingOver, combineWith, dropping) {
	    return {
	      isDragging: true,
	      isClone: isClone,
	      isDropAnimating: Boolean(dropping),
	      dropAnimation: dropping,
	      mode: mode,
	      draggingOver: draggingOver,
	      combineWith: combineWith,
	      combineTargetFor: null
	    };
	  });
	  var getMemoizedProps = memoizeOne(function (offset, mode, dimension, isClone, draggingOver, combineWith, forceShouldAnimate) {
	    return {
	      mapped: {
	        type: 'DRAGGING',
	        dropping: null,
	        draggingOver: draggingOver,
	        combineWith: combineWith,
	        mode: mode,
	        offset: offset,
	        dimension: dimension,
	        forceShouldAnimate: forceShouldAnimate,
	        snapshot: getMemoizedSnapshot(mode, isClone, draggingOver, combineWith, null)
	      }
	    };
	  });

	  var selector = function selector(state, ownProps) {
	    if (state.isDragging) {
	      if (state.critical.draggable.id !== ownProps.draggableId) {
	        return null;
	      }

	      var offset = state.current.client.offset;
	      var dimension = state.dimensions.draggables[ownProps.draggableId];
	      var draggingOver = whatIsDraggedOver(state.impact);
	      var combineWith = getCombineWithFromImpact(state.impact);
	      var forceShouldAnimate = state.forceShouldAnimate;
	      return getMemoizedProps(memoizedOffset(offset.x, offset.y), state.movementMode, dimension, ownProps.isClone, draggingOver, combineWith, forceShouldAnimate);
	    }

	    if (state.phase === 'DROP_ANIMATING') {
	      var completed = state.completed;

	      if (completed.result.draggableId !== ownProps.draggableId) {
	        return null;
	      }

	      var isClone = ownProps.isClone;
	      var _dimension = state.dimensions.draggables[ownProps.draggableId];
	      var result = completed.result;
	      var mode = result.mode;

	      var _draggingOver = whatIsDraggedOverFromResult(result);

	      var _combineWith = getCombineWithFromResult(result);

	      var duration = state.dropDuration;
	      var dropping = {
	        duration: duration,
	        curve: curves.drop,
	        moveTo: state.newHomeClientOffset,
	        opacity: _combineWith ? combine.opacity.drop : null,
	        scale: _combineWith ? combine.scale.drop : null
	      };
	      return {
	        mapped: {
	          type: 'DRAGGING',
	          offset: state.newHomeClientOffset,
	          dimension: _dimension,
	          dropping: dropping,
	          draggingOver: _draggingOver,
	          combineWith: _combineWith,
	          mode: mode,
	          forceShouldAnimate: null,
	          snapshot: getMemoizedSnapshot(mode, isClone, _draggingOver, _combineWith, dropping)
	        }
	      };
	    }

	    return null;
	  };

	  return selector;
	}

	function getSecondarySnapshot(combineTargetFor) {
	  return {
	    isDragging: false,
	    isDropAnimating: false,
	    isClone: false,
	    dropAnimation: null,
	    mode: null,
	    draggingOver: null,
	    combineTargetFor: combineTargetFor,
	    combineWith: null
	  };
	}

	var atRest = {
	  mapped: {
	    type: 'SECONDARY',
	    offset: origin,
	    combineTargetFor: null,
	    shouldAnimateDisplacement: true,
	    snapshot: getSecondarySnapshot(null)
	  }
	};

	function getSecondarySelector() {
	  var memoizedOffset = memoizeOne(function (x, y) {
	    return {
	      x: x,
	      y: y
	    };
	  });
	  var getMemoizedSnapshot = memoizeOne(getSecondarySnapshot);
	  var getMemoizedProps = memoizeOne(function (offset, combineTargetFor, shouldAnimateDisplacement) {
	    if (combineTargetFor === void 0) {
	      combineTargetFor = null;
	    }

	    return {
	      mapped: {
	        type: 'SECONDARY',
	        offset: offset,
	        combineTargetFor: combineTargetFor,
	        shouldAnimateDisplacement: shouldAnimateDisplacement,
	        snapshot: getMemoizedSnapshot(combineTargetFor)
	      }
	    };
	  });

	  var getFallback = function getFallback(combineTargetFor) {
	    return combineTargetFor ? getMemoizedProps(origin, combineTargetFor, true) : null;
	  };

	  var getProps = function getProps(ownId, draggingId, impact, afterCritical) {
	    var visualDisplacement = impact.displaced.visible[ownId];
	    var isAfterCriticalInVirtualList = Boolean(afterCritical.inVirtualList && afterCritical.effected[ownId]);
	    var combine = tryGetCombine(impact);
	    var combineTargetFor = combine && combine.draggableId === ownId ? draggingId : null;

	    if (!visualDisplacement) {
	      if (!isAfterCriticalInVirtualList) {
	        return getFallback(combineTargetFor);
	      }

	      if (impact.displaced.invisible[ownId]) {
	        return null;
	      }

	      var change = negate(afterCritical.displacedBy.point);

	      var _offset = memoizedOffset(change.x, change.y);

	      return getMemoizedProps(_offset, combineTargetFor, true);
	    }

	    if (isAfterCriticalInVirtualList) {
	      return getFallback(combineTargetFor);
	    }

	    var displaceBy = impact.displacedBy.point;
	    var offset = memoizedOffset(displaceBy.x, displaceBy.y);
	    return getMemoizedProps(offset, combineTargetFor, visualDisplacement.shouldAnimate);
	  };

	  var selector = function selector(state, ownProps) {
	    if (state.isDragging) {
	      if (state.critical.draggable.id === ownProps.draggableId) {
	        return null;
	      }

	      return getProps(ownProps.draggableId, state.critical.draggable.id, state.impact, state.afterCritical);
	    }

	    if (state.phase === 'DROP_ANIMATING') {
	      var completed = state.completed;

	      if (completed.result.draggableId === ownProps.draggableId) {
	        return null;
	      }

	      return getProps(ownProps.draggableId, completed.result.draggableId, completed.impact, completed.afterCritical);
	    }

	    return null;
	  };

	  return selector;
	}

	var makeMapStateToProps = function makeMapStateToProps() {
	  var draggingSelector = getDraggableSelector();
	  var secondarySelector = getSecondarySelector();

	  var selector = function selector(state, ownProps) {
	    return draggingSelector(state, ownProps) || secondarySelector(state, ownProps) || atRest;
	  };

	  return selector;
	};
	var mapDispatchToProps = {
	  dropAnimationFinished: dropAnimationFinished
	};
	var ConnectedDraggable = reactRedux__default['default'].connect(makeMapStateToProps, mapDispatchToProps, null, {
	  context: StoreContext,
	  pure: true,
	  areStatePropsEqual: isStrictEqual
	})(Draggable);

	function PrivateDraggable(props) {
	  var droppableContext = useRequiredContext(DroppableContext);
	  var isUsingCloneFor = droppableContext.isUsingCloneFor;

	  if (isUsingCloneFor === props.draggableId && !props.isClone) {
	    return null;
	  }

	  return React__default$1.createElement(ConnectedDraggable, props);
	}
	function PublicDraggable(props) {
	  var isEnabled = typeof props.isDragDisabled === 'boolean' ? !props.isDragDisabled : true;
	  var canDragInteractiveElements = Boolean(props.disableInteractiveElementBlocking);
	  var shouldRespectForcePress = Boolean(props.shouldRespectForcePress);
	  return React__default$1.createElement(PrivateDraggable, _extends({}, props, {
	    isClone: false,
	    isEnabled: isEnabled,
	    canDragInteractiveElements: canDragInteractiveElements,
	    shouldRespectForcePress: shouldRespectForcePress
	  }));
	}

	function Droppable(props) {
	  var appContext = React__default['default'].useContext(AppContext);
	  !appContext ? invariant(false, 'Could not find app context')  : void 0;
	  var contextId = appContext.contextId,
	      isMovementAllowed = appContext.isMovementAllowed;
	  var droppableRef = React__default['default'].useRef(null);
	  var placeholderRef = React__default['default'].useRef(null);
	  var children = props.children,
	      droppableId = props.droppableId,
	      type = props.type,
	      mode = props.mode,
	      direction = props.direction,
	      ignoreContainerClipping = props.ignoreContainerClipping,
	      isDropDisabled = props.isDropDisabled,
	      isCombineEnabled = props.isCombineEnabled,
	      snapshot = props.snapshot,
	      useClone = props.useClone,
	      updateViewportMaxScroll = props.updateViewportMaxScroll,
	      getContainerForClone = props.getContainerForClone;
	  var getDroppableRef = useMemoOne_cjs.useCallback(function () {
	    return droppableRef.current;
	  }, []);
	  var setDroppableRef = useMemoOne_cjs.useCallback(function (value) {
	    droppableRef.current = value;
	  }, []);
	  var getPlaceholderRef = useMemoOne_cjs.useCallback(function () {
	    return placeholderRef.current;
	  }, []);
	  var setPlaceholderRef = useMemoOne_cjs.useCallback(function (value) {
	    placeholderRef.current = value;
	  }, []);
	  useValidation({
	    props: props,
	    getDroppableRef: getDroppableRef,
	    getPlaceholderRef: getPlaceholderRef
	  });
	  var onPlaceholderTransitionEnd = useMemoOne_cjs.useCallback(function () {
	    if (isMovementAllowed()) {
	      updateViewportMaxScroll({
	        maxScroll: getMaxWindowScroll()
	      });
	    }
	  }, [isMovementAllowed, updateViewportMaxScroll]);
	  useDroppablePublisher({
	    droppableId: droppableId,
	    type: type,
	    mode: mode,
	    direction: direction,
	    isDropDisabled: isDropDisabled,
	    isCombineEnabled: isCombineEnabled,
	    ignoreContainerClipping: ignoreContainerClipping,
	    getDroppableRef: getDroppableRef
	  });
	  var placeholder = React__default$1.createElement(AnimateInOut, {
	    on: props.placeholder,
	    shouldAnimate: props.shouldAnimatePlaceholder
	  }, function (_ref) {
	    var onClose = _ref.onClose,
	        data = _ref.data,
	        animate = _ref.animate;
	    return React__default$1.createElement(Placeholder$1, {
	      placeholder: data,
	      onClose: onClose,
	      innerRef: setPlaceholderRef,
	      animate: animate,
	      contextId: contextId,
	      onTransitionEnd: onPlaceholderTransitionEnd
	    });
	  });
	  var provided = useMemoOne_cjs.useMemo(function () {
	    return {
	      innerRef: setDroppableRef,
	      placeholder: placeholder,
	      droppableProps: {
	        'data-rbd-droppable-id': droppableId,
	        'data-rbd-droppable-context-id': contextId
	      }
	    };
	  }, [contextId, droppableId, placeholder, setDroppableRef]);
	  var isUsingCloneFor = useClone ? useClone.dragging.draggableId : null;
	  var droppableContext = useMemoOne_cjs.useMemo(function () {
	    return {
	      droppableId: droppableId,
	      type: type,
	      isUsingCloneFor: isUsingCloneFor
	    };
	  }, [droppableId, isUsingCloneFor, type]);

	  function getClone() {
	    if (!useClone) {
	      return null;
	    }

	    var dragging = useClone.dragging,
	        render = useClone.render;
	    var node = React__default$1.createElement(PrivateDraggable, {
	      draggableId: dragging.draggableId,
	      index: dragging.source.index,
	      isClone: true,
	      isEnabled: true,
	      shouldRespectForcePress: false,
	      canDragInteractiveElements: true
	    }, function (draggableProvided, draggableSnapshot) {
	      return render(draggableProvided, draggableSnapshot, dragging);
	    });
	    return ReactDOM.createPortal(node, getContainerForClone());
	  }

	  return React__default$1.createElement(DroppableContext.Provider, {
	    value: droppableContext
	  }, children(provided, snapshot), getClone());
	}

	var isMatchingType = function isMatchingType(type, critical) {
	  return type === critical.droppable.type;
	};

	var getDraggable = function getDraggable(critical, dimensions) {
	  return dimensions.draggables[critical.draggable.id];
	};

	var makeMapStateToProps$1 = function makeMapStateToProps() {
	  var idleWithAnimation = {
	    placeholder: null,
	    shouldAnimatePlaceholder: true,
	    snapshot: {
	      isDraggingOver: false,
	      draggingOverWith: null,
	      draggingFromThisWith: null,
	      isUsingPlaceholder: false
	    },
	    useClone: null
	  };

	  var idleWithoutAnimation = _extends({}, idleWithAnimation, {
	    shouldAnimatePlaceholder: false
	  });

	  var getDraggableRubric = memoizeOne(function (descriptor) {
	    return {
	      draggableId: descriptor.id,
	      type: descriptor.type,
	      source: {
	        index: descriptor.index,
	        droppableId: descriptor.droppableId
	      }
	    };
	  });
	  var getMapProps = memoizeOne(function (id, isEnabled, isDraggingOverForConsumer, isDraggingOverForImpact, dragging, renderClone) {
	    var draggableId = dragging.descriptor.id;
	    var isHome = dragging.descriptor.droppableId === id;

	    if (isHome) {
	      var useClone = renderClone ? {
	        render: renderClone,
	        dragging: getDraggableRubric(dragging.descriptor)
	      } : null;
	      var _snapshot = {
	        isDraggingOver: isDraggingOverForConsumer,
	        draggingOverWith: isDraggingOverForConsumer ? draggableId : null,
	        draggingFromThisWith: draggableId,
	        isUsingPlaceholder: true
	      };
	      return {
	        placeholder: dragging.placeholder,
	        shouldAnimatePlaceholder: false,
	        snapshot: _snapshot,
	        useClone: useClone
	      };
	    }

	    if (!isEnabled) {
	      return idleWithoutAnimation;
	    }

	    if (!isDraggingOverForImpact) {
	      return idleWithAnimation;
	    }

	    var snapshot = {
	      isDraggingOver: isDraggingOverForConsumer,
	      draggingOverWith: draggableId,
	      draggingFromThisWith: null,
	      isUsingPlaceholder: true
	    };
	    return {
	      placeholder: dragging.placeholder,
	      shouldAnimatePlaceholder: true,
	      snapshot: snapshot,
	      useClone: null
	    };
	  });

	  var selector = function selector(state, ownProps) {
	    var id = ownProps.droppableId;
	    var type = ownProps.type;
	    var isEnabled = !ownProps.isDropDisabled;
	    var renderClone = ownProps.renderClone;

	    if (state.isDragging) {
	      var critical = state.critical;

	      if (!isMatchingType(type, critical)) {
	        return idleWithoutAnimation;
	      }

	      var dragging = getDraggable(critical, state.dimensions);
	      var isDraggingOver = whatIsDraggedOver(state.impact) === id;
	      return getMapProps(id, isEnabled, isDraggingOver, isDraggingOver, dragging, renderClone);
	    }

	    if (state.phase === 'DROP_ANIMATING') {
	      var completed = state.completed;

	      if (!isMatchingType(type, completed.critical)) {
	        return idleWithoutAnimation;
	      }

	      var _dragging = getDraggable(completed.critical, state.dimensions);

	      return getMapProps(id, isEnabled, whatIsDraggedOverFromResult(completed.result) === id, whatIsDraggedOver(completed.impact) === id, _dragging, renderClone);
	    }

	    if (state.phase === 'IDLE' && state.completed && !state.shouldFlush) {
	      var _completed = state.completed;

	      if (!isMatchingType(type, _completed.critical)) {
	        return idleWithoutAnimation;
	      }

	      var wasOver = whatIsDraggedOver(_completed.impact) === id;
	      var wasCombining = Boolean(_completed.impact.at && _completed.impact.at.type === 'COMBINE');
	      var isHome = _completed.critical.droppable.id === id;

	      if (wasOver) {
	        return wasCombining ? idleWithAnimation : idleWithoutAnimation;
	      }

	      if (isHome) {
	        return idleWithAnimation;
	      }

	      return idleWithoutAnimation;
	    }

	    return idleWithoutAnimation;
	  };

	  return selector;
	};
	var mapDispatchToProps$1 = {
	  updateViewportMaxScroll: updateViewportMaxScroll
	};

	function getBody() {
	  !document.body ? invariant(false, 'document.body is not ready')  : void 0;
	  return document.body;
	}

	var defaultProps = {
	  mode: 'standard',
	  type: 'DEFAULT',
	  direction: 'vertical',
	  isDropDisabled: false,
	  isCombineEnabled: false,
	  ignoreContainerClipping: false,
	  renderClone: null,
	  getContainerForClone: getBody
	};
	var ConnectedDroppable = reactRedux__default['default'].connect(makeMapStateToProps$1, mapDispatchToProps$1, null, {
	  context: StoreContext,
	  pure: true,
	  areStatePropsEqual: isStrictEqual
	})(Droppable);
	ConnectedDroppable.defaultProps = defaultProps;

	exports.DragDropContext = DragDropContext;
	exports.Draggable = PublicDraggable;
	exports.Droppable = ConnectedDroppable;
	exports.resetServerContext = resetServerContext;
	exports.useKeyboardSensor = useKeyboardSensor;
	exports.useMouseSensor = useMouseSensor;
	exports.useTouchSensor = useTouchSensor;
	});

	const AddNewItemButton = props => {
	  const {
	    resource,
	    property
	  } = props;
	  const {
	    translateProperty,
	    translateButton
	  } = useTranslation();
	  const label = translateProperty(`${property.path}.addNewItem`, resource.id, {
	    defaultValue: translateButton('addNewItem', resource.id)
	  });
	  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Icon, {
	    icon: "Add"
	  }), label);
	};

	const PropertyLabel = props => {
	  const {
	    property,
	    props: labelProps
	  } = props;

	  if (property.hideLabel) {
	    return null;
	  }

	  return /*#__PURE__*/React__default['default'].createElement(DesignSystem.Label, _extends({
	    htmlFor: property.path,
	    required: property.isRequired
	  }, labelProps), property.label);
	};

	/**
	 * Converts property: PropertyJSON from an array to a sub-property for an actual item in the array
	 * It change path that it has index inside along with the label. Futhermore flat isArray is removed
	 * ,because it was already handled, so that itemRenderer can render property as a regular one
	 *
	 * @param {PropertyJSON}  arrayProperty property with path set to an root Array type property,
	 * @param {Number}        index         index under which sub-property should be placed
	 * @private
	 * @hide
	 */
	const convertToSubProperty$1 = (arrayProperty, index) => ({ ...arrayProperty,
	  path: [arrayProperty.path, index].join(DELIMITER),
	  label: `[${index + 1}]`,
	  isArray: false,
	  isDraggable: false
	});

	/**
	 * Removes selected array item from given record. It performs following tasks:
	 * 1. removes array item from the array
	 * 2. reorders keys in new array item
	 * 3. if property has populated fields it also reorders them
	 * it uses {@link flat } module and its removePath method
	 *
	 * @param {RecordJSON} record
	 * @param {string}     subPropertyPath            which has to be removed. It has to be flattened
	 *                                                in notation, and ending with array index
	 * @private
	 * @hide
	 */
	const removeSubProperty = (record, subPropertyPath) => {
	  // by default populated is flatten just to the path level - object itself is not flatten. That is
	  // why we have to retrieve the original state. That is why we have to replace record.populated to
	  // from { 'some.nested.1.key': RecordJSON } to { 'some.nested.1.key': 'some.nested.1.key' },
	  // then remove keys, and refill back some.nested.1.key to the value from the original populated
	  // object.
	  const populatedKeyMap = Object.keys(record.populated).reduce((memo, propertyKey) => ({ ...memo,
	    [propertyKey]: propertyKey
	  }), {});
	  const newPopulatedKeyMap = flat.removePath(populatedKeyMap, subPropertyPath);
	  const newPopulated = Object.entries(newPopulatedKeyMap).reduce((memo, [newPropertyKey, oldPropertyKey]) => ({ ...memo,
	    [newPropertyKey]: oldPropertyKey && record.populated[oldPropertyKey === null || oldPropertyKey === void 0 ? void 0 : oldPropertyKey.toString()]
	  }), {});
	  return { ...record,
	    params: flat.removePath(record.params, subPropertyPath),
	    populated: newPopulated
	  };
	};

	const ItemRenderer = props => {
	  const {
	    ItemComponent,
	    property,
	    onDelete,
	    index,
	    record,
	    isDraggable
	  } = props;
	  const uniqueDraggableId = window.btoa(`${JSON.stringify(flat.get(record.params, property.path))}-${property.path}`);
	  return /*#__PURE__*/React__default['default'].createElement(reactBeautifulDnd_cjs.Draggable, {
	    draggableId: uniqueDraggableId,
	    index: index,
	    key: uniqueDraggableId,
	    isDragDisabled: !isDraggable
	  }, provided => /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, _extends({
	    ref: provided.innerRef
	  }, provided.draggableProps, provided.dragHandleProps, {
	    background: "white",
	    flex: true,
	    flexDirection: "row",
	    alignItems: "center",
	    "data-testid": property.path
	  }), /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	    flexGrow: 1
	  }, /*#__PURE__*/React__default['default'].createElement(ItemComponent, props)), /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	    flexShrink: 0,
	    ml: "lg"
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Button, {
	    rounded: true,
	    ml: "default",
	    "data-testid": "delete-item",
	    type: "button",
	    size: "icon",
	    onClick: event => onDelete(event, property),
	    variant: "danger"
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Icon, {
	    icon: "TrashCan"
	  })))));
	};

	const InputsInSection = props => {
	  const {
	    property,
	    record,
	    resource,
	    onChange
	  } = props;
	  const items = flat.get(record.params, property.path) || [];
	  const addNew = React.useCallback(event => {
	    const newItems = [...items, property.subProperties.length ? {} : ''];
	    onChange(property.path, newItems);
	    event.preventDefault();
	    return false;
	  }, [record, onChange, property]);
	  const removeItem = React.useCallback((event, subProperty) => {
	    const newRecord = removeSubProperty(record, subProperty.path);
	    onChange(newRecord);
	    event.preventDefault();
	    return false;
	  }, [record, onChange, property]);
	  const handleOnDragEnd = React.useCallback(result => {
	    const {
	      source,
	      destination
	    } = result;
	    if (!source || !destination || destination.index === source.index) return;
	    const itemsCopy = Array.from(items);
	    const [sourceItem] = itemsCopy.splice(source.index, 1);
	    itemsCopy.splice(destination.index, 0, sourceItem);
	    onChange(property.path, itemsCopy);
	  }, [record, onChange, property]);
	  return /*#__PURE__*/React__default['default'].createElement(reactBeautifulDnd_cjs.DragDropContext, {
	    onDragEnd: handleOnDragEnd
	  }, /*#__PURE__*/React__default['default'].createElement(reactBeautifulDnd_cjs.Droppable, {
	    droppableId: property.path
	  }, provided => /*#__PURE__*/React__default['default'].createElement(DesignSystem.Section, _extends({
	    ref: provided.innerRef
	  }, provided.droppableProps, {
	    mt: "xl",
	    className: property.path
	  }), items.map((item, i) => {
	    const itemProperty = convertToSubProperty$1(props.property, i);
	    return /*#__PURE__*/React__default['default'].createElement(ItemRenderer, _extends({}, props, {
	      property: itemProperty,
	      isDraggable: property.isDraggable,
	      key: itemProperty.path,
	      onDelete: removeItem,
	      index: i
	    }));
	  }), provided.placeholder, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Button, {
	    onClick: addNew,
	    type: "button",
	    rounded: true
	  }, /*#__PURE__*/React__default['default'].createElement(AddNewItemButton, {
	    resource: resource,
	    property: property
	  })))));
	};

	const Edit$9 = props => {
	  const {
	    property,
	    record,
	    testId
	  } = props;
	  const error = record.errors && record.errors[property.propertyPath];
	  return /*#__PURE__*/React__default['default'].createElement(DesignSystem.FormGroup, {
	    error: !!error,
	    "data-testid": testId
	  }, /*#__PURE__*/React__default['default'].createElement(PropertyLabel, {
	    property: property
	  }), /*#__PURE__*/React__default['default'].createElement(InputsInSection, props), /*#__PURE__*/React__default['default'].createElement(DesignSystem.FormMessage, null, error && error.message));
	};

	const List$7 = props => {
	  const {
	    property,
	    record
	  } = props;
	  const values = flat.get(record.params, property.path) || [];
	  return /*#__PURE__*/React__default['default'].createElement("span", null, `length: ${values.length}`);
	};

	class Show$8 extends React__default['default'].PureComponent {
	  render() {
	    const {
	      property,
	      record,
	      ItemComponent
	    } = this.props;
	    const items = flat.get(record.params, property.path) || [];
	    return /*#__PURE__*/React__default['default'].createElement(DesignSystem.ValueGroup, {
	      label: property.label
	    }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Section, null, (items || []).map((item, i) => {
	      const itemProperty = convertToSubProperty$1(property, i);
	      return /*#__PURE__*/React__default['default'].createElement(ItemComponent, _extends({}, this.props, {
	        key: itemProperty.path,
	        property: itemProperty
	      }));
	    })));
	  }

	}

	// import Show from './show'

	var ArrayType = /*#__PURE__*/Object.freeze({
		__proto__: null,
		show: Show$8,
		edit: Edit$9,
		list: List$7
	});

	function convertToSubProperty(property, subProperty) {
	  const [subPropertyPath] = subProperty.name.split(DELIMITER).slice(-1);
	  return { ...subProperty,
	    path: [property.path, subPropertyPath].join(DELIMITER)
	  };
	}

	const Edit$8 = props => {
	  const {
	    property,
	    record,
	    ItemComponent
	  } = props;
	  const error = record.errors && record.errors[property.path];
	  return /*#__PURE__*/React__default['default'].createElement(DesignSystem.FormGroup, {
	    error: !!error
	  }, /*#__PURE__*/React__default['default'].createElement(PropertyLabel, {
	    property: property
	  }), /*#__PURE__*/React__default['default'].createElement(DesignSystem.Section, property.props, property.subProperties.filter(subProperty => !subProperty.isId).map(subProperty => {
	    const subPropertyWithPath = convertToSubProperty(property, subProperty);
	    return /*#__PURE__*/React__default['default'].createElement(ItemComponent, _extends({}, props, {
	      key: subPropertyWithPath.path,
	      property: subPropertyWithPath
	    }));
	  })), /*#__PURE__*/React__default['default'].createElement(DesignSystem.FormMessage, null, error && error.message));
	};

	const Show$7 = props => {
	  const {
	    property,
	    ItemComponent
	  } = props;
	  return /*#__PURE__*/React__default['default'].createElement(DesignSystem.ValueGroup, {
	    label: property.label
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Section, null, property.subProperties.filter(subProperty => !subProperty.isId).map(subProperty => {
	    const subPropertyWithPath = convertToSubProperty(property, subProperty);
	    return /*#__PURE__*/React__default['default'].createElement(ItemComponent, _extends({}, props, {
	      key: subPropertyWithPath.path,
	      property: subPropertyWithPath
	    }));
	  })));
	};

	// TODO: define ItemComponent interface
	class List$6 extends React__default['default'].PureComponent {
	  renderItems() {
	    const {
	      property,
	      ItemComponent
	    } = this.props;
	    return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, property.subProperties.filter(subProperty => !subProperty.isId).map(subProperty => {
	      const subPropertyWithPath = convertToSubProperty(property, subProperty);
	      return /*#__PURE__*/React__default['default'].createElement("div", {
	        key: subPropertyWithPath.path
	      }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Label, {
	        inline: true
	      }, `${subProperty.label}: `), /*#__PURE__*/React__default['default'].createElement(ItemComponent, _extends({}, this.props, {
	        property: subPropertyWithPath
	      })));
	    }));
	  }

	  render() {
	    const {
	      property,
	      record,
	      resource
	    } = this.props;
	    const showAction = record.recordActions.find(a => a.name === 'show');

	    if (resource.titleProperty.propertyPath === property.propertyPath && showAction) {
	      const h = new ViewHelpers();
	      const href = h.recordActionUrl({
	        resourceId: resource.id,
	        recordId: record.id,
	        actionName: 'show'
	      });
	      return /*#__PURE__*/React__default['default'].createElement(reactRouterDom.Link, {
	        to: href
	      }, this.renderItems());
	    }

	    return this.renderItems();
	  }

	}

	// import Show from './show'

	var MixedType = /*#__PURE__*/Object.freeze({
		__proto__: null,
		show: Show$7,
		edit: Edit$8,
		list: List$6
	});

	const DefaultPropertyValue = props => {
	  const {
	    property,
	    record
	  } = props;
	  const rawValue = record === null || record === void 0 ? void 0 : record.params[property.path];

	  if (typeof rawValue === 'undefined') {
	    return null;
	  }

	  if (property.availableValues) {
	    const option = property.availableValues.find(opt => opt.value === rawValue);

	    if (!option) {
	      return rawValue;
	    }

	    return /*#__PURE__*/React__default['default'].createElement(DesignSystem.Badge, null, (option === null || option === void 0 ? void 0 : option.label) || rawValue);
	  }

	  return rawValue;
	};

	class Show$6 extends React__default['default'].PureComponent {
	  render() {
	    const {
	      property
	    } = this.props;
	    return /*#__PURE__*/React__default['default'].createElement(DesignSystem.ValueGroup, {
	      label: property.label
	    }, /*#__PURE__*/React__default['default'].createElement(DefaultPropertyValue, this.props));
	  }

	}

	/* eslint-disable import/prefer-default-export */

	/**
	 * Function used in React memo to compare if previous property value and next
	 * property value are the same.
	 *
	 * @private
	 */
	const recordPropertyIsEqual = (prevProps, nextProps) => {
	  const prevValue = prevProps.record.params[prevProps.property.path];
	  const nextValue = nextProps.record.params[nextProps.property.path];
	  const prevError = prevProps.record.errors[prevProps.property.path];
	  const nextError = nextProps.record.errors[nextProps.property.path];
	  return prevValue === nextValue && prevError === nextError;
	};

	const Edit$7 = props => {
	  var _record$errors;

	  const {
	    property,
	    record
	  } = props;
	  const error = (_record$errors = record.errors) === null || _record$errors === void 0 ? void 0 : _record$errors[property.path];
	  return /*#__PURE__*/React__default['default'].createElement(DesignSystem.FormGroup, {
	    error: Boolean(error)
	  }, /*#__PURE__*/React__default['default'].createElement(PropertyLabel, {
	    property: property
	  }), property.availableValues ? /*#__PURE__*/React__default['default'].createElement(SelectEdit, props) : /*#__PURE__*/React__default['default'].createElement(TextEdit, props), /*#__PURE__*/React__default['default'].createElement(DesignSystem.FormMessage, null, error && error.message));
	};

	const SelectEdit = props => {
	  var _record$params;

	  const {
	    theme,
	    record,
	    property,
	    onChange
	  } = props;

	  if (!property.availableValues) {
	    return null;
	  }

	  const propValue = ((_record$params = record.params) === null || _record$params === void 0 ? void 0 : _record$params[property.path]) ?? '';
	  const styles = DesignSystem.selectStyles(theme);
	  const selected = property.availableValues.find(av => av.value === propValue);
	  return /*#__PURE__*/React__default['default'].createElement(Select__default['default'], _extends({
	    isClearable: true,
	    styles: styles,
	    value: selected,
	    options: property.availableValues,
	    onChange: s => onChange(property.path, (s === null || s === void 0 ? void 0 : s.value) ?? ''),
	    isDisabled: property.isDisabled
	  }, property.props));
	};

	const TextEdit = props => {
	  var _record$params2;

	  const {
	    property,
	    record,
	    onChange
	  } = props;
	  const propValue = ((_record$params2 = record.params) === null || _record$params2 === void 0 ? void 0 : _record$params2[property.path]) ?? '';
	  const [value, setValue] = React.useState(propValue);
	  React.useEffect(() => {
	    if (value !== propValue) {
	      setValue(propValue);
	    }
	  }, [propValue]);
	  return /*#__PURE__*/React__default['default'].createElement(DesignSystem.Input, _extends({
	    id: property.path,
	    name: property.path,
	    onChange: e => setValue(e.target.value),
	    onBlur: () => onChange(property.path, value) // handle clicking ENTER
	    ,
	    onKeyDown: e => e.keyCode === 13 && onChange(property.path, value),
	    value: value,
	    disabled: property.isDisabled
	  }, property.props));
	};

	var edit$6 = styled.withTheme( /*#__PURE__*/React.memo(Edit$7, recordPropertyIsEqual));

	class Filter$4 extends React__default['default'].PureComponent {
	  constructor(props) {
	    super(props);
	    this.handleInputChange = this.handleInputChange.bind(this);
	    this.handleSelectChange = this.handleSelectChange.bind(this);
	  }

	  handleInputChange(event) {
	    const {
	      onChange,
	      property
	    } = this.props;
	    onChange(property.path, event.target.value);
	  }

	  handleSelectChange(selected) {
	    const {
	      onChange,
	      property
	    } = this.props;
	    const value = selected ? selected.value : '';
	    onChange(property.path, value);
	  }

	  renderInput() {
	    const {
	      property,
	      filter,
	      theme
	    } = this.props;
	    const filterKey = `filter-${property.path}`;
	    const value = filter[property.path] || '';

	    if (property.availableValues) {
	      const selected = property.availableValues.find(av => av.value === value);
	      return /*#__PURE__*/React__default['default'].createElement(Select__default['default'], {
	        value: typeof selected === 'undefined' ? '' : selected,
	        isClearable: true,
	        options: property.availableValues,
	        styles: DesignSystem.filterStyles(theme),
	        onChange: this.handleSelectChange
	      });
	    }

	    return /*#__PURE__*/React__default['default'].createElement(DesignSystem.Input, {
	      name: filterKey,
	      onChange: this.handleInputChange,
	      value: value
	    });
	  }

	  render() {
	    const {
	      property
	    } = this.props;
	    return /*#__PURE__*/React__default['default'].createElement(DesignSystem.FormGroup, {
	      variant: "filter"
	    }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Label, null, property.label), this.renderInput());
	  }

	}

	var filter$2 = styled.withTheme(Filter$4);

	class List$5 extends React__default['default'].PureComponent {
	  render() {
	    return /*#__PURE__*/React__default['default'].createElement(DefaultPropertyValue, this.props);
	  }

	}

	var defaultType = /*#__PURE__*/Object.freeze({
		__proto__: null,
		show: Show$6,
		edit: edit$6,
		filter: filter$2,
		list: List$5
	});

	const parseValue = value => !(!value || value === 'false');

	const Edit$6 = props => {
	  const {
	    property,
	    onChange,
	    record
	  } = props;
	  const value = parseValue(record.params && record.params[property.path]);
	  const error = record.errors && record.errors[property.path];

	  const handleChange = () => {
	    if (!property.isDisabled) {
	      onChange(property.path, !value);
	    }
	  };

	  return /*#__PURE__*/React__default['default'].createElement(DesignSystem.FormGroup, {
	    error: !!error
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.CheckBox, _extends({
	    id: property.path,
	    name: property.path,
	    onChange: handleChange,
	    checked: value,
	    disabled: property.isDisabled
	  }, property.props)), /*#__PURE__*/React__default['default'].createElement(PropertyLabel, {
	    property: property,
	    props: {
	      inline: true
	    }
	  }), /*#__PURE__*/React__default['default'].createElement(DesignSystem.FormMessage, null, error && error.message));
	};

	var edit$5 = /*#__PURE__*/React.memo(Edit$6, recordPropertyIsEqual);

	var mapValue$1 = (value => {
	  if (typeof value === 'undefined') {
	    return '';
	  }

	  return value ? 'Yes' : 'No';
	});

	const BooleanPropertyValue = props => {
	  const {
	    record,
	    property,
	    resource
	  } = props;
	  const {
	    translateProperty
	  } = useTranslation();
	  const rawValue = record === null || record === void 0 ? void 0 : record.params[property.path];

	  if (typeof rawValue === 'undefined' || rawValue === '') {
	    return null;
	  }

	  const base = mapValue$1(rawValue);
	  const translation = translateProperty(`${property.path}.${rawValue}`, resource.id, {
	    defaultValue: base
	  });
	  return /*#__PURE__*/React__default['default'].createElement(DesignSystem.Badge, {
	    outline: true,
	    size: "sm"
	  }, translation);
	};

	class Show$5 extends React__default['default'].PureComponent {
	  render() {
	    const {
	      property
	    } = this.props;
	    return /*#__PURE__*/React__default['default'].createElement(DesignSystem.ValueGroup, {
	      label: property.label
	    }, /*#__PURE__*/React__default['default'].createElement(BooleanPropertyValue, this.props));
	  }

	}

	class List$4 extends React__default['default'].PureComponent {
	  render() {
	    return /*#__PURE__*/React__default['default'].createElement(BooleanPropertyValue, this.props);
	  }

	}

	class Filter$3 extends React__default['default'].PureComponent {
	  constructor(props) {
	    super(props);
	    this.handleChange = this.handleChange.bind(this);
	  }

	  handleChange(selected) {
	    const {
	      onChange,
	      property
	    } = this.props;
	    const value = selected ? selected.value : '';
	    onChange(property.path, value);
	  }

	  render() {
	    const {
	      property,
	      filter = {},
	      theme
	    } = this.props;
	    const value = typeof filter[property.path] === 'undefined' ? '' : filter[property.path];
	    const options = [{
	      value: true,
	      label: mapValue$1(true)
	    }, {
	      value: false,
	      label: mapValue$1(false)
	    }];
	    const selected = options.find(o => o.value === value);
	    return /*#__PURE__*/React__default['default'].createElement(DesignSystem.FormGroup, null, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Label, null, property.label), /*#__PURE__*/React__default['default'].createElement(Select__default['default'], {
	      value: typeof selected === 'undefined' ? '' : selected,
	      isClearable: true,
	      options: options,
	      styles: DesignSystem.filterStyles(theme),
	      onChange: this.handleChange
	    }));
	  }

	}

	var filter$1 = styled.withTheme(Filter$3);

	var boolean = /*#__PURE__*/Object.freeze({
		__proto__: null,
		edit: edit$5,
		show: Show$5,
		list: List$4,
		filter: filter$1
	});

	const Edit$5 = props => {
	  const {
	    property,
	    onChange,
	    record
	  } = props;
	  const value = record.params && record.params[property.path] || '';
	  const error = record.errors && record.errors[property.path];
	  return /*#__PURE__*/React__default['default'].createElement(DesignSystem.FormGroup, {
	    error: !!error
	  }, /*#__PURE__*/React__default['default'].createElement(PropertyLabel, {
	    property: property
	  }), /*#__PURE__*/React__default['default'].createElement(DesignSystem.DatePicker, _extends({
	    value: value,
	    disabled: property.isDisabled,
	    onChange: data => onChange(property.path, data),
	    propertyType: property.type
	  }, property.props)), /*#__PURE__*/React__default['default'].createElement(DesignSystem.FormMessage, null, error && error.message));
	};

	var edit$4 = /*#__PURE__*/React.memo(Edit$5, recordPropertyIsEqual);

	var mapValue = ((value, propertyType) => {
	  if (!value) {
	    return '';
	  }

	  const date = new Date(value);

	  if (date) {
	    return DesignSystem.formatDateProperty(date, propertyType);
	  }

	  return '';
	});

	class Show$4 extends React__default['default'].PureComponent {
	  render() {
	    const {
	      property,
	      record
	    } = this.props;
	    const value = mapValue(record.params[property.path], property.type);
	    return /*#__PURE__*/React__default['default'].createElement(DesignSystem.ValueGroup, {
	      label: property.label
	    }, value);
	  }

	}

	class List$3 extends React__default['default'].PureComponent {
	  render() {
	    const {
	      property,
	      record
	    } = this.props;
	    const value = mapValue(record.params[property.path], property.type);
	    return /*#__PURE__*/React__default['default'].createElement("span", null, value);
	  }

	}

	const PARAM_SEPARATOR$1 = '~~';

	/**
	 * Filter object wrapping up selected filters.
	 * @private
	 */
	class Filter$2 {
	  /**
	   * Changes raw nested filters to form Object<path, value>.
	   *
	   * @example
	   * const filters = {
	   *  nested: {field: 'ala'},
	   *  'dataField~~from': '2019-08-14'
	   * }
	   *
	   * const normalized = Filter.normalizeFilters(filters)
	   * // {
	   * //   'nested.filter': 'ala',
	   * //   'dataField': {from: '2019-08-14'}
	   * // }
	   *
	   *
	   * @param   {Object}  filters
	   *
	   * @return  {Object}
	   */
	  static normalizeKeys(filters) {
	    return flat__namespace.unflatten(flat__namespace.flatten(filters), {
	      delimiter: PARAM_SEPARATOR$1
	    });
	  }
	  /**
	   * @param   {Object<String,Object | String>}  filters   selected filters
	   * @param   {BaseResource}                    resource    resource which is filtered
	   */


	  constructor(filters = {}, resource) {
	    this.resource = resource;
	    const normalized = Filter$2.normalizeKeys(filters);
	    this.filters = Object.keys(normalized).reduce((memo, path) => {
	      memo[path] = {
	        path,
	        property: this.resource.property(path),
	        value: normalized[path]
	      };
	      return memo;
	    }, {});
	  }
	  /**
	   * Returns filter for a given property key
	   *
	   * @param {String} key      property key
	   * @returns {Filter.Property | undefined}
	   */


	  get(key) {
	    return this.filters[key];
	  }
	  /**
	   * Populates all filtered properties which refers to other resources
	   */


	  async populate() {
	    const keys = Object.keys(this.filters);

	    for (let index = 0; index < keys.length; index += 1) {
	      var _this$resource$decora;

	      const key = keys[index];
	      const referenceResource = (_this$resource$decora = this.resource.decorate().getPropertyByKey(key)) === null || _this$resource$decora === void 0 ? void 0 : _this$resource$decora.reference();

	      if (referenceResource) {
	        this.filters[key].populated = await referenceResource.findOne(this.filters[key].value);
	      }
	    }

	    return this;
	  }

	  reduce(callback, initial) {
	    return Object.values(this.filters).reduce(callback, initial || {});
	  }

	  isVisible() {
	    return !!Object.keys(this.filters).length;
	  }

	}

	var BackendFilter = /*#__PURE__*/Object.freeze({
		__proto__: null,
		PARAM_SEPARATOR: PARAM_SEPARATOR$1,
		Filter: Filter$2,
		'default': Filter$2
	});

	const {
	  PARAM_SEPARATOR
	} = BackendFilter;

	const Filter$1 = props => {
	  const {
	    property,
	    filter,
	    onChange
	  } = props;
	  const fromKey = `${property.path}${PARAM_SEPARATOR}from`;
	  const toKey = `${property.path}${PARAM_SEPARATOR}to`;
	  const fromValue = filter[fromKey];
	  const toValue = filter[toKey];
	  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(DesignSystem.FormGroup, {
	    variant: "filter"
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Label, null, property.label), /*#__PURE__*/React__default['default'].createElement(DesignSystem.Label, null, "- From: "), /*#__PURE__*/React__default['default'].createElement(DesignSystem.DatePicker, {
	    value: fromValue,
	    onChange: data => onChange(fromKey, data),
	    propertyType: property.type
	  }), /*#__PURE__*/React__default['default'].createElement(DesignSystem.Label, {
	    mt: "default"
	  }, "- To: "), /*#__PURE__*/React__default['default'].createElement(DesignSystem.DatePicker, {
	    value: toValue,
	    onChange: data => onChange(toKey, data),
	    propertyType: property.type
	  })));
	};

	var datetime = /*#__PURE__*/Object.freeze({
		__proto__: null,
		edit: edit$4,
		show: Show$4,
		list: List$3,
		filter: Filter$1
	});

	const Edit$4 = props => {
	  var _record$params;

	  const {
	    property,
	    record,
	    onChange
	  } = props;
	  const value = ((_record$params = record.params) === null || _record$params === void 0 ? void 0 : _record$params[property.path]) ?? '';
	  const error = record.errors && record.errors[property.path];
	  const {
	    props: propertyProps
	  } = property;
	  const {
	    quill = {},
	    ...customProps
	  } = propertyProps || {};
	  quill.theme = quill.theme || 'snow';
	  quill.modules = {
	    toolbar: DesignSystem.DefaultQuillToolbarOptions,
	    ...(quill.modules || {})
	  };
	  return /*#__PURE__*/React__default['default'].createElement(DesignSystem.FormGroup, {
	    error: Boolean(error)
	  }, /*#__PURE__*/React__default['default'].createElement(PropertyLabel, {
	    property: property
	  }), /*#__PURE__*/React__default['default'].createElement(DesignSystem.RichText, _extends({}, customProps, {
	    value: value,
	    onChange: content => onChange(property.path, content),
	    quill: quill
	  })), /*#__PURE__*/React__default['default'].createElement(DesignSystem.FormMessage, null, error === null || error === void 0 ? void 0 : error.message));
	};

	var edit$3 = /*#__PURE__*/React.memo(Edit$4, recordPropertyIsEqual);

	class Show$3 extends React__default['default'].PureComponent {
	  constructor(props) {
	    super(props);
	    this.contentRef = /*#__PURE__*/React__default['default'].createRef();
	  }

	  componentDidMount() {
	    const {
	      property,
	      record
	    } = this.props;
	    const value = record.params[property.path];
	    this.contentRef.current.innerHTML = value;
	  }

	  render() {
	    const {
	      property
	    } = this.props;
	    return /*#__PURE__*/React__default['default'].createElement(DesignSystem.ValueGroup, {
	      label: property.label
	    }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	      variant: "grey",
	      border: "default"
	    }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Text, {
	      ref: this.contentRef
	    })));
	  }

	}

	const List$2 = props => {
	  const {
	    property,
	    record
	  } = props;
	  const original = record.params[property.path] || '';
	  const value = original.substring(0, 15) + (original.length > 15 ? '...' : '');
	  return /*#__PURE__*/React__default['default'].createElement("span", null, value);
	};

	var richtext = /*#__PURE__*/Object.freeze({
		__proto__: null,
		edit: edit$3,
		show: Show$3,
		list: List$2
	});

	const Edit$3 = props => {
	  const {
	    onChange,
	    property,
	    record,
	    theme
	  } = props;
	  const {
	    reference: resourceId
	  } = property;

	  if (!resourceId) {
	    throw new Error(`Cannot reference resource in property '${property.path}'`);
	  }

	  const handleChange = selected => {
	    if (selected) {
	      onChange(property.path, selected.value, selected.record);
	    } else {
	      onChange(property.path, null);
	    }
	  };

	  const loadOptions = async inputValue => {
	    const api = new ApiClient();
	    const optionRecords = await api.searchRecords({
	      resourceId,
	      query: inputValue
	    });
	    return optionRecords.map(optionRecord => ({
	      value: optionRecord.id,
	      label: optionRecord.title,
	      record: optionRecord
	    }));
	  };

	  const error = record === null || record === void 0 ? void 0 : record.errors[property.path];
	  const selectedId = record === null || record === void 0 ? void 0 : record.params[property.path];
	  const [loadedRecord, setLoadedRecord] = React.useState();
	  const [loadingRecord, setLoadingRecord] = React.useState(0);
	  const selectedValue = (record === null || record === void 0 ? void 0 : record.populated[property.path]) ?? loadedRecord;
	  const selectedOption = selectedId && selectedValue ? {
	    value: selectedValue.id,
	    label: selectedValue.title
	  } : {
	    value: '',
	    label: ''
	  };
	  const styles = DesignSystem.selectStyles(theme);
	  React.useEffect(() => {
	    if (!selectedValue && selectedId) {
	      setLoadingRecord(c => c + 1);
	      const api = new ApiClient();
	      api.recordAction({
	        actionName: 'show',
	        resourceId,
	        recordId: selectedId
	      }).then(({
	        data
	      }) => {
	        setLoadedRecord(data.record);
	      }).finally(() => {
	        setLoadingRecord(c => c - 1);
	      });
	    }
	  }, [selectedValue, selectedId, resourceId]);
	  return /*#__PURE__*/React__default['default'].createElement(DesignSystem.FormGroup, {
	    error: Boolean(error)
	  }, /*#__PURE__*/React__default['default'].createElement(PropertyLabel, {
	    property: property
	  }), /*#__PURE__*/React__default['default'].createElement(Select__default$1['default'], _extends({
	    cacheOptions: true,
	    value: selectedOption,
	    styles: styles,
	    defaultOptions: true,
	    loadOptions: loadOptions,
	    onChange: handleChange,
	    isClearable: true,
	    isDisabled: property.isDisabled,
	    isLoading: loadingRecord
	  }, property.props)), /*#__PURE__*/React__default['default'].createElement(DesignSystem.FormMessage, null, error === null || error === void 0 ? void 0 : error.message));
	};

	var edit$2 = styled.withTheme(Edit$3);

	const StyledLink$1 = styled__default['default'](reactRouterDom.Link).withConfig({
	  displayName: "reference-value__StyledLink",
	  componentId: "flgaqr-0"
	})(["", ";padding-left:", ";padding-right:", ";"], DesignSystem.ButtonCSS, ({
	  theme
	}) => theme.space.xs, ({
	  theme
	}) => theme.space.xs);

	const ReferenceValue = props => {
	  const {
	    property,
	    record
	  } = props;
	  const h = new ViewHelpers();
	  const refId = record.params[property.path];
	  const populated = record.populated[property.path];
	  const value = populated && populated.title || refId;

	  if (!property.reference) {
	    throw new Error(`property: "${property.path}" does not have a reference`);
	  }

	  if (populated && populated.recordActions.find(a => a.name === 'show')) {
	    const href = h.recordActionUrl({
	      resourceId: property.reference,
	      recordId: refId,
	      actionName: 'show'
	    });
	    return /*#__PURE__*/React__default['default'].createElement(StyledLink$1, {
	      to: href
	    }, value);
	  }

	  return /*#__PURE__*/React__default['default'].createElement("span", null, value);
	};

	class Show$2 extends React__default['default'].PureComponent {
	  render() {
	    const {
	      property,
	      record
	    } = this.props;
	    return /*#__PURE__*/React__default['default'].createElement(DesignSystem.ValueGroup, {
	      label: property.label
	    }, /*#__PURE__*/React__default['default'].createElement(ReferenceValue, {
	      property: property,
	      record: record
	    }));
	  }

	}

	class List$1 extends React__default['default'].PureComponent {
	  render() {
	    const {
	      property,
	      record
	    } = this.props;
	    return /*#__PURE__*/React__default['default'].createElement(ReferenceValue, {
	      property: property,
	      record: record
	    });
	  }

	}

	class Filter extends React__default['default'].PureComponent {
	  constructor(props) {
	    super(props);
	    this.api = new ApiClient();
	    this.options = [];
	    this.loadOptions = this.loadOptions.bind(this);
	    this.handleChange = this.handleChange.bind(this);
	  }

	  handleChange(selected) {
	    const {
	      onChange,
	      property
	    } = this.props;
	    onChange(property.path, selected ? selected.value : '');
	  }

	  async loadOptions(inputValue) {
	    const {
	      property
	    } = this.props;
	    const records = await this.api.searchRecords({
	      resourceId: property.reference,
	      query: inputValue
	    });
	    this.options = records.map(r => ({
	      value: r.id,
	      label: r.title
	    }));
	    return this.options;
	  }

	  render() {
	    const {
	      property,
	      filter,
	      theme
	    } = this.props;
	    const value = typeof filter[property.path] === 'undefined' ? '' : filter[property.path];
	    const selected = (this.options || []).find(o => o.value === value);
	    return /*#__PURE__*/React__default['default'].createElement(DesignSystem.FormGroup, null, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Label, null, property.label), /*#__PURE__*/React__default['default'].createElement(Select__default$1['default'], {
	      value: typeof selected === 'undefined' ? '' : selected,
	      isClearable: true,
	      cacheOptions: true,
	      styles: DesignSystem.filterStyles(theme),
	      loadOptions: this.loadOptions,
	      onChange: this.handleChange,
	      defaultOptions: true
	    }));
	  }

	}

	var filter = styled.withTheme(Filter);

	var reference = /*#__PURE__*/Object.freeze({
		__proto__: null,
		edit: edit$2,
		show: Show$2,
		list: List$1,
		filter: filter
	});

	class Show$1 extends React__default['default'].PureComponent {
	  render() {
	    const {
	      property,
	      record
	    } = this.props;
	    const value = record.params[property.path] || '';
	    return /*#__PURE__*/React__default['default'].createElement(DesignSystem.ValueGroup, {
	      label: property.label
	    }, value.split(/(?:\r\n|\r|\n)/g).map((line, i) =>
	    /*#__PURE__*/
	    // eslint-disable-next-line react/no-array-index-key
	    React__default['default'].createElement(React__default['default'].Fragment, {
	      key: i
	    }, line, /*#__PURE__*/React__default['default'].createElement("br", null))));
	  }

	}

	const Edit$2 = props => {
	  var _record$params, _record$errors;

	  const {
	    onChange,
	    property,
	    record
	  } = props;
	  const propValue = ((_record$params = record.params) === null || _record$params === void 0 ? void 0 : _record$params[property.path]) ?? '';
	  const [value, setValue] = React.useState(propValue);
	  const error = (_record$errors = record.errors) === null || _record$errors === void 0 ? void 0 : _record$errors[property.path];
	  React.useEffect(() => {
	    if (value !== propValue) {
	      setValue(propValue);
	    }
	  }, [propValue]);
	  return /*#__PURE__*/React__default['default'].createElement(DesignSystem.FormGroup, {
	    error: Boolean(error)
	  }, /*#__PURE__*/React__default['default'].createElement(PropertyLabel, {
	    property: property
	  }), /*#__PURE__*/React__default['default'].createElement(DesignSystem.Input, _extends({
	    as: "textarea",
	    rows: (value.match(/\n/g) || []).length + 1,
	    id: property.path,
	    name: property.path,
	    onChange: e => setValue(e.target.value),
	    onBlur: () => onChange(property.path, value),
	    value: value,
	    disabled: property.isDisabled
	  }, property.props)), /*#__PURE__*/React__default['default'].createElement(DesignSystem.FormMessage, null, error && error.message));
	};

	var edit$1 = /*#__PURE__*/React.memo(Edit$2, recordPropertyIsEqual);

	var textarea = /*#__PURE__*/Object.freeze({
		__proto__: null,
		show: Show$1,
		edit: edit$1
	});

	const Edit$1 = props => {
	  const {
	    property,
	    record,
	    onChange
	  } = props;
	  const propValue = record.params[property.path];
	  const [value, setValue] = React.useState(propValue);
	  const error = record.errors && record.errors[property.path];
	  const [isInput, setIsInput] = React.useState(false);
	  React.useEffect(() => {
	    if (value !== propValue) {
	      setValue(propValue);
	    }
	  }, [propValue]);
	  return /*#__PURE__*/React__default['default'].createElement(DesignSystem.FormGroup, {
	    error: !!error
	  }, /*#__PURE__*/React__default['default'].createElement(PropertyLabel, {
	    property: property
	  }), /*#__PURE__*/React__default['default'].createElement(DesignSystem.InputGroup, null, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Input, _extends({
	    type: isInput ? 'input' : 'password',
	    className: "input",
	    id: property.path,
	    name: property.path,
	    onChange: event => setValue(event.target.value),
	    onBlur: () => onChange(property.path, value),
	    onKeyDown: e => e.keyCode === 13 && onChange(property.path, value),
	    value: value ?? '',
	    disabled: property.isDisabled
	  }, property.props)), /*#__PURE__*/React__default['default'].createElement(DesignSystem.Button, {
	    variant: isInput ? 'primary' : 'text',
	    type: "button",
	    size: "icon",
	    onClick: () => setIsInput(!isInput)
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Icon, {
	    icon: "View"
	  }))), /*#__PURE__*/React__default['default'].createElement(DesignSystem.FormMessage, null, error && error.message));
	};

	var edit = /*#__PURE__*/React.memo(Edit$1, recordPropertyIsEqual);

	/* eslint-disable import/prefer-default-export */

	var password = /*#__PURE__*/Object.freeze({
		__proto__: null,
		edit: edit
	});

	let globalAny = {};

	try {
	  globalAny = window;
	} catch (error) {
	  if (error.message !== 'window is not defined') {
	    throw error;
	  }
	}

	const types = {
	  textarea,
	  boolean,
	  datetime,
	  reference,
	  password,
	  date: datetime,
	  richtext,
	  string: defaultType,
	  number: defaultType,
	  float: defaultType,
	  mixed: null
	};
	/**
	 * @load ./base-property-component.doc.md
	 * @component
	 * @name BasePropertyComponent
	 * @subcategory Application
	 * @class
	 * @hideconstructor
	 */

	const BasePropertyComponent = props => {
	  const {
	    property: baseProperty,
	    resource,
	    record,
	    filter,
	    where,
	    onChange
	  } = props;
	  const property = React.useMemo(() => ({ ...baseProperty,
	    // we fill the path if it is not there. That is why all the actual Component Renderers are
	    // called with the path set to this root path. Next mixed and array components adds to this
	    // path either index (for array) or subProperty name.
	    path: baseProperty.path || baseProperty.propertyPath
	  }), [baseProperty]);
	  const testId = `property-${where}-${property.path}`;
	  let Component = types[property.type] && types[property.type][where] || defaultType[where];

	  if (property.components && property.components[where]) {
	    const component = property.components[where];

	    if (!component) {
	      throw new Error(`there is no "${property.path}.components.${where}"`);
	    }

	    Component = globalAny.AdminBro.UserComponents[component];
	    return /*#__PURE__*/React__default['default'].createElement(ErrorBoundary, null, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	      "data-testid": testId
	    }, /*#__PURE__*/React__default['default'].createElement(Component, {
	      property: property,
	      resource: resource,
	      record: record,
	      filter: filter,
	      onChange: onChange,
	      where: where
	    })));
	  }

	  const Array = ArrayType[where];
	  const Mixed = MixedType[where];

	  if (baseProperty.isArray) {
	    if (!Array) {
	      return /*#__PURE__*/React__default['default'].createElement("div", null);
	    }

	    return /*#__PURE__*/React__default['default'].createElement(Array, _extends({}, props, {
	      property: property,
	      ItemComponent: BasePropertyComponent,
	      testId: testId
	    }));
	  }

	  if (baseProperty.type === 'mixed') {
	    if (!Mixed) {
	      return /*#__PURE__*/React__default['default'].createElement("div", null);
	    }

	    return /*#__PURE__*/React__default['default'].createElement(Mixed, _extends({}, props, {
	      property: property,
	      ItemComponent: BasePropertyComponent,
	      testId: testId
	    }));
	  }

	  return /*#__PURE__*/React__default['default'].createElement(ErrorBoundary, null, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	    "data-testid": testId
	  }, /*#__PURE__*/React__default['default'].createElement(Component, {
	    property: property,
	    resource: resource,
	    record: record,
	    filter: filter,
	    onChange: onChange,
	    where: where
	  })));
	};

	function camelizePropertyType(type) {
	  return {
	    Edit: type.edit,
	    Show: type.show,
	    List: type.list,
	    Filter: type.filter
	  };
	}

	const BasePropertyComponentExtended = Object.assign(BasePropertyComponent, {
	  DefaultType: camelizePropertyType(defaultType),
	  Boolean: camelizePropertyType(boolean),
	  DateTime: camelizePropertyType(datetime),
	  RichText: camelizePropertyType(richtext),
	  Reference: camelizePropertyType(reference),
	  TextArea: camelizePropertyType(textarea),
	  Password: camelizePropertyType(password)
	});

	const BreadcrumbLink = styled__default['default'](reactRouterDom.Link).withConfig({
	  displayName: "breadcrumbs__BreadcrumbLink",
	  componentId: "yjyesi-0"
	})(["color:", ";font-family:", ";line-height:", ";font-size:", ";text-decoration:none;&:hover{color:", ";}&:after{content:'/';padding:0 ", ";}&:last-child{&:after{content:'';}}"], ({
	  theme
	}) => theme.colors.grey40, ({
	  theme
	}) => theme.font, ({
	  theme
	}) => theme.lineHeights.default, ({
	  theme
	}) => theme.fontSizes.default, ({
	  theme
	}) => theme.colors.primary100, ({
	  theme
	}) => theme.space.default);
	/**
	 * @memberof Breadcrumbs
	 */

	/**
	 * @component
	 * @private
	 */
	const Breadcrumbs = props => {
	  const {
	    resource,
	    record,
	    actionName
	  } = props;
	  const action = resource.actions.find(a => a.name === actionName);
	  const h = new ViewHelpers();
	  return /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	    flexGrow: 1,
	    className: DesignSystem.cssClass('Breadcrumbs')
	  }, /*#__PURE__*/React__default['default'].createElement(BreadcrumbLink, {
	    to: h.dashboardUrl()
	  }, "Dashboard"), /*#__PURE__*/React__default['default'].createElement(BreadcrumbLink, {
	    to: resource.href ? resource.href : '/',
	    className: record ? 'is-active' : ''
	  }, resource.name), action && action.name !== 'list' && /*#__PURE__*/React__default['default'].createElement(BreadcrumbLink, {
	    to: "#"
	  }, action.label));
	};

	const actionsToButtonGroup = options => {
	  const {
	    actions,
	    params,
	    handleClick
	  } = options;
	  const buttons = actions.map(action => {
	    const href = actionHref(action, params);
	    return {
	      icon: action.icon,
	      label: action.label,
	      variant: action.variant,
	      source: action,
	      href: href || undefined,
	      // when href is not defined - handle click should also be not defined
	      // This prevents from "cursor: pointer;"
	      onClick: href ? handleClick : undefined,
	      'data-testid': buildActionTestId(action),
	      buttons: []
	    };
	  }); // nesting buttons

	  const buttonsMap = buttons.reduce((memo, button) => {
	    const action = button.source;

	    if (action.parent) {
	      const parent = memo[action.parent] || buttons.find(btn => btn.source.name === action.parent) || {
	        label: action.parent
	      };
	      parent.buttons = parent.buttons || [];
	      parent.buttons.push(button);
	      return { ...memo,
	        [action.parent]: parent
	      };
	    }

	    return { ...memo,
	      [button.source.name]: button
	    };
	  }, {});
	  return Object.values(buttonsMap);
	};

	const StyledLink = styled__default['default'](({
	  rounded,
	  ...rest
	}) => /*#__PURE__*/React__default['default'].createElement(reactRouterDom.Link, rest)).withConfig({
	  displayName: "styled-back-button__StyledLink",
	  componentId: "uyhg9d-0"
	})(["", ""], DesignSystem.ButtonCSS);
	const h$1 = new ViewHelpers();
	const StyledBackButton = props => {
	  const {
	    resourceId,
	    showInDrawer
	  } = props;
	  const cssCloseIcon = showInDrawer ? 'ChevronRight' : 'ChevronLeft';
	  return /*#__PURE__*/React__default['default'].createElement(StyledLink, {
	    size: "icon",
	    to: h$1.resourceUrl({
	      resourceId,
	      search: window.location.search
	    }),
	    rounded: true,
	    mr: "lg",
	    type: "button"
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Icon, {
	    icon: cssCloseIcon
	  }));
	};

	/* eslint-disable jsx-a11y/anchor-is-valid */
	/**
	 * Header of an action. It renders Action name with buttons for all the actions.
	 *
	 * ### Usage
	 *
	 * ```
	 * import { ActionHeader } from 'admin-bro'
	 * ```
	 *
	 * @component
	 * @subcategory Application
	 */

	const ActionHeaderOriginal = props => {
	  const {
	    resource,
	    toggleFilter,
	    actionPerformed,
	    record,
	    action,
	    tag,
	    omitActions
	  } = props;
	  const {
	    translateButton
	  } = useTranslation();
	  const history = reactRouter.useHistory();
	  const actionResponseHandler = useActionResponseHandler(actionPerformed);

	  if (action.hideActionHeader) {
	    return null;
	  }

	  const resourceId = resource.id;
	  const params = {
	    resourceId,
	    recordId: record === null || record === void 0 ? void 0 : record.id
	  };

	  const handleActionClick = (event, sourceAction) => buildActionClickHandler({
	    action: sourceAction,
	    params,
	    actionResponseHandler,
	    push: history.push
	  })(event);

	  const actionButtons = actionsToButtonGroup({
	    actions: record ? record.recordActions.filter(ra => !action || action.name !== ra.name) // only new action should be seen in regular "Big" actions place
	    : resource.resourceActions.filter(ra => ra.name === 'new' && (!action || action.name !== ra.name)),
	    params,
	    handleClick: handleActionClick
	  });

	  if (toggleFilter) {
	    actionButtons.push({
	      label: translateButton('filter', resource.id),
	      onClick: toggleFilter,
	      icon: 'SettingsAdjust'
	    });
	  } // list and new actions are special and are are always


	  const customResourceButtons = actionsToButtonGroup({
	    actions: resource.resourceActions.filter(ra => !['list', 'new'].includes(ra.name)),
	    params: {
	      resourceId
	    },
	    handleClick: handleActionClick
	  });
	  const title = action ? action.label : resource.name;
	  const isList = action && action.name === 'list';
	  const listAction = resource.resourceActions.find(ra => ra.name === 'list'); // styled which differs if action header is in the drawer or not

	  const cssIsRootFlex = !action.showInDrawer;
	  const cssHeaderMT = action.showInDrawer ? '' : 'lg';
	  const cssActionsMB = action.showInDrawer ? 'xl' : 'default';
	  const CssHComponent = action.showInDrawer ? DesignSystem.H3 : DesignSystem.H2;
	  return /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	    className: DesignSystem.cssClass('ActionHeader')
	  }, action.showInDrawer ? '' : /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	    flex: true,
	    flexDirection: "row",
	    px: ['default', 0]
	  }, /*#__PURE__*/React__default['default'].createElement(Breadcrumbs, {
	    resource: resource,
	    actionName: action.name,
	    record: record
	  }), /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	    flexShrink: 0
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.ButtonGroup, {
	    size: "sm",
	    rounded: true,
	    buttons: customResourceButtons
	  }))), /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	    display: ['block', cssIsRootFlex ? 'flex' : 'block']
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	    mt: cssHeaderMT,
	    flexGrow: 1,
	    px: ['default', 0]
	  }, /*#__PURE__*/React__default['default'].createElement(CssHComponent, {
	    mb: "lg"
	  }, !isList && listAction ? /*#__PURE__*/React__default['default'].createElement(StyledBackButton, {
	    resourceId: resourceId,
	    showInDrawer: action.showInDrawer
	  }) : '', title, tag ? /*#__PURE__*/React__default['default'].createElement(DesignSystem.Badge, {
	    variant: "primary",
	    ml: "default"
	  }, tag) : '')), omitActions ? '' : /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	    mt: "xl",
	    mb: cssActionsMB,
	    flexShrink: 0
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.ButtonGroup, {
	    buttons: actionButtons
	  }))));
	};
	const ActionHeader = allowOverride(ActionHeaderOriginal, 'ActionHeader');

	const LayoutElementRenderer = props => {
	  const {
	    layoutElement,
	    resource,
	    where,
	    record,
	    onChange
	  } = props;
	  const {
	    props: layoutProps,
	    properties: propertyNames,
	    layoutElements: innerLayoutElements,
	    component
	  } = layoutElement;
	  const {
	    children,
	    ...other
	  } = layoutProps;
	  const properties = propertyNames.map(name => resource.properties[name]);
	  const Component = AdminBro.UserComponents[component] || DesignSystem__namespace[component];

	  if (!Component) {
	    return /*#__PURE__*/React__default['default'].createElement(DesignSystem__namespace.MessageBox, {
	      size: "sm",
	      message: "Javascript Error",
	      variant: "danger",
	      py: "xl"
	    }, "There is no component by the name of", /*#__PURE__*/React__default['default'].createElement(DesignSystem__namespace.Badge, {
	      size: "sm",
	      variant: "danger",
	      mx: "default"
	    }, component), "in @admin-bro/design-system. Change", /*#__PURE__*/React__default['default'].createElement(DesignSystem__namespace.Badge, {
	      size: "sm",
	      variant: "danger",
	      mx: "default"
	    }, `@${component}`), "to available component like @Header");
	  }

	  return /*#__PURE__*/React__default['default'].createElement(Component, _extends({}, other, {
	    props: props
	  }), properties.map(property => /*#__PURE__*/React__default['default'].createElement(DesignSystem__namespace.Box, {
	    flexGrow: 1,
	    key: property.propertyPath
	  }, /*#__PURE__*/React__default['default'].createElement(BasePropertyComponentExtended, {
	    key: property.propertyPath,
	    where: where,
	    property: property,
	    resource: resource,
	    record: record,
	    onChange: onChange
	  }))), innerLayoutElements.map((innerLayoutElement, i) => /*#__PURE__*/React__default['default'].createElement(LayoutElementRenderer, _extends({}, props, {
	    // eslint-disable-next-line react/no-array-index-key
	    key: i,
	    layoutElement: innerLayoutElement
	  }))), children);
	};

	const Button = allowOverride(DesignSystem__namespace.Button, 'Button');
	const Table = allowOverride(DesignSystem__namespace.Table, 'Table');
	const TableHead = allowOverride(DesignSystem__namespace.TableHead, 'TableHead');
	const TableBody = allowOverride(DesignSystem__namespace.TableBody, 'TableBody');
	const TableRow = allowOverride(DesignSystem__namespace.TableRow, 'TableRow');
	const TableCell = allowOverride(DesignSystem__namespace.TableCell, 'TableCell'); // const overridableComponents: OverridableComponent[] = [

	const submitForm = ({
	  props,
	  loading
	}) => {
	  const {
	    resource,
	    action
	  } = props;
	  const {
	    translateButton
	  } = useTranslation();
	  const {
	    submitForm
	  } = (action === null || action === void 0 ? void 0 : action.custom) ?? {};

	  if (submitForm === false) {
	    return '';
	  }

	  const CustomSubmitForm = AdminBro.UserComponents[submitForm];

	  if (CustomSubmitForm) {
	    return /*#__PURE__*/React__default['default'].createElement(CustomSubmitForm, _extends({}, props, {
	      loading: loading
	    }));
	  }

	  return /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, null, /*#__PURE__*/React__default['default'].createElement(Button, {
	    variant: "primary",
	    size: "lg",
	    type: "submit",
	    "data-testid": "button-save"
	  }, loading ? /*#__PURE__*/React__default['default'].createElement(DesignSystem.Icon, {
	    icon: "Fade",
	    spin: true
	  }) : null, translateButton('save', resource.id)));
	};

	const New = props => {
	  const {
	    record: initialRecord,
	    resource,
	    action
	  } = props;
	  const useRecordHook = useRecord(initialRecord, resource.id);
	  const {
	    record,
	    handleChange,
	    submit: handleSubmit,
	    loading,
	    setRecord
	  } = useRecordHook;
	  const history = reactRouter.useHistory();
	  React.useEffect(() => {
	    if (initialRecord) {
	      setRecord(initialRecord);
	    }
	  }, [initialRecord]);

	  const submit = event => {
	    event.preventDefault();
	    handleSubmit().then(response => {
	      if (response.data.redirectUrl) {
	        history.push(appendForceRefresh(response.data.redirectUrl));
	      } // if record has id === has been created


	      if (response.data.record.id) {
	        handleChange({
	          params: {},
	          populated: {},
	          errors: {}
	        });
	      }
	    });
	    return false;
	  };

	  const content = /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, null, action !== null && action !== void 0 && action.showInDrawer ? /*#__PURE__*/React__default['default'].createElement(ActionHeader, props) : null, action.layout ? action.layout.map((layoutElement, i) => /*#__PURE__*/React__default['default'].createElement(LayoutElementRenderer // eslint-disable-next-line react/no-array-index-key
	  , _extends({
	    key: i,
	    layoutElement: layoutElement
	  }, props, {
	    where: "edit",
	    onChange: handleChange,
	    record: record,
	    useRecordHook: useRecordHook
	  }))) : resource.editProperties.map(property => /*#__PURE__*/React__default['default'].createElement(BasePropertyComponentExtended, {
	    key: property.propertyPath,
	    where: "edit",
	    onChange: handleChange,
	    property: property,
	    resource: resource,
	    record: record,
	    useRecordHook: useRecordHook
	  })));
	  return /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	    as: "form",
	    onSubmit: submit,
	    flex: true,
	    flexGrow: 1,
	    flexDirection: "column"
	  }, content, submitForm({
	    props,
	    loading
	  }));
	};

	const Edit = props => {
	  const {
	    record: initialRecord,
	    resource,
	    action
	  } = props;
	  const useRecordHook = useRecord(initialRecord, resource.id);
	  const {
	    record,
	    handleChange,
	    submit: handleSubmit,
	    loading,
	    setRecord
	  } = useRecordHook;
	  const history = reactRouter.useHistory();
	  React.useEffect(() => {
	    if (initialRecord) {
	      setRecord(initialRecord);
	    }
	  }, [initialRecord]);

	  const submit = event => {
	    event.preventDefault();
	    handleSubmit().then(response => {
	      if (response.data.redirectUrl) {
	        history.push(appendForceRefresh(response.data.redirectUrl));
	      }
	    });
	    return false;
	  };

	  return /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	    as: "form",
	    onSubmit: submit,
	    flex: true,
	    flexGrow: 1,
	    flexDirection: "column"
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, null, action !== null && action !== void 0 && action.showInDrawer ? /*#__PURE__*/React__default['default'].createElement(ActionHeader, props) : null, action.layout ? action.layout.map((layoutElement, i) => /*#__PURE__*/React__default['default'].createElement(LayoutElementRenderer // eslint-disable-next-line react/no-array-index-key
	  , _extends({
	    key: i,
	    layoutElement: layoutElement
	  }, props, {
	    where: "edit",
	    onChange: handleChange,
	    record: record,
	    useRecordHook: useRecordHook
	  }))) : resource.editProperties.map(property => /*#__PURE__*/React__default['default'].createElement(BasePropertyComponentExtended, {
	    key: property.propertyPath,
	    where: "edit",
	    onChange: handleChange,
	    property: property,
	    resource: resource,
	    record: record,
	    useRecordHook: useRecordHook
	  }))), submitForm({
	    props,
	    loading
	  }));
	};

	/**
	 * @name ShowAction
	 * @category Actions
	 * @description Shows a given record.
	 * @component
	 * @private
	 */

	const Show = props => {
	  const {
	    resource,
	    record,
	    action
	  } = props;
	  const properties = resource.showProperties; // TODO: update to use theme instead of className

	  return /*#__PURE__*/React__default['default'].createElement(DesignSystem.DrawerContent, {
	    className: "action-show"
	  }, action !== null && action !== void 0 && action.showInDrawer ? /*#__PURE__*/React__default['default'].createElement(ActionHeader, props) : null, action.layout ? action.layout.map((layoutElement, i) => /*#__PURE__*/React__default['default'].createElement(LayoutElementRenderer // eslint-disable-next-line react/no-array-index-key
	  , _extends({
	    key: i,
	    layoutElement: layoutElement
	  }, props, {
	    where: "show"
	  }))) : properties.map(property => /*#__PURE__*/React__default['default'].createElement(BasePropertyComponentExtended, {
	    key: property.propertyPath,
	    where: "show",
	    property: property,
	    resource: resource,
	    record: record
	  })));
	};

	const display = isTitle => [isTitle ? 'table-cell' : 'none', isTitle ? 'table-cell' : 'none', 'table-cell', 'table-cell'];

	const RecordInList = props => {
	  const {
	    resource,
	    record: recordFromProps,
	    actionPerformed,
	    isLoading,
	    onSelect,
	    isSelected
	  } = props;
	  const [record, setRecord] = React.useState(recordFromProps);
	  const history = reactRouterDom.useHistory();
	  const handleActionCallback = React.useCallback(actionResponse => {
	    if (actionResponse.record && !actionResponse.redirectUrl) {
	      setRecord(mergeRecordResponse(record, actionResponse));
	    } else if (actionPerformed) {
	      actionPerformed(actionResponse);
	    }
	  }, [actionPerformed, record]);
	  const actionResponseHandler = useActionResponseHandler(handleActionCallback);
	  React.useEffect(() => {
	    setRecord(recordFromProps);
	  }, [recordFromProps]);
	  const {
	    recordActions
	  } = record;
	  const show = record.recordActions.find(({
	    name
	  }) => name === 'show');
	  const edit = record.recordActions.find(({
	    name
	  }) => name === 'edit');
	  const action = show || edit;

	  const handleClick = event => {
	    const targetTagName = event.target.tagName.toLowerCase();

	    if (action && targetTagName !== 'a' && targetTagName !== 'button' && targetTagName !== 'svg') {
	      buildActionClickHandler({
	        action,
	        params: {
	          resourceId: resource.id,
	          recordId: record.id
	        },
	        actionResponseHandler,
	        push: history.push
	      })(event);
	    }
	  };

	  const actionParams = {
	    resourceId: resource.id,
	    recordId: record.id
	  };

	  const handleActionClick = (event, sourceAction) => buildActionClickHandler({
	    action: sourceAction,
	    params: actionParams,
	    actionResponseHandler,
	    push: history.push
	  })(event);

	  const buttons = [{
	    icon: 'OverflowMenuHorizontal',
	    variant: 'light',
	    label: undefined,
	    'data-testid': 'actions-dropdown',
	    buttons: actionsToButtonGroup({
	      actions: recordActions,
	      params: actionParams,
	      handleClick: handleActionClick
	    })
	  }];
	  return /*#__PURE__*/React__default['default'].createElement(TableRow, {
	    onClick: handleClick,
	    "data-id": record.id
	  }, /*#__PURE__*/React__default['default'].createElement(TableCell, {
	    className: isSelected ? 'selected' : 'not-selected'
	  }, onSelect && record.bulkActions.length ? /*#__PURE__*/React__default['default'].createElement(DesignSystem.CheckBox, {
	    onChange: () => onSelect(record),
	    checked: isSelected
	  }) : null), resource.listProperties.map(property => /*#__PURE__*/React__default['default'].createElement(TableCell, {
	    style: {
	      cursor: 'pointer'
	    },
	    key: property.propertyPath,
	    "data-property-name": property.propertyPath,
	    display: display(property.isTitle)
	  }, isLoading ? /*#__PURE__*/React__default['default'].createElement(DesignSystem.Placeholder, {
	    style: {
	      height: 14
	    }
	  }) : /*#__PURE__*/React__default['default'].createElement(BasePropertyComponentExtended, {
	    key: property.propertyPath,
	    where: "list",
	    property: property,
	    resource: resource,
	    record: record
	  }))), /*#__PURE__*/React__default['default'].createElement(TableCell, {
	    key: "options"
	  }, recordActions.length ? /*#__PURE__*/React__default['default'].createElement(DesignSystem.ButtonGroup, {
	    buttons: buttons
	  }) : ''));
	};

	class SortLinkOriginal extends React__default['default'].PureComponent {
	  constructor(props) {
	    super(props);
	    this.isActive = this.isActive.bind(this);
	  }

	  isActive() {
	    const {
	      sortBy,
	      property
	    } = this.props;
	    return sortBy === property.propertyPath;
	  }

	  render() {
	    const {
	      property,
	      location,
	      direction
	    } = this.props;
	    const query = new URLSearchParams(location.search);
	    const oppositeDirection = this.isActive() && direction === 'asc' ? 'desc' : 'asc';
	    const sortedByIcon = `Caret${direction === 'asc' ? 'Up' : 'Down'}`;
	    query.set('direction', oppositeDirection);
	    query.set('sortBy', property.propertyPath);
	    return /*#__PURE__*/React__default['default'].createElement(reactRouterDom.NavLink, {
	      to: {
	        search: query.toString()
	      },
	      className: DesignSystem.cssClass('SortLink')
	    }, property.label, this.isActive() ? /*#__PURE__*/React__default['default'].createElement(DesignSystem.Icon, {
	      icon: sortedByIcon,
	      color: "primary100",
	      ml: "default"
	    }) : '');
	  }

	}

	const SortLink = allowOverride(reactRouterDom.withRouter(SortLinkOriginal), 'SortLink');

	const PropertyHeader = props => {
	  const {
	    property,
	    titleProperty,
	    display
	  } = props;
	  const isMain = property.propertyPath === titleProperty.propertyPath;
	  return /*#__PURE__*/React__default['default'].createElement(DesignSystem.TableCell, {
	    className: isMain ? 'main' : undefined,
	    display: display
	  }, property.isSortable ? /*#__PURE__*/React__default['default'].createElement(SortLink, props) : property.label);
	};

	/**
	 * @memberof RecordsTableHeader
	 * @alias RecordsTableHeaderProps
	 */

	/**
	 * Prints `thead` section for table with records.
	 *
	 * ```
	 * import { RecordsTableHeader } from 'admin-bro'
	 * ```
	 *
	 * @component
	 * @subcategory Application
	 * @example <caption>List with 2 properties</caption>
	 * const properties = [{
	 *   label: 'First Name',
	 *   name: 'firstName',
	 *   isSortable: true,
	 * }, {
	 *   label: 'Last Name',
	 *   name: 'lastName',
	 * }]
	 * return (
	 * <Box py="xl">
	 *   <Table>
	 *    <RecordsTableHeader
	 *      properties={properties}
	 *      titleProperty={properties[0]}
	 *      sortBy={'firstName'}
	 *      direction={'asc'}
	 *    />
	 *    <TableBody>
	 *      <TableRow>
	 *        <TableCell>John</TableCell>
	 *        <TableCell>Doe</TableCell>
	 *        <TableCell></TableCell>
	 *      </TableRow>
	 *      <TableRow>
	 *        <TableCell>Max</TableCell>
	 *        <TableCell>Kodaly</TableCell>
	 *        <TableCell></TableCell>
	 *      </TableRow>
	 *    </TableBody>
	 *   </Table>
	 * </Box>
	 * )
	 */
	const RecordsTableHeader = props => {
	  const {
	    titleProperty,
	    properties,
	    sortBy,
	    direction,
	    onSelectAll,
	    selectedAll
	  } = props;
	  return /*#__PURE__*/React__default['default'].createElement(TableHead, null, /*#__PURE__*/React__default['default'].createElement(TableRow, null, /*#__PURE__*/React__default['default'].createElement(TableCell, null, onSelectAll ? /*#__PURE__*/React__default['default'].createElement(DesignSystem.CheckBox, {
	    style: {
	      marginLeft: 5
	    },
	    onChange: () => onSelectAll(),
	    checked: selectedAll
	  }) : null), properties.map(property => /*#__PURE__*/React__default['default'].createElement(PropertyHeader, {
	    display: display(property.isTitle),
	    key: property.propertyPath,
	    titleProperty: titleProperty,
	    property: property,
	    sortBy: sortBy,
	    direction: direction
	  })), /*#__PURE__*/React__default['default'].createElement(TableCell, {
	    key: "actions",
	    style: {
	      width: 80
	    }
	  })));
	};

	/* eslint-disable no-undef */
	/**
	 * @alias ActionButtonProps
	 * @memberof ActionButton
	 */

	/**
	 * Renders Button which redirects to given action
	 *
	 * ### Usage
	 *
	 * ```
	 * import { ActionButton } from 'admin-bro'
	 * ```
	 *
	 * @component
	 * @subcategory Application
	 */
	const ActionButton = props => {
	  const {
	    children,
	    action,
	    actionPerformed,
	    resourceId,
	    recordId,
	    recordIds
	  } = props;
	  const {
	    href,
	    handleClick
	  } = useAction(action, {
	    resourceId,
	    recordId,
	    recordIds
	  }, actionPerformed);

	  if (!action) {
	    return null;
	  }

	  const firstChild = React__default['default'].Children.toArray(children)[0];

	  if (!firstChild || typeof firstChild === 'string' || typeof firstChild === 'number' || typeof firstChild === 'boolean') {
	    throw new Error('ActionButton has to have one child');
	  }

	  const WrappedElement = /*#__PURE__*/React__default['default'].cloneElement(firstChild, {
	    onClick: handleClick,
	    'data-testid': buildActionTestId(action),
	    href
	  });
	  return WrappedElement;
	}; // TODO - remove this hack

	const NoRecordsOriginal = props => {
	  const {
	    resource
	  } = props;
	  const {
	    translateButton,
	    translateMessage
	  } = useTranslation();
	  const canCreate = resource.resourceActions.find(a => a.name === 'new');
	  return /*#__PURE__*/React__default['default'].createElement(DesignSystem.InfoBox, {
	    title: translateMessage('noRecords', resource.id)
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Text, {
	    mb: "xxl"
	  }, translateMessage('noRecordsInResource', resource.id)), canCreate ? /*#__PURE__*/React__default['default'].createElement(ActionButton, {
	    action: canCreate,
	    resourceId: resource.id
	  }, /*#__PURE__*/React__default['default'].createElement(Button, {
	    variant: "primary"
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Icon, {
	    icon: "Add"
	  }), translateButton('createFirstRecord', resource.id))) : '');
	}; // This hack prevents rollup from throwing an error


	const NoRecords = allowOverride(NoRecordsOriginal, 'NoRecords');

	const getBulkActionsFromRecords = records => {
	  const actions = Object.values(records.reduce((memo, record) => ({ ...memo,
	    ...record.bulkActions.reduce((actionsMemo, action) => ({ ...actionsMemo,
	      [action.name]: action
	    }), {})
	  }), {}));
	  return actions;
	};

	const SelectedRecords = props => {
	  const {
	    resource,
	    selectedRecords
	  } = props;
	  const {
	    translateLabel
	  } = useTranslation();
	  const history = reactRouter.useHistory();
	  const actionResponseHandler = useActionResponseHandler();

	  if (!selectedRecords || !selectedRecords.length) {
	    return null;
	  }

	  const params = {
	    resourceId: resource.id,
	    recordIds: selectedRecords.map(records => records.id)
	  };

	  const handleActionClick = (event, sourceAction) => buildActionClickHandler({
	    action: sourceAction,
	    params,
	    actionResponseHandler,
	    push: history.push
	  })(event);

	  const bulkButtons = actionsToButtonGroup({
	    actions: getBulkActionsFromRecords(selectedRecords),
	    params,
	    handleClick: handleActionClick
	  });
	  return /*#__PURE__*/React__default['default'].createElement(DesignSystem.TableCaption, null, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	    flex: true,
	    py: "sm",
	    alignItems: "center"
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Title, {
	    mr: "lg"
	  }, translateLabel('selectedRecords', resource.id, {
	    selected: selectedRecords.length
	  })), /*#__PURE__*/React__default['default'].createElement(DesignSystem.ButtonGroup, {
	    size: "sm",
	    rounded: true,
	    buttons: bulkButtons
	  })));
	};

	/**
	 * @alias RecordsTableProps
	 * @memberof RecordsTable
	 */

	/**
	 * @classdesc
	 * Renders an entire records table. To fill the data you might need:
	 *
	 * - {@link useRecords} and
	 * - {@link useSelectedRecords} hooks
	 *
	 * so make sure to see at the documentation pages for both of them
	 *
	 * @component
	 * @class
	 * @hideconstructor
	 * @subcategory Application
	 * @new in version 3.3
	 */
	const RecordsTableOriginal = props => {
	  const {
	    resource,
	    records,
	    actionPerformed,
	    sortBy,
	    direction,
	    isLoading,
	    onSelect,
	    selectedRecords,
	    onSelectAll
	  } = props;

	  if (!records.length) {
	    if (isLoading) {
	      return /*#__PURE__*/React__default['default'].createElement(DesignSystem.Loader, null);
	    }

	    return /*#__PURE__*/React__default['default'].createElement(NoRecords, {
	      resource: resource
	    });
	  }

	  const selectedAll = selectedRecords && !!records.find(record => selectedRecords.find(selected => selected.id === record.id));
	  const recordsHaveBulkAction = !!records.find(record => record.bulkActions.length);
	  return /*#__PURE__*/React__default['default'].createElement(Table, null, /*#__PURE__*/React__default['default'].createElement(SelectedRecords, {
	    resource: resource,
	    selectedRecords: selectedRecords
	  }), /*#__PURE__*/React__default['default'].createElement(RecordsTableHeader, {
	    properties: resource.listProperties,
	    titleProperty: resource.titleProperty,
	    direction: direction,
	    sortBy: sortBy,
	    onSelectAll: recordsHaveBulkAction ? onSelectAll : undefined,
	    selectedAll: selectedAll
	  }), /*#__PURE__*/React__default['default'].createElement(TableBody, null, records.map(record => /*#__PURE__*/React__default['default'].createElement(RecordInList, {
	    record: record,
	    resource: resource,
	    key: record.id,
	    actionPerformed: actionPerformed,
	    isLoading: isLoading,
	    onSelect: onSelect,
	    isSelected: selectedRecords && !!selectedRecords.find(selected => selected.id === record.id)
	  }))));
	};

	const RecordsTable = allowOverride(RecordsTableOriginal, 'RecordsTable');

	const Pagination = allowOverride(DesignSystem.Pagination, 'Pagination', true);

	const List = ({
	  resource,
	  setTag,
	  theme
	}) => {
	  const {
	    records,
	    loading,
	    direction,
	    sortBy,
	    page,
	    total,
	    fetchData,
	    perPage
	  } = useRecords(resource.id);
	  const {
	    selectedRecords,
	    handleSelect,
	    handleSelectAll,
	    setSelectedRecords
	  } = useSelectedRecords(records);
	  const location = reactRouter.useLocation();
	  const history = reactRouter.useHistory();
	  React.useEffect(() => {
	    if (setTag) {
	      setTag(total.toString());
	    }
	  }, [total]);
	  React.useEffect(() => {
	    setSelectedRecords([]);
	  }, [resource.id]);
	  React.useEffect(() => {
	    const search = new URLSearchParams(location.search);

	    if (search.get(REFRESH_KEY)) {
	      setSelectedRecords([]);
	    }
	  }, [location.search]);

	  const handleActionPerformed = () => fetchData();

	  const handlePaginationChange = pageNumber => {
	    const search = new URLSearchParams(location.search);
	    search.set('page', pageNumber.toString());
	    history.push({
	      search: search.toString()
	    });
	  };

	  return /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	    styles: {
	      background: theme.colors.bg
	    }
	  }, /*#__PURE__*/React__default['default'].createElement(RecordsTable, {
	    resource: resource,
	    records: records,
	    actionPerformed: handleActionPerformed,
	    onSelect: handleSelect,
	    onSelectAll: handleSelectAll,
	    selectedRecords: selectedRecords,
	    direction: direction,
	    sortBy: sortBy,
	    isLoading: loading,
	    total: total
	  }), /*#__PURE__*/React__default['default'].createElement(DesignSystem.Text, {
	    mt: "xl",
	    textAlign: "center"
	  }, /*#__PURE__*/React__default['default'].createElement(Pagination, {
	    page: page,
	    perPage: perPage,
	    total: total,
	    onChange: handlePaginationChange
	  })));
	};

	const ListWithTheme = styled.withTheme(List);

	/* eslint-disable @typescript-eslint/explicit-function-return-type */
	/**
	 * NoticeMessage which can be presented as a "Toast" message.
	 * @alias NoticeMessage
	 * @memberof withNotice
	 */

	const mapDispatchToProps = dispatch => ({
	  addNotice: notice => dispatch(addNotice(notice))
	});
	/**
	 * Higher Order Component which allows you to post notice messages from your components
	 *
	 * It gives you the additional prop: `addNotice(noticeMessage)` taking {@link NoticeMessage}.
	 *
	 * ```javascript
	 * import { withNotice } from 'admin-bro/core'
	 *
	 * const MY_MESSAGE = {
	 *   message: 'I am toast message',
	 *   type: 'success',
	 * }
	 * const MyCustomComponent = ({ addNotice }) => {
	 *   return (
	 *     <a onClick={() => addNotice(MY_MESSAGE)}>Click Me</a>
	 *   )
	 * }
	 * export default withNotice(MyCustomComponent)
	 * ```
	 *
	 * @component
	 * @subcategory HOC
	 */


	const withNotice = Component => reactRedux.connect(null, mapDispatchToProps)(Component);

	/**
	 * @name ShowAction
	 * @category Actions
	 * @description Shows a given record.
	 * @component
	 * @private
	 */

	const BulkDelete = props => {
	  const {
	    resource,
	    records,
	    action,
	    addNotice,
	    history
	  } = props;
	  const [loading, setLoading] = React.useState(false);
	  const {
	    translateMessage,
	    translateButton
	  } = useTranslation();

	  if (!records) {
	    return /*#__PURE__*/React__default['default'].createElement(DesignSystem.Text, null, translateMessage('pickSomeFirstToRemove', resource.id));
	  }

	  const handleClick = () => {
	    const api = new ApiClient();
	    setLoading(true);
	    const recordIds = records.map(r => r.id);
	    api.bulkAction({
	      resourceId: resource.id,
	      actionName: action.name,
	      recordIds,
	      method: 'post'
	    }).then(response => {
	      setLoading(false);

	      if (response.data.notice) {
	        addNotice(response.data.notice);
	      }

	      if (response.data.redirectUrl) {
	        const search = new URLSearchParams(window.location.search); // bulk function have recordIds in the URL so it has to be stripped before redirect

	        search.delete('recordIds');
	        history.push(appendForceRefresh(response.data.redirectUrl, search.toString()));
	      }
	    }).catch(error => {
	      setLoading(false);
	      addNotice({
	        message: translateMessage('bulkDeleteError', resource.id),
	        type: 'error'
	      });
	      throw error;
	    });
	  };

	  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(DesignSystem.DrawerContent, null, action !== null && action !== void 0 && action.showInDrawer ? /*#__PURE__*/React__default['default'].createElement(ActionHeader, _extends({
	    omitActions: true
	  }, props)) : null, /*#__PURE__*/React__default['default'].createElement(DesignSystem.MessageBox, {
	    mb: "xxl",
	    variant: "danger",
	    message: translateMessage('theseRecordsWillBeRemoved', resource.id, {
	      count: records.length
	    })
	  }), /*#__PURE__*/React__default['default'].createElement(DesignSystem.Table, null, /*#__PURE__*/React__default['default'].createElement(DesignSystem.TableBody, null, records.map(record => /*#__PURE__*/React__default['default'].createElement(DesignSystem.TableRow, {
	    key: record.id
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.TableCell, null, /*#__PURE__*/React__default['default'].createElement(BasePropertyComponentExtended, {
	    where: "list",
	    property: resource.titleProperty,
	    resource: resource,
	    record: record
	  }))))))), /*#__PURE__*/React__default['default'].createElement(DesignSystem.DrawerFooter, null, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Button, {
	    variant: "primary",
	    size: "lg",
	    onClick: handleClick
	  }, loading ? /*#__PURE__*/React__default['default'].createElement(DesignSystem.Icon, {
	    icon: "Fade",
	    spin: true
	  }) : null, translateButton('confirmRemovalMany', resource.id, {
	    count: records.length
	  }))));
	};

	const FormattedBulkDelete = withNotice(reactRouter.withRouter(BulkDelete));

	const actions = {
	  new: New,
	  edit: Edit,
	  show: Show,
	  list: ListWithTheme,
	  bulkDelete: FormattedBulkDelete
	};

	const DOCS = 'https://adminbro.com';
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

	/**
	 * Component which renders all the default and custom actions for both the Resource and the Record.
	 *
	 * It passes all props down to the actual Action component.
	 *
	 * Example of creating your own actions:
	 * ```
	 * // AdminBro options
	 * const AdminBroOptions = {
	 *   resources: [
	 *      resource,
	 *      options: {
	 *        actions: {
	 *           myNewAction: {
	 *             label: 'amazing action',
	 *             icon: 'Add',
	 *             inVisible: (resource, record) => record.param('email') !== '',
	 *             actionType: 'record',
	 *             component: AdminBro.bundle('./my-new-action'),
	 *             handler: (request, response, data) => {
	 *               return {
	 *                  ...
	 *               }
	 *             }
	 *           }
	 *        }
	 *      }
	 *   ]
	 * }
	 * ```
	 *
	 * ```
	 * // ./my-new-action.jsx
	 * import { Box } from 'admin-bro'
	 *
	 * const MyNewAction = (props) => {
	 *   const { resource, action, record } = props
	 *   // do something with the props and render action
	 *   return (
	 *     <Box>Some Action Content</Box>
	 *   )
	 * }
	 * ```
	 *
	 * @component
	 * @name BaseActionComponent
	 * @subcategory Application
	 */
	const BaseActionComponent = props => {
	  const {
	    resource,
	    action,
	    record,
	    records,
	    setTag
	  } = props;
	  const documentationLink = [DOCS, 'BaseAction.html'].join('/');
	  const {
	    translateMessage
	  } = useTranslation();
	  let Action = actions[action.name];

	  if (action.component) {
	    Action = AdminBro.UserComponents[action.component];
	  }

	  if (Action) {
	    return /*#__PURE__*/React__default['default'].createElement(ErrorBoundary, null, /*#__PURE__*/React__default['default'].createElement(Action, {
	      action: action,
	      resource: resource,
	      record: record,
	      records: records,
	      setTag: setTag
	    }));
	  }

	  return Action || /*#__PURE__*/React__default['default'].createElement(DesignSystem.MessageBox, {
	    variant: "danger"
	  }, translateMessage('noActionComponent'), /*#__PURE__*/React__default['default'].createElement(reactI18next.Trans, {
	    key: "messages.buttons.seeTheDocumentation"
	  }, "See:", /*#__PURE__*/React__default['default'].createElement(DesignSystem.Link, {
	    ml: "default",
	    href: documentationLink
	  }, "the documentation")));
	};

	/**
	 * @memberof ErrorMessageBox
	 * @alias ErrorMessageBoxProps
	 */

	/**
	 * @class
	 * Prints error message
	 *
	 * @component
	 * @private
	 * @example
	 * return (
	 * <ErrorMessageBox title={'Some error'}>
	 *   <p>Text below the title</p>
	 * </ErrorMessageBox>
	 * )
	 */
	const ErrorMessageBox = props => {
	  const {
	    children,
	    title,
	    testId
	  } = props;
	  return /*#__PURE__*/React__default['default'].createElement(DesignSystem.MessageBox, {
	    "data-testid": testId,
	    message: title
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Text, null, children));
	};

	const NoResourceError = props => {
	  const {
	    resourceId
	  } = props;
	  const {
	    translateMessage
	  } = useTranslation();
	  return /*#__PURE__*/React__default['default'].createElement(DesignSystem.MessageBox, {
	    message: "404 - PAGE NOT FOUND",
	    "data-testid": "NoResourceError",
	    variant: "info",
	    m: "xxl"
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Text, null, translateMessage('error404Resource', resourceId, {
	    resourceId
	  })));
	};

	const NoActionError = props => {
	  const {
	    resourceId,
	    actionName
	  } = props;
	  const {
	    translateMessage
	  } = useTranslation();
	  return /*#__PURE__*/React__default['default'].createElement(DesignSystem.MessageBox, {
	    message: "404 - PAGE NOT FOUND",
	    "data-testid": "NoActionError",
	    variant: "info",
	    m: "xxl"
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Text, null, translateMessage('error404Action', resourceId, {
	    resourceId,
	    actionName
	  })));
	};

	const NoRecordError = props => {
	  const {
	    resourceId,
	    recordId
	  } = props;
	  const {
	    translateMessage
	  } = useTranslation();
	  return /*#__PURE__*/React__default['default'].createElement(DesignSystem.MessageBox, {
	    message: "404 - PAGE NOT FOUND",
	    "data-testid": "NoRecordError",
	    variant: "info",
	    m: "xxl"
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Text, null, translateMessage('error404Record', resourceId, {
	    resourceId,
	    recordId
	  })));
	};

	const StyledWrapper = styled__default['default'](DesignSystem.Box).withConfig({
	  displayName: "wrapper__StyledWrapper",
	  componentId: "gd2y70-0"
	})(["& ", "{background:", ";padding:", ";overflow:visible;}& ", "{background:", ";padding:0 ", " ", ";}"], DesignSystem.DrawerContent, ({
	  theme
	}) => theme.colors.white, ({
	  theme
	}) => theme.space.xxl, DesignSystem.DrawerFooter, ({
	  theme
	}) => theme.colors.white, ({
	  theme
	}) => theme.space.xxl, ({
	  theme
	}) => theme.space.xxl);

	const Wrapper = props => {
	  // eslint-disable-next-line @typescript-eslint/no-unused-vars
	  const {
	    children,
	    variant,
	    color,
	    ...rest
	  } = props;
	  return /*#__PURE__*/React__default['default'].createElement(StyledWrapper, _extends({}, rest, {
	    px: "80px",
	    mx: "auto"
	  }), children);
	};

	/**
	 * @alias DrawerPortalProps
	 * @memberof DrawerPortal
	 */

	const DRAWER_PORTAL_ID = 'drawerPortal';
	/**
	 * Shows all of its children in a Drawer on the right.
	 * Instead of rendering it's own {@link Drawer} component it reuses
	 * the global Drawer via React Portal.
	 *
	 * ### Usage
	 *
	 * ```
	 * import { DrawerPortal } from 'admin-bro'
	 * ```
	 *
	 * @component
	 * @subcategory Application
	 */

	const DrawerPortal = ({
	  children,
	  width
	}) => {
	  const [drawerElement, setDrawerElement] = React.useState(window.document.getElementById(DRAWER_PORTAL_ID));

	  if (!drawerElement && window) {
	    const innerWrapper = window.document.createElement('div');
	    const DrawerWrapper = /*#__PURE__*/React__default['default'].createElement(styled.ThemeProvider, {
	      theme: window.THEME
	    }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Drawer, {
	      id: DRAWER_PORTAL_ID,
	      className: "hidden"
	    }));
	    window.document.body.appendChild(innerWrapper);
	    require$$4.render(DrawerWrapper, innerWrapper, () => {
	      setDrawerElement(window.document.getElementById(DRAWER_PORTAL_ID));
	    });
	  }

	  React.useEffect(() => {
	    if (drawerElement) {
	      drawerElement.classList.remove('hidden');

	      if (width) {
	        drawerElement.style.width = Array.isArray(width) ? width[0].toString() : width.toString();
	      }

	      return () => {
	        drawerElement.style.width = DesignSystem.DEFAULT_DRAWER_WIDTH;
	        drawerElement.classList.add('hidden');
	      };
	    }

	    return () => undefined;
	  }, [drawerElement]);

	  if (!drawerElement) {
	    return null;
	  }

	  return /*#__PURE__*/require$$4.createPortal(children, drawerElement);
	};

	const parseQuery = location => {
	  const filter = {};
	  const query = new URLSearchParams(location.search);

	  for (const entry of query.entries()) {
	    const [key, value] = entry;

	    if (key.match('filters.')) {
	      filter[key.replace('filters.', '')] = value;
	    }
	  }

	  return filter;
	};

	const FilterDrawerOriginal = props => {
	  const {
	    resource,
	    isVisible,
	    toggleFilter
	  } = props;
	  const properties = resource.filterProperties;
	  const location = reactRouterDom.useLocation();
	  const [filter, setFilter] = React.useState(parseQuery(location));
	  const match = reactRouterDom.useRouteMatch();
	  const history = reactRouterDom.useHistory();
	  const {
	    translateLabel,
	    translateButton
	  } = useTranslation();
	  React.useEffect(() => setFilter({}), [match.params.resourceId]);

	  const handleSubmit = event => {
	    event.preventDefault();
	    const search = new URLSearchParams(window.location.search);
	    Object.keys(filter).forEach(key => {
	      if (filter[key] !== '') {
	        search.set(`filters.${key}`, filter[key]);
	      } else {
	        search.delete(`filters.${key}`);
	      }
	    });
	    search.set('page', '1');
	    history.push(`${history.location.pathname}?${search.toString()}`);
	    return false;
	  };

	  const resetFilter = event => {
	    event.preventDefault();
	    const filteredSearch = new URLSearchParams();
	    const search = new URLSearchParams(window.location.search);

	    for (const key of search.keys()) {
	      if (!key.match('filters.')) {
	        filteredSearch.set(key, search.get(key));
	      }
	    }

	    const query = filteredSearch.toString() === '' ? `?${filteredSearch.toString()}` : '';
	    history.push(history.location.pathname + query);
	    setFilter({});
	  };

	  const handleChange = (propertyName, value) => {
	    if (propertyName.params) {
	      throw new Error('you can not pass RecordJSON to filters');
	    }

	    setFilter({ ...filter,
	      [propertyName]: value
	    });
	  };

	  return /*#__PURE__*/React__default['default'].createElement(DesignSystem.Drawer, {
	    variant: "filter",
	    isHidden: !isVisible,
	    as: "form",
	    onSubmit: handleSubmit
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.DrawerContent, null, /*#__PURE__*/React__default['default'].createElement(DesignSystem.H3, null, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Button, {
	    type: "button",
	    size: "icon",
	    rounded: true,
	    mr: "lg",
	    onClick: () => toggleFilter()
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Icon, {
	    icon: "ChevronRight",
	    color: "white"
	  })), translateLabel('filters', resource.id)), /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	    my: "x3"
	  }, properties.map(property => /*#__PURE__*/React__default['default'].createElement(BasePropertyComponentExtended, {
	    key: property.propertyPath,
	    where: "filter",
	    onChange: handleChange,
	    property: property,
	    filter: filter,
	    resource: resource
	  })))), /*#__PURE__*/React__default['default'].createElement(DesignSystem.DrawerFooter, null, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Button, {
	    variant: "primary",
	    size: "lg"
	  }, translateButton('applyChanges', resource.id)), /*#__PURE__*/React__default['default'].createElement(DesignSystem.Button, {
	    variant: "text",
	    size: "lg",
	    onClick: resetFilter,
	    type: "button",
	    color: "white"
	  }, translateButton('resetFilter', resource.id))));
	};
	const FilterDrawer = allowOverride(FilterDrawerOriginal, 'FilterDrawer');

	var AppComponents = /*#__PURE__*/Object.freeze({
		__proto__: null,
		SortLink: SortLink,
		NoRecords: NoRecords,
		PropertyHeader: PropertyHeader,
		RecordInList: RecordInList,
		RecordsTableHeader: RecordsTableHeader,
		RecordsTable: RecordsTable,
		SelectedRecords: SelectedRecords,
		SidebarResourceSection: SidebarResourceSection,
		Sidebar: Sidebar,
		ActionButton: ActionButton,
		ActionHeaderOriginal: ActionHeaderOriginal,
		ActionHeader: ActionHeader,
		BaseActionComponent: BaseActionComponent,
		BreadcrumbLink: BreadcrumbLink,
		Breadcrumbs: Breadcrumbs,
		DashboardHeader: DashboardHeader,
		Dashboard: Dashboard$2,
		ErrorBoundary: ErrorBoundary,
		DrawerPortal: DrawerPortal,
		NoResourceError: NoResourceError,
		NoActionError: NoActionError,
		NoRecordError: NoRecordError,
		ErrorMessageBox: ErrorMessageBox,
		FilterDrawerOriginal: FilterDrawerOriginal,
		FilterDrawer: FilterDrawer,
		LoggedIn: OverridableLoggedIn,
		NoticeElement: NoticeElement,
		NoticeBox: ConnectedNoticeBox,
		TopBarOriginal: TopBarOriginal,
		Topbar: Topbar,
		Version: Version
	});

	const api$1 = new ApiClient();

	const RecordAction = () => {
	  const [record, setRecord] = React.useState();
	  const [loading, setLoading] = React.useState(true);
	  const match = reactRouter.useRouteMatch();
	  const addNotice = useNotice();
	  const {
	    translateMessage
	  } = useTranslation();
	  const {
	    actionName,
	    recordId,
	    resourceId
	  } = match.params;
	  const resource = useResource(resourceId);
	  const action = record && record.recordActions.find(r => r.name === actionName);

	  const fetchRecord = () => {
	    setLoading(true);
	    api$1.recordAction(match.params).then(response => {
	      setLoading(false);

	      if (response.data.notice && response.data.notice.type === 'error') {
	        addNotice(response.data.notice);
	      }

	      setRecord(response.data.record);
	    }).catch(error => {
	      addNotice({
	        message: translateMessage('errorFetchingRecord', resourceId),
	        type: 'error'
	      });
	      throw error;
	    });
	  };

	  React.useEffect(() => {
	    fetchRecord();
	  }, [actionName, recordId, resourceId]);
	  const handleActionPerformed = React.useCallback((oldRecord, response) => {
	    if (response.record) {
	      setRecord(mergeRecordResponse(oldRecord, response));
	    } else {
	      fetchRecord();
	    }
	  }, [fetchRecord]);

	  if (!resource) {
	    return /*#__PURE__*/React__default['default'].createElement(NoResourceError, {
	      resourceId: resourceId
	    });
	  } // When the user visits this route (record action) from a different, than the current one, record.
	  // It renders everything with a new resource. The old record remains until useEffect fetches data
	  // from the API. that is why we have to check if the current record has correct record.id.
	  // Alternative approach would be to setRecord(undefined) before the fetch, but it is async and
	  // we cannot be sure that the component wont be rendered (it will be at least once) with the
	  // wrong data.


	  const hasDifferentRecord = record && record.id && record.id.toString() !== recordId;

	  if (loading || hasDifferentRecord) {
	    const actionFromResource = resource.actions.find(r => r.name === actionName);
	    return actionFromResource !== null && actionFromResource !== void 0 && actionFromResource.showInDrawer ? /*#__PURE__*/React__default['default'].createElement(DrawerPortal, null, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Loader, null)) : /*#__PURE__*/React__default['default'].createElement(DesignSystem.Loader, null);
	  }

	  if (!action) {
	    return /*#__PURE__*/React__default['default'].createElement(NoActionError, {
	      resourceId: resourceId,
	      actionName: actionName
	    });
	  }

	  if (!record) {
	    return /*#__PURE__*/React__default['default'].createElement(NoRecordError, {
	      resourceId: resourceId,
	      recordId: recordId
	    });
	  }

	  if (action.showInDrawer) {
	    return /*#__PURE__*/React__default['default'].createElement(DrawerPortal, {
	      width: action.containerWidth
	    }, /*#__PURE__*/React__default['default'].createElement(BaseActionComponent, {
	      action: action,
	      resource: resource,
	      record: record
	    }));
	  }

	  return /*#__PURE__*/React__default['default'].createElement(Wrapper, {
	    width: action.containerWidth
	  }, /*#__PURE__*/React__default['default'].createElement(ActionHeader, {
	    resource: resource,
	    action: action,
	    record: record,
	    actionPerformed: response => handleActionPerformed(record, response)
	  }), /*#__PURE__*/React__default['default'].createElement(BaseActionComponent, {
	    action: action,
	    resource: resource,
	    record: record
	  }));
	};

	const ResourceAction$1 = props => {
	  const {
	    resources,
	    match
	  } = props;
	  const {
	    resourceId,
	    actionName
	  } = match.params;
	  const resource = resources.find(r => r.id === resourceId);

	  if (!resource) {
	    return /*#__PURE__*/React__default['default'].createElement(NoResourceError, {
	      resourceId: resourceId
	    });
	  }

	  const action = resource.resourceActions.find(r => r.name === actionName);

	  if (!action) {
	    return /*#__PURE__*/React__default['default'].createElement(NoActionError, {
	      resourceId: resourceId,
	      actionName: actionName
	    });
	  }

	  if (action.showInDrawer) {
	    return /*#__PURE__*/React__default['default'].createElement(DrawerPortal, {
	      width: action.containerWidth
	    }, /*#__PURE__*/React__default['default'].createElement(BaseActionComponent, {
	      action: action,
	      resource: resource
	    }));
	  }

	  return /*#__PURE__*/React__default['default'].createElement(Wrapper, {
	    width: action.containerWidth
	  }, /*#__PURE__*/React__default['default'].createElement(ActionHeader, {
	    resource: resource,
	    action: action
	  }), /*#__PURE__*/React__default['default'].createElement(BaseActionComponent, {
	    action: action,
	    resource: resource
	  }));
	};

	const mapStateToProps$2 = state => ({
	  resources: state.resources
	});

	var ResourceAction$2 = reactRedux.connect(mapStateToProps$2)(ResourceAction$1);

	const api = new ApiClient();

	const BulkAction = () => {
	  const match = reactRouter.useRouteMatch();
	  const [records, setRecords] = React.useState([]);
	  const [loading, setLoading] = React.useState(false);
	  const {
	    translateMessage
	  } = useTranslation();
	  const addNotice = useNotice();
	  const location = reactRouter.useLocation();
	  const {
	    resourceId,
	    actionName
	  } = match.params;
	  const resource = useResource(resourceId);

	  const fetchRecords = () => {
	    const recordIdsString = new URLSearchParams(location.search).get('recordIds');
	    const recordIds = recordIdsString ? recordIdsString.split(',') : [];
	    setLoading(true);
	    return api.bulkAction({
	      resourceId,
	      recordIds,
	      actionName
	    }).then(response => {
	      setLoading(false);
	      setRecords(response.data.records);
	    }).catch(error => {
	      setLoading(false);
	      addNotice({
	        message: translateMessage('errorFetchingRecords', resourceId),
	        type: 'error'
	      });
	      throw error;
	    });
	  };

	  React.useEffect(() => {
	    fetchRecords();
	  }, [match.params.resourceId, match.params.actionName]);

	  if (!resource) {
	    return /*#__PURE__*/React__default['default'].createElement(NoResourceError, {
	      resourceId: resourceId
	    });
	  }

	  if (!records && !loading) {
	    return /*#__PURE__*/React__default['default'].createElement(ErrorMessageBox, {
	      title: "No records"
	    }, /*#__PURE__*/React__default['default'].createElement("p", null, translateMessage('noRecordsSelected', resourceId)));
	  }

	  const action = getBulkActionsFromRecords(records || []).find(r => r.name === actionName);

	  if (loading) {
	    const actionFromResource = resource.actions.find(r => r.name === actionName);
	    return actionFromResource !== null && actionFromResource !== void 0 && actionFromResource.showInDrawer ? /*#__PURE__*/React__default['default'].createElement(DrawerPortal, null, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Loader, null)) : /*#__PURE__*/React__default['default'].createElement(DesignSystem.Loader, null);
	  }

	  if (!action) {
	    return /*#__PURE__*/React__default['default'].createElement(NoActionError, {
	      resourceId: resourceId,
	      actionName: actionName
	    });
	  }

	  if (action.showInDrawer) {
	    return /*#__PURE__*/React__default['default'].createElement(DrawerPortal, {
	      width: action.containerWidth
	    }, /*#__PURE__*/React__default['default'].createElement(BaseActionComponent, {
	      action: action,
	      resource: resource,
	      records: records
	    }));
	  }

	  return /*#__PURE__*/React__default['default'].createElement(Wrapper, {
	    width: action.containerWidth
	  }, !(action !== null && action !== void 0 && action.showInDrawer) ? /*#__PURE__*/React__default['default'].createElement(ActionHeader, {
	    resource: resource,
	    action: action
	  }) : '', /*#__PURE__*/React__default['default'].createElement(BaseActionComponent, {
	    action: action,
	    resource: resource,
	    records: records
	  }));
	};

	class Page extends React__default['default'].Component {
	  constructor(props) {
	    super(props);
	    this.state = {
	      isClient: false
	    };
	  }

	  componentDidMount() {
	    this.setState({
	      isClient: true
	    });
	  }

	  render() {
	    const {
	      pages,
	      session,
	      match
	    } = this.props;
	    const {
	      params
	    } = match;
	    const {
	      pageName
	    } = params;
	    const {
	      isClient
	    } = this.state;
	    const currentPage = pages.find(page => page.name === pageName);

	    if (!(currentPage !== null && currentPage !== void 0 && currentPage.isPublic) && !session) {
	      return /*#__PURE__*/React__default['default'].createElement(ErrorMessageBox, {
	        title: "This page is restricted"
	      }, /*#__PURE__*/React__default['default'].createElement("p", null, "Page:", /*#__PURE__*/React__default['default'].createElement("b", null, ` "${pageName}" `), "is restricted."));
	    }

	    if (!currentPage) {
	      return /*#__PURE__*/React__default['default'].createElement(ErrorMessageBox, {
	        title: "There is no page of given name"
	      }, /*#__PURE__*/React__default['default'].createElement("p", null, "Page:", /*#__PURE__*/React__default['default'].createElement("b", null, ` "${pageName}" `), "does not exist."));
	    }

	    const Component = AdminBro.UserComponents[currentPage.component];

	    if (!Component || !isClient) {
	      return /*#__PURE__*/React__default['default'].createElement(ErrorMessageBox, {
	        title: "No component specified"
	      }, /*#__PURE__*/React__default['default'].createElement("p", null, "You have to specify component which will render this Page"));
	    }

	    return /*#__PURE__*/React__default['default'].createElement(ErrorBoundary, null, /*#__PURE__*/React__default['default'].createElement(Component, null));
	  }

	}

	const mapStateToProps$1 = state => ({
	  pages: state.pages,
	  session: state.session
	});

	var Page$1 = reactRedux.connect(mapStateToProps$1)(Page);

	var queryHasFilter = (queryString => {
	  const query = new URLSearchParams(queryString);

	  for (const key of query.keys()) {
	    if (key.match('filters.')) {
	      return true;
	    }
	  }

	  return false;
	});

	const getAction = resource => {
	  const h = new ViewHelpers();
	  const resourceId = ':resourceId';
	  const actionName = ':actionName';
	  const recordId = ':recordId';
	  const recordActionUrl = h.recordActionUrl({
	    resourceId,
	    recordId,
	    actionName
	  });
	  const resourceActionUrl = h.resourceActionUrl({
	    resourceId,
	    actionName
	  });
	  const bulkActionUrl = h.bulkActionUrl({
	    resourceId,
	    actionName
	  });
	  const resourceActionMatch = reactRouterDom.useRouteMatch(resourceActionUrl);
	  const recordActionMatch = reactRouterDom.useRouteMatch(recordActionUrl);
	  const bulkActionMatch = reactRouterDom.useRouteMatch(bulkActionUrl);
	  const action = (resourceActionMatch === null || resourceActionMatch === void 0 ? void 0 : resourceActionMatch.params.actionName) || (recordActionMatch === null || recordActionMatch === void 0 ? void 0 : recordActionMatch.params.actionName) || (bulkActionMatch === null || bulkActionMatch === void 0 ? void 0 : bulkActionMatch.params.actionName);
	  return action ? resource.actions.find(a => a.name === action) : undefined;
	};

	const ResourceAction = props => {
	  const {
	    resources,
	    match,
	    location
	  } = props;
	  const {
	    resourceId
	  } = match.params;
	  const [filterVisible, setFilerVisible] = React.useState(queryHasFilter(location.search));
	  const [tag, setTag] = React.useState('');
	  const resource = resources.find(r => r.id === resourceId);

	  if (!resource) {
	    return /*#__PURE__*/React__default['default'].createElement(NoResourceError, {
	      resourceId: resourceId
	    });
	  }

	  const realEndAction = getAction(resource);

	  if (realEndAction && !realEndAction.showInDrawer) {
	    return null;
	  }

	  const listActionName = 'list';
	  const listAction = resource.resourceActions.find(r => r.name === listActionName);

	  if (!listAction) {
	    return /*#__PURE__*/React__default['default'].createElement(NoActionError, {
	      resourceId: resourceId,
	      actionName: listActionName
	    });
	  }

	  const toggleFilter = listAction.showFilter ? () => setFilerVisible(!filterVisible) : undefined;
	  return /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	    width: listAction.containerWidth,
	    px: "80px",
	    mx: "auto"
	  }, /*#__PURE__*/React__default['default'].createElement(ActionHeader, {
	    resource: resource,
	    action: listAction,
	    tag: tag,
	    toggleFilter: toggleFilter
	  }), /*#__PURE__*/React__default['default'].createElement(BaseActionComponent, {
	    action: listAction,
	    resource: resource,
	    setTag: setTag
	  }), listAction.showFilter ? /*#__PURE__*/React__default['default'].createElement(FilterDrawer, {
	    resource: resource,
	    isVisible: filterVisible,
	    toggleFilter: () => {
	      setFilerVisible(!filterVisible);
	    }
	  }) : '');
	};

	const mapStateToProps = state => ({
	  resources: state.resources
	});

	var Resource = reactRedux.connect(mapStateToProps)(ResourceAction);

	/* eslint-disable react/no-children-prop */
	const GlobalStyle = styled.createGlobalStyle`
  html, body, #app {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    color: ${({
  theme
}) => theme.colors.grey100}
  }
`;
	const h = new ViewHelpers();

	const App = () => {
	  const [sidebarVisible, toggleSidebar] = React.useState(false);
	  const location = reactRouter.useLocation();
	  React.useEffect(() => {
	    if (sidebarVisible) {
	      toggleSidebar(false);
	    }
	  }, [location]);
	  const resourceId = ':resourceId';
	  const actionName = ':actionName';
	  const recordId = ':recordId';
	  const pageName = ':pageName';
	  const recordActionUrl = h.recordActionUrl({
	    resourceId,
	    recordId,
	    actionName
	  });
	  const resourceActionUrl = h.resourceActionUrl({
	    resourceId,
	    actionName
	  });
	  const bulkActionUrl = h.bulkActionUrl({
	    resourceId,
	    actionName
	  });
	  const resourceUrl = h.resourceUrl({
	    resourceId
	  });
	  const pageUrl = h.pageUrl(pageName);
	  const publicPageUrl = h.publicPageUrl(pageName);
	  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Reset, null), /*#__PURE__*/React__default['default'].createElement(GlobalStyle, null), /*#__PURE__*/React__default['default'].createElement(reactRouterDom.Switch, null, /*#__PURE__*/React__default['default'].createElement(reactRouterDom.Route, {
	    path: publicPageUrl,
	    exact: true,
	    component: Page$1
	  }), /*#__PURE__*/React__default['default'].createElement(reactRouterDom.Route, null, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	    height: "100%",
	    flex: true
	  }, sidebarVisible ? /*#__PURE__*/React__default['default'].createElement(DesignSystem.Overlay, {
	    onClick: () => toggleSidebar(!sidebarVisible)
	  }) : null, /*#__PURE__*/React__default['default'].createElement(Sidebar, {
	    isVisible: sidebarVisible
	  }), /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	    flex: true,
	    flexGrow: 1,
	    flexDirection: "column",
	    overflowY: "auto",
	    bg: "bg"
	  }, /*#__PURE__*/React__default['default'].createElement(Topbar, {
	    toggleSidebar: () => toggleSidebar(!sidebarVisible)
	  }), /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	    position: "absolute",
	    top: 0,
	    zIndex: "2000"
	  }, /*#__PURE__*/React__default['default'].createElement(ConnectedNoticeBox, null)), /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	    className: DesignSystem.cssClass(['Main']),
	    flex: true,
	    flexGrow: 1
	  }, /*#__PURE__*/React__default['default'].createElement(reactRouterDom.Switch, null, /*#__PURE__*/React__default['default'].createElement(reactRouterDom.Route, {
	    path: h.dashboardUrl(),
	    exact: true,
	    component: Dashboard$1
	  }), /*#__PURE__*/React__default['default'].createElement(reactRouterDom.Route, {
	    path: resourceUrl,
	    component: Resource
	  }), /*#__PURE__*/React__default['default'].createElement(reactRouterDom.Route, {
	    path: pageUrl,
	    exact: true,
	    component: Page$1
	  })), /*#__PURE__*/React__default['default'].createElement(reactRouterDom.Switch, null, /*#__PURE__*/React__default['default'].createElement(reactRouterDom.Route, {
	    path: recordActionUrl,
	    component: RecordAction
	  }), /*#__PURE__*/React__default['default'].createElement(reactRouterDom.Route, {
	    path: resourceActionUrl,
	    component: ResourceAction$2
	  }), /*#__PURE__*/React__default['default'].createElement(reactRouterDom.Route, {
	    path: bulkActionUrl,
	    component: BulkAction
	  }))))))));
	};

	const ASSETS_INITIALIZE = 'ASSETS_INITIALIZE';

	const BRANDING_INITIALIZE = 'BRANDING_INITIALIZE';

	const DASHBOARD_INITIALIZE = 'DASHBOARD_INITIALIZE';

	const LOCALE_INITIALIZE = 'LOCALE_INITIALIZE';

	const PAGES_INITIALIZE = 'PAGES_INITIALIZE';

	const PATHS_INITIALIZE = 'PATHS_INITIALIZE';

	const RESOURCES_INITIALIZE = 'RESOURCES_INITIALIZE';

	const VERSIONS_INITIALIZE = 'VERSIONS_INITIALIZE';

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

	/* eslint-disable max-len */

	/**
	 * Function returning Array<LayoutElement> used by {@link Action#layout}
	 *
	 * @return  {Array<LayoutElement>}
	 * @memberof Action
	 * @alias LayoutElementFunction
	 */

	/**
	 * It is generated from {@link Array<LayoutElement>} passed in {@link Action#layout}
	 *
	 * @alias ParsedLayoutElement
	 * @memberof ActionJSON
	 */
	const isProp = element => !!element && typeof element === 'object' && !Array.isArray(element);

	const isComponentTag = layoutElement => Array.isArray(layoutElement) && typeof layoutElement[0] === 'string' && layoutElement[0].startsWith('@') && isProp(layoutElement[1]);

	const hasOnlyStringsProperties = function (layoutElement) {
	  return Array.isArray(layoutElement) && layoutElement.length > 0 && !isComponentTag(layoutElement) && !layoutElement.find(el => typeof el !== 'string');
	};

	const hasArrayOfLayoutElements = function (layoutElement) {
	  return Array.isArray(layoutElement) && layoutElement.length > 0 && !layoutElement.find(element => !Array.isArray(element));
	};

	const hasFirstStringProperty = function (layoutElement) {
	  return Array.isArray(layoutElement) && typeof layoutElement[0] === 'string' && !isComponentTag(layoutElement);
	};

	const getPropertyNames = layoutElement => {
	  if (typeof layoutElement === 'string') {
	    return [layoutElement];
	  }

	  if (hasOnlyStringsProperties(layoutElement)) {
	    return layoutElement;
	  }

	  if (hasFirstStringProperty(layoutElement)) {
	    return [layoutElement[0]];
	  }

	  return [];
	};

	const getInnerLayoutElements = layoutElement => {
	  // only cases like [{}, layoutElement] (whatever follows props)
	  if (Array.isArray(layoutElement) && isProp(layoutElement[0])) {
	    return layoutElement[1];
	  }

	  if (hasArrayOfLayoutElements(layoutElement)) {
	    return layoutElement;
	  }

	  return [];
	};

	const getComponent = layoutElement => {
	  if (isComponentTag(layoutElement)) {
	    return layoutElement[0].slice(1);
	  }

	  return 'Box';
	};

	const getProps = layoutElement => {
	  if (Array.isArray(layoutElement) && layoutElement.length) {
	    const boxProps = layoutElement.find(isProp);
	    return boxProps || {};
	  }

	  return {};
	};

	const layoutElementParser$1 = layoutElement => {
	  const props = getProps(layoutElement);
	  const innerLayoutElements = getInnerLayoutElements(layoutElement);
	  const properties = getPropertyNames(layoutElement);
	  const component = getComponent(layoutElement);
	  return {
	    props,
	    layoutElements: innerLayoutElements.map(el => layoutElementParser$1(el)),
	    properties,
	    component
	  };
	};
	/**
	 * @load layout-element.doc.md
	 * @name LayoutElement
	 * @typedef {String | Array} LayoutElement
	 * @memberof Action
	 * @alias LayoutElement
	 */

	var layoutElementParser = /*#__PURE__*/Object.freeze({
		__proto__: null,
		layoutElementParser: layoutElementParser$1
	});

	const env = {
	  NODE_ENV: "development" 
	};
	const store = createStore(window.REDUX_STATE);
	const theme = window.THEME;
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
	}, /*#__PURE__*/React__default['default'].createElement(styled.ThemeProvider, {
	  theme: theme
	}, /*#__PURE__*/React__default['default'].createElement(reactRouterDom.BrowserRouter, null, /*#__PURE__*/React__default['default'].createElement(App, null)))); // eslint-disable-next-line no-undef

	window.regeneratorRuntime = regenerator;
	var bundleEntry = {
	  withNotice,
	  Application,
	  ViewHelpers,
	  UserComponents: {},
	  ApiClient,
	  BasePropertyComponent: BasePropertyComponentExtended,
	  LayoutElementRenderer,
	  env,
	  ...AppComponents,
	  ...Hooks,
	  ...Interfaces,
	  ...layoutElementParser,
	  flat,
	  // TODO: remove this from the next release
	  flatten: flat.flatten,
	  unflatten: flat.unflatten
	};

	return bundleEntry;

}(React, ReactRedux, ReactRouterDOM, styled, ReactI18Next, i18n, AdminBroDesignSystem, ReactRouter, axios, flat, Redux, ReactDOM, ReactSelect, ReactSelectAsync));
