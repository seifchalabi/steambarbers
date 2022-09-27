import React from "react"
export function Contact(){
    const [data,setData] = React.useState({name:"",email:"",message:""})
    function handleChange(event){
        const {name,value} = event.target
        setData(prev=>{
            return{
                ...prev,
                [name]:value
            }
        })
    }
    function handleSubmit(e){
        e.preventDefault()
        console.log(data)
    }
    return (
        <div className="contact-container">
            <div className="contact-box">
                <div className="contact-left"></div>
                <div className="contact-right">
                    <h1 className="contact-header">contact us</h1>
                    <form onSubmit={handleSubmit}></form>
                    <input type="text"  className="contact-field" name="name" id="name" value={data.name} placeholder="name" onChange={handleChange} />
                    <input type="email" className="contact-field" name="email" id="email" placeholder="email" value={data.email} onChange={handleChange} />
                    <textarea name="message"className="contact-field contact-area" placeholder="message" value={data.message} id="message" onChange={handleChange} />
                    <button className="contact-btn" onClick={handleSubmit}>submit</button>
                </div>
            </div>
        </div>
    )
}