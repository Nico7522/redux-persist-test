import { createAction } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

export const presenceActionAddPerson = createAction(
  "presence/addPerson",
  ({firstname, lastname}) => {
    return {
      payload: {
        firstname,
        lastname,
        id: nanoid(),
        isPresent: false
      },
    };
  }
);

export const presenceActionRemovePerson = createAction("presence/removePerson");

export const presenceActionValidate = createAction("presence/validate");

export const presenceActionInValidate = createAction("presence/inValidate");
