import { setToken, getToken } from "./token";

const baseUrl = "http://localhost:5174";
const baseHeaders = { "Content-Type": "application/json" };

export const authorize = (email, password) => {
  return new Promise((resolve, reject) => {
    resolve({ token: "a fake token" });
  });
};

export const checkToken = (token) => {
  return new Promise((resolve, reject) => {
    resolve({
      data: { name: "Dustin", email: "fake@example,com", _id: "fake-id" },
    });
  });
};