import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CameraPageRoutingModule } from './camera-routing.module';

import { CameraPage } from './camera.page';
import { ImagePickerComponent } from '../image-picker/image-picker.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, CameraPageRoutingModule],
  declarations: [CameraPage, ImagePickerComponent],
})
export class CameraPageModule {}
