import React from "react";
class Aboutcard extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="w-64 bg-gray-200 hover:bg-gray-300 m-6 p-2 h-96 rounded-lg hover:shadow-xl hover:border border-gray-400 hover:brightness-110 transition-all delay-100 hover:translate-x-3 hover:cursor-pointer">
                <img src={this.props.image} className="hover:shadow-lg hover:brightness-125"></img>
                <h2 className="font-bold">{this.props.firstName+" "+this.props.lastName}</h2>
                <h4 className="text-orange-950 font-semibold">AGE:{this.props.age}</h4>
                <h4>CONTACT:{this.props.email}</h4>
            </div>
        );
    };
};

export default Aboutcard;