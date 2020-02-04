import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.css']
})
export class SingUpComponent implements OnInit {

  constructor() { }


  ngOnInit() {

    // validaciones del front-end
      $('.input100').each(function() {
          $(this).on('blur', function() {
              if ($(this).val() !== '') {
                  $(this).addClass('has-val');
              } else {
                  $(this).removeClass('has-val');
              }
          });
      });


      /*==================================================================
      [ Validate after type ]*/
      $('.validate-input .input100').each(function() {
          $(this).on('blur', function() {
              if (validate(this) === false) {
                  showValidate(this);
              } else {
                  $(this).parent().addClass('true-validate');
              }
          });
      });

      /*==================================================================
      [ Validate ]*/
      const inp = $('.validate-input .input100');

      $('.validate-form').on('submit', function() {
          let check = true;

          for (let i = 0; i < inp.length; i++) {
              if (validate(inp[i]) === false) {
                  showValidate(inp[i]);
                  check = false;
              }
          }

          return check;
      });


      $('.validate-form .input100').each(function() {
          $(this).focus(function() {
             hideValidate(this);
             $(this).parent().removeClass('true-validate');
          });
      });

      function validate (input: HTMLElement) {
          if ($(input).attr('type') === 'email' || $(input).attr('name') === 'email') {
              // tslint:disable-next-line: max-line-length
              if ($(input).val().toString().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                  return false;
              }
          } else {
              if ($(input).val() === '') {
                  return false;
              }
          }
      }

      function showValidate(input: HTMLElement) {
          const thisAlert = $(input).parent();

          $(thisAlert).addClass('alert-validate');
      }

      function hideValidate(input) {
          const thisAlert = $(input).parent();

          $(thisAlert).removeClass('alert-validate');
      }

// fin de validaciones del front-end
  }

}
