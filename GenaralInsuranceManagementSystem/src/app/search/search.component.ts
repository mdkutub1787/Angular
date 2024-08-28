import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchQuery: string = '';
  searchResults: any[] = []; 
  
  // Sample JSON Data
  data = {
    user: [
      { id: '1', name: 'Kutub Uddin', email: 'kutub@gmail.com', role: 'Admin' },
      { id: 'e2a5', name: 'Kutub Uddin', email: 'mdkutubuddin1787@gmail.com', role: 'User' },
      { id: '7e2b', name: 'towhid', email: 'Towhidul@gmail.com', role: 'User' }
    ],
    policy: [
      { billNo: 11, policyholder: 'M/s Raju Food Corner', sumInsured: 20000000, address: 'lalbagh Roard , Lalabagh Dhaka 1203' },
      { billNo: '', policyholder: 'M/s Sanaullah agro firm', sumInsured: 5000, address: 'Dhanmondi' },
      { billNo: '', policyholder: 'M/s Mr Ahmed Enterprise', sumInsured: 50000, address: 'lalbagh' }
    ],
    bills: [
      { id: 'fead', fire: 0.012, policies: { policyholder: 'M/s Rizvi agro firm', sumInsured: 800000 } },
      { id: '1104', fire: 0.01, policies: { policyholder: 'M/s Sanaullah agro firm', sumInsured: 50000 } },
      { id: '2a0c', fire: 0.01, policies: { policyholder: 'M/s Raju Food Corner', sumInsured: 20000000 } }
    ],
    reciept: [
      { id: '1', bill: { netPremium: 500, grossPremium: 20000, policies: { policyholder: 'M/s Raju Food Corner', sumInsured: 20000000 } } }
    ]
  };

  onSearch() {
    this.searchResults = [];

    // Convert search query to lowercase for case-insensitive search
    const searchQueryLower = this.searchQuery.toLowerCase();

    // Search in "user" data
    this.searchResults.push(...this.data.user.filter(item =>
      item.name.toLowerCase().includes(searchQueryLower) ||
      item.email.toLowerCase().includes(searchQueryLower) ||
      item.role.toLowerCase().includes(searchQueryLower)
    ));

    // Search in "policy" data
    this.searchResults.push(...this.data.policy.filter(item =>
      item.policyholder.toLowerCase().includes(searchQueryLower) ||
      item.address.toLowerCase().includes(searchQueryLower) ||
      item.sumInsured.toString().includes(searchQueryLower)
    ));

    // Search in "bills" data
    this.searchResults.push(...this.data.bills.filter(item =>
      item.policies.policyholder.toLowerCase().includes(searchQueryLower) ||
      item.policies.sumInsured.toString().includes(searchQueryLower)
    ));

    // Search in "reciept" data
    this.searchResults.push(...this.data.reciept.filter(item =>
      item.bill.policies.policyholder.toLowerCase().includes(searchQueryLower) ||
      item.bill.netPremium.toString().includes(searchQueryLower) ||
      item.bill.grossPremium.toString().includes(searchQueryLower)
    ));
  }
}
