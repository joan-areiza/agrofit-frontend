document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        document.querySelector("#load-iframe-map").innerHTML = `
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3986.077649337081!2d-76.56189562618704!3d2.481245656897589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e30041a96b0a4ad%3A0x957747a58ee0c588!2sSENA%20CENTRO%20AGROPECUARIO!5e0!3m2!1ses!2sco!4v1787717476467!5m2!1ses!2sco"
                style="border:0;"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="strict-origin-when-cross-origin">
            </iframe>
        `;
    }, 500);
});