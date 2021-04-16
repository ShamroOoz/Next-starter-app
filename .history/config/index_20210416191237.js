const dev = process.env.NODE_ENV !== "production";

export const server = dev ? "http://localhost:3000" : "https://yourwebsite.com";

//import { server } from '../config'
///await fetch(`${server}/api/articles`)
