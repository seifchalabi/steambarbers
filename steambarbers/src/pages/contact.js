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
        <div className="contact">
            <h1 className="contact-header">contact us</h1>
            <form onSubmit={handleSubmit}></form>
            <label htmlFor="name">name *</label>
            <input type="text" name="name" id="name" value={data.name} onChange={handleChange} />
            <label htmlFor="email">email *</label>
            <input type="email" name="email" id="email" value={data.email} onChange={handleChange} />
            <label htmlFor="message">message *</label>
            <textarea name="message" value={data.message} id="message" onChange={handleChange} />
            <button className="contact-submit" onClick={handleSubmit}>submit</button>
        </div>
    )
}