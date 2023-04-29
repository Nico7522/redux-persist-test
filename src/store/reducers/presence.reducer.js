import { createReducer } from "@reduxjs/toolkit";
import { presenceActionAddPerson, presenceActionInValidate, presenceActionRemovePerson, presenceActionValidate } from "../actions/presence.action";

const initialState = {
    people : []
};

const presenceReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(presenceActionAddPerson,(state, action) => {
            const person = action.payload;
            state.people.push(person);
        })
        .addCase(presenceActionRemovePerson, (state, action) => {
            const personId = action.payload;
            state.people = state.people.filter(p => p.id !== personId)
        })
        .addCase(presenceActionValidate, (state, action) => {
            const personId = action.payload;
            const person = state.people.find(p => p.id === personId);
            person ? person.isPresent = true : person.isPresent = false
        })
        .addCase(presenceActionInValidate, (state, action) => {
            const personId = action.payload;
            const person = state.people.find(p => p.id === personId);
            person ? person.isPresent = false : person.isPresent = true
            
        })
});

export default presenceReducer;