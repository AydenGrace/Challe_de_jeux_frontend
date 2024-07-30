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
