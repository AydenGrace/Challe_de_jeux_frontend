export async function getRooms() {
  try {
    const response = await fetch(`${import.meta.env.VITE_BACK_URL}/api/rooms`);
    if (response.ok) {
      return await response.json();
    }
  } catch (e) {
    console.log(e);
  }
}

export async function getRoomTags() {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_BACK_URL}/api/rooms/getTags`
    );
    if (response.ok) {
      return await response.json();
    }
  } catch (e) {
    console.log(e);
  }
}

export async function addRoom(values) {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_BACK_URL}/api/rooms/add`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      }
    );

      return await response.json();
    
  } catch (e) {
    console.log(e);
  }
}
