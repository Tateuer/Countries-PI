import axios from 'axios';
export const GET_COUNTRIES = 'GET_COUNTRIES';
export const SEARCH_COUNTRIES = 'SEARCH_COUNTRIES';
export const ORDER_ALPHABETICAL = 'ORDER_ALPHABETICAL';
export const ORDER_POPULATION = 'ORDER_POPULATION';
export const ORDER_CONTINENT = 'ORDER_CONTINENT';
export const GET_ACTIVITIES = 'GET_ACTIVITIES';
export const BY_ACTIVITY = 'BY_ACTIVITY';
//export const FOR_ACTIVITY_SEASON = 'FOR_ACTIVITY_SEASON';



export function getCountries(){
    return function(dispatch){
        axios.get(`/countries`)
        .then((countries) => {
            dispatch({  
                type: GET_COUNTRIES,
                payload: countries.data
            })
        })
    }
}

export function searchCountries(search){
     return function(dispatch){
         axios.get(`/countries?name=${search}`)
         .then((countries) => {
             dispatch({  
                 type: SEARCH_COUNTRIES,
                 payload: countries.data
             })
         })
     }
 }

export function orderAlphabetical(order){
     return {
         type: ORDER_ALPHABETICAL,
         payload: order
     }
 }

 export function orderPopulation(order){
     return {
         type: ORDER_POPULATION,
         payload: order
     }
 }

export function orderContinent(order){
     return {
         type: ORDER_CONTINENT,
         payload: order
     }
 }

export function getActivities(){
     return async function(dispatch){
         var info = await axios.get('/activities');
         return dispatch ( {type: GET_ACTIVITIES, payload: info.data} );
     };         
  }

export function byActivity(activity){
    return {
        type: BY_ACTIVITY,
        payload: activity,
    }
}

// export function forActivity(activity){
//     return {
//         type: FOR_ACTIVITY_SEASON,
//         payload: activity,
//     }
// }


