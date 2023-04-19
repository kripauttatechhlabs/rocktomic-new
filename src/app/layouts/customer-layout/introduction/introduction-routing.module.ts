import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandComponent } from './brand/brand.component';
import { IntroductionComponent } from './introduction.component';
import { PickYourSkuComponent } from './pick-your-sku/pick-your-sku.component';
import { TermsComponent } from './terms/terms.component';
import {PaymentConsultaionComponent} from './payment-consultaion/payment-consultaion.component'
import{ ProductConsultationComponent } from './product-consultation/product-consultation.component'
import { ConsultationAppointmentComponent } from './consultation-appointment/consultation-appointment/consultation-appointment.component';
import { InformationVerificationComponent } from './information-verification/information-verification/information-verification.component';
import { ConfirmationComponent } from './confirmation/confirmation/confirmation.component';
import { SkuSelectionComponent } from './sku-selection/sku-selection/sku-selection.component';
import { StockSkuListComponent } from './sku-list/stock-sku-list/stock-sku-list.component';
import { AdditionalSkuMoqComponent } from './sku-moq/additional-sku-moq/additional-sku-moq.component';
import { ConsultationProcessComponent } from './consultation-process/consultation-process/consultation-process.component';
import { StandaloneSkuListComponent } from './standalone-sku-list/standalone-sku-list/standalone-sku-list.component';
import { ProfitCalculatorComponent } from './profit-calculator/profit-calculator/profit-calculator.component';
import { SelectedSkusComponent } from './selected-skus/selected-skus/selected-skus.component';
import { BundleSkusComponent } from './bundle-skus/bundle-skus/bundle-skus.component';
import { WelcomeContentComponent } from './welcome-content/welcome-content.component';

const routes: Routes = [
  {
    path:'',
    component:WelcomeContentComponent
  },
  {
    path: 'personal-information',
    component: IntroductionComponent
  },
  {
    path: 'terms',
    component: TermsComponent
  },
  {
    path: 'brand',
    component: BrandComponent
  },
  {
    path: 'sku',
    component: PickYourSkuComponent
  },
  {
    path: 'payment',
    component: PaymentConsultaionComponent
  },
  {
    path: 'product',
    component: ProductConsultationComponent
  },
  {
    path: 'appointment',
    component: ConsultationAppointmentComponent
  },
  {
    path: 'informationverification',
    component: InformationVerificationComponent
  },
  {
    path: 'confirmation',
    component: ConfirmationComponent
  }, 
  {
    path: 'skuselection', 
    component: SkuSelectionComponent
  },
  {
    path: 'stocklist', 
    component: StockSkuListComponent
  },
  {
    path: 'additionalsku', 
    component: AdditionalSkuMoqComponent
  },
  {
    path: 'consultationprocess', 
    component:ConsultationProcessComponent
  },
  {
    path : 'standaloneskulist',
    component: StandaloneSkuListComponent
  },
  {
    path: 'profitcalculator',
    component : ProfitCalculatorComponent
   },
   {
    path : 'selectedskus',
    component : SelectedSkusComponent
   },
   {
    path: 'bundlesku',
    component : BundleSkusComponent
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntroductionRoutingModule { }
