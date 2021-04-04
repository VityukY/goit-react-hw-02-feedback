import React from 'react';
import Controls from './Controls';
import Value from './Value';

class Counter extends React.Component {
   static defaultProps = {
      initialValue: 0,
   };

   static propTypes = {
      /* this.props.value: PropTypes.number.isRequired - ??????*/
   };

   /*  constructor() {
    super();

     this.state = {
      value: 0,
    };

    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
  }
*/

   state = {
      value: this.props.initialValue,
   };

   handleIncrement = () => {
      this.setState(prevState => {
         return {
            value: prevState.value + 1,
         };
      });
   };

   handleDecrement = () => {
      this.setState(prevState => {
         return {
            value: prevState.value - 1,
         };
      });
   };

   render() {
      return (
         <div>
            <Value value={this.state.value} />
            <Controls
               onIncrement={this.handleIncrement}
               onDecrement={this.handleDecrement}
            />
         </div>
      );
   }
}

export default Counter;
