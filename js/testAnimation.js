function startAnimation(){
  anime({
    targets: "#animation-box",
    left: '240px',
    rotate: -180,

    backgroundColor: '#FFF',
    borderRadius: 5,
    easing: 'easeInOutQuad',
    border: 4
  })
}