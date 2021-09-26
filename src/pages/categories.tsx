/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';

import styles from '../styles/pages/categories.module.scss';

export default function Categories(): JSX.Element {
  return (
    <div className={styles.container}>
      <div className={styles.containerItens}>
        <h1>Todas as categorias</h1>

        <div className={styles.homeBoxInputs}>
          <input type="text" placeholder="Pesquisar locais por nome" />
          <input type="text" placeholder="Pesquisar por distância (KM)" />
          <button>
            <img src="/assets/icons/search.svg" alt="Search" />
          </button>
        </div>

        <div className={styles.containerSelect}>
          <select name="select" id="options-cat">
            <option value="valor1">Valor 1</option>
            <option value="valor2" selected>
              Valor 2
            </option>
            <option value="valor3">Valor 3</option>
          </select>
        </div>
      </div>
      <div className="container-map"></div>
    </div>
  );
}
