import { useState } from 'react';

export const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState('');

    // const handleSubmit = e => {
    //     e.preventDefault();
    //     if(!value) {
    //     alert('please add todo text');
    //     return;
    //     }
    //     addTodo(value);
    //     setValue('');
    const handleSubmit = e => {
        e.preventDefault();
        if(!value) {
            alert('please enter name')
            return
        }
        addTodo(value)
        // reset the input 
        setValue('');



    }
    
    return (
        // <form onSubmit={handleSubmit}>
        //     <input type="text"
        //      className="input" 
        //     value={value} 
        //     placeholder= "add todo text here"
        //     onChange={e=>setValue(e.target.value)} />
        // </form>

        <form onSubmit={handleSubmit}>
            <input type="text" 
            className="input"
            placeholder="please type your name here"
            value={value} 
            minLength = "5"
            onChange= {e=>setValue(e.target.value)}/>
        </form>
    )
}
