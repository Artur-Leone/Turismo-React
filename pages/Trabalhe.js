import { useState } from 'react'


function Trabalhe(){

    const [email,setEmail]= useState()

    const [userEmail, setUserEmail] = useState ()

    function enviarEmail(e){
        e.preventDefault()
        setUserEmail(email)
        console.log(userEmail)

    }
    function limparEmail() {
        setEmail('')
    }
    function Alertar (){
        setEmail('')
        alert(`${userEmail} confirmado! \nFique atento ao seu E-mail!` )
    }

    return(
        <div className='containerHome'>
            <h1>Trabalhe Conosco</h1>

            <h3>Somos uma empresa de turismo consolidada no mercado, caso esteja interessado em entrar no time, cadastre
                seu E-mail abaixo, entraremos em contato solicitando o envio do currículo e lhe informando as etapas do processo
                seletivo.<br></br><br></br>
                Para mais informações acesse: <a href='https://www.linkedin.com/in/artur-leone/' target='_blank'>www.linkedin.com/in/artur-leone/</a>
            </h3>
            <form className='form'>
                
                <label>Cadastre seu E-mail:</label> <br></br>
                <input type="email" placeholder="Digite o email" onChange={(e) => setEmail(e.target.value)} />
                <br></br>
                <button type="submit" onClick={enviarEmail}>Enviar E-mail</button>
                
                {userEmail && (
                    <div>
                        <p>Confirme seu E-mail: {userEmail}</p>
                        <button onClick={limparEmail}>Limpar E-mail</button>
                        <button onClick={Alertar}>Confirma</button>
                    </div>
                )}
                
            </form>
        </div>
    )
}

export default Trabalhe