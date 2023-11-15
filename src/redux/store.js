import {configureStore} from "@reduxjs/toolkit"
import { contactReducer, loginReducer, updateReducer, userReducer } from "./reducer/user";
const store = configureStore({
    reducer:{
        user:userReducer,
        login:loginReducer,
        update:updateReducer,
        contact:contactReducer
    }
});
export default store