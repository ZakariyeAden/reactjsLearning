import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "../Style/ExpensesCard.css";
import ExpenseFilter from "../Components/ExpenseFilter";
import Card from "./Card";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";
function ExpenseCard(props) {
  const [filterYear, setFilterYear] = useState("2020");
  const filterChangeHandler = selectedYear => {
    setFilterYear(selectedYear);
  };

  const filterExpense = props.item.filter(expense => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filterYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpenseChart expenses={filterExpense}/>
       <ExpenseList item={filterExpense}/>
      </Card>
    </div>
  );
}

export default ExpenseCard;
