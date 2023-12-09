import { createReducer } from "@reduxjs/toolkit";
const initial = {
  loading: false,
};
export const userReducer = createReducer(initial, {
  GET_USER_REQUEST: (state) => {
    state.loading = true;
  },
  GET_USER_SUCCESS: (state, action) => {
    state.loading = false;
    state.user = action.payload;
  },
  GET_USER_FAILURE: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
});
export const loginReducer = createReducer(
  {},
  {
    LOGIN_REQUEST: (state) => {
      state.loading = true;
      state.isAuthenticated = false;
    },
    LOGIN_SUCCESS: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.message = action.payload;
    },
    LOGIN_FAILURE: (state, action) => {
      state.isAuthenticated = false;
      state.loading = false;
      state.error = action.payload;
    },
    LOGOUT_REQUEST: (state) => {
      state.loading = true;
    },
    LOGOUT_SUCCESS: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.user = null;
      state.message = action.payload;
    },
    LOGOUT_FAILURE: (state, action) => {
      state.isAuthenticated = true;
      state.loading = false;
      state.error = action.payload;
    },
    CLEAR_ERROTS: (state) => {
      state.error = null;
    },
    CLEAR_MESSAGE: (state) => {
      state.message = null;
    },
    LOAD_REQUEST: (state) => {
      state.loading = true;
      state.isAuthenticated = false;
    },
    LOAD_SUCCESS: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    LOAD_FAILURE: (state, action) => {
      state.isAuthenticated = false;

      state.loading = false;
      state.error = action.payload;
    },
  }
);
export const updateReducer = createReducer(
  {},
  {
    UPDATE_USER_REQUEST: (state) => {
      state.loading = true;
    },
    UPDATE_USER_SUCCESS: (state, action) => {
      state.loading = false;

      state.message = action.payload;
    },
    UPDATE_USER_FAILURE: (state, action) => {
      state.isAuthenticated = false;
      state.loading = false;
      state.error = action.payload;
    },
    ADD_TIMELINE_REQUEST: (state) => {
      state.loading = true;
      
    },
    ADD_TIMELINE_SUCCESS: (state, action) => {
      state.loading = false;

      state.message = action.payload;
    },
    ADD_TIMELINE_FAILURE: (state, action) => {
      state.isAuthenticated = false;
      state.loading = false;
      state.error = action.payload;
    },
    DELETE_TIMELINE_REQUEST: (state) => {
      state.loading = true;
    },
    DELETE_TIMELINE_SUCCESS: (state, action) => {
      state.loading = false;

      state.message = action.payload;
    },
    DELETE_TIMELINE_FAILURE: (state, action) => {
      state.isAuthenticated = false;
      state.loading = false;
      state.error = action.payload;
    },
    ADD_PROJECT_REQUEST: (state) => {
      state.loading = true;
    },
    ADD_PROJECT_SUCCESS: (state, action) => {
      state.loading = false;
     state.message = action.payload;
    },
    ADD_PROJECT_FAILURE: (state, action) => {
      state.isAuthenticated = false;
      state.loading = false;
      state.error = action.payload;
    },
    DELETE_PROJECT_REQUEST: (state) => {
      state.loading = true;
    },
    DELETE_PROJECT_SUCCESS: (state, action) => {
      state.loading = false;
     state.message = action.payload;
    },
    DELETE_PROJECT_FAILURE: (state, action) => {
      state.isAuthenticated = false;
      state.loading = false;
      state.error = action.payload;
    },
    CLEAR_ERROTS: (state) => {
      state.error = null;
    },
    CLEAR_MESSAGE: (state) => {
      state.message = null;
    },
  }
);
export const contactReducer = createReducer({}, {
    CONTACT_REQUEST:(state)=>{
       state.loading = true
    },
    CONTACT_SUCCESS:(state, action)=>{
      state.message = action.payload;
      state.loading= false
    },
    CONTACT_FAILURE:(state,action)=>{
      state.error = action.payload
      state.loading= false
    },
    CONTACT_CLEAR_MESSAGE:(state,action)=>{
      state.message =null
      state.loading= false
    },
    CONTACT_CLEAR_ERROR:(state,action)=>{
      state.error =null
      state.loading= false
    }


})
