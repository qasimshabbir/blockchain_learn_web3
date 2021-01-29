import './App.css';
import {DrizzleContext} from '@drizzle/react-plugin'
import drizzleOptions from './drizzle/drizzleOptions'
import { Drizzle } from '@drizzle/store';
import { ExpenseTracker } from './components/ExpenseTracker';

const drizzle = new Drizzle(drizzleOptions);
function App() {
  return (
    <DrizzleContext.Provider drizzle={drizzle}>
      <DrizzleContext.Consumer>
        {drizzleContext => {
          const {drizzle,drizzleState, initialized} = drizzleContext;
          if(!initialized) {
            return "...loading...";
          }

          return (
            <ExpenseTracker drizzle={drizzle} drizzleState = {drizzleState} />
          )

        }}
      </DrizzleContext.Consumer>
    </DrizzleContext.Provider>
  );
}

export default App;
