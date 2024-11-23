import styles from "./sass/styles.module.css"

export default function Banner() {
    return (
        <section className={styles.bannerPrincipal}>
            <img className={styles.imagemBanner} src="../../assets/png/banner-principal.png" alt="imagem-banner" />

            <div className={styles.bannerDiv}>
                <div className={styles.texts}>
                    <h1 className={styles.textH1}>Black Friday adidas com até 60% OFF!</h1>
                    <h2 className={styles.textH2}>Garanta as suas três listras</h2>
                </div>

                <div className={styles.buttonRegulamento}>
                    <p>Confira o regulamento</p>
                    <img src="../../assets/svg/seta-regulamento.svg" alt="seta-do-botao-regulamento" />
                </div>
            </div>
        </section>
    )
}