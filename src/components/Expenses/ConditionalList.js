import "./ConditionalList.css";
import ExpenseItem from "./ExpenseItem";

const ConditionalList = (props) => {
    return <ul className="expenses-list">
        {props.list.length === 0 ? <p className="expenses-list__fallback"> No Expenses Found. </p> :
            props.list.map(expense => 
            <ExpenseItem 
                key = {expense.id}
                title = {expense.title}
                amount={expense.amount}
                date={expense.date}
            />)}
    </ul>
}

export default ConditionalList;