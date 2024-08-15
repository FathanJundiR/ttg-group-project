import { createBrowserRouter, redirect } from "react-router-dom";
import Toastify from "toastify-js";
import { io } from "socket.io-client";
import { localUrl } from "../utils/baseUrl";
const url = localUrl;

const socket = io(url, {
  autoConnect: false,
});

const router = createBrowserRouter([]);

export default router;
