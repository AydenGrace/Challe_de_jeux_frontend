export async function makeBooking(
  Nbplayers,
  email,
  name,
  phone,
  userId,
  sessionId,
  Total,
  ProductId,
  reductionsId
) {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_BACK_URL}/api/reservations/makeBooking`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Nbplayers,
          email,
          name,
          phone,
          userId,
          sessionId,
          Total,
          ProductId,
          reductionsId,
        }),
      }
    );
    if (response.ok) {
      return await response.json();
    }
  } catch (e) {
    console.log(e);
  }
}

export async function cancelBooking(_id) {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_BACK_URL}/api/reservations/cancel`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          _id
        }),
      }
    );
    if (response.ok) {
      return await response.json();
    }
  } catch (e) {
    console.log(e);
  }
}

export async function validateBooking(_id) {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_BACK_URL}/api/reservations/validate`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          _id
        }),
      }
    );
    if (response.ok) {
      return await response.json();
    }
  } catch (e) {
    console.log(e);
  }
}

export async function getAllUserBooking(_id) {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_BACK_URL}/api/reservations/getAllFromUserId`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          _id
        }),
      }
    );
    if (response.ok) {
      return await response.json();
    }
  } catch (e) {
    console.log(e);
  }
}
