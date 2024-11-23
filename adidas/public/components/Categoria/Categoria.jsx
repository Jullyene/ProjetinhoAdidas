
import styles from "./sass/styles.module.css"

export default function Categoria () {
    return (
        <section className={styles.categoria}>
            <div className={styles.imagens}>
                <img src="../../assets/png/categoria-homem.png" alt="categoria-homem"/>
                <img src="../../assets/png/categoria-crianca.png" alt="categoria-criança"/>
            </div>

            <div className={styles.imagemCategoriaMulher}>
                <img src="../../assets/png/categoria-mulher.png" alt="categoria-mulher"/>
            </div>


            
        </section>
    )
}
