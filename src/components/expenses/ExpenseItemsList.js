import React, { useState } from "react";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseItemList.css";

const ExpenseItemsList = (props) => {
    const [filteredYear, getFilteredYear] = useState("2019");

    const filterChangeHandler = (selectedYear) => {
        getFilteredYear(selectedYear);
    };
    const filteredExpenses = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() == filteredYear;
    });

    let expenseContent = <p>No expenses found.</p>;
    if (expenseContent.lenght > 0) {
        expenseContent = filteredExpenses.map((expense) => (
            <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            />
        ));
    }

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter
                    selected={filteredYear}
                    onChangeFilter={filterChangeHandler}
                />
                {expenseContent}
            </Card>
        </div>
    );
};

export default ExpenseItemsList;
