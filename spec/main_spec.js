"use strict";
var _ = require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);

var main = require("../lib/main.js");


describe("should print right poem", function(){
    sinon.spy(console, 'log');

    
    it("测试用例1", function(){

        var result = main();
        var expect_string = '';
        
        expect(expect_string).to.equal(result);
    });
    
    /*
    it("测试用例2", function(){

        main();
        var result = _.flatten(console.log.args).join("\n");
        var expect_string = '';

        expect(expect_string).to.equal(result);
    });
    */
});