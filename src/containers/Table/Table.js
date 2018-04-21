import React, { Component } from 'react';
import * as classes from './Table.css';

class Table extends Component {

  constructor ( props ) {
    super(props);
    this.state = {
      "size": 3,
      "recipeSummary": [
          {
              "recipeId": "trn:tesco:content:uuid:5955707f-a654-4ad6-a3f7-2231a265ffdd",
              "recipeName": "Elena's 'cheeky tortilla' quiche",
              "activationStatus": true,
              "modificationDate": "2017-09-13T11:20:57.028Z",
              "cuisine": "British"
          },
          {
              "recipeId": "trn:tesco:content:uuid:5955707f-a654-4ad6-a3f7-2231a265ffdd1",
              "recipeName": "Elena's 'cheeky tortilla' quiche",
              "activationStatus": true,
              "modificationDate": "2017-09-13T11:20:57.028Z",
              "cuisine": "British"
          },
          {
              "recipeId": "trn:tesco:content:uuid:9c709583-aff6-48aa-a215-a4c1b61ddee7",
              "recipeName": "Jane's fishcakes 'for two, or one'",
              "activationStatus": false,
              "modificationDate": "2018-03-28T10:37:12.638Z",
              "cuisine": "British"
          }
      ]
    };
  }

  render () {
    let tableRows = this.state.recipeSummary.map(item => {
      const activityClass = item.activationStatus === true ? classes.active : classes.inactive;
      let statusClass = classes.statusIcon + ' ' + activityClass;
      
      const itemDate = new Date(item.modificationDate);
      const formattedDate = itemDate.getDate() + '/' + itemDate.getMonth() + 1 + '/' + itemDate.getFullYear();      
      return <tr key={item.recipeId}>
        <td>{item.recipeName}</td>
        <td>{formattedDate}</td>
        <td>{item.cuisine}</td>
        <td align='center'><div className={statusClass}></div></td>
      </tr>
    });
    return (
      <div>Recipes
        <table>
          <thead>
            <tr>
              <td>Recipe Name</td>
              <td>Last Updated</td>
              <td>Cuisine</td>
              <td>Status</td>
            </tr>
          </thead>
          <tbody>
            { tableRows } 
          </tbody>
        </table>
      </div>
    )
  }
}

export default Table;