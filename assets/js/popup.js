// details here https://sweetalert2.github.io/

let timerInterval
Swal.fire({
  icon: 'info',
  title: 'Update in progress...',
  text: 'This site is being updated. File upload in progress, check back later.',
  timer: 4000,
  timerProgressBar: true,
  willClose: () => {
    clearInterval(timerInterval)
  }
}).then((result) => {
  /* Read more about handling dismissals below */
  if (result.dismiss === Swal.DismissReason.timer) {
    console.log('I was closed by the timer')
  }
})