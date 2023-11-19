import { CanActivateFn } from '@angular/router';
import { DataServiceService } from './service/data-service.service';

export const authGuard: CanActivateFn = (route, state) => {

  const dataService = new DataServiceService(); // You might want to inject this properly in a real application
  const userRole = dataService.role;


 
  return true;
};
