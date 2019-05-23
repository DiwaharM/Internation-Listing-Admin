import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsService } from './settings.service';
import { SettingsRoutingModule } from './settings-routing.module';
import { AdsComponent } from './ads/ads.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import {
  MatSidenavModule,
  MatListModule,
  MatTooltipModule,
  MatOptionModule,
  MatSelectModule,
  MatMenuModule,
  MatSnackBarModule,
  MatGridListModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatRadioModule,
  MatCheckboxModule,
  MatCardModule,
  MatProgressSpinnerModule,
  MatExpansionModule,
  MatRippleModule,
  MatDialogModule,
  MatChipsModule,
  MatInputModule,
  MatFormFieldModule,
  MatStepperModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatTableModule,
} from '@angular/material';
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
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ViewPrivacyPolicyComponent } from './view-privacy-policy/view-privacy-policy.component';
import { TermsAndUseComponent } from './terms-and-use/terms-and-use.component';
import { ViewTermsAndUseComponent } from './view-terms-and-use/view-terms-and-use.component';
import { FaqComponent } from './faq/faq.component';
import { ViewFaqComponent } from './view-faq/view-faq.component';
import { EditfaqComponent } from './editfaq/editfaq.component';
@NgModule({
  declarations: [AdsComponent, ViewAdsComponent, BannersComponent, ViewBannersComponent, FooterComponent, ViewFooterComponent, ContactUsComponent, ViewContactUsComponent, PromotionsComponent, ViewPromotionsComponent, SupportComponent, ViewSupportComponent, HeaderComponent, PrivacyPolicyComponent, ViewPrivacyPolicyComponent, TermsAndUseComponent, ViewTermsAndUseComponent, FaqComponent, ViewFaqComponent, EditfaqComponent],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    MatSidenavModule,
    MatListModule,
    MatTooltipModule,
    MatOptionModule,
    MatSelectModule,
    MatMenuModule,
    MatSnackBarModule,
    MatGridListModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatRadioModule,
    MatCheckboxModule,
    MatCardModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    MatExpansionModule,
    MatRippleModule,
    MatDialogModule,
    MatChipsModule,
    MatInputModule,
    MatFormFieldModule,
    MatStepperModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatTableModule
  ],
  providers:
   [
    SettingsService
   ]
})
export class SettingsModule { }
