import axios from "axios";
import ApiKey from "./components/ApiKey";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: `Client-ID ${ApiKey}`,
    },
    params: {
      query: term,
    },
  });
  console.log(response);
  return response.data.results;
};
export default searchImages;
