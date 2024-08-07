export async function signup(values) {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_BACK_URL}/api/users/register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      }
    );
    const message = await response.json();
    return message;
  } catch (error) {
    console.error(error);
  }
}

export async function signin(values) {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_BACK_URL}/api/users/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      }
    );
    const newUser = await response.json();
    return newUser;
  } catch (error) {
    console.error(error);
  }
}

export async function searchById(_id) {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_BACK_URL}/api/users/findId`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ _id: _id }),
      }
    );
    const newUser = await response.json();
    return newUser;
  } catch (error) {
    console.error(error);
  }
}

export async function forgotPwd(mail) {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_BACK_URL}/api/users/forgot_password`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(mail),
      }
    );
    return await response.json();
  } catch (error) {
    console.error(error);
  }
}

export async function changePwd(password, token) {
  const message = {
    password: password.password,
    token,
  };
  try {
    const response = await fetch(
      `${import.meta.env.VITE_BACK_URL}/api/users/change_password`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(message),
      }
    );
    return await response.json();
  } catch (error) {
    console.error(error);
  }
}
