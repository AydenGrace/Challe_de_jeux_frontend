import { getRooms } from "../apis/rooms";

export async function roomsLoader() {
  return await getRooms();
}
