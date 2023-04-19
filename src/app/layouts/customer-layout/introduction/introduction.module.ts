import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IntroductionRoutingModule } from './introduction-routing.module';
import { IntroductionComponent } from './introduction.component';
import { TermsComponent } from './terms/terms.component';
import { BrandComponent } from './brand/brand.component';
import { PickYourSkuComponent } from './pick-your-sku/pick-your-sku.component';
import { PaymentConsultaionComponent } from './payment-consultaion/payment-consultaion.component';
import { ProductConsultationComponent } from './product-consultation/product-consultation.component';
import { AddNewCardComponent } from './payment-consultaion/add-new-card/add-new-card.component';
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
import { CancelAppointmentComponent } from './confirmation/cancel-appointment/cancel-appointment/cancel-appointment.component';
import { SavePopupComponent } from './sku-list/stock-sku-list/save-popup/save-popup.component';
import { GopaymentPopupComponent } from './sku-list/stock-sku-list/gopayment-popup/gopayment-popup.component';
import { CongratulationPopupComponent } from './selected-skus/congratulation-popup/congratulation-popup.component';
import { CongratsPopupComponent } from './bundle-skus/congrats-popup/congrats-popup.component';
import { CreateMockUpComponent } from './bundle-skus/create-mock-up/create-mock-up.component';



@NgModule({
  declarations: [
    IntroductionComponent,
    TermsComponent,
    BrandComponent,
    PickYourSkuComponent,
    PaymentConsultaionComponent,
    ProductConsultationComponent,
    AddNewCardComponent,
    ConsultationAppointmentComponent,
    InformationVerificationComponent,
    ConfirmationComponent,
    SkuSelectionComponent,
    StockSkuListComponent,
    AdditionalSkuMoqComponent,
    ConsultationProcessComponent,
    StandaloneSkuListComponent,
    ProfitCalculatorComponent,
    SelectedSkusComponent,
    BundleSkusComponent,
    CancelAppointmentComponent,
    SavePopupComponent,
    GopaymentPopupComponent,
    CongratulationPopupComponent,
    CongratsPopupComponent,
    CreateMockUpComponent,
  ],
  imports: [
    CommonModule,
    IntroductionRoutingModule,
    FormsModule
  ]
})
export class IntroductionModule { }
