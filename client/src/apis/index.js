import axios from "axios";
const baseUrl="http://localhost:4000";
export const takeScreenShotApi=(data)=>{
    return axios({
        url:baseUrl+"/screen-shot",
        method:"POST",
        data,
    });
    
}

// export const login = (data) => {
//     return axios({
//       url: baseUrl + "/auth/login",
//       method: "POST",
//       data,
//     });
//   };