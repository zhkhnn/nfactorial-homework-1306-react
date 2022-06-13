import './App.css';
import { format } from 'date-fns';
import { BsGem } from 'react-icons/bs';
function App() {
    const date = new Date();
    const dateformat = format(date, 'dd.MM.yyyy HH:MM')
    console.log(dateformat);
    
    return (<>
    <div className='header'>
      <div className='right'><BsGem />
    <input type="text" id='empty' name='empty'></input></div>
    
      <p>{dateformat}</p>
    </div>
    <div className='content'> 
    <div className='photo'><img  alt='#' src='https://images.unsplash.com/photo-1443891238287-325a8fddd0f7?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1500&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY0MDM4Njg2Nw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1500'/> 
        <p className='text'>Hey</p></div>
        <div className='photo'><img  alt='#' src='https://images.unsplash.com/24/flashlight.jpg?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1500&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMDQzMzAzMQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1500'/>
        <p className='text'>Let`s</p></div>
        <div className='photo'><img  alt='#' src='https://images.unsplash.com/photo-1465188162913-8fb5709d6d57?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&w=1500&h=1500&fit=crop&s=967e8a713a4e395260793fc8c802901d'/>
        <p className='text'>Give</p></div>
        <div className='photo'><img  alt='#' src='https://images.unsplash.com/photo-1442522772768-9032b6d10e3e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1500&ixid=MnwxfDB8MXxhbGx8fHx8fHx8fHwxNjIyMTQ5OTE4&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1500'/>
        <p className='text'>All</p></div>
        <div className='photo'><img  alt='#' src='https://images.unsplash.com/photo-1465156799763-2c087c332922?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1500&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYyNjcwMzMwMQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1500'/>
        <p className='text'>You can</p></div>
        </div>
      </> );
}
 
export default App;