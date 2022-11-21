import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { RestService } from 'src/app/core/rest.service';
import { Option } from 'src/app/core/models/option'
import { ENTITY_TYPE_LIST, CURRENCY_TYPE_LIST } from 'src/app/core/constants';
import { PostResult } from 'src/app/core/models/postResult';

@Component({
  selector: 'app-adding-donation',
  templateUrl: './adding-donation.component.html',
  styleUrls: ['./adding-donation.component.scss']
})
export class AddingDonationComponent implements OnInit {
  form:FormGroup;
  entityTypeList :Option[] = ENTITY_TYPE_LIST;
  currencyTypeList :Option[] = CURRENCY_TYPE_LIST;
  constructor(
    private fb: FormBuilder,
    private restService: RestService
  ) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = new FormGroup({
      entityName: new FormControl(),
      amountOfDonation: new FormControl(),
      entityType: new FormControl(),
      purposeOfDonation: new FormControl(),
      conditionsDonation: new FormControl(),
      currencyType: new FormControl(),
      exchangeRate: new FormControl()
  });
  }

  onSubmit(){
    let params = this.form.getRawValue();
    console.log(params);
    
    this.restService.post<PostResult[]>('Donations/CreateDonation', params).subscribe(
      (res: PostResult[]) => {        
        console.log(res);
      },
      (error: HttpErrorResponse) => alert(`שגיאת שרת`)
    );
  }

  cleareFrom(){
    this.form.reset();
  }
}
