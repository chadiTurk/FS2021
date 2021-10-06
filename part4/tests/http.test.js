const supertest = require('supertest')
const mongoose = require('mongoose')
const app = require('../app')
const api = supertest(app)
const helper = require('./http_helper')
describe('HTTP GET',()=>{

    test('total amount of blogs is correct', async ()=>{
       const response = await api
        .get('/blogs')
        .expect(200)
        .expect('Content-Type', /application\/json/)
        expect(response.body.length).toBe(5)
    })

    test('_id is replaced as id in the Blog model', async ()=>{
        const response = await api
        .get('/blogs')
        .expect(200)
        .expect('Content-Type', /application\/json/)
        response.body.map(blog => expect(blog.id).toBeDefined())
    })
})

describe('HTTP PUT',()=>{

    test('a new blog can be added to the database',async()=>{    
     const initialResponse = await api.get('/blogs')

        await api
        .post('/blogs')
        .send(helper.sampleNote)
        .expect(200)
        .expect('Content-Type', /application\/json/)

        const secondResponse = await api.get('/blogs')

        expect(secondResponse.body.length).toBe(initialResponse.body.length + 1)
        

    })
})

afterAll(() => {
    mongoose.connection.close()
  })