import React from 'react'
import Key from "./Key";
class Calculator extends React.Component {
    state={
        keys:[
            "AC",'⌫','%','/',1,2,3,'*',4,5,6,'+',7,8,9,'-',0,'.','=',
        ],
        result: "",
    };
    handleClick = (e)=>{
        if(e==="AC"){
            this.setState({result:""})
        }
        else if(e==='⌫'){
            this.setState({result: this.state.result.slice(0,-1)})
        }
        else if(e==='='){
            try {
                this.setState({result: eval(this.state.result).toString()})
            } catch (err) {
                this.setState({Ans: "Error"})
            }
            
        }
        else{
        this.setState({result: this.state.result.concat(e)})
        }
    }
    render(){
    return (
        <>
        <div className="calculator">
            <div className="result">
                <p className="panel">{this.state.result}</p>
            </div>
            <div className="keys">
                    {this.state.keys.map(key =>
                        <Key num={key} handleClick={this.handleClick.bind(this)}/>
                    )}
            </div>
        </div>
        </>
    )
    }
}

export default Calculator   