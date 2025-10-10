// details here https://sweetalert2.github.io/

let timerInterval
Swal.fire({
  icon: 'warning',
  title: 'Patience...',
  text: 'This feature is not yet available. Clicking won\'t do anything!',
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