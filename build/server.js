module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadUpdateChunk(chunkId) {
/******/ 		var chunk = require("./" + "" + chunkId + "." + hotCurrentHash + ".hot-update.js");
/******/ 		hotAddUpdateChunk(chunk.id, chunk.modules);
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadManifest() {
/******/ 		try {
/******/ 			var update = require("./" + "" + hotCurrentHash + ".hot-update.json");
/******/ 		} catch (e) {
/******/ 			return Promise.resolve();
/******/ 		}
/******/ 		return Promise.resolve(update);
/******/ 	}
/******/
/******/ 	//eslint-disable-next-line no-unused-vars
/******/ 	function hotDisposeChunk(chunkId) {
/******/ 		delete installedChunks[chunkId];
/******/ 	}
/******/
/******/ 	var hotApplyOnUpdate = true;
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentHash = "2ac9a7900dd7d54345c7";
/******/ 	var hotRequestTimeout = 10000;
/******/ 	var hotCurrentModuleData = {};
/******/ 	var hotCurrentChildModule;
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentParents = [];
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentParentsTemp = [];
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateRequire(moduleId) {
/******/ 		var me = installedModules[moduleId];
/******/ 		if (!me) return __webpack_require__;
/******/ 		var fn = function(request) {
/******/ 			if (me.hot.active) {
/******/ 				if (installedModules[request]) {
/******/ 					if (installedModules[request].parents.indexOf(moduleId) === -1) {
/******/ 						installedModules[request].parents.push(moduleId);
/******/ 					}
/******/ 				} else {
/******/ 					hotCurrentParents = [moduleId];
/******/ 					hotCurrentChildModule = request;
/******/ 				}
/******/ 				if (me.children.indexOf(request) === -1) {
/******/ 					me.children.push(request);
/******/ 				}
/******/ 			} else {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" +
/******/ 						request +
/******/ 						") from disposed module " +
/******/ 						moduleId
/******/ 				);
/******/ 				hotCurrentParents = [];
/******/ 			}
/******/ 			return __webpack_require__(request);
/******/ 		};
/******/ 		var ObjectFactory = function ObjectFactory(name) {
/******/ 			return {
/******/ 				configurable: true,
/******/ 				enumerable: true,
/******/ 				get: function() {
/******/ 					return __webpack_require__[name];
/******/ 				},
/******/ 				set: function(value) {
/******/ 					__webpack_require__[name] = value;
/******/ 				}
/******/ 			};
/******/ 		};
/******/ 		for (var name in __webpack_require__) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(__webpack_require__, name) &&
/******/ 				name !== "e" &&
/******/ 				name !== "t"
/******/ 			) {
/******/ 				Object.defineProperty(fn, name, ObjectFactory(name));
/******/ 			}
/******/ 		}
/******/ 		fn.e = function(chunkId) {
/******/ 			if (hotStatus === "ready") hotSetStatus("prepare");
/******/ 			hotChunksLoading++;
/******/ 			return __webpack_require__.e(chunkId).then(finishChunkLoading, function(err) {
/******/ 				finishChunkLoading();
/******/ 				throw err;
/******/ 			});
/******/
/******/ 			function finishChunkLoading() {
/******/ 				hotChunksLoading--;
/******/ 				if (hotStatus === "prepare") {
/******/ 					if (!hotWaitingFilesMap[chunkId]) {
/******/ 						hotEnsureUpdateChunk(chunkId);
/******/ 					}
/******/ 					if (hotChunksLoading === 0 && hotWaitingFiles === 0) {
/******/ 						hotUpdateDownloaded();
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 		fn.t = function(value, mode) {
/******/ 			if (mode & 1) value = fn(value);
/******/ 			return __webpack_require__.t(value, mode & ~1);
/******/ 		};
/******/ 		return fn;
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateModule(moduleId) {
/******/ 		var hot = {
/******/ 			// private stuff
/******/ 			_acceptedDependencies: {},
/******/ 			_declinedDependencies: {},
/******/ 			_selfAccepted: false,
/******/ 			_selfDeclined: false,
/******/ 			_disposeHandlers: [],
/******/ 			_main: hotCurrentChildModule !== moduleId,
/******/
/******/ 			// Module API
/******/ 			active: true,
/******/ 			accept: function(dep, callback) {
/******/ 				if (dep === undefined) hot._selfAccepted = true;
/******/ 				else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._acceptedDependencies[dep[i]] = callback || function() {};
/******/ 				else hot._acceptedDependencies[dep] = callback || function() {};
/******/ 			},
/******/ 			decline: function(dep) {
/******/ 				if (dep === undefined) hot._selfDeclined = true;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._declinedDependencies[dep[i]] = true;
/******/ 				else hot._declinedDependencies[dep] = true;
/******/ 			},
/******/ 			dispose: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			addDisposeHandler: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			removeDisposeHandler: function(callback) {
/******/ 				var idx = hot._disposeHandlers.indexOf(callback);
/******/ 				if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 			},
/******/
/******/ 			// Management API
/******/ 			check: hotCheck,
/******/ 			apply: hotApply,
/******/ 			status: function(l) {
/******/ 				if (!l) return hotStatus;
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			addStatusHandler: function(l) {
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			removeStatusHandler: function(l) {
/******/ 				var idx = hotStatusHandlers.indexOf(l);
/******/ 				if (idx >= 0) hotStatusHandlers.splice(idx, 1);
/******/ 			},
/******/
/******/ 			//inherit from previous dispose call
/******/ 			data: hotCurrentModuleData[moduleId]
/******/ 		};
/******/ 		hotCurrentChildModule = undefined;
/******/ 		return hot;
/******/ 	}
/******/
/******/ 	var hotStatusHandlers = [];
/******/ 	var hotStatus = "idle";
/******/
/******/ 	function hotSetStatus(newStatus) {
/******/ 		hotStatus = newStatus;
/******/ 		for (var i = 0; i < hotStatusHandlers.length; i++)
/******/ 			hotStatusHandlers[i].call(null, newStatus);
/******/ 	}
/******/
/******/ 	// while downloading
/******/ 	var hotWaitingFiles = 0;
/******/ 	var hotChunksLoading = 0;
/******/ 	var hotWaitingFilesMap = {};
/******/ 	var hotRequestedFilesMap = {};
/******/ 	var hotAvailableFilesMap = {};
/******/ 	var hotDeferred;
/******/
/******/ 	// The update info
/******/ 	var hotUpdate, hotUpdateNewHash;
/******/
/******/ 	function toModuleId(id) {
/******/ 		var isNumber = +id + "" === id;
/******/ 		return isNumber ? +id : id;
/******/ 	}
/******/
/******/ 	function hotCheck(apply) {
/******/ 		if (hotStatus !== "idle") {
/******/ 			throw new Error("check() is only allowed in idle status");
/******/ 		}
/******/ 		hotApplyOnUpdate = apply;
/******/ 		hotSetStatus("check");
/******/ 		return hotDownloadManifest(hotRequestTimeout).then(function(update) {
/******/ 			if (!update) {
/******/ 				hotSetStatus("idle");
/******/ 				return null;
/******/ 			}
/******/ 			hotRequestedFilesMap = {};
/******/ 			hotWaitingFilesMap = {};
/******/ 			hotAvailableFilesMap = update.c;
/******/ 			hotUpdateNewHash = update.h;
/******/
/******/ 			hotSetStatus("prepare");
/******/ 			var promise = new Promise(function(resolve, reject) {
/******/ 				hotDeferred = {
/******/ 					resolve: resolve,
/******/ 					reject: reject
/******/ 				};
/******/ 			});
/******/ 			hotUpdate = {};
/******/ 			var chunkId = "main";
/******/ 			// eslint-disable-next-line no-lone-blocks
/******/ 			{
/******/ 				/*globals chunkId */
/******/ 				hotEnsureUpdateChunk(chunkId);
/******/ 			}
/******/ 			if (
/******/ 				hotStatus === "prepare" &&
/******/ 				hotChunksLoading === 0 &&
/******/ 				hotWaitingFiles === 0
/******/ 			) {
/******/ 				hotUpdateDownloaded();
/******/ 			}
/******/ 			return promise;
/******/ 		});
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotAddUpdateChunk(chunkId, moreModules) {
/******/ 		if (!hotAvailableFilesMap[chunkId] || !hotRequestedFilesMap[chunkId])
/******/ 			return;
/******/ 		hotRequestedFilesMap[chunkId] = false;
/******/ 		for (var moduleId in moreModules) {
/******/ 			if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				hotUpdate[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if (--hotWaitingFiles === 0 && hotChunksLoading === 0) {
/******/ 			hotUpdateDownloaded();
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotEnsureUpdateChunk(chunkId) {
/******/ 		if (!hotAvailableFilesMap[chunkId]) {
/******/ 			hotWaitingFilesMap[chunkId] = true;
/******/ 		} else {
/******/ 			hotRequestedFilesMap[chunkId] = true;
/******/ 			hotWaitingFiles++;
/******/ 			hotDownloadUpdateChunk(chunkId);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotUpdateDownloaded() {
/******/ 		hotSetStatus("ready");
/******/ 		var deferred = hotDeferred;
/******/ 		hotDeferred = null;
/******/ 		if (!deferred) return;
/******/ 		if (hotApplyOnUpdate) {
/******/ 			// Wrap deferred object in Promise to mark it as a well-handled Promise to
/******/ 			// avoid triggering uncaught exception warning in Chrome.
/******/ 			// See https://bugs.chromium.org/p/chromium/issues/detail?id=465666
/******/ 			Promise.resolve()
/******/ 				.then(function() {
/******/ 					return hotApply(hotApplyOnUpdate);
/******/ 				})
/******/ 				.then(
/******/ 					function(result) {
/******/ 						deferred.resolve(result);
/******/ 					},
/******/ 					function(err) {
/******/ 						deferred.reject(err);
/******/ 					}
/******/ 				);
/******/ 		} else {
/******/ 			var outdatedModules = [];
/******/ 			for (var id in hotUpdate) {
/******/ 				if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 					outdatedModules.push(toModuleId(id));
/******/ 				}
/******/ 			}
/******/ 			deferred.resolve(outdatedModules);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotApply(options) {
/******/ 		if (hotStatus !== "ready")
/******/ 			throw new Error("apply() is only allowed in ready status");
/******/ 		options = options || {};
/******/
/******/ 		var cb;
/******/ 		var i;
/******/ 		var j;
/******/ 		var module;
/******/ 		var moduleId;
/******/
/******/ 		function getAffectedStuff(updateModuleId) {
/******/ 			var outdatedModules = [updateModuleId];
/******/ 			var outdatedDependencies = {};
/******/
/******/ 			var queue = outdatedModules.slice().map(function(id) {
/******/ 				return {
/******/ 					chain: [id],
/******/ 					id: id
/******/ 				};
/******/ 			});
/******/ 			while (queue.length > 0) {
/******/ 				var queueItem = queue.pop();
/******/ 				var moduleId = queueItem.id;
/******/ 				var chain = queueItem.chain;
/******/ 				module = installedModules[moduleId];
/******/ 				if (!module || module.hot._selfAccepted) continue;
/******/ 				if (module.hot._selfDeclined) {
/******/ 					return {
/******/ 						type: "self-declined",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				if (module.hot._main) {
/******/ 					return {
/******/ 						type: "unaccepted",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				for (var i = 0; i < module.parents.length; i++) {
/******/ 					var parentId = module.parents[i];
/******/ 					var parent = installedModules[parentId];
/******/ 					if (!parent) continue;
/******/ 					if (parent.hot._declinedDependencies[moduleId]) {
/******/ 						return {
/******/ 							type: "declined",
/******/ 							chain: chain.concat([parentId]),
/******/ 							moduleId: moduleId,
/******/ 							parentId: parentId
/******/ 						};
/******/ 					}
/******/ 					if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 					if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 						if (!outdatedDependencies[parentId])
/******/ 							outdatedDependencies[parentId] = [];
/******/ 						addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 						continue;
/******/ 					}
/******/ 					delete outdatedDependencies[parentId];
/******/ 					outdatedModules.push(parentId);
/******/ 					queue.push({
/******/ 						chain: chain.concat([parentId]),
/******/ 						id: parentId
/******/ 					});
/******/ 				}
/******/ 			}
/******/
/******/ 			return {
/******/ 				type: "accepted",
/******/ 				moduleId: updateModuleId,
/******/ 				outdatedModules: outdatedModules,
/******/ 				outdatedDependencies: outdatedDependencies
/******/ 			};
/******/ 		}
/******/
/******/ 		function addAllToSet(a, b) {
/******/ 			for (var i = 0; i < b.length; i++) {
/******/ 				var item = b[i];
/******/ 				if (a.indexOf(item) === -1) a.push(item);
/******/ 			}
/******/ 		}
/******/
/******/ 		// at begin all updates modules are outdated
/******/ 		// the "outdated" status can propagate to parents if they don't accept the children
/******/ 		var outdatedDependencies = {};
/******/ 		var outdatedModules = [];
/******/ 		var appliedUpdate = {};
/******/
/******/ 		var warnUnexpectedRequire = function warnUnexpectedRequire() {
/******/ 			console.warn(
/******/ 				"[HMR] unexpected require(" + result.moduleId + ") to disposed module"
/******/ 			);
/******/ 		};
/******/
/******/ 		for (var id in hotUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 				moduleId = toModuleId(id);
/******/ 				/** @type {TODO} */
/******/ 				var result;
/******/ 				if (hotUpdate[id]) {
/******/ 					result = getAffectedStuff(moduleId);
/******/ 				} else {
/******/ 					result = {
/******/ 						type: "disposed",
/******/ 						moduleId: id
/******/ 					};
/******/ 				}
/******/ 				/** @type {Error|false} */
/******/ 				var abortError = false;
/******/ 				var doApply = false;
/******/ 				var doDispose = false;
/******/ 				var chainInfo = "";
/******/ 				if (result.chain) {
/******/ 					chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 				}
/******/ 				switch (result.type) {
/******/ 					case "self-declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of self decline: " +
/******/ 									result.moduleId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of declined dependency: " +
/******/ 									result.moduleId +
/******/ 									" in " +
/******/ 									result.parentId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "unaccepted":
/******/ 						if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 						if (!options.ignoreUnaccepted)
/******/ 							abortError = new Error(
/******/ 								"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "accepted":
/******/ 						if (options.onAccepted) options.onAccepted(result);
/******/ 						doApply = true;
/******/ 						break;
/******/ 					case "disposed":
/******/ 						if (options.onDisposed) options.onDisposed(result);
/******/ 						doDispose = true;
/******/ 						break;
/******/ 					default:
/******/ 						throw new Error("Unexception type " + result.type);
/******/ 				}
/******/ 				if (abortError) {
/******/ 					hotSetStatus("abort");
/******/ 					return Promise.reject(abortError);
/******/ 				}
/******/ 				if (doApply) {
/******/ 					appliedUpdate[moduleId] = hotUpdate[moduleId];
/******/ 					addAllToSet(outdatedModules, result.outdatedModules);
/******/ 					for (moduleId in result.outdatedDependencies) {
/******/ 						if (
/******/ 							Object.prototype.hasOwnProperty.call(
/******/ 								result.outdatedDependencies,
/******/ 								moduleId
/******/ 							)
/******/ 						) {
/******/ 							if (!outdatedDependencies[moduleId])
/******/ 								outdatedDependencies[moduleId] = [];
/******/ 							addAllToSet(
/******/ 								outdatedDependencies[moduleId],
/******/ 								result.outdatedDependencies[moduleId]
/******/ 							);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 				if (doDispose) {
/******/ 					addAllToSet(outdatedModules, [result.moduleId]);
/******/ 					appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Store self accepted outdated modules to require them later by the module system
/******/ 		var outdatedSelfAcceptedModules = [];
/******/ 		for (i = 0; i < outdatedModules.length; i++) {
/******/ 			moduleId = outdatedModules[i];
/******/ 			if (
/******/ 				installedModules[moduleId] &&
/******/ 				installedModules[moduleId].hot._selfAccepted
/******/ 			)
/******/ 				outdatedSelfAcceptedModules.push({
/******/ 					module: moduleId,
/******/ 					errorHandler: installedModules[moduleId].hot._selfAccepted
/******/ 				});
/******/ 		}
/******/
/******/ 		// Now in "dispose" phase
/******/ 		hotSetStatus("dispose");
/******/ 		Object.keys(hotAvailableFilesMap).forEach(function(chunkId) {
/******/ 			if (hotAvailableFilesMap[chunkId] === false) {
/******/ 				hotDisposeChunk(chunkId);
/******/ 			}
/******/ 		});
/******/
/******/ 		var idx;
/******/ 		var queue = outdatedModules.slice();
/******/ 		while (queue.length > 0) {
/******/ 			moduleId = queue.pop();
/******/ 			module = installedModules[moduleId];
/******/ 			if (!module) continue;
/******/
/******/ 			var data = {};
/******/
/******/ 			// Call dispose handlers
/******/ 			var disposeHandlers = module.hot._disposeHandlers;
/******/ 			for (j = 0; j < disposeHandlers.length; j++) {
/******/ 				cb = disposeHandlers[j];
/******/ 				cb(data);
/******/ 			}
/******/ 			hotCurrentModuleData[moduleId] = data;
/******/
/******/ 			// disable module (this disables requires from this module)
/******/ 			module.hot.active = false;
/******/
/******/ 			// remove module from cache
/******/ 			delete installedModules[moduleId];
/******/
/******/ 			// when disposing there is no need to call dispose handler
/******/ 			delete outdatedDependencies[moduleId];
/******/
/******/ 			// remove "parents" references from all children
/******/ 			for (j = 0; j < module.children.length; j++) {
/******/ 				var child = installedModules[module.children[j]];
/******/ 				if (!child) continue;
/******/ 				idx = child.parents.indexOf(moduleId);
/******/ 				if (idx >= 0) {
/******/ 					child.parents.splice(idx, 1);
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// remove outdated dependency from module children
/******/ 		var dependency;
/******/ 		var moduleOutdatedDependencies;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 						dependency = moduleOutdatedDependencies[j];
/******/ 						idx = module.children.indexOf(dependency);
/******/ 						if (idx >= 0) module.children.splice(idx, 1);
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Not in "apply" phase
/******/ 		hotSetStatus("apply");
/******/
/******/ 		hotCurrentHash = hotUpdateNewHash;
/******/
/******/ 		// insert new code
/******/ 		for (moduleId in appliedUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(appliedUpdate, moduleId)) {
/******/ 				modules[moduleId] = appliedUpdate[moduleId];
/******/ 			}
/******/ 		}
/******/
/******/ 		// call accept handlers
/******/ 		var error = null;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					var callbacks = [];
/******/ 					for (i = 0; i < moduleOutdatedDependencies.length; i++) {
/******/ 						dependency = moduleOutdatedDependencies[i];
/******/ 						cb = module.hot._acceptedDependencies[dependency];
/******/ 						if (cb) {
/******/ 							if (callbacks.indexOf(cb) !== -1) continue;
/******/ 							callbacks.push(cb);
/******/ 						}
/******/ 					}
/******/ 					for (i = 0; i < callbacks.length; i++) {
/******/ 						cb = callbacks[i];
/******/ 						try {
/******/ 							cb(moduleOutdatedDependencies);
/******/ 						} catch (err) {
/******/ 							if (options.onErrored) {
/******/ 								options.onErrored({
/******/ 									type: "accept-errored",
/******/ 									moduleId: moduleId,
/******/ 									dependencyId: moduleOutdatedDependencies[i],
/******/ 									error: err
/******/ 								});
/******/ 							}
/******/ 							if (!options.ignoreErrored) {
/******/ 								if (!error) error = err;
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Load self accepted modules
/******/ 		for (i = 0; i < outdatedSelfAcceptedModules.length; i++) {
/******/ 			var item = outdatedSelfAcceptedModules[i];
/******/ 			moduleId = item.module;
/******/ 			hotCurrentParents = [moduleId];
/******/ 			try {
/******/ 				__webpack_require__(moduleId);
/******/ 			} catch (err) {
/******/ 				if (typeof item.errorHandler === "function") {
/******/ 					try {
/******/ 						item.errorHandler(err);
/******/ 					} catch (err2) {
/******/ 						if (options.onErrored) {
/******/ 							options.onErrored({
/******/ 								type: "self-accept-error-handler-errored",
/******/ 								moduleId: moduleId,
/******/ 								error: err2,
/******/ 								originalError: err
/******/ 							});
/******/ 						}
/******/ 						if (!options.ignoreErrored) {
/******/ 							if (!error) error = err2;
/******/ 						}
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				} else {
/******/ 					if (options.onErrored) {
/******/ 						options.onErrored({
/******/ 							type: "self-accept-errored",
/******/ 							moduleId: moduleId,
/******/ 							error: err
/******/ 						});
/******/ 					}
/******/ 					if (!options.ignoreErrored) {
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// handle errors in accept handlers and self accepted module load
/******/ 		if (error) {
/******/ 			hotSetStatus("fail");
/******/ 			return Promise.reject(error);
/******/ 		}
/******/
/******/ 		hotSetStatus("idle");
/******/ 		return new Promise(function(resolve) {
/******/ 			resolve(outdatedModules);
/******/ 		});
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {},
/******/ 			hot: hotCreateModule(moduleId),
/******/ 			parents: (hotCurrentParentsTemp = hotCurrentParents, hotCurrentParents = [], hotCurrentParentsTemp),
/******/ 			children: []
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, hotCreateRequire(moduleId));
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "http://localhost:3001/";
/******/
/******/ 	// __webpack_hash__
/******/ 	__webpack_require__.h = function() { return hotCurrentHash; };
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return hotCreateRequire(0)(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./build/assets.json":
/*!***************************!*\
  !*** ./build/assets.json ***!
  \***************************/
/*! exports provided: client, default */
/***/ (function(module) {

module.exports = {"client":{"js":"http://localhost:3001/static/js/bundle.js"}};

/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/webpack/hot/log-apply-result.js":
/*!*****************************************!*\
  !*** (webpack)/hot/log-apply-result.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
module.exports = function(updatedModules, renewedModules) {
	var unacceptedModules = updatedModules.filter(function(moduleId) {
		return renewedModules && renewedModules.indexOf(moduleId) < 0;
	});
	var log = __webpack_require__(/*! ./log */ "./node_modules/webpack/hot/log.js");

	if (unacceptedModules.length > 0) {
		log(
			"warning",
			"[HMR] The following modules couldn't be hot updated: (They would need a full reload!)"
		);
		unacceptedModules.forEach(function(moduleId) {
			log("warning", "[HMR]  - " + moduleId);
		});
	}

	if (!renewedModules || renewedModules.length === 0) {
		log("info", "[HMR] Nothing hot updated.");
	} else {
		log("info", "[HMR] Updated modules:");
		renewedModules.forEach(function(moduleId) {
			if (typeof moduleId === "string" && moduleId.indexOf("!") !== -1) {
				var parts = moduleId.split("!");
				log.groupCollapsed("info", "[HMR]  - " + parts.pop());
				log("info", "[HMR]  - " + moduleId);
				log.groupEnd("info");
			} else {
				log("info", "[HMR]  - " + moduleId);
			}
		});
		var numberIds = renewedModules.every(function(moduleId) {
			return typeof moduleId === "number";
		});
		if (numberIds)
			log(
				"info",
				"[HMR] Consider using the NamedModulesPlugin for module names."
			);
	}
};


/***/ }),

/***/ "./node_modules/webpack/hot/log.js":
/*!****************************!*\
  !*** (webpack)/hot/log.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

var logLevel = "info";

function dummy() {}

function shouldLog(level) {
	var shouldLog =
		(logLevel === "info" && level === "info") ||
		(["info", "warning"].indexOf(logLevel) >= 0 && level === "warning") ||
		(["info", "warning", "error"].indexOf(logLevel) >= 0 && level === "error");
	return shouldLog;
}

function logGroup(logFn) {
	return function(level, msg) {
		if (shouldLog(level)) {
			logFn(msg);
		}
	};
}

module.exports = function(level, msg) {
	if (shouldLog(level)) {
		if (level === "info") {
			console.log(msg);
		} else if (level === "warning") {
			console.warn(msg);
		} else if (level === "error") {
			console.error(msg);
		}
	}
};

/* eslint-disable node/no-unsupported-features/node-builtins */
var group = console.group || dummy;
var groupCollapsed = console.groupCollapsed || dummy;
var groupEnd = console.groupEnd || dummy;
/* eslint-enable node/no-unsupported-features/node-builtins */

module.exports.group = logGroup(group);

module.exports.groupCollapsed = logGroup(groupCollapsed);

module.exports.groupEnd = logGroup(groupEnd);

module.exports.setLogLevel = function(level) {
	logLevel = level;
};


/***/ }),

/***/ "./node_modules/webpack/hot/poll.js?300":
/*!*********************************!*\
  !*** (webpack)/hot/poll.js?300 ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__resourceQuery) {/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
/*globals __resourceQuery */
if (true) {
	var hotPollInterval = +__resourceQuery.substr(1) || 10 * 60 * 1000;
	var log = __webpack_require__(/*! ./log */ "./node_modules/webpack/hot/log.js");

	var checkForUpdate = function checkForUpdate(fromUpdate) {
		if (module.hot.status() === "idle") {
			module.hot
				.check(true)
				.then(function(updatedModules) {
					if (!updatedModules) {
						if (fromUpdate) log("info", "[HMR] Update applied.");
						return;
					}
					__webpack_require__(/*! ./log-apply-result */ "./node_modules/webpack/hot/log-apply-result.js")(updatedModules, updatedModules);
					checkForUpdate(true);
				})
				.catch(function(err) {
					var status = module.hot.status();
					if (["abort", "fail"].indexOf(status) >= 0) {
						log("warning", "[HMR] Cannot apply update.");
						log("warning", "[HMR] " + (err.stack || err.message));
						log("warning", "[HMR] You need to restart the application!");
					} else {
						log(
							"warning",
							"[HMR] Update failed: " + (err.stack || err.message)
						);
					}
				});
		}
	};
	setInterval(checkForUpdate, hotPollInterval);
} else {}

/* WEBPACK VAR INJECTION */}.call(this, "?300"))

/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\n  color: rgba(0, 0, 0, .84);\n  margin: 0;\n  padding: 0;\n  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;\n}\n\na {\n  color: inherit;\n  text-decoration: none;\n}\n", ""]);

// exports


/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "babel-runtime/helpers/classCallCheck");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "babel-runtime/helpers/createClass");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "babel-runtime/helpers/inherits");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_router_dom_Route__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom/Route */ "react-router-dom/Route");
/* harmony import */ var react_router_dom_Route__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_router_dom_Route__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_router_dom_Switch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom/Switch */ "react-router-dom/Switch");
/* harmony import */ var react_router_dom_Switch__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_router_dom_Switch__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _constants_pages__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./constants/pages */ "./src/constants/pages/index.js");
/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/Nav */ "./src/components/Nav/index.js");
/* harmony import */ var _components_Pages_Home__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/Pages/Home */ "./src/components/Pages/Home/index.js");
/* harmony import */ var _components_Pages_Resources__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/Pages/Resources */ "./src/components/Pages/Resources/index.js");
/* harmony import */ var _components_Pages_Resources_Learn__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/Pages/Resources/Learn */ "./src/components/Pages/Resources/Learn.js");
/* harmony import */ var _components_Pages_Resources_ChurchFinders__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/Pages/Resources/ChurchFinders */ "./src/components/Pages/Resources/ChurchFinders.js");
/* harmony import */ var _components_Pages_About__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/Pages/About */ "./src/components/Pages/About/index.js");
/* harmony import */ var _components_Pages_Gospel__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/Pages/Gospel */ "./src/components/Pages/Gospel/index.js");
/* harmony import */ var _components_Writing__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/Writing */ "./src/components/Writing/index.js");





var _jsxFileName = "/Users/michael.cheng/code/bibleanswers/web/src/App.js";

















var App = function (_Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(App, _Component);

  function App() {
    var _ref;

    var _temp, _this, _ret;

    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, App);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (_ref = App.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(App)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      pathname: ""
    }, _temp), babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(_this, _ret);
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.setState({ pathname: window.location.pathname });

      this.props.history.listen(function (location) {
        _this2.setState({ pathname: location.pathname });

        var title = Object(lodash__WEBPACK_IMPORTED_MODULE_9__["get"])(_constants_pages__WEBPACK_IMPORTED_MODULE_10__["PAGES"][location.pathname], "title", _constants_pages__WEBPACK_IMPORTED_MODULE_10__["PAGES"]["/"].title);

        if (title.indexOf("Bible Answers") === -1) {
          title = title + " | Bible Answers";
        }

        document.title = title;
      });

      console.log(window.__TEST__);
    }
  }, {
    key: "showBack",
    value: function showBack() {
      var pathname = this.state.pathname;


      if (pathname.indexOf("/resources") !== -1 && pathname.length > "/resources".length) {
        return "/resources";
      }

      return false;
    }
  }, {
    key: "renderNav",
    value: function renderNav() {
      var pathname = this.state.pathname;


      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Nav__WEBPACK_IMPORTED_MODULE_11__["default"], {
        home: pathname !== "/" && pathname.indexOf("/categories") === -1,
        back: this.showBack(),
        pathname: pathname,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      });
    }
  }, {
    key: "renderPage",
    value: function renderPage(_ref2) {
      var history = _ref2.history;

      var post = Object(_constants_pages__WEBPACK_IMPORTED_MODULE_10__["getPostData"])(history.location.pathname) || {};
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Writing__WEBPACK_IMPORTED_MODULE_18__["Page"], { post: post, __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
        "div",
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 73
          }
        },
        this.renderNav(),
        react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
          react_router_dom_Switch__WEBPACK_IMPORTED_MODULE_8___default.a,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 75
            }
          },
          react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom_Route__WEBPACK_IMPORTED_MODULE_7___default.a, { exact: true, path: "/", component: _components_Pages_Home__WEBPACK_IMPORTED_MODULE_12__["default"], __source: {
              fileName: _jsxFileName,
              lineNumber: 76
            }
          }),
          react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom_Route__WEBPACK_IMPORTED_MODULE_7___default.a, { exact: true, path: "/resources", component: _components_Pages_Resources__WEBPACK_IMPORTED_MODULE_13__["default"], __source: {
              fileName: _jsxFileName,
              lineNumber: 78
            }
          }),
          react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom_Route__WEBPACK_IMPORTED_MODULE_7___default.a, { exact: true, path: "/resources/learn", component: _components_Pages_Resources_Learn__WEBPACK_IMPORTED_MODULE_14__["default"], __source: {
              fileName: _jsxFileName,
              lineNumber: 79
            }
          }),
          react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom_Route__WEBPACK_IMPORTED_MODULE_7___default.a, {
            exact: true,
            path: "/resources/church-finders",
            component: _components_Pages_Resources_ChurchFinders__WEBPACK_IMPORTED_MODULE_15__["default"],
            __source: {
              fileName: _jsxFileName,
              lineNumber: 80
            }
          }),
          react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom_Route__WEBPACK_IMPORTED_MODULE_7___default.a, { path: "/about", component: _components_Pages_About__WEBPACK_IMPORTED_MODULE_16__["default"], __source: {
              fileName: _jsxFileName,
              lineNumber: 86
            }
          }),
          react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom_Route__WEBPACK_IMPORTED_MODULE_7___default.a, { path: "/gospel", component: _components_Pages_Gospel__WEBPACK_IMPORTED_MODULE_17__["default"], __source: {
              fileName: _jsxFileName,
              lineNumber: 87
            }
          }),
          react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom_Route__WEBPACK_IMPORTED_MODULE_7___default.a, { path: "/answers", render: this.renderPage, __source: {
              fileName: _jsxFileName,
              lineNumber: 88
            }
          }),
          react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom_Route__WEBPACK_IMPORTED_MODULE_7___default.a, { path: "/categories/:root/:category", component: _components_Pages_Home__WEBPACK_IMPORTED_MODULE_12__["default"], __source: {
              fileName: _jsxFileName,
              lineNumber: 90
            }
          }),
          react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom_Route__WEBPACK_IMPORTED_MODULE_7___default.a, { path: "/categories/:root", component: _components_Pages_Home__WEBPACK_IMPORTED_MODULE_12__["default"], __source: {
              fileName: _jsxFileName,
              lineNumber: 91
            }
          })
        )
      );
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/components/ListItem/index.js":
/*!******************************************!*\
  !*** ./src/components/ListItem/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "babel-runtime/helpers/classCallCheck");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "babel-runtime/helpers/createClass");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "babel-runtime/helpers/inherits");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles.css */ "./src/components/ListItem/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_7__);





var _jsxFileName = "/Users/michael.cheng/code/bibleanswers/web/src/components/ListItem/index.js";




var ListItem = function (_Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(ListItem, _Component);

  function ListItem() {
    var _ref;

    var _temp, _this, _ret;

    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, ListItem);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (_ref = ListItem.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(ListItem)).call.apply(_ref, [this].concat(args))), _this), _this.getImageUrl = function () {
      var splitUrl = _this.props.imageUrl.split(".");

      return splitUrl[0] + "_small." + splitUrl[1];
    }, _temp), babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(_this, _ret);
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(ListItem, [{
    key: "renderText",
    value: function renderText(text) {
      var _props$search = this.props.search,
          search = _props$search === undefined ? "" : _props$search;


      var lowerSearch = search.toLowerCase();
      var lowerText = text.toLowerCase();

      var startIndex = lowerText.indexOf(lowerSearch);

      if (startIndex === -1) {
        return text;
      }

      var first = text.slice(0, startIndex);
      var highlight = text.slice(startIndex, startIndex + search.length);
      var last = text.slice(startIndex + search.length);

      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
        "span",
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 29
          }
        },
        first,
        react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
          "span",
          { className: "highlight", __source: {
              fileName: _jsxFileName,
              lineNumber: 31
            }
          },
          highlight
        ),
        last
      );
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          added = _props.added,
          showUrl = _props.showUrl,
          subtitle = _props.subtitle,
          title = _props.title,
          updated = _props.updated,
          url = _props.url;


      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
        react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Link"],
        { to: url, key: url, __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          }
        },
        react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
          "div",
          { className: "list-item", __source: {
              fileName: _jsxFileName,
              lineNumber: 42
            }
          },
          react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
            "div",
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 43
              }
            },
            react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
              "div",
              { className: "answer-title", __source: {
                  fileName: _jsxFileName,
                  lineNumber: 44
                }
              },
              this.renderText(title)
            ),
            react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
              "div",
              { className: "list-item__subtitle", __source: {
                  fileName: _jsxFileName,
                  lineNumber: 45
                }
              },
              this.renderText(subtitle)
            ),
            react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
              "div",
              { className: "list-item__date", __source: {
                  fileName: _jsxFileName,
                  lineNumber: 48
                }
              },
              updated ? "Updated: " + updated : added ? "Added: " + added : null
            ),
            showUrl ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
              "div",
              { className: "url", __source: {
                  fileName: _jsxFileName,
                  lineNumber: 55
                }
              },
              url
            ) : null
          ),
          react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
            "div",
            { className: "answer-image-container", __source: {
                fileName: _jsxFileName,
                lineNumber: 57
              }
            },
            react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
              className: "answer-image",
              src: this.getImageUrl(),
              alt: title,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 58
              }
            })
          )
        )
      );
    }
  }]);

  return ListItem;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ListItem);

/***/ }),

/***/ "./src/components/ListItem/styles.css":
/*!********************************************!*\
  !*** ./src/components/ListItem/styles.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".list-item {\n  align-items: center;\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 20px;\n  padding: 10px 20px;\n  text-decoration: none;\n}\n\n.list-item:hover {\n  background: #eee;\n}\n\n.answer-title {\n  font-size: 24px;\n  font-weight: 600;\n}\n\n.list-item__subtitle {\n  color: rgba(0, 0, 0, 0.54);\n  font-size: 16px;\n  margin-top: 2px;\n}\n\n.tags {\n  margin-top: 12px;\n}\n\n.list-item__date {\n  color: rgba(0, 0, 0, 0.54);\n  font-size: 12px;\n  margin-top: 12px;\n}\n\n.url {\n  color: #689f38;\n  font-size: 16px;\n  margin-top: 15px;\n}\n\n.answer-image-container {\n  flex-shrink: 0;\n  height: 80px;\n  margin-left: 20px;\n  overflow: hidden;\n  width: 80px;\n}\n\n.answer-image {\n  left: -30px;\n  height: 80px;\n  position: relative;\n}\n\n@media screen and (max-width: 768px) {\n  .answer-title {\n    font-size: 18px;\n  }\n}\n\n.highlight {\n  color: #039be5;\n  font-weight: bold;\n}", ""]);

// exports


/***/ }),

/***/ "./src/components/Nav/index.js":
/*!*************************************!*\
  !*** ./src/components/Nav/index.js ***!
  \*************************************/
/*! exports provided: closest, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closest", function() { return closest; });
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "babel-runtime/helpers/classCallCheck");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "babel-runtime/helpers/createClass");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "babel-runtime/helpers/inherits");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles.css */ "./src/components/Nav/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/fa */ "react-icons/fa");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Popover__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Popover */ "./src/components/Popover/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_10__);





var _jsxFileName = "/Users/michael.cheng/code/bibleanswers/web/src/components/Nav/index.js";







function closest(el, selector) {
  var matchesFn;

  // find vendor prefix
  ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"].some(function (fn) {
    if (typeof document.body[fn] === "function") {
      matchesFn = fn;
      return true;
    }
    return false;
  });

  var parent;

  // traverse parents
  while (el) {
    parent = el.parentElement;
    if (parent && parent[matchesFn](selector)) {
      return parent;
    }
    el = parent;
  }

  return null;
}

var POPOVER_LINKS = [{
  label: "Resources",
  url: "/resources"
}, {
  label: "About",
  url: "/about"
}];

var Nav = function (_Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Nav, _Component);

  function Nav() {
    var _ref;

    var _temp, _this, _ret;

    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Nav);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (_ref = Nav.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(Nav)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      showMenu: false
    }, _this.onDocumentClick = function (event) {
      if (!event.target.classList.contains("popover-link-container") && !closest(event.target, ".nav-right")) {
        _this.setState({ showMenu: false });
      }
    }, _temp), babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(_this, _ret);
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Nav, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener("click", this.onDocumentClick);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener("click", this.onDocumentClick);
    }
  }, {
    key: "renderLeft",
    value: function renderLeft() {
      var _props = this.props,
          back = _props.back,
          home = _props.home;


      if (back) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
          "div",
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 78
            }
          },
          react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
            react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Link"],
            { className: "nav-left", to: back, __source: {
                fileName: _jsxFileName,
                lineNumber: 79
              }
            },
            react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
              "div",
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 80
                }
              },
              react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_8__["FaChevronLeft"], {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 81
                }
              })
            )
          )
        );
      }

      if (home) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
          "div",
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 90
            }
          },
          react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
            react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Link"],
            { className: "nav-left", to: "/", __source: {
                fileName: _jsxFileName,
                lineNumber: 91
              }
            },
            react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
              "div",
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 92
                }
              },
              react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_8__["FaHome"], {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 93
                }
              })
            )
          )
        );
      }

      return null;
    }
  }, {
    key: "renderPopoverBody",
    value: function renderPopoverBody() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
        "div",
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 105
          }
        },
        POPOVER_LINKS.map(function (link) {
          var classNames = classnames__WEBPACK_IMPORTED_MODULE_10___default()("popover-link", {
            active: link.url === _this2.props.pathname
          });

          return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
            "div",
            { key: link.label, className: "popover-link-container", __source: {
                fileName: _jsxFileName,
                lineNumber: 112
              }
            },
            react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
              react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Link"],
              { className: classNames, to: link.url, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 113
                }
              },
              react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
                "div",
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 114
                  }
                },
                link.label
              )
            )
          );
        })
      );
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
        "nav",
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 125
          }
        },
        this.renderLeft(),
        react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
          react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Link"],
          { className: "app-name", to: "/", __source: {
              fileName: _jsxFileName,
              lineNumber: 128
            }
          },
          react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", { src: "/images/logo.png", className: "logo", alt: "logo", __source: {
              fileName: _jsxFileName,
              lineNumber: 129
            }
          }),
          "Bible Answers"
        ),
        react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
          _Popover__WEBPACK_IMPORTED_MODULE_9__["default"],
          {
            isOpen: this.state.showMenu,
            body: this.renderPopoverBody(),
            place: "below",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 133
            }
          },
          react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
            "div",
            {
              className: "nav-right",
              onClick: function onClick() {
                return _this3.setState({ showMenu: !_this3.state.showMenu });
              },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 138
              }
            },
            react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_8__["FaBars"], {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 142
              }
            })
          )
        )
      );
    }
  }]);

  return Nav;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ }),

/***/ "./src/components/Nav/styles.css":
/*!***************************************!*\
  !*** ./src/components/Nav/styles.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "nav {\n  align-items: center;\n  display: flex;\n  height: 65px;\n  justify-content: space-between;\n  margin: 0 auto;\n  max-width: 1040px;\n  padding: 0 20px;\n}\n.app-name {\n  align-items: center;\n  color: #039be5;\n  display: flex;\n  font-size: 20px;\n  font-weight: bold;\n  text-decoration: none;\n}\n.logo {\n  height: 22px;\n  margin-right: 10px;\n  width: 32px;\n}\n.nav-right {\n  color: rgba(0, 0, 0, 0.54);\n  cursor: pointer;\n  font-size: 20px;\n}\n\n.popover-link {\n  color: rgba(0, 0, 0, 0.54);\n  display: block;\n  padding: 10px 20px;\n  text-decoration: none;\n}\n\n.active {\n  font-weight: bold;\n  pointer-events: none;\n}\n\n.nav-left {\n  color: rgba(0, 0, 0, 0.54);\n  cursor: pointer;\n  font-size: 20px;\n}", ""]);

// exports


/***/ }),

/***/ "./src/components/Pages/About/index.js":
/*!*********************************************!*\
  !*** ./src/components/Pages/About/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/components/Pages/About/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Writing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Writing */ "./src/components/Writing/index.js");
var _jsxFileName = "/Users/michael.cheng/code/bibleanswers/web/src/components/Pages/About/index.js";





var About = function About() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
    "div",
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      }
    },
    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Writing__WEBPACK_IMPORTED_MODULE_2__["TitleSection"], {
      title: "Welcome to Bible Answers",
      subtitle: "Utilizing technology to explain and defend the Bible's teachings",
      imageUrl: "/images/about.png",
      imagePosition: "52% 70%",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      }
    }),
    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
      _Writing__WEBPACK_IMPORTED_MODULE_2__["ReadingContainer"],
      { style: { marginBottom: 20 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      },
      react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
        "div",
        { className: "writing", __source: {
            fileName: _jsxFileName,
            lineNumber: 15
          }
        },
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
          "h3",
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 16
            }
          },
          "About Bible Answers"
        ),
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
          "p",
          { className: "first", __source: {
              fileName: _jsxFileName,
              lineNumber: 18
            }
          },
          "Bible Answers is built and maintained by Michael Cheng, a Christian, husband, father, and software engineer. Two of his passions are the Bible and programming, and Bible Answers is a result of the combination of these two passions."
        ),
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
          "h3",
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 25
            }
          },
          "Mission"
        ),
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
          "p",
          { className: "first", __source: {
              fileName: _jsxFileName,
              lineNumber: 27
            }
          },
          "The mission of Bible Answers is to explain and defend the Bible's teachings with the aid of technology."
        ),
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
          "h3",
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 32
            }
          },
          "Evangelism"
        ),
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
          "p",
          { className: "first", __source: {
              fileName: _jsxFileName,
              lineNumber: 34
            }
          },
          "Bible Answers is reaching hundreds of people each day with the gospel through",
          " ",
          react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            "a",
            {
              href: "https://www.facebook.com/permalink.php?story_fbid=473522429796321&id=472739386541292&notif_id=1537987200032073&notif_t=page_post_reaction",
              target: "_blank",
              rel: "noopener noreferrer",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 37
              }
            },
            "this Facebook ad"
          ),
          ", which links to",
          " ",
          react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            "a",
            {
              href: "http://bibleanswers.io/gospel",
              target: "_blank",
              rel: "noopener noreferrer",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 45
              }
            },
            "this gospel summary page"
          ),
          "."
        )
      )
    )
  );
};

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ }),

/***/ "./src/components/Pages/About/styles.css":
/*!***********************************************!*\
  !*** ./src/components/Pages/About/styles.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ "./src/components/Pages/Gospel/index.js":
/*!**********************************************!*\
  !*** ./src/components/Pages/Gospel/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.css */ "./src/components/Pages/Gospel/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants_posts_theology_gospel_gospel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../constants/posts/theology/gospel/gospel */ "./src/constants/posts/theology/gospel/gospel.js");
/* harmony import */ var _Writing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Writing */ "./src/components/Writing/index.js");
var _jsxFileName = "/Users/michael.cheng/code/bibleanswers/web/src/components/Pages/Gospel/index.js";






function beforeContent() {
  return "\n    <div class=\"writing\">\n      <h3>Sections</h3>\n      <p class=\"first\">\n        <a href=\"#introduction\" class=\"jump-to-section\">\n          1. Introduction\n        </a>\n        <a href=\"#bible\" class=\"jump-to-section\">\n          2. Bible\n        </a>\n        <a href=\"#god\" class=\"jump-to-section\">\n          3. God\n        </a>\n        <a href=\"#sin\" class=\"jump-to-section\">\n          4. Sin\n        </a>\n        <a href=\"#jesus\" class=\"jump-to-section\">\n          5. Jesus\n        </a>\n        <a href=\"#salvation\" class=\"jump-to-section\">\n          6. Salvation\n        </a>\n        <a href=\"#next\" class=\"jump-to-section\">\n          7. Next Steps\n        </a>\n      </p>\n    </div>\n  ";
}

var Gospel = function Gospel() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Writing__WEBPACK_IMPORTED_MODULE_3__["Page"], { post: _constants_posts_theology_gospel_gospel__WEBPACK_IMPORTED_MODULE_2__["default"], beforeContent: beforeContent(), __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Gospel);

/***/ }),

/***/ "./src/components/Pages/Gospel/styles.css":
/*!************************************************!*\
  !*** ./src/components/Pages/Gospel/styles.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".jump-to-section {\n  color: #689f38;\n  display: block;\n}", ""]);

// exports


/***/ }),

/***/ "./src/components/Pages/Home/index.js":
/*!********************************************!*\
  !*** ./src/components/Pages/Home/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "babel-runtime/helpers/extends");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "babel-runtime/helpers/classCallCheck");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "babel-runtime/helpers/createClass");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "babel-runtime/helpers/inherits");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles.css */ "./src/components/Pages/Home/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _constants_posts_apologetics__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../constants/posts/apologetics */ "./src/constants/posts/apologetics/index.js");
/* harmony import */ var _constants_posts_theology__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../constants/posts/theology */ "./src/constants/posts/theology/index.js");
/* harmony import */ var _constants_posts__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../constants/posts */ "./src/constants/posts/index.js");
/* harmony import */ var _Writing__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../Writing */ "./src/components/Writing/index.js");
/* harmony import */ var _ListItem__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../ListItem */ "./src/components/ListItem/index.js");
/* harmony import */ var _Search__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../Search */ "./src/components/Search/index.js");
/* harmony import */ var _SearchCategories__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../SearchCategories */ "./src/components/SearchCategories/index.js");






var _jsxFileName = "/Users/michael.cheng/code/bibleanswers/web/src/components/Pages/Home/index.js";















var DATA_MAPPING = {
  apologetics: _constants_posts_apologetics__WEBPACK_IMPORTED_MODULE_11__["default"],
  theology: _constants_posts_theology__WEBPACK_IMPORTED_MODULE_12__["default"]
};

var Posts = function (_Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Posts, _Component);

  function Posts(props) {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, Posts);

    var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, (Posts.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1___default()(Posts)).call(this, props));

    _this.setRoot = function (root) {
      _this.setState({ root: root, search: root === "newest" ? _this.state.search : "" });
    };

    _this.onSearchChange = function (event) {
      _this.setState({ search: event.target.value });
    };

    _this.onClearSearch = function () {
      _this.setState({ search: "" });
    };

    _this.state = {
      category: props.match.params.category || "",
      root: props.match.params.root || "newest",
      search: ""
    };
    return _this;
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(Posts, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.scrollTo(0, 0);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.match.path !== "/" && this.props.match.path === "/") {
        this.setState({ category: "", root: "newest", search: "" });
      }
    }
  }, {
    key: "getPostsList",
    value: function getPostsList(posts) {
      var search = this.state.search;


      var lowerSearch = search.toLowerCase();

      return posts.filter(function (answer) {
        var lowerTitle = answer.title.toLowerCase();
        var lowerSubtitle = answer.subtitle.toLowerCase();

        var matchesTitle = lowerTitle.indexOf(lowerSearch) !== -1;
        var matchesSubtitle = lowerSubtitle.indexOf(lowerSearch) !== -1;
        var matchesTags = Object(lodash__WEBPACK_IMPORTED_MODULE_9__["some"])(answer.tags, function (tag) {
          var lowerTag = tag.toLowerCase();
          return lowerTag.indexOf(lowerSearch) !== -1;
        });

        return matchesTitle || matchesSubtitle || matchesTags;
      });
    }
  }, {
    key: "renderNewest",
    value: function renderNewest() {
      var posts = this.getPostsList(_constants_posts__WEBPACK_IMPORTED_MODULE_13__["POSTS_BY_MOST_RECENT"]);

      return this.renderPosts(posts);
    }
  }, {
    key: "renderCategories",
    value: function renderCategories() {
      var _this2 = this;

      var _state = this.state,
          category = _state.category,
          root = _state.root;


      if (root === "newest") {
        return null;
      }

      var data = DATA_MAPPING[root];

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
        "div",
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 90
          }
        },
        react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
          _Writing__WEBPACK_IMPORTED_MODULE_14__["ReadingContainer"],
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 91
            }
          },
          react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
            "div",
            { className: "writing", __source: {
                fileName: _jsxFileName,
                lineNumber: 92
              }
            },
            react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
              "h4",
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 93
                }
              },
              data.heading
            )
          )
        ),
        data.categories.map(function (categoryData) {
          var isActive = categoryData.categoryUrl === category;

          var classNames = classnames__WEBPACK_IMPORTED_MODULE_10___default()("first", {
            "search-category__active": isActive
          });

          return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
            "div",
            { key: categoryData.categoryUrl, __source: {
                fileName: _jsxFileName,
                lineNumber: 104
              }
            },
            react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
              _Writing__WEBPACK_IMPORTED_MODULE_14__["ReadingContainer"],
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 105
                }
              },
              react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
                "div",
                { className: "writing", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 106
                  }
                },
                react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
                  react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Link"],
                  {
                    onClick: function onClick() {
                      return _this2.setState({
                        category: isActive ? "" : categoryData.categoryUrl
                      });
                    },
                    to: "/categories/" + root + "/" + categoryData.categoryUrl,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 107
                    }
                  },
                  react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
                    "p",
                    { className: classNames, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 115
                      }
                    },
                    categoryData.category,
                    react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", { className: isActive ? "caret-up" : "caret-down", __source: {
                        fileName: _jsxFileName,
                        lineNumber: 117
                      }
                    })
                  )
                )
              )
            ),
            react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
              _Writing__WEBPACK_IMPORTED_MODULE_14__["ReadingContainer"],
              { style: { padding: 0 }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 122
                }
              },
              categoryData.categoryUrl === category ? _this2.renderPosts(categoryData.posts) : null
            )
          );
        })
      );
    }
  }, {
    key: "renderPosts",
    value: function renderPosts(posts) {
      var search = this.state.search;


      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
        "div",
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 138
          }
        },
        posts.length ? posts.map(function (pageData) {
          return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_ListItem__WEBPACK_IMPORTED_MODULE_15__["default"], babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({ key: pageData.url }, pageData, { search: search, __source: {
              fileName: _jsxFileName,
              lineNumber: 142
            }
          }));
        }) : this.renderClear()
      );
    }
  }, {
    key: "renderClear",
    value: function renderClear() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
        "div",
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 152
          }
        },
        react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
          "div",
          { className: "empty-text", __source: {
              fileName: _jsxFileName,
              lineNumber: 153
            }
          },
          "No results matched your search"
        ),
        react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
          "div",
          { className: "empty-clear", onClick: this.onClearSearch, __source: {
              fileName: _jsxFileName,
              lineNumber: 154
            }
          },
          "Clear search"
        )
      );
    }
  }, {
    key: "renderOptions",
    value: function renderOptions() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
        "div",
        { className: "home-options", __source: {
            fileName: _jsxFileName,
            lineNumber: 163
          }
        },
        react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
          "div",
          { className: "home-option", __source: {
              fileName: _jsxFileName,
              lineNumber: 164
            }
          },
          "Apologetics"
        ),
        react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
          "div",
          { className: "home-option", __source: {
              fileName: _jsxFileName,
              lineNumber: 165
            }
          },
          "Theology"
        )
      );
    }
  }, {
    key: "render",
    value: function render() {
      var _state2 = this.state,
          category = _state2.category,
          root = _state2.root,
          search = _state2.search;


      var posts = this.getPostsList(_constants_posts__WEBPACK_IMPORTED_MODULE_13__["ALL_POSTS"]);

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
        "div",
        { className: "home-container", __source: {
            fileName: _jsxFileName,
            lineNumber: 176
          }
        },
        react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
          "div",
          { className: "home-image-section", __source: {
              fileName: _jsxFileName,
              lineNumber: 177
            }
          },
          "Defending and explaining the biblical worldview"
        ),
        react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
          _Writing__WEBPACK_IMPORTED_MODULE_14__["ReadingContainer"],
          { style: { padding: 0 }, __source: {
              fileName: _jsxFileName,
              lineNumber: 180
            }
          },
          react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Search__WEBPACK_IMPORTED_MODULE_16__["default"], {
            posts: posts,
            onClearSearch: this.onClearSearch,
            onSearchChange: this.onSearchChange,
            search: search,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 181
            }
          }),
          react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_SearchCategories__WEBPACK_IMPORTED_MODULE_17__["default"], {
            category: category,
            renderPosts: this.renderPosts,
            root: root,
            setRoot: this.setRoot,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 187
            }
          }),
          root === "newest" || search ? this.renderNewest() : this.renderCategories()
        )
      );
    }
  }]);

  return Posts;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Posts);

/***/ }),

/***/ "./src/components/Pages/Home/styles.css":
/*!**********************************************!*\
  !*** ./src/components/Pages/Home/styles.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".home-container {\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 50px;\n}\n\n.home-image-section {\n  align-items: center;\n  background-image: url('/images/bible-home.png');\n  background-position: center;\n  color: #fff;\n  display: flex;\n  font-size: 30px;\n  font-style: italic;\n  height: 100px;\n  justify-content: center;\n  margin-bottom: 30px;\n  text-align: center;\n  width: 100%;\n  max-width: 1200px;\n}\n\n.home-features {\n  color: #039BE5;\n  display: flex;\n  font-size: 40px;\n  justify-content: center;\n  text-align: center;\n  width: 250px;\n}\n\n.home-feature {\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.home-icon {\n  align-items: center;\n  display: flex;\n}\n\n.home-plus {\n  margin: 0 15px;\n}\n\n.home-feature-name {\n  margin-top: 15px;\n}\n\n.empty-text {\n  color: rgba(0, 0, 0, 0.54);\n  font-size: 24px;\n  margin-top: 30px;\n  text-align: center;\n}\n\n.empty-clear {\n  color: #689f38;\n  cursor: pointer;\n  font-size: 20px;\n  margin-top: 10px;\n  text-align: center;\n}\n\n.home-options {\n  display: flex;\n  justify-content: center;\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./src/components/Pages/Resources/ChurchFinders.js":
/*!*********************************************************!*\
  !*** ./src/components/Pages/Resources/ChurchFinders.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "babel-runtime/helpers/extends");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants_resources_church_finders__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../constants/resources/church-finders */ "./src/constants/resources/church-finders.js");
/* harmony import */ var _Writing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Writing */ "./src/components/Writing/index.js");
/* harmony import */ var _ListItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ListItem */ "./src/components/ListItem/index.js");

var _jsxFileName = "/Users/michael.cheng/code/bibleanswers/web/src/components/Pages/Resources/ChurchFinders.js";






var ChurchFinders = function ChurchFinders() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
    "div",
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      }
    },
    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Writing__WEBPACK_IMPORTED_MODULE_3__["TitleSection"], {
      imageUrl: "/images/church.png",
      title: "Resources - Church Finders",
      subtitle: "Find a solid church to attend regularly",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      }
    }),
    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
      _Writing__WEBPACK_IMPORTED_MODULE_3__["ReadingContainer"],
      { style: { marginTop: 50 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      },
      _constants_resources_church_finders__WEBPACK_IMPORTED_MODULE_2__["default"].map(function (resource) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ListItem__WEBPACK_IMPORTED_MODULE_4__["default"], babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({ key: resource.url, showUrl: true }, resource, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 16
          }
        }));
      })
    )
  );
};

/* harmony default export */ __webpack_exports__["default"] = (ChurchFinders);

/***/ }),

/***/ "./src/components/Pages/Resources/Learn.js":
/*!*************************************************!*\
  !*** ./src/components/Pages/Resources/Learn.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "babel-runtime/helpers/extends");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants_resources_learn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../constants/resources/learn */ "./src/constants/resources/learn.js");
/* harmony import */ var _Writing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Writing */ "./src/components/Writing/index.js");
/* harmony import */ var _ListItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ListItem */ "./src/components/ListItem/index.js");

var _jsxFileName = "/Users/michael.cheng/code/bibleanswers/web/src/components/Pages/Resources/Learn.js";






var Learn = function Learn() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
    "div",
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      }
    },
    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Writing__WEBPACK_IMPORTED_MODULE_3__["TitleSection"], {
      imageUrl: "/images/grow.png",
      title: "Resources - Learn",
      subtitle: "Resources for learning more about the Bible",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      }
    }),
    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
      _Writing__WEBPACK_IMPORTED_MODULE_3__["ReadingContainer"],
      { style: { marginTop: 50 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      },
      _constants_resources_learn__WEBPACK_IMPORTED_MODULE_2__["default"].map(function (resource) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ListItem__WEBPACK_IMPORTED_MODULE_4__["default"], babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({ key: resource.url, showUrl: true }, resource, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 16
          }
        }));
      })
    )
  );
};

/* harmony default export */ __webpack_exports__["default"] = (Learn);

/***/ }),

/***/ "./src/components/Pages/Resources/index.js":
/*!*************************************************!*\
  !*** ./src/components/Pages/Resources/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "babel-runtime/helpers/extends");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants_resources__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../constants/resources */ "./src/constants/resources/index.js");
/* harmony import */ var _ListItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ListItem */ "./src/components/ListItem/index.js");
/* harmony import */ var _Writing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Writing */ "./src/components/Writing/index.js");

var _jsxFileName = "/Users/michael.cheng/code/bibleanswers/web/src/components/Pages/Resources/index.js";






var Resources = function Resources() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
    "div",
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      }
    },
    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Writing__WEBPACK_IMPORTED_MODULE_4__["TitleSection"], {
      imageUrl: "/images/tools.png",
      title: "Resources",
      subtitle: "A collection of links to websites to help you grow in your faith",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      }
    }),
    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
      _Writing__WEBPACK_IMPORTED_MODULE_4__["ReadingContainer"],
      { style: { marginTop: 50 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      },
      _constants_resources__WEBPACK_IMPORTED_MODULE_2__["default"].map(function (resource) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ListItem__WEBPACK_IMPORTED_MODULE_3__["default"], babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({ key: resource.url }, resource, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 16
          }
        }));
      })
    )
  );
};

/* harmony default export */ __webpack_exports__["default"] = (Resources);

/***/ }),

/***/ "./src/components/Popover/index.js":
/*!*****************************************!*\
  !*** ./src/components/Popover/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "babel-runtime/helpers/extends");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/core-js/object/assign */ "babel-runtime/core-js/object/assign");
/* harmony import */ var babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "babel-runtime/helpers/classCallCheck");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "babel-runtime/helpers/createClass");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "babel-runtime/helpers/inherits");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var css_vendor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! css-vendor */ "css-vendor");
/* harmony import */ var css_vendor__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(css_vendor__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! debug */ "debug");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./layout */ "./src/components/Popover/layout.js");
/* harmony import */ var _on_resize__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./on-resize */ "./src/components/Popover/on-resize.js");
/* harmony import */ var _platform__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./platform */ "./src/components/Popover/platform.js");
/* harmony import */ var _tip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./tip */ "./src/components/Popover/tip.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./utils */ "./src/components/Popover/utils.js");







var _jsxFileName = "/Users/michael.cheng/code/bibleanswers/web/src/components/Popover/index.js";











var log = debug__WEBPACK_IMPORTED_MODULE_8___default()("react-popover");

var supportedCSSValue = _utils__WEBPACK_IMPORTED_MODULE_16__["default"].clientOnly(css_vendor__WEBPACK_IMPORTED_MODULE_7__["supportedValue"]);

var jsprefix = function jsprefix(x) {
  return "" + css_vendor__WEBPACK_IMPORTED_MODULE_7__["prefix"].js + x;
};

var cssprefix = function cssprefix(x) {
  return "" + css_vendor__WEBPACK_IMPORTED_MODULE_7__["prefix"].css + x;
};

var cssvalue = function cssvalue(prop, value) {
  return supportedCSSValue(prop, value) || cssprefix(value);
};

var coreStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  display: cssvalue("display", "flex")
};

var faces = {
  above: "down",
  right: "left",
  below: "up",
  left: "right"
};

/* Flow mappings. Each map maps the flow domain to another domain. */

var flowToTipTranslations = {
  row: "translateY",
  column: "translateX"
};

var flowToPopoverTranslations = {
  row: "translateX",
  column: "translateY"
};

var Popover = function (_React$Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(Popover, _React$Component);

  function Popover(props) {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, Popover);

    var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, (Popover.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_2___default()(Popover)).call(this, props));

    _this.checkTargetReposition = function () {
      if (_this.measureTargetBounds()) _this.resolvePopoverLayout();
    };

    _this.checkForOuterAction = function (event) {
      var isOuterAction = !_this.containerEl.contains(event.target) && !_this.targetEl.contains(event.target);
      if (isOuterAction) _this.props.onOuterAction(event);
    };

    _this.onTargetResize = function () {
      log("Recalculating layout because _target_ resized!");
      _this.measureTargetBounds();
      _this.resolvePopoverLayout();
    };

    _this.onPopoverResize = function () {
      log("Recalculating layout because _popover_ resized!");
      _this.measurePopoverSize();
      _this.resolvePopoverLayout();
    };

    _this.onFrameScroll = function () {
      log("Recalculating layout because _frame_ scrolled!");
      _this.measureTargetBounds();
      _this.resolvePopoverLayout();
    };

    _this.onFrameResize = function () {
      log("Recalculating layout because _frame_ resized!");
      _this.measureFrameBounds();
      _this.resolvePopoverLayout();
    };

    _this.getContainerNodeRef = function (containerEl) {
      babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()(_this, { containerEl: containerEl });
    };

    _this.state = {
      standing: "above",
      exited: !_this.props.isOpen, // for animation-dependent rendering, should popover close/open?
      exiting: false, // for tracking in-progress animations
      toggle: _this.props.isOpen || false // for business logic tracking, should popover close/open?
    };
    return _this;
  }
  // static propTypes = {
  //   body: T.node.isRequired,
  //   children: T.element.isRequired,
  //   appendTarget: T.object,
  //   className: T.string,
  //   enterExitTransitionDurationMs: T.number,
  //   isOpen: T.bool,
  //   offset: T.number,
  //   place: T.oneOf(Layout.validTypeValues),
  //   preferPlace: T.oneOf(Layout.validTypeValues),
  //   refreshIntervalMs: T.oneOfType([T.number, T.bool]),
  //   style: T.object,
  //   tipSize: T.number,
  //   onOuterAction: T.func
  // };


  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(Popover, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      /* Our component needs a DOM Node reference to the child so that it can be
      measured so that we can correctly layout the popover. We do not have any
      control over the child so cannot leverage refs. We could wrap our own
      primitive component around the child but that could lead to breaking the
      uses layout (e.g. the child is a flex item). Leveraging findDOMNode seems
      to be the only functional solution, despite all the general warnings not to
      use it. We have a legitimate use-case. */
      // eslint-disable-next-line
      this.targetEl = react_dom__WEBPACK_IMPORTED_MODULE_11___default.a.findDOMNode(this);
      if (this.props.isOpen) this.enter();
    }
  }, {
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(propsNext) {
      //log(`Component received props!`, propsNext)
      var willOpen = !this.props.isOpen && propsNext.isOpen;
      var willClose = this.props.isOpen && !propsNext.isOpen;

      if (willOpen) this.open();else if (willClose) this.close();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(propsPrev, statePrev) {
      //log(`Component did update!`)
      var didOpen = !statePrev.toggle && this.state.toggle;
      var didClose = statePrev.toggle && !this.state.toggle;

      if (didOpen) this.enter();else if (didClose) this.exit();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      /* If the Popover is unmounted while animating,
      clear the animation so no setState occured */
      this.animateExitStop();
      /* If the Popover was never opened then then tracking
      initialization never took place and so calling untrack
      would be an error. Also see issue 55. */
      if (this.hasTracked) this.untrackPopover();
    }
  }, {
    key: "resolvePopoverLayout",
    value: function resolvePopoverLayout() {
      /* Find the optimal zone to position self. Measure the size of each zone and use the one with
      the greatest area. */

      var pickerSettings = {
        preferPlace: this.props.preferPlace,
        place: this.props.place
      };

      /* This is a kludge that solves a general problem very specifically for Popover.
      The problem is subtle. When Popover positioning changes such that it resolves at
      a different orientation, its Size will change because the Tip will toggle between
      extending Height or Width. The general problem of course is that calculating
      zone positioning based on current size is non-trivial if the Size can change once
      resolved to a different zone. Infinite recursion can be triggered as we noted here:
      https://github.com/littlebits/react-popover/issues/18. As an example of how this
      could happen in another way: Imagine the user changes the CSS styling of the popover
      based on whether it was `row` or `column` flow. TODO: Find a solution to generally
      solve this problem so that the user is free to change the Popover styles in any
      way at any time for any arbitrary trigger. There may be value in investigating the
      http://overconstrained.io community for its general layout system via the
      constraint-solver Cassowary. */
      if (this.zone) this.size[this.zone.flow === "row" ? "h" : "w"] += this.props.tipSize;
      var zone = _layout__WEBPACK_IMPORTED_MODULE_12__["default"].pickZone(pickerSettings, this.frameBounds, this.targetBounds, this.size);
      if (this.zone) this.size[this.zone.flow === "row" ? "h" : "w"] -= this.props.tipSize;

      var tb = this.targetBounds;
      this.zone = zone;
      log("zone", zone);

      this.setState({
        standing: zone.standing
      });

      var axis = _layout__WEBPACK_IMPORTED_MODULE_12__["default"].axes[zone.flow];
      log("axes", axis);

      var dockingEdgeBufferLength = Math.round(getComputedStyle(this.bodyEl).borderRadius.slice(0, -2)) || 0;
      var scrollSize = _layout__WEBPACK_IMPORTED_MODULE_12__["default"].El.calcScrollSize(this.frameEl);
      scrollSize.main = scrollSize[axis.main.size];
      scrollSize.cross = scrollSize[axis.cross.size];

      /* When positioning self on the cross-axis do not exceed frame bounds. The strategy to achieve
      this is thus: First position cross-axis self to the cross-axis-center of the the target. Then,
      offset self by the amount that self is past the boundaries of frame. */
      var pos = _layout__WEBPACK_IMPORTED_MODULE_12__["default"].calcRelPos(zone, tb, this.size);

      /* Offset allows users to control the distance betweent the tip and the target. */
      pos[axis.main.start] += this.props.offset * zone.order;

      /* Constrain containerEl Position within frameEl. Try not to penetrate a visually-pleasing buffer from
      frameEl. `frameBuffer` length is based on tipSize and its offset. */

      var frameBuffer = this.props.tipSize + this.props.offset;
      var hangingBufferLength = dockingEdgeBufferLength * 2 + this.props.tipSize * 2 + frameBuffer;
      var frameCrossStart = this.frameBounds[axis.cross.start];
      var frameCrossEnd = this.frameBounds[axis.cross.end];
      var frameCrossLength = this.frameBounds[axis.cross.size];
      var frameCrossInnerLength = frameCrossLength - frameBuffer * 2;
      var frameCrossInnerStart = frameCrossStart + frameBuffer;
      var frameCrossInnerEnd = frameCrossEnd - frameBuffer;
      var popoverCrossStart = pos[axis.cross.start];
      var popoverCrossEnd = pos[axis.cross.end];

      /* If the popover dose not fit into frameCrossLength then just position it to the `frameCrossStart`.
      popoverCrossLength` will now be forced to overflow into the `Frame` */
      if (pos.crossLength > frameCrossLength) {
        log("popoverCrossLength does not fit frame.");
        pos[axis.cross.start] = 0;

        /* If the `popoverCrossStart` is forced beyond some threshold of `targetCrossLength` then bound
        it (`popoverCrossStart`). */
      } else if (tb[axis.cross.end] < hangingBufferLength) {
        log("popoverCrossStart cannot hang any further without losing target.");
        pos[axis.cross.start] = tb[axis.cross.end] - hangingBufferLength;

        /* checking if the cross start of the target area is within the frame and it makes sense
        to try fitting popover into the frame. */
      } else if (tb[axis.cross.start] > frameCrossInnerEnd) {
        log("popoverCrossStart cannot hang any further without losing target.");
        pos[axis.cross.start] = tb[axis.cross.start] - this.size[axis.cross.size];

        /* If the `popoverCrossStart` does not fit within the inner frame (honouring buffers) then
        just center the popover in the remaining `frameCrossLength`. */
      } else if (pos.crossLength > frameCrossInnerLength) {
        log("popoverCrossLength does not fit within buffered frame.");
        pos[axis.cross.start] = (frameCrossLength - pos.crossLength) / 2;
      } else if (popoverCrossStart < frameCrossInnerStart) {
        log("popoverCrossStart cannot reverse without exceeding frame.");
        pos[axis.cross.start] = frameCrossInnerStart;
      } else if (popoverCrossEnd > frameCrossInnerEnd) {
        log("popoverCrossEnd cannot travel without exceeding frame.");
        pos[axis.cross.start] = pos[axis.cross.start] - (pos[axis.cross.end] - frameCrossInnerEnd);
      }

      /* So far the link position has been calculated relative to the target. To calculate the absolute
      position we need to factor the `Frame``s scroll position */

      pos[axis.cross.start] += scrollSize.cross;
      pos[axis.main.start] += scrollSize.main;

      /* Apply `flow` and `order` styles. This can impact subsequent measurements of height and width
      of the container. When tip changes orientation position due to changes from/to `row`/`column`
      width`/`height` will be impacted. Our layout monitoring will catch these cases and automatically
      recalculate layout. */
      if (this.containerEl) {
        this.containerEl.style.flexFlow = zone.flow;
        this.containerEl.style[jsprefix("FlexFlow")] = this.containerEl.style.flexFlow;
      }
      this.bodyEl.style.order = zone.order;
      this.bodyEl.style[jsprefix("Order")] = this.bodyEl.style.order;

      /* Apply Absolute Positioning. */

      log("pos", pos);
      if (this.containerEl) {
        this.containerEl.style.top = pos.y + "px";
        this.containerEl.style.left = pos.x + "px";
      }

      /* Calculate Tip Position */

      var tipCrossPos =
      /* Get the absolute tipCrossCenter. Tip is positioned relative to containerEl
      but it aims at targetCenter which is positioned relative to frameEl... we
      need to cancel the containerEl positioning so as to hit our intended position. */
      _layout__WEBPACK_IMPORTED_MODULE_12__["default"].centerOfBoundsFromBounds(zone.flow, "cross", tb, pos) +
      /* centerOfBounds does not account for scroll so we need to manually add that
      here. */
      scrollSize.cross -
      /* Center tip relative to self. We do not have to calcualte half-of-tip-size since tip-size
      specifies the length from base to tip which is half of total length already. */
      this.props.tipSize;

      if (tipCrossPos < dockingEdgeBufferLength) tipCrossPos = dockingEdgeBufferLength;else if (tipCrossPos > pos.crossLength - dockingEdgeBufferLength - this.props.tipSize * 2) {
        tipCrossPos = pos.crossLength - dockingEdgeBufferLength - this.props.tipSize * 2;
      }

      this.tipEl.style.transform = flowToTipTranslations[zone.flow] + "(" + tipCrossPos + "px)";
      this.tipEl.style[jsprefix("Transform")] = this.tipEl.style.transform;
    }
  }, {
    key: "measurePopoverSize",
    value: function measurePopoverSize() {
      this.size = _layout__WEBPACK_IMPORTED_MODULE_12__["default"].El.calcSize(this.containerEl);
    }
  }, {
    key: "measureTargetBounds",
    value: function measureTargetBounds() {
      var newTargetBounds = _layout__WEBPACK_IMPORTED_MODULE_12__["default"].El.calcBounds(this.targetEl);

      if (this.targetBounds && _layout__WEBPACK_IMPORTED_MODULE_12__["default"].equalCoords(this.targetBounds, newTargetBounds)) {
        return false;
      }

      this.targetBounds = newTargetBounds;
      return true;
    }
  }, {
    key: "open",
    value: function open() {
      if (this.state.exiting) this.animateExitStop();
      this.setState({ toggle: true, exited: false });
    }
  }, {
    key: "close",
    value: function close() {
      this.setState({ toggle: false });
    }
  }, {
    key: "enter",
    value: function enter() {
      if (_platform__WEBPACK_IMPORTED_MODULE_14__["default"].isServer) return;
      log("enter!");
      this.trackPopover();
      this.animateEnter();
    }
  }, {
    key: "exit",
    value: function exit() {
      log("exit!");
      this.animateExit();
      this.untrackPopover();
    }
  }, {
    key: "animateExitStop",
    value: function animateExitStop() {
      clearTimeout(this.exitingAnimationTimer1);
      clearTimeout(this.exitingAnimationTimer2);
      this.setState({ exiting: false });
    }
  }, {
    key: "animateExit",
    value: function animateExit() {
      var _this2 = this;

      this.setState({ exiting: true });
      this.exitingAnimationTimer2 = setTimeout(function () {
        setTimeout(function () {
          if (_this2.containerEl) {
            _this2.containerEl.style.transform = flowToPopoverTranslations[_this2.zone.flow] + "(" + _this2.zone.order * 50 + "px)";
            _this2.containerEl.style.opacity = "0";
          }
        }, 0);
      }, 0);

      this.exitingAnimationTimer1 = setTimeout(function () {
        _this2.setState({ exited: true, exiting: false });
      }, this.props.enterExitTransitionDurationMs);
    }
  }, {
    key: "animateEnter",
    value: function animateEnter() {
      /* Prepare `entering` style so that we can then animate it toward `entered`. */

      this.containerEl.style.transform = flowToPopoverTranslations[this.zone.flow] + "(" + this.zone.order * 50 + "px)";
      this.containerEl.style[jsprefix("Transform")] = this.containerEl.style.transform;
      this.containerEl.style.opacity = "0";

      /* After initial layout apply transition animations. */
      /* Hack: http://stackoverflow.com/questions/3485365/how-can-i-force-webkit-to-redraw-repaint-to-propagate-style-changes */
      this.containerEl.offsetHeight; // eslint-disable-line no-unused-expressions

      /* If enterExitTransitionDurationMs is falsy, tip animation should be also disabled */
      if (this.props.enterExitTransitionDurationMs) {
        this.tipEl.style.transition = "transform 150ms ease-in";
        this.tipEl.style[jsprefix("Transition")] = cssprefix("transform") + " 150ms ease-in";
      }
      this.containerEl.style.transitionProperty = "top, left, opacity, transform";
      this.containerEl.style.transitionDuration = this.props.enterExitTransitionDurationMs + "ms";
      this.containerEl.style.transitionTimingFunction = "cubic-bezier(0.230, 1.000, 0.320, 1.000)";
      this.containerEl.style.opacity = "1";
      this.containerEl.style.transform = "translateY(0)";
      this.containerEl.style[jsprefix("Transform")] = this.containerEl.style.transform;
    }
  }, {
    key: "trackPopover",
    value: function trackPopover() {
      var minScrollRefreshIntervalMs = 200;
      var minResizeRefreshIntervalMs = 200;

      /* Get references to DOM elements. */

      this.bodyEl = this.containerEl.querySelector(".Popover-body");
      this.tipEl = this.containerEl.querySelector(".Popover-tip");

      /* Note: frame is hardcoded to window now but we think it will
      be a nice feature in the future to allow other frames to be used
      such as local elements that further constrain the popover`s world. */

      this.frameEl = _platform__WEBPACK_IMPORTED_MODULE_14__["default"].window;
      this.hasTracked = true;

      /* Set a general interval for checking if target position changed. There is no way
      to know this information without polling. */
      if (this.props.refreshIntervalMs) {
        this.checkLayoutInterval = setInterval(this.checkTargetReposition, this.props.refreshIntervalMs);
      }

      /* Watch for boundary changes in all deps, and when one of them changes, recalculate layout.
      This layout monitoring must be bound immediately because a layout recalculation can recursively
      cause a change in boundaries. So if we did a one-time force-layout before watching boundaries
      our final position calculations could be wrong. See comments in resolver function for details
      about which parts can trigger recursive recalculation. */

      this.onFrameScroll = Object(lodash__WEBPACK_IMPORTED_MODULE_9__["throttle"])(this.onFrameScroll, minScrollRefreshIntervalMs);
      this.onFrameResize = Object(lodash__WEBPACK_IMPORTED_MODULE_9__["throttle"])(this.onFrameResize, minResizeRefreshIntervalMs);
      this.onPopoverResize = Object(lodash__WEBPACK_IMPORTED_MODULE_9__["throttle"])(this.onPopoverResize, minResizeRefreshIntervalMs);
      this.onTargetResize = Object(lodash__WEBPACK_IMPORTED_MODULE_9__["throttle"])(this.onTargetResize, minResizeRefreshIntervalMs);

      this.frameEl.addEventListener("scroll", this.onFrameScroll);
      _on_resize__WEBPACK_IMPORTED_MODULE_13__["default"].on(this.frameEl, this.onFrameResize);
      _on_resize__WEBPACK_IMPORTED_MODULE_13__["default"].on(this.containerEl, this.onPopoverResize);
      _on_resize__WEBPACK_IMPORTED_MODULE_13__["default"].on(this.targetEl, this.onTargetResize);

      /* Track user actions on the page. Anything that occurs _outside_ the Popover boundaries
      should close the Popover. */

      _platform__WEBPACK_IMPORTED_MODULE_14__["default"].document.addEventListener("mousedown", this.checkForOuterAction);
      _platform__WEBPACK_IMPORTED_MODULE_14__["default"].document.addEventListener("touchstart", this.checkForOuterAction);

      /* Kickstart layout at first boot. */

      this.measurePopoverSize();
      this.measureFrameBounds();
      this.measureTargetBounds();
      this.resolvePopoverLayout();
    }
  }, {
    key: "untrackPopover",
    value: function untrackPopover() {
      clearInterval(this.checkLayoutInterval);
      this.frameEl.removeEventListener("scroll", this.onFrameScroll);
      _on_resize__WEBPACK_IMPORTED_MODULE_13__["default"].off(this.frameEl, this.onFrameResize);
      _on_resize__WEBPACK_IMPORTED_MODULE_13__["default"].off(this.containerEl, this.onPopoverResize);
      _on_resize__WEBPACK_IMPORTED_MODULE_13__["default"].off(this.targetEl, this.onTargetResize);
      _platform__WEBPACK_IMPORTED_MODULE_14__["default"].document.removeEventListener("mousedown", this.checkForOuterAction);
      _platform__WEBPACK_IMPORTED_MODULE_14__["default"].document.removeEventListener("touchstart", this.checkForOuterAction);
      this.hasTracked = false;
    }
  }, {
    key: "measureFrameBounds",
    value: function measureFrameBounds() {
      this.frameBounds = _layout__WEBPACK_IMPORTED_MODULE_12__["default"].El.calcBounds(this.frameEl);
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          _props$className = _props.className,
          className = _props$className === undefined ? "" : _props$className,
          _props$style = _props.style,
          style = _props$style === undefined ? {} : _props$style,
          tipSize = _props.tipSize,
          _props$width = _props.width,
          width = _props$width === undefined ? 230 : _props$width;
      var standing = this.state.standing;


      var popoverProps = {
        className: "Popover Popover-" + standing + " " + className,
        style: babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()({}, coreStyle, style)
      };

      var popover = this.state.exited ? null : react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(
        "div",
        babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({ ref: this.getContainerNodeRef }, popoverProps, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 501
          }
        }),
        react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
          className: "Popover-body",
          children: this.props.body,
          style: {
            background: "#fff",
            borderRadius: 3,
            boxShadow: "0 1px 2px rgba(0,0,0,.25), 0 0 1px rgba(0,0,0,.35)",
            position: "relative",
            top: -8,
            width: width
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 502
          }
        }),
        react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_tip__WEBPACK_IMPORTED_MODULE_15__["default"], { direction: faces[standing], size: tipSize, __source: {
            fileName: _jsxFileName,
            lineNumber: 514
          }
        })
      );
      return [this.props.children, _platform__WEBPACK_IMPORTED_MODULE_14__["default"].isClient && react_dom__WEBPACK_IMPORTED_MODULE_11___default.a.createPortal(popover, this.props.appendTarget)];
    }
  }]);

  return Popover;
}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component);

Popover.defaultProps = {
  tipSize: 7,
  preferPlace: null,
  place: null,
  offset: 4,
  isOpen: false,
  onOuterAction: _utils__WEBPACK_IMPORTED_MODULE_16__["default"].noop,
  enterExitTransitionDurationMs: 500,
  children: null,
  refreshIntervalMs: 200,
  appendTarget: _platform__WEBPACK_IMPORTED_MODULE_14__["default"].isClient ? _platform__WEBPACK_IMPORTED_MODULE_14__["default"].document.body : null
};


/* harmony default export */ __webpack_exports__["default"] = (Popover);

/***/ }),

/***/ "./src/components/Popover/layout.js":
/*!******************************************!*\
  !*** ./src/components/Popover/layout.js ***!
  \******************************************/
/*! exports provided: default, El, types, validTypeValues, calcRelPos, place, pickZone, axes, centerOfSize, centerOfBounds, centerOfBoundsFromBounds, doesFitWithin, equalCoords */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "El", function() { return El; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "types", function() { return types; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validTypeValues", function() { return validTypeValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calcRelPos", function() { return calcRelPos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "place", function() { return place; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pickZone", function() { return pickZone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "axes", function() { return axes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "centerOfSize", function() { return centerOfSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "centerOfBounds", function() { return centerOfBounds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "centerOfBoundsFromBounds", function() { return centerOfBoundsFromBounds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doesFitWithin", function() { return doesFitWithin; });
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "babel-runtime/helpers/defineProperty");
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _platform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./platform */ "./src/components/Popover/platform.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./src/components/Popover/utils.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "equalCoords", function() { return _utils__WEBPACK_IMPORTED_MODULE_2__["equalRecords"]; });





/* Axes System

This allows us to at-will work in a different orientation
without having to manually keep track of knowing if we should be using
x or y positions. */

var axes = {
  row: {},
  column: {}
};

axes.row.main = {
  start: "x",
  end: "x2",
  size: "w"
};
axes.row.cross = {
  start: "y",
  end: "y2",
  size: "h"
};
axes.column.main = axes.row.cross;
axes.column.cross = axes.row.main;

var types = [{ name: "side", values: ["start", "end"] }, { name: "standing", values: ["above", "right", "below", "left"] }, { name: "flow", values: ["column", "row"] }];

var validTypeValues = types.reduce(function (xs, _ref) {
  var values = _ref.values;
  return xs.concat(values);
}, []);

var centerOfSize = function centerOfSize(flow, axis, size) {
  return size[axes[flow][axis].size] / 2;
};

var centerOfBounds = function centerOfBounds(flow, axis, bounds) {
  return bounds[axes[flow][axis].start] + bounds[axes[flow][axis].size] / 2;
};

var centerOfBoundsFromBounds = function centerOfBoundsFromBounds(flow, axis, boundsTo, boundsFrom) {
  return centerOfBounds(flow, axis, boundsTo) - boundsFrom[axes[flow][axis].start];
};

var place = function place(flow, axis, align, bounds, size) {
  var axisProps = axes[flow][axis];
  return align === "center" ? centerOfBounds(flow, axis, bounds) - centerOfSize(flow, axis, size) : align === "end" ? bounds[axisProps.end] : align === "start" ? /* DOM rendering unfolds leftward. Therefore if the slave is positioned before
                                                                                                                                                                  the master then the slave`s position must in addition be pulled back
                                                                                                                                                                  by its [the slave`s] own length. */
  bounds[axisProps.start] - size[axisProps.size] : null;
};

/* Element Layout Queries */

var El = {};

El.calcBounds = function (el) {
  if (el === _platform__WEBPACK_IMPORTED_MODULE_1__["window"]) {
    return {
      x: 0,
      y: 0,
      x2: el.innerWidth + 18,
      y2: el.innerHeight,
      w: el.innerWidth,
      h: el.innerHeight
    };
  }

  var b = el.getBoundingClientRect();

  return {
    x: b.left,
    y: b.top,
    x2: b.right,
    y2: b.bottom,
    w: b.right - b.left,
    h: b.bottom - b.top
  };
};

El.calcSize = function (el) {
  return el === _platform__WEBPACK_IMPORTED_MODULE_1__["window"] ? { w: el.innerWidth, h: el.innerHeight } : { w: el.offsetWidth, h: el.offsetHeight };
};

El.calcScrollSize = function (el) {
  return el === _platform__WEBPACK_IMPORTED_MODULE_1__["window"] ? {
    w: el.scrollX || el.pageXOffset,
    h: el.scrollY || el.pageYOffset
  } : { w: el.scrollLeft, h: el.scrollTop };
};

/* Misc Utilities */

var getPreferenceType = function getPreferenceType(preference) {
  return types.reduce(function (found, type) {
    return found ? found : type.values.indexOf(preference) !== -1 ? type.name : null;
  }, null);
};

/* Dimension Fit Checks */

var fitWithinChecker = function fitWithinChecker(dimension) {
  return function (domainSize, itemSize) {
    return domainSize[dimension] >= itemSize[dimension];
  };
};

var doesWidthFitWithin = fitWithinChecker("w");
var doesHeightFitWithin = fitWithinChecker("h");

var doesFitWithin = function doesFitWithin(domainSize, itemSize) {
  return doesWidthFitWithin(domainSize, itemSize) && doesHeightFitWithin(domainSize, itemSize);
};

/* Errors */

var createPreferenceError = function createPreferenceError(givenValue) {
  return new Error("The given layout placement of \"" + givenValue + "\" is not a valid choice. Valid choices are: " + validTypeValues.join(" | ") + ".");
};

/* Algorithm for picking the best fitting zone for popover. The current technique will loop through all zones picking the last one that fits.
In the case that none fit we should pick the least-not-fitting zone. */

var pickZone = function pickZone(opts, frameBounds, targetBounds, size) {
  var t = targetBounds;
  var f = frameBounds;
  var zones = [{
    side: "start",
    standing: "above",
    flow: "column",
    order: -1,
    w: f.x2,
    h: t.y
  }, {
    side: "end",
    standing: "right",
    flow: "row",
    order: 1,
    w: f.x2 - t.x2,
    h: f.y2
  }, {
    side: "end",
    standing: "below",
    flow: "column",
    order: 1,
    w: f.x2,
    h: f.y2 - t.y2
  }, {
    side: "start",
    standing: "left",
    flow: "row",
    order: -1,
    w: t.x,
    h: f.y2
  }];

  /* Order the zones by the amount of popup that would be cut out if that zone is used.
     The first one in the array is the one that cuts the least amount.
      const area = size.w * size.h  // Popup area is constant and it does not change the order
  */
  zones.forEach(function (z) {
    // TODO Update to satisfy linter
    // eslint-disable-next-line no-param-reassign
    z.cutOff =
    /* area */-Math.max(0, Math.min(z.w, size.w)) * Math.max(0, Math.min(z.h, size.h));
  });
  zones.sort(function (a, b) {
    return a.cutOff - b.cutOff;
  });

  var availZones = zones.filter(function (zone) {
    return doesFitWithin(zone, size);
  });

  /* If a place is required pick it from the available zones if possible. */

  if (opts.place) {
    var type = getPreferenceType(opts.place);
    if (!type) throw createPreferenceError(opts.place);
    var finder = function finder(z) {
      return z[type] === opts.place;
    };
    return Object(_utils__WEBPACK_IMPORTED_MODULE_2__["find"])(finder, availZones) || Object(_utils__WEBPACK_IMPORTED_MODULE_2__["find"])(finder, zones);
  }

  /* If the preferred side is part of the available zones, use that otherwise
  pick the largest available zone. If there are no available zones, pick the
  largest zone. */

  if (opts.preferPlace) {
    var preferenceType = getPreferenceType(opts.preferPlace);
    if (!preferenceType) throw createPreferenceError(opts.preferPlace);

    // Try to fit first in zone where the pop up fit completely
    var preferredAvailZones = availZones.filter(function (zone) {
      return zone[preferenceType] === opts.preferPlace;
    });
    if (preferredAvailZones.length) return preferredAvailZones[0];

    // If there are not areas where the pop up fit completely, it uses the preferred ones
    // in order from the one the fit better
    var preferredZones = zones.filter(function (zone) {
      return zone[preferenceType] === opts.preferPlace;
    });
    if (!availZones.length && preferredZones.length) return preferredZones[0];
  }

  // Return a zone that fit completely or the one that fit the best
  return availZones.length ? availZones[0] : zones[0];
};

/* TODO Document this. */

var calcRelPos = function calcRelPos(zone, masterBounds, slaveSize) {
  var _ref2;

  var _axes$zone$flow = axes[zone.flow],
      main = _axes$zone$flow.main,
      cross = _axes$zone$flow.cross;
  /* TODO: The slave is hard-coded to align cross-center with master. */

  var crossAlign = "center";
  var mainStart = place(zone.flow, "main", zone.side, masterBounds, slaveSize);
  var mainSize = slaveSize[main.size];
  var crossStart = place(zone.flow, "cross", crossAlign, masterBounds, slaveSize);
  var crossSize = slaveSize[cross.size];

  return _ref2 = {}, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ref2, main.start, mainStart), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ref2, "mainLength", mainSize), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ref2, main.end, mainStart + mainSize), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ref2, cross.start, crossStart), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ref2, "crossLength", crossSize), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ref2, cross.end, crossStart + crossSize), _ref2;
};

/* harmony default export */ __webpack_exports__["default"] = ({
  El: El,
  types: types,
  validTypeValues: validTypeValues,
  calcRelPos: calcRelPos,
  place: place,
  pickZone: pickZone,
  axes: axes,
  centerOfSize: centerOfSize,
  centerOfBounds: centerOfBounds,
  centerOfBoundsFromBounds: centerOfBoundsFromBounds,
  doesFitWithin: doesFitWithin,
  equalCoords: _utils__WEBPACK_IMPORTED_MODULE_2__["equalRecords"]
});


/***/ }),

/***/ "./src/components/Popover/on-resize.js":
/*!*********************************************!*\
  !*** ./src/components/Popover/on-resize.js ***!
  \*********************************************/
/*! exports provided: default, on, off, addEventListener, removeEventListener */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "on", function() { return on; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "off", function() { return off; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addEventListener", function() { return on; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeEventListener", function() { return off; });
/* harmony import */ var _platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./platform */ "./src/components/Popover/platform.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/components/Popover/utils.js");
/* eslint no-param-reassign: 0 */




var requestAnimationFrame = _platform__WEBPACK_IMPORTED_MODULE_0__["isServer"] ? _utils__WEBPACK_IMPORTED_MODULE_1__["noop"] : _platform__WEBPACK_IMPORTED_MODULE_0__["window"].requestAnimationFrame || _platform__WEBPACK_IMPORTED_MODULE_0__["window"].mozRequestAnimationFrame || _platform__WEBPACK_IMPORTED_MODULE_0__["window"].webkitRequestAnimationFrame || function (fn) {
  _platform__WEBPACK_IMPORTED_MODULE_0__["window"].setTimeout(fn, 20);
};

var cancelAnimationFrame = _platform__WEBPACK_IMPORTED_MODULE_0__["isServer"] ? _utils__WEBPACK_IMPORTED_MODULE_1__["noop"] : _platform__WEBPACK_IMPORTED_MODULE_0__["window"].cancelAnimationFrame || _platform__WEBPACK_IMPORTED_MODULE_0__["window"].mozCancelAnimationFrame || _platform__WEBPACK_IMPORTED_MODULE_0__["window"].webkitCancelAnimationFrame || _platform__WEBPACK_IMPORTED_MODULE_0__["window"].clearTimeout;

var isIE = _platform__WEBPACK_IMPORTED_MODULE_0__["isServer"] ? false : navigator.userAgent.match(/Trident/);

var namespace = "__resizeDetector__";

var uninitialize = function uninitialize(el) {
  el[namespace].destroy();
  el[namespace] = undefined;
};

var createElementHack = function createElementHack() {
  var el = document.createElement("object");
  el.className = "resize-sensor";
  el.setAttribute("style", "display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; pointer-events: none; z-index: -1;");
  el.setAttribute("class", "resize-sensor");
  el.setAttribute("tabindex", "-1");
  el.type = "text/html";
  el.data = "about:blank";
  return el;
};

var initialize = function initialize(el) {
  var detector = el[namespace] = {};
  detector.listeners = [];

  var onResize = function onResize(e) {
    /* Keep in mind e.target could be el OR objEl. In this current implementation we don't seem to need to know this but its important
    to not forget e.g. in some future refactoring scenario. */
    if (detector.resizeRAF) cancelAnimationFrame(detector.resizeRAF);
    detector.resizeRAF = requestAnimationFrame(function () {
      detector.listeners.forEach(function (fn) {
        fn(e);
      });
    });
  };

  if (isIE) {
    /* We do not support ie8 and below (or ie9 in compat mode).
    Therefore there is no presence of `attachEvent` here. */
    el.addEventListener("onresize", onResize);
    detector.destroy = function () {
      el.removeEventListener("onresize", onResize);
    };
  } else {
    if (getComputedStyle(el).position === "static") {
      detector.elWasStaticPosition = true;
      el.style.position = "relative";
    }
    var objEl = createElementHack();
    objEl.onload = function () /* event */{
      this.contentDocument.defaultView.addEventListener("resize", onResize);
    };
    detector.destroy = function () {
      if (detector.elWasStaticPosition) el.style.position = "";
      if (el.contains(objEl)) {
        // Event handlers will be automatically removed.
        // http://stackoverflow.com/questions/12528049/if-a-dom-element-is-removed-are-its-listeners-also-removed-from-memory
        el.removeChild(objEl);
      }
    };

    el.appendChild(objEl);
  }
};

var on = function on(el, fn) {
  /* Window object natively publishes resize events. We handle it as a
  special case here so that users do not have to think about two APIs. */

  if (el === _platform__WEBPACK_IMPORTED_MODULE_0__["window"]) {
    _platform__WEBPACK_IMPORTED_MODULE_0__["window"].addEventListener("resize", fn);
    return;
  }

  /* Not caching namespace read here beacuse not guaranteed that its available. */

  if (!el[namespace]) initialize(el);
  el[namespace].listeners.push(fn);
};

var off = function off(el, fn) {
  if (el === _platform__WEBPACK_IMPORTED_MODULE_0__["window"]) {
    _platform__WEBPACK_IMPORTED_MODULE_0__["window"].removeEventListener("resize", fn);
    return;
  }
  var detector = el[namespace];
  if (!detector) return;
  var i = detector.listeners.indexOf(fn);
  if (i !== -1) detector.listeners.splice(i, 1);
  if (!detector.listeners.length) uninitialize(el);
};

/* harmony default export */ __webpack_exports__["default"] = ({
  on: on,
  off: off,
  addEventListener: on,
  removeEventListener: off
});


/***/ }),

/***/ "./src/components/Popover/platform.js":
/*!********************************************!*\
  !*** ./src/components/Popover/platform.js ***!
  \********************************************/
/*! exports provided: default, isServer, isClient, window, document */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isServer", function() { return isServer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isClient", function() { return isClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "window", function() { return WINDOW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "document", function() { return DOCUMENT; });
var isServer = typeof window === "undefined";
var isClient = !isServer;
var WINDOW = isClient ? window : null;
var DOCUMENT = isClient ? document : null;

/* harmony default export */ __webpack_exports__["default"] = ({
  isServer: isServer,
  isClient: isClient,
  window: WINDOW,
  document: DOCUMENT
});


/***/ }),

/***/ "./src/components/Popover/tip.js":
/*!***************************************!*\
  !*** ./src/components/Popover/tip.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "babel-runtime/helpers/extends");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "/Users/michael.cheng/code/bibleanswers/web/src/components/Popover/tip.js";


var Tip = function Tip(props) {
  var direction = props.direction;

  var size = props.size || 24;
  var isPortrait = direction === "up" || direction === "down";
  var mainLength = size;
  var crossLength = size * 2;
  var svgProps = {
    className: "Popover-tip",
    width: isPortrait ? crossLength : mainLength,
    height: isPortrait ? mainLength : crossLength
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
    "div",
    babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, svgProps, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      }
    }),
    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: {
        background: "#fff",
        borderBottomWidth: 0,
        borderRightWidth: 0,
        boxShadow: "-1px -1px 1px -1px rgba(0,0,0,.54)",
        height: 14,
        transform: "rotate(45deg)",
        width: 14
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      }
    })
  );
};

/* harmony default export */ __webpack_exports__["default"] = (Tip);

/***/ }),

/***/ "./src/components/Popover/utils.js":
/*!*****************************************!*\
  !*** ./src/components/Popover/utils.js ***!
  \*****************************************/
/*! exports provided: default, find, equalRecords, noop, clientOnly */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "find", function() { return find; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equalRecords", function() { return equalRecords; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noop", function() { return noop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clientOnly", function() { return clientOnly; });
/* harmony import */ var _platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./platform */ "./src/components/Popover/platform.js");


var find = function find(f, xs) {
  return xs.reduce(function (b, x) {
    return b ? b : f(x) ? x : null;
  }, null);
};

var equalRecords = function equalRecords(o1, o2) {
  for (var key in o1) {
    if (o1[key] !== o2[key]) return false;
  }return true;
};

var noop = function noop() {
  return undefined;
};

var clientOnly = function clientOnly(f) {
  return _platform__WEBPACK_IMPORTED_MODULE_0__["isClient"] ? f : noop;
};

/* harmony default export */ __webpack_exports__["default"] = ({
  find: find,
  equalRecords: equalRecords,
  noop: noop,
  clientOnly: clientOnly
});


/***/ }),

/***/ "./src/components/Search/index.js":
/*!****************************************!*\
  !*** ./src/components/Search/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "babel-runtime/helpers/classCallCheck");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "babel-runtime/helpers/createClass");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "babel-runtime/helpers/inherits");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/fa */ "react-icons/fa");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles.css */ "./src/components/Search/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _constants_posts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../constants/posts */ "./src/constants/posts/index.js");





var _jsxFileName = "/Users/michael.cheng/code/bibleanswers/web/src/components/Search/index.js";







var Template = function (_Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Template, _Component);

  function Template() {
    var _ref;

    var _temp, _this, _ret;

    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Template);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (_ref = Template.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(Template)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      inputFocused: false
    }, _temp), babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(_this, _ret);
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Template, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var inputFocused = this.state.inputFocused;
      var _props = this.props,
          onClearSearch = _props.onClearSearch,
          onSearchChange = _props.onSearchChange,
          posts = _props.posts,
          search = _props.search;


      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
        "div",
        { className: "search-container", __source: {
            fileName: _jsxFileName,
            lineNumber: 18
          }
        },
        react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__["FaSearch"], {
          style: {
            color: inputFocused ? "#039be5" : "rgba(0,0,0,.54)",
            position: "relative",
            top: 5
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 19
          }
        }),
        react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
          "div",
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 26
            }
          },
          react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
            className: "search",
            onChange: onSearchChange,
            onFocus: function onFocus() {
              return _this2.setState({ inputFocused: true });
            },
            onBlur: function onBlur() {
              return _this2.setState({ inputFocused: false });
            },
            placeholder: "Search",
            style: {
              borderBottom: inputFocused ? "1px solid #039be5" : ""
            },
            value: search,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 27
            }
          }),
          react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
            "div",
            { className: "results", __source: {
                fileName: _jsxFileName,
                lineNumber: 38
              }
            },
            "Showing " + (Object(lodash__WEBPACK_IMPORTED_MODULE_7__["isNumber"])(posts.postCount) ? posts.postCount : posts.length) + "/" + _constants_posts__WEBPACK_IMPORTED_MODULE_9__["ALL_POSTS"].length + " results"
          )
        ),
        search ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__["FaTimes"], {
          style: {
            color: "#F44336",
            cursor: "pointer",
            position: "relative",
            top: 5
          },
          onClick: onClearSearch,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 45
          }
        }) : null
      );
    }
  }]);

  return Template;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Template);

/***/ }),

/***/ "./src/components/Search/styles.css":
/*!******************************************!*\
  !*** ./src/components/Search/styles.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".search-container {\n  color: rgba(0, 0, 0, 0.54);\n  display: flex;\n  justify-content: center;\n  margin: 0 auto 30px;\n}\n\n.search {\n  border: 0;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.54);\n  display: block;\n  font-size: 20px;\n  margin-left: 4px;\n  outline: none;\n  text-align: center;\n  width: 300px;\n}\n\n.results {\n  color: rgba(0, 0, 0, 0.54);\n  font-size: 14px;\n  margin-top: 10px;\n  text-align: center;\n}", ""]);

// exports


/***/ }),

/***/ "./src/components/SearchCategories/index.js":
/*!**************************************************!*\
  !*** ./src/components/SearchCategories/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "babel-runtime/helpers/classCallCheck");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "babel-runtime/helpers/createClass");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "babel-runtime/helpers/inherits");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles.css */ "./src/components/SearchCategories/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_9__);





var _jsxFileName = "/Users/michael.cheng/code/bibleanswers/web/src/components/SearchCategories/index.js";






var SearchCategories = function (_Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(SearchCategories, _Component);

  function SearchCategories() {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, SearchCategories);

    return babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (SearchCategories.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(SearchCategories)).apply(this, arguments));
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(SearchCategories, [{
    key: "renderRoot",
    value: function renderRoot(label) {
      var _props = this.props,
          root = _props.root,
          setRoot = _props.setRoot;


      var classNames = classnames__WEBPACK_IMPORTED_MODULE_9___default()("search-category", {
        "search-category__active": label === root
      });

      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
        react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Link"],
        { to: "/categories/" + label, __source: {
            fileName: _jsxFileName,
            lineNumber: 16
          }
        },
        react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
          "div",
          { className: classNames, onClick: Object(lodash__WEBPACK_IMPORTED_MODULE_8__["partial"])(setRoot, label), __source: {
              fileName: _jsxFileName,
              lineNumber: 17
            }
          },
          label
        )
      );
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
        "div",
        { className: "search-categories__container", __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          }
        },
        react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
          "div",
          { className: "search-categories__root", __source: {
              fileName: _jsxFileName,
              lineNumber: 27
            }
          },
          this.renderRoot("newest"),
          this.renderRoot("apologetics"),
          this.renderRoot("theology")
        )
      );
    }
  }]);

  return SearchCategories;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (SearchCategories);

/***/ }),

/***/ "./src/components/SearchCategories/styles.css":
/*!****************************************************!*\
  !*** ./src/components/SearchCategories/styles.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".search-categories__container {\n  margin-bottom: 30px;\n}\n\n.search-categories__root {\n  display: flex;\n  justify-content: space-around;\n}\n\n.search-category {\n  color: #689F38;\n  cursor: pointer;\n  text-transform: capitalize;\n}\n\n.search-category__active {\n  color: #039BE5;\n  font-weight: bold;\n}", ""]);

// exports


/***/ }),

/***/ "./src/components/Writing/Page.js":
/*!****************************************!*\
  !*** ./src/components/Writing/Page.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "babel-runtime/helpers/extends");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "babel-runtime/helpers/classCallCheck");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "babel-runtime/helpers/createClass");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "babel-runtime/helpers/inherits");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _constants_posts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../constants/posts */ "./src/constants/posts/index.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./index */ "./src/components/Writing/index.js");
/* harmony import */ var _ListItem__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../ListItem */ "./src/components/ListItem/index.js");






var _jsxFileName = "/Users/michael.cheng/code/bibleanswers/web/src/components/Writing/Page.js";







var Page = function (_Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Page, _Component);

  function Page() {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, Page);

    return babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, (Page.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1___default()(Page)).apply(this, arguments));
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(Page, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.scrollTo(0, 0);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.post.url !== this.props.post.url) {
        window.scrollTo(0, 0);
      }
    }
  }, {
    key: "renderBeforeContent",
    value: function renderBeforeContent() {
      var beforeContent = this.props.beforeContent;


      if (!beforeContent) {
        return null;
      }

      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
        _index__WEBPACK_IMPORTED_MODULE_9__["ReadingContainer"],
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          }
        },
        react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", { dangerouslySetInnerHTML: { __html: beforeContent }, __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          }
        })
      );
    }
  }, {
    key: "renderReadMore",
    value: function renderReadMore() {
      var post = this.props.post;


      var index = Object(lodash__WEBPACK_IMPORTED_MODULE_7__["findIndex"])(_constants_posts__WEBPACK_IMPORTED_MODULE_8__["ALL_POSTS"], function (postData) {
        return postData.url === post.url;
      });

      var posts = [];

      var upCount = 0;
      var downCount = 0;

      while (posts.length < 6) {
        if (_constants_posts__WEBPACK_IMPORTED_MODULE_8__["ALL_POSTS"][index + upCount + 1] && upCount <= 3) {
          upCount++;
          posts.push(_constants_posts__WEBPACK_IMPORTED_MODULE_8__["ALL_POSTS"][index + upCount]);
        } else if (_constants_posts__WEBPACK_IMPORTED_MODULE_8__["ALL_POSTS"][index - downCount - 1]) {
          downCount++;
          posts.push(_constants_posts__WEBPACK_IMPORTED_MODULE_8__["ALL_POSTS"][index - downCount]);
        } else if (_constants_posts__WEBPACK_IMPORTED_MODULE_8__["ALL_POSTS"][index + upCount + 1]) {
          upCount++;
          posts.push(_constants_posts__WEBPACK_IMPORTED_MODULE_8__["ALL_POSTS"][index + upCount]);
        }
      }

      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
        "div",
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 59
          }
        },
        react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
          "div",
          { className: "divider", style: { marginTop: 21 }, __source: {
              fileName: _jsxFileName,
              lineNumber: 60
            }
          },
          "..."
        ),
        react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
          "div",
          { className: "writing", style: { marginBottom: 21 }, __source: {
              fileName: _jsxFileName,
              lineNumber: 63
            }
          },
          react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
            "h3",
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 64
              }
            },
            "Read more"
          )
        ),
        posts.map(function (post) {
          return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_ListItem__WEBPACK_IMPORTED_MODULE_10__["default"], babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({ key: post.url }, post, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 67
            }
          }));
        })
      );
    }
  }, {
    key: "render",
    value: function render() {
      var post = this.props.post;
      var content = post.content;


      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
        "div",
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 79
          }
        },
        react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_index__WEBPACK_IMPORTED_MODULE_9__["TitleSection"], babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, post, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 80
          }
        })),
        this.renderBeforeContent(),
        react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
          _index__WEBPACK_IMPORTED_MODULE_9__["ReadingContainer"],
          { style: { marginBottom: 20 }, __source: {
              fileName: _jsxFileName,
              lineNumber: 84
            }
          },
          react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", { dangerouslySetInnerHTML: { __html: content }, __source: {
              fileName: _jsxFileName,
              lineNumber: 85
            }
          }),
          this.renderReadMore()
        )
      );
    }
  }]);

  return Page;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ }),

/***/ "./src/components/Writing/ReadingContainer.js":
/*!****************************************************!*\
  !*** ./src/components/Writing/ReadingContainer.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/michael.cheng/code/bibleanswers/web/src/components/Writing/ReadingContainer.js";


var ReadingContainer = function ReadingContainer(_ref) {
  var children = _ref.children,
      style = _ref.style;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    "div",
    { className: "reading-container", style: style, __source: {
        fileName: _jsxFileName,
        lineNumber: 4
      }
    },
    children
  );
};

/* harmony default export */ __webpack_exports__["default"] = (ReadingContainer);

/***/ }),

/***/ "./src/components/Writing/TitleSection.js":
/*!************************************************!*\
  !*** ./src/components/Writing/TitleSection.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/michael.cheng/code/bibleanswers/web/src/components/Writing/TitleSection.js";


var Title = function Title(_ref) {
  var added = _ref.added,
      imageUrl = _ref.imageUrl,
      subtitle = _ref.subtitle,
      title = _ref.title,
      updated = _ref.updated;

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    "div",
    { className: "title-section", __source: {
        fileName: _jsxFileName,
        lineNumber: 5
      }
    },
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      "div",
      { className: "title-info-container", __source: {
          fileName: _jsxFileName,
          lineNumber: 6
        }
      },
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        "div",
        { className: "title-info", __source: {
            fileName: _jsxFileName,
            lineNumber: 7
          }
        },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          "h1",
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 8
            }
          },
          title
        ),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          "div",
          { className: "subtitle", __source: {
              fileName: _jsxFileName,
              lineNumber: 9
            }
          },
          subtitle
        ),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          "div",
          { className: "date", __source: {
              fileName: _jsxFileName,
              lineNumber: 10
            }
          },
          updated ? "Updated: " + updated : added ? "Added: " + added : null
        ),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          "div",
          { className: "divider", __source: {
              fileName: _jsxFileName,
              lineNumber: 13
            }
          },
          "..."
        )
      )
    ),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      "div",
      { className: "cover-image-container", __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      },
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", { className: "cover-image", src: imageUrl, alt: title, __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      })
    )
  );
};

/* harmony default export */ __webpack_exports__["default"] = (Title);

/***/ }),

/***/ "./src/components/Writing/index.js":
/*!*****************************************!*\
  !*** ./src/components/Writing/index.js ***!
  \*****************************************/
/*! exports provided: Page, ReadingContainer, TitleSection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/components/Writing/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Page */ "./src/components/Writing/Page.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Page", function() { return _Page__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _ReadingContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ReadingContainer */ "./src/components/Writing/ReadingContainer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReadingContainer", function() { return _ReadingContainer__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _TitleSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TitleSection */ "./src/components/Writing/TitleSection.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TitleSection", function() { return _TitleSection__WEBPACK_IMPORTED_MODULE_3__["default"]; });








/***/ }),

/***/ "./src/components/Writing/styles.css":
/*!*******************************************!*\
  !*** ./src/components/Writing/styles.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* READING CONTAINER */\n\n.reading-container {\n  margin: 0 auto;\n  padding: 0 20px;\n  width: calc(100% - 40px);\n  max-width: 740px;\n}\n\n/* TITLE SECTION */\n\n.title-section {\n  display: flex;\n  margin: 0 65px;\n}\n\n.title-info-container {\n  align-items: center;\n  display: flex;\n  width: calc(50% - 10px);\n}\n\n.title-info {\n  margin-left: auto;\n  max-width: 552px;\n}\n\nh1 {\n  font-size: 56px;\n  font-weight: 500;\n  line-height: 64px;\n  margin: 0;\n  margin-bottom: 16px;\n}\n\n.subtitle {\n  color: rgba(0, 0, 0, 0.54);\n  font-size: 23px;\n  font-weight: 400;\n  line-height: 28px;\n  margin-bottom: 30px;\n}\n\n.date {\n  color: rgba(0, 0, 0, 0.54);\n  font-size: 16px;\n  font-style: italic;\n}\n\n.divider {\n  display: none;\n}\n\n.cover-image-container {\n  align-items: center;\n  display: flex;\n  margin-left: 20px;\n  max-height: 400px;\n  overflow: hidden;\n  width: calc(50% - 10px);\n}\n\n.cover-image {\n  width: 100%;\n}\n\n@media screen and (max-width: 1199px) {\n  .title-section {\n    flex-direction: column;\n    margin: 0;\n  }\n\n  .title-info-container {\n    margin: 30px auto 0;\n    max-width: 740px;\n    padding: 0 20px;\n    width: calc(100% - 40px);\n  }\n\n  .title-info {\n    margin-left: 0;\n    max-width: none;\n    padding: 0;\n  }\n\n  h1 {\n    font-size: 36px;\n    font-weight: 500;\n    line-height: 40px;\n    margin-bottom: 8px;\n  }\n\n  .subtitle {\n    font-size: 20px;\n    line-height: 24px;\n    margin-bottom: 10px;\n  }\n\n  .divider {\n    display: block;\n    font-size: 35px;\n    letter-spacing: 0.6em;\n    text-align: center;\n  }\n\n  .cover-image-container {\n    margin-left: 0;\n    max-height: 500px;\n    order: -1;\n    width: 100%;\n  }\n}\n\n/* PAGE */\n\n.writing h3 {\n  font-size: 34px;\n  line-height: 1.15;\n  margin: 0;\n  margin-top: 56px;\n}\n\n.writing h4 {\n  font-size: 26px;\n  line-height: 1.22;\n  margin: 0;\n  margin-top: 30px;\n}\n\n.writing p,\n.writing ol,\n.writing blockquote {\n  font-size: 21px;\n  line-height: 1.58;\n  margin: 0;\n  margin-top: 29px;\n}\n\n.writing blockquote {\n  font-style: italic;\n  left: -20px;\n  padding-left: 20px;\n  position: relative;\n}\n\n.writing .first {\n  margin-top: 8px;\n}\n\n.writing img {\n  margin-top: 29px;\n}\n\n.writing img.image-left {\n  float: left;\n  margin-right: 20px;\n}\n\n.writing img.image-right {\n  float: right;\n  margin-left: 20px;\n}\n\n.writing a {\n  color: #689f38;\n  text-decoration: none;\n}\n\n.writing span {\n  font-size: 14px;\n  margin-left: 2px;\n  position: relative;\n  top: -5px;\n}\n\n.writing .caret-down {\n  width: 0; \n  height: 0; \n  border-left: 5px solid transparent;\n  border-right: 5px solid transparent;\n  \n  border-top: 5px solid #43A047;\n\n  margin-left: 6px;\n  position: relative;\n  top: 8px;\n}\n\n.writing .caret-up {\n  width: 0; \n  height: 0; \n  border-left: 5px solid transparent;\n  border-right: 5px solid transparent;\n  \n  border-bottom: 5px solid #039BE5;\n\n  margin-left: 6px;\n  position: relative;\n  top: -13px;\n}\n\n@media screen and (max-width: 768px) {\n  .writing h3 {\n    font-size: 30px;\n    margin-top: 28px;\n  }\n\n  h4 {\n    font-size: 24px;\n    margin-top: 22px;\n  }\n\n  .writing p,\n  .writing ol {\n    font-size: 18px;\n    margin-top: 21px;\n  }\n\n  .writing blockquote {\n    font-size: 18px;\n    margin-top: 21px;\n  }\n\n  .writing img {\n    margin-top: 21px;\n  }\n\n  .writing .caret-down {\n    top: 9px;\n  }\n  \n  .writing .caret-up {\n    top: -12px;\n  }\n}\n\n@media screen and (max-width: 500px) {\n  .writing img {\n    display: block;\n    float: none !important;\n    margin: 21px auto 0 !important;\n  }\n}", ""]);

// exports


/***/ }),

/***/ "./src/constants/pages/about.js":
/*!**************************************!*\
  !*** ./src/constants/pages/about.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var about = {
  title: "About | Bible Answers",
  description: "Learn more about Bible Answers"
};

/* harmony default export */ __webpack_exports__["default"] = (about);

/***/ }),

/***/ "./src/constants/pages/home.js":
/*!*************************************!*\
  !*** ./src/constants/pages/home.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var home = {
  title: "Bible Answers - Apologetics: Explaining and Defending the Bible's Teachings",
  description: "Answers to questions about Christianity and the Bible"
};

/* harmony default export */ __webpack_exports__["default"] = (home);

/***/ }),

/***/ "./src/constants/pages/index.js":
/*!**************************************!*\
  !*** ./src/constants/pages/index.js ***!
  \**************************************/
/*! exports provided: PAGES, getPostData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAGES", function() { return PAGES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPostData", function() { return getPostData; });
/* harmony import */ var babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/core-js/object/assign */ "babel-runtime/core-js/object/assign");
/* harmony import */ var babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home */ "./src/constants/pages/home.js");
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about */ "./src/constants/pages/about.js");
/* harmony import */ var _resources__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./resources */ "./src/constants/pages/resources.js");
/* harmony import */ var _posts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../posts */ "./src/constants/posts/index.js");









var POSTS_BY_URL = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["keyBy"])(_posts__WEBPACK_IMPORTED_MODULE_5__["ALL_POSTS"], "url");

var getPostData = function getPostData(pathname) {
  var splitPathname = pathname;
  return POSTS_BY_URL[splitPathname];
};

var PAGES = babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({
  "/": _home__WEBPACK_IMPORTED_MODULE_2__["default"],
  "/about": _about__WEBPACK_IMPORTED_MODULE_3__["default"],
  "/resources": _resources__WEBPACK_IMPORTED_MODULE_4__["resources"],
  "/resources/learn": _resources__WEBPACK_IMPORTED_MODULE_4__["resourcesLearn"],
  "/resources/church-finders": _resources__WEBPACK_IMPORTED_MODULE_4__["resourcesChurchFinders"]
}, POSTS_BY_URL);



/***/ }),

/***/ "./src/constants/pages/resources.js":
/*!******************************************!*\
  !*** ./src/constants/pages/resources.js ***!
  \******************************************/
/*! exports provided: resources, resourcesLearn, resourcesChurchFinders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resources", function() { return resources; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resourcesLearn", function() { return resourcesLearn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resourcesChurchFinders", function() { return resourcesChurchFinders; });
var resources = {
  title: "Resources | Bible Answers",
  description: "Links to resources to help you grow in your faith"
};

var resourcesLearn = {
  title: "Resources: Learn | Bible Answers",
  description: "Links to resources for learning more about the Bible"
};

var resourcesChurchFinders = {
  title: "Resources: Church Finders | Bible Answers",
  description: "Links to resources to help you find a solid, Bible-believing and Bible-preaching church"
};



/***/ }),

/***/ "./src/constants/posts/apologetics/agnosticism/agnosticism.js":
/*!********************************************************************!*\
  !*** ./src/constants/posts/apologetics/agnosticism/agnosticism.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var content = "\n<div class=\"writing\">\n  <h3>The two types of agnosticism</h3>\n\n  <p class=\"first\">There are two types of agnosticism, one of which is inherently self-contradictory.</p>\n\n  <p />\n  <ol>\n    <li><strong>Truth cannot be known.</strong> This position is self-contradictory.</li>\n    <li><strong>I simply do not know the truth.</strong> This position is not self-contradictory because it does not make any universal assertion. However, instead of being satisfied with not knowing the truth, one who holds this position <strong>should</strong> have a desire to pursue the truth.</li>\n  </ol>\n\n  <p>Here, we will examine why the first position, that \"Truth cannot be known,\" is an impossibly self-contradictory position.</p>\n\n  <h3>The assertion, \"Truth cannot be known\" is self-contradictory</h3>\n\n  <p>In short, \"truth cannot be known\" is a self-contradictory position because if truth cannot be known, then the supposed \"truth,\" \"truth cannot be known,\" <strong>cannot itself be known</strong>.</p>\n  \n  <img src=\"/images/contradiction.png\" class=\"image-left\" />\n\n  <p>If it is true that \"truth cannot be known,\" then it is also true that \"truth\" <strong>can</strong> be known, since \"truth\" that \"truth cannot be known\" can be known. However, if truth <strong>both can and can't</strong> be known at the same time, then truth is self-contradictory, which is impossible.</p>\n  \n  <p>If truth both can and can't be known at the same time, then any statement could also be both true and untrue at the same time, which is absurd. No statement at all would have any meaning whatsoever.</p>\n\n  <p>The necessary conclusion to all of this is that the position, \"Truth cannot be known,\" cannot be true because it is impossibly self-contradictory.</p>\n</div>\n";

var post = {
  uid: "agnosticism",
  title: "Is agnosticism self-contradictory?",
  subtitle: "The fatal flaw of agnosticism",
  imageUrl: "/images/question-marks.png",
  url: "/answers/worldview/agnosticism",
  added: "9/17/18",
  tags: ["apologetics", "worldview", "agnosticism"],
  content: content
};

/* harmony default export */ __webpack_exports__["default"] = (post);

/***/ }),

/***/ "./src/constants/posts/apologetics/agnosticism/index.js":
/*!**************************************************************!*\
  !*** ./src/constants/posts/apologetics/agnosticism/index.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _agnosticism__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./agnosticism */ "./src/constants/posts/apologetics/agnosticism/agnosticism.js");


var AGNOSTICISM = {
  category: "Agnosticism",
  categoryUrl: "agnosticism",
  posts: [_agnosticism__WEBPACK_IMPORTED_MODULE_0__["default"]]
};

/* harmony default export */ __webpack_exports__["default"] = (AGNOSTICISM);

/***/ }),

/***/ "./src/constants/posts/apologetics/bibleAuthorship/index.js":
/*!******************************************************************!*\
  !*** ./src/constants/posts/apologetics/bibleAuthorship/index.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _papias__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./papias */ "./src/constants/posts/apologetics/bibleAuthorship/papias.js");
/* harmony import */ var _martyr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./martyr */ "./src/constants/posts/apologetics/bibleAuthorship/martyr.js");
/* harmony import */ var _irenaeus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./irenaeus */ "./src/constants/posts/apologetics/bibleAuthorship/irenaeus.js");




var AUTHORSHIP = {
  category: "Bible authorship",
  categoryUrl: "bible-authorship",
  posts: [_papias__WEBPACK_IMPORTED_MODULE_0__["default"], _martyr__WEBPACK_IMPORTED_MODULE_1__["default"], _irenaeus__WEBPACK_IMPORTED_MODULE_2__["default"]]
};

/* harmony default export */ __webpack_exports__["default"] = (AUTHORSHIP);

/***/ }),

/***/ "./src/constants/posts/apologetics/bibleAuthorship/irenaeus.js":
/*!*********************************************************************!*\
  !*** ./src/constants/posts/apologetics/bibleAuthorship/irenaeus.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_writing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../utils/writing */ "./src/utils/writing.js");


var references = {
  1: "Irenaeus, <em>Adversus Haereses</em> (Book 3, Chapter 1)"
};

var content = "\n  <div class=\"writing\">\n    <h3>Who was Irenaeus?</h3>\n\n    <p class=\"first\">Irenaeus was the bishop of Lyon and helped develop Christian theology by battling heresy and defending orthodoxy. He died about 202 A.D. and he heard the preaching of Polycarp, who is known to have heard John directly. This paces Irenaeus extremely close to the original sources of the gospels.</p>\n\n    <p>Irenaeus's writing contains the first mention of all four of the gospel authors together in one place.</p>\n\n    <h3>What does Irenaeus write about gospel authorship?</h3>\n\n    <p class=\"first\">Here is the relevant passage from Irenaeus's writings:</p>\n\n    <blockquote>For, after our Lord rose from the dead, [the apostles] were invested with power from on high when the Holy Spirit came down [upon them], were filled from all [His gifts], and had perfect knowledge: they departed to the ends of the earth, preaching the glad tidings of the good things [sent] from God to us, and proclaiming the peace of heaven to men, who indeed do all equally and individually possess the Gospel of God. Matthew also issued a written Gospel among the Hebrews in their own dialect, while Peter and Paul were preaching at Rome, and laying the foundations of the Church. After their departure, Mark, the disciple and interpreter of Peter, did also hand down to us in writing what had been preached by Peter. Luke also, the companion of Paul, recorded in a book the Gospel preached by him. Afterwards, John, the disciple of the Lord, who also had leaned upon His breast, did himself publish a Gospel during his residence at Ephesus in Asia." + Object(_utils_writing__WEBPACK_IMPORTED_MODULE_0__["textRef"])(1) + "</blockquote>\n\n    <p>More specifically, here is what Irenaeus writes specifically concerning each of the four gospels:</p>\n\n    <h4>Matthew</h4>\n\n    <blockquote class=\"first\">Matthew also issued a written Gospel among the Hebrews in their own dialect, while Peter and Paul were preaching at Rome, and laying the foundations of the Church.</blockquote>\n\n    <p>This passage matches with what Papias writes concerning Matthew. It is likely that the gospel of Matthew was originally written by Matthew in Hebrew, and then later translated into Greek, either by Matthew himself or by someone else.</p>\n\n    <h4>Mark</h4>\n\n    <blockquote class=\"first\">After their departure, Mark, the disciple and interpreter of Peter, did also hand down to us in writing what had been preached by Peter.</blockquote>\n\n    <p>Along with passages from Papias and Justin Martyr's writings, this passage from Irenaeus tells us that the gospel of Mark was written by Mark, who wrote what he heard from Peter, who was an eyewitness of Jesus' life.</p>\n\n    <h4>Luke</h4>\n\n    <blockquote class=\"first\">Luke also, the companion of Paul, recorded in a book the Gospel preached by him.</blockquote>\n\n    <p>In addition to this passage, there is also significant internal evidence within the Bible which points towards Luke being the author of the gospel of Luke.</p>\n\n    <h4>John</h4>\n\n    <blockquote class=\"first\">Afterwards, John, the disciple of the Lord, who also had leaned upon His breast, did himself publish a Gospel during his residence at Ephesus in Asia.</blockquote>\n\n    <p>Here, Irenaeus gives context into why John's two writings, the gospel of John and Revelation, are written later than the other gospels.</p>\n\n    <h3>Conclusion</h3>\n\n    <p class=\"first\">Due to how close Irenaeus is to the original authorship of the four gospels, it is very reasonable to simply take Irenaeus at his word when he names the authors of each of the gospels.</p>\n\n    <p>Those who want to say that the authorship of the gospels is in serious doubt must undertake logical gymnastics to explain away what Irenaeus clearly writes concerning the authorship of the gospels.</p>\n\n    " + Object(_utils_writing__WEBPACK_IMPORTED_MODULE_0__["renderRefs"])(references) + "\n  </div>\n";

var post = {
  title: "Irenaeus and gospel authorship",
  subtitle: "Support for the traditional authorship of Matthew, Mark, Luke, and John",
  imageUrl: "/images/irenaeus.png",
  url: "/answers/bible/irenaeus-authorship",
  added: "9/26/18",
  tags: ["bible", "authorship", "irenaeus"],
  content: content
};

/* harmony default export */ __webpack_exports__["default"] = (post);

/***/ }),

/***/ "./src/constants/posts/apologetics/bibleAuthorship/martyr.js":
/*!*******************************************************************!*\
  !*** ./src/constants/posts/apologetics/bibleAuthorship/martyr.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_writing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../utils/writing */ "./src/utils/writing.js");


var references = {
  1: "Martyr, <em>Dialogue with Trypho</em> 106; ANF"
};

var content = "\n  <div class=\"writing\">\n    <h3>What does Justin Martyr write about the authorship of Mark?</h3>\n\n    <p class=\"first\">Although Justin does not directly reference the book of Mark, reasoning based upon Justin's writing leads us to believe that Mark is indeed the author of the book of Mark. Here is what Justin writes:</p>\n\n    <blockquote>And when it is said that He changed the name of one of the apostles to Peter; and when it is written in the memoirs of Him that this so happened, as well as that He changed the names of other two brothers, the sons of Zebedee, to Boanerges, which means sons of thunder..." + Object(_utils_writing__WEBPACK_IMPORTED_MODULE_0__["textRef"])(1) + "</blockquote>\n\n    <p>Here, Justin refers to the \"memoirs of [Peter],\" and he writes that in these memoirs, it is written that Jesus \"changed the name of one of the apostles to Peter\" and \"changed the names of other two brothers, the sons of Zebedee, to Boanerges.\"</p>\n    \n    <h3>Gospel of Peter or Gospel of Mark?</h3>\n\n    <p class=\"first\">In a debate with Richard Bauckham on the radio show \"Unbelievable,\" popular New Testament critic Bart Ehrman comments concerning this passage, \"he doesn't call them by our Gospels... the only memoir he names is the memoirs of Peter... he's talking about the Gospel of Peter.\"</p>\n\n    <p>However, the problem with Ehrman's statement is that whereas the so-called Gospel of Peter nowhere mentions any event where Jesus changes Peter's name or changes the names of the sons of Zebedee, the Gospel of Mark <strong>does</strong> include both of these events. In fact, the Gospel of Mark is the <strong>only</strong> gospel that includes the event of Jesus changing the names of the sons of Zebedee. In Mark 3:16-17, we read:</p>\n\n    <blockquote>He appointed the twelve: Simon (to whom he gave the name Peter); James the son of Zebedee and John the brother of James (to whom he gave the name Boanerges, that is, Sons of Thunder);</blockquote>\n\n    <p>From this, we can conclude that Justin's reference to the \"memoirs of [Peter]\" is a reference to the book of the gospels that we call Mark. This matches exactly with what we know about the relationship between Peter and Mark, namely, that Mark interpreted and wrote on behalf of Peter (see <a href=\"/answers/bible/papias-authorship\">Papias and gospel authorship</a> for what Papias writes about this).</p>\n\n    <p>Thus, Justin's writing provides support for the traditional authorship of the gospel of Mark.</p>\n\n    " + Object(_utils_writing__WEBPACK_IMPORTED_MODULE_0__["renderRefs"])(references) + "\n  </div>\n";

var post = {
  title: "Justin Martyr and the authorship of Mark",
  subtitle: "Support for the traditional authorship of Mark",
  imageUrl: "/images/martyr.png",
  url: "/answers/bible/justin-martyr-mark",
  added: "9/26/18",
  tags: ["bible", "authorship", "justin martyr"],
  content: content
};

/* harmony default export */ __webpack_exports__["default"] = (post);

/***/ }),

/***/ "./src/constants/posts/apologetics/bibleAuthorship/papias.js":
/*!*******************************************************************!*\
  !*** ./src/constants/posts/apologetics/bibleAuthorship/papias.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_writing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../utils/writing */ "./src/utils/writing.js");


var references = {
  1: "Eusebius, <em>Hist. Eccl.</em> 3.36",
  2: "Norelli, Enrico (2005). <em>Papia di Hierapolis, Esposizione degli Oracoli del Signore: I frammenti</em>. pp. 38–54. ISBN 8831527525.",
  3: 'Yarbrough, Robert W. (Jun 1983). "The Date of Papias: A Reassessment" (PDF). <em>Journal of the Evangelical Theological Society</em>. 26 (2): 181–191.',
  4: "Irenaeus, <em>Adv. Haer</em>. 5.33.4. The original Greek is preserved apud Eusebius, <em>Hist. Eccl.</em> 3.39",
  5: "Irenaeus, <em>Adversus Haereses</em> III.3",
  6: "Tertullian, <em>De praescriptione hereticorum</em> 32.2",
  7: "Eusebius, <em>Ecclesiastical History</em> 3:39"
};

var content = "\n<div class=\"writing\">\n  <h3>Who is Papias?</h3>\n\n  <p class=\"first\">What we know about Papias comes from references in the works of Irenaeus of Lyons and Eusebius of Caesarea. From these references, we learn that Papias wrote a work called <em>Exposition of the Sayings of the Lord</em>, which is an important early source for the authorship of the gospels. Eusebius writes that Papias was Bishop of Hierapolis around the time of Ignatius of Antioch." + Object(_utils_writing__WEBPACK_IMPORTED_MODULE_0__["textRef"])(1) + "</p>\n\n  <h3>When did Papias live?</h3>\n\n  <p class=\"first\">Papias's writing is dated by most modern scholars to be about 95&ndash;120." + Object(_utils_writing__WEBPACK_IMPORTED_MODULE_0__["textRef"])(2) + Object(_utils_writing__WEBPACK_IMPORTED_MODULE_0__["textRef"])(3) + " Irenaeus, who was Polycarp's disciple, describes Papias as \"an ancient man who was a hearer of John and a companion of Polycarp.\"" + Object(_utils_writing__WEBPACK_IMPORTED_MODULE_0__["textRef"])(4) + " Polycarp is said to have been a disciple of John by Irenaeus and Tertullian." + Object(_utils_writing__WEBPACK_IMPORTED_MODULE_0__["textRef"])(5) + Object(_utils_writing__WEBPACK_IMPORTED_MODULE_0__["textRef"])(6) + "</p>\n\n  <p>What all of this means is that Papias supposedly had direct contact with a man who had direct contact with John, which places Papias extremely close to the original writing of the gospels. This gives what he says about the authorship of the gospels great weight.</p>\n\n  <h3>What does Papias write concerning gospel authorship?</h3>\n\n  <p class=\"first\">This passage is from Eusebius's writings. Emphasis is added.</p>\n\n  <blockquote>[Papias, who is now mentioned by us, <strong>affirms that he received the sayings of the apostles from those who accompanied them, and he moreover asserts that he heard in person Aristion and the presbyter John</strong>. Accordingly he mentions them frequently by name, and in his writings gives their traditions. Our notice of these circumstances may not be without its use. It may also be worth while to add to the statements of Papias already given, other passages of his in which he relates some miraculous deeds, stating that he acquired the knowledge of them from tradition. The residence of the Apostle Philip with his daughters in Hierapolis has been mentioned above. We must now point out how Papias, who lived at the same time, relates that he had received a wonderful narrative from the daughters of Philip. For he relates that a dead man was raised to life in his day. He also mentions another miracle relating to Justus, surnamed Barsabas, how he swallowed a deadly poison, and received no harm, on account of the grace of the Lord. The same person, moreover, has set down other things as coming to him from unwritten tradition, amongst these some strange parables and instructions of the Saviour, and some other things of a more fabulous nature. Amongst these he says that there will be a millennium after the resurrection from the dead, when the personal reign of Christ will be established on this earth. He moreover hands down, in his own writing, other narratives given by the previously mentioned Aristion of the Lord's sayings, and the traditions of the presbyter John. For information on these points, we can merely refer our readers to the books themselves; but now, to the extracts already made, we shall add, as being a matter of primary importance, a tradition regarding Mark who wrote the Gospel, which he [Papias] has given in the following words]: And the presbyter said this. <strong>Mark having become the interpreter of Peter, wrote down accurately whatsoever he remembered. It was not, however, in exact order that he related the sayings or deeds of Christ. For he neither heard the Lord nor accompanied Him. But afterwards, as I said, he accompanied Peter, who accommodated his instructions to the necessities [of his hearers], but with no intention of giving a regular narrative of the Lord's sayings. Wherefore Mark made no mistake in thus writing some things as he remembered them. For of one thing he took especial care, not to omit anything he had heard, and not to put anything fictitious into the statements.</strong> [This is what is related by Papias regarding Mark; but with regard to Matthew he has made the following statements]: <strong>Matthew put together the oracles [of the Lord] in the Hebrew language, and each one interpreted them as best he could.</strong> [The same person uses proofs from the First Epistle of John, and from the Epistle of Peter in like manner. And he also gives another story of a woman who was accused of many sins before the Lord, which is to be found in the Gospel according to the Hebrews.]" + Object(_utils_writing__WEBPACK_IMPORTED_MODULE_0__["textRef"])(7) + "</blockquote>\n\n  <h3>Mark wrote what he heard from Peter</h3>\n\n  <blockquote class=\"first\">Mark having become the interpreter of Peter, wrote down accurately whatsoever he remembered. It was not, however, in exact order that he related the sayings or deeds of Christ. For he neither heard the Lord nor accompanied Him. But afterwards, as I said, he accompanied Peter, who accommodated his instructions to the necessities [of his hearers], but with no intention of giving a regular narrative of the Lord's sayings. Wherefore Mark made no mistake in thus writing some things as he remembered them. For of one thing he took especial care, not to omit anything he had heard, and not to put anything fictitious into the statements.</blockquote>\n\n  <p>This passage tells us that Mark recorded what he heard from Peter. This is very strong evidence that Mark is indeed the author of the book of Mark that is one of the four gospels.</p>\n\n  <h4>Matthew wrote in the Hebrew language</h4>\n\n  <blockquote class=\"first\">Matthew put together the oracles [of the Lord] in the Hebrew language, and each one interpreted them as best he could.</blockquote>\n\n  <p>Here, Papias writes that Matthew wrote \"in the Hebrew language.\" However the book of Matthew that we have is written in Greek. There are two possible explanations for this:</p>\n\n  <p></p>\n\n  <ol>\n    <li>Someone else translated Matthew's original work into Greek. This would still mean that Matthew is the original author of the book.</li>\n    <li>Matthew perhaps also knew Greek and translated his Hebrew work into the Greek language afterwards.</li>\n  </ol>\n\n  <p>In any case, what Papias writes here is strong evidence that Matthew is indeed the original author, whether of the Hebrew original or also of the Greek translation, of the book of Matthew that is one of the four gospels.</p>\n\n  " + Object(_utils_writing__WEBPACK_IMPORTED_MODULE_0__["renderRefs"])(references) + "\n</div>\n";

var post = {
  title: "Papias and gospel authorship",
  subtitle: "Support for the traditional authorship of Mark and Matthew",
  imageUrl: "/images/papias.png",
  url: "/answers/bible/papias-authorship",
  added: "9/26/18",
  tags: ["bible", "authorship", "papias"],
  content: content
};

/* harmony default export */ __webpack_exports__["default"] = (post);

/***/ }),

/***/ "./src/constants/posts/apologetics/bibleContradictions/genesis12Plants.js":
/*!********************************************************************************!*\
  !*** ./src/constants/posts/apologetics/bibleContradictions/genesis12Plants.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var content = "\n  <div class=\"writing\">\n    <h3>The alleged problem</h3>\n\n    <p class=\"first\">Supposedly, Genesis 1 and 2 are contradictory concerning when plants were created.</p>\n\n    <h4>Genesis 1:11-13</h4>\n\n    <blockquote class=\"first\">And God said, \u201CLet the earth sprout vegetation, plants yielding seed, and fruit trees bearing fruit in which is their seed, each according to its kind, on the earth.\u201D And it was so. The earth brought forth vegetation, plants yielding seed according to their own kinds, and trees bearing fruit in which is their seed, each according to its kind. And God saw that it was good. And there was evening and there was morning, <strong>the third day</strong>.</blockquote>\n\n    <h4>Genesis 1:26-31</h4>\n\n    <blockquote class=\"first\">Then God said, \u201CLet us make man\"... And there was evening and there was morning, <strong>the sixth day</strong>.</blockquote>\n\n    <h4>Genesis 2:5-9</h4>\n\n    <blockquote class=\"first\">When <strong>no bush of the field was yet in the land and no small plant of the field had yet sprung up</strong>\u2014-for the Lord God had not caused it to rain on the land, and there was no man to work the ground, and a mist was going up from the land and was watering the whole face of the ground\u2014-<strong>then the Lord God formed the man of dust</strong> from the ground and breathed into his nostrils the breath of life, and the man became a living creature. <strong>And the Lord God planted a garden</strong> in Eden, in the east, and there he put the man whom he had formed. And <strong>out of the ground the Lord God made to spring up every tree</strong> that is pleasant to the sight and good for food. The tree of life was in the midst of the garden, and the tree of the knowledge of good and evil.</blockquote>\n\n    <p>From these passages, it seems that in Genesis 1, plants are created <strong>before</strong> man, and in Genesis 2, plants are created <strong>after</strong> man. Two solutions have been proposed for this apparent contradiction, one of which is problematic and the other of which is the better solution.</p>\n\n    <h3>The better solution</h3>\n\n    <p class=\"first\">The key to this solution is recognizing the <strong>difference</strong> between the plants in Genesis 1 and the plants in Genesis 2. In Genesis 2, we see the key words <strong>of the field</strong>, which do not show up in Genesis 1.</p>\n\n    <blockquote>When no bush <strong>of the field</strong> was yet in the land and no small plant <strong>of the field</strong> had yet sprung up...</blockquote>\n\n    <img src=\"http://bibleanswers.io/static/images/garden.png\" class=\"image-left\">\n\n    <p>The key difference between the plants in Genesis 1 and the plants in Genesis 2 is that the plants in Genesis 2 are <strong>plants that are cared for by humans, or plants in a garden</strong>. Before humans were created, there would be no gardeners or gardens, so obviously these kinds of plants (plants <strong>of the field</strong>) would not be in existence yet.</p>\n\n    <p>Genesis 2 is not saying that wild vegetation did not exist before man was created, but rather that plants cared for by man did not exist before man was created. We can imply that while plants <strong>of the field</strong> were not created before man, wild vegetation indeed were created before man.</p>\n\n    <p>Since the same author wrote Genesis 1 and 2, we should assume that this author would not write such an obvious contradiction, and indeed, we find a very clear solution to the alleged contradiction.</p>\n\n    <h3>The problematic solution</h3>\n\n    <p class=\"first\">Some people try to solve this problem by saying that the creation account in Genesis is not a genre that we should take literally or as historical. They might say that it is poetry, or that it is a \"creation narrative\" that has different rules for interpretation than a historical narrative.</p>\n\n    <p>The problem with this attempted solution is that the creation account in Genesis flows directly into what is clearly historical narrative, and it is unlikely that there is such a division between the genre of the earlier chapters of Genesis and the genre of the later chapters.</p>\n\n    <p>Furthermore, this attempted solution causes us to lose faith in the Bible. If the creation account in Genesis can be considered contradictory and thus not to be taken literally, then this will start to chip away at our confidence in other parts of the Bible.</p>\n\n    <p>The better solution presented above makes complete sense, so it should be strongly preferred over the problematic solution that was just presented.</p>\n  </div>\n";

var data = {
  uid: "genesis-1-2-plants",
  title: "Are Genesis 1 and 2 contradictory regarding when plants were created?",
  subtitle: "Were plants and vegetation created before or after man?",
  imageUrl: "/images/vegetation.png",
  url: "/answers/bible/genesis-1-2-plants",
  added: "9/21/18",
  tags: ["bible", "contradictions", "genesis"],
  content: content
};

/* harmony default export */ __webpack_exports__["default"] = (data);

/***/ }),

/***/ "./src/constants/posts/apologetics/bibleContradictions/index.js":
/*!**********************************************************************!*\
  !*** ./src/constants/posts/apologetics/bibleContradictions/index.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _genesis12Plants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./genesis12Plants */ "./src/constants/posts/apologetics/bibleContradictions/genesis12Plants.js");
/* harmony import */ var _matthewLukeGenealogies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./matthewLukeGenealogies */ "./src/constants/posts/apologetics/bibleContradictions/matthewLukeGenealogies.js");
/* harmony import */ var _problemOfEvil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./problemOfEvil */ "./src/constants/posts/apologetics/bibleContradictions/problemOfEvil.js");




var CONTRADICTIONS = {
  category: 'Bible "contradictions"',
  categoryUrl: "bible-contradictions",
  posts: [_genesis12Plants__WEBPACK_IMPORTED_MODULE_0__["default"], _matthewLukeGenealogies__WEBPACK_IMPORTED_MODULE_1__["default"], _problemOfEvil__WEBPACK_IMPORTED_MODULE_2__["default"]]
};

/* harmony default export */ __webpack_exports__["default"] = (CONTRADICTIONS);

/***/ }),

/***/ "./src/constants/posts/apologetics/bibleContradictions/matthewLukeGenealogies.js":
/*!***************************************************************************************!*\
  !*** ./src/constants/posts/apologetics/bibleContradictions/matthewLukeGenealogies.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var content = "\n  <div class=\"writing\">\n    <h3>The alleged contradiction</h3>\n\n    <p class=\"first\">At first glace, the genealogies of Matthew and Luke appear to be contradictory. Matthew's genealogy traces Jesus back through David's son Solomon, and Luke's genealogy traces Jesus back through David's son Nathan. Also, Matthew states that Joseph's father is Jacob, and Luke states that Joseph's father is Heli.</p>\n\n    <blockquote>And <strong>David was the father of Solomon</strong> by the wife of Uriah... (Matthew 1:6)</blockquote>\n\n    <blockquote>and <strong>Jacob the father of Joseph</strong> the husband of Mary, of whom Jesus was born, who is called Christ. (Matthew 1:16)</blockquote>\n    \n    <blockquote> Jesus, when he began his ministry, was about thirty years of age, being the son (as was supposed) of <strong>Joseph, the son of Heli</strong>... (Luke 3:23)</blockquote>\n\n    <blockquote>the son of Melea, the son of Menna, the son of Mattatha, the son of <strong>Nathan, the son of David</strong>... (Luke 3:31)</blockquote>\n\n    <h3>Several possible explanations for the apparent contradiction</h3>\n\n    <p class=\"first\">The seeming discrepancies between Matthew and Luke's genealogies are definitely not certain contradictions. There are several good reasons to believe that there is no contradiction between the two authors.</p>\n\n    <h4>Matthew and Luke clearly have different objectives with their genealogies</h4>\n\n    <p class=\"first\">The most significant factor to consider is that it is clear that Matthew and Luke are not trying to accomplish the same things with their genealogies. Here are some significant differences:</p>\n\n    <p></p>\n    \n    <ol>\n      <li>Matthew begins his genealogy with Abraham, which suggests he is writing to a primarily Jewish audience, whereas Luke begins his genealogy with Adam, which suggests a broader audience that includes Gentiles.</li>\n      <li>Matthew's genealogy occurs at the very beginning, whereas Luke's genealogy occurs later in the book, after Mary has been introduced, which makes it possible that Luke is actually tracing Jesus back through Mary, instead of Joseph.</li>\n    </ol>\n\n    <p>The fact that Matthew and Luke's genealogies clearly have different purposes and themes helps us approach the differences between them with the question, \"<strong>Why</strong> are they different?\", rather than with the declaration, \"They are contradictory.\"</p>\n\n    <h4>Luke's genealogy may be of Mary's</h4>\n\n    <p class=\"first\">One possible explanation for the seeming discrepancy between the two genealogies is that Matthew's genealogy is of Joseph's, while Luke's genealogy is of Mary's. There was no Greek word for \"son-in-law,\" so perhaps Joseph was the \"son of Heli\" in the sense that he was married to Mary, Heli's daughter. Then, Joseph would have descended from David's son Solomon, while Mary would have descended from David's son Nathan.</p>\n\n    <p>Although it would have been unusual to trace a genealogy through a mother's side (Mary's side), Mary was an extraordinary woman. Furthermore, Luke's genealogy does not occur until later in the book, after Luke has introduced Mary and told part of the story from her point of view.</p>\n\n    <h4>Eusebius's explanation</h4>\n\n    <p class=\"first\">Another possible explanation, which was held by the church historian Eusebius, is that Matthew's genealogy is a biological genealogy, while Luke's genealogy is legal genealogy. In Jewish tradition, if a man died without having any sons, his brother would marry the widow and have a son who could carry on the family name. Eusebius noted that Melchi (Luke 3:24) and Matthan (Matthew 1:15) were both married to the same woman at different times, which would make Heli (Luke 3:23) and Jacob (Matthew 1:15) half-brothers.</p>\n\n    <p>Then, perhaps, when Heli died without a son, his half-brother Jacob married Heli's widow. This would mean that Joseph is <em>legally</em> the son of Heli, but <em>biologically</em> the son of Jacob. Then, Jacob would be the descendent of Solomon, and Heli would be the descendent of Nathan.</p>\n\n    <h4>We should give Matthew and Luke the benefit of the doubt</h4>\n\n    <p class=\"first\">Because of all of the factors listed above, we should assume that Matthew and Luke would not write genealogies that are so directly contradictory. It is likely that they would have been able to double-check their facts, especially because genealogies were extremely important to the Jews. Furthermore, it is likely they used similar sources, and perhaps even communicated with one another, before writing their genealogies, in which case it would be silly to believe that they would write contradictory genealogies.</p>\n  </div>\n";

var post = {
  title: "Are Matthew and Luke's genealogies contradictory?",
  subtitle: "There are several reasonable explanations",
  imageUrl: "/images/genealogy.png",
  url: "/answers/bible/matthew-luke-genealogy",
  added: "9/27/18",
  content: content
};

/* harmony default export */ __webpack_exports__["default"] = (post);

/***/ }),

/***/ "./src/constants/posts/apologetics/bibleContradictions/problemOfEvil.js":
/*!******************************************************************************!*\
  !*** ./src/constants/posts/apologetics/bibleContradictions/problemOfEvil.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var content = "\n  <div class=\"writing\">\n    <h3>What is the problem of evil?</h3>\n    <p class=\"first\">The \"problem of evil\" is this:</p>\n\n    <p></p>\n    <ol>\n      <li>The Bible teaches that God is love and that He is all-powerful.</li>\n      <li>If God is love and He is all-powerful, then evil and suffering would not exist in the world.</li>\n      <li>Evil and suffering exist in the world. Therefore, the God of the Bible does not exist.</li>\n    </ol>\n\n    <h3>The solution to the \"problem\"</h3>\n    <p class=\"first\">The solution to the \"problem of evil\" is that #1 above does not necessary result in #2. It is true that the Bible teaches that God is love (1 John 4:8) and that God is all-powerful (Jeremiah 32:27).</p>\n    \n    <p>However, that God is love and that He is all-powerful does not necessarily mean that evil and suffering would not exist in the world. There is another possible conclusion, namely, that <B>God has a good purpose for the existence of evil and sufference</B>.</p>\n\n    <img src=\"/images/purpose.png\" class=\"image-left\" />\n\n    <p>What could this good purpose be? Well, the Bible teaches that evil and suffering result in both God's glory (in Jesus being the ultimate conquerer of evil and suffering) and greater joy for God's people (who experience firsthand God saving them from their own evil and granting them the joy of being a redeemed people who will spend eternity in heaven).</p>\n    \n    <p>Colossians 2:13-15, illustrates that sin (which includes evil and suffering) can have a good purpose because in this passage, we see God \"triumphing\" over sin (which exhibits God's glory), which produces joy in God's people (who have been \"made alive\" and \"forgiven\"). Without the existence of sin, evil, and suffering, these two things could not happen.</p>\n\n    <h4>Colossians 2:13-15</h4>\n\n    <blockquote>And you, who were dead in your trespasses and the uncircumcision of your flesh, God <B>made alive</B> together with him, having <B>forgiven</B> us all our trespasses, by canceling the record of debt that stood against us with its legal demands. This he set aside, nailing it to the cross. He disarmed the rulers and authorities and put them to open shame, by <B>triumphing</B> over them in him.</blockquote>\n\n    <h3>\"But those good things aren't worth the amount of evil and suffering that exist in the world!\"</h3>\n    <p class=\"first\">The answer given above to the \"problem of evil\" does not neglect the fact that there is a tremendous amount of evil and suffering in the world, and that we should feel deep empathy for those who are suffering.</p>\n    \n    <p>However, the answer does demonstrate that the Bible is not self-contradictory regarding the \"problem of evil.\" The idea that God's good purposes are not worth the amount of evil and suffering that exist in the world is a subjective opinion without any real justification.</p>\n\n    <h3>To the objector: Where do you get your definition of evil?</h3>\n\n    <p class=\"first\">If one of your objections to the Bible is the \"problem of evil,\" where do you get your definition of evil in the first place? Christians believe that God has revealed the definition of good and evil through the Bible.</p>\n    \n    <p>If you do not believe in God, then what is your basis for believing in good and evil in the first place? If humans are simply the product of random chance in a cold, uncaring universe where only the fittest survive, then why do you think murder, rape, and stealing are wrong?</p>\n    \n    <p>The answer is that you are stealing principles of morality from the Christian worldview, and that you have no moral foundation to stand on when you accuse the God of the Bible as being unjust.</p>\n  </div>\n";

var post = {
  uid: "problem-of-evil",
  title: 'Does "the problem of evil" prove that the Bible is self-contradictory?',
  subtitle: "If God is all-powerful and all-loving, then how can evil and suffering exist in the world?",
  imageUrl: "/images/suffering.png",
  url: "/answers/bible/problem-of-evil",
  added: "9/17/18",
  tags: ["bible", "contradictions"],
  content: content
};

/* harmony default export */ __webpack_exports__["default"] = (post);

/***/ }),

/***/ "./src/constants/posts/apologetics/index.js":
/*!**************************************************!*\
  !*** ./src/constants/posts/apologetics/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bibleAuthorship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bibleAuthorship */ "./src/constants/posts/apologetics/bibleAuthorship/index.js");
/* harmony import */ var _bibleContradictions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bibleContradictions */ "./src/constants/posts/apologetics/bibleContradictions/index.js");
/* harmony import */ var _jesusExistence__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./jesusExistence */ "./src/constants/posts/apologetics/jesusExistence/index.js");
/* harmony import */ var _agnosticism__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./agnosticism */ "./src/constants/posts/apologetics/agnosticism/index.js");





var APOLOGETICS = {
  heading: "Apologetics: Defending the Christian worldview",
  categories: [_agnosticism__WEBPACK_IMPORTED_MODULE_3__["default"], _bibleAuthorship__WEBPACK_IMPORTED_MODULE_0__["default"], _bibleContradictions__WEBPACK_IMPORTED_MODULE_1__["default"], _jesusExistence__WEBPACK_IMPORTED_MODULE_2__["default"]]
};

/* harmony default export */ __webpack_exports__["default"] = (APOLOGETICS);

/***/ }),

/***/ "./src/constants/posts/apologetics/jesusExistence/didJesusExist.js":
/*!*************************************************************************!*\
  !*** ./src/constants/posts/apologetics/jesusExistence/didJesusExist.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var content = "\n  <div class=\"writing\">\n    <h3>Introduction</h3>\n\n    <p class=\"first\">First, here is a link to the original article that this post addresses: <a href=\"https://www.atheists.org/activism/resources/did-jesus-exist/\" target=\"_blank\">\"Did Jesus Exist?\"</a>. In this article, Zindler's thesis is that \"It is easier to account for the facts of early Christian history if Jesus were a fiction than if he once were real.\"</p>\n\n    <p>The purpose of this post is to demonstrate that Zindler's thesis is wrong. Here, we will not quote Zindler's entire article, but only the relevant parts.</p>\n\n    <h3>Zindler compares Jesus to Zeus, Thor, Isir, and Osiris</h3>\n\n    <blockquote class=\"first\">Even in the case of other deities, such as Zeus, Thor, Isis, and Osiris, I had always taken it for granted that they were merely deified human heroes: men and women who lived in the later stages of prehistory \u2013 persons whose reputations got better and better the longer the time elapsed after their deaths. Gods, like fine wines, I supposed, improved with age.</blockquote>\n\n    <p>Comparing Jesus to \"other deities\" such as Zeus, Thor, Isis, and Osiris is absurd. The very obvious and enormous difference between Jesus and these other deities is that whereas Jesus has always been claimed to have been a very specific person who existed during a very specific time and place in actual history, having eyewitness accounts of specific things he did during his physical life on earth, these other deities have absolutely no such characteristics.</p>\n\n    <p>If Zindler believes these other deities have these same characteristics that were just listed about Jesus, the burden of proof is upon him to demonstrate this. As it stands, there is simply no meaningful comparison between Jesus and other deities such as the ones Zindler listed.</p>\n\n    <h3>Zindler's thesis</h3>\n\n    <blockquote class=\"first\">I now feel it is more reasonable to suppose he never existed. It is easier to account for the facts of early Christian history if Jesus were a fiction than if he once were real.</blockquote>\n\n    <p>Three points to note here:</p>\n\n    <p></p>\n\n    <ol>\n      <li>First, \"more reasonable\" is a very subjective position. After reading this post's responses to Zindler's arguments, one will just as easily be able to say that it is \"more reasonable\" to believe that Jesus existed. In fact, the fact that the large majority of people believe that Jesus existed points to his existence being \"more reasonable\" to believe than his non-existence.</li>\n      <li>The definitive argument for Jesus' existence does not rest in anything external to the Bible, but rather in presuppositional argumentation, which states that one must presuppose the Bible (or, that God has revealed Truth through the Bible) in order for Truth, logic, and knowledge to even be possible in the first place. Thus, one who denies the Bible denies the only legitimate explanation for knowledge itself. Presuppositional apologetics will be covered in another post.</li>\n      <li>It's worthwhile to recognize that Zindler is biased. He wants to believe that Jesus did not exist, and so his interpretation of the facts will be biased in that direction.</li>\n    </ol>\n\n    <h3>The burden of proof</h3>\n\n    <blockquote class=\"first\">Although what follows may fairly be interpreted to be a proof of the non-historicity of Jesus, it must be realized that the burden of proof does not rest upon the skeptic in this matter. As always is the case, the burden of proof weighs upon those who assert that some thing or some process exists. If someone claims that he never has to shave because every morning before he can get to the bathroom he is assaulted by a six-foot rabbit with extremely sharp teeth who trims his whiskers better than a razor \u2013 if someone makes such a claim, no skeptic need worry about constructing a disproof. Unless evidence for the claim is produced, the skeptic can treat the claim as false. This is nothing more than sane, every-day practice.</blockquote>\n\n    <p>Just like before, when Zindler compares Jesus to other deities like Zeus and Thor, again Zindler makes an absurd comparison by comparing Jesus to \"a six-foot rabbit...\". Claiming that \"a six-foot rabbit\" exists is <strong>completely</strong> different from claiming that Jesus existed. It seems that Zindler is trying to manipulate the reader emotionally into thinking that believing in Jesus' existence is akin to believing in something like \"a six-foot rabbit,\" which is extremely deceptive.</p>\n\n    <p>What are the obvious differences? Well, there are actual writings in history that describe in great detail actual things that Jesus did during his life, things for which there were eyewitness accounts, and there was an enormous movement that started, and continues strongly to this day, as a result of these things that Jesus did. There is physical, tangible, observable evidence that point strongly in the direction of Jesus' existence. In contrast, the concept of this \"six-foot rabbit\" that Zindler brings up is utterly ridiculous at the start.</p>\n\n    <p>As for the burden of proof, Zindler's logic is not convincing. It seems to be far more reasonable for the burden of proof to be upon those who do not believe Jesus existed, since the vast majority of people throughout history have believed in Jesus' existence, and there are numerous physical documents that are used as evidence for Jesus' existence.</p>\n\n    <p>Of course, Zindler does attempt to show that these documents do not prove Jesus' existence, but to purport that the burden of proof rests in the nearly-unanimous majority is simply untrue.</p>\n\n    <h3>Comparing Jesus to Tiberius Caesar is irrelevant</h3>\n\n    <p class=\"first\">I generally agree that N.T. Wright's usage of Tiberius Caesar is not very helpful. Proving that Jesus existed versus proving that Tiberius Caesar existed are quite different tasks.</p>\n\n    <p>We will skip responding to this section, since it is not directly relevant to proving Jesus' existence. The evidences for Jesus' existence are simply different than the evidences for Tiberius Caesar's existence, since they were very different men with very different roles in history.</p>\n\n    <h3>The Old Testament \"evidence\"</h3>\n\n    <p class=\"first\">I generally agree with Zindler that the Old Testament is not directly relevant to the discussion of Jesus' existence in terms of empirical evidence.</p>\n    \n    <p>However, I disagree with his statement that \"All of the many examples of OT 'predictions' of Jesus are so silly that one need only look them up to see their irrelevance.\" Since Zindler does not go any further into demonstrating the irrelevance of Old Testament prophecies, all I will say here is that, contrary to Zindler's claim, there is strong evidence that Jesus fulfills exactly the descriptions of many Old Testament prophecies, which points towards both Jesus' existence and the reliability of the Bible. But, the better place for arguing for this position would be another post, since this is a different type of argument for Jesus' existence than the ones we are examining here.</p>\n\n    <h3>The New Testament evidence - Revelation</h3>\n\n    <blockquote class=\"first\">A third category of writing, apocalyptic, of which the Book of Revelation is an example, also exists, but it gives no support for the historicity of Jesus. In fact, it would appear to be an intellectual fossil of the thought-world from which Christianity sprang \u2013 a Jewish apocalypse that was reworked for Christian use. The main character of the book (referred to 28 times) would seem to be \u201Cthe Lamb,\u201D an astral being seen in visions (no claims to historicity here!), and the book overall is redolent of ancient astrology.</blockquote>\n\n    <p>The book of revelation provides support for the historicity of Jesus in two ways:</p>\n\n    <p></p>\n    \n    <ol>\n      <li>Its author is John, one of Jesus' apostles, an eyewitness of Jesus' life. In a citation below, Zindler says that it is \"extremely doubtful\" that John was even a historical figure, but the burden of proof for this claim is certainly upon the skeptic, since the book itself says that the author is John and there was no dispute about Revelation's authorship until relatively recently.</li>\n      <li>It references someone named Jesus, whom John knew and had a relationship with. It is illogical to believe that John is writing about an imaginary character he invented. Although the Jesus John refers to in Revelation is the post-resurrected, post-ascended Jesus, it can be assumed that this Jesus is the same Jesus that John knew while Jesus lived on the earth.</li>\n    </ol>\n\n    <p>Zindler's statement that the book of Revelation \"is redolent of ancient astrology\" is misleading and irrelevant. There are enough differences between the book of Revelation and \"ancient astrology\" that one cannot equate the two so simply.</p>\n\n    <blockquote>The name Jesus occurs only seven times in the entire book, Christ only four times, and Jesus Christ only twice!</blockquote>\n\n    <p>This is absolutely silly. The number of times \"Jesus,\" \"Christ,\" and \"Jesus Christ\" occur in Revelation is not an argument at all against John's portrayal of Jesus as a real person/being. There are many places in Revelation where John is clearly referring to Jesus without actually using his name, such as when John refers to \"the lamb,\" so Jesus shows up in far more of the book of Revelation than Zindler would lead us to believe.</p>\n\n    <p>It seems that Zindler's implication here is that the lack of times Jesus is specificlaly mentioned points to the fact that the author of Revelation simply took an existing story and added in a few references to Jesus. However, as mentioned above, Revelation contains far more references to Jesus, enough that the book of Revelation can be considered significantly different from other kinds of \"ancient astrology.\"</p>\n\n    <blockquote>While Revelation may very well derive from a very early period (contrary to the views of most biblical scholars, who deal with the book only in its final form), the Jesus of which it whispers obviously is not a man. He is a supernatural being. He has not yet acquired the physiological and metabolic properties of which we read in the gospels. The Jesus of Revelation is a god who would later be made into a man \u2013 not a man who would later become a god, as liberal religious scholars would have it.</blockquote>\n\n    <p>Here are the numerous problems with this paragraph:</p>\n\n    <p></p>\n    \n    <ol>\n      <li>Oftentimes, when someone writes that \"most biblical scholars\" hold to a particular position, that person means \"most biblical scholars that I consider legitimate, and I do not consider biblical scholars who hold a conservative view of the Bible to be legitimate.\" The term \"most biblical scholars\" is quite subjective and not at all an accurate or useful term when used in this way.</li>\n      <li>Although the Jesus in Revelation is the post-resurrected, post-ascended Jesus, John still describes Jesus as having a human form, and we can assume that this is the same Jesus that John wrote about earlier as having lived and walked on the earth as a human man.</li>\n      <li>The next few sentences are simply completely inaccurate. It is simply inaccurate that the Jesus in Revelation \"has not yet acquired the physiological and metabolic properties of which we read in the gospels.\" Rather, the events in Revelation occur <strong>after</strong> the gospels, so in Revelation, Jesus has <strong>already</strong> lived his life on earth. The Jesus in Revelation is not at all \"a god who would later be made into a man.\" Zindler is simply completely wrong in his understanding of Jesus in Revelation in this section of his article.</li>\n    </ol>\n\n    <h3>The Gospels</h3>\n\n    <blockquote class=\"first\">The notion that the four \u201Cgospels that made the cut\u201D to be included in the official New Testament were written by men named Matthew, Mark, Luke, and John does not go back to early Christian times. The titles \u201CAccording to Matthew,\u201D etc., were not added until late in the second century.</blockquote>\n\n    <p>Although the authors of the four gospels are not named in the gospels themselves, there was no dispute in the early church concerning their authorship. It was simply assumed that the four gospels were written by Matthew, Mark, Luke, and John. The lack of debate in the early church concerning the authorship of the gospels points to the fact that they were indeed written by these authors.</p>\n\n    <h4>Papias and Justin Martyr</h4>\n\n    <blockquote class=\"first\">Thus, although Papias ca. 140 CE (\u2018Common Era\u2019) knows all the gospels but has only heard of Matthew and Mark, Justin Martyr (ca. 150 CE) knows of none of the four supposed authors.</blockquote>\n\n    <p>Here, Zindler's language is, at best, over-simplified and confusing, and, at worst, deceptive. Here are several points in response:</p>\n\n    <p></p>\n    \n    <ol>\n      <li>First, what exactly is \"knows all the gospels but has only heard of Matthew and Mark\" supposed to mean? I simply have no idea what \"knows all the gospels\" is supposed to mean, and the assertion, \"but has only heard of Matthew and Mark\" is extremely misleading. More accurately, Papias only mentions Matthew and Mark in the passage we have concerning what he says about gospel authorship. To conclude that Papias \"has only heard\" of the gospels mentioned in this passage requires an enormous leap of logic. He could simply not have written anything about the other gospels. We simply do not know.</li>\n      <li>Second, ignoring everything else, it remains that Papias wrote about Matthew and Mark, and that Papias lived at a time that was very close to the time that the original authors would have lived. There are strong arguments that Papias's writing demonstrates that Mark was indeed the author of Mark and that Matthew's writing was likely the foundation upon which the Greek version of Matthew was based. Zindler unjustifiably dismisses the weight of Papias's writing by making another misleading statement concerning Justin Martyr, which we will examine in the third point below. For more information, see <a href=\"/bible/papias-authorship\" target=\"_blank\">Papias and gospel authorship</a>.</li>\n      <li>Papias writes that Justin Martyr \"knows of none of the four supposed authors,\" which is another very misleading statement. Just because Martyr does not mention any of the authors by name does not at all mean that he \"knows of none of the four supposed authors.\" Zindler is making a completely unjustified assertion here, and not only that, Martyr's writings contain information that is relevant to Mark's authorship, which we will examine in the fourth point below.</li>\n      <li>In his writings, Martyr mentions the \"memoirs of [Peter],\" and says that in these memoirs, it is written that Jesus changed the name of one of the apostles to Peter and also changed the name of the sons of Zebedee to Boanerges, meaning sons of thunder. These two events are not in the so-called Gospel of Peter, but they are both in the Gospel of Mark, and the second event is found <strong>only</strong> in Mark. Furthermore, Papias wrote that Mark was Peter's interpreter, which would lead us to believe that Mark was the author of Peter's memoirs. For more information, see <a href=\"/bible/martyr-authorship\" target=\"_blank\">Justin Martyr and the Authorship of Mark?</a></li>\n    </ol>\n\n    <h3>Irenaeus</h3>\n\n    <blockquote class=\"first\">It is only in 180 CE, with Irenaeus of Lyons, that we learn who wrote the four \"canonical\" gospels and discover that there are exactly four of them because there are four quarters of the earth and four universal winds. Thus, unless one supposes the argument of Irenaeus to be other than ridiculous, we come to the conclusion that the gospels are of unknown origin and authorship, and there is no good reason to suppose they are eye-witness accounts of a man named Jesus of Nazareth.</blockquote>\n\n    <p>There is a huge problem with Zindler's logic here. To dismiss Irenaeus's statements concerning the authorship of the gospels simply because he finds <strong>something else</strong> Irenaeus wrote to be \"ridiculous\" is not logical at all. What Irenaeus says concerning the authorship of the gospels does not become negated because of something else Irenaeus says that is really not relevant to the dicussion of authorship.</p>\n\n    <p>Because of all this, The conclusion that Zindler reaches is not at all valid. The writings of Papias, Justin Martyr, and Irenaeus, as well as the lack of debate during this time concerning the authorship of the gospels, all point towards the traditional view that the gospels were written by Matthew, Mark, Luke and John.</p>\n\n    <blockquote>At a minimum, this forces us to examine the gospels to see if their contents are even compatible with the notion that they were written by eye-witnesses. We cannot even assume that each of the gospels had but one author or redactor.</blockquote>\n\n    <p>Of course, we should examine these questions, but so far, we do not have good reason to believe anything other than that the gospels were each written by one author, and that these authors were eyewitnesses.</p>\n\n    <h3>Matthew and Luke's usage of Mark</h3>\n\n    <blockquote class=\"first\">It is clear that the gospels of Matthew and Luke could not possibly have been written by an eye-witness of the tales they tell. Both writers plagiarize (largely word-for-word) up to 90% of the gospel of Mark, to which they add sayings of Jesus and would-be historical details.</blockquote>\n\n    <p>Again, this is absolutely terrible reasoning from Zindler, as well as deceptive wording. A more position way of phrasing what Zindler writes is, \"Both writers use Mark as a source, and they include additional details in specific ways to emphasize the particular message they are trying to communicate.\"</p>\n\n    <p>That Matthew and Luke utilized (\"plagiarized\" is an unnecessarily loaded term) Mark does <strong>not at all</strong> lead to the conclusion that \"Matthew and Luke could not possibly have been written by an eye-witness of the tales they tell.\"</p>\n\n    <h3>Matthew and Luke's genealogies</h3>\n\n    <blockquote class=\"first\">Ignoring the fact that Matthew and Luke contradict each other in such critical details as the genealogy of Jesus \u2013 and thus cannot both be correct \u2013</blockquote>\n\n    <p>There are several legitimate explanations for the seeming discrepency between Matthew and Luke's genealogies.</p>\n\n    <h3>Work in progress...</h3>\n  </div>\n";

var post = {
  title: "Did Jesus Exist? A point-by-point response to atheists.org's Frank Zindler",
  subtitle: "Refuting Zindler's unconvincing arguments",
  imageUrl: "/images/cross-jesus-exist.png",
  url: "/answers/jesus/did-jesus-exist",
  added: "9/21/18",
  content: content
};

/* harmony default export */ __webpack_exports__["default"] = (post);

/***/ }),

/***/ "./src/constants/posts/apologetics/jesusExistence/index.js":
/*!*****************************************************************!*\
  !*** ./src/constants/posts/apologetics/jesusExistence/index.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _didJesusExist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./didJesusExist */ "./src/constants/posts/apologetics/jesusExistence/didJesusExist.js");
/* harmony import */ var _lucian__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lucian */ "./src/constants/posts/apologetics/jesusExistence/lucian.js");
/* harmony import */ var _tacitus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tacitus */ "./src/constants/posts/apologetics/jesusExistence/tacitus.js");




var JESUS_EXISTENCE = {
  category: "Did Jesus exist?",
  categoryUrl: "did-jesus-exist",
  posts: [_didJesusExist__WEBPACK_IMPORTED_MODULE_0__["default"], _lucian__WEBPACK_IMPORTED_MODULE_1__["default"], _tacitus__WEBPACK_IMPORTED_MODULE_2__["default"]]
};

/* harmony default export */ __webpack_exports__["default"] = (JESUS_EXISTENCE);

/***/ }),

/***/ "./src/constants/posts/apologetics/jesusExistence/lucian.js":
/*!******************************************************************!*\
  !*** ./src/constants/posts/apologetics/jesusExistence/lucian.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var content = "\n  <div class=\"writing\">\n    <h3>Who is Lucian of Samosata?</h3>\n\n    <p class=\"first\">Lucian of Samosata was a Greek satirist during the second half of the second century. Lucian had contempt for Jesus and Christians and wrote with the assumption that Jesus existed.</p>\n\n    <h3>What did Lucian write?</h3>\n\n    <p class=\"first\">Lucian wrote the following:</p>\n\n    <blockquote>The Christians, you know, <strong>worship a man to this day\u2014-the distinguished personage who introduced their novel rites, and was crucified on that account</strong>... You see, these misguided creatures start with the general conviction that they are immortal for all time, which explains the contempt of death and voluntary self-devotion which are so common among them; and then it was impressed on them by their original lawgiver that they are all brothers, from the moment that they are converted, and deny the gods of Greece, and <strong>worship the crucified sage</strong>, and live after his laws. All this they take quite on faith, with the result that they despise all worldly goods alike, regarding them merely as common property.</blockquote>\n\n    <p>There are three things of particular note in this passage:</p>\n\n    <p></p>\n\n    <ol>\n      <li>Lucian is a trustworthy source because he is hostile to Christianity</li>\n      <li>The \"man\" whom Christians worship clearly refers to Jesus. Even though Jesus is not mentioned by name, Jesus is the only person who would fit this description.</li>\n      <li>Lucian corroborates the Bible's teaching that Jesus was crucified</li>\n    </ol>\n\n    <p>This passage from Lucian's writings is strong evidence that Jesus not only existed, but was also crucified.</p>\n  </div>\n";

var post = {
  uid: "lucian",
  title: "What did Lucian of Samosata write about Jesus?",
  subtitle: "Lucian provides strong evidence that Jesus existed and was crucified",
  imageUrl: "/images/lucian.png",
  tags: ["jesus"],
  url: "/answers/jesus/lucian",
  added: "9/21/18",
  content: content
};

/* harmony default export */ __webpack_exports__["default"] = (post);

/***/ }),

/***/ "./src/constants/posts/apologetics/jesusExistence/tacitus.js":
/*!*******************************************************************!*\
  !*** ./src/constants/posts/apologetics/jesusExistence/tacitus.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var content = "\n  <div class=\"writing\">\n    <h3>Who is Cornelius Tacitus?</h3>\n\n    <p class=\"first\">Cornelius Tacitus was a Roman historian who lived during the reigns of many Roman emperors, from about A.D. 55-120. He has been called the \"greatest historian\" of ancient Rome (Habermas, VHCELJ, 87).</p>\n\n    <h3>What did Tacitus write about Jesus?</h3>\n\n    <p class=\"first\">One of his most famous works is the <em>Annals</em>, which covers the period from Augustus's death in A.D. 14 to Nero's death in A.D. 68. In the <em>Annals</em>, when writing about Nero, Tacitus mentions the death of Jesus, using a common misspelling of Christ, \"Christus\":</p>\n\n    <blockquote>But not all the relief that could come from man, not all the Bounties that the prince could bestow, nor all the atonements which could be presented to the gods, availed to relieve Nero From the infamy of being believed to have ordered the conflagration, the fire of Rome. Hence to suppress the rumor, he falsely charged with the guilt, and punished Christians, who were hated for their enormities. <strong>Christus, the founder of the name, was put to death by Pontius Pilate</strong>, procurator of Judea in the reign of Tiberius: but <strong>the pernicious superstition, repressed for a time broke out again</strong>, not only through Judea, where the mischief originated, but through the city of Rome also, where all things hideous and shameful from every part of the world find their Center and become popular. Accordingly, an arrest was first made of all who pleaded guilty; then, upon their information, an immense multitude was convicted, not so much of the crime of firing the city, as of hatred against mankind. (Annals XV, 44)</blockquote>\n\n    <p>There are four things of particular note in this passage:</p>\n\n    <p></p>\n\n    <ol>\n      <li>Tacitus is a trustworthy source because he is neither Christian nor Jewish</li>\n      <li>Tacitus's mention of \"Christus\" demonstrates that Jesus actually existed and lived.</li>\n      <li>The statement that Jesus was put to death by Pontius Pilate corroborates what the Bible teaches</li>\n      <li>Tacitus's mention of \"the pernicious superstition\" alludes to Jesus' resurrection</li>\n    </ol>\n\n    <p>This passage from Tacitus's writings is strong evidence that Jesus not only existed, but was also crucified, and it also suggests that a large number of people believed that Jesus resurrected from the dead.</p>\n  </div>\n";

var post = {
  uid: "tacitus",
  title: "What did Cornelius Tacitus write about Jesus?",
  subtitle: "Tacitus provides strong evidence that Jesus existed, was crucified, and perhaps rose from the dead",
  imageUrl: "/images/tacitus.png",
  tags: ["jesus"],
  url: "/answers/jesus/tacitus",
  added: "9/21/18",
  content: content
};

/* harmony default export */ __webpack_exports__["default"] = (post);

/***/ }),

/***/ "./src/constants/posts/index.js":
/*!**************************************!*\
  !*** ./src/constants/posts/index.js ***!
  \**************************************/
/*! exports provided: POSTS_ORGANIZED, ALL_POSTS, POSTS_BY_MOST_RECENT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POSTS_ORGANIZED", function() { return POSTS_ORGANIZED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALL_POSTS", function() { return ALL_POSTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POSTS_BY_MOST_RECENT", function() { return POSTS_BY_MOST_RECENT; });
/* harmony import */ var babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/toConsumableArray */ "babel-runtime/helpers/toConsumableArray");
/* harmony import */ var babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apologetics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apologetics */ "./src/constants/posts/apologetics/index.js");
/* harmony import */ var _theology__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./theology */ "./src/constants/posts/theology/index.js");




var POSTS_ORGANIZED = [_apologetics__WEBPACK_IMPORTED_MODULE_1__["default"], _theology__WEBPACK_IMPORTED_MODULE_2__["default"]];

var ALL_POSTS = POSTS_ORGANIZED.reduce(function (result, headerData) {
  headerData.categories.forEach(function (categoryData) {
    result = [].concat(babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(result), babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(categoryData.posts));
  });

  return result;
}, []);

var POSTS_BY_MOST_RECENT = ALL_POSTS.sort(function (a, b) {
  return new Date(b.updated || b.added) - new Date(a.updated || a.added);
});



/***/ }),

/***/ "./src/constants/posts/theology/gospel/gospel.js":
/*!*******************************************************!*\
  !*** ./src/constants/posts/theology/gospel/gospel.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var content = "\n  <div class=\"writing\">\n    <a id=\"introduction\"></a>\n\n    <h3>Introduction</h3>\n\n    <p class=\"first\">Does your life have purpose and meaning? Or are you simply a product of random chemical processes, a miniscule and insignificant speck in a naturalistic, uncaring universe?</p>\n\n    <img src=\"/images/universe.png\" class=\"image-left\">\n\n    <p>The truth is that your life does indeed have purpose and meaning. God created the universe and humans, and He has revealed exactly why He created us.</p>\n    \n    <p>At the heart of why God created humans is the gospel, or the good news, of Jesus Christ. The gospel is the most important truth in the universe for every human to learn.</p>\n    \n    <p>Here, we will summarize the gospel, and then provide you with resources for how to continue your lifelong journey of learning more and more about the glorious gospel of Jesus Christ.</p>\n    \n    <p>To begin, let's first learn about the Bible, which is where we learn about the gospel.</p>\n\n    <a id=\"bible\"></a>\n\n    <h3>Bible</h3>\n\n    <p class=\"first\">The Bible is how God has chosen to reveal Himself and His plans to humans. Throughout history, God chose to use ordinary humans to record His revelation in writings that would become the Bible that we have today. And today, these writings, preserved in the Bible, are the sole source of our knowledge of God and truth.</p>\n    \n    <blockquote>\"All Scripture is breathed out by God and profitable for teaching, for reproof, for correction, and for training in righteousness, that the man of God may be <strong>complete, equipped for every good work</strong> .\" (2 Timothy 3:16-17)</blockquote>\n    \n    <img src=\"/images/bible.png\" class=\"image-right\">\n\n    <p>The Bible is all we need to be \"complete, equipped for every good work.\" We do not need anything else besides the Bible. Neither the additional teachings of the Roman Catholic Church, nor any direct revelation or voice from God, is necessary to be saved or to please God with the life we live.</p>\n    \n    <p>A common term used to describe the teaching that the Bible <strong>alone</strong> is sufficient for salvation and godliness is <strong>Sola Scriptura</strong>.</p>\n    \n    <p>Next, we will learn what the Bible teaches us about God.</p>\n\n    <a id=\"god\"></a>\n    \n    <h3>God</h3>\n    \n    <p class=\"first\">What has God revealed about Himself through the Bible? First, God is the <strong>creator</strong>. He created the universe, humans, and everything else in the universe.</p>\n    \n    <blockquote>\"In the beginning, God created the heavens and the earth.\" (Genesis 1:1)</blockquote>\n    \n    <img src=\"/images/earth.png\" class=\"image-left\">\n\n    <p>That God is creator means that He has <strong>authority</strong> over everything in the universe. He created the universe for a specific purpose, namely, <strong>for His glory</strong>.</p>\n    \n    <p>Second, God is <strong>holy</strong>, which means that He is <strong>set apart in His perfect righteousness</strong>.</p>\n    <blockquote>\"There is none holy like the Lord: for there is none besides you.\" (1 Samuel 2:2a)</blockquote>\n    \n    <p>That God is holy and perfectly righteous means that He <strong>hates evil and sin and will certainly punish it</strong>. This is bad news for us because every human being has sinned against God by not perfectly obeying His commands.</p>\n    \n    <p>Next, we will learn about sin, which is the problem of every human.</p>\n\n    <a id=\"sin\"></a>\n    \n    <h3>Sin</h3>\n    \n    <p class=\"first\">Every human being is guilty of sin before God in two ways:</p>\n    \n    <p>First, when Adam sinned in the garden of Eden, he sinned as the <strong>representative head</strong> of the human race, and because of his sin, every human being after him is therefore also guilty of his sin, which is often called <strong>original sin</strong>.</p>\n    \n    <blockquote>\"Therefore, just as sin came into the world through one man, and death through sin, and so death spread to all men because all sinned.\" (Romans 5:12)</blockquote>\n    \n    <img src=\"/images/blood.png\" class=\"image-right\">\n\n    <p>Although every human is guilty of sin simply \"through one man\" (Adam), every human is also guilty of <strong>personal sin</strong>.</p>\n    \n    <blockquote>\"None is righteous, no, not one; no one understands; no one seeks for God. All have turned aside; together they have become worthless; no one does good, not even one.\" (Romans 3:10-12)</blockquote>\n    \n    <blockquote>\"But as for the cowardly, the faithless, the detestable, as for murderers, the sexually immoral, sorcerers, idolaters, and all liars, their portion will be in the lake that burns with fire and sulfur, which is the second death.\" (Revelation 21:8)</blockquote>\n    \n    <p>No human being is completely innocent of the list above. All people have been cowardly, faithless, sexually immoral, idolatrous, and/or dishonest at some point in their lives.</p>\n    \n    <p>The punishment for our sin against God is <strong>eternal torment in hell</strong>. Suffering in hell is infinite because an offense against an infinitely holy God is <strong>infinitely serious</strong>.</p>\n    \n    <blockquote>\"And the smoke of their torment goes up forever and ever, and they have no rest, day or night, these worshipers of the beast and its image, and whoever receives the mark of its name.\" (Revelation 14:11)</blockquote>\n    \n    <p>Sin is a serious problem, and we seem to be in a hopeless situation, because we have absolutely no ability to escape from our sin. But thankfully, there is a solution to sin, Jesus, whom we will learn about\n      next.</p>\n\n    <a id=\"jesus\"></a>\n    \n    <h3>Jesus</h3>\n    \n    <p class=\"first\">Jesus is both <strong>fully God</strong> and <strong>fully human</strong>. In the verses below, Jesus is \"the Word.\"</p>\n    \n      <blockquote>\"In the beginning was the Word, and the Word was with God, and <strong>the Word was God</strong> .\" (John 1:1)</blockquote>\n    \n      <blockquote>\"And <strong>the Word became flesh</strong> and dwelt among us...\" (John 1:14a)</blockquote>\n    \n    <img src=\"/images/cross.png\" class=\"image-left\">\n\n    <p>Jesus accomplished two primary things during his life to save sinners. First, on the cross, he became a <strong>substitute sacrifice</strong> for the sins of all who would believe in him. In other words, he paid the punishment for sin in their place so that they no longer need to pay it themselves in hell. This concept of Jesus \"satisfying\" God's justice and wrath is called <strong>propitiation</strong> in the Bible.</p>\n    \n    <blockquote>\"In this is love, not that we have loved God but that he loved us and sent his Son to be the <strong>propitiation for our sins</strong> .\" (1 John 4:10)</blockquote>\n    \n    <p>Second, Jesus lived a perfectly righteous life, and through faith, his perfect righteousness is <strong>imputed</strong>, or credited, to us, so that God now sees us as also being perfectly righteous. So, Jesus not only rescues us from our sin, but he also gives us a positive righteousness that enables us to have favor with God.</p>\n    \n    <blockquote>\"And to the one who does not work but believes in him who justifies the ungodly, his <strong>faith is counted as righteousness</strong> .\" (Romans 4:5)</blockquote>\n    \n    <p>It is important to recognize that it is <strong>Jesus' work alone</strong> that saves us, and not Jesus' work <strong>plus</strong> our works. We do not contribute anything to our salvation, which means that God gets all the glory for our salvation.</p>\n    \n    <p>Next, we will cover the role of <strong>repentance</strong> and <strong>faith</strong> in salvation.</p>\n\n    <a id=\"salvation\"></a>\n    \n    <h3> Salvation</h3>\n    \n    <p class=\"first\">Jesus taught that to be saved, we must <strong>repent</strong> and <strong>believe</strong> the gospel.</p>\n    \n    <blockquote>\"The time is fulfilled, and the kingdom of God is at hand; <strong>repent</strong> and <strong>believe</strong> in the gospel.\" (Mark 1:15)</blockquote>\n    \n    <img src=\"/images/heaven.png\" class=\"image-right\">\n    \n    <p>To <strong>repent</strong> means to feel sorrow for and hatred toward your sin and to actively turn away from your sin and toward obedience to God.</p>\n    \n    <blockquote>\"For godly grief produces a repentance that leads to salvation...\" (2 Corinthians 7:10)</blockquote>\n    \n    <p>To <strong>believe</strong>, or to have <strong>faith</strong>, means to trust in Jesus' work <strong>alone</strong> for your salvation, and not in <strong>any</strong> of your own good works.</p>\n    \n    <blockquote>\"For by grace you have been saved through faith. And this is not your own doing; it is the gift of God not a result of works, so that no one may boast.\" (Ephesians 2:8-9)</blockquote>\n    \n    <p>Although repentance and faith are actions we must take to be saved, it is God who gives us the ability to repent and have faith. God takes the initiative in giving us new life so that we can take these actions to be saved.</p>\n    \n    <blockquote>Jesus answered him, \"Truly, truly, I say to you, unless one is born again he cannot see the kingdom of God.\"'(John 3:3)</blockquote>\n    \n    <p>If you find that you have a desire to turn from your sin towards obedience to God, and you realize that you can only be saved by believing, or trusting, in Jesus' saving work, then you are experiencing the results of being \"born again,\" or saved, by God. This is incredibly exciting!</p>\n    \n    <p>Next, we will talk about the next steps to take in your lifelong journey to learn more about the God of the Bible.</p>\n\n    <a id=\"next\"></a>\n    \n    <h3>Next Steps</h3>\n    \n    <p class=\"first\">The most important thing to do as one who believes in Jesus is to <strong>continue learning about and obeying the Bible</strong>. Being a Christian is a lifelong journey and not merely a one-time decision or prayer.</p>\n    \n    <blockquote>\"And this is eternal life, that they know you, the only true God, and Jesus Christ whom you have sent.\" (John 17:3)</blockquote>\n    \n    <img src=\"/images/grow-small.png\" class=\"image-left\">\n\n    <p>Eternal life, or heaven, is about \"knowing\" God, which means that there is no end to this endeavor. Visit the \"Resources\" page below for a list of great resources to continue learning about God through the Bible.</p>\n    \n    <p><a href=\"/resources/learn\" class=\"link\">Resources: Learn</a></p>\n    \n    <p>In addition to continuing to learn about the Bible, you should find a solid church where you can fellowship and share life with other believers. The Bible is clear that we should be regularly meeting with other believers:</p>\n    \n    <blockquote>\"And let us consider how to stir up one another to love and good works, not neglecting to meet together, as is the habit of some, but encouraging one another, and all the more as you see the Day drawing near.\" (Hebrews 10:24-25)</blockquote>\n    \n    <p>Visit the Church Finder page for a list of church finders/directories that you can use to find a solid church:</p>\n    \n    <p><a href=\"/resources/church-finders\" class=\"link\">Resources: Church Finders</a></p>\n  </div>\n";

var post = {
  uid: "gospel",
  title: "What is the Gospel?",
  subtitle: "Learn the basics of the Bible, God, sin, Jesus, and salvation",
  imageUrl: "/images/cover-gospel.jpeg",
  tags: ["gospel"],
  url: "/gospel",
  added: "9/15/18",
  content: content
};

/* harmony default export */ __webpack_exports__["default"] = (post);

/***/ }),

/***/ "./src/constants/posts/theology/gospel/index.js":
/*!******************************************************!*\
  !*** ./src/constants/posts/theology/gospel/index.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _gospel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gospel */ "./src/constants/posts/theology/gospel/gospel.js");


var GOSPEL = {
  category: "Gospel",
  categoryUrl: "gospel",
  posts: [_gospel__WEBPACK_IMPORTED_MODULE_0__["default"]]
};

/* harmony default export */ __webpack_exports__["default"] = (GOSPEL);

/***/ }),

/***/ "./src/constants/posts/theology/historicalDocuments/apostlesCreed.js":
/*!***************************************************************************!*\
  !*** ./src/constants/posts/theology/historicalDocuments/apostlesCreed.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var content = "\n  <div class=\"writing\">\n    <p>I believe in God, the Father almighty,</p>\n    <p class=\"first indent\">creator of heaven and earth.</p>\n\n    <p>I believe in Jesus Christ, his only Son, our Lord,</p>\n    <p class=\"first indent\">who was conceived by the Holy Spirit</p>\n    <p class=\"first indent\">and born of the virgin Mary.</p>\n    <p class=\"first indent\">He suffered under Pontius Pilate,</p>\n    <p class=\"first indent\">was crucified, died, and was buried;</p>\n    <p class=\"first indent\">he descended to hell.</p>\n    <p class=\"first indent\">The third day he rose again from the dead.</p>\n    <p class=\"first indent\">He ascended to heaven</p>\n    <p class=\"first indent\">and is seated at the right hand of God the Father almighty.</p>\n    <p class=\"first indent\">From there he will come to judge the living and the dead.</p>\n\n    <p>I believe in the Holy Spirit,</Txt></p>\n    <p class=\"first indent\">the holy catholic* church,</p>\n    <p class=\"first indent\">the communion of saints,</p>\n    <p class=\"first indent\">the forgiveness of sins,</p>\n    <p class=\"first indent\">the resurrection of the body,</p>\n    <p class=\"first indent\">and the life everlasting. Amen.</p>\n\n    <p><em>* that is, the true Christian church of all times and all places</em></p>\n  </div>\n";

var post = {
  title: "The Apostle's Creed",
  subtitle: "An early statement of Christian belief. Trinitarian in structure",
  imageUrl: "/images/apostles-creed.png",
  url: "/answers/documents/apostles-creed",
  added: "9/28/18",
  tags: ["historical documents", "apostle's creed"],
  content: content
};

/* harmony default export */ __webpack_exports__["default"] = (post);

/***/ }),

/***/ "./src/constants/posts/theology/historicalDocuments/athanasianCreed.js":
/*!*****************************************************************************!*\
  !*** ./src/constants/posts/theology/historicalDocuments/athanasianCreed.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var content = "\n  <div class=\"writing\">\n    <p>\n      1. Whosoever will be saved, before all things it is necessary that he hold\n      the catholic faith;\n    </p>\n\n    <p>\n      2. Which faith except every one do keep whole and undefiled, without doubt\n      he shall perish everlastingly.\n    </p>\n\n    <p>\n      3. And the catholic faith is this: That we worship one God in Trinity, and\n      Trinity in Unity;\n    </p>\n\n    <p>4. Neither confounding the persons nor dividing the substance.</p>\n\n    <p>\n      5. For there is one person of the Father, another of the Son, and another\n      of the Holy Spirit.\n    </p>\n\n    <p>\n      6. But the Godhead of the Father, of the Son, and of the Holy Spirit is\n      all one, the glory equal, the majesty coeternal.\n    </p>\n\n    <p>\n      7. Such as the Father is, such is the Son, and such is the Holy Spirit.\n    </p>\n\n    <p>\n      8. The Father uncreated, the Son uncreated, and the Holy Spirit uncreated.\n    </p>\n\n    <p>\n      9. The Father incomprehensible, the Son incomprehensible, and the Holy\n      Spirit incomprehensible.\n    </p>\n\n    <p>\n      10. The Father eternal, the Son eternal, and the Holy Spirit eternal.\n    </p>\n\n    <p>11. And yet they are not three eternals but one eternal.</p>\n\n    <p>\n      12. As also there are not three uncreated nor three incomprehensible, but\n      one uncreated and one incomprehensible.\n    </p>\n\n    <p>\n      13. So likewise the Father is almighty, the Son almighty, and the Holy\n      Spirit almighty.\n    </p>\n\n    <p>14. And yet they are not three almighties, but one almighty.</p>\n\n    <p>\n      15. So the Father is God, the Son is God, and the Holy Spirit is God;\n    </p>\n\n    <p>16. And yet they are not three Gods, but one God.</p>\n\n    <p>\n      17. So likewise the Father is Lord, the Son Lord, and the Holy Spirit\n      Lord;\n    </p>\n\n    <p>18. And yet they are not three Lords but one Lord.</p>\n\n    <p>\n      19. For like as we are compelled by the Christian verity to acknowledge\n      every Person by himself to be God and Lord;\n    </p>\n\n    <p>\n      20. So are we forbidden by the catholic religion to say; There are three\n      Gods or three Lords.\n    </p>\n\n    <p>21. The Father is made of none, neither created nor begotten.</p>\n\n    <p>\n      22. The Son is of the Father alone; not made nor created, but begotten.\n    </p>\n\n    <p>\n      23. The Holy Spirit is of the Father and of the Son; neither made, nor\n      created, nor begotten, but proceeding.\n    </p>\n\n    <p>\n      24. So there is one Father, not three Fathers; one Son, not three Sons;\n      one Holy Spirit, not three Holy Spirits.\n    </p>\n\n    <p>\n      25. And in this Trinity none is afore or after another; none is greater or\n      less than another.\n    </p>\n\n    <p>26. But the whole three persons are coeternal, and coequal.</p>\n\n    <p>\n      27. So that in all things, as aforesaid, the Unity in Trinity and the\n      Trinity in Unity is to be worshipped.\n    </p>\n\n    <p>\n      28. He therefore that will be saved must thus think of the Trinity.\n    </p>\n\n    <p>\n      29. Furthermore it is necessary to everlasting salvation that he also\n      believe rightly the incarnation of our Lord Jesus Christ.\n    </p>\n\n    <p>\n      30. For the right faith is that we believe and confess that our Lord Jesus\n      Christ, the Son of God, is God and man.\n    </p>\n\n    <p>\n      31. God of the substance of the Father, begotten before the worlds; and\n      man of substance of His mother, born in the world.\n    </p>\n\n    <p>\n      32. Perfect God and perfect man, of a reasonable soul and human flesh\n      subsisting.\n    </p>\n\n    <p>\n      33. Equal to the Father as touching His Godhead, and inferior to the\n      Father as touching His manhood.\n    </p>\n\n    <p>\n      34. Who, although He is God and man, yet He is not two, but one Christ.\n    </p>\n\n    <p>\n      35. One, not by conversion of the Godhead into flesh, but by taking of\n      that manhood into God.\n    </p>\n\n    <p>\n      36. One altogether, not by confusion of substance, but by unity of person.\n    </p>\n\n    <p>\n      37. For as the reasonable soul and flesh is one man, so God and man is one\n      Christ;\n    </p>\n\n    <p>\n      38. Who suffered for our salvation, descended into hell, rose again the\n      third day from the dead;\n    </p>\n\n    <p>\n      39. He ascended into heaven, He sits on the right hand of the Father, God,\n      Almighty;\n    </p>\n\n    <p>40. From thence He shall come to judge the quick and the dead.</p>\n\n    <p>41. At whose coming all men shall rise again with their bodies;</p>\n\n    <p>42. and shall give account of their own works.</p>\n\n    <p>\n      43. And they that have done good shall go into life everlasting and they\n      that have done evil into everlasting fire.\n    </p>\n\n    <p>\n      44. This is the catholic faith, which except a man believe faithfully he\n      cannot be saved.\n    </p>\n  </div>\n";

var post = {
  title: "The Athanasian Creed",
  subtitle: "Named after Athanasius (A.D. 293-373), the champion of orthodoxy against Arian attacks on the doctrine of the trinity",
  imageUrl: "/images/athanasian-creed.png",
  url: "/answers/documents/athanasian-creed",
  added: "9/28/18",
  tags: ["historical documents", "athanasian creed"],
  content: content
};

/* harmony default export */ __webpack_exports__["default"] = (post);

/***/ }),

/***/ "./src/constants/posts/theology/historicalDocuments/chalcedonianCreed.js":
/*!*******************************************************************************!*\
  !*** ./src/constants/posts/theology/historicalDocuments/chalcedonianCreed.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var content = "\n  <div class=\"writing\">\n    <p>\n      We, then, following the holy Fathers, all with one consent, teach men to\n      confess one and the same Son, our Lord Jesus Christ, the same perfect in\n      Godhead and also perfect in manhood; truly God and truly man, of a\n      reasonable [rational] soul and body; consubstantial [co-essential] with\n      the Father according to the Godhead, and consubstantial with us according\n      to the Manhood; in all things like unto us, without sin; begotten before\n      all ages of the Father according to the Godhead, and in these latter days,\n      for us and for our salvation, born of the Virgin Mary, the Mother of God,\n      according to the Manhood; one and the same Christ, Son, Lord, Only\n      begotten, to be acknowledged in two natures, inconfusedly, unchangeably,\n      indivisibly, inseparably; the distinction of natures being by no means\n      taken away by the unity, but rather the property of each nature being\n      preserved, and concurring in one Person and one Subsistence, not parted or\n      divided into two persons, but one and the same Son, and only begotten, God\n      the Word, the Lord Jesus Christ; as the prophets from the beginning [have\n      declared] concerning him, and the Lord Jesus Christ himself has taught us,\n      and the Creed of the holy Fathers has handed down to us.\n    </p>\n  </div>\n";

var post = {
  title: "The Chalcedonian Creed",
  subtitle: "An orthodox statement concerning the person and nature of Jesus. Written in AD 451.",
  imageUrl: "/images/chalcedonian-creed.png",
  url: "/answers/documents/chalcedonian-creed",
  added: "9/28/18",
  tags: ["historical documents", "chalcedonian creed"],
  content: content
};

/* harmony default export */ __webpack_exports__["default"] = (post);

/***/ }),

/***/ "./src/constants/posts/theology/historicalDocuments/index.js":
/*!*******************************************************************!*\
  !*** ./src/constants/posts/theology/historicalDocuments/index.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _apostlesCreed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apostlesCreed */ "./src/constants/posts/theology/historicalDocuments/apostlesCreed.js");
/* harmony import */ var _niceneCreed__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./niceneCreed */ "./src/constants/posts/theology/historicalDocuments/niceneCreed.js");
/* harmony import */ var _chalcedonianCreed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chalcedonianCreed */ "./src/constants/posts/theology/historicalDocuments/chalcedonianCreed.js");
/* harmony import */ var _athanasianCreed__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./athanasianCreed */ "./src/constants/posts/theology/historicalDocuments/athanasianCreed.js");
/* harmony import */ var _thirtyNineArticles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./thirtyNineArticles */ "./src/constants/posts/theology/historicalDocuments/thirtyNineArticles.js");






var historicalDocuments = {
  category: "Historical documents",
  categoryUrl: "historical-documents",
  posts: [_apostlesCreed__WEBPACK_IMPORTED_MODULE_0__["default"], _niceneCreed__WEBPACK_IMPORTED_MODULE_1__["default"], _chalcedonianCreed__WEBPACK_IMPORTED_MODULE_2__["default"], _athanasianCreed__WEBPACK_IMPORTED_MODULE_3__["default"], _thirtyNineArticles__WEBPACK_IMPORTED_MODULE_4__["default"]]
};

/* harmony default export */ __webpack_exports__["default"] = (historicalDocuments);

/***/ }),

/***/ "./src/constants/posts/theology/historicalDocuments/niceneCreed.js":
/*!*************************************************************************!*\
  !*** ./src/constants/posts/theology/historicalDocuments/niceneCreed.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var content = "\n  <div class=\"writing\">\n    <p>\n      We believe in one God, the Father Almighty, Maker of heaven and earth, and\n      of all things visible and invisible;\n    </p>\n    <p>\n      And in one Lord Jesus Christ, the Son of God, the Only-begotten, Begotten\n      of the Father before all ages, Light of Light, Very God of Very God,\n      Begotten, not made; of one essence with the Father,\n    </p>\n    <p>by whom all things were made;</p>\n    <p>\n      Who for us men and for our salvation came down from heaven, and was\n      incarnate of the Holy Spirit and the Virgin Mary, and was made man;\n    </p>\n    <p>\n      And was crucified also for us under Pontius Pilate, and suffered and was\n      buried; And the third day He rose again, according to the Scriptures;\n    </p>\n    <p>\n      And ascended into heaven, and sits at the right hand of the Father;\n    </p>\n    <p>\n      And He shall come again with glory to judge the living and the dead, Whose\n      kingdom shall have no end.\n    </p>\n    <p>\n      And we believe in the Holy Spirit, the Lord, and Giver of Life, Who\n      proceeds from the Father, Who with the Father and the Son together is\n      worshipped and glorified, Who spoke by the Prophets;\n    </p>\n    <p>And we believe in one, holy, catholic*, and apostolic Church.</p>\n    <p>We acknowledge one Baptism for the remission of sins.</p>\n    <p>We look for the Resurrection of the dead,</p>\n    <p>And the Life of the age to come. Amen.</p>\n    <p><em>* that is, the true Christian church of all times and all places</em></p>\n  </div>\n";

var post = {
  title: "The Nicene Creed",
  subtitle: "A statement of the orthodox faith of the early Christian church in opposition to certain heresies, especially Arianism",
  imageUrl: "/images/nicene-creed.png",
  url: "/answers/documents/nicene-creed",
  added: "9/28/18",
  tags: ["historical documents", "nicene creed"],
  content: content
};

/* harmony default export */ __webpack_exports__["default"] = (post);

/***/ }),

/***/ "./src/constants/posts/theology/historicalDocuments/thirtyNineArticles.js":
/*!********************************************************************************!*\
  !*** ./src/constants/posts/theology/historicalDocuments/thirtyNineArticles.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var content = "\n  <div class=\"writing\">\n    <p>\n      <strong>THE ARTICLES OF RELIGION</strong>\n    </p>\n    <p class=\"first\">\n      Agreed upon by the Archbishops, Bishops, and the whole clergy of the\n      Provinces of Canterbury and York, London, 1562.\n    </p>\n    <p>\n      <strong>I. Of Faith in the Holy Trinity</strong>\n    </p>\n    <p class=\"first\">\n      There is but one living and true God, everlasting, without body, parts, or\n      passions; of infinite power, wisdom, and goodness; the Maker, and\n      Preserver of all things both visible and invisible. And in unity of this\n      Godhead there be three Persons, of one substance, power, and eternity; the\n      Father, the Son, and the Holy Ghost.\n    </p>\n    <p>\n      <strong>II. Of the Word or Son of God, which was made very Man</strong>\n    </p>\n    <p class=\"first\">\n      The Son, which is the Word of the Father, begotten from everlasting of the\n      Father, the very and eternal God, and of one substance with the Father,\n      took Man's nature in the womb of the blessed Virgin, of her substance: so\n      that two whole and perfect Natures, that is to say, the Godhead and\n      Manhood, were joined together in one Person, never to be divided, whereof\n      is one Christ, very God, and very Man; who truly suffered, war crucified,\n      dead and buried, to reconcile his Father to us, and to be a sacrifice, not\n      only for original guilt, but also for all actual sins of men.\n    </p>\n    <p>\n      <strong>III. Of the going down of Christ into Hell</strong>\n    </p>\n    <p class=\"first\">\n      As Christ died for us, and was buried, so also is it to be believed, that\n      he went down into Hell.\n    </p>\n    <p>\n      <strong>IV. Of the Resurrection of Christ</strong>\n    </p>\n    <p class=\"first\">\n      Christ did truly rise again from death, and took again his body, with\n      flesh, bones, and all things appertaining to the perfection of Man's\n      nature; wherewith he ascended into Heaven, and there sitteth, until he\n      return to judge all Men at the last day.\n    </p>\n    <p>\n      <strong>V. Of the Holy Ghost</strong>\n    </p>\n    <p class=\"first\">\n      The Holy Ghost, proceeding from the Father and the Son, is of one\n      substance, majesty, and glory, with the Father and the Son, very and\n      eternal God.\n    </p>\n    <p>\n      <strong>VI. Of the Sufficiency of the Holy Scriptures for salvation</strong>\n    </p>\n    <p class=\"first\">\n      Holy Scripture containeth all things necessary to salvation: so that\n      whatsoever is not read therein, nor may be proved thereby, is not to be\n      required of any man, that it should be. believed as an article of the\n      Faith, or be thought requisite or necessary to salvation. In the name of\n      the Holy Scripture we do understand those Canonical Books of the Old and\n      New Testament, of whose authority was never any doubt in the Church.\n    </p>\n    <p>\n      <strong><em>Of the Names and Numbers of the Canonical Books</em></strong>\n    </p>\n    <p class=\"first\">Genesis</p>\n    <p class=\"nomargin\">Exodus</p>\n    <p class=\"nomargin\">Leviticus</p>\n    <p class=\"nomargin\">Numbers</p>\n    <p class=\"nomargin\">Deuteronomy</p>\n    <p class=\"nomargin\">Joshua</p>\n    <p class=\"nomargin\">Judges</p>\n    <p class=\"nomargin\">Ruth</p>\n    <p class=\"nomargin\">The First Book of Samuel</p>\n    <p class=\"nomargin\">The Second Book of Samuel</p>\n    <p class=\"nomargin\">The First Book of Kings</p>\n    <p class=\"nomargin\">The Second Book of Kings</p>\n    <p class=\"nomargin\">The First Book of Chronicles</p>\n    <p class=\"nomargin\">The Second Book of Chronicles</p>\n    <p class=\"nomargin\">The First Book of Esdras</p>\n    <p class=\"nomargin\">The Second Book of Esdras</p>\n    <p class=\"nomargin\">The Book of Esther</p>\n    <p class=\"nomargin\">The Book of Job</p>\n    <p class=\"nomargin\">The Psalms</p>\n    <p class=\"nomargin\">The Proverbs</p>\n    <p class=\"nomargin\">Ecclesiastes or Preacher</p>\n    <p class=\"nomargin\">Cantica or Songs of Solomon</p>\n    <p class=\"nomargin\">Four Prophets the greater</p>\n    <p class=\"nomargin\">Twelve Prophets the less</p>\n    <p>\n      <strong><em>\n        And the other Books (as Hierome saith) the Church doth read for example\n        of life and instruction of manners; but yet doth it not apply them to\n        establish any doctrine; such are these following:\n      </em></strong>\n    </p>\n    <p class=\"first\">The Third Book of Kings</p>\n    <p class=\"nomargin\">The Fourth Book of Kings</p>\n    <p class=\"nomargin\">The Book of Tobias</p>\n    <p class=\"nomargin\">The Book of Judith</p>\n    <p class=\"nomargin\">The rest of the Book of Esther</p>\n    <p class=\"nomargin\">The Book of Wisdom</p>\n    <p class=\"nomargin\">Jesus the Son of Sirach</p>\n    <p class=\"nomargin\">Baruch the Prophet</p>\n    <p class=\"nomargin\">The Song of the Three Children</p>\n    <p class=\"nomargin\">The Story of Susanna</p>\n    <p class=\"nomargin\">Of Bel and the Dragon</p>\n    <p class=\"nomargin\">The Prayer of Manasses</p>\n    <p class=\"nomargin\">The First Book of Maccabees</p>\n    <p class=\"nomargin\">The Second Book of Maccabees</p>\n    <p>\n      All the Books of the New Testament, as they are commonly received, we do\n      receive, and account them Canonical.\n    </p>\n    <p>\n      <strong>VII. Of the Old Testament</strong>\n    </p>\n    <p class=\"first\">\n      The Old Testament is not contrary to the New: for both in the Old and New\n      Testament everlasting life is offered to Mankind by Christ, who is the\n      only Mediator between God and Man, being both God and Man. Wherefore they\n      are not to be heard, which feign that the old Fathers did look only for\n      transitory promises. Although the Law given from God by Moses, as touching\n      Ceremonies and Rites, do not bind Christian men, nor the Civil precepts\n      thereof ought of necessity to be received in any commonwealth; yet\n      notwithstanding, no Christian man whatsoever is free from the obedience of\n      the Commandments which are called Moral.\n    </p>\n    <p>\n      <strong>VIII. Of the Three Creeds</strong>\n    </p>\n    <p class=\"first\">\n      The Three Creeds, Nicene Creed, Athanasius's Creed, and that which is\n      commonly called the Apostles' Creed, ought thoroughly to be received and\n      believed: for they may be proved by most certain warrants of Holy\n      Scripture.\n    </p>\n    <p>\n      <strong>IX. Of Original or Birth-sin</strong>\n    </p>\n    <p class=\"first\">\n      Original Sin standeth not in the following of Adam, (as the Pelagians do\n      vainly talk;) but it is the fault and corruption of the mature of every\n      man, that naturally is engendered of the offspring of Adam; whereby man is\n      very far gone from original righteousness, and is of his own nature\n      inclined to evil, so that the flesh lusteth always contrary to the spirit;\n      and therefore in every person born into this world, it deserveth God's\n      wrath and damnation. And this infection of nature Both remain, yea in them\n      that are regenerated; whereby the lust of the flesh, called in the Greek,\n      phronema sarkos, which some do expound the wisdom, some sensuality, some\n      the affection some the desire, of the flesh, is not subject to the Law of\n      God. And although there is no condemnation for them that believe and are\n      baptized, yet the Apostle doth confess, that concupiscence and lust hath\n      of itself the nature of sin.\n    </p>\n    <p>\n      <strong>X. Of Free Will</strong>\n    </p>\n    <p class=\"first\">\n      The condition of Man after the fall of Adam is such that he cannot turn\n      and prepare himself, by his own natural strength and good works, to faith,\n      and calling upon God: Wherefore we have no power to do good works pleasant\n      and acceptable to God, without the grace of God by Christ preventing us,\n      that we may have a ,good will, and working with us, when we have that good\n      will.\n    </p>\n    <p>\n      <strong>XI. Of the justification of Adam</strong>\n    </p>\n    <p class=\"first\">\n      We are accounted righteous before God, only for the merit of our Lord and\n      Saviour Jesus Christ by Faith, and not for our own works or deservings:\n      Wherefore, that we are justified by Faith only is a most wholesome\n      Doctrine, and very full of comfort, as more largely is expressed in the\n      Homily of Justification.\n    </p>\n    <p>\n      <strong>XII. Of Good Works</strong>\n    </p>\n    <p class=\"first\">\n      Albeit that Good Works, which are the fruits of Faith, and follow after\n      Justification, cannot put away our sins, and endure the severity of God's\n      judgement; yet are they pleasing and acceptable to God in Christ, and do\n      spring out necessarily of a true and lively Faith; insomuch that by them a\n      lively, Faith may be as evidently known as a tree discerned by the fruit.\n    </p>\n    <p>\n      <strong>XIII. Of Works before Justification</strong>\n    </p>\n    <p class=\"first\">\n      Works done before the grace of Christ, and the Inspiration of his Spirit,\n      are not pleasant to God, forasmuch as they spring not of faith in Jesus\n      Christ, neither do they make men meet to receive grace, or (as the\n      School-authors say) deserve grace of congruity: yea rather, for that they\n      are not done as God hath willed and commanded them to be done, we doubt\n      not but they have the nature of sin.\n    </p>\n    <p>\n      <strong>XIV. Of Works of Supererogation</strong>\n    </p>\n    <p class=\"first\">\n      Voluntary Works besides, over and above, God's Commandments, which they\n      call Works of Supererogation, cannot be taught without arrogant' and\n      impiety: for by them men do declare, that they do not only render unto God\n      as much as they are bound to do, but that they do more for his sake, than\n      of bounden duty is required: whereas Christ saith plainly, When ye have\n      done all that arc commanded to you, say, We are unprofitable servants.\n    </p>\n    <p>\n      <strong>XV. Of Christ alone without Sin</strong>\n    </p>\n    <p class=\"first\">\n      Christ in the truth of our nature was made like unto us in all things, sin\n      only except, from which he was clearly void, both in his flesh, and in his\n      spirit. He came to be the Lamb without spot, who, by sacrifice of himself\n      once made, should take away the sins of the world, and sin, as Saint ,John\n      saith, was not in him. But all we the rest, although baptized, and born\n      again in Christ, yet offend in many things; and if we say we have no sin,\n      we deceive ourselves, and the truth is not in us.\n    </p>\n    <p>\n      <strong>XVI. Of Sin after Baptism</strong>\n    </p>\n    <p class=\"first\">\n      Not every deadly sin willingly committed after Baptism is sin against the\n      Holy Ghost, and unpardonable. Wherefore the grant of repentance is not to\n      be denied to such as fall into sin after Baptism. After we have received\n      the Holy Ghost, we may depart from grace given, and fall into sin, and by\n      the grace of God we may arise again, and amend our lives. And therefore\n      they are to be condemned, which say, they can no more sin as long as they\n      live here, or deny the place of forgiveness to such as truly repent.\n    </p>\n    <p>\n      <strong>XVII. Of Predestination and Election</strong>\n    </p>\n    <p class=\"first\">\n      Predestination to Life is the everlasting purpose of God, whereby (before\n      the foundations of the world were laid) he hath constantly decreed by his\n      counsel secret to us, to deliver from curse and damnation those whom he\n      hath chosen in Christ out of mankind. and to bring them by Christ to\n      everlasting salvation, as vessels made to honour. Wherefore, they which be\n      endued with so excellent a benefit of God be called according to God's\n      purpose by his Spirit working in due season: they through Grace obey the\n      calling: they be justified freely: then be made sons of God by adoption:\n      they be made like the image of his only-begotten Son ,Jesus Christ: they\n      walk religiously in good works, and at length, by God's mercy, they attain\n      to everlasting felicity.\n    </p>\n    <p>\n      As the godly consideration of Predestination, and our Election in Christ,\n      is full of sweet, pleasant, and unspeakable comfort to godly persons, and\n      such as feel in themselves the working of the Spirit of Christ, mortifying\n      the works of the flesh, and their earthly members, and drawing up their\n      mind to high and heavenly things, as well because it doth greatly\n      establish and confirm their faith of eternal Salvation to be enjoyed\n      through Christ, as because it doth fervently kindle their love towards\n      God: So, for curious and carnal persons, lacking the Spirit of Christ, to\n      have continually before their eyes the sentence of God's Predestination,\n      is a most dangerous downfall, whereby the Devil doth thrust them either\n      into desperation, or into wretchlessness of most unclean living, no less\n      perilous than desperation.\n    </p>\n    <p>\n      Furthermore, we must receive God's promises in such wise, as they be\n      generally set forth to us in Holy Scripture: and, in our doings, that Will\n      of God is to be followed, which we have expressly declared unto us in the\n      Word of God.\n    </p>\n    <p>\n      <strong>XVIII. Of obtaining eternal Salvation only by the Name of Christ</strong>\n    </p>\n    <p class=\"first\">\n      They also are to be had accursed that presume to say, That every man shall\n      be saved by the Law or Sect which he professeth, so that he be diligent to\n      frame his life according to that Law, and the light of Nature. For Holy\n      Scripture doth set out unto us only the Name of Jesus Christ, whereby men\n      must be saved.\n    </p>\n    <p>\n      <strong>XIX. Of the Church</strong>\n    </p>\n    <p class=\"first\">\n      The visible Church of Christ is a congregation of faithful men, in the\n      which the pure Word of God is preached, and the Sacraments be\n      dulyministered according to Christ's ordinance in all those things that of\n      necessity are requisite to the same.\n    </p>\n    <p>\n      As the Church of Jerusalem, Alexandria, and Antioch, have erred; so also\n      the Church of Rome hath erred, not only in their living and manner of\n      Ceremonies, but also in matters of Faith.\n    </p>\n    <p>\n      <strong>XX. Of the Authority of the Church</strong>\n    </p>\n    <p class=\"first\">\n      The Church hath power to decree Rites or Ceremonies, and authorityin\n      Controversies of Faith: And yet it is not lawful for the Church to ordain\n      any thing that is contrary to God's Word written, neither may it so\n      expound one place of Scripture, that it be repugnant to another.\n      Wherefore, although the Church be a witness and a keeper of Holy Writ, as\n      it ought not to decree any thing against the same, so besides the same\n      ought it not to enforce any thing to be believed for necessity of\n      Salvation.\n    </p>\n    <p>\n      <strong>XXI. Of the Authority of General Councils</strong>\n    </p>\n    <p class=\"first\">\n      General Councils may not be gathered together without the commandment and\n      will of Princes. And when they be gathered together, (forasmuch as they be\n      an assembly of men, whereof all be not governed with the Spirit and Word\n      of God,) they may err, and sometimes have erred, even in things pertaining\n      unto God. Wherefore things ordained by them as necessary to salvation have\n      neither strength nor authority, unless it may be declared that they be\n      taken out of Holy Scripture.\n    </p>\n    <p>\n      <strong>XXII. Of Purgatory</strong>\n    </p>\n    <p class=\"first\">\n      The Romish Doctrine concerning Purgatory, Pardons, Worshipping and\n      Adoration, as well of Images as of Reliques, and also invocation of\n      Saints, is a fond thing vainly invented, and grounded upon no warranty of\n      Scripture, but rather repugnant to the Word of God.\n    </p>\n    <p>\n      <strong>XXIII. Of Ministering in the Congregation</strong>\n    </p>\n    <p class=\"first\">\n      It is not lawful for any man to take upon him the office of publick\n      preaching, or ministering the Sacraments in the Congregation, before he be\n      lawfully called, and sent to execute the same. And those we ought to judge\n      lawfully called and sent, which be chosen and called to this work by men\n      who have publick authority given unto them in the Congregation, to call\n      and send Ministers into the Lord's vineyard.\n    </p>\n    <p>\n      <strong>\n        XXIV. Of speaking in the Congregation in such a tongue as the people\n        understandeth\n      </strong>\n    </p>\n    <p class=\"first\">\n      It is a thing plainly repugnant to the Word of God, and the custom of the\n      Primitive Church, to have publick Prayer in the Church, or to minister the\n      Sacraments in a tongue not understanded of the people.\n    </p>\n    <p>\n      <strong>XXV. Of the Sacraments</strong>\n    </p>\n    <p class=\"first\">\n      Sacraments ordained of Christ be not only badges or tokens of Christian\n      men's profession, but rather they be certain sure witnesses, and effectual\n      signs of grace, and God's good will towards us, by the which he doth work\n      invisibly in us, and doth not only quicken, but also strengthen and\n      confirm our Faith in him.\n    </p>\n    <p>\n      There are two Sacraments ordained of Christ our Lord in the Gospel, that\n      is to say, Baptism, and the Supper of the Lord.\n    </p>\n    <p>\n      Those five commonly called Sacraments, that is to say, Confirmation,\n      Penance, Orders, Matrimony, and extreme Unction, are not to be counted for\n      Sacraments of the Gospel, being such as have grown partly of the corrupt\n      following of the Apostles, partly are states of life allowed in the\n      Scriptures; but yet have not like nature of Sacraments with Baptism, and\n      the Lord's Supper, for that they have not any visible sign or ceremony\n      ordained of God.\n    </p>\n    <p>\n      The Sacraments were not ordained of Christ to be gazed upon, or to be\n      carried about, but that we should duly use them. And in such only as\n      worthily receive the same they have a wholesome effect or operation: but\n      they that receive them unworthily purchase to themselves damnation, as\n      Saint Paul saith.\n    </p>\n    <p>\n      <strong>\n        XXVI. Of the Unworthiness of the Ministers, which hinders not the effect\n        of the Sacrament\n      </strong>\n    </p>\n    <p class=\"first\">\n      Although in the visible Church the evil be ever mingled with the good, and\n      sometimes the evil have chief authority in the Ministration of the Word\n      and Sacraments, yet forasmuch as they do not the same in their own name,\n      but in Christ's, and do minister by his commission and authority, we may\n      use their ministry, both in hearing the Word of God, and in receiving of\n      the Sacraments. Neither is the effect of Christ's ordinance taken away by\n      their wickedness, nor the grace of God's gifts diminished from such as by\n      faith and rightly do receive the Sacraments ministered unto them; which be\n      effectual, because of Christ's institution and promise, although they be\n      ministered by evil then.\n    </p>\n    <p>\n      Nevertheless, it appertaineth to the discipline of the Church, that\n      inquire be made of evil Ministers, and that they be accused by those that\n      have knowledge of their offences; and finally being found guilty, by just\n      judgement be deposed.\n    </p>\n    <p>\n      <strong>XXVII. Of Baptism</strong>\n    </p>\n    <p class=\"first\">\n      Baptism is not only a sign of profession, and mark of difference, whereby\n      Christian men are discerned from others that be not christened, but it is\n      also a sign of Regeneration or new Birth, whereby, as by an instrument,\n      they that receive Baptism rightly are grafted into the Church; the\n      promises of forgiveness of sin, and of our adoption to be sons of God by\n      the Holy Ghost, are visibly signed and sealed; Faith is confirmed, and\n      Grace increased by virtue of prayer unto God. The Baptism of young\n      Children is in any wise to be retained in the Church, as most agreeable\n      with the institution of Christ.\n    </p>\n    <p>\n      <strong>XXVIII. Of the Lord's Supper</strong>\n    </p>\n    <p class=\"first\">\n      The Supper of the Lord is not only a sign of the love that Christians\n      ought to have among themselves one to another; but rather is a Sacrament\n      of our Redemption by Christ's death: insomuch that to such as rightly,\n      worthily, and with faith, receive the same, the Bread which we break is a\n      partaking of the Body of Christ; and likewise the Cup of Blessing is a\n      partaking of the Blood of Christ.\n    </p>\n    <p>\n      Transubstantiation (or the change of the substance of Bread and Wine) in\n      the Supper of the Lord, cannot be proved by Holy Writ; but is repugnant to\n      the plain words of Scripture, overthroweth the nature of a Sacrament, and\n      hath given occasion to many superstitions.\n    </p>\n    <p>\n      The Body of Christ is given, taken and eaten in the Supper, only after an\n      heavenly and spiritual manner. And the mean whereby the Body of Christ is\n      received and eaten in the Supper is Faith.\n    </p>\n    <p>\n      The Sacrament of the Lord's Supper was not by Christ's ordinance reserved,\n      carried about, lifted up or worshipped.\n    </p>\n    <p>\n      <strong>\n        XXIX. Of the Wicked which eat not the Body of Christ in the use of the\n        Lord's Supper\n      </strong>\n    </p>\n    <p class=\"first\">\n      The Wicked. and such as be void of a lively faith, although they do\n      carnally and visibly press with their teeth (as Saint Augustine saith) the\n      Sacrament of the Body and Blood of Christ, yet in no wise are they\n      partakers of Christ: but rather, to their condemnation, do cat and drink\n      the sign or Sacrament of so great a thing.\n    </p>\n    <p>\n      <strong>XXX. Of both kinds</strong>\n    </p>\n    <p class=\"first\">\n      The Cup of the Lord is not to be denied to the Lay-people: for both the\n      parts of the Lord's Sacrament, by Christ's ordinance and commandment,\n      ought to be ministered to all Christian men alike.\n    </p>\n    <p>\n      <strong>XXXI. Of the Oblation of Christ of Christ finished upon the Cross</strong>\n    </p>\n    <p class=\"first\">\n      The offering of Christ once made is that perfect redemption, propitiation,\n      and satisfaction, for all the sins of the whole world, both original and\n      actual; and there is none other satisfaction for sin, but that alone.\n      Wherefore the sacrifices of Masses, in the which it was commonly said,\n      that the Priest did offer Christ for the quick and the dead, to have\n      remission of pain or guilt, were blasphemous fables, and dangerous\n      deceits.\n    </p>\n    <p>\n      <strong>XXXII. Of the Marriage of Priests</strong>\n    </p>\n    <p class=\"first\">\n      Bishops, Priests and Deacons are not commanded by God's Law, either to vow\n      the estate of single life, or to abstain from marriage: therefore it is\n      lawful for them, as for all other Christian men, to mary at their own\n      discretion, as they shall judge the same to serve better to godliness.\n    </p>\n    <p>\n      <strong>XXXIII. Of excommunicate Persons, how they are to be avoided</strong>\n    </p>\n    <p class=\"first\">\n      That person whcih by open denunciation of the Church is rightly cut off\n      from the unity of the Church, and excommunicated, ought to be taken of the\n      whole multitude of the faithful, as an Heathen and Publican, until he be\n      openly reconciled by penance and received into the Church by a Judge that\n      hath authority thereunto.\n    </p>\n    <p>\n      <strong>XXXIV. Of the Traditions of the Church</strong>\n    </p>\n    <p class=\"first\">\n      It is not necessary that Traditions and Ceremonies be in all places one,\n      and utterly like; for at all times they have been divers, and may be\n      changed according to the diversities of countries, times, and men's\n      manners, so that nothing be ordained against God's Word. Whosoever through\n      his private judgement, willingly and purposely, cloth openly break the\n      traditions and ceremonies of the Church, which be not repugnant to the\n      Word of God, and be ordained and approved by common authority, ought to be\n      rebuked openly, (that others may fear to do the like,) as he that\n      offendeth against the common order of the Church, and hurteth the\n      authority of the Magistrate, and woundeth the consciences of the weak\n      brethren.\n    </p>\n    <p>\n      Every particular or national Church hath authority to ordain, change, and\n      abolish, ceremonies or rites of the Church ordained only by man's\n      authority, so that all things be done to edifying.\n    </p>\n    <p>\n      <strong>XXXV. Of the Homilies</strong>\n    </p>\n    <p class=\"first\">\n      The second Book of Homilies, the several titles whereof we have joined\n      under this Article, doth contain a godly and wholesome Doctrine, and\n      necessary for these tunes, as doth the former Book of Homilies, which were\n      set forth in the time of Edward the Sixth; and therefore we judge them to\n      be read in Churches by the Ministers, diligently and distinctly, that they\n      may be understanded of the people.\n    </p>\n    <p>\n      <strong><em>Of the Names of the Homilies</em></strong>\n    </p>\n    <p class=\"first\">1. Of the right Use of the Church</p>\n    <p class=\"nomargin\">2. Against peril of Idolatry </p>\n    <p class=\"nomargin\">3. Of repairing and keeping clean of Churches</p>\n    <p class=\"nomargin\">4. Of good Works: first of Fasting</p>\n    <p class=\"nomargin\">5. Against Gluttony and Drunkenness </p>\n    <p class=\"nomargin\">6. Against Excess of Apparel </p>\n    <p class=\"nomargin\">7. Of Prayer</p>\n    <p class=\"nomargin\">8. Of the Place and Time of Prayer</p>\n    <p class=\"nomargin\">\n      9. That Common Prayer and Sacraments ought to be ministered in a known\n      tongue\n    </p>\n    <p class=\"nomargin\">10. Of the reverend estimation of God's Word</p>\n    <p class=\"nomargin\">11. Of Alms-doing</p>\n    <p class=\"nomargin\">12. Of the Nativity of Christ</p>\n    <p class=\"nomargin\">13. Of the Passion of Christ</p>\n    <p class=\"nomargin\">14. Of the Resurrection of Christ</p>\n    <p class=\"nomargin\">\n      15. Of the worthy receiving of the Sacrament of the Body and Blood of\n      Christ\n    </p>\n    <p class=\"nomargin\">16. Of the Gifts of the Holy Ghost</p>\n    <p class=\"nomargin\">17. For the Rogation of Days </p>\n    <p class=\"nomargin\">18. Of the State of Matrimony</p>\n    <p class=\"nomargin\">19. Of Repentance</p>\n    <p class=\"nomargin\">20. Against Idleness </p>\n    <p class=\"nomargin\">21. Against Rebellion</p>\n    <p>\n      <strong>XXXVI. Of Consecration of Bishops and Ministers</strong>\n    </p>\n    <p class=\"first\">\n      The Book of Consecration of :archbishops and Bishops, and Ordering of\n      Priests and Deacons, lately set forth in the tine of Edward the Sixth, and\n      confirmed at the same time by authority of Parliament, Both contain all\n      things necessary to such Consecration and Ordering: neither bath it any\n      thing, that of itself is superstitious and ungodly. And therefore\n      whosoever are consecrated or ordered according to the Rites of that Book,\n      since the second year of the forenamed King Edward unto this time, or\n      hereafter shall be consecrated or ordered according to the same Rites; we\n      decree all such to be rightly, orderly, and lawfully consecrated and\n      ordered.\n    </p>\n    <p>\n      <strong>XXXVII. Of the Civil Magistrates</strong>\n    </p>\n    <p class=\"first\">\n      The King's Majesty bath the chief power in this Realm of England, and\n      other his Dominions, unto whom the chief Government of all Estates of this\n      Realm, whether they be Ecclesiastical or Civil, in all causes cloth\n      appertain, and is not, nor ought to be, subject to any foreign\n      jurisdiction.\n    </p>\n    <p>\n      Where we attribute to the King's Majesty the chief government, by which\n      Titles we understand the minds of some slanderous folks to be offended; we\n      give not to our Princes the ministering either of God's Word, or of the\n      Sacraments, the which thing the Injunctions also lately set forth by\n      Elizabeth our Queen do most plainly testify; but that only prerogative,\n      which we see to have been given always to all godly Princes in Holy\n      Scriptures by God himself; that is, that they should rule all estates and\n      degrees committed to their charge by God, whether they be Ecclesiastical\n      or Temporal, and restrain with the civil sword the stubborn and evildoers.\n    </p>\n    <p>The Bishop of Rome hath no jurisdiction in this Realm of England.</p>\n    <p>\n      The Laws of the Realm may punish Christian men with death, for heinous and\n      grievous offences.\n    </p>\n    <p>\n      It is lawful for Christian men, at the commandment of the Magistrate, to\n      wear weapons, and serve in the wars.\n    </p>\n    <p>\n      <strong>XXXVIII. Of Christian men's Goods, which are not common</strong>\n    </p>\n    <p class=\"first\">\n      The Riches and Goods of Christians are not common, as touching the right,\n      title, and possession of the same, as certain Anabaptists do falsely\n      boast. Notwithstanding, every man ought, of such things as he possesseth,\n      liberally to give alms to the poor, according to his ability.\n    </p>\n    <p>\n      <strong>XXXIX. Of a Christian man's oath</strong>\n    </p>\n    <p class=\"first\">\n      As we confess that vain and rash Swearing is forbidden Christian men by\n      our Lord Jesus Christ, and James his Apostle, so we judge, that Christian\n      Religion cloth not prohibit, but that a man may swear when the Magistrate\n      requireth, in a cause of faith and charity, so it be done according to the\n      Prophet's teaching, injustice, judgement, and truth.\n    </p>\n  </div>\n";

var post = {
  title: "The Thirty-Nine Articles",
  subtitle: "Calvinism reached the zenith of its influence in the Church of England when this document was written",
  imageUrl: "/images/thirty-nine-articles.png",
  url: "/answers/documents/thirty-nine-articles",
  added: "9/28/18",
  tags: ["historical documents", "thirty-nine articles"],
  content: content
};

/* harmony default export */ __webpack_exports__["default"] = (post);

/***/ }),

/***/ "./src/constants/posts/theology/index.js":
/*!***********************************************!*\
  !*** ./src/constants/posts/theology/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _gospel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gospel */ "./src/constants/posts/theology/gospel/index.js");
/* harmony import */ var _historicalDocuments__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./historicalDocuments */ "./src/constants/posts/theology/historicalDocuments/index.js");



var THEOLOGY = {
  heading: "Theology: Explaining the Christian worldview",
  categories: [_gospel__WEBPACK_IMPORTED_MODULE_0__["default"], _historicalDocuments__WEBPACK_IMPORTED_MODULE_1__["default"]]
};

/* harmony default export */ __webpack_exports__["default"] = (THEOLOGY);

/***/ }),

/***/ "./src/constants/resources/church-finders.js":
/*!***************************************************!*\
  !*** ./src/constants/resources/church-finders.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var CHURCH_FINDERS = [{
  title: "Reformed Baptist Church Directory",
  subtitle: "A directory of churches that generally adhere to the 1689 London Baptist Confession",
  url: "http://farese.com/map",
  imageUrl: "/images/globe.png"
}, {
  title: "Gospel Coalition Church Directory",
  subtitle: "The Gospel Coalition includes both Baptist and Presbyterian churches that are generally reformed in theology",
  url: "http://thegospelcoalition.org/churches",
  imageUrl: "/images/tgc.png"
}, {
  title: "9Marks Church Search",
  subtitle: "Includes both Baptist and Presbyterian churches",
  url: "http://9marks.org/church-search",
  imageUrl: "/images/9marks.png"
}, {
  title: "Orthodox Presbyterian Church Directory",
  subtitle: "The OPC church holds to the Westminster Confession of Faith",
  url: "http://opc.org/locator.html",
  imageUrl: "/images/opc.png"
}, {
  title: "Presbyterian Church of America Directory",
  subtitle: "The PCA church holds to the Westminster Confession of Faith",
  url: "http://pcaac.org/church-search",
  imageUrl: "/images/pca.png"
}];

/* harmony default export */ __webpack_exports__["default"] = (CHURCH_FINDERS);

/***/ }),

/***/ "./src/constants/resources/index.js":
/*!******************************************!*\
  !*** ./src/constants/resources/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var RESOURCES = [{
  title: "Learn",
  subtitle: "Resources for learning more about the Bible",
  url: "/resources/learn",
  imageUrl: "/images/grow.png"
}, {
  title: "Church Finders",
  subtitle: "Find a solid church to attend regularly",
  url: "/resources/church-finders",
  imageUrl: "/images/church.png"
}];

/* harmony default export */ __webpack_exports__["default"] = (RESOURCES);

/***/ }),

/***/ "./src/constants/resources/learn.js":
/*!******************************************!*\
  !*** ./src/constants/resources/learn.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var LEARN = [{
  title: "G3 Conference",
  subtitle: "Lots of free videos of many great teachers. New videos come out every year.",
  url: "http://g3conference.com/archives",
  imageUrl: "/images/g3.png"
}, {
  title: "James White (Alpha & Omega Ministries)",
  subtitle: "James White is an apologist with terrific resources (videos, books, articles, etc.).",
  url: "http://aomin.org",
  imageUrl: "/images/james-white.png"
}, {
  title: "Ligonier Ministries",
  subtitle: "Founded by the late R.C. Sproul, who was a great teacher of Reformed theology",
  url: "http://ligonier.org",
  imageUrl: "/images/ligonier.png"
}, {
  title: "Desiring God",
  subtitle: "Started by now-retired pastor John Piper",
  url: "http://desiringgod.org",
  imageUrl: "/images/desiringgod.png"
}, {
  title: "Answers in Genesis",
  subtitle: "Resources that defend the biblical account of creation",
  url: "http://answersingenesis.org",
  imageUrl: "/images/aig.png"
}];

/* harmony default export */ __webpack_exports__["default"] = (LEARN);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./server */ "./src/server/index.js");



if (true) {
  module.hot.accept(/*! ./server */ "./src/server/index.js", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./server */ "./src/server/index.js");
(function () {
    console.log('🔁  HMR Reloading `./server`...');
  })(__WEBPACK_OUTDATED_DEPENDENCIES__); });
  console.info('✅  Server-side HMR Enabled!');
}

var port = "3000" || 3000;

/* harmony default export */ __webpack_exports__["default"] = (express__WEBPACK_IMPORTED_MODULE_0___default()().use(function (req, res) {
  return _server__WEBPACK_IMPORTED_MODULE_1__["default"].handle(req, res);
}).listen(port, function (err) {
  if (err) {
    console.error(err);
    return;
  }
  console.log('> Started on port ' + port);
}));

/***/ }),

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../App */ "./src/App.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! body-parser */ "body-parser");
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dom/server */ "react-dom/server");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _constants_posts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../constants/posts */ "./src/constants/posts/index.js");
/* harmony import */ var _constants_pages__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../constants/pages */ "./src/constants/pages/index.js");
var _jsxFileName = "/Users/michael.cheng/code/bibleanswers/web/src/server/index.js";








// import { db } from "./db";
// import routes from "./routes";


__webpack_require__(/*! dotenv */ "dotenv").config();

var assets = __webpack_require__(/*! ./build/assets.json */ "./build/assets.json");

function sendResponse(req, res) {
  var post = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  var data = _constants_pages__WEBPACK_IMPORTED_MODULE_8__["PAGES"][req.url] || {};

  var context = {};
  var markup = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_5__["renderToString"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
    react_router_dom__WEBPACK_IMPORTED_MODULE_3__["StaticRouter"],
    { context: context, location: req.url, __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      }
    },
    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_0__["default"], { post: post, __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      }
    })
  ));

  if (context.url) {
    res.redirect(context.url);
  } else {
    res.status(200).send("<!doctype html>\n    <html lang=\"\">\n    <head>\n        <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n        <meta charset=\"utf-8\" />\n        <title>" + (data.title ? data.title + " | Bible Answers" : "Bible Answers: Explaining and Defending the Bible's Teachings") + "</title>\n\n        <meta name=\"description\" content=" + (data.description || data.subtitle) + " />\n\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n\n        <link rel=\"icon\" href=\"/images/favicon.png\" />\n\n        " + (assets.client.css ? "<link rel=\"stylesheet\" href=\"" + assets.client.css + "\">" : "") + "\n        " + ( false ? undefined : "<script src=\"" + assets.client.js + "\" defer crossorigin></script>") + "\n\n        <!-- Global site tag (gtag.js) - Google Analytics -->\n        <script async src=\"https://www.googletagmanager.com/gtag/js?id=UA-125895534-1\"></script>\n        <script>\n          window.dataLayer = window.dataLayer || [];\n          function gtag(){dataLayer.push(arguments);}\n          gtag('js', new Date());\n\n          gtag('config', 'UA-125895534-1');\n\n          __TEST__ = \"TEST\"\n        </script>\n\n    </head>\n    <body>\n        <div id=\"root\">" + markup + "</div>\n    </body>\n</html>");
  }
}

var server = express__WEBPACK_IMPORTED_MODULE_4___default()();

server.use(body_parser__WEBPACK_IMPORTED_MODULE_2___default.a.json());

// routes(server);

server.disable("x-powered-by").use(express__WEBPACK_IMPORTED_MODULE_4___default.a.static("/Users/michael.cheng/code/bibleanswers/web/public")).get("/*", function (req, res) {
  if (req.url.indexOf("/answers") !== -1) {
    // const ref = db
    //   .collection("posts")
    //   .where("url", "==", req.url.split("/answers")[1]);

    // ref.get().then(snapshot => {
    //   console.log(snapshot.docs);
    var post = Object(lodash__WEBPACK_IMPORTED_MODULE_6__["find"])(_constants_posts__WEBPACK_IMPORTED_MODULE_7__["ALL_POSTS"], function (postData) {
      return postData.url === req.url.split("/answers")[1];
    });
    sendResponse(req, res, post);
    // });
  } else {
    sendResponse(req, res);
  }
});

/* harmony default export */ __webpack_exports__["default"] = (server);

/***/ }),

/***/ "./src/utils/writing.js":
/*!******************************!*\
  !*** ./src/utils/writing.js ***!
  \******************************/
/*! exports provided: textRef, renderRefs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "textRef", function() { return textRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderRefs", function() { return renderRefs; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);


function textRef(number) {
  return "<span class=\"superscript\"><a class=\"reference\" href=\"#footnote-" + number + "\" id=\"text-" + number + "\">[" + number + "]</a></span>";
}

function renderRefs(references) {
  return "\n    <h4>References</h4>\n\n    <ol class=\"first\">\n      " + Object(lodash__WEBPACK_IMPORTED_MODULE_0__["map"])(references, function (reference, number) {
    return "<li><a class=\"reference-arrow\" href=\"#text-" + number + "\" id=\"footnote-" + number + "\">^</a> " + reference + "</li>";
  }).join(" ") + "\n    </ol>\n  ";
}

/***/ }),

/***/ 0:
/*!**************************************************************************!*\
  !*** multi razzle-dev-utils/prettyNodeErrors webpack/hot/poll?300 ./src ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! razzle-dev-utils/prettyNodeErrors */"razzle-dev-utils/prettyNodeErrors");
__webpack_require__(/*! webpack/hot/poll?300 */"./node_modules/webpack/hot/poll.js?300");
module.exports = __webpack_require__(/*! /Users/michael.cheng/code/bibleanswers/web/src */"./src/index.js");


/***/ }),

/***/ "babel-runtime/core-js/object/assign":
/*!******************************************************!*\
  !*** external "babel-runtime/core-js/object/assign" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/assign");

/***/ }),

/***/ "babel-runtime/core-js/object/get-prototype-of":
/*!****************************************************************!*\
  !*** external "babel-runtime/core-js/object/get-prototype-of" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/get-prototype-of");

/***/ }),

/***/ "babel-runtime/helpers/classCallCheck":
/*!*******************************************************!*\
  !*** external "babel-runtime/helpers/classCallCheck" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/classCallCheck");

/***/ }),

/***/ "babel-runtime/helpers/createClass":
/*!****************************************************!*\
  !*** external "babel-runtime/helpers/createClass" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/createClass");

/***/ }),

/***/ "babel-runtime/helpers/defineProperty":
/*!*******************************************************!*\
  !*** external "babel-runtime/helpers/defineProperty" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/defineProperty");

/***/ }),

/***/ "babel-runtime/helpers/extends":
/*!************************************************!*\
  !*** external "babel-runtime/helpers/extends" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/extends");

/***/ }),

/***/ "babel-runtime/helpers/inherits":
/*!*************************************************!*\
  !*** external "babel-runtime/helpers/inherits" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/inherits");

/***/ }),

/***/ "babel-runtime/helpers/possibleConstructorReturn":
/*!******************************************************************!*\
  !*** external "babel-runtime/helpers/possibleConstructorReturn" ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/possibleConstructorReturn");

/***/ }),

/***/ "babel-runtime/helpers/toConsumableArray":
/*!**********************************************************!*\
  !*** external "babel-runtime/helpers/toConsumableArray" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/toConsumableArray");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "css-vendor":
/*!*****************************!*\
  !*** external "css-vendor" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("css-vendor");

/***/ }),

/***/ "debug":
/*!************************!*\
  !*** external "debug" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("debug");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("dotenv");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "razzle-dev-utils/prettyNodeErrors":
/*!****************************************************!*\
  !*** external "razzle-dev-utils/prettyNodeErrors" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("razzle-dev-utils/prettyNodeErrors");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react-icons/fa":
/*!*********************************!*\
  !*** external "react-icons/fa" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/fa");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),

/***/ "react-router-dom/Route":
/*!*****************************************!*\
  !*** external "react-router-dom/Route" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router-dom/Route");

/***/ }),

/***/ "react-router-dom/Switch":
/*!******************************************!*\
  !*** external "react-router-dom/Switch" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router-dom/Switch");

/***/ })

/******/ });
//# sourceMappingURL=server.js.map