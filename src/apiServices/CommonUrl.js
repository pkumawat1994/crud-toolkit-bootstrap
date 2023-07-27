import axios from "axios";
import { toast } from "react-toastify";

const CommonUrl=axios.create({
    baseURL:"http://localhost:3004"
});

// CommonUrl.interceptors.response.use(
//     function (response) {
//       return response;
//     },
//     function (error) {
//         console.log(12456789,error)
//       if (error?.response?.status ===400) {
//         toast.error(error?.response?.data?. message?.details[0]?.message);
//       } 
//       else if (error.response.status === 404) {
//         toast.error(error.response.data.error || "Not found");}
//        else if (error.response.status === 400) {
//         toast.error(error.response.data.message
//             );
//       }
//       return Promise.reject(error);
//     }
//   );
export default CommonUrl;