import React from 'react';
import logo from '../../assets/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
	return (
		<nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom border">
			<div class="container-fluid">
				<a className="navbar-brand" href="#">
					<img className="ms-5" src={logo} alt="" width="71" height="33" />
				</a>
				<button
					class="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse justify-content-end me-5" id="navbarNav">
					<ul class="navbar-nav me-2">
						<li class="nav-item mx-1">
							<a class="nav-link fw-medium" aria-current="page" href="#">
              Comprar
							</a>
						</li>
						<li class="nav-item mx-1 fw-medium">
							<a class="nav-link" href="#">
              Alugar
							</a>
						</li>
						<li class="nav-item mx-1 fw-medium">
							<a class="nav-link" href="#">
              Descobrir
							</a>
						</li>
						<li class="nav-item mx-1 fw-medium">
							<a
								class="nav-link"
								href="#"
								tabindex="-1"
								aria-disabled="true">
								Financiamento
							</a>
						</li>
						<li class="nav-item mx-1 fw-medium">
							<a
								class="nav-link"
								href="#"
								tabindex="-1"
								aria-disabled="true">
								Anunciar
							</a>
						</li>
					</ul>
          <button className='btn btn-outline-dark'><FontAwesomeIcon icon={faUser} /> Entrar</button>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
