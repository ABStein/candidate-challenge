const fetchDataController = require('../../controllers/fetchData')
const { mockRequest, mockResponse } = require('mock-req-res');
const statusCodes = require('http-status-codes');


describe('Testing fetchData API', function() {
    const sandbox = sinon.createSandbox();
    let res;

    // need to include mockresponse mockrequest 

    beforeEach(function() {
        // dataMock = sandbox.mock(fetchData);
        res = mockResponse();
    });

    afterEach(function() {
        res.json.resetHistory();
        sandbox.restore();
    });

    it('should hit the api and get a 200', async function() {
        const req = mockRequest({});
        
        await fetchDataController.fetchData(req, res);
        expect(res.status).to.have.been.calledOnceWith(statusCodes.OK);       
    });

    it('should check that response has the correct properties', async function() {
        const req = mockRequest({});
        
        const response = await fetchDataController.fetchData(req, res);
        expect(res.status).to.have.been.calledOnceWith(statusCodes.OK); 
        expect(response).to.have.property('name');
        expect(response).to.have.property('email');
        expect(response).to.have.property('photo');
        expect(response).to.have.property('birthday');
    });
})
