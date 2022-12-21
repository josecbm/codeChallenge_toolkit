
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
    it('return array filled', (done) => {
        request('http://localhost:3000').get('/files/data')
            .then(res => {
                expect(Object.keys(res.body).length).to.greaterThan(0)
                done()
            })
    })
    it('search item success', (done) => {
        request('http://localhost:3000').get('/files/data')
            .then(res => {
                expect(Object.keys(res.body).length).to.greaterThan(0)
                done()
            })
    })
    it('search item fail', (done) => {
        request('http://localhost:3000').get('/files/data?fileName=testfail.css')
            .then(res => {
                expect(res.body).to.equal('el archivo testfail.css no tiene data')
                done()
            })
    })
})