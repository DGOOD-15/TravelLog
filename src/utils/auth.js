export const authorize = async (email, password) => {
  const users = JSON.parse(localStorage.getItem("users")) || [];

  const foundUser = users.find(
    (user) => user.email === email && user.password === password
  );

  if (foundUser) {
    return {
      token: btoa(foundUser.email),
    };
  } else {
    throw new Error("Invalid email or password");
  }
};

export const checkToken = async (token) => {
  const email = atob(token);
  const users = JSON.parse(localStorage.getItem("users")) || [];

  const foundUser = users.find((user) => user.email === email);

  if (foundUser) {
    return { data: foundUser };
  } else {
    throw new Error("Invalid token");
  }
};
