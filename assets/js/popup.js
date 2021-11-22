// details here https://sweetalert2.github.io/

let timerInterval
Swal.fire({
  icon: 'info',
  title: 'Working on it...',
  text: 'These web pages are still being created. Some things might not work yet.',
  timer: 5000,
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

