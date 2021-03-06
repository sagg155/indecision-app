import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';
import 'normalize.css/normalize.css'; 
import './styles/styles.scss';

class OldSyntax{
  constructor(){
    this.name='Mike'
  }
}
const oldSyntax = new OldSyntax();
console.log(oldSyntax);

class NewSyntax{
    name='Joe'
}

const newSyntax = new NewSyntax();
console.log(newSyntax);

const Layout = (props)=>{
  return (
    <div>
      <p>header</p>
      {props.content}
      <p>footer</p>
    </div>
  );
};

const template = (
  <div>
    <h1>Page Title</h1>
    <p>This is my page</p>
  </div>
)
//import AddOption from './components/AddOption'; //.js extension can be excluded webpack can automatically look 
                                                // the js file  

// class IndecisionApp extends React.Component {
//     constructor(props) {
//       super(props);
//       this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
//       this.handlePick = this.handlePick.bind(this);
//       this.handleAddOption = this.handleAddOption.bind(this);
//       this.handleDeleteOption = this.handleDeleteOption.bind(this);
//       this.state = {
//         options: []
//       };
//     }
//     componentDidMount() {
//       try {
//         const json = localStorage.getItem('options');
//         const options = JSON.parse(json);
  
//         if (options) {
//           this.setState(() => ({ options }));
//         }
//       } catch (e) {
//         // Do nothing at all
//       }
//     }
//     componentDidUpdate(prevProps, prevState) {
//       if (prevState.options.length !== this.state.options.length) {
//         const json = JSON.stringify(this.state.options);
//         localStorage.setItem('options', json);
//       }
//     }
//     componentWillUnmount() {
//       console.log('componentWillUnmount');
//     }
//     handleDeleteOptions() {
//       this.setState(() => ({ options: [] }));
//     }
//     handleDeleteOption(optionToRemove) {
//       this.setState((prevState) => ({
//         options: prevState.options.filter((option) => optionToRemove !== option)
//       }));
//     }
//     handlePick() {
//       const randomNum = Math.floor(Math.random() * this.state.options.length);
//       const option = this.state.options[randomNum];
//       alert(option);
//     }
//     handleAddOption(option) {
//       if (!option) {
//         return 'Enter valid value to add item';
//       } else if (this.state.options.indexOf(option) > -1) {
//         return 'This option already exists';
//       }
  
//       this.setState((prevState) => ({
//         options: prevState.options.concat(option)
//       }));
//     }
//     render() {
//       const subtitle = 'Put your life in the hands of a computer';
  
//       return (
//         <div>
//           <Header subtitle={subtitle} />
//           <Action
//             hasOptions={this.state.options.length > 0}
//             handlePick={this.handlePick}
//           />
//           <Options
//             options={this.state.options}
//             handleDeleteOptions={this.handleDeleteOptions}
//             handleDeleteOption={this.handleDeleteOption}
//           />
//           <AddOption
//             handleAddOption={this.handleAddOption}
//           />
//         </div>
//       );
//     }
//   }
  
  // const Header = (props) => {
  //   return (
  //     <div>
  //       <h1>{props.title}</h1>
  //       {props.subtitle && <h2>{props.subtitle}</h2>}
  //     </div>
  //   );
  // };
  
  // Header.defaultProps = {
  //   title: 'Indecision'
  // };
  
  // const Action = (props) => {
  //   return (
  //     <div>
  //       <button
  //         onClick={props.handlePick}
  //         disabled={!props.hasOptions}
  //       >
  //         What should I do?
  //       </button>
  //     </div>
  //   );
  // };
  
  // const Options = (props) => {
  //   return (
  //     <div>
  //       <button onClick={props.handleDeleteOptions}>Remove All</button>
  //       {props.options.length === 0 && <p>Please add an option to get started!</p>}
  //       {
  //         props.options.map((option) => (
  //           <Option
  //             key={option}
  //             optionText={option}
  //             handleDeleteOption={props.handleDeleteOption}
  //           />
  //         ))
  //       }
  //     </div>
  //   );
  // };
  
  //   return (
  //     <div>
  //       <p>Name: {props.name}</p>
  //       <p>Age: {props.age}</p>
  //     </div>
  //   );
  // };
  
  ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));
  
  