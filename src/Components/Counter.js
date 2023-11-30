import React from "react"

class Counter extends React.Component{

    constructor(){
        super()
        this.state={
            count : 0,
            textP : ""
        }
        // console.log(this)
    }

    increment=()=> this.setState({count : this.state.count + 1})
    decrement=()=> this.state.count >0 && this.setState({count : this.state.count -1})
    componentDidMount(){
        // console.log("Mount")
        document.title = "HI"
    }
    componentDidUpdate(){
        // console.log("Update")
        document.title = "Fourat "+this.state.count

    }
    componentWillUnmount(){
        // console.log("Unmount")
        document.title = "BYE"
    }
    render(){
        return(
            <div>
                <h2>Counter Component</h2>
                <button  onClick={this.decrement}>-</button>
                <span>{this.state.count}</span>
                <button onClick={this.increment}>+</button>
                <br/>
                <br/>
                <input onChange={(e)=> this.setState({textP : e.target.value}) } type="text"/>
                <h3>{this.state.textP}</h3>
            </div>
        )
    }
}

export default Counter