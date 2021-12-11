const Footer = () => {
    return (
        
        <div className="container">
          
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                
                <p className="col-md-4 mb-0">&copy; 2021 Gustavo Moreira, Inc</p>
 
                <ul id="contato" class="nav col-md-4 justify-content-end">
                    <li className="nav-item"><a href="https://github.com/GustavoMoreiraDev" target="blank" className="nav-link px-2 contato">Git-Hub</a></li>
                    <li className="nav-item"><a href="https://www.instagram.com/gust4_s4ntos/?hl=pt-br" target="blank" className="nav-link px-2 contato">Instagran</a></li>
                    <li className="nav-item"><a href="https://www.linkedin.com/in/gustavo-moreira-aa488418b/" target="blank" className="nav-link px-2 contato">Linkedin</a></li>
                </ul>

            </footer>

        </div>
    )
}

export default Footer