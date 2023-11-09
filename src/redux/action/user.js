import axios from "axios";
export const getUser = () => {
  return async (dispatch) => {
    try {
      dispatch({
        type: "GET_USER_REQUEST",
      });
      const { data } = await axios.get("/api/v1/getUser");
      dispatch({
        type: "GET_USER_SUCCESS",
        payload: data.user,
      });
    } catch (error) {
      dispatch({
        type: "GET_USER_FAILURE",
        payload: error.response.data.message,
      });
    }
  };
};
export const login = (email, password) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: "LOGIN_REQUEST",
      });
      const { data } = await axios.post(
        "/api/v1/login",
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: data.message,
      });
    } catch (error) {
      dispatch({
        type: "LOGIN_FAILURE",
        payload: error.response.data.message,
      });
    }
  };
};
export const logout = () => {
  return async (dispatch) => {
    try {
      dispatch({
        type: "LOGOUT_REQUEST",
      });
      const { data } = await axios.get("/api/v1/logout");

      dispatch({
        type: "LOGOUT_SUCCESS",
        payload: data.message,
      });
    } catch (error) {
      dispatch({
        type: "LOGOUT_FAILURE",
        payload: error.response.data.message,
      });
    }
  };
};
export const loadUser = () => {
  return async (dispatch) => {
    try {
      dispatch({
        type: "LOAD_REQUEST",
      });
      const { data } = await axios.get("/api/v1/me");

      dispatch({
        type: "LOAD_SUCCESS",
        payload: data.user,
      });
    } catch (error) {
      dispatch({
        type: "LOAD_FAILURE",
        payload: error.response.data.message,
      });
    }
  };
};

export const updateUser = (name, email, password, skills, about) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: "UPDATE_USER_REQUEST",
      });
      const { data } = await axios.put(
        "/api/v1/admin/update",
        {
          name,
          email,
          password,
          about,
          skills,
          about,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      dispatch({
        type: "UPDATE_USER_SUCCESS",
        payload: data.message,
      });
    } catch (error) {
      dispatch({
        type: " UPDATE_USER_FAILURE",
        payload: error.response.data.message,
      });
    }
  };
};
export const addtimeline = (title, description, date) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: "ADD_TIMELINE_REQUEST",
      });
      const { data } = await axios.post(
        "/api/v1//admin/timeline/add",
        {
          title,
          description,
          date,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(data);
      dispatch({
        type: "ADD_TIMELINE_SUCCESS",
        payload: data.message,
      });
    } catch (error) {
      dispatch({
        type: "ADD_TIMELINE_FAILURE",
        payload: error.response.data.message,
      });
    }
  };
};
export const deleteTimeline = (id) => {
  console.log(id);
  return async (dispatch) => {
    try {
      dispatch({
        type: "DELETE_TIMELINE_REQUEST",
      });
      const { data } = await axios.delete(`/api/v1/admin/timline/:${id}`);
      dispatch({
        type: "DELETE_TIMELINE_SUCCESS",
        payload: data.message,
      });
    } catch (error) {
      dispatch({
        type: "DELETE_TIMELINE_FAILURE",
        payload: error.response.data.message,
      });
    }
  };
};
export const addProject = (url, title, image, description, techStack) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: "ADD_PROJECT_REQUEST",
      });
      const { data } = await axios.post(
        "/api/v1/admin/project/add",
        {
          url,
          title,
          image,
          description,
          techStack,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(data);
      dispatch({
        type: " ADD_PROJECT_SUCCESS",
        payload: data.message,
      });
    } catch (error) {
      dispatch({
        type: " ADD_PROJECTE_FAILURE",
        payload: error.response.data.message,
      });
    }
  };
};
