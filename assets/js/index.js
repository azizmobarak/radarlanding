const sent = () => {

    var sujet = document.getElementById('sujet').value;
    var message = document.getElementById('message').value;
    var email = document.getElementById('email').value;
    try {
        const url = fetch('', {
            method: 'post',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                from: email,
                subject: sujet,
                text: message
            })
        });
        const res = url.json();
        const data = res;
        alert(data);
    } catch (err) {
        console.log(err)
    }
}