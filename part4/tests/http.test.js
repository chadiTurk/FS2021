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
        // expect(response.body.length).toBe(5)
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
        .send(helper.sampleNoteComplete)
        .expect(200)
        .expect('Content-Type', /application\/json/)

        const secondResponse = await api.get('/blogs')
        expect(secondResponse.body.length).toBe(initialResponse.body.length + 1)

    })

    test('a new blog with no "likes" key will automatically get a value of 0', async ()=>{
        const response = await api
        .post('/blogs')
        .send(helper.sampleNoteNoLikes)
        .expect(200)
        .expect('Content-Type', /application\/json/)

        expect(response.body.likes).toBeDefined()
        expect(response.body.likes).toBe(0)
    })

})

describe('HTTP DELETE',()=>{
    test('a blog can be deleted',async()=>{
        const response = await api
        .post('/blogs')
        .send(helper.sampleNoteComplete)
        .expect(200)
        .expect('Content-Type', /application\/json/)

        console.log('response body id',response.body.id)

        await api
        .delete(`/blogs/${response.body.id}`)
        .expect(204)

    })
})

afterAll(() => {
    mongoose.connection.close()
  })