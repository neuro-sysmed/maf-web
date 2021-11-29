import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material/dialog';

import {VariantViewComponent} from './variant.model';

@Injectable({
  providedIn: 'root'
})
export class DomainNavigator {

  constructor( private router:Router,
               private dialog: MatDialog,
               )
  { };

  listUrl(): string {
    return '/variants';
  }

  listView(): boolean {
    this.router.navigateByUrl(this.listUrl());
    return true;
  }

  detailedUrl(id:number): string{
    return '/domains/'+id;
  }

  detailedView(id:number): boolean{
    this.router.navigateByUrl( this.detailedUrl(id) );
    return true;
  }

  createUrl(): string{
    return '/domains/add';
  }

  createView(): boolean {
    this.router.navigateByUrl(this.createUrl());
    return true;
  }


  editUrl(id:number): string{
    return `/domains/${id}/edit`;
  }


  editView(domainId:number): MatDialogRef<DomainEditComponent> {
    let dialogConfig = new MatDialogConfig();
    dialogConfig.data = domainId;
    const dialogRef = this.dialog.open(DomainEditComponent,
                                       dialogConfig);
    return dialogRef;
   }

  deleteView( domain: Domain ): MatDialogRef<ConfirmationComponent> {
    // delete at backend

    let dialogConfig = new MatDialogConfig();
    dialogConfig.data = "Delete domain " + domain.name;
    dialogConfig.role = 'alertdialog';

    let dialogRef = this.dialog.open(ConfirmationComponent,
                                     dialogConfig);
    return dialogRef;
  }


  editEmail(domainId: number, emailId:number): MatDialogRef<EmailEditComponent> {
    let dialogConfig = new MatDialogConfig();
    dialogConfig.data = {'domainId':domainId,
                         'emailId': emailId};
    const dialogRef = this.dialog.open(EmailEditComponent,
      dialogConfig);
    return dialogRef;
  }

  deleteEmail( email: Email ): MatDialogRef<ConfirmationComponent> {
    // delete at backend

    let dialogConfig = new MatDialogConfig();
    dialogConfig.data = "Delete email " + email.email;
    dialogConfig.role = 'alertdialog';

    let dialogRef = this.dialog.open(ConfirmationComponent,
      dialogConfig);
    return dialogRef;
  }

  editAlias(domainId: number, aliasId:number): MatDialogRef<AliasEditComponent> {
    let dialogConfig = new MatDialogConfig();
    dialogConfig.data = {'domainId':domainId,
                         'aliasId': aliasId};
    const dialogRef = this.dialog.open(AliasEditComponent,
      dialogConfig);
    return dialogRef;
  }

  deleteAlias( alias: Alias ): MatDialogRef<ConfirmationComponent> {
    // delete at backend

    let dialogConfig = new MatDialogConfig();
    dialogConfig.data = "Delete alias " + alias.source;
    dialogConfig.role = 'alertdialog';

    let dialogRef = this.dialog.open(ConfirmationComponent,
      dialogConfig);
    return dialogRef;
  }


}
