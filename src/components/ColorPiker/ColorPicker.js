import React, { Component } from 'react';
import './ColorPicker.css';

/*
const colorPickerOPtions = [
   { label: 'red', color: '#f44336' },
   { label: 'green', color: '#4caf50' },
   { label: 'blue', color: '#2196f3' },
   { label: 'grey', color: '#607d8b' },
   { label: 'pink', color: '#e91e63' },
   { label: 'indigo', color: '#3f51b5' },
];*/

class ColorPicker extends Component {
   state = {
      activeOptionIdx: 1,
   };

   setActiveIdx = index => {
      this.setState({ activeOptionIdx: index });
   };

   makeOptinClassName = index => {
      const optionClasses = ['ColorPicker__option'];

      if (index === this.state.activeOptionIdx) {
         optionClasses.push('ColorPicker__option--active');
      }

      return optionClasses.join(' ');
   };

   render() {
      const { label } = this.props.options[this.state.activeOptionIdx];

      return (
         <div className="ColorPicker">
            <h2 className="ColorPicker__title">Color Picker</h2>
            <p>выбран цвет: {label}</p>
            <div>
               {this.props.options.map(({ label, color }, index) => {
                  return (
                     <button
                        key={label}
                        className={this.makeOptinClassName(index)}
                        style={{ backgroundColor: color }}
                        onClick={() => {
                           this.setActiveIdx(index);
                        }}
                     ></button>
                  );
               })}
            </div>
         </div>
      );
   }
}

export default ColorPicker;
