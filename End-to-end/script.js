function validate(event) {
    event.preventDefault()

    const username = document.getElementById('username').value 
    const password = document.getElementById('password').value
    const confirmPassword = document.getElementById('confirmPassword').value

    console.log(username)

    if(username == 'admin' && password == 'admin' && confirmPassword == 'admin') {
        alert('Login efetuado com sucesso')
        document.getElementById('username').value = ''
        document.getElementById('password').value = ''
        document.getElementById('confirmPassword').value = ''
        document.getElementById('mensagemErro').style.display = 'none'
    } else if(username == '' || password == '' || confirmPassword == ''){
        document.getElementById('mensagemErro').style.display = 'block'
        document.getElementById("mensagemErro").innerHTML="É necessário preencher todos os campos";
    } else if (password != confirmPassword){
        document.getElementById('mensagemErro').style.display = 'block'
        document.getElementById("mensagemErro").innerHTML="As senhas não correspondem";
    } else {
        document.getElementById('mensagemErro').style.display = 'block'
        document.getElementById("mensagemErro").innerHTML="Dados incorretos";
    }
}