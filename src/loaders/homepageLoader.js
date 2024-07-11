import { getCats } from "../apis/cats";
import { getRooms } from "../apis/rooms";

export async function homepageLoader() {
  const cats = await getCats();
  const rooms = await getRooms();

  return { cats, rooms };
}
