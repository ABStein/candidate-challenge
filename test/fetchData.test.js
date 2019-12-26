const fetchDataMock = require('../controllers/fetchData')
const { mockRequest, mockResponse } = require('mock-req-res');


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

    it('should hit the api', function() {
        const req = mockRequest({});
        const response = fetchDataMock.fetchData(req, res);
        console.log('This is response', response);
        expect(response).to(Object);
    });
})
