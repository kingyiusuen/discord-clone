import axios from "axios";

const channelApi = axios.create({
  baseURL: "/api/channels",
});

export const getAllChannels = async () => {
  return await channelApi.get("/");
};

export default channelApi;