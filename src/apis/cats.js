export async function getCats() {
  try {
    const response = await fetch(`${import.meta.env.VITE_BACK_URL}/api/cats`);
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
    const response = await fetch(
      `${import.meta.env.VITE_BACK_URL}/api/cats/find`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ _id }),
      }
    );
    if (response.ok) {
      return await response.json();
    }
  } catch (e) {
    console.log(e);
  }
}
