const successColor = '#012b3a';
const cancelColor = '#fcd066';
class SwalService {
  constructor(swal) {
    this.swal = swal;
  }

  SuccessMessage(title, message) {
    return this.swal({
      icon: 'success',
      title: title,
      text: message,
      confirmButtonColor: successColor,
    });
  }

  WarningMessage(title, message) {
    return this.swal({
      icon: 'error',
      title: title,
      text: message,
      confirmButtonColor: successColor,
    });
  }

  InfoMessage(title, message) {
    return this.swal({
      icon: 'info',
      title: title,
      html: message,
      confirmButtonColor: successColor,
    });
  }

  ConfirmMessage(title, message, confirmButtonText, cancelButtonText) {
    return this.swal({
      title: title,
      text: message,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: successColor,
      cancelButtonColor: cancelColor,
      confirmButtonText: confirmButtonText,
      cancelButtonText: cancelButtonText,
      allowOutsideClick: false,
    });
  }
}

export default SwalService;