import axios from 'axios';

// Create instance (just for structure)
const API = axios.create({
  baseURL: 'https://fakeapi.com'
});

// Fake Login API (Simulated)
export const loginUser = async ({ email, password }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Fake validation
      if (email === "noor@gmail.com" && password === "123456") {
        
        const fakeToken = "fake-jwt-token-123456";

        const fakeUser = {
          id: 148,
          name: "Noor Ullah",
          email: email
        };

        resolve({
          token: fakeToken,
          user: fakeUser
        });

      } else {
        reject({
          response: {
            data: {
              message: "Invalid email or password"
            }
          }
        });
      }
    }, 1000); // simulate API delay
  });
};

export default API;