import React from 'react'
import PropTypes from 'prop-types'
const AddBlog = ({titleHandler,authorHandler,urlHandler,formHandler,titleValue,authorValue,urlValue}) =>{
    return(
        <form onSubmit = {formHandler}>
            <label htmlFor = "title">title</label>
            <input name = "title" value = {titleValue} onChange = {titleHandler}/>
            <br/>
            <label htmlFor = "author">author</label>
            <input name = "author" value = {authorValue} onChange = {authorHandler}/>
            <br/>
            <label htmlFor = "url">url</label>
            <input name = "url"  value = {urlValue} onChange = {urlHandler}/>
            <br/>
            <button>create</button>
        </form>
    )
}

AddBlog.propTypes = {
    titleValue:PropTypes.string.isRequired,
    authorValue:PropTypes.string.isRequired,
    urlValue:PropTypes.string.isRequired,
}

export default AddBlog