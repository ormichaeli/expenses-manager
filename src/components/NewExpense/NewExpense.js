import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import {useState} from 'react';

const NewExpense = (props) => {

    const saveExpenseDataHandler = (enteredExpenseDate) => {
        const expenseData = {
            ...enteredExpenseDate,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData); 
        setIsClicked(false);
    };
    const [isClicked, setIsClicked] = useState (false);
    
    const showFormHandler = () => {
        setIsClicked(true);
    };
    
    const cancleAdding = () => {
        setIsClicked(false);
    }

    return (
        <div className='new-expense'>
            {!isClicked && <button onClick={ showFormHandler }> Add A New Expense </button>}
            {isClicked && <ExpenseForm onSaveExpenseData= {saveExpenseDataHandler} onCancle={cancleAdding}/>}
        </div>
    );
};


export default NewExpense;