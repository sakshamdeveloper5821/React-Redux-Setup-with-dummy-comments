import React ,{Component} from 'react';

class CommentsForm extends Component{
	constructor(props){
		super(props);
		this.state={
			name:'',
			title:'',
			comment:'',
			error:''
		}
		this.handleChange=this.handleChange.bind(this)
		this.handleSubmit=this.handleSubmit.bind(this)
	}
	handleChange(e){
		var name= e.target.name;
		var value = e.target.value;
		console.log(name,value)
		this.setState({[name]:value})
	}

	handleSubmit(e){
		e.preventDefault(); 
		if(this.state.name==='' || this.state.title===''  || this.state.comment==='' ){
			this.setState({error:'All fields are required'})
		}else{
			this.props.submitComment(this.state)
		}
	}

	render(){
		return(
		<div className="row">
		    <div className="col">

		    	{this.state.error !== '' && (
				      <div className="alert alert-danger" role="alert">
				        {this.state.error}
				      </div>
		    		)}
		      
		      <form>
		        <div className="form-group">
		          <label htmlFor="name">Name</label>
		          <input type="text" className="form-control" name="name" onChange={this.handleChange} id="name" aria-describedby="emailHelp" placeholder="Enter user name" />
		        </div>
		        <div className="form-group">
		          <label htmlFor="title">Title</label>
		          <input type="text" className="form-control" name="title" onChange={this.handleChange} id="title" placeholder="Enter comment title" />
		        </div>
		        <div className="form-group">
		          <label htmlFor="comment">Comment</label>
		          <textarea className="form-control" id="comment" name="comment" onChange={this.handleChange} placeholder="Enter comment" />
		        </div>

		        <div className="text-right">
		          <button type="button" className="btn btn-secondary" onClick={this.props.compChange.bind(this,'addComment')}>Cancel</button>
		          &nbsp;
		          <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
		        </div>
		      </form>
	    </div>
  	</div>
			)
	}

}

export default CommentsForm;