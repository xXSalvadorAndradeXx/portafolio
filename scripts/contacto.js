
document.getElementById('contactForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const response = await fetch('https://script.google.com/macros/s/AKfycbzI7TxZO0U7vRszghLcqwx36VdvfvXHpXVn8xOozRXIjEmmrN51nv5Ctt4kVb7alFrp/exec', {
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
