import { url } from "./../url";

export async function getCats() {
  try {
    const response = await fetch(`${url}/api/cats`);
    if (response.ok) {
      return await response.json();
    }
  } catch (e) {
    console.log(e);
  }
}
