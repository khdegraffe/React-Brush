import axios from "axios";

const searchImages = async () => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID x9iU87gnciMscCAOb9pylDDcN5bCixZIXBSu8IrpLPM",
    },
    params: {
      query: "trees",
    },
  });
  console.log(response);
  return response;
};

export default searchImages;
