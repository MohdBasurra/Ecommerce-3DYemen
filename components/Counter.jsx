import React from 'react';

class Counter extends React.Component {
    constructor(props) {
      super(props);
      this.inputRef = React.createRef()
      this.state = { curValue: 1 }
    }
    
    changeValue = ({curValue, newValue}) => {
      this.setState({ curValue: newValue !== 6 ? newValue : 5 })
    }
    
    handleValueChange = (newValue, isField) => {
      const {
        props: { id, onChange },
        state: {
          curValue
        }
      } = this
  
      newValue = parseInt(newValue, 10)
  
      if (!newValue) {
        if (isField) {
          newValue = ''
        } else {
          newValue = 1
        }
      }
      if (newValue < 0) {
        newValue = 1
      }
      if (!isField) {      
        this.inputRef.current.style.transform = newValue > curValue ? 'translate-y(-100%)' : 'translate-y(100%)'
        this.inputRef.current.style.opacity = 0
         
      setTimeout(() => {
          this.inputRef.current.style.transitionDuration = '0s'
          this.inputRef.current.style.transform = newValue > curValue ? 'translate-y(100%)' : 'translate-y(-100%)'
          this.inputRef.current.style.opacity = 0
          this.changeValue({ curValue, newValue })
          
          setTimeout(() => {
            this.inputRef.current.style.transitionDuration = '0.3s'
            this.inputRef.current.style.transform = 'translate-y(0)'
            this.inputRef.current.style.opacity = 1
          }, 20)
        }, 250)
      } else {
        this.changeValue({ curValue, newValue })
      }    
    }
  
    render () {
      const {
        state: {
          curValue
        }
      } = this
      
      return (
        <div className="flex items-center">
          <button
            className="  hover:text-gray-400 hover:text-2xl text-gray-600 font-bold py-2 px-4  "
            onClick={() => { this.handleValueChange(curValue - 1) }}
            title="-1"
          >
            −
          </button>
          <div className="w-16 h-16 bg-custom-blue y-2 px-2 border-0 rounded overflow-hidden= shadow-md mx-2">
            <input
              className="w-full h-full text-white text-center border-0 text-2xl font-bold outline-none bg-custom-blue"
              maxLength={2}
              onChange={e => {
                e.preventDefault()
                this.handleValueChange(e.target.value, true)
              }}
              ref={this.inputRef}
              type="text"
              value={curValue}
            /> 
          </div>
          <button
            className="hover:text-gray-400 hover:text-2xl text-gray-600  font-bold py-2 px-4 rounded-r"
            onClick={() => { this.handleValueChange(curValue + 1) }}
            title="+1"
          >
            +
          </button>
        </div>
      )
    }
  }
  
  export default Counter;
