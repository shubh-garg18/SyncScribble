import { useBackground } from "@/client/src/middle/recoil/background";
import { useRoom } from "@/client/src/middle/recoil/room";

import RoomContextProvider from "../context/RoomContext";
import Canvas from "./whiteboard/Canvas";
import MousePosition from "./whiteboard/MousePosition";
import MousesRenderer from "./whiteboard/Mouse";
import MoveImage from "./whiteboard/ImageMover";
import SelectionBtns from "./whiteboard/SelectionButtons";
import Chat from "./chatbox/Chat";
import NameInput from "./Registerning";
import ToolBar from "./sidebar/ToolBar";
import UserList from "./Users";

const Room = () => {
  const room = useRoom();
  const bg = useBackground();

  if (!room.id) return <NameInput />;

  return (
    <RoomContextProvider>
      <div className="relative h-full w-full overflow-hidden">
        <UserList />
        <ToolBar />
        <SelectionBtns />
        <MoveImage />
        <Canvas />
        <MousePosition />
        <MousesRenderer />
        <Chat />
      </div>
    </RoomContextProvider>
  );
};

export default Room;
