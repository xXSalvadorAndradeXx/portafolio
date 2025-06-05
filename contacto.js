
document.getElementById('contactForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const response = await fetch('https://script.google.com/macros/s/AKfycbyX0mOBSbEnrmgLa9WXDvhARp4I1wog7qLlsIvcjMLvz9OZe7pW5mgSHpnrWSUi-YcM/exec', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
            nombre: document.getElementById('nombre').value,
            email: document.getElementById('email').value,
            mensaje: document.getElementById('mensaje').value
        })
    });
    
    if (response.ok) {
        alert('Mensaje enviado con éxito');
        document.getElementById('contactForm').reset();
    } else {
        alert('Error al enviar el mensaje');
    }
});
