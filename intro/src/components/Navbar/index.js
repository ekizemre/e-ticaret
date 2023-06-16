import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import { useAuth } from "../../contexts/AuthContext";
import { useBasket } from "../../contexts/BasketContext";


function Navbar() {
	const { loggedIn, user } = useAuth();
	const { items } = useBasket();

	return (
		<nav className={styles.nav}>
			<div className={styles.left}>
				<div className={styles.logo}>
					<Link to="/">Emre App</Link>
				</div>

				<ul className={styles.menu}>
					<li>
						<Link to="./pages/products">Ürünler</Link>
					</li>
				</ul>
			</div>

			<div className={styles.right}>
				{!loggedIn && (
					<>
						<Link to="/signin">
							<Button colorScheme="pink">Giriş Yap</Button>
						</Link>
						<Link to="/signup">
							<Button colorScheme="pink">Kayıt Ol</Button>
						</Link>
					</>
				)}

				{loggedIn && (
					<>
						{items.length > 0 && (
							<Link to="/basket">
								<Button colorScheme="pink" variant="outline">
									Basket ({items.length})
								</Button>
							</Link>
						)}

						{user?.role === "admin" && (
							<Link to="/admin">
								<Button colorScheme="pink" variant="ghost">
									Admin
								</Button>
							</Link>
						)}

						<Link to="/profile">
							<Button>Profil</Button>
						</Link>
					</>
				)}
			</div>
		</nav>
	);
}

export default Navbar;
