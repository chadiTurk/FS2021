import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import Blog from './Blog'

describe('Blog Test',()=>{

    test('Blog renders only the title initially',()=>{
        
        const blog = {
            title: "Testing the title",
            url: "Random url",
            likes: 0
        }
    
        const component = render(
            <Blog blog = {blog}/>
        )
    
        expect(component.container).toHaveTextContent(
            'Testing the title'
        )

        const div = component.container.querySelector('.likesAndUrlContainer')
        expect(div).toHaveStyle('display: none')
    })

    test('Blog url and likes are shown after button show is clicked',()=>{

        const blog = {
            title: "Testing the title",
            url: "Random url",
            likes: 0
        }
    
        const component = render(
            <Blog blog = {blog} buttonLabel = {'show'} />
        )     
 
        const button = component.container.querySelector('.buttonShow')
        fireEvent.click(button)

        const div = component.container.querySelector('.likesAndUrlContainer')
        expect(div).not.toHaveStyle('display: none')

    })
})