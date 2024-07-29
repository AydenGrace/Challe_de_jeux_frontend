export async function getDaySessions(room, date) {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_BACK_URL}/api/sessions/getDay`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ room, date }),
      }
    );
    if (response.ok) {
      return await response.json();
    }
  } catch (e) {
    console.log(e);
  }
}

export async function getSessions(sessionId) {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_BACK_URL}/api/sessions/get`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ _id: sessionId }),
      }
    );
    if (response.ok) {
      return await response.json();
    }
  } catch (e) {
    console.log(e);
  }
}
