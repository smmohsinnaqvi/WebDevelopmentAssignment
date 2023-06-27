let React=require('react');

class State1Cls extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={
            message : "Welcome"
        }
    }
    render()
    {
        return(
        <div>
            <p>{this.state.message}</p>
            <button onClick={()=>{this.setState({message:"Hello"})}}> Click Here</button>
        </div>)

    }
}

export default State1Cls;
