import axios from "axios";
import { GET_DATA_LOADING, GET_DATA_SUCCESS, FILTER_BY_CATEGORY, FILTER_BY_QUERY, REMEMBERED_TAG } from "./actionType"


export const getDataLoading = ()=>{
    return {
        type: GET_DATA_LOADING
    }
}

export const getDataSuccess = (payload)=>{
    return {
        type: GET_DATA_SUCCESS,
        payload 
    }
}

export const getData = (dispatch)=>{

        return async()=>{
            try{
                dispatch(getDataLoading());
                let response = await axios.get("https://run.mocky.io/v3/15a3a1c3-1cda-4409-b1b1-2f39f5f25123")
                let data = await response.data;
                console.log('data:', data)
                dispatch(getDataSuccess(data))
            }
            catch(e){
                 console.log(e.message)
            }
        }
    
}  

export const filterByCategory = (payload)=>{
    return {
        type: FILTER_BY_CATEGORY,
        payload
    }
}

export const filterByQuery = (payload)=>{
    return {
        type: FILTER_BY_QUERY,
        payload
    }
}

export const rememberedTag = (payload)=>{
  return {
      type: REMEMBERED_TAG,
      payload
  }
}