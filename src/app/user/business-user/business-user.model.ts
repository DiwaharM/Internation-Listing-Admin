import { PackDetailModel } from './business-package.model';
import { CustomerLog } from './customerLog.model';
export class BusinessUser {
   _id: string;
   firstName: string;
   lastName: string;
   companyName: string;
   country: string;
   emailId: string;
   mobileNumber: string;
   listingCompanyName: string;
   listingCountry: string;
   listingEmailId: string;
   listingMobileNumber: string;
   weblink: string;
   category: string;
   packageDetails: [PackDetailModel];
   logImageName: string;
   companyImageName: string;
   customerLogs: [CustomerLog];
}
