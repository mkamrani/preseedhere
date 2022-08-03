import axios from "axios";

const callInteraction = async (interactionName, data, token) => {
  try {
    const url = `https://api.dotenx.com/execution/name/${interactionName}/start`;
    const response = await axios.post(url, data, prepareHeaders(token));
    
    return response.data?.[0];
  } catch (error) {
    throw new Error(`Failed to get records: ${error.message}`);
  }
}

const callPublicInteraction = async (endpoint, data) => {
  try {
    const url = `https://api.dotenx.com/public/execution/ep/${endpoint}/start`;
    const response = await axios.post(url, data);
    
    const return_value = response.data?.return_value
    return  Object.keys(return_value).map(function (key) { return return_value[key]; });
  } catch (error) {
    throw new Error(`Failed to get records: ${error.message}`);
  }
}


const prepareHeaders = (token) => {
  return {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }
}

export {
  callInteraction,
  callPublicInteraction
}