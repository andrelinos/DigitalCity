import React from 'react';

import styles from '../styles/pages/home.module.scss';

export function HomePage(): JSX.Element {
  return (
    <div className={styles.container}>
      <div className={styles.homeBox}>
        <h1>O que deseja encontrar</h1>
        <div className={styles.homeBoxInputs}>
          <input type="text" placeholder="Pesquisar locais por nome" />
          <input type="text" placeholder="Pesquisar por distância (KM)" />
          <button>
            <img src="/assets/icons/search.svg" alt="Search" />
          </button>
        </div>
        <div className={styles.categoriesBox}>
          <div className={styles.categoryBox}>
            <span>Icon</span>
            <span>Saúde</span>
          </div>
          <div className={styles.categoryBox}>
            <span>Icon</span>
            <span>Farmácia</span>
          </div>
          <div className={styles.categoryBox}>
            <span>Icon</span>
            <span>Lanchonetes</span>
          </div>
          <div className={styles.categoryBox}>
            <span>Icon</span>
            <span>Serviços</span>
          </div>
          <div className={styles.categoryBox}>
            <span>Icon</span>
            <span>Lojas</span>
          </div>
          <div className={styles.categoryBox}>
            <span>Icon</span>
            <span>Internet</span>
          </div>
          <div className={styles.categoryBox}>
            <span>Icon</span>
            <span>Casa e Jardim</span>
          </div>
          <div className={styles.categoryBox}>
            <span>Icon</span>
            <span>Transportes</span>
          </div>
          <div className={styles.categoryBox}>
            <span>Icon</span>
            <span>Construção</span>
          </div>
          <div className={styles.categoryBox}>
            <span>Icon</span>
            <span>Automotivo</span>
          </div>
          <div className={styles.categoryBox}>
            <span>Icon</span>
            <span>Informática</span>
          </div>
          <div className={styles.categoryBox}>
            <span>Icon</span>
            <span>Hoteis</span>
          </div>
        </div>
      </div>
      {/* <!-- Home top --> */}
    </div>
  );
}
