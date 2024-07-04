import Swal from 'sweetalert2';
import '@sweetalert2/theme-default/default.css';

export const MySwal = Swal.mixin({
  customClass: {
    confirmButton: 'btn btn-success m-2',
    cancelButton: 'btn btn-danger m-2',
  },
  buttonsStyling: false,
  width: 'auto',
});
