import { useState } from "react";
import axios from "axios";
import { BASE_URL, ACCESS_TOKEN } from "../api";
import { IContactsAPIRes } from "../types/contacts";

const ContactsContext = () => {
  const [data, setData] = useState<IContactsAPIRes>();
  const [error, setError] = useState("");
  const getContacts = (searchQuery: string) => {
    console.log("asd", searchQuery);
    axios
      .get(`${BASE_URL}/contacts?q=${searchQuery}`, {
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,
        },
      })
      .then(
        (result) => {
          setData(result.data);
        },
        (error) => {
          setError(error);
        }
      );
  };
  return { getContacts, data, error };
};
export default ContactsContext;
