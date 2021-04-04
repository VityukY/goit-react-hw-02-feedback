import { Component } from 'react';

class Dropdown extends Component {
   state = {
      isVisible: false,
   };

   toggle = () => {
      this.setState(prevState => ({
         isVisible: !prevState.isVisible,
      }));
   };
   render() {
      return (
         <div>
            <button
               type="button"
               className="Dropdown__toggle"
               onClick={this.toggle}
            >
               {this.state.isVisible ? 'скрыть' : 'показать'}
            </button>
            {this.state.isVisible && <div>элемент вадающеего меню</div>}
         </div>
      );
   }
}

export default Dropdown;
