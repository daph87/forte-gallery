import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  public contact = {
    name: "",
    email: "",
    phone:"",
    subject:"",
    message:""
  };

  constructor(private contactService: ContactService, private modalService: NgbModal, private router: Router) { }

  ngOnInit() {
   
  }

  public sendMessage(content): void {
   // open modal
   this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' })
   // send email
    this.contactService.sendMail(this.contact).subscribe(() => {}, err => console.log(err.message));
    
  }

  public close(): void {
    this.router.navigateByUrl('/home');
    this.getDismissReason('Cross click');
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}