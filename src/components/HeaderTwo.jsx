"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
const HeaderTwo = () => {
  const [active, setActive] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    var offCanvasNav = document.getElementById("offcanvas-navigation");
    var offCanvasNavSubMenu = offCanvasNav.querySelectorAll(".sub-menu");

    for (let i = 0; i < offCanvasNavSubMenu.length; i++) {
      offCanvasNavSubMenu[i].insertAdjacentHTML(
        "beforebegin",
        "<span class='mean-expand-class'>+</span>"
      );
    }

    var menuExpand = offCanvasNav.querySelectorAll(".mean-expand-class");
    var numMenuExpand = menuExpand.length;

    function sideMenuExpand() {
      if (this.parentElement.classList.contains("active") === true) {
        this.parentElement.classList.remove("active");
      } else {
        for (let i = 0; i < numMenuExpand; i++) {
          menuExpand[i].parentElement.classList.remove("active");
        }
        this.parentElement.classList.add("active");
      }
    }

    for (let i = 0; i < numMenuExpand; i++) {
      menuExpand[i].addEventListener("click", sideMenuExpand);
    }
    window.onscroll = () => {
      if (window.pageYOffset < 150) {
        setScroll(false);
      } else if (window.pageYOffset > 150) {
        setScroll(true);
      }
      return () => (window.onscroll = null);
    };
  }, []);

  const mobileMenu = () => {
    setActive(!active);
  };
  return (
    <header className="nav-header header-layout2">
      <div className="header-top">
        <div className="container">
          <div className="row justify-content-center justify-content-lg-between align-items-center gy-2">
            <div className="col-auto d-none d-lg-block">
              <div className="header-logo">
                <Link href="/">
                  <img src="assets/img/logo.svg" alt="Fixturbo" />
                </Link>
              </div>
            </div>
            <div className="col-auto">
              <div className="header-grid-info">
                <ul>
                  <li>
                    <div className="icon">
                      <i className="fas fa-clock" />
                    </div>
                    <div className="header-grid-info-details">
                      <p>Sunday - Friday:</p>
                      <h6>9 am - 8 pm</h6>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="fas fa-map-marker-alt" />
                    </div>
                    <div className="header-grid-info-details">
                      <p>6391 Elgin St. Celina, Delaware</p>
                      <h6>Kentucky </h6>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`sticky-wrapper ${scroll && "sticky"}`}>
        {/* Main Menu Area */}
        <div className="menu-area">
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-auto header-navbar-logo">
                <div className="header-logo">
                  <Link href="/">
                    <img src="assets/img/logo-white.svg" alt="Fixturbo" />
                  </Link>
                </div>
              </div>
              <div className="col-auto">
                <nav className="main-menu d-none d-lg-inline-block">
                  <ul>
                    <li className="menu-item">
                      <Link href="/">Home</Link>
                    </li>
                    <li>
                      <Link href="/about">About Us</Link>
                    </li>
                    <li className="menu-item">
                      <Link href="/service">Services</Link>
                    </li>
                    <li className="menu-item">
                      <Link href="/blog">Blog</Link>
                    </li>
                    {/* <li className="menu-item-has-children">
                      <Link href="#">Pages</Link>
                      <ul className="sub-menu">
                        <li>
                          <Link href="/team">Team Page</Link>
                        </li>
                        <li>
                          <Link href="/team-details">Team Details</Link>
                        </li>
                        <li>
                          <Link href="/shop">Shop Page</Link>
                        </li>
                        <li>
                          <Link href="/shop-details">Shop Details</Link>
                        </li>
                        <li>
                          <Link href="/cart">Cart</Link>
                        </li>
                        <li>
                          <Link href="/checkout">Checkout</Link>
                        </li>
                        <li>
                          <Link href="/wishlist">Wishlist</Link>
                        </li>
                      </ul>
                    </li> */}
                    <li>
                      <Link href="/contact">Contact</Link>
                    </li>
                  </ul>
                </nav>
                <div className="navbar-right d-inline-flex d-lg-none">
                  <button
                    type="button"
                    className="menu-toggle icon-btn"
                    onClick={mobileMenu}
                  >
                    <i className="fas fa-bars" />
                  </button>
                </div>
              </div>
              <div className="col-auto d-xl-block d-none">
                <div className="social-links">
                  <Link href="https://www.facebook.com/fixturbo">
                    <i className="fab fa-facebook-f" />
                  </Link>
                  <Link href="https://www.instagram.com/fixturbo">
                    <i className="fab fa-instagram" />
                  </Link>
                  <Link href="https://www.twitter.com/fixturbo">
                    <i className="fab fa-twitter" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu-wrapper  ${active && "body-visible"}`}>
          <div className="mobile-menu-area">
            <div className="mobile-logo">
              <Link href="/">
                <img src="assets/img/logo.svg" alt="Fixturbo" />
              </Link>
              <button className="menu-toggle" onClick={mobileMenu}>
                <i className="fa fa-times" />
              </button>
            </div>
            <div className="mobile-menu">
              <ul id="offcanvas-navigation">
              <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link href="/service">Services</Link>
                </li>
                <li>
                  <Link href="/blog">Blog</Link>
                </li>
                {/* <li className="menu-item-has-children submenu-item-has-children">
                  <Link href="#">Pages</Link>
                  <ul className="sub-menu submenu-class">
                    <li>
                      <Link href="/team">Team Page</Link>
                    </li>
                    <li>
                      <Link href="/team-details">Team Details</Link>
                    </li>
                    <li>
                      <Link href="/shop">Shop Page</Link>
                    </li>
                    <li>
                      <Link href="/shop-details">Shop Details</Link>
                    </li>
                    <li>
                      <Link href="/cart">Cart</Link>
                    </li>
                    <li>
                      <Link href="/checkout">Checkout</Link>
                    </li>
                    <li>
                      <Link href="/wishlist">Wishlist</Link>
                    </li>
                  </ul>
                </li> */}
                {/* <li className="menu-item-has-children submenu-item-has-children">
                  <Link href="#">Project</Link>
                  <ul className="sub-menu submenu-class">
                    <li>
                      <Link href="/project">Projects</Link>
                    </li>
                    <li>
                      <Link href="/project-details">Project Details</Link>
                    </li>
                  </ul>
                </li>
                <li className="menu-item-has-children submenu-item-has-children">
                  <Link href="#">Service</Link>
                  <ul className="sub-menu submenu-class">
                    <li>
                      <Link href="/service">Service</Link>
                    </li>
                    <li>
                      <Link href="/service-details">Service Details</Link>
                    </li>
                  </ul>
                </li>
                <li className="menu-item-has-children submenu-item-has-children">
                  <Link href="#">Shop</Link>
                  <ul className="sub-menu submenu-class">
                    <li>
                      <Link href="/shop">Shop</Link>
                    </li>
                    <li>
                      <Link href="/shop-details">Shop Details</Link>
                    </li>
                    <li>
                      <Link href="/cart">Cart</Link>
                    </li>
                    <li>
                      <Link href="/checkout">Checkout</Link>
                    </li>
                    <li>
                      <Link href="/wishlist">Wishlist</Link>
                    </li>
                  </ul>
                </li>
                <li className="menu-item-has-children submenu-item-has-children">
                  <Link href="#">Blog</Link>
                  <ul className="sub-menu submenu-class">
                    <li>
                      <Link href="/blog">Blog</Link>
                    </li>
                    <li>
                      <Link href="/blog-details">Blog Details</Link>
                    </li>
                  </ul>
                </li> */}
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderTwo;
