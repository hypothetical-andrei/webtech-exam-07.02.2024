const request = require('supertest')
const app = require('./../app')

beforeAll((done) => {
    request(app).get('/create').send()
        .then(() => {
            done()
        })
})

describe('Test put /people', () => {
  
    test('If the request body is missing any of the keys a code of 400 and body {"message": "person replacement should have all keys"}', (done) => {
        request(app).put('/people/1')
            .send({})
            .expect(400)
            .then(res => {
                expect(JSON.parse(res.text).message).toBe('person replacement should have all keys')
                done()
            })
    })

    test('If the value for job is not one of ACCOUNTANT, PROGRAMMER RESEARCHER the server returns a code of 400 and body {"message": "invalid job"}', (done) => {
        request(app).put('/people/1')
            .send({
                name: 'modified name',
                category: 'ACTIVE',
                job: 'HUNTER'
            })
            .expect(400)
            .then(res => {
                expect(JSON.parse(res.text).message).toBe('invalid job')
                done()
            })
    })


    test('If the person does not exist the server returns a code of 404 and body {"message": "not found"}', (done) => {
        request(app).put('/people/11')
        .send({
            name: 'modified name',
            category: 'ACTIVE',
            job: 'PROGRAMMER'
        })
        .expect(404)
        .then(res => {
            expect(JSON.parse(res.text).message).toBe('not found')
            done()
        })
    })

    test('The request works in the regular case and returns a code of 200 with the body {"message": "accepted"}', (done) => {
        request(app).put('/people/1')
            .send({
                id: 10,
                name: 'modified name',
                category: 'ACTIVE',
                job: 'PROGRAMMER'
            })
            .expect(202)
            .then(res => {
                expect(JSON.parse(res.text).message).toBe('accepted')
                done()
            })
    })

    test('The record has been modified, but the id was unaffected', (done) => {
        request(app).get('/people')
            .send()
            .expect(200)
            .then(res => {
                expect(JSON.parse(res.text)[0]).toEqual({ id: 1, name: 'modified name', category: 'ACTIVE', job: 'PROGRAMMER' })
                done()
            })
    })
})



