import { redirect } from "react-router-dom";
const url = "http://localhost:2319";

export const createAction = async ({ request }) => {
  const formData = await request.formData();

  const person = {
    name: formData.get("name"),
    title: formData.get("title"),
    image: formData.get("image"),
  };

  console.log(person, ": Person to be created");
  await fetch(url + "/people", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(person),
  });

  return redirect("/");
};

export const updateAction = async ({ params, request }) => {
  const formData = await request.formData();

  const person = {
    name: formData.get("name"),
    title: formData.get("title"),
    image: formData.get("image"),
  };

  await fetch(url + "/people/" + params.id, {
    method: "put",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(person),
  });

  return redirect(`/${params.id}`);
};

export const deleteAction = async ({ params }) => {
  await fetch(url + "/people/" + params.id, {
    method: "delete",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return redirect("/");
};