import './NewExpenses.css'
import Form from './Form'

const NewExpenses = () => {

    const submitExpensesHandler =() =>{
        
    }

    return(
        <div className='new-expense'>
         <Form onSubmit={submitExpensesHandler}></Form>
        </div>
    )
}

export default NewExpenses;