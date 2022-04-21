import { FILTER_BY_CATEGORY, FILTER_BY_QUERY, GET_DATA_LOADING, GET_DATA_SUCCESS, REMEMBERED_TAG } from "./actionType"

const init = {
    loading : false,
    category: JSON.parse(localStorage.getItem("selectedTag")) || "all",
    data: [],
    storedData: []
}

export const MailReducer = (store = init, {type, payload})=>{
    switch (type){
       case GET_DATA_LOADING : return {
            ...store,
            loading: true
        }
       case GET_DATA_SUCCESS : return {
            ...store,
            data: showData(payload,store.category),
            storedData: payload,
            loading: false
        }
        case FILTER_BY_CATEGORY: return {
            ...store,
            category: payload,
            data: filterData(store.storedData, payload)
        }
        case FILTER_BY_QUERY : return {
            ...store,
            data: filterWithQuery(store.storedData, payload, store.category)
        }
        case REMEMBERED_TAG :  return {
            ...store,
            category: payload
        }
        default : return store
    }
}


function showData(data, selectedTag){
if(selectedTag === "all"){
    return data;
}
else{
    let selectedData = data.filter((item)=> item.tag === selectedTag)
    return selectedData;
}
}


function filterData(data, category){
    if(category === "all"){
        return data;
    }
    
    let selectedData = data.filter((item)=> item.tag === category)
    return selectedData;
}

function filterWithQuery(data, query, category){
   if(category === "all"){
    const selectedData = data.filter((item)=> {
       return (item.subject.includes(query) || item.body.includes(query))
    })
    return selectedData;
   }

   else{
    const selectedData = data.filter((item)=> {
       return (item.tag === category && (item.subject.includes(query) || item.body.includes(query)))
    })
    return selectedData; 
   }
    
}