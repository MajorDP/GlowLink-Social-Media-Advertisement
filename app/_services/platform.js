import { getSession } from "./session";

export const getPlatformById = async (id) => {
  console.log(id);
  const res = await fetch(`http://localhost:3000/api/platform/get/${id}`);

  const data = await res.json();
  return data;
};

export const getPlatformByUsername = async (username) => {
  console.log(username);
  const res = await fetch(
    `http://localhost:3000/api/platform/get/user/${username}`
  );

  const data = await res.json();
  return data;
};

export const deletePlatform = async (id) => {
  console.log(id);
};

export const editPlatform = async (data) => {
  console.log(data);
};

export const createPlatform = async (data) => {
  const session = await getSession();

  const res = await fetch("http://localhost:3000/api/platform/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ data, session }),
  });

  const insertedData = await res.json();
  return insertedData;
};
