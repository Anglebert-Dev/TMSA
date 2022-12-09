const mongoose = require("mongoose");
mongoose.set('strictQuery', false)
const request = require("supertest");

const app = require("../app");

require("dotenv").config();

describe('Test the database' , ()=>{
    
})
// connecting to database before each test 

beforeEach(async ()=>{
    await mongoose.connect(process.env.MONGO_URL);
    
})
// CLOSING database connection after each test.
afterEach(async()=>{
    await mongoose.connection.close();
})


// failed
describe("GET api/tutorial/", () => {
    test("should return all tutorials", async () => {
      const res = await request(app).get("/api/tutorial");
      expect(res.statusCode).toBe(200);
      expect(res.body.length).toBeGreaterThan(0);
    });
  });

  describe("GET api/tutorial/find/:id", () => {
    test("should return tutorial with ", async () => {
      const res = await request(app).get("/api/tutorial/find/6331abc9e9ececcc2d449e44");
      expect(res.statusCode).toBe(200);
      expect(res.body.length).toBeGreaterThan(0);
    });
  });

describe("POST /api/tutorial" , ()=>{
    it("should create a tutorial" , async()=>{
        const res = await request(app).post("/api/tutorial")
        .send({
            title:"Nodejs Beginners Tutorial",
            description:"nodejs tutorial for beginners",
            published:false
        });
        expect(res.statusCode).toBe(201)
        expect(res.body.title).toBe("Nodejs Beginners Tutorial")
    })
})


describe("PUT /api/tutorial/:id", () => {
    it("should update a product", async () => {
      const res = await request(app)
        .patch("/api/tutorial/6331abc9e9ececcc2d449e44")
        .send({
          title: "Nodejs tutorial ",
          description: "Description ",
          published:false
        });
      expect(res.statusCode).toBe(200);
      expect(res.body.title).toBe("Nodejs tutorial");
    });
  });
  
  describe("DELETE /api/tutorial/:id", () => {
    it("should delete a product", async () => {
      const res = await request(app).delete(
        "/api/tutorial/6331abc9e9ececcc2d449e44"
      );
      expect(res.statusCode).toBe(200);
    });
  });

