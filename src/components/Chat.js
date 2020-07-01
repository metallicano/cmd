import React, { useState,useEffect, useRef } from 'react';
import styled from 'styled-components'

const ChatStyled = styled.div`

    
    position: fixed;
    top: 0;
    left: 0px;
    width: 500px;
    height: 100%;
    background: #40c3ff;
    z-index: 1000;
    display: grid;
    background-color: rgba(0, 0, 0, 0.8);
    grid-template-rows: 93% 7%;
    


.chatSection{
    
    width: 100%;
    
    
    
    
}

.writerSection{
    
    width: 100%;
    background: gray;
    display: flex;
    flex-direction: row;
   
}
input{
    width: 90%;
    padding: 0 5px;
    border: none;
    outline:none;
    background: black;
    color: white;
}

button{
    width: 10%;
    display: flex;
    align-items:center;
    justify-content:center;
    border: none;
    outline:none;
    cursor: pointer;
    background: black;
    color: white;
    
}

i{
    font-size: 20px;
}

.fas.fa-location-arrow{
    transform: rotate(+45deg);
   
}

li{
    color: white;
    list-style: none;
}

p{
    padding: 0;
    margin: 0;
    
}


@media (max-width: 500px){
    
        width: 100%;
    

}
`

export default function Chat() {
    const inputRef = useRef();
    const [message, setmessage] = useState('')
    const [messages, setmessages] = useState([
        { id: 0, user: 'metallicano', text: 'hola' },
        { id: 1, user: 'metallicano', text: 'que' },
        { id: 2, user: 'metallicano', text: 'tal' }


    ])

    useEffect(() => {
        console.log('object')
        
    }, [])


    const updateMessage = (e) => {
        //console.log(e.target.value)
        setmessage(e.target.value)


    }

    const sendMessage = (e) => {
        console.log(message)
        const newMessage = {
            id: messages.length,
            text: message,
            user: 'metallicano'
        }

        console.log(newMessage)
        setmessages([...messages, newMessage])
        setmessage('')
        e.preventDefault()
        inputRef.current.focus()
    }

    return (
        <ChatStyled>
            <div className="chatSection">
                <ul>
                    {
                        messages.map((message, id) =>
                            <li key={message.id}><p>{message.user}: <span>{message.text}</span></p></li>
                        )
                    }
                </ul>


            </div>
            <div className="writerSection">
                <input
                    type="text"
                    name="" id=""
                    placeholder="say hello..."
                    onChange={updateMessage}
                    value={message}
                    ref ={inputRef}
                    autoFocus={true}
                    
                />
                <button
                    onClick={sendMessage}

                ><i className="fas fa-location-arrow"></i></button>

            </div>
        </ChatStyled>
    )
}