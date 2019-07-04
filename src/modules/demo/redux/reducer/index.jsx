//type
import {DEMO_PRINT } from "../actionTypes";

const initialState = {};
export default function(state = initialState, action) {
    switch (action.type) {
        case DEMO_PRINT: {
            const { content } = action.payload;
            return {
                ...state,
                text:{
                    content
                }
            };
        }
        default:
            return state;
    }
}


//deom
// const initialState = {
//     allIds: [],
//     byIds: {}
// };
//
// export default function(state = initialState, action) {
//     switch (action.type) {
//         case ADD_TODO: {
//             const { id, content } = action.payload;
//             return {
//                 ...state,
//                 allIds: [...state.allIds, id],
//                 byIds: {
//                     ...state.byIds,
//                     [id]: {
//                         content,
//                         completed: false
//                     }
//                 }
//             };
//         }
//         case TOGGLE_TODO: {
//             const { id } = action.payload;
//             return {
//                 ...state,
//                 byIds: {
//                     ...state.byIds,
//                     [id]: {
//                         ...state.byIds[id],
//                         completed: !state.byIds[id].completed
//                     }
//                 }
//             };
//         }
//         default:
//             return state;
//     }
// }
