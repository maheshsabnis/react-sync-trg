import axios from 'axios';

export class ExpensesHttpService {
    constructor(){
        this.url = "https://expensesservicemaui.azurewebsites.net/api/expenses";
    }

    async getExpenses(){
        let response = await axios.get(this.url);
        return response;
    }

    async postExpenses(expense){
        let response = await axios.post(this.url, expense, {
            headers:{
                'Content-Type': 'application/json'
            }
        });
        return response;
    }

    async putExpenses(id,expense){
        let response = await axios.put(`${this.url}/${id}`, expense, {
            headers:{
                'Content-Type': 'application/json'
            }
        });
        return response;
    }

    async deleteExpenses(id){
        let response = await axios.delete(`${this.url}/${id}`);
        return response;
    }
}