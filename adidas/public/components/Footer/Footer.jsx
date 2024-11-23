import styles from "./sass/styles.module.css"

export default function Footer() {
    return (
        <footer className={styles.footer}>
           

                {/* Explore */}
                <div className={styles.texts}>
                    <p  className={styles.titleDiv}>Explore</p>
                    <div className={styles.sectionSobre}>
                        <a href="#"> Encontre uma loja Adidas</a>
                        <a href="#">Cadastre-se para receber Novidades</a>
                        <a href="#">Adidas Adiclub</a>
                    </div>
                </div>

                <div className={styles.texts}>
                    <p className={styles.titleDiv}>Ajuda</p>
                    <div className={styles.sectionSobre}>
                        <a href="#"> Dúvidas Gerais</a>
                        <a href="#">Encontre seu tamanho</a>
                        <a href="#">Fale conosco</a>
                    </div>
                </div>


                <div className={styles.texts}>
                    <p className={styles.titleDiv}>Redes Sociais</p>
                    <div className={styles.redesFooter}>
                        <img src="../../assets/png/youtube.png" alt="icone-youtube" />
                        <img src="../../assets/png/facebook.png" alt="icone-facebook" />
                        <img src="../../assets/png/instagram.png" alt="icone-instagram" />
                        <img src="../../assets/png/pinterest.png" alt="icone-pinterest" />
                        <img src="../../assets/png/tiktok.png" alt="icone-tiktok" />
                        <img src="../../assets/png/twitter.png" alt="icone-twitter" />
                    </div>
                </div>

          
        </footer>
    )
}