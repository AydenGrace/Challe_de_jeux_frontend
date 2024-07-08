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

export async function getCatById(_id) {
  // console.log(_id);
  try {
    const response = await fetch(`${url}/api/cats/find`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ _id }),
    });
    if (response.ok) {
      return await response.json();
    }
  } catch (e) {
    console.log(e);
  }
}
