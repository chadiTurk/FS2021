const dummy = blogs =>{
    return 1
}

const totalLikes = blogs =>{
    let total = 0

    blogs.map(blog => total += blog.likes)

    return total
}

const favoriteBlog = blogs =>{
    const max = blogs.reduce(function(prev, current) {
        return (prev.likes > current.likes) ? prev : current
    }) 

  return max
}

module.exports = {
    dummy,
    totalLikes,
    favoriteBlog
}