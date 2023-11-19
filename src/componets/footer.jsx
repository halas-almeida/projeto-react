export default function Footer() {
    return(
        <div className="footer">
            <div className="copy">
                <p>" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus iste ullam neque vero cupiditate, laboriosam optio quisquam rem consectetur iusto voluptas suscipit sint temporibus necessitatibus quia? Alias vel quia deserunt. "</p>
                <p>&copy;Halas Lima 2023</p>
            </div>
            <div className="form-user">
                <form>
                    <label for="email">E-mail </label>
                    <input id="email" type="email" placeholder="exemplo@gmail.com" />
                    <label for="password">Senha </label>
                    <input id="password" type="password" />
                    <input type="button" value="Enviar" />
                </form>
            </div>
        </div>
    )
}