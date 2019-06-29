import React, { useState } from 'react';
import '../styles/home.css';

function Home() {

    const [link, setLink] = useState("");
    const [priority, setPriority] = useState("");

    const handleLink = (e) => {
        let value = e.target.value;
        let domain = value.replace('https://', '').replace('http://', '').split('/')[0];
        setLink(domain);
        // console.log(getTitle(value).then((res)=>console.log(res)))

    }
    // const getTitle = (url) => {
        
    //     return fetch(`https://crossorigin.me/${url}`)
    //         .then((response) => response.text())
    //         .then((html) => {
    //             const doc = new DOMParser().parseFromString(html, "text/html");
    //             const title = doc.querySelectorAll('title')[0];
    //            return title.innerText;
    //         });
    // }

    const handlePriority = (e) => {
        let value = e.target.value;
        setPriority(value)
    }

    const handleSubmit = () => {
        // Post data to firebase or any DB
        console.log('data', { 'Link': link, 'Priority': priority })


    }


    return (
        <div className="container">
            <div className="row">
                <div className="col-25">
                    <label htmlFor="fname">Paste Link</label>
                </div>
                <div className="col-75">
                    <input type="text" id="fname" name="firstname" placeholder="Paste Here" onChange={(e) => handleLink(e)}></input>
                </div>
            </div>
            <div className="row">
                <div className="col-25">
                    <label>Priority</label>
                </div>
                <div className="col-75">
                    <select id="country" name="country" onChange={(e) => handlePriority(e)}>
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                    </select>
                </div>
            </div>
            <div className="row">
                <input type="button" value="ADD" placeholder='ADD' onClick={handleSubmit}></input>
            </div>
        </div>

    )
}
export default Home;