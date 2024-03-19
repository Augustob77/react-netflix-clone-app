import styles from './header.module.css'

export function Header({black}) {
    return (
        <header className={black ? styles.black : ''}>
            <div className={styles.headerLogo}>
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="Neflix" />   
                </a>
            </div>
            <div className={styles.headerUser}>
                <a href="#">
                    <img src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg" alt="Usuário" />
                </a>
            </div>
        </header>
    )
}