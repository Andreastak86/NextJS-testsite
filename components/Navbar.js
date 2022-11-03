import Link from "next/link";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.links}>
        <Link href='/'>Home</Link>
        <Link href='/about'>About</Link>
        <Link href='/profile'>Profile</Link>
        <Link href='/coins'>Crypto Coins</Link>
        <Link href='/chuck'>Chuck Norris Facts</Link>
      </div>
    </div>
  );
};

export default Navbar;
