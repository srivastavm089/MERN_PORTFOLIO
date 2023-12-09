import axios from "axios";

export const getUser = () => {
  
  return async (dispatch) => {
    try {
      dispatch({
        type: "GET_USER_REQUEST",
      });

      const { data } = await axios.get("https://portolfio-0jv8.onrender.com/api/v1/getUser");

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
        "https://portolfio-0jv8.onrender.com/api/v1/login",
        JSON.stringify({ email, password }),
        {
          headers: {
            "Content-Type": "application/json",
          }
  
        }
      );
      localStorage.setItem("token", JSON.stringify(data.token));

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
      const { data } = await axios.get("https://portolfio-0jv8.onrender.com/api/v1/logout", {
        withCredentials: true,
      });

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


export const updateUser = (name, email, password, skills, about) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: "UPDATE_USER_REQUEST",
      });
      const { data } = await axios.put(
        "https://portolfio-0jv8.onrender.com/api/v1/admin/update",
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
            Authorization: JSON.parse(localStorage.getItem("token")),
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
        "https://portolfio-0jv8.onrender.com/api/v1/admin/timeline/add",
        {
          title,
          description,
          date,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: JSON.parse(localStorage.getItem("token")),
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
      const { data } = await axios.delete(
        `https://portolfio-0jv8.onrender.com/api/v1/admin/timline/${id}`,
        {
          headers: {
            Authorization: JSON.parse(localStorage.getItem("token")),
          },
        }
      );
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
export const deleteProject = (id) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: "DELETE_PROJECT_REQUEST",
      });
      const { data } = await axios.delete(
        `https://portolfio-0jv8.onrender.com/api/v1/admin/project/${id}`,
        {
          headers: {
            Authorization: JSON.parse(localStorage.getItem("token")),
          },
        }
      );
      console.log(data.message);
      dispatch({
        type: "DELETE_PROJECT_SUCCESS",
        payload: data.message,
      });
    } catch (error) {
      dispatch({
        type: "DELETE_PROJECT_FAILURE",
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
        "https://portolfio-0jv8.onrender.com/api/v1/admin/project/add",
        {
          url,
          title,
          image,
          description,
          techStack,
        },
        {
          headers: {
            "Content-Type":"application/json",
            Authorization: JSON.parse(localStorage.getItem("token")),
          },
        }
      );
      console.log(data);
      dispatch({
        type: "ADD_PROJECT_SUCCESS",
        payload: data.message,
      });
    } catch (error) {
      dispatch({
        type: "ADD_PROJECTE_FAILURE",
        payload: error.response.data.message,
      });
    }
  };
};
export const contact = (name, email, message) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: "CONTACT_REQUEST",
      });
      const { data } = await axios.post(
        "https://portolfio-0jv8.onrender.com/api/v1/message",
        {
          name,
          email,
          message,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: JSON.parse(localStorage.getItem("token")),
          },
        }
      );
      console.log(data);
      dispatch({
        type: "CONTACT_SUCCESS",
        payload: data.message,
      });
    } catch (error) {
      dispatch({
        type: "CONTACT_FAILURE",
        payload: error.response.data.message,
      });
    }
  };
};
