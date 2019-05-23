import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdsComponent } from './ads/ads.component';
import { ViewAdsComponent } from './view-ads/view-ads.component';
import { BannersComponent } from './banners/banners.component';
import { ViewBannersComponent } from './view-banners/view-banners.component';
import { FooterComponent } from './footer/footer.component';
import { ViewFooterComponent } from './view-footer/view-footer.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ViewContactUsComponent } from './view-contact-us/view-contact-us.component';
import { PromotionsComponent } from './promotions/promotions.component';
import { ViewPromotionsComponent } from './view-promotions/view-promotions.component';
import { SupportComponent } from './support/support.component';
import { ViewSupportComponent } from './view-support/view-support.component';
import { HeaderComponent } from './header/header.component';
import { ViewPrivacyPolicyComponent } from './view-privacy-policy/view-privacy-policy.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermsAndUseComponent } from './terms-and-use/terms-and-use.component';
import { ViewTermsAndUseComponent } from './view-terms-and-use/view-terms-and-use.component';
import { FaqComponent } from './faq/faq.component';
import { ViewFaqComponent } from './view-faq/view-faq.component';
import { EditfaqComponent } from './editfaq/editfaq.component';

const routes: Routes = [
  {
    path: 'addhotproducts',
    component: AdsComponent
  },
  {
    path: 'viewhotproducts',
    component: ViewAdsComponent
  },
  {
    path: 'addbanners',
    component: BannersComponent
  },
  {
    path: 'viewbanners',
    component: ViewBannersComponent
  },
  {
    path:  'footer',
    component: FooterComponent
  },
  {
    path:  'viewfooter',
    component: ViewFooterComponent
  },
  {
    path:  'contactus',
    component: ContactUsComponent
  },
  {
    path:  'viewcontactus',
    component: ViewContactUsComponent
  },
  {
    path:  'addpromotions',
    component: PromotionsComponent
  },
  {
    path:  'viewpromotions',
    component: ViewPromotionsComponent
  },
  {
    path:  'support',
    component: SupportComponent
  },
  {
    path:  'viewsupport',
    component: ViewSupportComponent
  },
  {
    path: 'header',
    component: HeaderComponent
  },
  {
    path: 'viewprivacypolicy',
    component: ViewPrivacyPolicyComponent
  },
  {
    path:  'privacypolicy',
    component: PrivacyPolicyComponent
  },
  {
    path:  'termsanduse',
    component: TermsAndUseComponent
  },
  {
    path:  'viewtermsanduse',
    component: ViewTermsAndUseComponent
  },
  {
    path:  'faq',
    component: FaqComponent
  },
  {
    path:  'viewfaq',
    component: ViewFaqComponent
  },
  {
    path: 'editfaq/:id',
    component: EditfaqComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
