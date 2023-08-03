import React from 'react';

const HorizontalCard = () => {
	return (
		
			<div class="container my-2">
				<div class="card">
					<div class="row">
						<div class="col-md-7">
							<div class="card-block m-4">
								<h6 class="card-title">
									Apartamento com 2 Quartos à venda, 80m² - Canto
								</h6>
								<p class="card-text fs-6 mt-4">
									Com 2 quartos, sendo 2 suítes, e 3 banheiros, você terá espaço
									de sobra para acomodar sua família com total privacidade. Além
									disso, o apartamento conta com uma ampla varanda, perfeita
									para desfrutar da vista panorâmica e relaxar.
								</p>
								<p class="card-text mt-4">
									80m² - 2 quartos - 3 banheiros - 2 vagas
								</p>
								<h6 class="card-text mt-4">R$ 890.000,00</h6>
								<p className='fw-light'>Condomínio R$ 570 | IPTU R$ 1.200</p>
								
								<a href="#" class="mt-2 btn btn-outline-dark">
									Mensagem
								</a>
							</div>
						</div>

						<div class="col-md-5">
            <div
								id="carouselExampleControls"
								class="carousel slide w-100"
								data-bs-ride="carousel">
								<div class="carousel-inner">
									<div class="carousel-item active d-block w-100">
										<img
											class="d-block"
											src="https://resizedimgs.zapimoveis.com.br/fit-in/800x360/named.images.sp/6d98fa799ac598530f0090b988f5555c/apartamento-com-2-quartos-a-venda-80m-no-canto-florianopolis.jpg"
											alt=""
										/>
									</div>
									<div class="carousel-item active">
										<img
											class="d-block"
											src="https://resizedimgs.zapimoveis.com.br/fit-in/800x360/named.images.sp/b58b48300120854538653b40dfb2d8fe/apartamento-com-2-quartos-a-venda-80m-no-canto-florianopolis.jpg"
											alt=""
										/>
									</div>
									<div class="carousel-item active">
										<img
											class="d-block"
											src="https://resizedimgs.zapimoveis.com.br/fit-in/800x360/named.images.sp/d66dc71950ac994869afbbc4fcdbc2b9/apartamento-com-2-quartos-a-venda-80m-no-canto-florianopolis.jpg"
											alt=""
										/>
									</div>

							<button
									class="carousel-control-prev"
									type="button"
									data-bs-target="#carouselExampleControls"
									data-bs-slide="prev">
									<span
										class="carousel-control-prev-icon"
										aria-hidden="true"></span>
									<span class="visually-hidden">Previous</span>
								</button>
								<button
									class="carousel-control-next"
									type="button"
									data-bs-target="#carouselExampleControls"
									data-bs-slide="next">
									<span
										class="carousel-control-next-icon"
										aria-hidden="true"></span>
									<span class="visually-hidden">Next</span>
								</button>
								</div>
							</div>

							{/* <div
								id="carouselExampleControls"
								class="carousel slide"
								data-bs-ride="carousel">
								<div class="carousel-inner">
									<div class="carousel-item active">
										<img
											src="https://resizedimgs.zapimoveis.com.br/fit-in/800x360/named.images.sp/6d98fa799ac598530f0090b988f5555c/apartamento-com-2-quartos-a-venda-80m-no-canto-florianopolis.jpg"
											class="d-block w-100"
											alt="..."
										/>
									</div>
									<div class="carousel-item">
										<img
											src="https://resizedimgs.zapimoveis.com.br/fit-in/800x360/named.images.sp/b58b48300120854538653b40dfb2d8fe/apartamento-com-2-quartos-a-venda-80m-no-canto-florianopolis.jpg"
											class="d-block w-100"
											alt="..."
										/>
									</div>
									<div class="carousel-item">
										<img
											src="https://resizedimgs.zapimoveis.com.br/fit-in/800x360/named.images.sp/d66dc71950ac994869afbbc4fcdbc2b9/apartamento-com-2-quartos-a-venda-80m-no-canto-florianopolis.jpg"
											class="d-block w-100"
											alt="..."
										/>
									</div>
								</div>
								<button
									class="carousel-control-prev"
									type="button"
									data-bs-target="#carouselExampleControls"
									data-bs-slide="prev">
									<span
										class="carousel-control-prev-icon"
										aria-hidden="true"></span>
									<span class="visually-hidden">Previous</span>
								</button>
								<button
									class="carousel-control-next"
									type="button"
									data-bs-target="#carouselExampleControls"
									data-bs-slide="next">
									<span
										class="carousel-control-next-icon"
										aria-hidden="true"></span>
									<span class="visually-hidden">Next</span>
								</button>
							</div> */}
						</div>
					</div>
				</div>
			</div>

		
	);
};

export default HorizontalCard;
