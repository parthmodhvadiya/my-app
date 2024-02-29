const Home = ()=>
{
    let blogs = [
        {title:"rich dad poor dad",author:"vishal",contant:"lorem empsum...",id:1},
        {title:"rich dad poor dad",author:"vishal",contant:"lorem empsum...",id:2},
        {title:"rich dad poor dad",author:"vishal",contant:"lorem empsum...",id:3}
    ]
    const listItem = blogs.map((blog)=>
        <div key={blog.id}>
        <h1>
            {blog.title}
        </h1>
        <h3>
            {blog.author}
        </h3>
        <p>
            {blog.contant}
        </p>
        </div>
    ); 
    return(
        <div className="Home">
            {listItem}
        </div>
    );
}
export default Home;