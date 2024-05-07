import { getCats } from "../apis/cats";

export async function catsLoader() {
  return await getCats();
}
