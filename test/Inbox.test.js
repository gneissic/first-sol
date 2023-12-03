const ganache = require("ganache");
const { describe, it } = require("mocha");
const { Web3 } = require("web3");
const web3 = new Web3(ganache.provider());
const assert = require("assert");
const {interface, bytecode} = require("../compile")
// class Car  {
//     park(){
//   return "is parked"
//     }

//     drive(){
//         return "is driving"
//     }
// }

//   let car
//     beforeEach(()=>{
//         car = new Car()
//     })
// describe("car", ()=>{
//     const car =new Car()
//     it("can park", ()=>{
//      assert.equal(car.park(), "is parked")
//     })

//     it("is driving", ()=>{
//         assert.equal(car.drive(), "is driving")
//     })
// })

let accounts;
let inbox;
beforeEach(async () => {
  accounts = await web3.eth.getAccounts();

  inbox = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: ["Hi there"] })
    .send({ from: accounts[0], gas: "1000000" });
});

describe("Inbox", () => {
  it("deploys a contract", () => {
    console.log(inbox);
  });
});
