import React  from 'react';
import './App.css';

 class todo  extends React.Component {
        constructor(props){
            super(props)
            this.state={
                item:"",
                todoitem:[]
            }
        }
         onchangehedle = (event) => {
       
            this.setState({
              item:event.target.value 
             })}
        adddata = ()=>{
            var inputval = this.state.item;
             var itemins = this.state.todoitem;
             itemins.push(inputval);
             this.setState({
                 todoitem:itemins,
                 item:""
             })

        }

        delecte = (event)=>{
            var id = event.target.id;
            var iteminst =  this.state.todoitem;
            iteminst.splice(id,1);
            this.setState({
                todoitem: iteminst,
                item:""
            })      
         }

    render()
    {
        var itemlist = this.state.todoitem.map((value,index) => 
             
             <li key={index}> {value} <span onClick={this.delecte} id={index}>X </span></li>
        )
        return(
                  <div>
        <div className ="header">
        <p> Welcome to React Todo app </p> </div>
        <div className="body">
        <ul> {itemlist} </ul>

               

        </div>
        <div className="footer">
        <input type='text' value={this.state.item} onChange ={this.onchangehedle}/>
        <button onClick={this.adddata}> +  </button> 

                 

        </div>
        </div>
        )
    }
}

export default todo;