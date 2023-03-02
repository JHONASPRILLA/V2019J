gsap.from(".texto_carga", 1, {
    y: 40,
    opacity: 0,
    ease: "power8.inOut",
    delay: 1,
});

gsap.from(".carga", 2, {
    width: 0,
    ease: "power9.inOut",
    delay: 2,
});

gsap.to(".pre_carga", 3, {
    top: "-100%",
    ease: "power10.inOut",
    delay: 3,
})
