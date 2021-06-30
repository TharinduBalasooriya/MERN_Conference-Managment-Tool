// const express = require("express"); // import express
// const serverRoutes = require("./server-routes"); //import file we are testing
// const request = require("supertest"); // supertest is a framework that allows to easily test web apis
// const app = express(); //an instance of an express app, a 'fake' express app
// app.use("/api", serverRoutes); //routes
// describe("testing-get-reasearchpapers", () => {
//   it("GET /api/researchers/", async () => {
//     const { body } = await request(app).get("/api/researchers/"); 
//     expect(body).toEqual([
//             {
//               "status": "pending",
//               "_id": "60da17ae7ed7b31b04c5e442",
//               "name": "Tharinu Balasooriya",
//               "email": "tharinduudna66@gmail.com",
//               "mobileNumber": "071-5901757",
//               "topic": "Serverside Rendering JS frameworks",
//               "organization": "SLIIT department of CSSE",
//               "abstract": "Server-side rendering (SSR) is the process of rendering web pages on a server and passing them to the browser (client-side), instead of rendering them in the browser. SSR sends a fully rendered page to the client; the client's JavaScript bundle takes over and enables the SPA framework to operate",
//               "__v": 0
//             },
//             {
//               "status": "Accepted",
//               "_id": "60dba77933b23712488f3b00",
//               "__v": 0,
//               "abstract": "Electricty Trading framework using blockchain .....",
//               "email": "dr.weeresinghe@gmail.com",
//               "mobileNumber": "071-5901757",
//               "name": "Dr.J Weerasinghe",
//               "organization": "SLIIT",
//               "topic": "Electricty Trading FrameWorks"
//             },
//     ]);
//   });
// });