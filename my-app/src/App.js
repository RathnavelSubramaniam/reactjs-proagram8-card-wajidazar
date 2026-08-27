import './App.css';
import Card from './Card';
import './Card.css';

function App() {
  const item1 =[{name:"computer",Price:90000},
    {name:"Mobile",Price:12000},
    {name:"Iphone",Price:80000},
  ];

  return (
    <>
    {item1.map((item)=>{
      return <Card items={item}/>
    })}
    </>
  );
}

export default App;
