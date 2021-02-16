
import { types } from '../types/types';
/*
El state estará vacío cuando yo no esté autenticado, cuando esté autenticado tendré:
{
    uid: 165632545666,
    name: 'Adriana'
}
*/

export const authReducer = ( state = {}, action ) => {
    
    switch ( action.type ) {
        case types.login:
            return {
                uid: action.payload.uid,
                name: action.payload.displayName
            }           
        
        case types.logout:
            return { } 
    
        default:
            return state;
    }
    
}
