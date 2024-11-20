import styles from "./sass/styles.module.css"

export default function Header () {
    return(
        <header className={styles.header}>
            <div className={styles.itemsMenuTotalize}>

                <div>
                    <img src="../../assets/svg/logo-adidas.svg" alt="" />
                </div>

                <div className={styles.items}>
                    <img src="../../assets/svg/add-favorite.svg" alt="add-favorite" />
                    <img src="../../assets/svg/sacola-compra.svg" alt="sacola-compra" />
                    <img src="../../assets/svg/menu-hamburguer.svg" alt="menu" />
                </div>
              
            </div>
        </header>
    )
}