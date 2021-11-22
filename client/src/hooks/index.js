import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export const useActiveChannel = () => {
  const params = useParams();
  const activeChannelId = parseInt(params.channel);
  const activeChannel = useSelector(state => state.chat.channels.byId[activeChannelId])
  return activeChannel
}