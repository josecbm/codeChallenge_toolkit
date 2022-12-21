
import request from 'supertest'
import { expect } from 'chai'
describe('GET /iecho', () => {
    it('return status 200 ', (done) => {
        request('http://localhost:3000').get('/files/data')
            .then(res => {
                expect(res.status).to.equal(200)
                done()
            })
    })
    it('array length ', (done) => {
        request('http://localhost:3000').get('/files/data')
            .then(res => {
                console.log('este es res ',Object.keys(res.body).length);
                expect(Object.keys(res.body).length).to.greaterThan(0)
                done()
            })
    })
})