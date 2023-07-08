const chai = require("chai");
const chaiHttp = require("chai-http");
chai.use(chaiHttp);
const { app } = require("../index");
const expect = chai.expect;


describe("API SERIES", async() =>{
    describe("GET/", () =>{
        it("Debería darme un mensaje de bienvenida", (done)=>{
        chai
            .request(app)
            .get("/")
            .end((err, res)=> {
                expect(err).to.be.null
                expect(res).to.have.status(200)
                expect(res.text).to.equal("Bienvenidos a la prueba")
                done();
            });
        })
    });

});