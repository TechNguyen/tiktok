import * as instance from "~/utils/httPsresquest"
export const searchService = async (q, type = 'less') => {
    try {
        const res = await instance.get(`/users/search`, {
            params : {
                q,
                type,
            }
        })
       return res.data
    }
     catch (error) {
        console.log(error);
    }
}