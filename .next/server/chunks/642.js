"use strict";
exports.id = 642;
exports.ids = [642];
exports.modules = {

/***/ 6724:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DM": () => (/* binding */ COLORS),
/* harmony export */   "rp": () => (/* binding */ COLORS_ARRAY)
/* harmony export */ });
/* unused harmony export COLORS_ARRAY_WITH_BACKGROUND */
const COLORS = {
    PURPLE: "#8B5CF6",
    BLUE: "#3B82F6",
    RED: "#EF4444",
    GREEN: "#10B981",
    GOLD: "#F59E0B",
    PINK: "#EC4899",
    MINT: "#06D6A0",
    CYAN: "#06B6D4",
    ORANGE: "#F97316",
    BACKGROUND: "#0F0F23",
    SURFACE: "#1A1A2E",
    ACCENT: "#16213E",
    TEXT_PRIMARY: "#E2E8F0",
    TEXT_SECONDARY: "#94A3B8",
    BORDER: "#334155"
};
const COLORS_ARRAY = [
    ...Object.values(COLORS)
];
const COLORS_ARRAY_WITH_BACKGROUND = [
    ...Object.values(COLORS).filter((color)=>color !== COLORS.BACKGROUND
    ),
    COLORS.BACKGROUND, 
];


/***/ }),

/***/ 2782:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ socket)
/* harmony export */ });
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4612);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([socket_io_client__WEBPACK_IMPORTED_MODULE_0__]);
socket_io_client__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const socket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_0__.io)();

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7541:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NW": () => (/* reexport safe */ _room_hooks__WEBPACK_IMPORTED_MODULE_1__.NW),
/* harmony export */   "u4": () => (/* reexport safe */ _room_hooks__WEBPACK_IMPORTED_MODULE_1__.u4),
/* harmony export */   "bo": () => (/* reexport safe */ _room_hooks__WEBPACK_IMPORTED_MODULE_1__.bo),
/* harmony export */   "av": () => (/* reexport safe */ _room_hooks__WEBPACK_IMPORTED_MODULE_1__.av)
/* harmony export */ });
/* harmony import */ var _room_atom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5875);
/* harmony import */ var _room_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3290);


/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (roomAtom)));



/***/ }),

/***/ 5875:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ DEFAULT_ROOM),
/* harmony export */   "X": () => (/* binding */ roomAtom)
/* harmony export */ });
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_0__);

const DEFAULT_ROOM = {
    id: "",
    users: new Map(),
    usersMoves: new Map(),
    movesWithoutUser: [],
    myMoves: []
};
const roomAtom = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
    key: "room",
    default: DEFAULT_ROOM
});


/***/ }),

/***/ 3290:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "av": () => (/* binding */ useMyMoves),
  "NW": () => (/* binding */ useRoom),
  "bb": () => (/* binding */ useSetRoom),
  "u4": () => (/* binding */ useSetRoomId),
  "bo": () => (/* binding */ useSetUsers)
});

// EXTERNAL MODULE: external "recoil"
var external_recoil_ = __webpack_require__(9755);
// EXTERNAL MODULE: ./common/constants/colors.ts
var colors = __webpack_require__(6724);
;// CONCATENATED MODULE: ./common/lib/getNextColor.ts

const getNextColor = (color)=>{
    const colorCycle = colors/* COLORS_ARRAY.filter */.rp.filter((c)=>c !== colors/* COLORS.BACKGROUND */.DM.BACKGROUND
    );
    const index = colorCycle.findIndex((c)=>c === color
    );
    if (index === -1) return colorCycle[0];
    return colorCycle[(index + 1) % colorCycle.length];
};

// EXTERNAL MODULE: ./common/recoil/room/room.atom.ts
var room_atom = __webpack_require__(5875);
;// CONCATENATED MODULE: ./common/recoil/room/room.hooks.ts



const useRoom = ()=>{
    const room = (0,external_recoil_.useRecoilValue)(room_atom/* roomAtom */.X);
    return room;
};
const useSetRoom = ()=>{
    const setRoom = (0,external_recoil_.useSetRecoilState)(room_atom/* roomAtom */.X);
    return setRoom;
};
const useSetRoomId = ()=>{
    const setRoomId = (0,external_recoil_.useSetRecoilState)(room_atom/* roomAtom */.X);
    const handleSetRoomId = (id)=>{
        setRoomId({
            ...room_atom/* DEFAULT_ROOM */.p,
            id
        });
    };
    return handleSetRoomId;
};
const useSetUsers = ()=>{
    const setRoom = (0,external_recoil_.useSetRecoilState)(room_atom/* roomAtom */.X);
    const handleAddUser = (userId, name)=>{
        setRoom((prev)=>{
            var ref;
            const newUsers = prev.users;
            const newUsersMoves = prev.usersMoves;
            const color = getNextColor((ref = [
                ...newUsers.values()
            ].pop()) === null || ref === void 0 ? void 0 : ref.color);
            newUsers.set(userId, {
                name,
                color
            });
            newUsersMoves.set(userId, []);
            return {
                ...prev,
                users: newUsers,
                usersMoves: newUsersMoves
            };
        });
    };
    const handleRemoveUser = (userId)=>{
        setRoom((prev)=>{
            const newUsers = prev.users;
            const newUsersMoves = prev.usersMoves;
            const userMoves = newUsersMoves.get(userId);
            newUsers.delete(userId);
            newUsersMoves.delete(userId);
            return {
                ...prev,
                users: newUsers,
                usersMoves: newUsersMoves,
                movesWithoutUser: [
                    ...prev.movesWithoutUser,
                    ...userMoves || []
                ]
            };
        });
    };
    const handleAddMoveToUser = (userId, moves)=>{
        setRoom((prev)=>{
            const newUsersMoves = prev.usersMoves;
            const oldMoves = prev.usersMoves.get(userId);
            newUsersMoves.set(userId, [
                ...oldMoves || [],
                moves
            ]);
            return {
                ...prev,
                usersMoves: newUsersMoves
            };
        });
    };
    const handleRemoveMoveFromUser = (userId)=>{
        setRoom((prev)=>{
            const newUsersMoves = prev.usersMoves;
            const oldMoves = prev.usersMoves.get(userId);
            oldMoves === null || oldMoves === void 0 ? void 0 : oldMoves.pop();
            newUsersMoves.set(userId, oldMoves || []);
            return {
                ...prev,
                usersMoves: newUsersMoves
            };
        });
    };
    return {
        handleAddUser,
        handleRemoveUser,
        handleAddMoveToUser,
        handleRemoveMoveFromUser
    };
};
const useMyMoves = ()=>{
    const [room, setRoom] = (0,external_recoil_.useRecoilState)(room_atom/* roomAtom */.X);
    const handleAddMyMove = (move)=>{
        setRoom((prev)=>{
            var ref;
            if (((ref = prev.myMoves[prev.myMoves.length - 1]) === null || ref === void 0 ? void 0 : ref.options.mode) === "select") return {
                ...prev,
                myMoves: [
                    ...prev.myMoves.slice(0, prev.myMoves.length - 1),
                    move
                ]
            };
            return {
                ...prev,
                myMoves: [
                    ...prev.myMoves,
                    move
                ]
            };
        });
    };
    const handleRemoveMyMove = ()=>{
        const newMoves = [
            ...room.myMoves
        ];
        const move = newMoves.pop();
        setRoom((prev)=>({
                ...prev,
                myMoves: newMoves
            })
        );
        return move;
    };
    return {
        handleAddMyMove,
        handleRemoveMyMove,
        myMoves: room.myMoves
    };
};


/***/ }),

/***/ 100:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9847);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_recoil_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1513);



const NotFoundModal = ({ id  })=>{
    const { closeModal  } = (0,_common_recoil_modal__WEBPACK_IMPORTED_MODULE_2__/* .useModal */ .d)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in-up",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "relative flex flex-col items-center rounded-2xl bg-slate-900/95 backdrop-blur-md border border-slate-700/50 p-8 max-w-md w-full shadow-2xl shadow-black/25 animate-fade-in-up",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    onClick: closeModal,
                    className: "absolute top-4 right-4 p-2 rounded-xl text-slate-400 hover:text-slate-200 hover:bg-slate-800/50 transition-all duration-200 hover:scale-110 active:scale-95",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_1__.AiOutlineClose, {
                        size: 20
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mb-6 relative",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "absolute inset-0 bg-red-500/20 rounded-full animate-ping"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "relative w-8 h-8 bg-red-500 rounded-full flex items-center justify-center",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "text-white text-xl font-bold",
                                children: "!"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "text-center space-y-4 mb-6",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                            className: "text-xl font-bold text-slate-200 leading-tight",
                            children: "Room Not Found"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "space-y-2",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    className: "text-slate-300 font-medium",
                                    children: [
                                        "Room ",
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                            className: "px-2 py-1 bg-slate-800 rounded-md font-mono text-blue-400 border border-slate-700",
                                            children: [
                                                "\"",
                                                id,
                                                "\""
                                            ]
                                        }),
                                        " doesn't exist or is full"
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "text-slate-400 text-sm",
                                    children: "The room may have been deleted or reached its participant limit."
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex flex-col sm:flex-row gap-3 w-full",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                            onClick: closeModal,
                            className: "btn btn-primary flex-1 text-sm font-semibold relative overflow-hidden group",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "relative z-10",
                                    children: "Try Again"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            onClick: ()=>{
                                closeModal();
                            // Could add logic to create new room here
                            },
                            className: "btn flex-1 text-sm font-semibold border-slate-600 hover:border-slate-500 text-slate-300 hover:text-slate-200",
                            children: "Create New Room"
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "mt-6 p-4 bg-slate-800/30 rounded-xl border border-slate-700/30 w-full",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex items-start gap-3",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "w-5 h-5 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "text-blue-400 text-xs",
                                    children: "💡"
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "text-slate-400 text-xs leading-relaxed",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "font-medium text-slate-300 mb-1",
                                        children: "Tips:"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                        className: "space-y-1",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: "• Double-check the room ID for typos"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: "• Ask the room creator for a new link"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: "• Create your own room to get started"
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotFoundModal);


/***/ })

};
;