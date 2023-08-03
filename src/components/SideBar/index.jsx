import React from 'react';
import './style.css';
import PropertyCard from '../PropertyCard';
import HorizontalCard from '../HorizontalCard';

const SideBar = () => {
	return (
		<>
			<div class="container d-flex">
				<div class="col-3 bg-light vh-100">
					<div className="d-flex justify-content-center">
						<a href="#" class="m-2 text-decoration-none fw-bold text-black">
							Comprar
						</a>
						<a href="#" class="m-2 text-decoration-none fw-bold text-black">
							Alugar
						</a>
					</div>
					<div class="list-group p-2 list-group-flush overflow-auto h-100">
						<label htmlFor="">Tipo de Imóvel</label>
						<select
							class="form-select my-2"
							aria-label="Default select example">
							<option selected>Todos os imóveis</option>
							<option value="1">Apartamento</option>
							<option value="2">Casa</option>
							<option value="3">Casa em Condomínio</option>
							<option value="3">Terreno</option>
						</select>
						<hr />
						<div class="row">
							<label htmlFor="">Preço</label>
							<div class="col">
								<label className="fs-6">Mínimo</label>
								<input type="text" class="form-control" placeholder="R$" />
							</div>
							<div class="col">
								<label htmlFor="">Máximo</label>
								<input type="text" class="form-control" placeholder="R$" />
							</div>
						</div>

						<div class="row mt-2">
							<label htmlFor="">Preço do Condimínio</label>
							<div class="col">
								<label className="fs-6">Mínimo</label>
								<input type="text" class="form-control" placeholder="R$" />
							</div>
							<div class="col">
								<label htmlFor="">Máximo</label>
								<input type="text" class="form-control" placeholder="R$" />
							</div>
						</div>
						<hr />
						<div class="row">
							<label htmlFor="">Quartos</label>
							<div className="d-flex">
								<div class="form-check ms-3">
									<input
										class="form-check-input"
										type="checkbox"
										value=""
										id="flexCheckDefault"
									/>
									<label class="form-check-label" for="flexCheckDefault">
										1
									</label>
								</div>
								<div class="form-check ms-3">
									<input
										class="form-check-input"
										type="checkbox"
										value=""
										id="flexCheckChecked"
									/>
									<label class="form-check-label" for="flexCheckChecked">
										2
									</label>
								</div>
								<div class="form-check ms-3">
									<input
										class="form-check-input"
										type="checkbox"
										value=""
										id="flexCheckChecked"
									/>
									<label class="form-check-label" for="flexCheckChecked">
										3
									</label>
								</div>
								<div class="form-check ms-3">
									<input
										class="form-check-input"
										type="checkbox"
										value=""
										id="flexCheckChecked"
									/>
									<label class="form-check-label" for="flexCheckChecked">
										4+
									</label>
								</div>
							</div>
						</div>
						<div class="row">
							<label htmlFor="">Vagas</label>
							<div className="d-flex">
								<div class="form-check ms-3">
									<input
										class="form-check-input"
										type="checkbox"
										value=""
										id="flexCheckDefault"
									/>
									<label class="form-check-label" for="flexCheckDefault">
										1
									</label>
								</div>
								<div class="form-check ms-3">
									<input
										class="form-check-input"
										type="checkbox"
										value=""
										id="flexCheckChecked"
									/>
									<label class="form-check-label" for="flexCheckChecked">
										2
									</label>
								</div>
								<div class="form-check ms-3">
									<input
										class="form-check-input"
										type="checkbox"
										value=""
										id="flexCheckChecked"
									/>
									<label class="form-check-label" for="flexCheckChecked">
										3
									</label>
								</div>
								<div class="form-check ms-3">
									<input
										class="form-check-input"
										type="checkbox"
										value=""
										id="flexCheckChecked"
									/>
									<label class="form-check-label" for="flexCheckChecked">
										4+
									</label>
								</div>
							</div>
						</div>
						<hr />
						<div class="row">
							<label htmlFor="">Área do Imóvel</label>
							<div class="col">
								<label className="fs-6">Mínimo</label>
								<input type="text" class="form-control" placeholder="m²" />
							</div>
							<div class="col">
								<label htmlFor="">Máximo</label>
								<input type="text" class="form-control" placeholder="m²" />
							</div>
						</div>
                        <hr />
						<div class="row">
							<label htmlFor="">Código do Imóvel</label>
							<div class="col">
								<input type="text" class="form-control" placeholder="Digite o código do imóvel" />
							</div>					
						</div>
                        <hr />
                        <div className="d-flex justify-content-center">
						<button class="btn btn-outline-dark mx-2">
							Limpar
						</button>
						<button class="btn btn-outline-dark mx-2">
							Buscar
						</button>
					</div>
					</div>
				</div>

				<div class="row">
					<div>
						<div class="container">
							<h6 class="m-4">873 imóveis à venda em Florianópolis</h6>
						{/* <PropertyCard /> */}
						<HorizontalCard />
						<HorizontalCard />
						<HorizontalCard />
						<HorizontalCard />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default SideBar;
