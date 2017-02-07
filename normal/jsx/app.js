var Hello = React.createClass({
    render: function () {
        return
        <p>Hello {this.props.name} </p>;
    }
}); 

ReactDOM.render(
    < Hello name="World" />, document.getElementById('container')
);
