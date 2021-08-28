import { 
  BackgroundNavbar,
  NavbarWrapper,
  NavigateNavbar,
  ListNav,
  HamburgerDisplay,
  NavbarMobileWrapper,
  ListNavMobile,
  NavbarMobileSection
} from '../styled/components/Navbar';
import { css } from '@emotion/css';
import Image from 'next/image';
import Link from 'next/link';
import PokemonLogo from '../public/LogoPokemon.png';
import Hamburger from '../public/icons/HamburgerIcon';
import { useState } from 'react';

export default function Navbar() {
  const [showNavMobile, setShowNavMobile] = useState(false)
  return (
    <BackgroundNavbar>
      <NavbarWrapper>
        <Link href="/" passHref>
          <a className={css`width: 130px;`}>
            <Image 
              src={PokemonLogo}
              width={300}
              height={160}
            />
          </a>
        </Link>
        <NavigateNavbar>
          <Link href="/" passHref>
            <span className={css`
              ${ListNav}
              &:hover {
                color: #B3A125;
              }
            `}
            >
              My Pokemon
            </span>
          </Link>
          <Link href="/" passHref>
            <span className={css`
              ${ListNav}
              &:hover {
                color: #B3A125;
              }
            `}
            >
              Pokemon List
            </span>
          </Link>
          <Hamburger 
            width={30}
            height={30}
            fill={'#FFFFFF'}
            className={css`${HamburgerDisplay}`}
            onClick={() => setShowNavMobile(!showNavMobile)}
          />
        </NavigateNavbar>
        {showNavMobile && (
          <NavbarMobileWrapper>
            <section className={css`${NavbarMobileSection}`}>
              <Link href="/" passHref>
                <span className={css`
                  ${ListNavMobile}
                  &:hover {
                    color: #B3A125;
                  }
                `}
                >
                  My Pokemon
                </span>
              </Link>
              <Link href="/" passHref>
                <span className={css`
                  ${ListNavMobile}
                  &:hover {
                    color: #B3A125;
                  }
                `}
                >
                  Pokemon List
                </span>
              </Link>
            </section>
          </NavbarMobileWrapper>
        )}
      </NavbarWrapper>
    </BackgroundNavbar>
  )
}