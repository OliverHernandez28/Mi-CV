
/* Menu */
((d) => {
    const $btnMenu = document.querySelector('.menu-btn'),
        $menu = document.querySelector('.menu')

    $btnMenu.addEventListener('click', (event) => {
        $btnMenu.firstElementChild.classList.toggle("none")
        $btnMenu.lastElementChild.classList.toggle("none")
        $menu.classList.toggle('is-active')
    })
    d.addEventListener('click', (event) => {
        if (!event.target.matches('.menu a')) return false;
        $btnMenu.firstElementChild.classList.remove("none")
        $btnMenu.lastElementChild.classList.add("none")
        $menu.classList.remove('is-active')
    })
    /* Formulario */
    const $form = d.querySelector(".contact-form"),
        $loader = d.querySelector(".contact-form-loader"),
        $response = d.querySelector(".contact-form-response");
    console.log($form)
    $form.addEventListener("submit", (e) => {
        e.preventDefault();
        $loader.classList.remove('none')
        fetch("https://formsubmit.co/ajax/oliverhernandez206@gmail.com", {
            method: 'POST',
            body: new FormData(e.target)
        }).then((resp) =>
            resp.ok ? resp.json() : Promise.reject(resp)
        )
            .then((resp) => {
                location.hash = '#gracias'
                $form.reset()
            }).catch(
                error => {
                    let message = error.statusText || "Ocurrio un error al enviar, intenta nuevamente. "
                    $response.querySelector("h3").innerHTML = 'Error ' + error.status + ': ' + message
                }
            ).finally(() => {
                $loader.classList.add("none")
                history.pushState({}, document.title, window.location.pathname);
                setTimeout(() => { location.hash = '#close' }, 3000)
            })
    })
})(document)

