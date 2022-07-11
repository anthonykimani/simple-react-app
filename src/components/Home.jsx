import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {

    // const [name,setName] = useState('mario');
    // const [age,setAge] = useState(25)

    // const handleClick = ()=>{
    //     setName('luigi');
    //     setAge(12);
    // }

    const [blogs,setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ])


    return ( 
        <div className="home">
            {/* <h1>Home Page</h1>
            <h2>{name} is {age} years old</h2>
            <button onClick={handleClick}>Click me</button> */}
            {/* <button onClick={()=>handleClick('Kimani')}>Click Me Too</button> */}
            <BlogList blogs={blogs}/>
        </div>
     );
}
 
export default Home;