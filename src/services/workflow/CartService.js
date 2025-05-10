import api from "../AxiosServices";

  
  export async function createCartByCustId(id) {
    try {
      const response = await api("post", "workflow", null, `/cart/${id}`, false, null);
      return response;
    } catch (err) {
      throw new Error(err);
    }
  }