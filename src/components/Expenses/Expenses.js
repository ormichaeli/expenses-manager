import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import ConditionalList from "./ConditionalList";
import Card from "../UI/Card";
import { useState } from "react";
import ExpensesChart from "./ExpensesChart";


function Expenses (props) {
    const [filteredYear, setFilteredYear] = useState ('2022');

    const FilterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    }
    
    const filteredByYear = props.items.filter( expense => {
        return expense.date.getFullYear().toString() === filteredYear 
    });

   return (
    <div>
        <Card className="expenses"> 
            <ExpensesFilter year={filteredYear} onChangeFilter={FilterChangeHandler}/>
            <ExpensesChart  expenses={filteredByYear}/>
            <ConditionalList list= {filteredByYear}/>
        </Card>
    </div>
   )
}

export default Expenses;