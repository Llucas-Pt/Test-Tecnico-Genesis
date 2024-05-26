document.getElementById('btnInserir').addEventListener('click', (e) => {
    e.preventDefault();

    const nome = document.getElementById("Nome").value;
    const dataNascimento = document.getElementById("DataNascimento").value;
    const sexo = document.getElementById("Sexo").value;
    const visitas = document.getElementById("Visitas").value.split(',');
    
    const url = 'http://localhost:3001/Cadastrotb'

    const data = {
        nome: nome,
        dataNascimento: dataNascimento,
        sexo: sexo,
        visitas: visitas
    };

    if(nome && dataNascimento && sexo && visitas != "" ) {
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            document.querySelectorAll("input").forEach(input => { input.value = "" });
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    } else {
        alert("Preencha todos os campos");
    }
});