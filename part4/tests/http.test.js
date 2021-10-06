const supertest = require('supertest')
const mongoose = require('mongoose')
const app = require('../app')
const api = supertest(app)

describe('HTTP GET',()=>{

    test('total amount of blogs is correct', async ()=>{
       const response = await api
        .get('/blogs')
        .expect(200)
        .expect('Content-Type', /application\/json/)
        expect(response.body.length).toBe(1)
    })

    test('_id is replaced as id in the Blog model', async ()=>{
        const response = await api
        .get('/blogs')
        .expect(200)
        .expect('Content-Type', /application\/json/)
        response.body.map(blog => expect(blog.id).toBeDefined())
    })

})

afterAll(() => {
    mongoose.connection.close()
  })