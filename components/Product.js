const React = require('react')

const weightCheck = new Array(220);
for(let i = 80, j=0; j < weightCheck.length; i++, j++){
  weightCheck[j] = i
}

class Product extends React.Component{
  render(){
    debugger
    return(
      <div>
        <h1>{this.props.name}</h1>
      </div>
    );
  }
};
Product.defaultProps = {
  hasWatermark: false
};

Product.propTypes = {
  name: React.PropTypes.string.isRequired,
  producer: React.PropTypes.string,
  hasWatermark: React.PropTypes.bool,
  color: React.PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: React.PropTypes.oneOf(weightCheck).isRequired
}

module.exports = Product
