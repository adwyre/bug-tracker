import React from "react";
import './barChart.css'
import { priorities, categories } from "../util/formSelections";

const BarChart = (props) => {
  // get max total of all priorities
  const maxTotal = () => {
    let total = 0;
    for (let i=0; i < priorities.length; i++) {
      let currLength = props.cases.filter(item => item.priority == priorities[i]).length;
      if ( currLength > total) {
        total = currLength;
      }
    }
    return total;
  }
  // get percentage function
  const getPercent = (priorityList, category) => {
    let categoryTotal = priorityList.filter(item => item.category == category).length;
    let categoryPercent = (categoryTotal / priorityList.length) * 100;
    return categoryPercent;
  }
  // function to set max height of bars
  const getHeight = (priority) => {
    let percentOfMax = (props.cases.filter(item => item.priority == priority).length / maxTotal()) * 100;
    return percentOfMax;
  }

  // hover event handlers for sections
  const displayCard = (e) => {
    e.target.getElementsByClassName("card")[0].style.display = "block";
  }

  const hideCard = (e) => {
    e.target.getElementsByClassName("card")[0].style.display = "none";
  }
  

  return (
    // number of cases and priorities
    <>
      <h4>Cases by Priority and Category</h4>
      <div className="chart">
        {priorities.map(priority => (
          <div 
          className={"bar " + priority}
          style={{"height": getHeight(priority) + "%"}}>
            {categories.map(category => (
              <>
                <div 
                  className={"bar-sect " + category + " position-relative"} 
                  style={{"height": getPercent((props.cases.filter(item => item.priority == priority)), category) + "%"}}
                  onMouseOver={displayCard} onMouseOut={hideCard}>
                  <div className="card position-absolute top-0 start-0 translate-middle">
                    <div className="card-header">
                      {category}
                    </div>
                    <div className="card-body">
                      <p>{props.cases.filter(item => item.category == category).length}</p>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        ))}
      </div>
      <div className="chart-labels">
        {priorities.map(priority => (
          <p>{priority}</p>
        ))}
      </div>
    </>
  );
}

export default BarChart;
