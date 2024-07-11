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
