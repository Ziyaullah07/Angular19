import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'  // ✅ Makes the service globally available
})
export class CustomerService {
  constructor(private http: HttpClient) {}

  loadCustomers() {
    return this.http.get("https://freeapi.miniprojectideas.com/api/CarRentalApp/CreateNewCustomer");
  }
}
