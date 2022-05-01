import React from 'react';
import './Blogs.css'

const Blog = () => {
    return (
        <div className='blog-container'>
            <h1 >Questions And Answer:</h1>



            <div className="blog-area ">

            <div>
                <h3 className='mt-4 text-primary '> No:1 Difference between javascript and nodejs</h3>

                <p>#javascript is programming languaage which run in browser.</p>
                <p>#It is an interpreted scripted language and code can ran only in browser.</p>

                <p>*Nodejs is the runtime environment of javascript</p>
                <p>*Node js helps javascript to run code on both client and server side</p>

                </div>



            <div>
                <h3 className='mt-4 text-primary '> No2: When should you use nodejs and when should you use mongodb?</h3>

                <p>Node js is a open source server environment for javascript and </p>
                <p>whenever we need strong but multidata loaded system for our backend</p>
                <p>we should use node. It makes Large application a nd can load many data on server </p>

                <p>Sometimes we want user data in unstrutured way in short time into our Database.</p>
                <p>And MongoDB helps jus to do this task bacause mongo is NOSQL  database system </p>
                <p> And it does not to create table rows or columns</p>

                </div>


                <div>
                <h3 className='mt-4 text-primary'> No3: Differences between sql and nosql databases</h3>

                <p>#SQL databases are relational NOSQL databases are non-relational </p>
                <p>#SQL database need structured query language. NOSQL does not need qyuery lanbguage.</p>
                <p>#SQL databases are vertically scalable and NOSQL darabases are horizintally scalable.</p>

                <p>SQL database are table based but NOSQL are document , key etec based.</p>
               
              

                </div>


            </div>
        </div>
    );
};

export default Blog;