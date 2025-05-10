import api from "../AxiosServices";

export async function GetAllLaptops(body) {
    return new Promise((resolve, reject) => {
      api("get", "workflow", null, "/laptops", false, body)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(new Error(err));
        });
    });
  }
  export async function getLaptopById(id) {
    try {
      const response = await api("get", "workflow", null, `/laptops/${id}`, false, null);
      return response;
    } catch (err) {
      throw new Error(err);
    }
  }
  export async function AddNewLaptop(formData) {
    return new Promise((resolve, reject) => {
      api(
        "post",
        "workflow",
        {}, // Don't pass any default JSON headers
        "/laptops",
        true, // Send token
        formData,
        null,
        {
          headers: {
            // Let axios auto-set the correct multipart boundary
          },
        }
      )
        .then((res) => resolve(res))
        .catch((err) => reject(new Error(err)));
    });
  }
  

    export async function getLaptopByImageId(id) {
      try {
        const response = await api("get", "workflow", null, `/laptops/image/${id}`, false, null, null, {
          responseType: "blob", 
        });
        return response;
      } catch (err) {
        throw new Error(err);
      }
    }
    
    
  